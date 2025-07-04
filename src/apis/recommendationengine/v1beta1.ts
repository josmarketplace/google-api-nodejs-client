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

export namespace recommendationengine_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Recommendations AI (Beta)
   *
   * Note that we now highly recommend new customers to use Retail API, which incorporates the GA version of the Recommendations AI funtionalities. To enable Retail API, please visit https://console.cloud.google.com/apis/library/retail.googleapis.com. The Recommendations AI service enables customers to build end-to-end personalized recommendation systems without requiring a high level of expertise in machine learning, recommendation system, or Google Cloud.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const recommendationengine = google.recommendationengine('v1beta1');
   * ```
   */
  export class Recommendationengine {
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
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$GoogleApiHttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  /**
   * Metadata for TriggerCatalogRejoin method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadata {}
  /**
   * Response message for TriggerCatalogRejoin method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1alphaRejoinCatalogResponse {
    /**
     * Number of user events that were joined with latest catalog items.
     */
    rejoinedUserEventsCount?: string | null;
  }
  /**
   * Metadata associated with a tune operation.
   */
  export interface Schema$GoogleCloudRecommendationengineV1alphaTuningMetadata {
    /**
     * The resource name of the recommendation model that this tune applies to. Format: projects/{project_number\}/locations/{location_id\}/catalogs/{catalog_id\}/eventStores/{event_store_id\}/recommendationModels/{recommendation_model_id\}
     */
    recommendationModel?: string | null;
  }
  /**
   * Response associated with a tune operation.
   */
  export interface Schema$GoogleCloudRecommendationengineV1alphaTuningResponse {}
  /**
   * BigQuery source import data from.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1BigQuerySource {
    /**
     * Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user event imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en
     */
    dataSchema?: string | null;
    /**
     * Required. The BigQuery data set to copy the data from.
     */
    datasetId?: string | null;
    /**
     * Optional. Intermediate Cloud Storage directory used for the import. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.
     */
    gcsStagingDir?: string | null;
    /**
     * Optional. The project id (can be project # or id) that the BigQuery source is in. If not specified, inherits the project id from the parent request.
     */
    projectId?: string | null;
    /**
     * Required. The BigQuery table to copy the data from.
     */
    tableId?: string | null;
  }
  /**
   * The catalog configuration. Next ID: 5.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1Catalog {
    /**
     * Required. The catalog item level configuration.
     */
    catalogItemLevelConfig?: Schema$GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig;
    /**
     * Required. The ID of the default event store.
     */
    defaultEventStoreId?: string | null;
    /**
     * Required. The catalog display name.
     */
    displayName?: string | null;
    /**
     * The fully qualified resource name of the catalog.
     */
    name?: string | null;
  }
  /**
   * The inline source for the input config for ImportCatalogItems method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1CatalogInlineSource {
    /**
     * Optional. A list of catalog items to update/create. Recommended max of 10k items.
     */
    catalogItems?: Schema$GoogleCloudRecommendationengineV1beta1CatalogItem[];
  }
  /**
   * CatalogItem captures all metadata information of items to be recommended.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1CatalogItem {
    /**
     * Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -\> "Shoes"] and ["Sports & Fitness" -\> "Athletic Clothing" -\> "Shoes"], it could be represented as: "categoryHierarchies": [ { "categories": ["Shoes & Accessories", "Shoes"]\}, { "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] \} ]
     */
    categoryHierarchies?: Schema$GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[];
    /**
     * Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB.
     */
    description?: string | null;
    /**
     * Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog.
     */
    id?: string | null;
    /**
     * Optional. Highly encouraged. Extra catalog item attributes to be included in the recommendation model. For example, for retail products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the item attributes here.
     */
    itemAttributes?: Schema$GoogleCloudRecommendationengineV1beta1FeatureMap;
    /**
     * Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).
     */
    itemGroupId?: string | null;
    /**
     * Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance.
     */
    languageCode?: string | null;
    /**
     * Optional. Metadata specific to retail products.
     */
    productMetadata?: Schema$GoogleCloudRecommendationengineV1beta1ProductCatalogItem;
    /**
     * Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter.
     */
    tags?: string[] | null;
    /**
     * Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB.
     */
    title?: string | null;
  }
  /**
   * Category represents catalog item category hierarchy.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy {
    /**
     * Required. Catalog item categories. Each category should be a UTF-8 encoded string with a length limit of 2 KiB. Note that the order in the list denotes the specificity (from least to most specific).
     */
    categories?: string[] | null;
  }
  /**
   * Configures the catalog level that users send events to, and the level at which predictions are made.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig {
    /**
     * Optional. Level of the catalog at which events are uploaded. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.
     */
    eventItemLevel?: string | null;
    /**
     * Optional. Level of the catalog at which predictions are made. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.
     */
    predictItemLevel?: string | null;
  }
  /**
   * Request message for the `CreatePredictionApiKeyRegistration` method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest {
    /**
     * Required. The prediction API key registration.
     */
    predictionApiKeyRegistration?: Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration;
  }
  /**
   * User event details shared by all recommendation types.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1EventDetail {
    /**
     * Optional. Extra user event features to include in the recommendation model. For product recommendation, an example of extra user information is traffic_channel, i.e. how user arrives at the site. Users can arrive at the site by coming to the site directly, or coming through Google search, and etc.
     */
    eventAttributes?: Schema$GoogleCloudRecommendationengineV1beta1FeatureMap;
    /**
     * Optional. A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Recommendation Engine system, using different recommendation models).
     */
    experimentIds?: string[] | null;
    /**
     * Optional. A unique id of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. This `pageViewId` will be automatically generated if using the JavaScript pixel.
     */
    pageViewId?: string | null;
    /**
     * Optional. Recommendation token included in the recommendation prediction response. This field enables accurate attribution of recommendation model performance. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased item. If user clicks on product K in the recommendation results, pass the `PredictResponse.recommendationToken` property as a url parameter to product K's page. When recording events on product K's page, log the PredictResponse.recommendation_token to this field. Optional, but highly encouraged for user events that are the result of a recommendation prediction query.
     */
    recommendationToken?: string | null;
    /**
     * Optional. The referrer url of the current page. When using the JavaScript pixel, this value is filled in automatically.
     */
    referrerUri?: string | null;
    /**
     * Optional. Complete url (window.location.href) of the user's current page. When using the JavaScript pixel, this value is filled in automatically. Maximum length 5KB.
     */
    uri?: string | null;
  }
  /**
   * FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1FeatureMap {
    /**
     * Categorical features that can take on one of a limited number of possible values. Some examples would be the brand/maker of a product, or country of a customer. Feature names and values must be UTF-8 encoded strings. For example: `{ "colors": {"value": ["yellow", "green"]\}, "sizes": {"value":["S", "M"]\}`
     */
    categoricalFeatures?: {
      [
        key: string
      ]: Schema$GoogleCloudRecommendationengineV1beta1FeatureMapStringList;
    } | null;
    /**
     * Numerical features. Some examples would be the height/weight of a product, or age of a customer. Feature names must be UTF-8 encoded strings. For example: `{ "lengths_cm": {"value":[2.3, 15.4]\}, "heights_cm": {"value":[8.1, 6.4]\} \}`
     */
    numericalFeatures?: {
      [
        key: string
      ]: Schema$GoogleCloudRecommendationengineV1beta1FeatureMapFloatList;
    } | null;
  }
  /**
   * A list of float features.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1FeatureMapFloatList {
    /**
     * Float feature value.
     */
    value?: number[] | null;
  }
  /**
   * A list of string features.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1FeatureMapStringList {
    /**
     * String feature value with a length limit of 128 bytes.
     */
    value?: string[] | null;
  }
  /**
   * Google Cloud Storage location for input content. format.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1GcsSource {
    /**
     * Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/x.json`. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing catalog information](/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions.
     */
    inputUris?: string[] | null;
    /**
     * Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user events imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en
     */
    jsonSchema?: string | null;
  }
  /**
   * Catalog item thumbnail/detail image.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1Image {
    /**
     * Optional. Height of the image in number of pixels.
     */
    height?: number | null;
    /**
     * Required. URL of the image with a length limit of 5 KiB.
     */
    uri?: string | null;
    /**
     * Optional. Width of the image in number of pixels.
     */
    width?: number | null;
  }
  /**
   * Request message for Import methods.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest {
    /**
     * Optional. The desired location of errors incurred during the Import.
     */
    errorsConfig?: Schema$GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
    /**
     * Required. The desired input location of the data.
     */
    inputConfig?: Schema$GoogleCloudRecommendationengineV1beta1InputConfig;
    /**
     * Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency and used for request deduplication. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response.
     */
    requestId?: string | null;
    /**
     * Optional. Indicates which fields in the provided imported 'items' to update. If not set, will by default update all fields.
     */
    updateMask?: string | null;
  }
  /**
   * Response of the ImportCatalogItemsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorsConfig?: Schema$GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
  }
  /**
   * Configuration of destination for Import related errors.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ImportErrorsConfig {
    /**
     * Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ImportMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Name of the operation.
     */
    operationName?: string | null;
    /**
     * Id of the request / operation. This is parroting back the requestId that was passed in the request.
     */
    requestId?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for the ImportUserEvents request.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest {
    /**
     * Optional. The desired location of errors incurred during the Import.
     */
    errorsConfig?: Schema$GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
    /**
     * Required. The desired input location of the data.
     */
    inputConfig?: Schema$GoogleCloudRecommendationengineV1beta1InputConfig;
    /**
     * Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency for expensive long running operations. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. Note that this field must not be set if the desired input config is catalog_inline_source.
     */
    requestId?: string | null;
  }
  /**
   * Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorsConfig?: Schema$GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
    /**
     * Aggregated statistics of user event import status.
     */
    importSummary?: Schema$GoogleCloudRecommendationengineV1beta1UserEventImportSummary;
  }
  /**
   * The input config source.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1InputConfig {
    /**
     * BigQuery input source.
     */
    bigQuerySource?: Schema$GoogleCloudRecommendationengineV1beta1BigQuerySource;
    /**
     * The Inline source for the input content for Catalog items.
     */
    catalogInlineSource?: Schema$GoogleCloudRecommendationengineV1beta1CatalogInlineSource;
    /**
     * Google Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudRecommendationengineV1beta1GcsSource;
    /**
     * The Inline source for the input content for UserEvents.
     */
    userEventInlineSource?: Schema$GoogleCloudRecommendationengineV1beta1UserEventInlineSource;
  }
  /**
   * Response message for ListCatalogItems method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse {
    /**
     * The catalog items.
     */
    catalogItems?: Schema$GoogleCloudRecommendationengineV1beta1CatalogItem[];
    /**
     * If empty, the list is complete. If nonempty, the token to pass to the next request's ListCatalogItemRequest.page_token.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListCatalogs method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse {
    /**
     * Output only. All the customer's catalogs.
     */
    catalogs?: Schema$GoogleCloudRecommendationengineV1beta1Catalog[];
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the `ListPredictionApiKeyRegistrations`.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse {
    /**
     * If empty, the list is complete. If nonempty, pass the token to the next request's `ListPredictionApiKeysRegistrationsRequest.pageToken`.
     */
    nextPageToken?: string | null;
    /**
     * The list of registered API keys.
     */
    predictionApiKeyRegistrations?: Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration[];
  }
  /**
   * Response message for ListUserEvents method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse {
    /**
     * If empty, the list is complete. If nonempty, the token to pass to the next request's ListUserEvents.page_token.
     */
    nextPageToken?: string | null;
    /**
     * The user events.
     */
    userEvents?: Schema$GoogleCloudRecommendationengineV1beta1UserEvent[];
  }
  /**
   * Registered Api Key.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration {
    /**
     * The API key.
     */
    apiKey?: string | null;
  }
  /**
   * Request message for Predict method. Full resource name of the format: `{name=projects/x/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/x\}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction. We currently support three placements with the following IDs by default: // * `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` event, on product detail pages, or on the shopping cart page. * `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you. * `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this. * `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed. The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1PredictRequest {
    /**
     * Optional. Use dryRun mode for this prediction query. If set to true, a fake model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready.
     */
    dryRun?: boolean | null;
    /**
     * Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB. * filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, nothing will be returned. If you want generic (unfiltered) popular items to be returned instead, set `strictFiltering` to false in `PredictRequest.params`.
     */
    filter?: string | null;
    /**
     * Optional. The labels for the predict request. * Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * No more than 64 labels can be associated with a given request. See https://goo.gl/xmQnxf for more information on and examples of labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default.
     */
    pageSize?: number | null;
    /**
     * Optional. The previous PredictResponse.next_page_token.
     */
    pageToken?: string | null;
    /**
     * Optional. Additional domain specific parameters for the predictions. Allowed values: * `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response. * `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular items instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'\}. This gives request level control and adjust prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'\}. This gives request level control and adjust prediction results based on product category.
     */
    params?: {[key: string]: any} | null;
    /**
     * Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserInfo.visitor_id or UserInfo.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserInfo.visitor_id to a random unique ID and leave UserInfo.user_id unset.
     */
    userEvent?: Schema$GoogleCloudRecommendationengineV1beta1UserEvent;
  }
  /**
   * Response message for predict method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1PredictResponse {
    /**
     * True if the dryRun property was set in the request.
     */
    dryRun?: boolean | null;
    /**
     * IDs of items in the request that were missing from the catalog.
     */
    itemsMissingInCatalog?: string[] | null;
    /**
     * Additional domain specific prediction response metadata.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * If empty, the list is complete. If nonempty, the token to pass to the next request's PredictRequest.page_token.
     */
    nextPageToken?: string | null;
    /**
     * A unique recommendation token. This should be included in the user event logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.
     */
    recommendationToken?: string | null;
    /**
     * A list of recommended items. The order represents the ranking (from the most relevant item to the least).
     */
    results?: Schema$GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult[];
  }
  /**
   * PredictionResult represents the recommendation prediction results.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult {
    /**
     * ID of the recommended catalog item
     */
    id?: string | null;
    /**
     * Additional item metadata / annotations. Possible values: * `catalogItem`: JSON representation of the catalogItem. Will be set if `returnCatalogItem` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Will be set if `returnItemScore` is set to true in `PredictRequest.params`.
     */
    itemMetadata?: {[key: string]: any} | null;
  }
  /**
   * ProductCatalogItem captures item metadata specific to retail products.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ProductCatalogItem {
    /**
     * Optional. The available quantity of the item.
     */
    availableQuantity?: string | null;
    /**
     * Optional. Canonical URL directly linking to the item detail page with a length limit of 5 KiB..
     */
    canonicalProductUri?: string | null;
    /**
     * Optional. A map to pass the costs associated with the product. For example: {"manufacturing": 45.5\} The profit of selling this item is computed like so: * If 'exactPrice' is provided, profit = displayPrice - sum(costs) * If 'priceRange' is provided, profit = minPrice - sum(costs)
     */
    costs?: {[key: string]: number} | null;
    /**
     * Optional. Only required if the price is set. Currency code for price/costs. Use three-character ISO-4217 code.
     */
    currencyCode?: string | null;
    /**
     * Optional. The exact product price.
     */
    exactPrice?: Schema$GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;
    /**
     * Optional. Product images for the catalog item.
     */
    images?: Schema$GoogleCloudRecommendationengineV1beta1Image[];
    /**
     * Optional. The product price range.
     */
    priceRange?: Schema$GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;
    /**
     * Optional. Online stock state of the catalog item. Default is `IN_STOCK`.
     */
    stockState?: string | null;
  }
  /**
   * Exact product price.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice {
    /**
     * Optional. Display price of the product.
     */
    displayPrice?: number | null;
    /**
     * Optional. Price of the product without any discount. If zero, by default set to be the 'displayPrice'.
     */
    originalPrice?: number | null;
  }
  /**
   * Product price range when there are a range of prices for different variations of the same product.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange {
    /**
     * Required. The maximum product price.
     */
    max?: number | null;
    /**
     * Required. The minimum product price.
     */
    min?: number | null;
  }
  /**
   * Detailed product information associated with a user event.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ProductDetail {
    /**
     * Optional. Quantity of the products in stock when a user event happens. Optional. If provided, this overrides the available quantity in Catalog for this event. and can only be set if `stock_status` is set to `IN_STOCK`. Note that if an item is out of stock, you must set the `stock_state` field to be `OUT_OF_STOCK`. Leaving this field unspecified / as zero is not sufficient to mark the item out of stock.
     */
    availableQuantity?: number | null;
    /**
     * Optional. Currency code for price/costs. Use three-character ISO-4217 code. Required only if originalPrice or displayPrice is set.
     */
    currencyCode?: string | null;
    /**
     * Optional. Display price of the product (e.g. discounted price). If provided, this will override the display price in Catalog for this product.
     */
    displayPrice?: number | null;
    /**
     * Required. Catalog item ID. UTF-8 encoded string with a length limit of 128 characters.
     */
    id?: string | null;
    /**
     * Optional. Extra features associated with a product in the user event.
     */
    itemAttributes?: Schema$GoogleCloudRecommendationengineV1beta1FeatureMap;
    /**
     * Optional. Original price of the product. If provided, this will override the original price in Catalog for this product.
     */
    originalPrice?: number | null;
    /**
     * Optional. Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `add-to-cart` event. Required for `add-to-cart`, `add-to-list`, `remove-from-cart`, `checkout-start`, `purchase-complete`, `refund` event types.
     */
    quantity?: number | null;
    /**
     * Optional. Item stock state. If provided, this overrides the stock state in Catalog for items in this event.
     */
    stockState?: string | null;
  }
  /**
   * ProductEventDetail captures user event information specific to retail products.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1ProductEventDetail {
    /**
     * Optional. The id or name of the associated shopping cart. This id is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `remove-from-cart`, `checkout-start`, `purchase-complete`, or `shopping-cart-page-view` events.
     */
    cartId?: string | null;
    /**
     * Required for `add-to-list` and `remove-from-list` events. The id or name of the list that the item is being added to or removed from. Other event types should not set this field.
     */
    listId?: string | null;
    /**
     * Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The categories associated with a category page. Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: categories : ["Sales", "2017 Black Friday Deals"].
     */
    pageCategories?: Schema$GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[];
    /**
     * The main product details related to the event. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_details' should be set for this unless the shopping cart is empty. * `search` (highly encouraged) In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished broswing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new SEARCH event with different product_details is desired. The end user may have not finished broswing the whole page yet. This field is not allowed for the following event types: * `category-page-view` * `home-page-view`
     */
    productDetails?: Schema$GoogleCloudRecommendationengineV1beta1ProductDetail[];
    /**
     * Optional. A transaction represents the entire purchase transaction. Required for `purchase-complete` events. Optional for `checkout-start` events. Other event types should not set this field.
     */
    purchaseTransaction?: Schema$GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
    /**
     * At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The user's search query as UTF-8 encoded text with a length limit of 5 KiB.
     */
    searchQuery?: string | null;
  }
  /**
   * A transaction represents the entire purchase transaction.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1PurchaseTransaction {
    /**
     * Optional. All the costs associated with the product. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs. Total product cost such that profit = revenue - (sum(taxes) + sum(costs)) If product_cost is not set, then profit = revenue - tax - shipping - sum(CatalogItem.costs). If CatalogItem.cost is not specified for one of the items, CatalogItem.cost based profit *cannot* be calculated for this Transaction.
     */
    costs?: {[key: string]: number} | null;
    /**
     * Required. Currency code. Use three-character ISO-4217 code. This field is not required if the event type is `refund`.
     */
    currencyCode?: string | null;
    /**
     * Optional. The transaction ID with a length limit of 128 bytes.
     */
    id?: string | null;
    /**
     * Required. Total revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. This field is not required if the event type is `refund`.
     */
    revenue?: number | null;
    /**
     * Optional. All the taxes associated with the transaction.
     */
    taxes?: {[key: string]: number} | null;
  }
  /**
   * Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * The ID of the request / operation.
     */
    operationName?: string | null;
  }
  /**
   * Request message for PurgeUserEvents method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest {
    /**
     * Required. The filter string to specify the events to be deleted. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: UserEvent.eventType field of type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: field of type string. Specifying this will delete all events associated with a visitor. * `userId`: field of type string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime \> "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime \> "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND.
     */
    filter?: string | null;
    /**
     * Optional. The default value is false. Override this flag to true to actually perform the purge. If the field is not set to true, a sampling of events to be deleted will be returned.
     */
    force?: boolean | null;
  }
  /**
   * Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse {
    /**
     * The total count of events purged as a result of the operation.
     */
    purgedEventsCount?: string | null;
    /**
     * A sampling of events deleted (or will be deleted) depending on the `force` property in the request. Max of 500 items will be returned.
     */
    userEventsSample?: Schema$GoogleCloudRecommendationengineV1beta1UserEvent[];
  }
  /**
   * Metadata for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadata {}
  /**
   * Request message for CatalogRejoin method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest {
    /**
     * Required. The type of the catalog rejoin to define the scope and range of the user events to be rejoined with catalog items.
     */
    userEventRejoinScope?: string | null;
  }
  /**
   * Response message for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse {
    /**
     * Number of user events that were joined with latest catalog items.
     */
    rejoinedUserEventsCount?: string | null;
  }
  /**
   * UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1UserEvent {
    /**
     * Optional. User event detailed information common across different recommendation types.
     */
    eventDetail?: Schema$GoogleCloudRecommendationengineV1beta1EventDetail;
    /**
     * Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to `EVENT_SOURCE_UNSPECIFIED`.
     */
    eventSource?: string | null;
    /**
     * Optional. Only required for ImportUserEvents method. Timestamp of user event created.
     */
    eventTime?: string | null;
    /**
     * Required. User event type. Allowed values are: * `add-to-cart` Products being added to cart. * `add-to-list` Items being added to a list (shopping list, favorites etc). * `category-page-view` Special pages such as sale or promotion pages viewed. * `checkout-start` User starting a checkout process. * `detail-page-view` Products detail page viewed. * `home-page-view` Homepage viewed. * `page-visit` Generic page visits not included in the event types above. * `purchase-complete` User finishing a purchase. * `refund` Purchased items being refunded or returned. * `remove-from-cart` Products being removed from cart. * `remove-from-list` Items being removed from a list. * `search` Product search. * `shopping-cart-page-view` User viewing a shopping cart. * `impression` List of items displayed. Used by Google Tag Manager.
     */
    eventType?: string | null;
    /**
     * Optional. Retail product specific user event metadata. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `category-page-view` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` * `search` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_event_detail' should be set for this unless the shopping cart is empty. This field is not allowed for the following event types: * `home-page-view`
     */
    productEventDetail?: Schema$GoogleCloudRecommendationengineV1beta1ProductEventDetail;
    /**
     * Required. User information.
     */
    userInfo?: Schema$GoogleCloudRecommendationengineV1beta1UserInfo;
  }
  /**
   * A summary of import result. The UserEventImportSummary summarizes the import status for user events.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1UserEventImportSummary {
    /**
     * Count of user events imported with complete existing catalog information.
     */
    joinedEventsCount?: string | null;
    /**
     * Count of user events imported, but with catalog information not found in the imported catalog.
     */
    unjoinedEventsCount?: string | null;
  }
  /**
   * The inline source for the input config for ImportUserEvents method.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1UserEventInlineSource {
    /**
     * Optional. A list of user events to import. Recommended max of 10k items.
     */
    userEvents?: Schema$GoogleCloudRecommendationengineV1beta1UserEvent[];
  }
  /**
   * Information of end users.
   */
  export interface Schema$GoogleCloudRecommendationengineV1beta1UserInfo {
    /**
     * Optional. Indicates if the request is made directly from the end user in which case the user_agent and ip_address fields can be populated from the HTTP request. This should *not* be set when using the javascript pixel. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events).
     */
    directUserRequest?: boolean | null;
    /**
     * Optional. IP address of the user. This could be either IPv4 (e.g. 104.133.9.80) or IPv6 (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). This should *not* be set when using the javascript pixel or if `direct_user_request` is set. Used to extract location information for personalization.
     */
    ipAddress?: string | null;
    /**
     * Optional. User agent as included in the HTTP header. UTF-8 encoded string with a length limit of 1 KiB. This should *not* be set when using the JavaScript pixel or if `directUserRequest` is set.
     */
    userAgent?: string | null;
    /**
     * Optional. Unique identifier for logged-in user with a length limit of 128 bytes. Required only for logged-in users. Don't set for anonymous users. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality.
     */
    userId?: string | null;
    /**
     * Required. A unique identifier for tracking visitors with a length limit of 128 bytes. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. Maximum length 128 bytes. Cannot be empty. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality.
     */
    visitorId?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
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

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    catalogs: Resource$Projects$Locations$Catalogs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.catalogs = new Resource$Projects$Locations$Catalogs(this.context);
    }
  }

  export class Resource$Projects$Locations$Catalogs {
    context: APIRequestContext;
    catalogItems: Resource$Projects$Locations$Catalogs$Catalogitems;
    eventStores: Resource$Projects$Locations$Catalogs$Eventstores;
    operations: Resource$Projects$Locations$Catalogs$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.catalogItems = new Resource$Projects$Locations$Catalogs$Catalogitems(
        this.context
      );
      this.eventStores = new Resource$Projects$Locations$Catalogs$Eventstores(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Catalogs$Operations(
        this.context
      );
    }

    /**
     * Lists all the catalog configurations associated with the project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res = await recommendationengine.projects.locations.catalogs.list({
     *     // Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The account resource name with an associated location.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "catalogs": [],
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
      params: Params$Resource$Projects$Locations$Catalogs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Catalogs$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$List
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/catalogs').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the catalog configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res = await recommendationengine.projects.locations.catalogs.patch({
     *     // The fully qualified resource name of the catalog.
     *     name: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *     // Optional. Indicates which fields in the provided 'catalog' to update. If not set, will only update the catalog_item_level_config field. Currently only fields that can be updated are catalog_item_level_config.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "catalogItemLevelConfig": {},
     *       //   "defaultEventStoreId": "my_defaultEventStoreId",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "catalogItemLevelConfig": {},
     *   //   "defaultEventStoreId": "my_defaultEventStoreId",
     *   //   "displayName": "my_displayName",
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
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Catalogs$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1Catalog>
    >;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1Catalog>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1Catalog>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1Catalog>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1Catalog>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Patch
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1Catalog>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1Catalog>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1Catalog>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1Catalog>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1Catalog>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1Catalog>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The account resource name with an associated location.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Patch
    extends StandardParameters {
    /**
     * The fully qualified resource name of the catalog.
     */
    name?: string;
    /**
     * Optional. Indicates which fields in the provided 'catalog' to update. If not set, will only update the catalog_item_level_config field. Currently only fields that can be updated are catalog_item_level_config.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommendationengineV1beta1Catalog;
  }

  export class Resource$Projects$Locations$Catalogs$Catalogitems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a catalog item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.catalogItems.create({
     *       // Required. The parent catalog resource name, such as `projects/x/locations/global/catalogs/default_catalog`.
     *       parent: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "categoryHierarchies": [],
     *         //   "description": "my_description",
     *         //   "id": "my_id",
     *         //   "itemAttributes": {},
     *         //   "itemGroupId": "my_itemGroupId",
     *         //   "languageCode": "my_languageCode",
     *         //   "productMetadata": {},
     *         //   "tags": [],
     *         //   "title": "my_title"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "categoryHierarchies": [],
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "itemAttributes": {},
     *   //   "itemGroupId": "my_itemGroupId",
     *   //   "languageCode": "my_languageCode",
     *   //   "productMetadata": {},
     *   //   "tags": [],
     *   //   "title": "my_title"
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
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    >;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Catalogitems$Create
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Catalogitems$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Catalogitems$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/catalogItems').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>(
          parameters
        );
      }
    }

    /**
     * Deletes a catalog item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.catalogItems.delete({
     *       // Required. Full resource name of catalog item, such as `projects/x/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`.
     *       name: 'projects/my-project/locations/my-location/catalogs/my-catalog/catalogItems/.*',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Catalogitems$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Catalogitems$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Catalogitems$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a specific catalog item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.catalogItems.get({
     *       // Required. Full resource name of catalog item, such as `projects/x/locations/global/catalogs/default_catalog/catalogitems/some_catalog_item_id`.
     *       name: 'projects/my-project/locations/my-location/catalogs/my-catalog/catalogItems/.*',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "categoryHierarchies": [],
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "itemAttributes": {},
     *   //   "itemGroupId": "my_itemGroupId",
     *   //   "languageCode": "my_languageCode",
     *   //   "productMetadata": {},
     *   //   "tags": [],
     *   //   "title": "my_title"
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
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    >;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Catalogitems$Get
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Catalogitems$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Catalogitems$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>(
          parameters
        );
      }
    }

    /**
     * Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.catalogItems.import({
     *       // Required. `projects/1234/locations/global/catalogs/default_catalog` If no updateMask is specified, requires catalogItems.create permission. If updateMask is specified, requires catalogItems.update permission.
     *       parent: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "errorsConfig": {},
     *         //   "inputConfig": {},
     *         //   "requestId": "my_requestId",
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     });
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
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Import,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    import(
      params?: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Import,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Catalogitems$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Catalogitems$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Catalogitems$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/catalogItems:import').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a list of catalog items.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.catalogItems.list({
     *       // Optional. Use of this field is not supported by version v1beta1.
     *       filter: 'placeholder-value',
     *       // Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.
     *       pageSize: 'placeholder-value',
     *       // Optional. The previous ListCatalogItemsResponse.next_page_token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent catalog resource name, such as `projects/x/locations/global/catalogs/default_catalog`.
     *       parent: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "catalogItems": [],
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
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Catalogs$Catalogitems$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Catalogitems$List
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Catalogitems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Catalogitems$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/catalogItems').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a catalog item. Partial updating is supported. Non-existing items will be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.catalogItems.patch({
     *       // Required. Full resource name of catalog item, such as `projects/x/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`.
     *       name: 'projects/my-project/locations/my-location/catalogs/my-catalog/catalogItems/.*',
     *       // Optional. Indicates which fields in the provided 'item' to update. If not set, will by default update all fields.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "categoryHierarchies": [],
     *         //   "description": "my_description",
     *         //   "id": "my_id",
     *         //   "itemAttributes": {},
     *         //   "itemGroupId": "my_itemGroupId",
     *         //   "languageCode": "my_languageCode",
     *         //   "productMetadata": {},
     *         //   "tags": [],
     *         //   "title": "my_title"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "categoryHierarchies": [],
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "itemAttributes": {},
     *   //   "itemGroupId": "my_itemGroupId",
     *   //   "languageCode": "my_languageCode",
     *   //   "productMetadata": {},
     *   //   "tags": [],
     *   //   "title": "my_title"
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
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    >;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Catalogitems$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Catalogitems$Patch
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Catalogitems$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Catalogitems$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1CatalogItem>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Catalogitems$Create
    extends StandardParameters {
    /**
     * Required. The parent catalog resource name, such as `projects/x/locations/global/catalogs/default_catalog`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommendationengineV1beta1CatalogItem;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Catalogitems$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of catalog item, such as `projects/x/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Catalogitems$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of catalog item, such as `projects/x/locations/global/catalogs/default_catalog/catalogitems/some_catalog_item_id`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Catalogitems$Import
    extends StandardParameters {
    /**
     * Required. `projects/1234/locations/global/catalogs/default_catalog` If no updateMask is specified, requires catalogItems.create permission. If updateMask is specified, requires catalogItems.update permission.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Catalogitems$List
    extends StandardParameters {
    /**
     * Optional. Use of this field is not supported by version v1beta1.
     */
    filter?: string;
    /**
     * Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.
     */
    pageSize?: number;
    /**
     * Optional. The previous ListCatalogItemsResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The parent catalog resource name, such as `projects/x/locations/global/catalogs/default_catalog`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Catalogitems$Patch
    extends StandardParameters {
    /**
     * Required. Full resource name of catalog item, such as `projects/x/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`.
     */
    name?: string;
    /**
     * Optional. Indicates which fields in the provided 'item' to update. If not set, will by default update all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommendationengineV1beta1CatalogItem;
  }

  export class Resource$Projects$Locations$Catalogs$Eventstores {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Catalogs$Eventstores$Operations;
    placements: Resource$Projects$Locations$Catalogs$Eventstores$Placements;
    predictionApiKeyRegistrations: Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations;
    userEvents: Resource$Projects$Locations$Catalogs$Eventstores$Userevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Catalogs$Eventstores$Operations(
          this.context
        );
      this.placements =
        new Resource$Projects$Locations$Catalogs$Eventstores$Placements(
          this.context
        );
      this.predictionApiKeyRegistrations =
        new Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations(
          this.context
        );
      this.userEvents =
        new Resource$Projects$Locations$Catalogs$Eventstores$Userevents(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Catalogs$Eventstores$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.operations.get(
     *       {
     *         // The name of the operation resource.
     *         name: 'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore/operations/my-operation',
     *       },
     *     );
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
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.operations.list(
     *       {
     *         // The standard list filter.
     *         filter: 'placeholder-value',
     *         // The name of the operation's parent resource.
     *         name: 'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore',
     *         // The standard list page size.
     *         pageSize: 'placeholder-value',
     *         // The standard list page token.
     *         pageToken: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Catalogs$Eventstores$Placements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.placements.predict(
     *       {
     *         name: 'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore/placements/my-placement',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "dryRun": false,
     *           //   "filter": "my_filter",
     *           //   "labels": {},
     *           //   "pageSize": 0,
     *           //   "pageToken": "my_pageToken",
     *           //   "params": {},
     *           //   "userEvent": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dryRun": false,
     *   //   "itemsMissingInCatalog": [],
     *   //   "metadata": {},
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "recommendationToken": "my_recommendationToken",
     *   //   "results": []
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
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Placements$Predict,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    predict(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Placements$Predict,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>
    >;
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Placements$Predict,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Placements$Predict,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>
    ): void;
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Placements$Predict,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>
    ): void;
    predict(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>
    ): void;
    predict(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Placements$Predict
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Placements$Predict;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Placements$Predict;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:predict').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1PredictResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Placements$Predict
    extends StandardParameters {
    /**
     *
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommendationengineV1beta1PredictRequest;
  }

  export class Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Register an API key for use with predict method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.create(
     *       {
     *         // Required. The parent resource path. `projects/x/locations/global/catalogs/default_catalog/eventStores/default_event_store`.
     *         parent:
     *           'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "predictionApiKeyRegistration": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiKey": "my_apiKey"
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
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>
    >;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Create
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/predictionApiKeyRegistrations'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>(
          parameters
        );
      }
    }

    /**
     * Unregister an apiKey from using for predict method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.delete(
     *       {
     *         // Required. The API key to unregister including full resource path. `projects/x/locations/global/catalogs/default_catalog/eventStores/default_event_store/predictionApiKeyRegistrations/`
     *         name: 'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore/predictionApiKeyRegistrations/my-predictionApiKeyRegistration',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * List the registered apiKeys for use with predict method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.list(
     *       {
     *         // Optional. Maximum number of results to return per page. If unset, the service will choose a reasonable default.
     *         pageSize: 'placeholder-value',
     *         // Optional. The previous `ListPredictionApiKeyRegistration.nextPageToken`.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent placement resource name such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`
     *         parent:
     *           'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "predictionApiKeyRegistrations": []
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
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$List
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/predictionApiKeyRegistrations'
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Create
    extends StandardParameters {
    /**
     * Required. The parent resource path. `projects/x/locations/global/catalogs/default_catalog/eventStores/default_event_store`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$Delete
    extends StandardParameters {
    /**
     * Required. The API key to unregister including full resource path. `projects/x/locations/global/catalogs/default_catalog/eventStores/default_event_store/predictionApiKeyRegistrations/`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Predictionapikeyregistrations$List
    extends StandardParameters {
    /**
     * Optional. Maximum number of results to return per page. If unset, the service will choose a reasonable default.
     */
    pageSize?: number;
    /**
     * Optional. The previous `ListPredictionApiKeyRegistration.nextPageToken`.
     */
    pageToken?: string;
    /**
     * Required. The parent placement resource name such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Catalogs$Eventstores$Userevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.userEvents.collect(
     *       {
     *         // Optional. The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     *         ets: 'placeholder-value',
     *         // Required. The parent eventStore name, such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`.
     *         parent:
     *           'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore',
     *         // Optional. The url including cgi-parameters but excluding the hash fragment. The URL must be truncated to 1.5K bytes to conservatively be under the 2K bytes. This is often more useful than the referer url, because many browsers only send the domain for 3rd party requests.
     *         uri: 'placeholder-value',
     *         // Required. URL encoded UserEvent proto.
     *         userEvent: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    collect(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Collect,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    collect(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Collect,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleApiHttpBody>>;
    collect(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Collect,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Collect,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApiHttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Collect,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(callback: BodyResponseCallback<Schema$GoogleApiHttpBody>): void;
    collect(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Collect
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleApiHttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Collect;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Collect;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/userEvents:collect').replace(
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
        createAPIRequest<Schema$GoogleApiHttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleApiHttpBody>(parameters);
      }
    }

    /**
     * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.userEvents.import(
     *       {
     *         // Required. `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`
     *         parent:
     *           'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "errorsConfig": {},
     *           //   "inputConfig": {},
     *           //   "requestId": "my_requestId"
     *           // }
     *         },
     *       },
     *     );
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
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Import,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    import(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Import,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/userEvents:import').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.userEvents.list(
     *       {
     *         // Optional. Filtering expression to specify restrictions over returned events. This is a sequence of terms, where each term applies some kind of a restriction to the returned user events. Use this expression to restrict results to a specific time range, or filter events by eventType. eg: eventTime \> "2012-04-23T18:25:43.511Z" eventsMissingCatalogItems eventTime<"2012-04-23T18:25:43.511Z" eventType=search We expect only 3 types of fields: * eventTime: this can be specified a maximum of 2 times, once with a less than operator and once with a greater than operator. The eventTime restrict should result in one contiguous valid eventTime range. * eventType: only 1 eventType restriction can be specified. * eventsMissingCatalogItems: specififying this will restrict results to events for which catalog items were not found in the catalog. The default behavior is to return only those events for which catalog items were found. Some examples of valid filters expressions: * Example 1: eventTime \> "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z" * Example 2: eventTime \> "2012-04-23T18:25:43.511Z" eventType = detail-page-view * Example 3: eventsMissingCatalogItems eventType = search eventTime < "2018-04-23T18:30:43.511Z" * Example 4: eventTime \> "2012-04-23T18:25:43.511Z" * Example 5: eventType = search * Example 6: eventsMissingCatalogItems
     *         filter: 'placeholder-value',
     *         // Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.
     *         pageSize: 'placeholder-value',
     *         // Optional. The previous ListUserEventsResponse.next_page_token.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent eventStore resource name, such as `projects/x/locations/x/catalogs/default_catalog/eventStores/default_event_store`.
     *         parent:
     *           'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userEvents": []
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
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$List
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/userEvents').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.userEvents.purge(
     *       {
     *         // Required. The resource name of the event_store under which the events are created. The format is `projects/${projectId\}/locations/global/catalogs/${catalogId\}/eventStores/${eventStoreId\}`
     *         parent:
     *           'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "filter": "my_filter",
     *           //   "force": false
     *           // }
     *         },
     *       },
     *     );
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
    purge(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Purge,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    purge(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Purge,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    purge(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Purge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Purge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Purge,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Purge
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Purge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/userEvents:purge').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.userEvents.rejoin(
     *       {
     *         // Required. Full resource name of user event, such as `projects/x/locations/x/catalogs/default_catalog/eventStores/default_event_store`.
     *         parent:
     *           'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "userEventRejoinScope": "my_userEventRejoinScope"
     *           // }
     *         },
     *       },
     *     );
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
    rejoin(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Rejoin,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    rejoin(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Rejoin,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    rejoin(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Rejoin,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rejoin(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Rejoin,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    rejoin(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Rejoin,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    rejoin(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    rejoin(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Rejoin
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Rejoin;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Rejoin;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/userEvents:rejoin').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Writes a single user event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.eventStores.userEvents.write(
     *       {
     *         // Required. The parent eventStore resource name, such as "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store".
     *         parent:
     *           'projects/my-project/locations/my-location/catalogs/my-catalog/eventStores/my-eventStore',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "eventDetail": {},
     *           //   "eventSource": "my_eventSource",
     *           //   "eventTime": "my_eventTime",
     *           //   "eventType": "my_eventType",
     *           //   "productEventDetail": {},
     *           //   "userInfo": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "eventDetail": {},
     *   //   "eventSource": "my_eventSource",
     *   //   "eventTime": "my_eventTime",
     *   //   "eventType": "my_eventType",
     *   //   "productEventDetail": {},
     *   //   "userInfo": {}
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
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Write,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    write(
      params?: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Write,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>
    >;
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Write,
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>
    ): void;
    write(
      callback: BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>
    ): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Write
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Write;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/userEvents:write').replace(
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
        createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecommendationengineV1beta1UserEvent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Collect
    extends StandardParameters {
    /**
     * Optional. The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     */
    ets?: string;
    /**
     * Required. The parent eventStore name, such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`.
     */
    parent?: string;
    /**
     * Optional. The url including cgi-parameters but excluding the hash fragment. The URL must be truncated to 1.5K bytes to conservatively be under the 2K bytes. This is often more useful than the referer url, because many browsers only send the domain for 3rd party requests.
     */
    uri?: string;
    /**
     * Required. URL encoded UserEvent proto.
     */
    userEvent?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Import
    extends StandardParameters {
    /**
     * Required. `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$List
    extends StandardParameters {
    /**
     * Optional. Filtering expression to specify restrictions over returned events. This is a sequence of terms, where each term applies some kind of a restriction to the returned user events. Use this expression to restrict results to a specific time range, or filter events by eventType. eg: eventTime \> "2012-04-23T18:25:43.511Z" eventsMissingCatalogItems eventTime<"2012-04-23T18:25:43.511Z" eventType=search We expect only 3 types of fields: * eventTime: this can be specified a maximum of 2 times, once with a less than operator and once with a greater than operator. The eventTime restrict should result in one contiguous valid eventTime range. * eventType: only 1 eventType restriction can be specified. * eventsMissingCatalogItems: specififying this will restrict results to events for which catalog items were not found in the catalog. The default behavior is to return only those events for which catalog items were found. Some examples of valid filters expressions: * Example 1: eventTime \> "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z" * Example 2: eventTime \> "2012-04-23T18:25:43.511Z" eventType = detail-page-view * Example 3: eventsMissingCatalogItems eventType = search eventTime < "2018-04-23T18:30:43.511Z" * Example 4: eventTime \> "2012-04-23T18:25:43.511Z" * Example 5: eventType = search * Example 6: eventsMissingCatalogItems
     */
    filter?: string;
    /**
     * Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.
     */
    pageSize?: number;
    /**
     * Optional. The previous ListUserEventsResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The parent eventStore resource name, such as `projects/x/locations/x/catalogs/default_catalog/eventStores/default_event_store`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Purge
    extends StandardParameters {
    /**
     * Required. The resource name of the event_store under which the events are created. The format is `projects/${projectId\}/locations/global/catalogs/${catalogId\}/eventStores/${eventStoreId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Rejoin
    extends StandardParameters {
    /**
     * Required. Full resource name of user event, such as `projects/x/locations/x/catalogs/default_catalog/eventStores/default_event_store`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Eventstores$Userevents$Write
    extends StandardParameters {
    /**
     * Required. The parent eventStore resource name, such as "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecommendationengineV1beta1UserEvent;
  }

  export class Resource$Projects$Locations$Catalogs$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.operations.get({
     *       // The name of the operation resource.
     *       name: 'projects/my-project/locations/my-location/catalogs/my-catalog/operations/my-operation',
     *     });
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
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Catalogs$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recommendationengine.googleapis.com
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
     * const recommendationengine = google.recommendationengine('v1beta1');
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
     *   const res =
     *     await recommendationengine.projects.locations.catalogs.operations.list({
     *       // The standard list filter.
     *       filter: 'placeholder-value',
     *       // The name of the operation's parent resource.
     *       name: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *       // The standard list page size.
     *       pageSize: 'placeholder-value',
     *       // The standard list page token.
     *       pageToken: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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
      params: Params$Resource$Projects$Locations$Catalogs$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Catalogs$Operations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recommendationengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}
