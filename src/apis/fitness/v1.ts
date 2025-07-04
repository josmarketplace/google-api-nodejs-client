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

export namespace fitness_v1 {
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
   * Fitness API
   *
   * The Fitness API for managing users&#39; fitness tracking data.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const fitness = google.fitness('v1');
   * ```
   */
  export class Fitness {
    context: APIRequestContext;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.users = new Resource$Users(this.context);
    }
  }

  export interface Schema$AggregateBucket {
    /**
     * Available for Bucket.Type.ACTIVITY_TYPE, Bucket.Type.ACTIVITY_SEGMENT
     */
    activity?: number | null;
    /**
     * There will be one dataset per AggregateBy in the request.
     */
    dataset?: Schema$Dataset[];
    /**
     * The end time for the aggregated data, in milliseconds since epoch, inclusive.
     */
    endTimeMillis?: string | null;
    /**
     * Available for Bucket.Type.SESSION
     */
    session?: Schema$Session;
    /**
     * The start time for the aggregated data, in milliseconds since epoch, inclusive.
     */
    startTimeMillis?: string | null;
    /**
     * The type of a bucket signifies how the data aggregation is performed in the bucket.
     */
    type?: string | null;
  }
  /**
   * The specification of which data to aggregate.
   */
  export interface Schema$AggregateBy {
    /**
     * A data source ID to aggregate. Only data from the specified data source ID will be included in the aggregation. If specified, this data source must exist; the OAuth scopes in the supplied credentials must grant read access to this data type. The dataset in the response will have the same data source ID. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both.
     */
    dataSourceId?: string | null;
    /**
     * The data type to aggregate. All data sources providing this data type will contribute data to the aggregation. The response will contain a single dataset for this data type name. The dataset will have a data source ID of derived::com.google.android.gms:aggregated. If the user has no data for this data type, an empty data set will be returned. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both.
     */
    dataTypeName?: string | null;
  }
  /**
   * Next id: 10
   */
  export interface Schema$AggregateRequest {
    /**
     * The specification of data to be aggregated. At least one aggregateBy spec must be provided. All data that is specified will be aggregated using the same bucketing criteria. There will be one dataset in the response for every aggregateBy spec.
     */
    aggregateBy?: Schema$AggregateBy[];
    /**
     * Specifies that data be aggregated each activity segment recorded for a user. Similar to bucketByActivitySegment, but bucketing is done for each activity segment rather than all segments of the same type. Mutually exclusive of other bucketing specifications.
     */
    bucketByActivitySegment?: Schema$BucketByActivity;
    /**
     * Specifies that data be aggregated by the type of activity being performed when the data was recorded. All data that was recorded during a certain activity type (.for the given time range) will be aggregated into the same bucket. Data that was recorded while the user was not active will not be included in the response. Mutually exclusive of other bucketing specifications.
     */
    bucketByActivityType?: Schema$BucketByActivity;
    /**
     * Specifies that data be aggregated by user sessions. Data that does not fall within the time range of a session will not be included in the response. Mutually exclusive of other bucketing specifications.
     */
    bucketBySession?: Schema$BucketBySession;
    /**
     * Specifies that data be aggregated by a single time interval. Mutually exclusive of other bucketing specifications.
     */
    bucketByTime?: Schema$BucketByTime;
    /**
     * The end of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive. The maximum allowed difference between start_time_millis // and end_time_millis is 7776000000 (roughly 90 days).
     */
    endTimeMillis?: string | null;
    /**
     * DO NOT POPULATE THIS FIELD. It is ignored.
     */
    filteredDataQualityStandard?: string[] | null;
    /**
     * The start of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive.
     */
    startTimeMillis?: string | null;
  }
  export interface Schema$AggregateResponse {
    /**
     * A list of buckets containing the aggregated data.
     */
    bucket?: Schema$AggregateBucket[];
  }
  export interface Schema$Application {
    /**
     * An optional URI that can be used to link back to the application.
     */
    detailsUrl?: string | null;
    /**
     * The name of this application. This is required for REST clients, but we do not enforce uniqueness of this name. It is provided as a matter of convenience for other developers who would like to identify which REST created an Application or Data Source.
     */
    name?: string | null;
    /**
     * Package name for this application. This is used as a unique identifier when created by Android applications, but cannot be specified by REST clients. REST clients will have their developer project number reflected into the Data Source data stream IDs, instead of the packageName.
     */
    packageName?: string | null;
    /**
     * Version of the application. You should update this field whenever the application changes in a way that affects the computation of the data.
     */
    version?: string | null;
  }
  export interface Schema$BucketByActivity {
    /**
     * The default activity stream will be used if a specific activityDataSourceId is not specified.
     */
    activityDataSourceId?: string | null;
    /**
     * Specifies that only activity segments of duration longer than minDurationMillis are considered and used as a container for aggregated data.
     */
    minDurationMillis?: string | null;
  }
  export interface Schema$BucketBySession {
    /**
     * Specifies that only sessions of duration longer than minDurationMillis are considered and used as a container for aggregated data.
     */
    minDurationMillis?: string | null;
  }
  export interface Schema$BucketByTime {
    /**
     * Specifies that result buckets aggregate data by exactly durationMillis time frames. Time frames that contain no data will be included in the response with an empty dataset.
     */
    durationMillis?: string | null;
    period?: Schema$BucketByTimePeriod;
  }
  export interface Schema$BucketByTimePeriod {
    /**
     * org.joda.timezone.DateTimeZone
     */
    timeZoneId?: string | null;
    type?: string | null;
    value?: number | null;
  }
  /**
   * Represents a single data point, generated by a particular data source. A data point holds a value for each field, an end timestamp and an optional start time. The exact semantics of each of these attributes are specified in the documentation for the particular data type. A data point can represent an instantaneous measurement, reading or input observation, as well as averages or aggregates over a time interval. Check the data type documentation to determine which is the case for a particular data type. Data points always contain one value for each field of the data type.
   */
  export interface Schema$DataPoint {
    /**
     * DO NOT USE THIS FIELD. It is ignored, and not stored.
     */
    computationTimeMillis?: string | null;
    /**
     * The data type defining the format of the values in this data point.
     */
    dataTypeName?: string | null;
    /**
     * The end time of the interval represented by this data point, in nanoseconds since epoch.
     */
    endTimeNanos?: string | null;
    /**
     * Indicates the last time this data point was modified. Useful only in contexts where we are listing the data changes, rather than representing the current state of the data.
     */
    modifiedTimeMillis?: string | null;
    /**
     * If the data point is contained in a dataset for a derived data source, this field will be populated with the data source stream ID that created the data point originally. WARNING: do not rely on this field for anything other than debugging. The value of this field, if it is set at all, is an implementation detail and is not guaranteed to remain consistent.
     */
    originDataSourceId?: string | null;
    /**
     * The raw timestamp from the original SensorEvent.
     */
    rawTimestampNanos?: string | null;
    /**
     * The start time of the interval represented by this data point, in nanoseconds since epoch.
     */
    startTimeNanos?: string | null;
    /**
     * Values of each data type field for the data point. It is expected that each value corresponding to a data type field will occur in the same order that the field is listed with in the data type specified in a data source. Only one of integer and floating point fields will be populated, depending on the format enum value within data source's type field.
     */
    value?: Schema$Value[];
  }
  /**
   * A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset.
   */
  export interface Schema$Dataset {
    /**
     * The data stream ID of the data source that created the points in this dataset.
     */
    dataSourceId?: string | null;
    /**
     * The largest end time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the second part of the dataset identifier.
     */
    maxEndTimeNs?: string | null;
    /**
     * The smallest start time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the first part of the dataset identifier.
     */
    minStartTimeNs?: string | null;
    /**
     * This token will be set when a dataset is received in response to a GET request and the dataset is too large to be included in a single response. Provide this value in a subsequent GET request to return the next page of data points within this dataset.
     */
    nextPageToken?: string | null;
    /**
     * A partial list of data points contained in the dataset, ordered by endTimeNanos. This list is considered complete when retrieving a small dataset and partial when patching a dataset or retrieving a dataset that is too large to include in a single response.
     */
    point?: Schema$DataPoint[];
  }
  /**
   * Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source. The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type. Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.
   */
  export interface Schema$DataSource {
    /**
     * Information about an application which feeds sensor data into the platform.
     */
    application?: Schema$Application;
    /**
     * DO NOT POPULATE THIS FIELD. It is never populated in responses from the platform, and is ignored in queries. It will be removed in a future version entirely.
     */
    dataQualityStandard?: string[] | null;
    /**
     * A unique identifier for the data stream produced by this data source. The identifier includes: - The physical device's manufacturer, model, and serial number (UID). - The application's package name or name. Package name is used when the data source was created by an Android application. The developer project number is used when the data source was created by a REST client. - The data source's type. - The data source's stream name. Note that not all attributes of the data source are used as part of the stream identifier. In particular, the version of the hardware/the application isn't used. This allows us to preserve the same stream through version updates. This also means that two DataSource objects may represent the same data stream even if they're not equal. The exact format of the data stream ID created by an Android application is: type:dataType.name:application.packageName:device.manufacturer:device.model:device.uid:dataStreamName The exact format of the data stream ID created by a REST client is: type:dataType.name:developer project number:device.manufacturer:device.model:device.uid:dataStreamName When any of the optional fields that make up the data stream ID are absent, they will be omitted from the data stream ID. The minimum viable data stream ID would be: type:dataType.name:developer project number Finally, the developer project number and device UID are obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the developer project number in clear and normal form. This means a client will see a different set of data_stream_ids than another client with different credentials.
     */
    dataStreamId?: string | null;
    /**
     * The stream name uniquely identifies this particular data source among other data sources of the same type from the same underlying producer. Setting the stream name is optional, but should be done whenever an application exposes two streams for the same data type, or when a device has two equivalent sensors.
     */
    dataStreamName?: string | null;
    /**
     * The data type defines the schema for a stream of data being collected by, inserted into, or queried from the Fitness API.
     */
    dataType?: Schema$DataType;
    /**
     * Representation of an integrated device (such as a phone or a wearable) that can hold sensors.
     */
    device?: Schema$Device;
    /**
     * An end-user visible name for this data source.
     */
    name?: string | null;
    /**
     * A constant describing the type of this data source. Indicates whether this data source produces raw or derived data.
     */
    type?: string | null;
  }
  export interface Schema$DataType {
    /**
     * A field represents one dimension of a data type.
     */
    field?: Schema$DataTypeField[];
    /**
     * Each data type has a unique, namespaced, name. All data types in the com.google namespace are shared as part of the platform.
     */
    name?: string | null;
  }
  /**
   * In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.). This message is only instantiated in code and not used for wire comms or stored in any way.
   */
  export interface Schema$DataTypeField {
    /**
     * The different supported formats for each field in a data type.
     */
    format?: string | null;
    /**
     * Defines the name and format of data. Unlike data type names, field names are not namespaced, and only need to be unique within the data type.
     */
    name?: string | null;
    optional?: boolean | null;
  }
  /**
   * Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source. The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including: - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance) - Display the source of data to the user (by using the device make / model) - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone) - Build different analysis models for each device/version.
   */
  export interface Schema$Device {
    /**
     * Manufacturer of the product/hardware.
     */
    manufacturer?: string | null;
    /**
     * End-user visible model name for the device.
     */
    model?: string | null;
    /**
     * A constant representing the type of the device.
     */
    type?: string | null;
    /**
     * The serial number or other unique ID for the hardware. This field is obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the uid field in clear and normal form. The obfuscation preserves equality; that is, given two IDs, if id1 == id2, obfuscated(id1) == obfuscated(id2).
     */
    uid?: string | null;
    /**
     * Version string for the device hardware/software.
     */
    version?: string | null;
  }
  export interface Schema$ListDataPointChangesResponse {
    /**
     * The data stream ID of the data source with data point changes.
     */
    dataSourceId?: string | null;
    /**
     * Deleted data points for the user. Note, for modifications this should be parsed before handling insertions.
     */
    deletedDataPoint?: Schema$DataPoint[];
    /**
     * Inserted data points for the user.
     */
    insertedDataPoint?: Schema$DataPoint[];
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListDataSourcesResponse {
    /**
     * A previously created data source.
     */
    dataSource?: Schema$DataSource[];
  }
  export interface Schema$ListSessionsResponse {
    /**
     * If includeDeleted is set to true in the request, and startTime and endTime are omitted, this will include sessions which were deleted since the last sync.
     */
    deletedSession?: Schema$Session[];
    /**
     * Flag to indicate server has more data to transfer. DO NOT USE THIS FIELD. It is never populated in responses from the server.
     */
    hasMoreData?: boolean | null;
    /**
     * The sync token which is used to sync further changes. This will only be provided if both startTime and endTime are omitted from the request.
     */
    nextPageToken?: string | null;
    /**
     * Sessions with an end time that is between startTime and endTime of the request.
     */
    session?: Schema$Session[];
  }
  /**
   * Holder object for the value of an entry in a map field of a data point. A map value supports a subset of the formats that the regular Value supports.
   */
  export interface Schema$MapValue {
    /**
     * Floating point value.
     */
    fpVal?: number | null;
  }
  /**
   * Sessions contain metadata, such as a user-friendly name and time interval information.
   */
  export interface Schema$Session {
    /**
     * Session active time. While start_time_millis and end_time_millis define the full session time, the active time can be shorter and specified by active_time_millis. If the inactive time during the session is known, it should also be inserted via a com.google.activity.segment data point with a STILL activity value
     */
    activeTimeMillis?: string | null;
    /**
     * The type of activity this session represents.
     */
    activityType?: number | null;
    /**
     * The application that created the session.
     */
    application?: Schema$Application;
    /**
     * A description for this session.
     */
    description?: string | null;
    /**
     * An end time, in milliseconds since epoch, inclusive.
     */
    endTimeMillis?: string | null;
    /**
     * A client-generated identifier that is unique across all sessions owned by this particular user.
     */
    id?: string | null;
    /**
     * A timestamp that indicates when the session was last modified.
     */
    modifiedTimeMillis?: string | null;
    /**
     * A human readable name of the session.
     */
    name?: string | null;
    /**
     * A start time, in milliseconds since epoch, inclusive.
     */
    startTimeMillis?: string | null;
  }
  /**
   * Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.
   */
  export interface Schema$Value {
    /**
     * Floating point value. When this is set, other values must not be set.
     */
    fpVal?: number | null;
    /**
     * Integer value. When this is set, other values must not be set.
     */
    intVal?: number | null;
    /**
     * Map value. The valid key space and units for the corresponding value of each entry should be documented as part of the data type definition. Keys should be kept small whenever possible. Data streams with large keys and high data frequency may be down sampled.
     */
    mapVal?: Schema$ValueMapValEntry[];
    /**
     * String value. When this is set, other values must not be set. Strings should be kept small whenever possible. Data streams with large string values and high data frequency may be down sampled.
     */
    stringVal?: string | null;
  }
  export interface Schema$ValueMapValEntry {
    key?: string | null;
    value?: Schema$MapValue;
  }

  export class Resource$Users {
    context: APIRequestContext;
    dataset: Resource$Users$Dataset;
    dataSources: Resource$Users$Datasources;
    sessions: Resource$Users$Sessions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataset = new Resource$Users$Dataset(this.context);
      this.dataSources = new Resource$Users$Datasources(this.context);
      this.sessions = new Resource$Users$Sessions(this.context);
    }
  }

  export class Resource$Users$Dataset {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Aggregates data of a certain type or stream into buckets divided by a given type of boundary. Multiple data sets of multiple types and from multiple sources can be aggregated into exactly one bucket type per request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.read',
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.read',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.read',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.read',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.read',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.read',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.read',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.read',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.read',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.read',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.read',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.dataset.aggregate({
     *     // Aggregate data for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aggregateBy": [],
     *       //   "bucketByActivitySegment": {},
     *       //   "bucketByActivityType": {},
     *       //   "bucketBySession": {},
     *       //   "bucketByTime": {},
     *       //   "endTimeMillis": "my_endTimeMillis",
     *       //   "filteredDataQualityStandard": [],
     *       //   "startTimeMillis": "my_startTimeMillis"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bucket": []
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
    aggregate(
      params: Params$Resource$Users$Dataset$Aggregate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    aggregate(
      params?: Params$Resource$Users$Dataset$Aggregate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AggregateResponse>>;
    aggregate(
      params: Params$Resource$Users$Dataset$Aggregate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    aggregate(
      params: Params$Resource$Users$Dataset$Aggregate,
      options: MethodOptions | BodyResponseCallback<Schema$AggregateResponse>,
      callback: BodyResponseCallback<Schema$AggregateResponse>
    ): void;
    aggregate(
      params: Params$Resource$Users$Dataset$Aggregate,
      callback: BodyResponseCallback<Schema$AggregateResponse>
    ): void;
    aggregate(callback: BodyResponseCallback<Schema$AggregateResponse>): void;
    aggregate(
      paramsOrCallback?:
        | Params$Resource$Users$Dataset$Aggregate
        | BodyResponseCallback<Schema$AggregateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AggregateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AggregateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AggregateResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Dataset$Aggregate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Dataset$Aggregate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/dataset:aggregate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AggregateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AggregateResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Dataset$Aggregate
    extends StandardParameters {
    /**
     * Aggregate data for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AggregateRequest;
  }

  export class Resource$Users$Datasources {
    context: APIRequestContext;
    dataPointChanges: Resource$Users$Datasources$Datapointchanges;
    datasets: Resource$Users$Datasources$Datasets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataPointChanges = new Resource$Users$Datasources$Datapointchanges(
        this.context
      );
      this.datasets = new Resource$Users$Datasources$Datasets(this.context);
    }

    /**
     * Creates a new data source that is unique across all data sources belonging to this user. A data source is a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point in every dataset inserted into or read from the Fitness API has an associated data source. Each data source produces a unique stream of dataset updates, with a unique data source identifier. Not all changes to data source affect the data stream ID, so that data collected by updated versions of the same application/device can still be considered to belong to the same data source. Data sources are identified using a string generated by the server, based on the contents of the source being created. The dataStreamId field should not be set when invoking this method. It will be automatically generated by the server with the correct format. If a dataStreamId is set, it must match the format that the server would generate. This format is a combination of some fields from the data source, and has a specific order. If it doesn't match, the request will fail with an error. Specifying a DataType which is not a known type (beginning with "com.google.") will create a DataSource with a *custom data type*. Custom data types are only readable by the application that created them. Custom data types are *deprecated*; use standard data types instead. In addition to the data source fields included in the data source ID, the developer project number that is authenticated when creating the data source is included. This developer project number is obfuscated when read by any other developer reading public data types.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.dataSources.create({
     *     // Create the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "application": {},
     *       //   "dataQualityStandard": [],
     *       //   "dataStreamId": "my_dataStreamId",
     *       //   "dataStreamName": "my_dataStreamName",
     *       //   "dataType": {},
     *       //   "device": {},
     *       //   "name": "my_name",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "application": {},
     *   //   "dataQualityStandard": [],
     *   //   "dataStreamId": "my_dataStreamId",
     *   //   "dataStreamName": "my_dataStreamName",
     *   //   "dataType": {},
     *   //   "device": {},
     *   //   "name": "my_name",
     *   //   "type": "my_type"
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
      params: Params$Resource$Users$Datasources$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Users$Datasources$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>;
    create(
      params: Params$Resource$Users$Datasources$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Datasources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    create(
      params: Params$Resource$Users$Datasources$Create,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    create(callback: BodyResponseCallback<Schema$DataSource>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Create
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/fitness/v1/users/{userId}/dataSources').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * Deletes the specified data source. The request will fail if the data source contains any data points.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.dataSources.delete({
     *     // The data stream ID of the data source to delete.
     *     dataSourceId: 'placeholder-value',
     *     // Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "application": {},
     *   //   "dataQualityStandard": [],
     *   //   "dataStreamId": "my_dataStreamId",
     *   //   "dataStreamName": "my_dataStreamName",
     *   //   "dataType": {},
     *   //   "device": {},
     *   //   "name": "my_name",
     *   //   "type": "my_type"
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
    delete(
      params: Params$Resource$Users$Datasources$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Users$Datasources$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>;
    delete(
      params: Params$Resource$Users$Datasources$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Datasources$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    delete(
      params: Params$Resource$Users$Datasources$Delete,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    delete(callback: BodyResponseCallback<Schema$DataSource>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Delete
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/dataSources/{dataSourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId'],
        pathParams: ['dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * Returns the specified data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.read',
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.read',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.read',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.read',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.read',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.read',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.read',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.read',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.read',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.read',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.read',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.dataSources.get({
     *     // The data stream ID of the data source to retrieve.
     *     dataSourceId: 'placeholder-value',
     *     // Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "application": {},
     *   //   "dataQualityStandard": [],
     *   //   "dataStreamId": "my_dataStreamId",
     *   //   "dataStreamName": "my_dataStreamName",
     *   //   "dataType": {},
     *   //   "device": {},
     *   //   "name": "my_name",
     *   //   "type": "my_type"
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
      params: Params$Resource$Users$Datasources$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Users$Datasources$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>;
    get(
      params: Params$Resource$Users$Datasources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Datasources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(
      params: Params$Resource$Users$Datasources$Get,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Get
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/dataSources/{dataSourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId'],
        pathParams: ['dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * Lists all data sources that are visible to the developer, using the OAuth scopes provided. The list is not exhaustive; the user may have private data sources that are only visible to other developers, or calls using other scopes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.read',
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.read',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.read',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.read',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.read',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.read',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.read',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.read',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.read',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.read',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.read',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.dataSources.list({
     *     // The names of data types to include in the list. If not specified, all data sources will be returned.
     *     dataTypeName: 'placeholder-value',
     *     // List data sources for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSource": []
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
      params: Params$Resource$Users$Datasources$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Users$Datasources$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDataSourcesResponse>>;
    list(
      params: Params$Resource$Users$Datasources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Datasources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Users$Datasources$List,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$List
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDataSourcesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/fitness/v1/users/{userId}/dataSources').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDataSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataSourcesResponse>(parameters);
      }
    }

    /**
     * Updates the specified data source. The dataStreamId, dataType, type, dataStreamName, and device properties with the exception of version, cannot be modified. Data sources are identified by their dataStreamId.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.dataSources.update({
     *     // The data stream ID of the data source to update.
     *     dataSourceId: 'placeholder-value',
     *     // Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "application": {},
     *       //   "dataQualityStandard": [],
     *       //   "dataStreamId": "my_dataStreamId",
     *       //   "dataStreamName": "my_dataStreamName",
     *       //   "dataType": {},
     *       //   "device": {},
     *       //   "name": "my_name",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "application": {},
     *   //   "dataQualityStandard": [],
     *   //   "dataStreamId": "my_dataStreamId",
     *   //   "dataStreamName": "my_dataStreamName",
     *   //   "dataType": {},
     *   //   "device": {},
     *   //   "name": "my_name",
     *   //   "type": "my_type"
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
      params: Params$Resource$Users$Datasources$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Users$Datasources$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>;
    update(
      params: Params$Resource$Users$Datasources$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Users$Datasources$Update,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    update(
      params: Params$Resource$Users$Datasources$Update,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    update(callback: BodyResponseCallback<Schema$DataSource>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Update
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DataSource>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/dataSources/{dataSourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId'],
        pathParams: ['dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Datasources$Create
    extends StandardParameters {
    /**
     * Create the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSource;
  }
  export interface Params$Resource$Users$Datasources$Delete
    extends StandardParameters {
    /**
     * The data stream ID of the data source to delete.
     */
    dataSourceId?: string;
    /**
     * Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Datasources$Get
    extends StandardParameters {
    /**
     * The data stream ID of the data source to retrieve.
     */
    dataSourceId?: string;
    /**
     * Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Datasources$List
    extends StandardParameters {
    /**
     * The names of data types to include in the list. If not specified, all data sources will be returned.
     */
    dataTypeName?: string[];
    /**
     * List data sources for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Datasources$Update
    extends StandardParameters {
    /**
     * The data stream ID of the data source to update.
     */
    dataSourceId?: string;
    /**
     * Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSource;
  }

  export class Resource$Users$Datasources$Datapointchanges {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Queries for user's data point changes for a particular data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.read',
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.read',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.read',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.read',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.read',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.read',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.read',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.read',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.read',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.read',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.read',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.dataSources.dataPointChanges.list({
     *     // The data stream ID of the data source that created the dataset.
     *     dataSourceId: 'placeholder-value',
     *     // If specified, no more than this many data point changes will be included in the response.
     *     limit: 'placeholder-value',
     *     // The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     *     pageToken: 'placeholder-value',
     *     // List data points for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "deletedDataPoint": [],
     *   //   "insertedDataPoint": [],
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
      params: Params$Resource$Users$Datasources$Datapointchanges$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Users$Datasources$Datapointchanges$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDataPointChangesResponse>>;
    list(
      params: Params$Resource$Users$Datasources$Datapointchanges$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Datasources$Datapointchanges$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataPointChangesResponse>,
      callback: BodyResponseCallback<Schema$ListDataPointChangesResponse>
    ): void;
    list(
      params: Params$Resource$Users$Datasources$Datapointchanges$List,
      callback: BodyResponseCallback<Schema$ListDataPointChangesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDataPointChangesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Datapointchanges$List
        | BodyResponseCallback<Schema$ListDataPointChangesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataPointChangesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataPointChangesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDataPointChangesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Datapointchanges$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Datapointchanges$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/fitness/v1/users/{userId}/dataSources/{dataSourceId}/dataPointChanges'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId'],
        pathParams: ['dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDataPointChangesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDataPointChangesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Users$Datasources$Datapointchanges$List
    extends StandardParameters {
    /**
     * The data stream ID of the data source that created the dataset.
     */
    dataSourceId?: string;
    /**
     * If specified, no more than this many data point changes will be included in the response.
     */
    limit?: number;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     */
    pageToken?: string;
    /**
     * List data points for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }

  export class Resource$Users$Datasources$Datasets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Performs an inclusive delete of all data points whose start and end times have any overlap with the time range specified by the dataset ID. For most data types, the entire data point will be deleted. For data types where the time span represents a consistent value (such as com.google.activity.segment), and a data point straddles either end point of the dataset, only the overlapping portion of the data point will be deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.dataSources.datasets.delete({
     *     // Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     *     datasetId: 'placeholder-value',
     *     // The data stream ID of the data source that created the dataset.
     *     dataSourceId: 'placeholder-value',
     *     // Delete a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
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
      params: Params$Resource$Users$Datasources$Datasets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Users$Datasources$Datasets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Users$Datasources$Datasets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Datasources$Datasets$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Datasources$Datasets$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Datasets$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Datasets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Datasets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/fitness/v1/users/{userId}/dataSources/{dataSourceId}/datasets/{datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId', 'datasetId'],
        pathParams: ['datasetId', 'dataSourceId', 'userId'],
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
     * Returns a dataset containing all data points whose start and end times overlap with the specified range of the dataset minimum start time and maximum end time. Specifically, any data point whose start time is less than or equal to the dataset end time and whose end time is greater than or equal to the dataset start time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.read',
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.read',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.read',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.read',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.read',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.read',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.read',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.read',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.read',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.read',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.read',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.dataSources.datasets.get({
     *     // Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     *     datasetId: 'placeholder-value',
     *     // The data stream ID of the data source that created the dataset.
     *     dataSourceId: 'placeholder-value',
     *     // If specified, no more than this many data points will be included in the dataset. If there are more data points in the dataset, nextPageToken will be set in the dataset response. The limit is applied from the end of the time range. That is, if pageToken is absent, the limit most recent data points will be returned.
     *     limit: 'placeholder-value',
     *     // The continuation token, which is used to page through large datasets. To get the next page of a dataset, set this parameter to the value of nextPageToken from the previous response. Each subsequent call will yield a partial dataset with data point end timestamps that are strictly smaller than those in the previous partial response.
     *     pageToken: 'placeholder-value',
     *     // Retrieve a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "maxEndTimeNs": "my_maxEndTimeNs",
     *   //   "minStartTimeNs": "my_minStartTimeNs",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "point": []
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
      params: Params$Resource$Users$Datasources$Datasets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Users$Datasources$Datasets$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Dataset>>;
    get(
      params: Params$Resource$Users$Datasources$Datasets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Datasources$Datasets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    get(
      params: Params$Resource$Users$Datasources$Datasets$Get,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    get(callback: BodyResponseCallback<Schema$Dataset>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Datasets$Get
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Dataset>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Datasets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Datasets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/fitness/v1/users/{userId}/dataSources/{dataSourceId}/datasets/{datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId', 'datasetId'],
        pathParams: ['datasetId', 'dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * Adds data points to a dataset. The dataset need not be previously created. All points within the given dataset will be returned with subsquent calls to retrieve this dataset. Data points can belong to more than one dataset. This method does not use patch semantics: the data points provided are merely inserted, with no existing data replaced.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.dataSources.datasets.patch({
     *     // This field is not used, and can be safely omitted.
     *     datasetId: 'placeholder-value',
     *     // The data stream ID of the data source that created the dataset.
     *     dataSourceId: 'placeholder-value',
     *     // Patch a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceId": "my_dataSourceId",
     *       //   "maxEndTimeNs": "my_maxEndTimeNs",
     *       //   "minStartTimeNs": "my_minStartTimeNs",
     *       //   "nextPageToken": "my_nextPageToken",
     *       //   "point": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "maxEndTimeNs": "my_maxEndTimeNs",
     *   //   "minStartTimeNs": "my_minStartTimeNs",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "point": []
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
      params: Params$Resource$Users$Datasources$Datasets$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Users$Datasources$Datasets$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Dataset>>;
    patch(
      params: Params$Resource$Users$Datasources$Datasets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Users$Datasources$Datasets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    patch(
      params: Params$Resource$Users$Datasources$Datasets$Patch,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Dataset>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Datasets$Patch
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Dataset>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Datasets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Datasets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/fitness/v1/users/{userId}/dataSources/{dataSourceId}/datasets/{datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId', 'datasetId'],
        pathParams: ['datasetId', 'dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Datasources$Datasets$Delete
    extends StandardParameters {
    /**
     * Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     */
    datasetId?: string;
    /**
     * The data stream ID of the data source that created the dataset.
     */
    dataSourceId?: string;
    /**
     * Delete a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Datasources$Datasets$Get
    extends StandardParameters {
    /**
     * Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     */
    datasetId?: string;
    /**
     * The data stream ID of the data source that created the dataset.
     */
    dataSourceId?: string;
    /**
     * If specified, no more than this many data points will be included in the dataset. If there are more data points in the dataset, nextPageToken will be set in the dataset response. The limit is applied from the end of the time range. That is, if pageToken is absent, the limit most recent data points will be returned.
     */
    limit?: number;
    /**
     * The continuation token, which is used to page through large datasets. To get the next page of a dataset, set this parameter to the value of nextPageToken from the previous response. Each subsequent call will yield a partial dataset with data point end timestamps that are strictly smaller than those in the previous partial response.
     */
    pageToken?: string;
    /**
     * Retrieve a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Datasources$Datasets$Patch
    extends StandardParameters {
    /**
     * This field is not used, and can be safely omitted.
     */
    datasetId?: string;
    /**
     * The data stream ID of the data source that created the dataset.
     */
    dataSourceId?: string;
    /**
     * Patch a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }

  export class Resource$Users$Sessions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a session specified by the given session ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.sessions.delete({
     *     // The ID of the session to be deleted.
     *     sessionId: 'placeholder-value',
     *     // Delete a session for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
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
      params: Params$Resource$Users$Sessions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Users$Sessions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Users$Sessions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Sessions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Sessions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Sessions$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Sessions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Sessions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/sessions/{sessionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sessionId'],
        pathParams: ['sessionId', 'userId'],
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
     * Lists sessions previously created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.read',
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.read',
     *       'https://www.googleapis.com/auth/fitness.blood_glucose.write',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.read',
     *       'https://www.googleapis.com/auth/fitness.blood_pressure.write',
     *       'https://www.googleapis.com/auth/fitness.body.read',
     *       'https://www.googleapis.com/auth/fitness.body.write',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.read',
     *       'https://www.googleapis.com/auth/fitness.body_temperature.write',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.read',
     *       'https://www.googleapis.com/auth/fitness.heart_rate.write',
     *       'https://www.googleapis.com/auth/fitness.location.read',
     *       'https://www.googleapis.com/auth/fitness.location.write',
     *       'https://www.googleapis.com/auth/fitness.nutrition.read',
     *       'https://www.googleapis.com/auth/fitness.nutrition.write',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.read',
     *       'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.read',
     *       'https://www.googleapis.com/auth/fitness.reproductive_health.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.read',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.sessions.list({
     *     // If non-empty, only sessions with these activity types should be returned.
     *     activityType: 'placeholder-value',
     *     // An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response. If this time is omitted but startTime is specified, all sessions from startTime to the end of time will be returned.
     *     endTime: 'placeholder-value',
     *     // If true, and if both startTime and endTime are omitted, session deletions will be returned.
     *     includeDeleted: 'placeholder-value',
     *     // The continuation token, which is used for incremental syncing. To get the next batch of changes, set this parameter to the value of nextPageToken from the previous response. The page token is ignored if either start or end time is specified. If none of start time, end time, and the page token is specified, sessions modified in the last 30 days are returned.
     *     pageToken: 'placeholder-value',
     *     // An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response. If this time is omitted but endTime is specified, all sessions from the start of time up to endTime will be returned.
     *     startTime: 'placeholder-value',
     *     // List sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deletedSession": [],
     *   //   "hasMoreData": false,
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "session": []
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
      params: Params$Resource$Users$Sessions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Users$Sessions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSessionsResponse>>;
    list(
      params: Params$Resource$Users$Sessions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Sessions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSessionsResponse>,
      callback: BodyResponseCallback<Schema$ListSessionsResponse>
    ): void;
    list(
      params: Params$Resource$Users$Sessions$List,
      callback: BodyResponseCallback<Schema$ListSessionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSessionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Sessions$List
        | BodyResponseCallback<Schema$ListSessionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSessionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSessionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSessionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Sessions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Sessions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/fitness/v1/users/{userId}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSessionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSessionsResponse>(parameters);
      }
    }

    /**
     * Updates or insert a given session.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/fitness.googleapis.com
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
     * const fitness = google.fitness('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/fitness.activity.write',
     *       'https://www.googleapis.com/auth/fitness.sleep.write',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await fitness.users.sessions.update({
     *     // The ID of the session to be created.
     *     sessionId: 'placeholder-value',
     *     // Create sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "activeTimeMillis": "my_activeTimeMillis",
     *       //   "activityType": 0,
     *       //   "application": {},
     *       //   "description": "my_description",
     *       //   "endTimeMillis": "my_endTimeMillis",
     *       //   "id": "my_id",
     *       //   "modifiedTimeMillis": "my_modifiedTimeMillis",
     *       //   "name": "my_name",
     *       //   "startTimeMillis": "my_startTimeMillis"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeTimeMillis": "my_activeTimeMillis",
     *   //   "activityType": 0,
     *   //   "application": {},
     *   //   "description": "my_description",
     *   //   "endTimeMillis": "my_endTimeMillis",
     *   //   "id": "my_id",
     *   //   "modifiedTimeMillis": "my_modifiedTimeMillis",
     *   //   "name": "my_name",
     *   //   "startTimeMillis": "my_startTimeMillis"
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
      params: Params$Resource$Users$Sessions$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Users$Sessions$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Session>>;
    update(
      params: Params$Resource$Users$Sessions$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Users$Sessions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Session>,
      callback: BodyResponseCallback<Schema$Session>
    ): void;
    update(
      params: Params$Resource$Users$Sessions$Update,
      callback: BodyResponseCallback<Schema$Session>
    ): void;
    update(callback: BodyResponseCallback<Schema$Session>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Users$Sessions$Update
        | BodyResponseCallback<Schema$Session>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Session>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Session>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Session>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Sessions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Sessions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fitness.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/sessions/{sessionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sessionId'],
        pathParams: ['sessionId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Session>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Session>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Sessions$Delete
    extends StandardParameters {
    /**
     * The ID of the session to be deleted.
     */
    sessionId?: string;
    /**
     * Delete a session for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Sessions$List
    extends StandardParameters {
    /**
     * If non-empty, only sessions with these activity types should be returned.
     */
    activityType?: number[];
    /**
     * An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response. If this time is omitted but startTime is specified, all sessions from startTime to the end of time will be returned.
     */
    endTime?: string;
    /**
     * If true, and if both startTime and endTime are omitted, session deletions will be returned.
     */
    includeDeleted?: boolean;
    /**
     * The continuation token, which is used for incremental syncing. To get the next batch of changes, set this parameter to the value of nextPageToken from the previous response. The page token is ignored if either start or end time is specified. If none of start time, end time, and the page token is specified, sessions modified in the last 30 days are returned.
     */
    pageToken?: string;
    /**
     * An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response. If this time is omitted but endTime is specified, all sessions from the start of time up to endTime will be returned.
     */
    startTime?: string;
    /**
     * List sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Sessions$Update
    extends StandardParameters {
    /**
     * The ID of the session to be created.
     */
    sessionId?: string;
    /**
     * Create sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Session;
  }
}
