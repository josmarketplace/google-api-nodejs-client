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

export namespace businessprofileperformance_v1 {
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
   * Business Profile Performance API
   *
   * The Business Profile Performance API allows merchants to fetch performance reports about their business profile on Google. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const businessprofileperformance = google.businessprofileperformance('v1');
   * ```
   */
  export class Businessprofileperformance {
    context: APIRequestContext;
    locations: Resource$Locations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.locations = new Resource$Locations(this.context);
    }
  }

  /**
   * Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple.
   */
  export interface Schema$DailyMetricTimeSeries {
    /**
     * The DailyMetric that the TimeSeries represents.
     */
    dailyMetric?: string | null;
    /**
     * The DailySubEntityType that the TimeSeries represents. Will not be present when breakdown does not exist.
     */
    dailySubEntityType?: Schema$DailySubEntityType;
    /**
     * List of datapoints where each datapoint is a date-value pair.
     */
    timeSeries?: Schema$TimeSeries;
  }
  /**
   * Represents all possible subentity types that are associated with DailyMetrics.
   */
  export interface Schema$DailySubEntityType {
    /**
     * Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE.
     */
    dayOfWeek?: string | null;
    /**
     * Represents the time of the day in 24 hour format. Eg: 13:34:20 Currently supported DailyMetrics = NONE.
     */
    timeOfDay?: Schema$TimeOfDay;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Represents a single datapoint in the timeseries, where each datapoint is a date-value pair.
   */
  export interface Schema$DatedValue {
    /**
     * The date that the datapoint corresponds to. This represents a month value if the day field is not set.
     */
    date?: Schema$Date;
    /**
     * The value of the datapoint. This will not be present when the value is zero.
     */
    value?: string | null;
  }
  /**
   * Represents the response for FetchMultiDailyMetricsTimeSeries.
   */
  export interface Schema$FetchMultiDailyMetricsTimeSeriesResponse {
    /**
     * DailyMetrics and their corresponding time series.
     */
    multiDailyMetricTimeSeries?: Schema$MultiDailyMetricTimeSeries[];
  }
  /**
   * Represents the response for GetDailyMetricsTimeSeries.
   */
  export interface Schema$GetDailyMetricsTimeSeriesResponse {
    /**
     * The daily time series.
     */
    timeSeries?: Schema$TimeSeries;
  }
  /**
   * Represents an insights value.
   */
  export interface Schema$InsightsValue {
    /**
     * Represents the threshold below which the actual value falls.
     */
    threshold?: string | null;
    /**
     * Represents the actual value.
     */
    value?: string | null;
  }
  /**
   * Represents the response for ListSearchKeywordImpressionsMonthly.
   */
  export interface Schema$ListSearchKeywordImpressionsMonthlyResponse {
    /**
     * A token indicating the last paginated result returned. This can be used by succeeding requests to get the next "page" of keywords. It will only be present when there are more results to be returned.
     */
    nextPageToken?: string | null;
    /**
     * Search terms which have been used to find a business.
     */
    searchKeywordsCounts?: Schema$SearchKeywordCount[];
  }
  /**
   * Represents a list of tuples of DailyMetric-DailySubEntityType-TimeSeries.
   */
  export interface Schema$MultiDailyMetricTimeSeries {
    /**
     * List of DailyMetric-TimeSeries pairs.
     */
    dailyMetricTimeSeries?: Schema$DailyMetricTimeSeries[];
  }
  /**
   * Represents a single search keyword and its value.
   */
  export interface Schema$SearchKeywordCount {
    /**
     * One of either: 1) The sum of the number of unique users that used the keyword in a month, aggregated for each month requested. 2) A threshold that indicates that the actual value is below this threshold.
     */
    insightsValue?: Schema$InsightsValue;
    /**
     * The lower-cased string that the user entered.
     */
    searchKeyword?: string | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * Represents a timeseries.
   */
  export interface Schema$TimeSeries {
    /**
     * List of datapoints in the timeseries, where each datapoint is a date-value pair.
     */
    datedValues?: Schema$DatedValue[];
  }

  export class Resource$Locations {
    context: APIRequestContext;
    searchkeywords: Resource$Locations$Searchkeywords;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.searchkeywords = new Resource$Locations$Searchkeywords(this.context);
    }

    /**
     *  Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/businessprofileperformance.googleapis.com
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
     * const businessprofileperformance = google.businessprofileperformance('v1');
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
     *     await businessprofileperformance.locations.fetchMultiDailyMetricsTimeSeries(
     *       {
     *         // Required. The metrics to retrieve time series for.
     *         dailyMetrics: 'placeholder-value',
     *         // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *         'dailyRange.endDate.day': 'placeholder-value',
     *         // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *         'dailyRange.endDate.month': 'placeholder-value',
     *         // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *         'dailyRange.endDate.year': 'placeholder-value',
     *         // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *         'dailyRange.startDate.day': 'placeholder-value',
     *         // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *         'dailyRange.startDate.month': 'placeholder-value',
     *         // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *         'dailyRange.startDate.year': 'placeholder-value',
     *         // Required. The location for which the time series should be fetched. Format: locations/{location_id\} where location_id is an unobfuscated listing id.
     *         location: 'locations/my-location',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "multiDailyMetricTimeSeries": []
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
    fetchMultiDailyMetricsTimeSeries(
      params: Params$Resource$Locations$Fetchmultidailymetricstimeseries,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchMultiDailyMetricsTimeSeries(
      params?: Params$Resource$Locations$Fetchmultidailymetricstimeseries,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$FetchMultiDailyMetricsTimeSeriesResponse>
    >;
    fetchMultiDailyMetricsTimeSeries(
      params: Params$Resource$Locations$Fetchmultidailymetricstimeseries,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchMultiDailyMetricsTimeSeries(
      params: Params$Resource$Locations$Fetchmultidailymetricstimeseries,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchMultiDailyMetricsTimeSeriesResponse>,
      callback: BodyResponseCallback<Schema$FetchMultiDailyMetricsTimeSeriesResponse>
    ): void;
    fetchMultiDailyMetricsTimeSeries(
      params: Params$Resource$Locations$Fetchmultidailymetricstimeseries,
      callback: BodyResponseCallback<Schema$FetchMultiDailyMetricsTimeSeriesResponse>
    ): void;
    fetchMultiDailyMetricsTimeSeries(
      callback: BodyResponseCallback<Schema$FetchMultiDailyMetricsTimeSeriesResponse>
    ): void;
    fetchMultiDailyMetricsTimeSeries(
      paramsOrCallback?:
        | Params$Resource$Locations$Fetchmultidailymetricstimeseries
        | BodyResponseCallback<Schema$FetchMultiDailyMetricsTimeSeriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchMultiDailyMetricsTimeSeriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchMultiDailyMetricsTimeSeriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$FetchMultiDailyMetricsTimeSeriesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Fetchmultidailymetricstimeseries;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Locations$Fetchmultidailymetricstimeseries;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://businessprofileperformance.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+location}:fetchMultiDailyMetricsTimeSeries'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['location'],
        pathParams: ['location'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchMultiDailyMetricsTimeSeriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchMultiDailyMetricsTimeSeriesResponse>(
          parameters
        );
      }
    }

    /**
     *  Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/businessprofileperformance.googleapis.com
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
     * const businessprofileperformance = google.businessprofileperformance('v1');
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
     *     await businessprofileperformance.locations.getDailyMetricsTimeSeries({
     *       // Required. The metric to retrieve time series.
     *       dailyMetric: 'placeholder-value',
     *       // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *       'dailyRange.endDate.day': 'placeholder-value',
     *       // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *       'dailyRange.endDate.month': 'placeholder-value',
     *       // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *       'dailyRange.endDate.year': 'placeholder-value',
     *       // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *       'dailyRange.startDate.day': 'placeholder-value',
     *       // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *       'dailyRange.startDate.month': 'placeholder-value',
     *       // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *       'dailyRange.startDate.year': 'placeholder-value',
     *       // Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE.
     *       'dailySubEntityType.dayOfWeek': 'placeholder-value',
     *       // Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     *       'dailySubEntityType.timeOfDay.hours': 'placeholder-value',
     *       // Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     *       'dailySubEntityType.timeOfDay.minutes': 'placeholder-value',
     *       // Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     *       'dailySubEntityType.timeOfDay.nanos': 'placeholder-value',
     *       // Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     *       'dailySubEntityType.timeOfDay.seconds': 'placeholder-value',
     *       // Required. The location for which the time series should be fetched. Format: locations/{location_id\} where location_id is an unobfuscated listing id.
     *       name: 'locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "timeSeries": {}
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
    getDailyMetricsTimeSeries(
      params: Params$Resource$Locations$Getdailymetricstimeseries,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getDailyMetricsTimeSeries(
      params?: Params$Resource$Locations$Getdailymetricstimeseries,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GetDailyMetricsTimeSeriesResponse>
    >;
    getDailyMetricsTimeSeries(
      params: Params$Resource$Locations$Getdailymetricstimeseries,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDailyMetricsTimeSeries(
      params: Params$Resource$Locations$Getdailymetricstimeseries,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetDailyMetricsTimeSeriesResponse>,
      callback: BodyResponseCallback<Schema$GetDailyMetricsTimeSeriesResponse>
    ): void;
    getDailyMetricsTimeSeries(
      params: Params$Resource$Locations$Getdailymetricstimeseries,
      callback: BodyResponseCallback<Schema$GetDailyMetricsTimeSeriesResponse>
    ): void;
    getDailyMetricsTimeSeries(
      callback: BodyResponseCallback<Schema$GetDailyMetricsTimeSeriesResponse>
    ): void;
    getDailyMetricsTimeSeries(
      paramsOrCallback?:
        | Params$Resource$Locations$Getdailymetricstimeseries
        | BodyResponseCallback<Schema$GetDailyMetricsTimeSeriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetDailyMetricsTimeSeriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetDailyMetricsTimeSeriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GetDailyMetricsTimeSeriesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Getdailymetricstimeseries;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Getdailymetricstimeseries;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://businessprofileperformance.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getDailyMetricsTimeSeries').replace(
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
        createAPIRequest<Schema$GetDailyMetricsTimeSeriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetDailyMetricsTimeSeriesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Locations$Fetchmultidailymetricstimeseries
    extends StandardParameters {
    /**
     * Required. The metrics to retrieve time series for.
     */
    dailyMetrics?: string[];
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'dailyRange.endDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'dailyRange.endDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'dailyRange.endDate.year'?: number;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'dailyRange.startDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'dailyRange.startDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'dailyRange.startDate.year'?: number;
    /**
     * Required. The location for which the time series should be fetched. Format: locations/{location_id\} where location_id is an unobfuscated listing id.
     */
    location?: string;
  }
  export interface Params$Resource$Locations$Getdailymetricstimeseries
    extends StandardParameters {
    /**
     * Required. The metric to retrieve time series.
     */
    dailyMetric?: string;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'dailyRange.endDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'dailyRange.endDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'dailyRange.endDate.year'?: number;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'dailyRange.startDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'dailyRange.startDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'dailyRange.startDate.year'?: number;
    /**
     * Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE.
     */
    'dailySubEntityType.dayOfWeek'?: string;
    /**
     * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    'dailySubEntityType.timeOfDay.hours'?: number;
    /**
     * Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     */
    'dailySubEntityType.timeOfDay.minutes'?: number;
    /**
     * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     */
    'dailySubEntityType.timeOfDay.nanos'?: number;
    /**
     * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    'dailySubEntityType.timeOfDay.seconds'?: number;
    /**
     * Required. The location for which the time series should be fetched. Format: locations/{location_id\} where location_id is an unobfuscated listing id.
     */
    name?: string;
  }

  export class Resource$Locations$Searchkeywords {
    context: APIRequestContext;
    impressions: Resource$Locations$Searchkeywords$Impressions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.impressions = new Resource$Locations$Searchkeywords$Impressions(
        this.context
      );
    }
  }

  export class Resource$Locations$Searchkeywords$Impressions {
    context: APIRequestContext;
    monthly: Resource$Locations$Searchkeywords$Impressions$Monthly;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.monthly = new Resource$Locations$Searchkeywords$Impressions$Monthly(
        this.context
      );
    }
  }

  export class Resource$Locations$Searchkeywords$Impressions$Monthly {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/businessprofileperformance.googleapis.com
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
     * const businessprofileperformance = google.businessprofileperformance('v1');
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
     *     await businessprofileperformance.locations.searchkeywords.impressions.monthly.list(
     *       {
     *         // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *         'monthlyRange.endMonth.day': 'placeholder-value',
     *         // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *         'monthlyRange.endMonth.month': 'placeholder-value',
     *         // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *         'monthlyRange.endMonth.year': 'placeholder-value',
     *         // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *         'monthlyRange.startMonth.day': 'placeholder-value',
     *         // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *         'monthlyRange.startMonth.month': 'placeholder-value',
     *         // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *         'monthlyRange.startMonth.year': 'placeholder-value',
     *         // Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token indicating the next paginated result to be returned.
     *         pageToken: 'placeholder-value',
     *         // Required. The location for which the time series should be fetched. Format: locations/{location_id\} where location_id is an unobfuscated listing id.
     *         parent: 'locations/my-location',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "searchKeywordsCounts": []
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
      params: Params$Resource$Locations$Searchkeywords$Impressions$Monthly$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Locations$Searchkeywords$Impressions$Monthly$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListSearchKeywordImpressionsMonthlyResponse>
    >;
    list(
      params: Params$Resource$Locations$Searchkeywords$Impressions$Monthly$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Locations$Searchkeywords$Impressions$Monthly$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSearchKeywordImpressionsMonthlyResponse>,
      callback: BodyResponseCallback<Schema$ListSearchKeywordImpressionsMonthlyResponse>
    ): void;
    list(
      params: Params$Resource$Locations$Searchkeywords$Impressions$Monthly$List,
      callback: BodyResponseCallback<Schema$ListSearchKeywordImpressionsMonthlyResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSearchKeywordImpressionsMonthlyResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Locations$Searchkeywords$Impressions$Monthly$List
        | BodyResponseCallback<Schema$ListSearchKeywordImpressionsMonthlyResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSearchKeywordImpressionsMonthlyResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSearchKeywordImpressionsMonthlyResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListSearchKeywordImpressionsMonthlyResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Searchkeywords$Impressions$Monthly$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Locations$Searchkeywords$Impressions$Monthly$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://businessprofileperformance.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/searchkeywords/impressions/monthly'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListSearchKeywordImpressionsMonthlyResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSearchKeywordImpressionsMonthlyResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Locations$Searchkeywords$Impressions$Monthly$List
    extends StandardParameters {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'monthlyRange.endMonth.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'monthlyRange.endMonth.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'monthlyRange.endMonth.year'?: number;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'monthlyRange.startMonth.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'monthlyRange.startMonth.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'monthlyRange.startMonth.year'?: number;
    /**
     * Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100.
     */
    pageSize?: number;
    /**
     * Optional. A token indicating the next paginated result to be returned.
     */
    pageToken?: string;
    /**
     * Required. The location for which the time series should be fetched. Format: locations/{location_id\} where location_id is an unobfuscated listing id.
     */
    parent?: string;
  }
}
