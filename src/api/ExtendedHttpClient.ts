import { HttpClient } from "./__generated__/HttpClient";

export class ExtendedHttpClient extends HttpClient {
  protected onAuthError(): void {
    console.error("onAuthError");
  }
}
