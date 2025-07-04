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

export namespace analyticsdata_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * Google Analytics Data API
   *
   * Accesses report data in Google Analytics. Warning: Creating multiple Customer Applications, Accounts, or Projects to simulate or act as a single Customer Application, Account, or Project (respectively) or to circumvent Service-specific usage limits or quotas is a direct violation of Google Cloud Platform Terms of Service as well as Google APIs Terms of Service. These actions can result in immediate termination of your GCP project(s) without any warning.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const analyticsdata = google.analyticsdata('v1beta');
   * ```
   */
  export class Analyticsdata {
    context: APIRequestContext;
    properties: Resource$Properties;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.properties = new Resource$Properties(this.context);
    }
  }

  /**
   * A metric actively restricted in creating the report.
   */
  export interface Schema$ActiveMetricRestriction {
    /**
     * The name of the restricted metric.
     */
    metricName?: string | null;
    /**
     * The reason for this metric's restriction.
     */
    restrictedMetricTypes?: string[] | null;
  }
  /**
   * An audience export is a list of users in an audience at the time of the list's creation. One audience may have multiple audience exports created for different days.
   */
  export interface Schema$AudienceExport {
    /**
     * Required. The audience resource name. This resource name identifies the audience being listed and is shared between the Analytics Data & Admin APIs. Format: `properties/{property\}/audiences/{audience\}`
     */
    audience?: string | null;
    /**
     * Output only. The descriptive display name for this audience. For example, "Purchasers".
     */
    audienceDisplayName?: string | null;
    /**
     * Output only. The time when CreateAudienceExport was called and the AudienceExport began the `CREATING` state.
     */
    beginCreatingTime?: string | null;
    /**
     * Output only. The total quota tokens charged during creation of the AudienceExport. Because this token count is based on activity from the `CREATING` state, this tokens charged will be fixed once an AudienceExport enters the `ACTIVE` or `FAILED` states.
     */
    creationQuotaTokensCharged?: number | null;
    /**
     * Required. The dimensions requested and displayed in the query response.
     */
    dimensions?: Schema$V1betaAudienceDimension[];
    /**
     * Output only. Error message is populated when an audience export fails during creation. A common reason for such a failure is quota exhaustion.
     */
    errorMessage?: string | null;
    /**
     * Output only. Identifier. The audience export resource name assigned during creation. This resource name identifies this `AudienceExport`. Format: `properties/{property\}/audienceExports/{audience_export\}`
     */
    name?: string | null;
    /**
     * Output only. The percentage completed for this audience export ranging between 0 to 100.
     */
    percentageCompleted?: number | null;
    /**
     * Output only. The total number of rows in the AudienceExport result.
     */
    rowCount?: number | null;
    /**
     * Output only. The current state for this AudienceExport.
     */
    state?: string | null;
  }
  /**
   * This metadata is currently blank.
   */
  export interface Schema$AudienceListMetadata {}
  /**
   * The batch request containing multiple pivot report requests.
   */
  export interface Schema$BatchRunPivotReportsRequest {
    /**
     * Individual requests. Each request has a separate pivot report response. Each batch request is allowed up to 5 requests.
     */
    requests?: Schema$RunPivotReportRequest[];
  }
  /**
   * The batch response containing multiple pivot reports.
   */
  export interface Schema$BatchRunPivotReportsResponse {
    /**
     * Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#batchRunPivotReports". Useful to distinguish between response types in JSON.
     */
    kind?: string | null;
    /**
     * Individual responses. Each response has a separate pivot report request.
     */
    pivotReports?: Schema$RunPivotReportResponse[];
  }
  /**
   * The batch request containing multiple report requests.
   */
  export interface Schema$BatchRunReportsRequest {
    /**
     * Individual requests. Each request has a separate report response. Each batch request is allowed up to 5 requests.
     */
    requests?: Schema$RunReportRequest[];
  }
  /**
   * The batch response containing multiple reports.
   */
  export interface Schema$BatchRunReportsResponse {
    /**
     * Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#batchRunReports". Useful to distinguish between response types in JSON.
     */
    kind?: string | null;
    /**
     * Individual responses. Each response has a separate report request.
     */
    reports?: Schema$RunReportResponse[];
  }
  /**
   * To express that the result needs to be between two numbers (inclusive).
   */
  export interface Schema$BetweenFilter {
    /**
     * Begins with this number.
     */
    fromValue?: Schema$NumericValue;
    /**
     * Ends with this number.
     */
    toValue?: Schema$NumericValue;
  }
  /**
   * Used to convert a dimension value to a single case.
   */
  export interface Schema$CaseExpression {
    /**
     * Name of a dimension. The name must refer back to a name in dimensions field of the request.
     */
    dimensionName?: string | null;
  }
  /**
   * The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request.
   */
  export interface Schema$CheckCompatibilityRequest {
    /**
     * Filters the dimensions and metrics in the response to just this compatibility. Commonly used as `”compatibilityFilter”: “COMPATIBLE”` to only return compatible dimensions & metrics.
     */
    compatibilityFilter?: string | null;
    /**
     * The filter clause of dimensions. `dimensionFilter` should be the same value as in your `runReport` request.
     */
    dimensionFilter?: Schema$FilterExpression;
    /**
     * The dimensions in this report. `dimensions` should be the same value as in your `runReport` request.
     */
    dimensions?: Schema$Dimension[];
    /**
     * The filter clause of metrics. `metricFilter` should be the same value as in your `runReport` request
     */
    metricFilter?: Schema$FilterExpression;
    /**
     * The metrics in this report. `metrics` should be the same value as in your `runReport` request.
     */
    metrics?: Schema$Metric[];
  }
  /**
   * The compatibility response with the compatibility of each dimension & metric.
   */
  export interface Schema$CheckCompatibilityResponse {
    /**
     * The compatibility of each dimension.
     */
    dimensionCompatibilities?: Schema$DimensionCompatibility[];
    /**
     * The compatibility of each metric.
     */
    metricCompatibilities?: Schema$MetricCompatibility[];
  }
  /**
   * Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstSessionDate` belong to the same cohort.
   */
  export interface Schema$Cohort {
    /**
     * The cohort selects users whose first touch date is between start date and end date defined in the `dateRange`. This `dateRange` does not specify the full date range of event data that is present in a cohort report. In a cohort report, this `dateRange` is extended by the granularity and offset present in the `cohortsRange`; event data for the extended reporting date range is present in a cohort report. In a cohort request, this `dateRange` is required and the `dateRanges` in the `RunReportRequest` or `RunPivotReportRequest` must be unspecified. This `dateRange` should generally be aligned with the cohort's granularity. If `CohortsRange` uses daily granularity, this `dateRange` can be a single day. If `CohortsRange` uses weekly granularity, this `dateRange` can be aligned to a week boundary, starting at Sunday and ending Saturday. If `CohortsRange` uses monthly granularity, this `dateRange` can be aligned to a month, starting at the first and ending on the last day of the month.
     */
    dateRange?: Schema$DateRange;
    /**
     * Dimension used by the cohort. Required and only supports `firstSessionDate`.
     */
    dimension?: string | null;
    /**
     * Assigns a name to this cohort. The dimension `cohort` is valued to this name in a report response. If set, cannot begin with `cohort_` or `RESERVED_`. If not set, cohorts are named by their zero based index `cohort_0`, `cohort_1`, etc.
     */
    name?: string | null;
  }
  /**
   * Optional settings of a cohort report.
   */
  export interface Schema$CohortReportSettings {
    /**
     * If true, accumulates the result from first touch day to the end day. Not supported in `RunReportRequest`.
     */
    accumulate?: boolean | null;
  }
  /**
   * The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report.
   */
  export interface Schema$CohortSpec {
    /**
     * Optional settings for a cohort report.
     */
    cohortReportSettings?: Schema$CohortReportSettings;
    /**
     * Defines the selection criteria to group users into cohorts. Most cohort reports define only a single cohort. If multiple cohorts are specified, each cohort can be recognized in the report by their name.
     */
    cohorts?: Schema$Cohort[];
    /**
     * Cohort reports follow cohorts over an extended reporting date range. This range specifies an offset duration to follow the cohorts over.
     */
    cohortsRange?: Schema$CohortsRange;
  }
  /**
   * Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over.
   */
  export interface Schema$CohortsRange {
    /**
     * Required. `endOffset` specifies the end date of the extended reporting date range for a cohort report. `endOffset` can be any positive integer but is commonly set to 5 to 10 so that reports contain data on the cohort for the next several granularity time periods. If `granularity` is `DAILY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset` days. If `granularity` is `WEEKLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 7` days. If `granularity` is `MONTHLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 30` days.
     */
    endOffset?: number | null;
    /**
     * Required. The granularity used to interpret the `startOffset` and `endOffset` for the extended reporting date range for a cohort report.
     */
    granularity?: string | null;
    /**
     * `startOffset` specifies the start date of the extended reporting date range for a cohort report. `startOffset` is commonly set to 0 so that reports contain data from the acquisition of the cohort forward. If `granularity` is `DAILY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset` days. If `granularity` is `WEEKLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 7` days. If `granularity` is `MONTHLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 30` days.
     */
    startOffset?: number | null;
  }
  /**
   * Defines an individual comparison. Most requests will include multiple comparisons so that the report compares between the comparisons.
   */
  export interface Schema$Comparison {
    /**
     * A saved comparison identified by the comparison's resource name. For example, 'comparisons/1234'.
     */
    comparison?: string | null;
    /**
     * A basic comparison.
     */
    dimensionFilter?: Schema$FilterExpression;
    /**
     * Each comparison produces separate rows in the response. In the response, this comparison is identified by this name. If name is unspecified, we will use the saved comparisons display name.
     */
    name?: string | null;
  }
  /**
   * The metadata for a single comparison.
   */
  export interface Schema$ComparisonMetadata {
    /**
     * This comparison's resource name. Useable in [Comparison](#Comparison)'s `comparison` field. For example, 'comparisons/1234'.
     */
    apiName?: string | null;
    /**
     * This comparison's description.
     */
    description?: string | null;
    /**
     * This comparison's name within the Google Analytics user interface.
     */
    uiName?: string | null;
  }
  /**
   * Used to combine dimension values to a single dimension.
   */
  export interface Schema$ConcatenateExpression {
    /**
     * The delimiter placed between dimension names. Delimiters are often single characters such as "|" or "," but can be longer strings. If a dimension value contains the delimiter, both will be present in response with no distinction. For example if dimension 1 value = "US,FR", dimension 2 value = "JP", and delimiter = ",", then the response will contain "US,FR,JP".
     */
    delimiter?: string | null;
    /**
     * Names of dimensions. The names must refer back to names in the dimensions field of the request.
     */
    dimensionNames?: string[] | null;
  }
  /**
   * A contiguous set of days: `startDate`, `startDate + 1`, ..., `endDate`. Requests are allowed up to 4 date ranges.
   */
  export interface Schema$DateRange {
    /**
     * The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `start_date`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the property's reporting time zone.
     */
    endDate?: string | null;
    /**
     * Assigns a name to this date range. The dimension `dateRange` is valued to this name in a report response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, date ranges are named by their zero based index in the request: `date_range_0`, `date_range_1`, etc.
     */
    name?: string | null;
    /**
     * The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `end_date`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the property's reporting time zone.
     */
    startDate?: string | null;
  }
  /**
   * Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York". Requests are allowed up to 9 dimensions.
   */
  export interface Schema$Dimension {
    /**
     * One dimension can be the result of an expression of multiple dimensions. For example, dimension "country, city": concatenate(country, ", ", city).
     */
    dimensionExpression?: Schema$DimensionExpression;
    /**
     * The name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names supported by core reporting methods such as `runReport` and `batchRunReports`. See [Realtime Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#dimensions) for the list of dimension names supported by the `runRealtimeReport` method. See [Funnel Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#dimensions) for the list of dimension names supported by the `runFunnelReport` method. If `dimensionExpression` is specified, `name` can be any string that you would like within the allowed character set. For example if a `dimensionExpression` concatenates `country` and `city`, you could call that dimension `countryAndCity`. Dimension names that you choose must match the regular expression `^[a-zA-Z0-9_]$`. Dimensions are referenced by `name` in `dimensionFilter`, `orderBys`, `dimensionExpression`, and `pivots`.
     */
    name?: string | null;
  }
  /**
   * The compatibility for a single dimension.
   */
  export interface Schema$DimensionCompatibility {
    /**
     * The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be successfully added to the report.
     */
    compatibility?: string | null;
    /**
     * The dimension metadata contains the API name for this compatibility information. The dimension metadata also contains other helpful information like the UI name and description.
     */
    dimensionMetadata?: Schema$DimensionMetadata;
  }
  /**
   * Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).
   */
  export interface Schema$DimensionExpression {
    /**
     * Used to combine dimension values to a single dimension. For example, dimension "country, city": concatenate(country, ", ", city).
     */
    concatenate?: Schema$ConcatenateExpression;
    /**
     * Used to convert a dimension value to lower case.
     */
    lowerCase?: Schema$CaseExpression;
    /**
     * Used to convert a dimension value to upper case.
     */
    upperCase?: Schema$CaseExpression;
  }
  /**
   * Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.
   */
  export interface Schema$DimensionHeader {
    /**
     * The dimension's name.
     */
    name?: string | null;
  }
  /**
   * Explains a dimension.
   */
  export interface Schema$DimensionMetadata {
    /**
     * This dimension's name. Useable in [Dimension](#Dimension)'s `name`. For example, `eventName`.
     */
    apiName?: string | null;
    /**
     * The display name of the category that this dimension belongs to. Similar dimensions and metrics are categorized together.
     */
    category?: string | null;
    /**
     * True if the dimension is custom to this property. This includes user, event, & item scoped custom dimensions; to learn more about custom dimensions, see https://support.google.com/analytics/answer/14240153. This also include custom channel groups; to learn more about custom channel groups, see https://support.google.com/analytics/answer/13051316.
     */
    customDefinition?: boolean | null;
    /**
     * Still usable but deprecated names for this dimension. If populated, this dimension is available by either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation period, the dimension will be available only by `apiName`.
     */
    deprecatedApiNames?: string[] | null;
    /**
     * Description of how this dimension is used and calculated.
     */
    description?: string | null;
    /**
     * This dimension's name within the Google Analytics user interface. For example, `Event name`.
     */
    uiName?: string | null;
  }
  /**
   * Sorts by dimension values.
   */
  export interface Schema$DimensionOrderBy {
    /**
     * A dimension name in the request to order by.
     */
    dimensionName?: string | null;
    /**
     * Controls the rule for dimension value ordering.
     */
    orderType?: string | null;
  }
  /**
   * The value of a dimension.
   */
  export interface Schema$DimensionValue {
    /**
     * Value as a string if the dimension type is a string.
     */
    value?: string | null;
  }
  /**
   * Filter for empty values.
   */
  export interface Schema$EmptyFilter {}
  /**
   * An expression to filter dimension or metric values.
   */
  export interface Schema$Filter {
    /**
     * A filter for two values.
     */
    betweenFilter?: Schema$BetweenFilter;
    /**
     * A filter for empty values such as "(not set)" and "" values.
     */
    emptyFilter?: Schema$EmptyFilter;
    /**
     * The dimension name or metric name. In most methods, dimensions & metrics can be used for the first time in this field. However in a RunPivotReportRequest, this field must be additionally specified by name in the RunPivotReportRequest's dimensions or metrics.
     */
    fieldName?: string | null;
    /**
     * A filter for in list values.
     */
    inListFilter?: Schema$InListFilter;
    /**
     * A filter for numeric or date values.
     */
    numericFilter?: Schema$NumericFilter;
    /**
     * Strings related filter.
     */
    stringFilter?: Schema$StringFilter;
  }
  /**
   * To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
   */
  export interface Schema$FilterExpression {
    /**
     * The FilterExpressions in and_group have an AND relationship.
     */
    andGroup?: Schema$FilterExpressionList;
    /**
     * A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all dimensions or all metrics.
     */
    filter?: Schema$Filter;
    /**
     * The FilterExpression is NOT of not_expression.
     */
    notExpression?: Schema$FilterExpression;
    /**
     * The FilterExpressions in or_group have an OR relationship.
     */
    orGroup?: Schema$FilterExpressionList;
  }
  /**
   * A list of filter expressions.
   */
  export interface Schema$FilterExpressionList {
    /**
     * A list of filter expressions.
     */
    expressions?: Schema$FilterExpression[];
  }
  /**
   * The result needs to be in a list of string values.
   */
  export interface Schema$InListFilter {
    /**
     * If true, the string value is case sensitive.
     */
    caseSensitive?: boolean | null;
    /**
     * The list of string values. Must be non-empty.
     */
    values?: string[] | null;
  }
  /**
   * A list of all audience exports for a property.
   */
  export interface Schema$ListAudienceExportsResponse {
    /**
     * Each audience export for a property.
     */
    audienceExports?: Schema$AudienceExport[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * The dimensions, metrics and comparisons currently accepted in reporting methods.
   */
  export interface Schema$Metadata {
    /**
     * The comparison descriptions.
     */
    comparisons?: Schema$ComparisonMetadata[];
    /**
     * The dimension descriptions.
     */
    dimensions?: Schema$DimensionMetadata[];
    /**
     * The metric descriptions.
     */
    metrics?: Schema$MetricMetadata[];
    /**
     * Resource name of this metadata.
     */
    name?: string | null;
  }
  /**
   * The quantitative measurements of a report. For example, the metric `eventCount` is the total number of events. Requests are allowed up to 10 metrics.
   */
  export interface Schema$Metric {
    /**
     * A mathematical expression for derived metrics. For example, the metric Event count per user is `eventCount/totalUsers`.
     */
    expression?: string | null;
    /**
     * Indicates if a metric is invisible in the report response. If a metric is invisible, the metric will not produce a column in the response, but can be used in `metricFilter`, `orderBys`, or a metric `expression`.
     */
    invisible?: boolean | null;
    /**
     * The name of the metric. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of metric names supported by core reporting methods such as `runReport` and `batchRunReports`. See [Realtime Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#metrics) for the list of metric names supported by the `runRealtimeReport` method. See [Funnel Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#metrics) for the list of metric names supported by the `runFunnelReport` method. If `expression` is specified, `name` can be any string that you would like within the allowed character set. For example if `expression` is `screenPageViews/sessions`, you could call that metric's name = `viewsPerSession`. Metric names that you choose must match the regular expression `^[a-zA-Z0-9_]$`. Metrics are referenced by `name` in `metricFilter`, `orderBys`, and metric `expression`.
     */
    name?: string | null;
  }
  /**
   * The compatibility for a single metric.
   */
  export interface Schema$MetricCompatibility {
    /**
     * The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report.
     */
    compatibility?: string | null;
    /**
     * The metric metadata contains the API name for this compatibility information. The metric metadata also contains other helpful information like the UI name and description.
     */
    metricMetadata?: Schema$MetricMetadata;
  }
  /**
   * Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.
   */
  export interface Schema$MetricHeader {
    /**
     * The metric's name.
     */
    name?: string | null;
    /**
     * The metric's data type.
     */
    type?: string | null;
  }
  /**
   * Explains a metric.
   */
  export interface Schema$MetricMetadata {
    /**
     * A metric name. Useable in [Metric](#Metric)'s `name`. For example, `eventCount`.
     */
    apiName?: string | null;
    /**
     * If reasons are specified, your access is blocked to this metric for this property. API requests from you to this property for this metric will succeed; however, the report will contain only zeros for this metric. API requests with metric filters on blocked metrics will fail. If reasons are empty, you have access to this metric. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
     */
    blockedReasons?: string[] | null;
    /**
     * The display name of the category that this metrics belongs to. Similar dimensions and metrics are categorized together.
     */
    category?: string | null;
    /**
     * True if the metric is a custom metric for this property.
     */
    customDefinition?: boolean | null;
    /**
     * Still usable but deprecated names for this metric. If populated, this metric is available by either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation period, the metric will be available only by `apiName`.
     */
    deprecatedApiNames?: string[] | null;
    /**
     * Description of how this metric is used and calculated.
     */
    description?: string | null;
    /**
     * The mathematical expression for this derived metric. Can be used in [Metric](#Metric)'s `expression` field for equivalent reports. Most metrics are not expressions, and for non-expressions, this field is empty.
     */
    expression?: string | null;
    /**
     * The type of this metric.
     */
    type?: string | null;
    /**
     * This metric's name within the Google Analytics user interface. For example, `Event count`.
     */
    uiName?: string | null;
  }
  /**
   * Sorts by metric values.
   */
  export interface Schema$MetricOrderBy {
    /**
     * A metric name in the request to order by.
     */
    metricName?: string | null;
  }
  /**
   * The value of a metric.
   */
  export interface Schema$MetricValue {
    /**
     * Measurement value. See MetricHeader for type.
     */
    value?: string | null;
  }
  /**
   * A contiguous set of minutes: `startMinutesAgo`, `startMinutesAgo + 1`, ..., `endMinutesAgo`. Requests are allowed up to 2 minute ranges.
   */
  export interface Schema$MinuteRange {
    /**
     * The inclusive end minute for the query as a number of minutes before now. Cannot be before `startMinutesAgo`. For example, `"endMinutesAgo": 15` specifies the report should include event data from prior to 15 minutes ago. If unspecified, `endMinutesAgo` is defaulted to 0. Standard Analytics properties can request any minute in the last 30 minutes of event data (`endMinutesAgo <= 29`), and 360 Analytics properties can request any minute in the last 60 minutes of event data (`endMinutesAgo <= 59`).
     */
    endMinutesAgo?: number | null;
    /**
     * Assigns a name to this minute range. The dimension `dateRange` is valued to this name in a report response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, minute ranges are named by their zero based index in the request: `date_range_0`, `date_range_1`, etc.
     */
    name?: string | null;
    /**
     * The inclusive start minute for the query as a number of minutes before now. For example, `"startMinutesAgo": 29` specifies the report should include event data from 29 minutes ago and after. Cannot be after `endMinutesAgo`. If unspecified, `startMinutesAgo` is defaulted to 29. Standard Analytics properties can request up to the last 30 minutes of event data (`startMinutesAgo <= 29`), and 360 Analytics properties can request up to the last 60 minutes of event data (`startMinutesAgo <= 59`).
     */
    startMinutesAgo?: number | null;
  }
  /**
   * Filters for numeric or date values.
   */
  export interface Schema$NumericFilter {
    /**
     * The operation type for this filter.
     */
    operation?: string | null;
    /**
     * A numeric value or a date value.
     */
    value?: Schema$NumericValue;
  }
  /**
   * To represent a number.
   */
  export interface Schema$NumericValue {
    /**
     * Double value
     */
    doubleValue?: number | null;
    /**
     * Integer value
     */
    int64Value?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering.
   */
  export interface Schema$OrderBy {
    /**
     * If true, sorts by descending order.
     */
    desc?: boolean | null;
    /**
     * Sorts results by a dimension's values.
     */
    dimension?: Schema$DimensionOrderBy;
    /**
     * Sorts results by a metric's values.
     */
    metric?: Schema$MetricOrderBy;
    /**
     * Sorts results by a metric's values within a pivot column group.
     */
    pivot?: Schema$PivotOrderBy;
  }
  /**
   * Describes the visible dimension columns and rows in the report response.
   */
  export interface Schema$Pivot {
    /**
     * Dimension names for visible columns in the report response. Including "dateRange" produces a date range column; for each row in the response, dimension values in the date range column will indicate the corresponding date range from the request.
     */
    fieldNames?: string[] | null;
    /**
     * The number of unique combinations of dimension values to return in this pivot. The `limit` parameter is required. A `limit` of 10,000 is common for single pivot requests. The product of the `limit` for each `pivot` in a `RunPivotReportRequest` must not exceed 250,000. For example, a two pivot request with `limit: 1000` in each pivot will fail because the product is `1,000,000`.
     */
    limit?: string | null;
    /**
     * Aggregate the metrics by dimensions in this pivot using the specified metric_aggregations.
     */
    metricAggregations?: string[] | null;
    /**
     * The row count of the start row. The first row is counted as row 0.
     */
    offset?: string | null;
    /**
     * Specifies how dimensions are ordered in the pivot. In the first Pivot, the OrderBys determine Row and PivotDimensionHeader ordering; in subsequent Pivots, the OrderBys determine only PivotDimensionHeader ordering. Dimensions specified in these OrderBys must be a subset of Pivot.field_names.
     */
    orderBys?: Schema$OrderBy[];
  }
  /**
   * Summarizes dimension values from a row for this pivot.
   */
  export interface Schema$PivotDimensionHeader {
    /**
     * Values of multiple dimensions in a pivot.
     */
    dimensionValues?: Schema$DimensionValue[];
  }
  /**
   * Dimensions' values in a single pivot.
   */
  export interface Schema$PivotHeader {
    /**
     * The size is the same as the cardinality of the corresponding dimension combinations.
     */
    pivotDimensionHeaders?: Schema$PivotDimensionHeader[];
    /**
     * The cardinality of the pivot. The total number of rows for this pivot's fields regardless of how the parameters `offset` and `limit` are specified in the request.
     */
    rowCount?: number | null;
  }
  /**
   * Sorts by a pivot column group.
   */
  export interface Schema$PivotOrderBy {
    /**
     * In the response to order by, order rows by this column. Must be a metric name from the request.
     */
    metricName?: string | null;
    /**
     * Used to select a dimension name and value pivot. If multiple pivot selections are given, the sort occurs on rows where all pivot selection dimension name and value pairs match the row's dimension name and value pair.
     */
    pivotSelections?: Schema$PivotSelection[];
  }
  /**
   * A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the metric's value. For example if pivots = {{"browser", "Chrome"\}\} and metric_name = "Sessions", then the rows will be sorted based on Sessions in Chrome. ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari | Safari ---------|----------|----------------|----------|---------------- Country | Sessions | Pages/Sessions | Sessions | Pages/Sessions ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1 ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1 ---------|----------|----------------|----------|----------------
   */
  export interface Schema$PivotSelection {
    /**
     * Must be a dimension name from the request.
     */
    dimensionName?: string | null;
    /**
     * Order by only when the named dimension is this value.
     */
    dimensionValue?: string | null;
  }
  /**
   * Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
   */
  export interface Schema$PropertyQuota {
    /**
     * Standard Analytics Properties can send up to 10 concurrent requests; Analytics 360 Properties can use up to 50 concurrent requests.
     */
    concurrentRequests?: Schema$QuotaStatus;
    /**
     * Analytics Properties can send up to 120 requests with potentially thresholded dimensions per hour. In a batch request, each report request is individually counted for this quota if the request contains potentially thresholded dimensions.
     */
    potentiallyThresholdedRequestsPerHour?: Schema$QuotaStatus;
    /**
     * Standard Analytics Properties and cloud project pairs can have up to 10 server errors per hour; Analytics 360 Properties and cloud project pairs can have up to 50 server errors per hour.
     */
    serverErrorsPerProjectPerHour?: Schema$QuotaStatus;
    /**
     * Standard Analytics Properties can use up to 200,000 tokens per day; Analytics 360 Properties can use 2,000,000 tokens per day. Most requests consume fewer than 10 tokens.
     */
    tokensPerDay?: Schema$QuotaStatus;
    /**
     * Standard Analytics Properties can use up to 40,000 tokens per hour; Analytics 360 Properties can use 400,000 tokens per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.
     */
    tokensPerHour?: Schema$QuotaStatus;
    /**
     * Analytics Properties can use up to 35% of their tokens per project per hour. This amounts to standard Analytics Properties can use up to 14,000 tokens per project per hour, and Analytics 360 Properties can use 140,000 tokens per project per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.
     */
    tokensPerProjectPerHour?: Schema$QuotaStatus;
  }
  /**
   * A request to list users in an audience export.
   */
  export interface Schema$QueryAudienceExportRequest {
    /**
     * Optional. The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    limit?: string | null;
    /**
     * Optional. The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first `limit` of rows. The second request sets offset to the `limit` of the first request; the second request returns the second `limit` of rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    offset?: string | null;
  }
  /**
   * A list of users in an audience export.
   */
  export interface Schema$QueryAudienceExportResponse {
    /**
     * Configuration data about AudienceExport being queried. Returned to help interpret the audience rows in this response. For example, the dimensions in this AudienceExport correspond to the columns in the AudienceRows.
     */
    audienceExport?: Schema$AudienceExport;
    /**
     * Rows for each user in an audience export. The number of rows in this response will be less than or equal to request's page size.
     */
    audienceRows?: Schema$V1betaAudienceRow[];
    /**
     * The total number of rows in the AudienceExport result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    rowCount?: number | null;
  }
  /**
   * Current state for a particular quota group.
   */
  export interface Schema$QuotaStatus {
    /**
     * Quota consumed by this request.
     */
    consumed?: number | null;
    /**
     * Quota remaining after this request.
     */
    remaining?: number | null;
  }
  /**
   * Response's metadata carrying additional information about the report content.
   */
  export interface Schema$ResponseMetaData {
    /**
     * The currency code used in this report. Intended to be used in formatting currency metrics like `purchaseRevenue` for visualization. If currency_code was specified in the request, this response parameter will echo the request parameter; otherwise, this response parameter is the property's current currency_code. Currency codes are string encodings of currency types from the ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217); for example "USD", "EUR", "JPY". To learn more, see https://support.google.com/analytics/answer/9796179.
     */
    currencyCode?: string | null;
    /**
     * If true, indicates some buckets of dimension combinations are rolled into "(other)" row. This can happen for high cardinality reports. The metadata parameter dataLossFromOtherRow is populated based on the aggregated data table used in the report. The parameter will be accurately populated regardless of the filters and limits in the report. For example, the (other) row could be dropped from the report because the request contains a filter on sessionSource = google. This parameter will still be populated if data loss from other row was present in the input aggregate data used to generate this report. To learn more, see [About the (other) row and data sampling](https://support.google.com/analytics/answer/13208658#reports).
     */
    dataLossFromOtherRow?: boolean | null;
    /**
     * If empty reason is specified, the report is empty for this reason.
     */
    emptyReason?: string | null;
    /**
     * If this report results is [sampled](https://support.google.com/analytics/answer/13331292), this describes the percentage of events used in this report. One `samplingMetadatas` is populated for each date range. Each `samplingMetadatas` corresponds to a date range in order that date ranges were specified in the request. However if the results are not sampled, this field will not be defined.
     */
    samplingMetadatas?: Schema$SamplingMetadata[];
    /**
     * Describes the schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
     */
    schemaRestrictionResponse?: Schema$SchemaRestrictionResponse;
    /**
     * If `subjectToThresholding` is true, this report is subject to thresholding and only returns data that meets the minimum aggregation thresholds. It is possible for a request to be subject to thresholding thresholding and no data is absent from the report, and this happens when all data is above the thresholds. To learn more, see [Data thresholds](https://support.google.com/analytics/answer/9383630).
     */
    subjectToThresholding?: boolean | null;
    /**
     * The property's current timezone. Intended to be used to interpret time-based dimensions like `hour` and `minute`. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo".
     */
    timeZone?: string | null;
  }
  /**
   * Report data for each row. For example if RunReportRequest contains: ```none "dimensions": [ { "name": "eventName" \}, { "name": "countryId" \} ], "metrics": [ { "name": "eventCount" \} ] ``` One row with 'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount, would be: ```none "dimensionValues": [ { "value": "in_app_purchase" \}, { "value": "JP" \} ], "metricValues": [ { "value": "15" \} ] ```
   */
  export interface Schema$Row {
    /**
     * List of requested dimension values. In a PivotReport, dimension_values are only listed for dimensions included in a pivot.
     */
    dimensionValues?: Schema$DimensionValue[];
    /**
     * List of requested visible metric values.
     */
    metricValues?: Schema$MetricValue[];
  }
  /**
   * The request to generate a pivot report.
   */
  export interface Schema$RunPivotReportRequest {
    /**
     * Cohort group associated with this request. If there is a cohort group in the request the 'cohort' dimension must be present.
     */
    cohortSpec?: Schema$CohortSpec;
    /**
     * Optional. The configuration of comparisons requested and displayed. The request requires both a comparisons field and a comparisons dimension to receive a comparison column in the response.
     */
    comparisons?: Schema$Comparison[];
    /**
     * A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the property's default currency.
     */
    currencyCode?: string | null;
    /**
     * The date range to retrieve event data for the report. If multiple date ranges are specified, event data from each date range is used in the report. A special dimension with field name "dateRange" can be included in a Pivot's field names; if included, the report compares between date ranges. In a cohort request, this `dateRanges` must be unspecified.
     */
    dateRanges?: Schema$DateRange[];
    /**
     * The filter clause of dimensions. Dimensions must be requested to be used in this filter. Metrics cannot be used in this filter.
     */
    dimensionFilter?: Schema$FilterExpression;
    /**
     * The dimensions requested. All defined dimensions must be used by one of the following: dimension_expression, dimension_filter, pivots, order_bys.
     */
    dimensions?: Schema$Dimension[];
    /**
     * If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this `keep_empty_rows` setting, only data recorded by the Google Analytics property can be displayed in a report. For example if a property never logs a `purchase` event, then a query for the `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and eventCount: 0.
     */
    keepEmptyRows?: boolean | null;
    /**
     * The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause. Metrics must be requested to be used in this filter. Dimensions cannot be used in this filter.
     */
    metricFilter?: Schema$FilterExpression;
    /**
     * The metrics requested, at least one metric needs to be specified. All defined metrics must be used by one of the following: metric_expression, metric_filter, order_bys.
     */
    metrics?: Schema$Metric[];
    /**
     * Describes the visual format of the report's dimensions in columns or rows. The union of the fieldNames (dimension names) in all pivots must be a subset of dimension names defined in Dimensions. No two pivots can share a dimension. A dimension is only visible if it appears in a pivot.
     */
    pivots?: Schema$Pivot[];
    /**
     * A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
     */
    property?: string | null;
    /**
     * Toggles whether to return the current state of this Google Analytics property's quota. Quota is returned in [PropertyQuota](#PropertyQuota).
     */
    returnPropertyQuota?: boolean | null;
  }
  /**
   * The response pivot report table corresponding to a pivot request.
   */
  export interface Schema$RunPivotReportResponse {
    /**
     * Aggregation of metric values. Can be totals, minimums, or maximums. The returned aggregations are controlled by the metric_aggregations in the pivot. The type of aggregation returned in each row is shown by the dimension_values which are set to "RESERVED_".
     */
    aggregates?: Schema$Row[];
    /**
     * Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
     */
    dimensionHeaders?: Schema$DimensionHeader[];
    /**
     * Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runPivotReport". Useful to distinguish between response types in JSON.
     */
    kind?: string | null;
    /**
     * Metadata for the report.
     */
    metadata?: Schema$ResponseMetaData;
    /**
     * Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
     */
    metricHeaders?: Schema$MetricHeader[];
    /**
     * Summarizes the columns and rows created by a pivot. Each pivot in the request produces one header in the response. If we have a request like this: "pivots": [{ "fieldNames": ["country", "city"] \}, { "fieldNames": "eventName" \}] We will have the following `pivotHeaders` in the response: "pivotHeaders" : [{ "dimensionHeaders": [{ "dimensionValues": [ { "value": "United Kingdom" \}, { "value": "London" \} ] \}, { "dimensionValues": [ { "value": "Japan" \}, { "value": "Osaka" \} ] \}] \}, { "dimensionHeaders": [{ "dimensionValues": [{ "value": "session_start" \}] \}, { "dimensionValues": [{ "value": "scroll" \}] \}] \}]
     */
    pivotHeaders?: Schema$PivotHeader[];
    /**
     * This Google Analytics property's quota state including this request.
     */
    propertyQuota?: Schema$PropertyQuota;
    /**
     * Rows of dimension value combinations and metric values in the report.
     */
    rows?: Schema$Row[];
  }
  /**
   * The request to generate a realtime report.
   */
  export interface Schema$RunRealtimeReportRequest {
    /**
     * The filter clause of dimensions. Metrics cannot be used in this filter.
     */
    dimensionFilter?: Schema$FilterExpression;
    /**
     * The dimensions requested and displayed.
     */
    dimensions?: Schema$Dimension[];
    /**
     * The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value.
     */
    limit?: string | null;
    /**
     * Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to "RESERVED_(MetricAggregation)".
     */
    metricAggregations?: string[] | null;
    /**
     * The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause. Dimensions cannot be used in this filter.
     */
    metricFilter?: Schema$FilterExpression;
    /**
     * The metrics requested and displayed.
     */
    metrics?: Schema$Metric[];
    /**
     * The minute ranges of event data to read. If unspecified, one minute range for the last 30 minutes will be used. If multiple minute ranges are requested, each response row will contain a zero based minute range index. If two minute ranges overlap, the event data for the overlapping minutes is included in the response rows for both minute ranges.
     */
    minuteRanges?: Schema$MinuteRange[];
    /**
     * Specifies how rows are ordered in the response.
     */
    orderBys?: Schema$OrderBy[];
    /**
     * Toggles whether to return the current state of this Google Analytics property's Realtime quota. Quota is returned in [PropertyQuota](#PropertyQuota).
     */
    returnPropertyQuota?: boolean | null;
  }
  /**
   * The response realtime report table corresponding to a request.
   */
  export interface Schema$RunRealtimeReportResponse {
    /**
     * Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
     */
    dimensionHeaders?: Schema$DimensionHeader[];
    /**
     * Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runRealtimeReport". Useful to distinguish between response types in JSON.
     */
    kind?: string | null;
    /**
     * If requested, the maximum values of metrics.
     */
    maximums?: Schema$Row[];
    /**
     * Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
     */
    metricHeaders?: Schema$MetricHeader[];
    /**
     * If requested, the minimum values of metrics.
     */
    minimums?: Schema$Row[];
    /**
     * This Google Analytics property's Realtime quota state including this request.
     */
    propertyQuota?: Schema$PropertyQuota;
    /**
     * The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response and the `limit` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows.
     */
    rowCount?: number | null;
    /**
     * Rows of dimension value combinations and metric values in the report.
     */
    rows?: Schema$Row[];
    /**
     * If requested, the totaled values of metrics.
     */
    totals?: Schema$Row[];
  }
  /**
   * The request to generate a report.
   */
  export interface Schema$RunReportRequest {
    /**
     * Cohort group associated with this request. If there is a cohort group in the request the 'cohort' dimension must be present.
     */
    cohortSpec?: Schema$CohortSpec;
    /**
     * Optional. The configuration of comparisons requested and displayed. The request only requires a comparisons field in order to receive a comparison column in the response.
     */
    comparisons?: Schema$Comparison[];
    /**
     * A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the property's default currency.
     */
    currencyCode?: string | null;
    /**
     * Date ranges of data to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the event data for the overlapping days is included in the response rows for both date ranges. In a cohort request, this `dateRanges` must be unspecified.
     */
    dateRanges?: Schema$DateRange[];
    /**
     * Dimension filters let you ask for only specific dimension values in the report. To learn more, see [Fundamentals of Dimension Filters](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters) for examples. Metrics cannot be used in this filter.
     */
    dimensionFilter?: Schema$FilterExpression;
    /**
     * The dimensions requested and displayed.
     */
    dimensions?: Schema$Dimension[];
    /**
     * If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this `keep_empty_rows` setting, only data recorded by the Google Analytics property can be displayed in a report. For example if a property never logs a `purchase` event, then a query for the `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and eventCount: 0.
     */
    keepEmptyRows?: boolean | null;
    /**
     * The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    limit?: string | null;
    /**
     * Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to "RESERVED_(MetricAggregation)". Aggregates including both comparisons and multiple date ranges will be aggregated based on the date ranges.
     */
    metricAggregations?: string[] | null;
    /**
     * The filter clause of metrics. Applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in this filter.
     */
    metricFilter?: Schema$FilterExpression;
    /**
     * The metrics requested and displayed.
     */
    metrics?: Schema$Metric[];
    /**
     * The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first `limit` of rows. The second request sets offset to the `limit` of the first request; the second request returns the second `limit` of rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    offset?: string | null;
    /**
     * Specifies how rows are ordered in the response. Requests including both comparisons and multiple date ranges will have order bys applied on the comparisons.
     */
    orderBys?: Schema$OrderBy[];
    /**
     * A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
     */
    property?: string | null;
    /**
     * Toggles whether to return the current state of this Google Analytics property's quota. Quota is returned in [PropertyQuota](#PropertyQuota).
     */
    returnPropertyQuota?: boolean | null;
  }
  /**
   * The response report table corresponding to a request.
   */
  export interface Schema$RunReportResponse {
    /**
     * Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
     */
    dimensionHeaders?: Schema$DimensionHeader[];
    /**
     * Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runReport". Useful to distinguish between response types in JSON.
     */
    kind?: string | null;
    /**
     * If requested, the maximum values of metrics.
     */
    maximums?: Schema$Row[];
    /**
     * Metadata for the report.
     */
    metadata?: Schema$ResponseMetaData;
    /**
     * Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
     */
    metricHeaders?: Schema$MetricHeader[];
    /**
     * If requested, the minimum values of metrics.
     */
    minimums?: Schema$Row[];
    /**
     * This Google Analytics property's quota state including this request.
     */
    propertyQuota?: Schema$PropertyQuota;
    /**
     * The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
     */
    rowCount?: number | null;
    /**
     * Rows of dimension value combinations and metric values in the report.
     */
    rows?: Schema$Row[];
    /**
     * If requested, the totaled values of metrics.
     */
    totals?: Schema$Row[];
  }
  /**
   * If this report results is [sampled](https://support.google.com/analytics/answer/13331292), this describes the percentage of events used in this report. Sampling is the practice of analyzing a subset of all data in order to uncover the meaningful information in the larger data set.
   */
  export interface Schema$SamplingMetadata {
    /**
     * The total number of events read in this sampled report for a date range. This is the size of the subset this property's data that was analyzed in this report.
     */
    samplesReadCount?: string | null;
    /**
     * The total number of events present in this property's data that could have been analyzed in this report for a date range. Sampling uncovers the meaningful information about the larger data set, and this is the size of the larger data set. To calculate the percentage of available data that was used in this report, compute `samplesReadCount/samplingSpaceSize`.
     */
    samplingSpaceSize?: string | null;
  }
  /**
   * The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
   */
  export interface Schema$SchemaRestrictionResponse {
    /**
     * All restrictions actively enforced in creating the report. For example, `purchaseRevenue` always has the restriction type `REVENUE_DATA`. However, this active response restriction is only populated if the user's custom role disallows access to `REVENUE_DATA`.
     */
    activeMetricRestrictions?: Schema$ActiveMetricRestriction[];
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * The filter for string
   */
  export interface Schema$StringFilter {
    /**
     * If true, the string value is case sensitive.
     */
    caseSensitive?: boolean | null;
    /**
     * The match type for this filter.
     */
    matchType?: string | null;
    /**
     * The string value used for the matching.
     */
    value?: string | null;
  }
  /**
   * An audience dimension is a user attribute. Specific user attributed are requested and then later returned in the `QueryAudienceExportResponse`.
   */
  export interface Schema$V1betaAudienceDimension {
    /**
     * Optional. The API name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-api-schema#dimensions) for the list of dimension names.
     */
    dimensionName?: string | null;
  }
  /**
   * The value of a dimension.
   */
  export interface Schema$V1betaAudienceDimensionValue {
    /**
     * Value as a string if the dimension type is a string.
     */
    value?: string | null;
  }
  /**
   * Dimension value attributes for the audience user row.
   */
  export interface Schema$V1betaAudienceRow {
    /**
     * Each dimension value attribute for an audience user. One dimension value will be added for each dimension column requested.
     */
    dimensionValues?: Schema$V1betaAudienceDimensionValue[];
  }

  export class Resource$Properties {
    context: APIRequestContext;
    audienceExports: Resource$Properties$Audienceexports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.audienceExports = new Resource$Properties$Audienceexports(
        this.context
      );
    }

    /**
     * Returns multiple pivot reports in a batch. All reports must be for the same Google Analytics property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.batchRunPivotReports({
     *     // A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). This property must be specified for the batch. The property within RunPivotReportRequest may either be unspecified or consistent with this property. Example: properties/1234
     *     property: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "pivotReports": []
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
    batchRunPivotReports(
      params: Params$Resource$Properties$Batchrunpivotreports,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchRunPivotReports(
      params?: Params$Resource$Properties$Batchrunpivotreports,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchRunPivotReportsResponse>>;
    batchRunPivotReports(
      params: Params$Resource$Properties$Batchrunpivotreports,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchRunPivotReports(
      params: Params$Resource$Properties$Batchrunpivotreports,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchRunPivotReportsResponse>,
      callback: BodyResponseCallback<Schema$BatchRunPivotReportsResponse>
    ): void;
    batchRunPivotReports(
      params: Params$Resource$Properties$Batchrunpivotreports,
      callback: BodyResponseCallback<Schema$BatchRunPivotReportsResponse>
    ): void;
    batchRunPivotReports(
      callback: BodyResponseCallback<Schema$BatchRunPivotReportsResponse>
    ): void;
    batchRunPivotReports(
      paramsOrCallback?:
        | Params$Resource$Properties$Batchrunpivotreports
        | BodyResponseCallback<Schema$BatchRunPivotReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchRunPivotReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchRunPivotReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchRunPivotReportsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Batchrunpivotreports;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Batchrunpivotreports;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+property}:batchRunPivotReports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['property'],
        pathParams: ['property'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchRunPivotReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchRunPivotReportsResponse>(
          parameters
        );
      }
    }

    /**
     * Returns multiple reports in a batch. All reports must be for the same Google Analytics property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.batchRunReports({
     *     // A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). This property must be specified for the batch. The property within RunReportRequest may either be unspecified or consistent with this property. Example: properties/1234
     *     property: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "reports": []
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
    batchRunReports(
      params: Params$Resource$Properties$Batchrunreports,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchRunReports(
      params?: Params$Resource$Properties$Batchrunreports,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchRunReportsResponse>>;
    batchRunReports(
      params: Params$Resource$Properties$Batchrunreports,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchRunReports(
      params: Params$Resource$Properties$Batchrunreports,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchRunReportsResponse>,
      callback: BodyResponseCallback<Schema$BatchRunReportsResponse>
    ): void;
    batchRunReports(
      params: Params$Resource$Properties$Batchrunreports,
      callback: BodyResponseCallback<Schema$BatchRunReportsResponse>
    ): void;
    batchRunReports(
      callback: BodyResponseCallback<Schema$BatchRunReportsResponse>
    ): void;
    batchRunReports(
      paramsOrCallback?:
        | Params$Resource$Properties$Batchrunreports
        | BodyResponseCallback<Schema$BatchRunReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchRunReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchRunReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchRunReportsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Batchrunreports;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Batchrunreports;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+property}:batchRunReports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['property'],
        pathParams: ['property'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchRunReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchRunReportsResponse>(parameters);
      }
    }

    /**
     * This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.checkCompatibility({
     *     // A Google Analytics property identifier whose events are tracked. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). `property` should be the same value as in your `runReport` request. Example: properties/1234
     *     property: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "compatibilityFilter": "my_compatibilityFilter",
     *       //   "dimensionFilter": {},
     *       //   "dimensions": [],
     *       //   "metricFilter": {},
     *       //   "metrics": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dimensionCompatibilities": [],
     *   //   "metricCompatibilities": []
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
    checkCompatibility(
      params: Params$Resource$Properties$Checkcompatibility,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    checkCompatibility(
      params?: Params$Resource$Properties$Checkcompatibility,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckCompatibilityResponse>>;
    checkCompatibility(
      params: Params$Resource$Properties$Checkcompatibility,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkCompatibility(
      params: Params$Resource$Properties$Checkcompatibility,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>,
      callback: BodyResponseCallback<Schema$CheckCompatibilityResponse>
    ): void;
    checkCompatibility(
      params: Params$Resource$Properties$Checkcompatibility,
      callback: BodyResponseCallback<Schema$CheckCompatibilityResponse>
    ): void;
    checkCompatibility(
      callback: BodyResponseCallback<Schema$CheckCompatibilityResponse>
    ): void;
    checkCompatibility(
      paramsOrCallback?:
        | Params$Resource$Properties$Checkcompatibility
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckCompatibilityResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Checkcompatibility;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Checkcompatibility;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+property}:checkCompatibility').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['property'],
        pathParams: ['property'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CheckCompatibilityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckCompatibilityResponse>(parameters);
      }
    }

    /**
     * Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics property identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.getMetadata({
     *     // Required. The resource name of the metadata to retrieve. This name field is specified in the URL path and not URL parameters. Property is a numeric Google Analytics property identifier. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Example: properties/1234/metadata Set the Property ID to 0 for dimensions and metrics common to all properties. In this special mode, this method will not return custom dimensions and metrics.
     *     name: 'properties/my-propertie/metadata',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "comparisons": [],
     *   //   "dimensions": [],
     *   //   "metrics": [],
     *   //   "name": "my_name"
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
    getMetadata(
      params: Params$Resource$Properties$Getmetadata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getMetadata(
      params?: Params$Resource$Properties$Getmetadata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Metadata>>;
    getMetadata(
      params: Params$Resource$Properties$Getmetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getMetadata(
      params: Params$Resource$Properties$Getmetadata,
      options: MethodOptions | BodyResponseCallback<Schema$Metadata>,
      callback: BodyResponseCallback<Schema$Metadata>
    ): void;
    getMetadata(
      params: Params$Resource$Properties$Getmetadata,
      callback: BodyResponseCallback<Schema$Metadata>
    ): void;
    getMetadata(callback: BodyResponseCallback<Schema$Metadata>): void;
    getMetadata(
      paramsOrCallback?:
        | Params$Resource$Properties$Getmetadata
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Metadata>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Getmetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Getmetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Metadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Metadata>(parameters);
      }
    }

    /**
     * Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.runPivotReport({
     *     // A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
     *     property: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cohortSpec": {},
     *       //   "comparisons": [],
     *       //   "currencyCode": "my_currencyCode",
     *       //   "dateRanges": [],
     *       //   "dimensionFilter": {},
     *       //   "dimensions": [],
     *       //   "keepEmptyRows": false,
     *       //   "metricFilter": {},
     *       //   "metrics": [],
     *       //   "pivots": [],
     *       //   "property": "my_property",
     *       //   "returnPropertyQuota": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregates": [],
     *   //   "dimensionHeaders": [],
     *   //   "kind": "my_kind",
     *   //   "metadata": {},
     *   //   "metricHeaders": [],
     *   //   "pivotHeaders": [],
     *   //   "propertyQuota": {},
     *   //   "rows": []
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
    runPivotReport(
      params: Params$Resource$Properties$Runpivotreport,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    runPivotReport(
      params?: Params$Resource$Properties$Runpivotreport,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RunPivotReportResponse>>;
    runPivotReport(
      params: Params$Resource$Properties$Runpivotreport,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runPivotReport(
      params: Params$Resource$Properties$Runpivotreport,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RunPivotReportResponse>,
      callback: BodyResponseCallback<Schema$RunPivotReportResponse>
    ): void;
    runPivotReport(
      params: Params$Resource$Properties$Runpivotreport,
      callback: BodyResponseCallback<Schema$RunPivotReportResponse>
    ): void;
    runPivotReport(
      callback: BodyResponseCallback<Schema$RunPivotReportResponse>
    ): void;
    runPivotReport(
      paramsOrCallback?:
        | Params$Resource$Properties$Runpivotreport
        | BodyResponseCallback<Schema$RunPivotReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RunPivotReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RunPivotReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RunPivotReportResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Runpivotreport;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Runpivotreport;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+property}:runPivotReport').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['property'],
        pathParams: ['property'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RunPivotReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RunPivotReportResponse>(parameters);
      }
    }

    /**
     * Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.runRealtimeReport({
     *     // A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Example: properties/1234
     *     property: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dimensionFilter": {},
     *       //   "dimensions": [],
     *       //   "limit": "my_limit",
     *       //   "metricAggregations": [],
     *       //   "metricFilter": {},
     *       //   "metrics": [],
     *       //   "minuteRanges": [],
     *       //   "orderBys": [],
     *       //   "returnPropertyQuota": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dimensionHeaders": [],
     *   //   "kind": "my_kind",
     *   //   "maximums": [],
     *   //   "metricHeaders": [],
     *   //   "minimums": [],
     *   //   "propertyQuota": {},
     *   //   "rowCount": 0,
     *   //   "rows": [],
     *   //   "totals": []
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
    runRealtimeReport(
      params: Params$Resource$Properties$Runrealtimereport,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    runRealtimeReport(
      params?: Params$Resource$Properties$Runrealtimereport,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RunRealtimeReportResponse>>;
    runRealtimeReport(
      params: Params$Resource$Properties$Runrealtimereport,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runRealtimeReport(
      params: Params$Resource$Properties$Runrealtimereport,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RunRealtimeReportResponse>,
      callback: BodyResponseCallback<Schema$RunRealtimeReportResponse>
    ): void;
    runRealtimeReport(
      params: Params$Resource$Properties$Runrealtimereport,
      callback: BodyResponseCallback<Schema$RunRealtimeReportResponse>
    ): void;
    runRealtimeReport(
      callback: BodyResponseCallback<Schema$RunRealtimeReportResponse>
    ): void;
    runRealtimeReport(
      paramsOrCallback?:
        | Params$Resource$Properties$Runrealtimereport
        | BodyResponseCallback<Schema$RunRealtimeReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RunRealtimeReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RunRealtimeReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RunRealtimeReportResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Runrealtimereport;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Runrealtimereport;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+property}:runRealtimeReport').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['property'],
        pathParams: ['property'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RunRealtimeReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RunRealtimeReportResponse>(parameters);
      }
    }

    /**
     * Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.runReport({
     *     // A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
     *     property: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cohortSpec": {},
     *       //   "comparisons": [],
     *       //   "currencyCode": "my_currencyCode",
     *       //   "dateRanges": [],
     *       //   "dimensionFilter": {},
     *       //   "dimensions": [],
     *       //   "keepEmptyRows": false,
     *       //   "limit": "my_limit",
     *       //   "metricAggregations": [],
     *       //   "metricFilter": {},
     *       //   "metrics": [],
     *       //   "offset": "my_offset",
     *       //   "orderBys": [],
     *       //   "property": "my_property",
     *       //   "returnPropertyQuota": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dimensionHeaders": [],
     *   //   "kind": "my_kind",
     *   //   "maximums": [],
     *   //   "metadata": {},
     *   //   "metricHeaders": [],
     *   //   "minimums": [],
     *   //   "propertyQuota": {},
     *   //   "rowCount": 0,
     *   //   "rows": [],
     *   //   "totals": []
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
    runReport(
      params: Params$Resource$Properties$Runreport,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    runReport(
      params?: Params$Resource$Properties$Runreport,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RunReportResponse>>;
    runReport(
      params: Params$Resource$Properties$Runreport,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runReport(
      params: Params$Resource$Properties$Runreport,
      options: MethodOptions | BodyResponseCallback<Schema$RunReportResponse>,
      callback: BodyResponseCallback<Schema$RunReportResponse>
    ): void;
    runReport(
      params: Params$Resource$Properties$Runreport,
      callback: BodyResponseCallback<Schema$RunReportResponse>
    ): void;
    runReport(callback: BodyResponseCallback<Schema$RunReportResponse>): void;
    runReport(
      paramsOrCallback?:
        | Params$Resource$Properties$Runreport
        | BodyResponseCallback<Schema$RunReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RunReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RunReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RunReportResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Runreport;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Runreport;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+property}:runReport').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['property'],
        pathParams: ['property'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RunReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RunReportResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Properties$Batchrunpivotreports
    extends StandardParameters {
    /**
     * A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). This property must be specified for the batch. The property within RunPivotReportRequest may either be unspecified or consistent with this property. Example: properties/1234
     */
    property?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchRunPivotReportsRequest;
  }
  export interface Params$Resource$Properties$Batchrunreports
    extends StandardParameters {
    /**
     * A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). This property must be specified for the batch. The property within RunReportRequest may either be unspecified or consistent with this property. Example: properties/1234
     */
    property?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchRunReportsRequest;
  }
  export interface Params$Resource$Properties$Checkcompatibility
    extends StandardParameters {
    /**
     * A Google Analytics property identifier whose events are tracked. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). `property` should be the same value as in your `runReport` request. Example: properties/1234
     */
    property?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckCompatibilityRequest;
  }
  export interface Params$Resource$Properties$Getmetadata
    extends StandardParameters {
    /**
     * Required. The resource name of the metadata to retrieve. This name field is specified in the URL path and not URL parameters. Property is a numeric Google Analytics property identifier. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Example: properties/1234/metadata Set the Property ID to 0 for dimensions and metrics common to all properties. In this special mode, this method will not return custom dimensions and metrics.
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Runpivotreport
    extends StandardParameters {
    /**
     * A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
     */
    property?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunPivotReportRequest;
  }
  export interface Params$Resource$Properties$Runrealtimereport
    extends StandardParameters {
    /**
     * A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Example: properties/1234
     */
    property?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunRealtimeReportRequest;
  }
  export interface Params$Resource$Properties$Runreport
    extends StandardParameters {
    /**
     * A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
     */
    property?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunReportRequest;
  }

  export class Resource$Properties$Audienceexports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an audience export for later retrieval. This method quickly returns the audience export's resource name and initiates a long running asynchronous request to form an audience export. To export the users in an audience export, first create the audience export through this method and then send the audience resource name to the `QueryAudienceExport` method. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. An audience export is a snapshot of the users currently in the audience at the time of audience export creation. Creating audience exports for one audience on different days will return different results as users enter and exit the audience. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience exports contain the users in each audience. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.audienceExports.create({
     *     // Required. The parent resource where this audience export will be created. Format: `properties/{property\}`
     *     parent: 'properties/my-propertie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audience": "my_audience",
     *       //   "audienceDisplayName": "my_audienceDisplayName",
     *       //   "beginCreatingTime": "my_beginCreatingTime",
     *       //   "creationQuotaTokensCharged": 0,
     *       //   "dimensions": [],
     *       //   "errorMessage": "my_errorMessage",
     *       //   "name": "my_name",
     *       //   "percentageCompleted": {},
     *       //   "rowCount": 0,
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Properties$Audienceexports$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Properties$Audienceexports$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Properties$Audienceexports$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Properties$Audienceexports$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Properties$Audienceexports$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Properties$Audienceexports$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Audienceexports$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Audienceexports$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/audienceExports').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets configuration metadata about a specific audience export. This method can be used to understand an audience export after it has been created. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.audienceExports.get({
     *     // Required. The audience export resource name. Format: `properties/{property\}/audienceExports/{audience_export\}`
     *     name: 'properties/my-propertie/audienceExports/my-audienceExport',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audience": "my_audience",
     *   //   "audienceDisplayName": "my_audienceDisplayName",
     *   //   "beginCreatingTime": "my_beginCreatingTime",
     *   //   "creationQuotaTokensCharged": 0,
     *   //   "dimensions": [],
     *   //   "errorMessage": "my_errorMessage",
     *   //   "name": "my_name",
     *   //   "percentageCompleted": {},
     *   //   "rowCount": 0,
     *   //   "state": "my_state"
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
      params: Params$Resource$Properties$Audienceexports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Properties$Audienceexports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AudienceExport>>;
    get(
      params: Params$Resource$Properties$Audienceexports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Properties$Audienceexports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AudienceExport>,
      callback: BodyResponseCallback<Schema$AudienceExport>
    ): void;
    get(
      params: Params$Resource$Properties$Audienceexports$Get,
      callback: BodyResponseCallback<Schema$AudienceExport>
    ): void;
    get(callback: BodyResponseCallback<Schema$AudienceExport>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Properties$Audienceexports$Get
        | BodyResponseCallback<Schema$AudienceExport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AudienceExport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AudienceExport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AudienceExport>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Audienceexports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Audienceexports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AudienceExport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AudienceExport>(parameters);
      }
    }

    /**
     * Lists all audience exports for a property. This method can be used for you to find and reuse existing audience exports rather than creating unnecessary new audience exports. The same audience can have multiple audience exports that represent the export of users that were in an audience on different days. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.audienceExports.list({
     *     // Optional. The maximum number of audience exports to return. The service may return fewer than this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000 (higher values will be coerced to the maximum).
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListAudienceExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudienceExports` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. All audience exports for this property will be listed in the response. Format: `properties/{property\}`
     *     parent: 'properties/my-propertie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audienceExports": [],
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
      params: Params$Resource$Properties$Audienceexports$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Properties$Audienceexports$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAudienceExportsResponse>>;
    list(
      params: Params$Resource$Properties$Audienceexports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Properties$Audienceexports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAudienceExportsResponse>,
      callback: BodyResponseCallback<Schema$ListAudienceExportsResponse>
    ): void;
    list(
      params: Params$Resource$Properties$Audienceexports$List,
      callback: BodyResponseCallback<Schema$ListAudienceExportsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAudienceExportsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Properties$Audienceexports$List
        | BodyResponseCallback<Schema$ListAudienceExportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAudienceExportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAudienceExportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAudienceExportsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Audienceexports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Audienceexports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/audienceExports').replace(
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
        createAPIRequest<Schema$ListAudienceExportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAudienceExportsResponse>(parameters);
      }
    }

    /**
     * Retrieves an audience export of users. After creating an audience, the users are not immediately available for exporting. First, a request to `CreateAudienceExport` is necessary to create an audience export of users, and then second, this method is used to retrieve the users in the audience export. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analyticsdata.googleapis.com
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
     * const analyticsdata = google.analyticsdata('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analyticsdata.properties.audienceExports.query({
     *     // Required. The name of the audience export to retrieve users from. Format: `properties/{property\}/audienceExports/{audience_export\}`
     *     name: 'properties/my-propertie/audienceExports/my-audienceExport',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "limit": "my_limit",
     *       //   "offset": "my_offset"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audienceExport": {},
     *   //   "audienceRows": [],
     *   //   "rowCount": 0
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
    query(
      params: Params$Resource$Properties$Audienceexports$Query,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    query(
      params?: Params$Resource$Properties$Audienceexports$Query,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$QueryAudienceExportResponse>>;
    query(
      params: Params$Resource$Properties$Audienceexports$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Properties$Audienceexports$Query,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryAudienceExportResponse>,
      callback: BodyResponseCallback<Schema$QueryAudienceExportResponse>
    ): void;
    query(
      params: Params$Resource$Properties$Audienceexports$Query,
      callback: BodyResponseCallback<Schema$QueryAudienceExportResponse>
    ): void;
    query(
      callback: BodyResponseCallback<Schema$QueryAudienceExportResponse>
    ): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Properties$Audienceexports$Query
        | BodyResponseCallback<Schema$QueryAudienceExportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryAudienceExportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryAudienceExportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$QueryAudienceExportResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Properties$Audienceexports$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Properties$Audienceexports$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://analyticsdata.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:query').replace(
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
        createAPIRequest<Schema$QueryAudienceExportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryAudienceExportResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Properties$Audienceexports$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this audience export will be created. Format: `properties/{property\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AudienceExport;
  }
  export interface Params$Resource$Properties$Audienceexports$Get
    extends StandardParameters {
    /**
     * Required. The audience export resource name. Format: `properties/{property\}/audienceExports/{audience_export\}`
     */
    name?: string;
  }
  export interface Params$Resource$Properties$Audienceexports$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of audience exports to return. The service may return fewer than this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAudienceExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudienceExports` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. All audience exports for this property will be listed in the response. Format: `properties/{property\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Properties$Audienceexports$Query
    extends StandardParameters {
    /**
     * Required. The name of the audience export to retrieve users from. Format: `properties/{property\}/audienceExports/{audience_export\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryAudienceExportRequest;
  }
}
