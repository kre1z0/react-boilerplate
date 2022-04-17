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

import { ApiResponse, FindPetsByStatusParams, FindPetsByTagsParams, Pet } from "./data-contracts";
import { HttpClient, toFormData } from "./HttpClient";

export class Pet {
  constructor(protected http: HttpClient) {}

  /**
   * No description
   *
   * @tags pet
   * @name UploadFile
   * @operationId uploadFile
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   * @response `200` successful operation
   */
  uploadFile(
    petId: number,
    data: { additionalMetadata?: string; file?: File },
  ): Promise<ApiResponse> {
    return this.http.post(`/pet/${petId}/uploadImage`, toFormData(data));
  }

  /**
   * No description
   *
   * @tags pet
   * @name AddPet
   * @operationId addPet
   * @summary Add a new pet to the store
   * @request POST:/pet
   * @secure
   * @response `405` Invalid input
   */
  addPet(body: Pet): Promise<any> {
    return this.http.post(`/pet`, body, {}, false).then(() => {});
  }

  /**
   * No description
   *
   * @tags pet
   * @name UpdatePet
   * @operationId updatePet
   * @summary Update an existing pet
   * @request PUT:/pet
   * @secure
   * @response `400` Invalid ID supplied
   * @response `404` Pet not found
   * @response `405` Validation exception
   */
  updatePet(body: Pet): Promise<any> {
    return this.http.put(`/pet`, body).then(() => {});
  }

  /**
   * @description Multiple status values can be provided with comma separated strings
   *
   * @tags pet
   * @name FindPetsByStatus
   * @operationId findPetsByStatus
   * @summary Finds Pets by status
   * @request GET:/pet/findByStatus
   * @secure
   * @response `200` successful operation
   * @response `400` Invalid status value
   */
  findPetsByStatus(query: FindPetsByStatusParams): Promise<Pet[]> {
    return this.http.get(`/pet/findByStatus`, query);
  }

  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * @tags pet
   * @name FindPetsByTags
   * @operationId findPetsByTags
   * @summary Finds Pets by tags
   * @request GET:/pet/findByTags
   * @secure
   * @response `200` successful operation
   * @response `400` Invalid tag value
   */
  findPetsByTags(query: FindPetsByTagsParams): Promise<Pet[]> {
    return this.http.get(`/pet/findByTags`, query);
  }

  /**
   * @description Returns a single pet
   *
   * @tags pet
   * @name GetPetById
   * @operationId getPetById
   * @summary Find pet by ID
   * @request GET:/pet/{petId}
   * @secure
   * @response `200` successful operation
   * @response `400` Invalid ID supplied
   * @response `404` Pet not found
   */
  getPetById(petId: number): Promise<Pet> {
    return this.http.get(`/pet/${petId}`);
  }

  /**
   * No description
   *
   * @tags pet
   * @name UpdatePetWithForm
   * @operationId updatePetWithForm
   * @summary Updates a pet in the store with form data
   * @request POST:/pet/{petId}
   * @secure
   * @response `405` Invalid input
   */
  updatePetWithForm(petId: number, data: { name?: string; status?: string }): Promise<any> {
    return this.http.post(`/pet/${petId}`, toFormData(data)).then(() => {});
  }

  /**
   * No description
   *
   * @tags pet
   * @name DeletePet
   * @operationId deletePet
   * @summary Deletes a pet
   * @request DELETE:/pet/{petId}
   * @secure
   * @response `400` Invalid ID supplied
   * @response `404` Pet not found
   */
  deletePet(petId: number): Promise<any> {
    return this.http.delete(`/pet/${petId}`).then(() => {});
  }
}
