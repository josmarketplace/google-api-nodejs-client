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

export namespace merchantapi_ordertracking_v1beta {
  export interface Options extends GlobalOptions {
    version: 'ordertracking_v1beta';
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
   * Merchant API
   *
   * Programmatically manage your Merchant Center Accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const merchantapi = google.merchantapi('ordertracking_v1beta');
   * ```
   */
  export class Merchantapi {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
   */
  export interface Schema$DateTime {
    /**
     * Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
     */
    day?: number | null;
    /**
     * Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
     */
    minutes?: number | null;
    /**
     * Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
     */
    month?: number | null;
    /**
     * Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
     */
    nanos?: number | null;
    /**
     * Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
    /**
     * Time zone.
     */
    timeZone?: Schema$TimeZone;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 \}.
     */
    utcOffset?: string | null;
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
     */
    year?: number | null;
  }
  /**
   * The line items of the order.
   */
  export interface Schema$LineItemDetails {
    /**
     * Optional. Brand of the product.
     */
    brand?: string | null;
    /**
     * Optional. The Global Trade Item Number.
     */
    gtin?: string | null;
    /**
     * Required. The ID for this line item.
     */
    lineItemId?: string | null;
    /**
     * Optional. The manufacturer part number.
     */
    mpn?: string | null;
    /**
     * Required. The Content API REST ID of the product, in the form channel:contentLanguage:targetCountry:offerId.
     */
    productId?: string | null;
    /**
     * Optional. Plain text title of this product.
     */
    productTitle?: string | null;
    /**
     * Required. The quantity of the line item in the order.
     */
    quantity?: string | null;
  }
  /**
   * Represents a business trade from which signals are extracted, such as shipping.
   */
  export interface Schema$OrderTrackingSignal {
    /**
     * Optional. The shipping fee of the order; this value should be set to zero in the case of free shipping.
     */
    customerShippingFee?: Schema$Price;
    /**
     * Optional. The delivery postal code, as a continuous string without spaces or dashes, for example "95016". This field will be anonymized in returned OrderTrackingSignal creation response.
     */
    deliveryPostalCode?: string | null;
    /**
     * Optional. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping destination.
     */
    deliveryRegionCode?: string | null;
    /**
     * Required. Information about line items in the order.
     */
    lineItems?: Schema$LineItemDetails[];
    /**
     * Optional. The Google Merchant Center ID of this order tracking signal. This value is optional. If left unset, the caller's Merchant Center ID is used. You must request access in order to provide data on behalf of another business. For more information, see [Submitting Order Tracking Signals](/shopping-content/guides/order-tracking-signals).
     */
    merchantId?: string | null;
    /**
     * Required. The time when the order was created on the businesses side. Include the year and timezone string, if available.
     */
    orderCreatedTime?: Schema$DateTime;
    /**
     * Required. The ID of the order on the businesses side. This field will be hashed in returned OrderTrackingSignal creation response.
     */
    orderId?: string | null;
    /**
     * Output only. The ID that uniquely identifies this order tracking signal.
     */
    orderTrackingSignalId?: string | null;
    /**
     * Optional. The mapping of the line items to the shipment information.
     */
    shipmentLineItemMapping?: Schema$ShipmentLineItemMapping[];
    /**
     * Required. The shipping information for the order.
     */
    shippingInfo?: Schema$ShippingInfo[];
  }
  /**
   * The price represented as a number and currency.
   */
  export interface Schema$Price {
    /**
     * The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros).
     */
    amountMicros?: string | null;
    /**
     * The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217).
     */
    currencyCode?: string | null;
  }
  /**
   * The change that happened to the product including old value, new value, country code as the region code and reporting context.
   */
  export interface Schema$ProductChange {
    /**
     * The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable). Represented in the ISO 3166 format.
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable). Currently this field supports only (`SHOPPING_ADS`, `LOCAL_INVENTORY_ADS`, `YOUTUBE_SHOPPING`, `YOUTUBE_CHECKOUT`, `YOUTUBE_AFFILIATE`) from the enum value [ReportingContextEnum](/merchant/api/reference/rest/Shared.Types/ReportingContextEnum)
     */
    reportingContext?: string | null;
  }
  /**
   * The message that the merchant will receive to notify about product status change event
   */
  export interface Schema$ProductStatusChangeMessage {
    /**
     * The target account that owns the entity that changed. Format : `accounts/{merchant_id\}`
     */
    account?: string | null;
    /**
     * The attribute in the resource that changed, in this case it will be always `Status`.
     */
    attribute?: string | null;
    /**
     * A message to describe the change that happened to the product
     */
    changes?: Schema$ProductChange[];
    /**
     * The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications.
     */
    eventTime?: string | null;
    /**
     * Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event.
     */
    expirationTime?: string | null;
    /**
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `accounts/{account\}/products/{product\}`
     */
    resource?: string | null;
    /**
     * The product id.
     */
    resourceId?: string | null;
    /**
     * The resource that changed, in this case it will always be `Product`.
     */
    resourceType?: string | null;
  }
  /**
   * Represents how many items are in the shipment for the given shipment_id and line_item_id.
   */
  export interface Schema$ShipmentLineItemMapping {
    /**
     * Required. The line item ID.
     */
    lineItemId?: string | null;
    /**
     * Required. The line item quantity in the shipment.
     */
    quantity?: string | null;
    /**
     * Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response.
     */
    shipmentId?: string | null;
  }
  /**
   * The shipping information for the order.
   */
  export interface Schema$ShippingInfo {
    /**
     * Optional. The time when the shipment was actually delivered. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name.
     */
    actualDeliveryTime?: Schema$DateTime;
    /**
     * Optional. The name of the shipping carrier for the delivery. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time.
     */
    carrier?: string | null;
    /**
     * Optional. The service type for fulfillment, such as GROUND, FIRST_CLASS, etc.
     */
    carrierService?: string | null;
    /**
     * Optional. The earliest delivery promised time. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name.
     */
    earliestDeliveryPromiseTime?: Schema$DateTime;
    /**
     * Optional. The latest delivery promised time. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name.
     */
    latestDeliveryPromiseTime?: Schema$DateTime;
    /**
     * Required. The origin postal code, as a continuous string without spaces or dashes, for example "95016". This field will be anonymized in returned OrderTrackingSignal creation response.
     */
    originPostalCode?: string | null;
    /**
     * Required. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping origin.
     */
    originRegionCode?: string | null;
    /**
     * Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response.
     */
    shipmentId?: string | null;
    /**
     * Optional. The time when the shipment was shipped. Include the year and timezone string, if available.
     */
    shippedTime?: Schema$DateTime;
    /**
     * Required. The status of the shipment.
     */
    shippingStatus?: string | null;
    /**
     * Optional. The tracking ID of the shipment. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time.
     */
    trackingId?: string | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$TimeZone {
    /**
     * IANA Time Zone Database time zone. For example "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number. For example "2019a".
     */
    version?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    ordertrackingsignals: Resource$Accounts$Ordertrackingsignals;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.ordertrackingsignals = new Resource$Accounts$Ordertrackingsignals(
        this.context
      );
    }
  }

  export class Resource$Accounts$Ordertrackingsignals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates new order tracking signal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
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
     * const merchantapi = google.merchantapi('ordertracking_v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.ordertrackingsignals.create({
     *     // Output only. The ID that uniquely identifies this order tracking signal.
     *     orderTrackingSignalId: 'placeholder-value',
     *     // Required. The account of the business for which the order signal is created. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customerShippingFee": {},
     *       //   "deliveryPostalCode": "my_deliveryPostalCode",
     *       //   "deliveryRegionCode": "my_deliveryRegionCode",
     *       //   "lineItems": [],
     *       //   "merchantId": "my_merchantId",
     *       //   "orderCreatedTime": {},
     *       //   "orderId": "my_orderId",
     *       //   "orderTrackingSignalId": "my_orderTrackingSignalId",
     *       //   "shipmentLineItemMapping": [],
     *       //   "shippingInfo": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customerShippingFee": {},
     *   //   "deliveryPostalCode": "my_deliveryPostalCode",
     *   //   "deliveryRegionCode": "my_deliveryRegionCode",
     *   //   "lineItems": [],
     *   //   "merchantId": "my_merchantId",
     *   //   "orderCreatedTime": {},
     *   //   "orderId": "my_orderId",
     *   //   "orderTrackingSignalId": "my_orderTrackingSignalId",
     *   //   "shipmentLineItemMapping": [],
     *   //   "shippingInfo": []
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
      params: Params$Resource$Accounts$Ordertrackingsignals$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Ordertrackingsignals$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OrderTrackingSignal>>;
    create(
      params: Params$Resource$Accounts$Ordertrackingsignals$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Ordertrackingsignals$Create,
      options: MethodOptions | BodyResponseCallback<Schema$OrderTrackingSignal>,
      callback: BodyResponseCallback<Schema$OrderTrackingSignal>
    ): void;
    create(
      params: Params$Resource$Accounts$Ordertrackingsignals$Create,
      callback: BodyResponseCallback<Schema$OrderTrackingSignal>
    ): void;
    create(callback: BodyResponseCallback<Schema$OrderTrackingSignal>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Ordertrackingsignals$Create
        | BodyResponseCallback<Schema$OrderTrackingSignal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrderTrackingSignal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrderTrackingSignal>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OrderTrackingSignal>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Ordertrackingsignals$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Ordertrackingsignals$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/ordertracking/v1beta/{+parent}/ordertrackingsignals'
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
        createAPIRequest<Schema$OrderTrackingSignal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrderTrackingSignal>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Ordertrackingsignals$Create
    extends StandardParameters {
    /**
     * Output only. The ID that uniquely identifies this order tracking signal.
     */
    orderTrackingSignalId?: string;
    /**
     * Required. The account of the business for which the order signal is created. Format: accounts/{account\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OrderTrackingSignal;
  }
}
