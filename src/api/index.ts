import { Api } from "./Api";
import { ExtendedHttpClient as HttpClient } from "./ExtendedHttpClient";

export const api = new Api("");

export { HttpClient };

export * from "./__generated__/data-contracts";
