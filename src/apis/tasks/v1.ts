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

export namespace tasks_v1 {
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
   * Google Tasks API
   *
   * The Google Tasks API lets you manage your tasks and task lists.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const tasks = google.tasks('v1');
   * ```
   */
  export class Tasks {
    context: APIRequestContext;
    tasklists: Resource$Tasklists;
    tasks: Resource$Tasks;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.tasklists = new Resource$Tasklists(this.context);
      this.tasks = new Resource$Tasks(this.context);
    }
  }

  /**
   * Information about the source of the task assignment (Document, Chat Space).
   */
  export interface Schema$AssignmentInfo {
    /**
     * Output only. Information about the Drive file where this task originates from. Currently, the Drive file can only be a document. This field is read-only.
     */
    driveResourceInfo?: Schema$DriveResourceInfo;
    /**
     * Output only. An absolute link to the original task in the surface of assignment (Docs, Chat spaces, etc.).
     */
    linkToTask?: string | null;
    /**
     * Output only. Information about the Chat Space where this task originates from. This field is read-only.
     */
    spaceInfo?: Schema$SpaceInfo;
    /**
     * Output only. The type of surface this assigned task originates from. Currently limited to DOCUMENT or SPACE.
     */
    surfaceType?: string | null;
  }
  /**
   * Information about the Drive resource where a task was assigned from (the document, sheet, etc.).
   */
  export interface Schema$DriveResourceInfo {
    /**
     * Output only. Identifier of the file in the Drive API.
     */
    driveFileId?: string | null;
    /**
     * Output only. Resource key required to access files shared via a shared link. Not required for all files. See also developers.google.com/drive/api/guides/resource-keys.
     */
    resourceKey?: string | null;
  }
  /**
   * Information about the Chat Space where a task was assigned from.
   */
  export interface Schema$SpaceInfo {
    /**
     * Output only. The Chat space where this task originates from. The format is "spaces/{space\}".
     */
    space?: string | null;
  }
  export interface Schema$Task {
    /**
     * Output only. Context information for assigned tasks. A task can be assigned to a user, currently possible from surfaces like Docs and Chat Spaces. This field is populated for tasks assigned to the current user and identifies where the task was assigned from. This field is read-only.
     */
    assignmentInfo?: Schema$AssignmentInfo;
    /**
     * Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
     */
    completed?: string | null;
    /**
     * Flag indicating whether the task has been deleted. For assigned tasks this field is read-only. They can only be deleted by calling tasks.delete, in which case both the assigned task and the original task (in Docs or Chat Spaces) are deleted. To delete the assigned task only, navigate to the assignment surface and unassign the task from there. The default is False.
     */
    deleted?: boolean | null;
    /**
     * Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API.
     */
    due?: string | null;
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.
     */
    hidden?: boolean | null;
    /**
     * Task identifier.
     */
    id?: string | null;
    /**
     * Output only. Type of the resource. This is always "tasks#task".
     */
    kind?: string | null;
    /**
     * Output only. Collection of links. This collection is read-only.
     */
    links?: Array<{description?: string; link?: string; type?: string}> | null;
    /**
     * Notes describing the task. Tasks assigned from Google Docs cannot have notes. Optional. Maximum length allowed: 8192 characters.
     */
    notes?: string | null;
    /**
     * Output only. Parent task identifier. This field is omitted if it is a top-level task. Use the "move" method to move the task under a different parent or to the top level. A parent task can never be an assigned task (from Chat Spaces, Docs). This field is read-only.
     */
    parent?: string | null;
    /**
     * Output only. String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). Use the "move" method to move the task to another position.
     */
    position?: string | null;
    /**
     * Output only. URL pointing to this task. Used to retrieve, update, or delete this task.
     */
    selfLink?: string | null;
    /**
     * Status of the task. This is either "needsAction" or "completed".
     */
    status?: string | null;
    /**
     * Title of the task. Maximum length allowed: 1024 characters.
     */
    title?: string | null;
    /**
     * Output only. Last modification time of the task (as a RFC 3339 timestamp).
     */
    updated?: string | null;
    /**
     * Output only. An absolute link to the task in the Google Tasks Web UI.
     */
    webViewLink?: string | null;
  }
  export interface Schema$TaskList {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Task list identifier.
     */
    id?: string | null;
    /**
     * Output only. Type of the resource. This is always "tasks#taskList".
     */
    kind?: string | null;
    /**
     * Output only. URL pointing to this task list. Used to retrieve, update, or delete this task list.
     */
    selfLink?: string | null;
    /**
     * Title of the task list. Maximum length allowed: 1024 characters.
     */
    title?: string | null;
    /**
     * Output only. Last modification time of the task list (as a RFC 3339 timestamp).
     */
    updated?: string | null;
  }
  export interface Schema$TaskLists {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Collection of task lists.
     */
    items?: Schema$TaskList[];
    /**
     * Type of the resource. This is always "tasks#taskLists".
     */
    kind?: string | null;
    /**
     * Token that can be used to request the next page of this result.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$Tasks {
    /**
     * ETag of the resource.
     */
    etag?: string | null;
    /**
     * Collection of tasks.
     */
    items?: Schema$Task[];
    /**
     * Type of the resource. This is always "tasks#tasks".
     */
    kind?: string | null;
    /**
     * Token used to access the next page of this result.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Tasklists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the authenticated user's specified task list. If the list contains assigned tasks, both the assigned tasks and the original tasks in the assignment surface (Docs, Chat Spaces) are deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/tasks'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasklists.delete({
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    delete(
      params: Params$Resource$Tasklists$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Tasklists$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Tasklists$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Tasklists$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Tasklists$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Tasklists$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasklists$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasklists$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/users/@me/lists/{tasklist}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist'],
        pathParams: ['tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns the authenticated user's specified task list.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/tasks',
     *       'https://www.googleapis.com/auth/tasks.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasklists.get({
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated"
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
    get(
      params: Params$Resource$Tasklists$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Tasklists$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TaskList>>;
    get(
      params: Params$Resource$Tasklists$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Tasklists$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TaskList>,
      callback: BodyResponseCallback<Schema$TaskList>
    ): void;
    get(
      params: Params$Resource$Tasklists$Get,
      callback: BodyResponseCallback<Schema$TaskList>
    ): void;
    get(callback: BodyResponseCallback<Schema$TaskList>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Tasklists$Get
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TaskList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasklists$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasklists$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/users/@me/lists/{tasklist}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist'],
        pathParams: ['tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TaskList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TaskList>(parameters);
      }
    }

    /**
     * Creates a new task list and adds it to the authenticated user's task lists. A user can have up to 2000 lists at a time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/tasks'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasklists.insert({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "selfLink": "my_selfLink",
     *       //   "title": "my_title",
     *       //   "updated": "my_updated"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated"
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
    insert(
      params: Params$Resource$Tasklists$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Tasklists$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TaskList>>;
    insert(
      params: Params$Resource$Tasklists$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Tasklists$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$TaskList>,
      callback: BodyResponseCallback<Schema$TaskList>
    ): void;
    insert(
      params: Params$Resource$Tasklists$Insert,
      callback: BodyResponseCallback<Schema$TaskList>
    ): void;
    insert(callback: BodyResponseCallback<Schema$TaskList>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Tasklists$Insert
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TaskList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasklists$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasklists$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/users/@me/lists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TaskList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TaskList>(parameters);
      }
    }

    /**
     * Returns all the authenticated user's task lists. A user can have up to 2000 lists at a time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/tasks',
     *       'https://www.googleapis.com/auth/tasks.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasklists.list({
     *     // Maximum number of task lists returned on one page. Optional. The default is 1000 (max allowed: 1000).
     *     maxResults: 'placeholder-value',
     *     // Token specifying the result page to return. Optional.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
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
      params: Params$Resource$Tasklists$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Tasklists$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TaskLists>>;
    list(
      params: Params$Resource$Tasklists$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Tasklists$List,
      options: MethodOptions | BodyResponseCallback<Schema$TaskLists>,
      callback: BodyResponseCallback<Schema$TaskLists>
    ): void;
    list(
      params: Params$Resource$Tasklists$List,
      callback: BodyResponseCallback<Schema$TaskLists>
    ): void;
    list(callback: BodyResponseCallback<Schema$TaskLists>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tasklists$List
        | BodyResponseCallback<Schema$TaskLists>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TaskLists>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TaskLists>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TaskLists>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasklists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasklists$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/users/@me/lists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TaskLists>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TaskLists>(parameters);
      }
    }

    /**
     * Updates the authenticated user's specified task list. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/tasks'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasklists.patch({
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "selfLink": "my_selfLink",
     *       //   "title": "my_title",
     *       //   "updated": "my_updated"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated"
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
      params: Params$Resource$Tasklists$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Tasklists$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TaskList>>;
    patch(
      params: Params$Resource$Tasklists$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Tasklists$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TaskList>,
      callback: BodyResponseCallback<Schema$TaskList>
    ): void;
    patch(
      params: Params$Resource$Tasklists$Patch,
      callback: BodyResponseCallback<Schema$TaskList>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TaskList>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Tasklists$Patch
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TaskList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasklists$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasklists$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/users/@me/lists/{tasklist}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist'],
        pathParams: ['tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TaskList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TaskList>(parameters);
      }
    }

    /**
     * Updates the authenticated user's specified task list.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/tasks'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasklists.update({
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "selfLink": "my_selfLink",
     *       //   "title": "my_title",
     *       //   "updated": "my_updated"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated"
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
    update(
      params: Params$Resource$Tasklists$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Tasklists$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TaskList>>;
    update(
      params: Params$Resource$Tasklists$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Tasklists$Update,
      options: MethodOptions | BodyResponseCallback<Schema$TaskList>,
      callback: BodyResponseCallback<Schema$TaskList>
    ): void;
    update(
      params: Params$Resource$Tasklists$Update,
      callback: BodyResponseCallback<Schema$TaskList>
    ): void;
    update(callback: BodyResponseCallback<Schema$TaskList>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Tasklists$Update
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TaskList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TaskList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasklists$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasklists$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/users/@me/lists/{tasklist}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist'],
        pathParams: ['tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TaskList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TaskList>(parameters);
      }
    }
  }

  export interface Params$Resource$Tasklists$Delete extends StandardParameters {
    /**
     * Task list identifier.
     */
    tasklist?: string;
  }
  export interface Params$Resource$Tasklists$Get extends StandardParameters {
    /**
     * Task list identifier.
     */
    tasklist?: string;
  }
  export interface Params$Resource$Tasklists$Insert extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$TaskList;
  }
  export interface Params$Resource$Tasklists$List extends StandardParameters {
    /**
     * Maximum number of task lists returned on one page. Optional. The default is 1000 (max allowed: 1000).
     */
    maxResults?: number;
    /**
     * Token specifying the result page to return. Optional.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Tasklists$Patch extends StandardParameters {
    /**
     * Task list identifier.
     */
    tasklist?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TaskList;
  }
  export interface Params$Resource$Tasklists$Update extends StandardParameters {
    /**
     * Task list identifier.
     */
    tasklist?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TaskList;
  }

  export class Resource$Tasks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/tasks'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasks.clear({
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    clear(
      params: Params$Resource$Tasks$Clear,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    clear(
      params?: Params$Resource$Tasks$Clear,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    clear(
      params: Params$Resource$Tasks$Clear,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    clear(
      params: Params$Resource$Tasks$Clear,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    clear(
      params: Params$Resource$Tasks$Clear,
      callback: BodyResponseCallback<void>
    ): void;
    clear(callback: BodyResponseCallback<void>): void;
    clear(
      paramsOrCallback?:
        | Params$Resource$Tasks$Clear
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$Clear;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Clear;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/lists/{tasklist}/clear').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist'],
        pathParams: ['tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Deletes the specified task from the task list. If the task is assigned, both the assigned task and the original task (in Docs, Chat Spaces) are deleted. To delete the assigned task only, navigate to the assignment surface and unassign the task from there.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/tasks'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasks.delete({
     *     // Task identifier.
     *     task: 'placeholder-value',
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    delete(
      params: Params$Resource$Tasks$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Tasks$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Tasks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Tasks$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Tasks$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Tasks$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<void>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/lists/{tasklist}/tasks/{task}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist', 'task'],
        pathParams: ['task', 'tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns the specified task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/tasks',
     *       'https://www.googleapis.com/auth/tasks.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasks.get({
     *     // Task identifier.
     *     task: 'placeholder-value',
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignmentInfo": {},
     *   //   "completed": "my_completed",
     *   //   "deleted": false,
     *   //   "due": "my_due",
     *   //   "etag": "my_etag",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "links": [],
     *   //   "notes": "my_notes",
     *   //   "parent": "my_parent",
     *   //   "position": "my_position",
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated",
     *   //   "webViewLink": "my_webViewLink"
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
    get(
      params: Params$Resource$Tasks$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Tasks$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Task>>;
    get(
      params: Params$Resource$Tasks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Tasks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Task>,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    get(
      params: Params$Resource$Tasks$Get,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    get(callback: BodyResponseCallback<Schema$Task>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Tasks$Get
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Task>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/lists/{tasklist}/tasks/{task}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist', 'task'],
        pathParams: ['task', 'tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }

    /**
     * Creates a new task on the specified task list. Tasks assigned from Docs or Chat Spaces cannot be inserted from Tasks Public API; they can only be created by assigning them from Docs or Chat Spaces. A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/tasks'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasks.insert({
     *     // Parent task identifier. If the task is created at the top level, this parameter is omitted. An assigned task cannot be a parent task, nor can it have a parent. Setting the parent to an assigned task results in failure of the request. Optional.
     *     parent: 'placeholder-value',
     *     // Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
     *     previous: 'placeholder-value',
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assignmentInfo": {},
     *       //   "completed": "my_completed",
     *       //   "deleted": false,
     *       //   "due": "my_due",
     *       //   "etag": "my_etag",
     *       //   "hidden": false,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "links": [],
     *       //   "notes": "my_notes",
     *       //   "parent": "my_parent",
     *       //   "position": "my_position",
     *       //   "selfLink": "my_selfLink",
     *       //   "status": "my_status",
     *       //   "title": "my_title",
     *       //   "updated": "my_updated",
     *       //   "webViewLink": "my_webViewLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignmentInfo": {},
     *   //   "completed": "my_completed",
     *   //   "deleted": false,
     *   //   "due": "my_due",
     *   //   "etag": "my_etag",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "links": [],
     *   //   "notes": "my_notes",
     *   //   "parent": "my_parent",
     *   //   "position": "my_position",
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated",
     *   //   "webViewLink": "my_webViewLink"
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
    insert(
      params: Params$Resource$Tasks$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Tasks$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Task>>;
    insert(
      params: Params$Resource$Tasks$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Tasks$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Task>,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    insert(
      params: Params$Resource$Tasks$Insert,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Task>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Tasks$Insert
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Task>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/lists/{tasklist}/tasks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist'],
        pathParams: ['tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }

    /**
     * Returns all tasks in the specified task list. Doesn't return assigned tasks by default (from Docs, Chat Spaces). A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/tasks',
     *       'https://www.googleapis.com/auth/tasks.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasks.list({
     *     // Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
     *     completedMax: 'placeholder-value',
     *     // Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
     *     completedMin: 'placeholder-value',
     *     // Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
     *     dueMax: 'placeholder-value',
     *     // Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
     *     dueMin: 'placeholder-value',
     *     // Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100).
     *     maxResults: 'placeholder-value',
     *     // Token specifying the result page to return. Optional.
     *     pageToken: 'placeholder-value',
     *     // Optional. Flag indicating whether tasks assigned to the current user are returned in the result. Optional. The default is False.
     *     showAssigned: 'placeholder-value',
     *     // Flag indicating whether completed tasks are returned in the result. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps. Optional. The default is True.
     *     showCompleted: 'placeholder-value',
     *     // Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
     *     showDeleted: 'placeholder-value',
     *     // Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
     *     showHidden: 'placeholder-value',
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *     // Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
     *     updatedMin: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
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
      params: Params$Resource$Tasks$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Tasks$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Tasks>>;
    list(
      params: Params$Resource$Tasks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Tasks$List,
      options: MethodOptions | BodyResponseCallback<Schema$Tasks>,
      callback: BodyResponseCallback<Schema$Tasks>
    ): void;
    list(
      params: Params$Resource$Tasks$List,
      callback: BodyResponseCallback<Schema$Tasks>
    ): void;
    list(callback: BodyResponseCallback<Schema$Tasks>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tasks$List
        | BodyResponseCallback<Schema$Tasks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tasks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tasks>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Tasks>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/lists/{tasklist}/tasks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist'],
        pathParams: ['tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Tasks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tasks>(parameters);
      }
    }

    /**
     * Moves the specified task to another position in the destination task list. If the destination list is not specified, the task is moved within its current list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks. A user can have up to 2,000 subtasks per task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/tasks'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasks.move({
     *     // Optional. Destination task list identifier. If set, the task is moved from tasklist to the destinationTasklist list. Otherwise the task is moved within its current list. Recurrent tasks cannot currently be moved between lists.
     *     destinationTasklist: 'placeholder-value',
     *     // Optional. New parent task identifier. If the task is moved to the top level, this parameter is omitted. The task set as parent must exist in the task list and can not be hidden. Exceptions: 1. Assigned and repeating tasks cannot be set as parent tasks (have subtasks), or be moved under a parent task (become subtasks). 2. Tasks that are both completed and hidden cannot be nested, so the parent field must be empty.
     *     parent: 'placeholder-value',
     *     // Optional. New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. The task set as previous must exist in the task list and can not be hidden. Exceptions: 1. Tasks that are both completed and hidden can only be moved to position 0, so the previous field must be empty.
     *     previous: 'placeholder-value',
     *     // Task identifier.
     *     task: 'placeholder-value',
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignmentInfo": {},
     *   //   "completed": "my_completed",
     *   //   "deleted": false,
     *   //   "due": "my_due",
     *   //   "etag": "my_etag",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "links": [],
     *   //   "notes": "my_notes",
     *   //   "parent": "my_parent",
     *   //   "position": "my_position",
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated",
     *   //   "webViewLink": "my_webViewLink"
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
    move(
      params: Params$Resource$Tasks$Move,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    move(
      params?: Params$Resource$Tasks$Move,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Task>>;
    move(
      params: Params$Resource$Tasks$Move,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    move(
      params: Params$Resource$Tasks$Move,
      options: MethodOptions | BodyResponseCallback<Schema$Task>,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    move(
      params: Params$Resource$Tasks$Move,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    move(callback: BodyResponseCallback<Schema$Task>): void;
    move(
      paramsOrCallback?:
        | Params$Resource$Tasks$Move
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Task>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$Move;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Move;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/tasks/v1/lists/{tasklist}/tasks/{task}/move'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist', 'task'],
        pathParams: ['task', 'tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }

    /**
     * Updates the specified task. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/tasks'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasks.patch({
     *     // Task identifier.
     *     task: 'placeholder-value',
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assignmentInfo": {},
     *       //   "completed": "my_completed",
     *       //   "deleted": false,
     *       //   "due": "my_due",
     *       //   "etag": "my_etag",
     *       //   "hidden": false,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "links": [],
     *       //   "notes": "my_notes",
     *       //   "parent": "my_parent",
     *       //   "position": "my_position",
     *       //   "selfLink": "my_selfLink",
     *       //   "status": "my_status",
     *       //   "title": "my_title",
     *       //   "updated": "my_updated",
     *       //   "webViewLink": "my_webViewLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignmentInfo": {},
     *   //   "completed": "my_completed",
     *   //   "deleted": false,
     *   //   "due": "my_due",
     *   //   "etag": "my_etag",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "links": [],
     *   //   "notes": "my_notes",
     *   //   "parent": "my_parent",
     *   //   "position": "my_position",
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated",
     *   //   "webViewLink": "my_webViewLink"
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
      params: Params$Resource$Tasks$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Tasks$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Task>>;
    patch(
      params: Params$Resource$Tasks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Tasks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Task>,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    patch(
      params: Params$Resource$Tasks$Patch,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Task>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Tasks$Patch
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Task>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/lists/{tasklist}/tasks/{task}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist', 'task'],
        pathParams: ['task', 'tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }

    /**
     * Updates the specified task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/tasks.googleapis.com
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
     * const tasks = google.tasks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/tasks'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await tasks.tasks.update({
     *     // Task identifier.
     *     task: 'placeholder-value',
     *     // Task list identifier.
     *     tasklist: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assignmentInfo": {},
     *       //   "completed": "my_completed",
     *       //   "deleted": false,
     *       //   "due": "my_due",
     *       //   "etag": "my_etag",
     *       //   "hidden": false,
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "links": [],
     *       //   "notes": "my_notes",
     *       //   "parent": "my_parent",
     *       //   "position": "my_position",
     *       //   "selfLink": "my_selfLink",
     *       //   "status": "my_status",
     *       //   "title": "my_title",
     *       //   "updated": "my_updated",
     *       //   "webViewLink": "my_webViewLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assignmentInfo": {},
     *   //   "completed": "my_completed",
     *   //   "deleted": false,
     *   //   "due": "my_due",
     *   //   "etag": "my_etag",
     *   //   "hidden": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "links": [],
     *   //   "notes": "my_notes",
     *   //   "parent": "my_parent",
     *   //   "position": "my_position",
     *   //   "selfLink": "my_selfLink",
     *   //   "status": "my_status",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated",
     *   //   "webViewLink": "my_webViewLink"
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
    update(
      params: Params$Resource$Tasks$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Tasks$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Task>>;
    update(
      params: Params$Resource$Tasks$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Tasks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Task>,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    update(
      params: Params$Resource$Tasks$Update,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    update(callback: BodyResponseCallback<Schema$Task>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Tasks$Update
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Task>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://tasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/tasks/v1/lists/{tasklist}/tasks/{task}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['tasklist', 'task'],
        pathParams: ['task', 'tasklist'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }
  }

  export interface Params$Resource$Tasks$Clear extends StandardParameters {
    /**
     * Task list identifier.
     */
    tasklist?: string;
  }
  export interface Params$Resource$Tasks$Delete extends StandardParameters {
    /**
     * Task identifier.
     */
    task?: string;
    /**
     * Task list identifier.
     */
    tasklist?: string;
  }
  export interface Params$Resource$Tasks$Get extends StandardParameters {
    /**
     * Task identifier.
     */
    task?: string;
    /**
     * Task list identifier.
     */
    tasklist?: string;
  }
  export interface Params$Resource$Tasks$Insert extends StandardParameters {
    /**
     * Parent task identifier. If the task is created at the top level, this parameter is omitted. An assigned task cannot be a parent task, nor can it have a parent. Setting the parent to an assigned task results in failure of the request. Optional.
     */
    parent?: string;
    /**
     * Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
     */
    previous?: string;
    /**
     * Task list identifier.
     */
    tasklist?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Task;
  }
  export interface Params$Resource$Tasks$List extends StandardParameters {
    /**
     * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
     */
    completedMax?: string;
    /**
     * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
     */
    completedMin?: string;
    /**
     * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
     */
    dueMax?: string;
    /**
     * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
     */
    dueMin?: string;
    /**
     * Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100).
     */
    maxResults?: number;
    /**
     * Token specifying the result page to return. Optional.
     */
    pageToken?: string;
    /**
     * Optional. Flag indicating whether tasks assigned to the current user are returned in the result. Optional. The default is False.
     */
    showAssigned?: boolean;
    /**
     * Flag indicating whether completed tasks are returned in the result. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps. Optional. The default is True.
     */
    showCompleted?: boolean;
    /**
     * Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
     */
    showDeleted?: boolean;
    /**
     * Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
     */
    showHidden?: boolean;
    /**
     * Task list identifier.
     */
    tasklist?: string;
    /**
     * Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
     */
    updatedMin?: string;
  }
  export interface Params$Resource$Tasks$Move extends StandardParameters {
    /**
     * Optional. Destination task list identifier. If set, the task is moved from tasklist to the destinationTasklist list. Otherwise the task is moved within its current list. Recurrent tasks cannot currently be moved between lists.
     */
    destinationTasklist?: string;
    /**
     * Optional. New parent task identifier. If the task is moved to the top level, this parameter is omitted. The task set as parent must exist in the task list and can not be hidden. Exceptions: 1. Assigned and repeating tasks cannot be set as parent tasks (have subtasks), or be moved under a parent task (become subtasks). 2. Tasks that are both completed and hidden cannot be nested, so the parent field must be empty.
     */
    parent?: string;
    /**
     * Optional. New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. The task set as previous must exist in the task list and can not be hidden. Exceptions: 1. Tasks that are both completed and hidden can only be moved to position 0, so the previous field must be empty.
     */
    previous?: string;
    /**
     * Task identifier.
     */
    task?: string;
    /**
     * Task list identifier.
     */
    tasklist?: string;
  }
  export interface Params$Resource$Tasks$Patch extends StandardParameters {
    /**
     * Task identifier.
     */
    task?: string;
    /**
     * Task list identifier.
     */
    tasklist?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Task;
  }
  export interface Params$Resource$Tasks$Update extends StandardParameters {
    /**
     * Task identifier.
     */
    task?: string;
    /**
     * Task list identifier.
     */
    tasklist?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Task;
  }
}
