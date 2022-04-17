/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

enum HttpCodes {
  AuthFail = 401,
}

enum RequestMethods {
  Get = "GET",
  Post = "POST",
  Patch = "PATCH",
  Delete = "DELETE",
}

abstract class HttpClient {
  protected abstract onAuthError(): void;

  public get(url: string, query = {}): Promise<any> {
    return this.send(encodeURI(`${url}${getQueryString(query)}`), RequestMethods.Get);
  }

  public post(url: string, data = {}, query = {}, isFormData = true): Promise<any> {
    return this.send(
      encodeURI(`${url}${getQueryString(query)}`),
      RequestMethods.Post,
      data,
      isFormData,
    );
  }

  public patch(url: string, data = {}, query = {}, isFormData = true): Promise<any> {
    return this.send(
      encodeURI(`${url}${getQueryString(query)}`),
      RequestMethods.Patch,
      data,
      isFormData,
    );
  }

  public delete(url: string, query = {}): Promise<any> {
    return this.send(encodeURI(`${url}${getQueryString(query)}`), RequestMethods.Delete);
  }

  private send(
    url: string,
    method = RequestMethods.Post,
    data?: any,
    isFormData?: boolean,
  ): Promise<any> {
    return fetch(url, {
      method,
      headers: !isFormData
        ? {
            "Content-Type": "application/json;charset=UTF-8",
          }
        : {},
      body: isFormData ? data : data && JSON.stringify(data),
    }).then((response: any) => {
      return this.response(response);
    });
  }

  private response = async (response: any): Promise<any> => {
    const raw: string = await response.text();
    const parsed: any = raw ? JSON.parse(raw) : { success: response.ok };

    if (response.status === HttpCodes.AuthFail) {
      this.onAuthError && this.onAuthError();
    }

    if (response.ok) {
      return Promise.resolve(parsed);
    }

    return Promise.reject(parsed);
  };
}

function getQueryString(queryString: Record<string, string>): string {
  const result = Object.entries(queryString)
    .reduce((params, [key, value]) => {
      if (!key || typeof value === "undefined") return params;

      return [...params, `${key}=${value}`];
    }, [] as string[])
    .join("&");

  return result ? `?${result}` : "";
}

function toFormData(input: any) {
  return Object.keys(input).reduce((data, key) => {
    data.append(key, input[key]);
    return data;
  }, new FormData());
}

export { HttpClient, toFormData };
