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

import { Order } from "./data-contracts";
import { HttpClient } from "./HttpClient";

export class Store {
  constructor(protected http: HttpClient) {}

  /**
   * No description
   *
   * @tags store
   * @name PlaceOrder
   * @operationId placeOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   * @response `200` successful operation
   * @response `400` Invalid Order
   */
  placeOrder(body: Order): Promise<Order> {
    return this.http.post(`/store/order`, body, {}, false);
  }

  /**
   * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   *
   * @tags store
   * @name GetOrderById
   * @operationId getOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   * @response `200` successful operation
   * @response `400` Invalid ID supplied
   * @response `404` Order not found
   */
  getOrderById(orderId: number): Promise<Order> {
    return this.http.get(`/store/order/${orderId}`);
  }

  /**
   * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   *
   * @tags store
   * @name DeleteOrder
   * @operationId deleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   * @response `400` Invalid ID supplied
   * @response `404` Order not found
   */
  deleteOrder(orderId: number): Promise<any> {
    return this.http.delete(`/store/order/${orderId}`).then(() => {});
  }

  /**
   * @description Returns a map of status codes to quantities
   *
   * @tags store
   * @name GetInventory
   * @operationId getInventory
   * @summary Returns pet inventories by status
   * @request GET:/store/inventory
   * @secure
   * @response `200` successful operation
   */
  getInventory(): Promise<Record<string, number>> {
    return this.http.get(`/store/inventory`);
  }
}
