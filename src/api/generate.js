const _ = require("lodash");
const { resolve } = require("path");
const { generateApi } = require("swagger-typescript-api");

const FILE_NAMES = {
  dataContracts: "data-contracts",
  httpClient: "HttpClient",
  routeTypes: "route-types",
};

const outputPath = resolve(__dirname, "./__generated__");
const templatesPath = resolve(__dirname, "./templates");

if (!process.env.SWAGGER_URL) {
  console.error("Add SWAGGER_URL in script");
}

generateApi({
  url: process.env.SWAGGER_URL,
  output: outputPath,
  templates: templatesPath,
  generateClient: true,
  extractRequestParams: true,
  defaultResponseAsSuccess: true,
  modular: true,
  enumNamesAsValues: false,
  cleanOutput: true,
  hooks: {
    /** Starting point of the code generator (after loading the Swagger schema) */
    onInit: (config) => {
      return {
        ...config,
        fileNames: FILE_NAMES,
      };
    },
    /** Before parsing contract date */
    onCreateComponent: (component) => {
      if (component.rawTypeData && component.rawTypeData.properties) {
        _.each(component.rawTypeData.properties, (property, name) => {
          if (property) {
            component.rawTypeData.properties[name] = {
              ...property,
              nullable: false,
            };
          }
        });
      }

      return component;
    },
    /** When parsing a route */
    onCreateRoute: (route) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      transformPathInternalQueries(route);

      if (route.raw.tags && route.raw.tags.length) {
        const tag = route.raw.tags[0];

        route.raw.moduleName = tag;
        route.namespace = tag;
      }

      return route;
    },
    /** When parsing a schema (parts of a contract date, path/query parameters, etc., of any type) */
    onParseSchema: (original, parsed) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const postProcessSchema = _.get(postProcessParseSchemas, [
        parsed.typeIdentifier,
        parsed.name,
      ]);

      return postProcessSchema ? postProcessSchema(original, parsed) : parsed;
    },
    onPrepareConfig: (configuration) => {
      return configuration;
    },
  },
});

const transformPathInternalQueries = (route) => {
  if (_.includes(route.request.path, "#")) {
    const [fixedPath, rawInternalQuery] = _.split(route.request.path, "#");

    if (rawInternalQuery) {
      const internalQuery = _.compact(
        _.split(rawInternalQuery, "&").reduce((acc, param) => {
          const [name, value] = _.split(param, "=");

          return [...acc, value && `${name}: '${value}'`];
        }, []),
      ).join(", ");

      route.request.path = fixedPath;
      route.request.internalQuery = internalQuery;
    }
  }
};

const postProcessParseSchemas = {
  enum: {
    Permissions: (original, parsed) => {
      return {
        ...parsed,
        content: _.map(parsed.content, ({ key, type }) => {
          return {
            key,
            type,
            value: `"${
              key === "All" ? "read,write,configure" : _.words(key).map(_.lowerCase).join(",")
            }"`,
          };
        }),
      };
    },
  },
};
