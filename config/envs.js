require("dotenv").config();

const ENV_DEFAULTS = [
  { key: "URL", value: "/sp/" },
  { key: "WS_URL", value: "/ws/" },
  { key: "PORT", value: 8082 },
];

ENV_DEFAULTS.forEach((envDefault) => {
  if (process.env[envDefault.key] === void 0) {
    process.env[envDefault.key] = envDefault.value;
  }
});

const PROD_ENV_KEYS_TO_DELIVER = ["NODE_ENV", "URL", "WS_URL"];

const attachEnvs = (extras = []) => {
  return {
    ...(process.env.NODE_ENV === "development"
      ? [...PROD_ENV_KEYS_TO_DELIVER]
      : [...PROD_ENV_KEYS_TO_DELIVER]
    ).reduce(
      (envs, envKey) => ({
        ...envs,
        [`process.env.${envKey}`]: JSON.stringify(process.env[envKey]),
      }),
      {
        "process.env": JSON.stringify({}),
      },
    ),
    ...extras.filter(Boolean).reduce(
      (envs, extraEnv) => ({
        ...envs,
        [`process.env.${extraEnv.key}`]: JSON.stringify(extraEnv.value),
      }),
      {},
    ),
  };
};

module.exports = {
  attachEnvs,
};
