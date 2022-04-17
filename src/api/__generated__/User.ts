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

import { LoginUserParams, User } from "./data-contracts";
import { HttpClient } from "./HttpClient";

export class User {
  constructor(protected http: HttpClient) {}

  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithArrayInput
   * @operationId createUsersWithArrayInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithArray
   * @response `default` successful operation
   */
  createUsersWithArrayInput(body: User[]): Promise<void> {
    return this.http.post(`/user/createWithArray`, body, {}, false);
  }

  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithListInput
   * @operationId createUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   * @response `default` successful operation
   */
  createUsersWithListInput(body: User[]): Promise<void> {
    return this.http.post(`/user/createWithList`, body, {}, false);
  }

  /**
   * No description
   *
   * @tags user
   * @name GetUserByName
   * @operationId getUserByName
   * @summary Get user by user name
   * @request GET:/user/{username}
   * @response `200` successful operation
   * @response `400` Invalid username supplied
   * @response `404` User not found
   */
  getUserByName(username: string): Promise<User> {
    return this.http.get(`/user/${username}`);
  }

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UpdateUser
   * @operationId updateUser
   * @summary Updated user
   * @request PUT:/user/{username}
   * @response `400` Invalid user supplied
   * @response `404` User not found
   */
  updateUser(username: string, body: User): Promise<any> {
    return this.http.put(`/user/${username}`, body).then(() => {});
  }

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name DeleteUser
   * @operationId deleteUser
   * @summary Delete user
   * @request DELETE:/user/{username}
   * @response `400` Invalid username supplied
   * @response `404` User not found
   */
  deleteUser(username: string): Promise<any> {
    return this.http.delete(`/user/${username}`).then(() => {});
  }

  /**
   * No description
   *
   * @tags user
   * @name LoginUser
   * @operationId loginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   * @response `200` successful operation
   * @response `400` Invalid username/password supplied
   */
  loginUser(query: LoginUserParams): Promise<string> {
    return this.http.get(`/user/login`, query);
  }

  /**
   * No description
   *
   * @tags user
   * @name LogoutUser
   * @operationId logoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   * @response `default` successful operation
   */
  logoutUser(): Promise<void> {
    return this.http.get(`/user/logout`);
  }

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name CreateUser
   * @operationId createUser
   * @summary Create user
   * @request POST:/user
   * @response `default` successful operation
   */
  createUser(body: User): Promise<void> {
    return this.http.post(`/user`, body, {}, false);
  }
}
