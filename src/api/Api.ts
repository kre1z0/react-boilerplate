import { ExtendedHttpClient as HttpClient } from "./ExtendedHttpClient";
import { Store } from "./__generated__/Store";

export class Api {
  protected readonly http: HttpClient;
  readonly url: string;
  public store: Store;

  constructor(url: string) {
    this.http = new HttpClient();
    this.url = url;

    this.store = new Store(this.http);
  }
}
