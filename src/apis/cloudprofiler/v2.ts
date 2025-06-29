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

export namespace cloudprofiler_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Cloud Profiler API
   *
   * Manages continuous profiling information.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudprofiler = google.cloudprofiler('v2');
   * ```
   */
  export class Cloudprofiler {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected.
   */
  export interface Schema$CreateProfileRequest {
    /**
     * Deployment details.
     */
    deployment?: Schema$Deployment;
    /**
     * One or more profile types that the agent is capable of providing.
     */
    profileType?: string[] | null;
  }
  /**
   * Deployment contains the deployment identification information.
   */
  export interface Schema$Deployment {
    /**
     * Labels identify the deployment within the user universe and same target. Validation regex for label names: `^[a-z0-9]([a-z0-9-]{0,61\}[a-z0-9])?$`. Value for an individual label must be <= 512 bytes, the total size of all label names and values must be <= 1024 bytes. Label named "language" can be used to record the programming language of the profiled deployment. The standard choices for the value include "java", "go", "python", "ruby", "nodejs", "php", "dotnet". For deployments running on Google Cloud Platform, "zone" or "region" label should be present describing the deployment location. An example of a zone is "us-central1-a", an example of a region is "us-central1" or "us-central".
     */
    labels?: {[key: string]: string} | null;
    /**
     * Project ID is the ID of a cloud project. Validation regex: `^a-z{4,61\}[a-z0-9]$`.
     */
    projectId?: string | null;
    /**
     * Target is the service name used to group related deployments: * Service name for App Engine Flex / Standard. * Cluster and container name for GKE. * User-specified string for direct Compute Engine profiling (e.g. Java). * Job name for Dataflow. Validation regex: `^[a-z0-9]([-a-z0-9_.]{0,253\}[a-z0-9])?$`.
     */
    target?: string | null;
  }
  /**
   * ListProfileResponse contains the list of collected profiles for deployments in projects which the user has permissions to view.
   */
  export interface Schema$ListProfilesResponse {
    /**
     * Token to receive the next page of results. This field maybe empty if there are no more profiles to fetch.
     */
    nextPageToken?: string | null;
    /**
     * List of profiles fetched.
     */
    profiles?: Schema$Profile[];
    /**
     * Number of profiles that were skipped in the current page since they were not able to be fetched successfully. This should typically be zero. A non-zero value may indicate a transient failure, in which case if the number is too high for your use case, the call may be retried.
     */
    skippedProfiles?: number | null;
  }
  /**
   * Profile resource.
   */
  export interface Schema$Profile {
    /**
     * Deployment this profile corresponds to.
     */
    deployment?: Schema$Deployment;
    /**
     * Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously).
     */
    duration?: string | null;
    /**
     * Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Opaque, server-assigned, unique ID for this profile.
     */
    name?: string | null;
    /**
     * Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto.
     */
    profileBytes?: string | null;
    /**
     * Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server.
     */
    profileType?: string | null;
    /**
     * Output only. Start time for the profile. This output is only present in response from the ListProfiles method.
     */
    startTime?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    profiles: Resource$Projects$Profiles;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.profiles = new Resource$Projects$Profiles(this.context);
    }
  }

  export class Resource$Projects$Profiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * CreateProfile creates a new profile resource in the online mode. _Direct use of this API is discouraged, please use a [supported profiler agent](https://cloud.google.com/profiler/docs/about-profiler#profiling_agent) instead for profile collection._ The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin".
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudprofiler.googleapis.com
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
     * const cloudprofiler = google.cloudprofiler('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/monitoring',
     *       'https://www.googleapis.com/auth/monitoring.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudprofiler.projects.profiles.create({
     *     // Parent project to create the profile in.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deployment": {},
     *       //   "profileType": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deployment": {},
     *   //   "duration": "my_duration",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "profileBytes": "my_profileBytes",
     *   //   "profileType": "my_profileType",
     *   //   "startTime": "my_startTime"
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
    create(
      params: Params$Resource$Projects$Profiles$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Profiles$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Profile>>;
    create(
      params: Params$Resource$Projects$Profiles$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Profiles$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    create(
      params: Params$Resource$Projects$Profiles$Create,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    create(callback: BodyResponseCallback<Schema$Profile>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Profiles$Create
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Profile>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Profiles$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Profiles$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudprofiler.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/profiles').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Profile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }

    /**
     * CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it. _Direct use of this API is discouraged, please use a [supported profiler agent](https://cloud.google.com/profiler/docs/about-profiler#profiling_agent) instead for profile collection._
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudprofiler.googleapis.com
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
     * const cloudprofiler = google.cloudprofiler('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/monitoring',
     *       'https://www.googleapis.com/auth/monitoring.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudprofiler.projects.profiles.createOffline({
     *     // Parent project to create the profile in.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deployment": {},
     *       //   "duration": "my_duration",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "profileBytes": "my_profileBytes",
     *       //   "profileType": "my_profileType",
     *       //   "startTime": "my_startTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deployment": {},
     *   //   "duration": "my_duration",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "profileBytes": "my_profileBytes",
     *   //   "profileType": "my_profileType",
     *   //   "startTime": "my_startTime"
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
    createOffline(
      params: Params$Resource$Projects$Profiles$Createoffline,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    createOffline(
      params?: Params$Resource$Projects$Profiles$Createoffline,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Profile>>;
    createOffline(
      params: Params$Resource$Projects$Profiles$Createoffline,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createOffline(
      params: Params$Resource$Projects$Profiles$Createoffline,
      options: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    createOffline(
      params: Params$Resource$Projects$Profiles$Createoffline,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    createOffline(callback: BodyResponseCallback<Schema$Profile>): void;
    createOffline(
      paramsOrCallback?:
        | Params$Resource$Projects$Profiles$Createoffline
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Profile>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Profiles$Createoffline;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Profiles$Createoffline;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudprofiler.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/profiles:createOffline').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Profile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }

    /**
     * Lists profiles which have been collected so far and for which the caller has permission to view.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudprofiler.googleapis.com
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
     * const cloudprofiler = google.cloudprofiler('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/monitoring',
     *       'https://www.googleapis.com/auth/monitoring.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudprofiler.projects.profiles.list({
     *     // Optional. The maximum number of items to return. Default page_size is 1000. Max limit is 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. The token to continue pagination and get profiles from a particular page. When paginating, all other parameters provided to `ListProfiles` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of profiles. Format: projects/{user_project_id\}
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "profiles": [],
     *   //   "skippedProfiles": 0
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
    list(
      params: Params$Resource$Projects$Profiles$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Profiles$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListProfilesResponse>>;
    list(
      params: Params$Resource$Projects$Profiles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Profiles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProfilesResponse>,
      callback: BodyResponseCallback<Schema$ListProfilesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Profiles$List,
      callback: BodyResponseCallback<Schema$ListProfilesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListProfilesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Profiles$List
        | BodyResponseCallback<Schema$ListProfilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListProfilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListProfilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListProfilesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Profiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Profiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudprofiler.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/profiles').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListProfilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListProfilesResponse>(parameters);
      }
    }

    /**
     * UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation. _Direct use of this API is discouraged, please use a [supported profiler agent](https://cloud.google.com/profiler/docs/about-profiler#profiling_agent) instead for profile collection._
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudprofiler.googleapis.com
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
     * const cloudprofiler = google.cloudprofiler('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/monitoring',
     *       'https://www.googleapis.com/auth/monitoring.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudprofiler.projects.profiles.patch({
     *     // Output only. Opaque, server-assigned, unique ID for this profile.
     *     name: 'projects/my-project/profiles/my-profile',
     *     // Field mask used to specify the fields to be overwritten. Currently only profile_bytes and labels fields are supported by UpdateProfile, so only those fields can be specified in the mask. When no mask is provided, all fields are overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deployment": {},
     *       //   "duration": "my_duration",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "profileBytes": "my_profileBytes",
     *       //   "profileType": "my_profileType",
     *       //   "startTime": "my_startTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deployment": {},
     *   //   "duration": "my_duration",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "profileBytes": "my_profileBytes",
     *   //   "profileType": "my_profileType",
     *   //   "startTime": "my_startTime"
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
    patch(
      params: Params$Resource$Projects$Profiles$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Profiles$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Profile>>;
    patch(
      params: Params$Resource$Projects$Profiles$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Profiles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    patch(
      params: Params$Resource$Projects$Profiles$Patch,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Profile>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Profiles$Patch
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Profile>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Profiles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Profiles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://cloudprofiler.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Profile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Profiles$Create
    extends StandardParameters {
    /**
     * Parent project to create the profile in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateProfileRequest;
  }
  export interface Params$Resource$Projects$Profiles$Createoffline
    extends StandardParameters {
    /**
     * Parent project to create the profile in.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Profile;
  }
  export interface Params$Resource$Projects$Profiles$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. Default page_size is 1000. Max limit is 1000.
     */
    pageSize?: number;
    /**
     * Optional. The token to continue pagination and get profiles from a particular page. When paginating, all other parameters provided to `ListProfiles` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of profiles. Format: projects/{user_project_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Profiles$Patch
    extends StandardParameters {
    /**
     * Output only. Opaque, server-assigned, unique ID for this profile.
     */
    name?: string;
    /**
     * Field mask used to specify the fields to be overwritten. Currently only profile_bytes and labels fields are supported by UpdateProfile, so only those fields can be specified in the mask. When no mask is provided, all fields are overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Profile;
  }
}
