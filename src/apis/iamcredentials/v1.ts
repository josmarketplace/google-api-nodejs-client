// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosResponseWithHTTP2,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace iamcredentials_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * IAM Service Account Credentials API
   *
   * Creates short-lived credentials for impersonating IAM service accounts. Disabling this API also disables the IAM API (iam.googleapis.com). However, enabling this API doesn&#39;t enable the IAM API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const iamcredentials = google.iamcredentials('v1');
   * ```
   */
  export class Iamcredentials {
    context: APIRequestContext;
    locations: Resource$Locations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.locations = new Resource$Locations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  export interface Schema$GenerateAccessTokenRequest {
    /**
     * The sequence of service accounts in a delegation chain. This field is required for [delegated requests](https://cloud.google.com/iam/help/credentials/delegated-request). For [direct requests](https://cloud.google.com/iam/help/credentials/direct-request), which are more common, do not specify this field. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    delegates?: string[] | null;
    /**
     * The desired lifetime duration of the access token in seconds. By default, the maximum allowed value is 1 hour. To set a lifetime of up to 12 hours, you can add the service account as an allowed value in an Organization Policy that enforces the `constraints/iam.allowServiceAccountCredentialLifetimeExtension` constraint. See detailed instructions at https://cloud.google.com/iam/help/credentials/lifetime If a value is not specified, the token's lifetime will be set to a default value of 1 hour.
     */
    lifetime?: string | null;
    /**
     * Required. Code to identify the scopes to be included in the OAuth 2.0 access token. See https://developers.google.com/identity/protocols/googlescopes for more information. At least one value required.
     */
    scope?: string[] | null;
  }
  export interface Schema$GenerateAccessTokenResponse {
    /**
     * The OAuth 2.0 access token.
     */
    accessToken?: string | null;
    /**
     * Token expiration time. The expiration time is always set.
     */
    expireTime?: string | null;
  }
  export interface Schema$GenerateIdTokenRequest {
    /**
     * Required. The audience for the token, such as the API or account that this token grants access to.
     */
    audience?: string | null;
    /**
     * The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    delegates?: string[] | null;
    /**
     * Include the service account email in the token. If set to `true`, the token will contain `email` and `email_verified` claims.
     */
    includeEmail?: boolean | null;
    /**
     * Include the organization number of the service account in the token. If set to `true`, the token will contain a `google.organization_number` claim. The value of the claim will be `null` if the service account isn't associated with an organization.
     */
    organizationNumberIncluded?: boolean | null;
  }
  export interface Schema$GenerateIdTokenResponse {
    /**
     * The OpenId Connect ID token. The token is a JSON Web Token (JWT) that contains a payload with claims. See the [JSON Web Token spec](https://tools.ietf.org/html/rfc7519) for more information. Here is an example of a decoded JWT payload: ``` { "iss": "https://accounts.google.com", "iat": 1496953245, "exp": 1496953245, "aud": "https://www.example.com", "sub": "107517467455664443765", "azp": "107517467455664443765", "email": "my-iam-account@my-project.iam.gserviceaccount.com", "email_verified": true, "google": { "organization_number": 123456 \} \} ```
     */
    token?: string | null;
  }
  /**
   * Represents a list of allowed locations for given service account.
   */
  export interface Schema$ServiceAccountAllowedLocations {
    /**
     * Output only. The hex encoded bitmap of the trust boundary locations
     */
    encodedLocations?: string | null;
    /**
     * Output only. The human readable trust boundary locations. For example, ["us-central1", "europe-west1"]
     */
    locations?: string[] | null;
  }
  export interface Schema$SignBlobRequest {
    /**
     * The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    delegates?: string[] | null;
    /**
     * Required. The bytes to sign.
     */
    payload?: string | null;
  }
  export interface Schema$SignBlobResponse {
    /**
     * The ID of the key used to sign the blob. The key used for signing will remain valid for at least 12 hours after the blob is signed. To verify the signature, you can retrieve the public key in several formats from the following endpoints: - RSA public key wrapped in an X.509 v3 certificate: `https://www.googleapis.com/service_accounts/v1/metadata/x509/{ACCOUNT_EMAIL\}` - Raw key in JSON format: `https://www.googleapis.com/service_accounts/v1/metadata/raw/{ACCOUNT_EMAIL\}` - JSON Web Key (JWK): `https://www.googleapis.com/service_accounts/v1/metadata/jwk/{ACCOUNT_EMAIL\}`
     */
    keyId?: string | null;
    /**
     * The signature for the blob. Does not include the original blob. After the key pair referenced by the `key_id` response field expires, Google no longer exposes the public key that can be used to verify the blob. As a result, the receiver can no longer verify the signature.
     */
    signedBlob?: string | null;
  }
  export interface Schema$SignJwtRequest {
    /**
     * The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    delegates?: string[] | null;
    /**
     * Required. The JWT payload to sign. Must be a serialized JSON object that contains a JWT Claims Set. For example: `{"sub": "user@example.com", "iat": 313435\}` If the JWT Claims Set contains an expiration time (`exp`) claim, it must be an integer timestamp that is not in the past and no more than 12 hours in the future.
     */
    payload?: string | null;
  }
  export interface Schema$SignJwtResponse {
    /**
     * The ID of the key used to sign the JWT. The key used for signing will remain valid for at least 12 hours after the JWT is signed. To verify the signature, you can retrieve the public key in several formats from the following endpoints: - RSA public key wrapped in an X.509 v3 certificate: `https://www.googleapis.com/service_accounts/v1/metadata/x509/{ACCOUNT_EMAIL\}` - Raw key in JSON format: `https://www.googleapis.com/service_accounts/v1/metadata/raw/{ACCOUNT_EMAIL\}` - JSON Web Key (JWK): `https://www.googleapis.com/service_accounts/v1/metadata/jwk/{ACCOUNT_EMAIL\}`
     */
    keyId?: string | null;
    /**
     * The signed JWT. Contains the automatically generated header; the client-supplied payload; and the signature, which is generated using the key referenced by the `kid` field in the header. After the key pair referenced by the `key_id` response field expires, Google no longer exposes the public key that can be used to verify the JWT. As a result, the receiver can no longer verify the signature.
     */
    signedJwt?: string | null;
  }
  /**
   * Represents a list of allowed locations for given workforce pool.
   */
  export interface Schema$WorkforcePoolAllowedLocations {
    /**
     * Output only. The hex encoded bitmap of the trust boundary locations
     */
    encodedLocations?: string | null;
    /**
     * Output only. The human readable trust boundary locations. For example, ["us-central1", "europe-west1"]
     */
    locations?: string[] | null;
  }
  /**
   * Represents a list of allowed locations for given workload identity pool.
   */
  export interface Schema$WorkloadIdentityPoolAllowedLocations {
    /**
     * Output only. The hex encoded bitmap of the trust boundary locations
     */
    encodedLocations?: string | null;
    /**
     * Output only. The human readable trust boundary locations. For example, ["us-central1", "europe-west1"]
     */
    locations?: string[] | null;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    workforcePools: Resource$Locations$Workforcepools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.workforcePools = new Resource$Locations$Workforcepools(this.context);
    }
  }

  export class Resource$Locations$Workforcepools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the trust boundary info for a given workforce pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iamcredentials.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const iamcredentials = google.iamcredentials('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await iamcredentials.locations.workforcePools.getAllowedLocations(
     *     {
     *       // Required. Resource name of workforce pool.
     *       name: 'locations/my-location/workforcePools/my-workforcePool',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "encodedLocations": "my_encodedLocations",
     *   //   "locations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAllowedLocations(
      params: Params$Resource$Locations$Workforcepools$Getallowedlocations,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAllowedLocations(
      params?: Params$Resource$Locations$Workforcepools$Getallowedlocations,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WorkforcePoolAllowedLocations>>;
    getAllowedLocations(
      params: Params$Resource$Locations$Workforcepools$Getallowedlocations,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAllowedLocations(
      params: Params$Resource$Locations$Workforcepools$Getallowedlocations,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WorkforcePoolAllowedLocations>,
      callback: BodyResponseCallback<Schema$WorkforcePoolAllowedLocations>
    ): void;
    getAllowedLocations(
      params: Params$Resource$Locations$Workforcepools$Getallowedlocations,
      callback: BodyResponseCallback<Schema$WorkforcePoolAllowedLocations>
    ): void;
    getAllowedLocations(
      callback: BodyResponseCallback<Schema$WorkforcePoolAllowedLocations>
    ): void;
    getAllowedLocations(
      paramsOrCallback?:
        | Params$Resource$Locations$Workforcepools$Getallowedlocations
        | BodyResponseCallback<Schema$WorkforcePoolAllowedLocations>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkforcePoolAllowedLocations>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkforcePoolAllowedLocations>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WorkforcePoolAllowedLocations>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Workforcepools$Getallowedlocations;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Locations$Workforcepools$Getallowedlocations;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/allowedLocations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WorkforcePoolAllowedLocations>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkforcePoolAllowedLocations>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Locations$Workforcepools$Getallowedlocations
    extends StandardParameters {
    /**
     * Required. Resource name of workforce pool.
     */
    name?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    serviceAccounts: Resource$Projects$Serviceaccounts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
      this.serviceAccounts = new Resource$Projects$Serviceaccounts(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    workloadIdentityPools: Resource$Projects$Locations$Workloadidentitypools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.workloadIdentityPools =
        new Resource$Projects$Locations$Workloadidentitypools(this.context);
    }
  }

  export class Resource$Projects$Locations$Workloadidentitypools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the trust boundary info for a given workload identity pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iamcredentials.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const iamcredentials = google.iamcredentials('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await iamcredentials.projects.locations.workloadIdentityPools.getAllowedLocations(
     *       {
     *         // Required. Resource name of workload identity pool.
     *         name: 'projects/my-project/locations/my-location/workloadIdentityPools/my-workloadIdentityPool',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "encodedLocations": "my_encodedLocations",
     *   //   "locations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAllowedLocations(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Getallowedlocations,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAllowedLocations(
      params?: Params$Resource$Projects$Locations$Workloadidentitypools$Getallowedlocations,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$WorkloadIdentityPoolAllowedLocations>
    >;
    getAllowedLocations(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Getallowedlocations,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAllowedLocations(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Getallowedlocations,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WorkloadIdentityPoolAllowedLocations>,
      callback: BodyResponseCallback<Schema$WorkloadIdentityPoolAllowedLocations>
    ): void;
    getAllowedLocations(
      params: Params$Resource$Projects$Locations$Workloadidentitypools$Getallowedlocations,
      callback: BodyResponseCallback<Schema$WorkloadIdentityPoolAllowedLocations>
    ): void;
    getAllowedLocations(
      callback: BodyResponseCallback<Schema$WorkloadIdentityPoolAllowedLocations>
    ): void;
    getAllowedLocations(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workloadidentitypools$Getallowedlocations
        | BodyResponseCallback<Schema$WorkloadIdentityPoolAllowedLocations>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WorkloadIdentityPoolAllowedLocations>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WorkloadIdentityPoolAllowedLocations>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$WorkloadIdentityPoolAllowedLocations>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workloadidentitypools$Getallowedlocations;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workloadidentitypools$Getallowedlocations;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/allowedLocations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WorkloadIdentityPoolAllowedLocations>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WorkloadIdentityPoolAllowedLocations>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Workloadidentitypools$Getallowedlocations
    extends StandardParameters {
    /**
     * Required. Resource name of workload identity pool.
     */
    name?: string;
  }

  export class Resource$Projects$Serviceaccounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates an OAuth 2.0 access token for a service account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iamcredentials.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const iamcredentials = google.iamcredentials('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await iamcredentials.projects.serviceAccounts.generateAccessToken(
     *     {
     *       // Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     *       name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "delegates": [],
     *         //   "lifetime": "my_lifetime",
     *         //   "scope": []
     *         // }
     *       },
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessToken": "my_accessToken",
     *   //   "expireTime": "my_expireTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateAccessToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateAccessToken(
      params?: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GenerateAccessTokenResponse>>;
    generateAccessToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateAccessToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>,
      callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>
    ): void;
    generateAccessToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateaccesstoken,
      callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>
    ): void;
    generateAccessToken(
      callback: BodyResponseCallback<Schema$GenerateAccessTokenResponse>
    ): void;
    generateAccessToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Generateaccesstoken
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateAccessTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GenerateAccessTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Generateaccesstoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Serviceaccounts$Generateaccesstoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:generateAccessToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateAccessTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateAccessTokenResponse>(parameters);
      }
    }

    /**
     * Generates an OpenID Connect ID token for a service account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iamcredentials.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const iamcredentials = google.iamcredentials('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await iamcredentials.projects.serviceAccounts.generateIdToken({
     *     // Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audience": "my_audience",
     *       //   "delegates": [],
     *       //   "includeEmail": false,
     *       //   "organizationNumberIncluded": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateIdToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateIdToken(
      params?: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GenerateIdTokenResponse>>;
    generateIdToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateIdToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateIdTokenResponse>,
      callback: BodyResponseCallback<Schema$GenerateIdTokenResponse>
    ): void;
    generateIdToken(
      params: Params$Resource$Projects$Serviceaccounts$Generateidtoken,
      callback: BodyResponseCallback<Schema$GenerateIdTokenResponse>
    ): void;
    generateIdToken(
      callback: BodyResponseCallback<Schema$GenerateIdTokenResponse>
    ): void;
    generateIdToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Generateidtoken
        | BodyResponseCallback<Schema$GenerateIdTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateIdTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateIdTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GenerateIdTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Generateidtoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Generateidtoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:generateIdToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateIdTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateIdTokenResponse>(parameters);
      }
    }

    /**
     * Returns the trust boundary info for a given service account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iamcredentials.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const iamcredentials = google.iamcredentials('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await iamcredentials.projects.serviceAccounts.getAllowedLocations(
     *     {
     *       // Required. Resource name of service account.
     *       name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "encodedLocations": "my_encodedLocations",
     *   //   "locations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAllowedLocations(
      params: Params$Resource$Projects$Serviceaccounts$Getallowedlocations,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAllowedLocations(
      params?: Params$Resource$Projects$Serviceaccounts$Getallowedlocations,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ServiceAccountAllowedLocations>>;
    getAllowedLocations(
      params: Params$Resource$Projects$Serviceaccounts$Getallowedlocations,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAllowedLocations(
      params: Params$Resource$Projects$Serviceaccounts$Getallowedlocations,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ServiceAccountAllowedLocations>,
      callback: BodyResponseCallback<Schema$ServiceAccountAllowedLocations>
    ): void;
    getAllowedLocations(
      params: Params$Resource$Projects$Serviceaccounts$Getallowedlocations,
      callback: BodyResponseCallback<Schema$ServiceAccountAllowedLocations>
    ): void;
    getAllowedLocations(
      callback: BodyResponseCallback<Schema$ServiceAccountAllowedLocations>
    ): void;
    getAllowedLocations(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Getallowedlocations
        | BodyResponseCallback<Schema$ServiceAccountAllowedLocations>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceAccountAllowedLocations>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceAccountAllowedLocations>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ServiceAccountAllowedLocations>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Getallowedlocations;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Serviceaccounts$Getallowedlocations;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/allowedLocations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ServiceAccountAllowedLocations>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceAccountAllowedLocations>(
          parameters
        );
      }
    }

    /**
     * Signs a blob using a service account's system-managed private key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iamcredentials.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const iamcredentials = google.iamcredentials('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await iamcredentials.projects.serviceAccounts.signBlob({
     *     // Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "delegates": [],
     *       //   "payload": "my_payload"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "keyId": "my_keyId",
     *   //   "signedBlob": "my_signedBlob"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    signBlob(
      params: Params$Resource$Projects$Serviceaccounts$Signblob,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    signBlob(
      params?: Params$Resource$Projects$Serviceaccounts$Signblob,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SignBlobResponse>>;
    signBlob(
      params: Params$Resource$Projects$Serviceaccounts$Signblob,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    signBlob(
      params: Params$Resource$Projects$Serviceaccounts$Signblob,
      options: MethodOptions | BodyResponseCallback<Schema$SignBlobResponse>,
      callback: BodyResponseCallback<Schema$SignBlobResponse>
    ): void;
    signBlob(
      params: Params$Resource$Projects$Serviceaccounts$Signblob,
      callback: BodyResponseCallback<Schema$SignBlobResponse>
    ): void;
    signBlob(callback: BodyResponseCallback<Schema$SignBlobResponse>): void;
    signBlob(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Signblob
        | BodyResponseCallback<Schema$SignBlobResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SignBlobResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SignBlobResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SignBlobResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Signblob;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Signblob;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:signBlob').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SignBlobResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SignBlobResponse>(parameters);
      }
    }

    /**
     * Signs a JWT using a service account's system-managed private key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/iamcredentials.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const iamcredentials = google.iamcredentials('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await iamcredentials.projects.serviceAccounts.signJwt({
     *     // Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     *     name: 'projects/my-project/serviceAccounts/my-serviceAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "delegates": [],
     *       //   "payload": "my_payload"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "keyId": "my_keyId",
     *   //   "signedJwt": "my_signedJwt"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    signJwt(
      params: Params$Resource$Projects$Serviceaccounts$Signjwt,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    signJwt(
      params?: Params$Resource$Projects$Serviceaccounts$Signjwt,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SignJwtResponse>>;
    signJwt(
      params: Params$Resource$Projects$Serviceaccounts$Signjwt,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    signJwt(
      params: Params$Resource$Projects$Serviceaccounts$Signjwt,
      options: MethodOptions | BodyResponseCallback<Schema$SignJwtResponse>,
      callback: BodyResponseCallback<Schema$SignJwtResponse>
    ): void;
    signJwt(
      params: Params$Resource$Projects$Serviceaccounts$Signjwt,
      callback: BodyResponseCallback<Schema$SignJwtResponse>
    ): void;
    signJwt(callback: BodyResponseCallback<Schema$SignJwtResponse>): void;
    signJwt(
      paramsOrCallback?:
        | Params$Resource$Projects$Serviceaccounts$Signjwt
        | BodyResponseCallback<Schema$SignJwtResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SignJwtResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SignJwtResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SignJwtResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Serviceaccounts$Signjwt;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Serviceaccounts$Signjwt;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://iamcredentials.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:signJwt').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SignJwtResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SignJwtResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Serviceaccounts$Generateaccesstoken
    extends StandardParameters {
    /**
     * Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateAccessTokenRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Generateidtoken
    extends StandardParameters {
    /**
     * Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateIdTokenRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Getallowedlocations
    extends StandardParameters {
    /**
     * Required. Resource name of service account.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Signblob
    extends StandardParameters {
    /**
     * Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SignBlobRequest;
  }
  export interface Params$Resource$Projects$Serviceaccounts$Signjwt
    extends StandardParameters {
    /**
     * Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID\}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SignJwtRequest;
  }
}
