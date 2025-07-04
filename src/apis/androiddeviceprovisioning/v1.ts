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

export namespace androiddeviceprovisioning_v1 {
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
   * Android Device Provisioning Partner API
   *
   * Automates Android zero-touch enrollment for device resellers, customers, and EMMs.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
   * ```
   */
  export class Androiddeviceprovisioning {
    context: APIRequestContext;
    customers: Resource$Customers;
    operations: Resource$Operations;
    partners: Resource$Partners;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.customers = new Resource$Customers(this.context);
      this.operations = new Resource$Operations(this.context);
      this.partners = new Resource$Partners(this.context);
    }
  }

  /**
   * Request message to claim a device on behalf of a customer.
   */
  export interface Schema$ClaimDeviceRequest {
    /**
     * Optional. The ID of the configuration applied to the device section.
     */
    configurationId?: string | null;
    /**
     * The ID of the customer for whom the device is being claimed.
     */
    customerId?: string | null;
    /**
     * Required. Required. The device identifier of the device to claim.
     */
    deviceIdentifier?: Schema$DeviceIdentifier;
    /**
     * Optional. The metadata to attach to the device.
     */
    deviceMetadata?: Schema$DeviceMetadata;
    /**
     * The Google Workspace customer ID.
     */
    googleWorkspaceCustomerId?: string | null;
    /**
     * Optional. Must and can only be set for Chrome OS devices.
     */
    preProvisioningToken?: string | null;
    /**
     * Required. The section type of the device's provisioning record.
     */
    sectionType?: string | null;
    /**
     * Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile.
     */
    simlockProfileId?: string | null;
  }
  /**
   * Response message containing device id of the claim.
   */
  export interface Schema$ClaimDeviceResponse {
    /**
     * The device ID of the claimed device.
     */
    deviceId?: string | null;
    /**
     * The resource name of the device in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
     */
    deviceName?: string | null;
  }
  /**
   * Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.
   */
  export interface Schema$ClaimDevicesRequest {
    /**
     * Required. A list of device claims.
     */
    claims?: Schema$PartnerClaim[];
  }
  /**
   * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
   */
  export interface Schema$Company {
    /**
     * Optional. Email address of customer's users in the admin role. Each email address must be associated with a Google Account.
     */
    adminEmails?: string[] | null;
    /**
     * Output only. The ID of the company. Assigned by the server.
     */
    companyId?: string | null;
    /**
     * Required. The name of the company. For example _XYZ Corp_. Displayed to the company's employees in the zero-touch enrollment portal.
     */
    companyName?: string | null;
    /**
     * Output only. The Google Workspace account associated with this customer. Only used for customer Companies.
     */
    googleWorkspaceAccount?: Schema$GoogleWorkspaceAccount;
    /**
     * Input only. The preferred locale of the customer represented as a BCP47 language code. This field is validated on input and requests containing unsupported language codes will be rejected. Supported language codes: Arabic (ar) Chinese (Hong Kong) (zh-HK) Chinese (Simplified) (zh-CN) Chinese (Traditional) (zh-TW) Czech (cs) Danish (da) Dutch (nl) English (UK) (en-GB) English (US) (en-US) Filipino (fil) Finnish (fi) French (fr) German (de) Hebrew (iw) Hindi (hi) Hungarian (hu) Indonesian (id) Italian (it) Japanese (ja) Korean (ko) Norwegian (Bokmal) (no) Polish (pl) Portuguese (Brazil) (pt-BR) Portuguese (Portugal) (pt-PT) Russian (ru) Spanish (es) Spanish (Latin America) (es-419) Swedish (sv) Thai (th) Turkish (tr) Ukrainian (uk) Vietnamese (vi)
     */
    languageCode?: string | null;
    /**
     * Output only. The API resource name of the company. The resource name is one of the following formats: * `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]/customers/[CUSTOMER_ID]` Assigned by the server.
     */
    name?: string | null;
    /**
     * Required. Input only. Email address of customer's users in the owner role. At least one `owner_email` is required. Owners share the same access as admins but can also add, delete, and edit your organization's portal users.
     */
    ownerEmails?: string[] | null;
    /**
     * Input only. If set to true, welcome email will not be sent to the customer. It is recommended to skip the welcome email if devices will be claimed with additional DEVICE_PROTECTION service, as the customer will receive separate emails at device claim time. This field is ignored if this is not a Zero-touch customer.
     */
    skipWelcomeEmail?: boolean | null;
    /**
     * Output only. Whether any user from the company has accepted the latest Terms of Service (ToS). See TermsStatus.
     */
    termsStatus?: string | null;
  }
  /**
   * A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.
   */
  export interface Schema$Configuration {
    /**
     * Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning.
     */
    companyName?: string | null;
    /**
     * Output only. The ID of the configuration. Assigned by the server.
     */
    configurationId?: string | null;
    /**
     * Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins.
     */
    configurationName?: string | null;
    /**
     * Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input.
     */
    contactEmail?: string | null;
    /**
     * Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses.
     */
    contactPhone?: string | null;
    /**
     * A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned.
     */
    customMessage?: string | null;
    /**
     * The JSON-formatted EMM provisioning extras that are passed to the DPC.
     */
    dpcExtras?: string | null;
    /**
     * Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/x`. To list the supported DPCs, call `customers.dpcs.list`.
     */
    dpcResourcePath?: string | null;
    /**
     * Optional. The timeout before forcing factory reset the device if the device doesn't go through provisioning in the setup wizard, usually due to lack of network connectivity during setup wizard. Ranges from 0-6 hours, with 2 hours being the default if unset.
     */
    forcedResetTime?: string | null;
    /**
     * Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`.
     */
    isDefault?: boolean | null;
    /**
     * Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.
     */
    name?: string | null;
  }
  /**
   * Request message to create a customer.
   */
  export interface Schema$CreateCustomerRequest {
    /**
     * Required. The company data to populate the new customer. Must contain a value for `companyName` and at least one `owner_email` that's associated with a Google Account. The values for `companyId` and `name` must be empty.
     */
    customer?: Schema$Company;
  }
  /**
   * Request message for customer to assign a configuration to device.
   */
  export interface Schema$CustomerApplyConfigurationRequest {
    /**
     * Required. The configuration applied to the device in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.
     */
    configuration?: string | null;
    /**
     * Required. The device the configuration is applied to. There are custom validations in ApplyConfigurationRequestValidator
     */
    device?: Schema$DeviceReference;
  }
  /**
   * Response message of customer's listing configuration.
   */
  export interface Schema$CustomerListConfigurationsResponse {
    /**
     * The configurations.
     */
    configurations?: Schema$Configuration[];
  }
  /**
   * Response message for listing my customers.
   */
  export interface Schema$CustomerListCustomersResponse {
    /**
     * The customer accounts the calling user is a member of.
     */
    customers?: Schema$Company[];
    /**
     * A token used to access the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message of customer's liting devices.
   */
  export interface Schema$CustomerListDevicesResponse {
    /**
     * The customer's devices.
     */
    devices?: Schema$Device[];
    /**
     * A token used to access the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message of customer's listing DPCs.
   */
  export interface Schema$CustomerListDpcsResponse {
    /**
     * The list of DPCs available to the customer that support zero-touch enrollment.
     */
    dpcs?: Schema$Dpc[];
  }
  /**
   * Request message for customer to remove the configuration from device.
   */
  export interface Schema$CustomerRemoveConfigurationRequest {
    /**
     * Required. The device to remove the configuration from. There are custom validations in RemoveConfigurationRequestValidator
     */
    device?: Schema$DeviceReference;
  }
  /**
   * Request message for customer to unclaim a device.
   */
  export interface Schema$CustomerUnclaimDeviceRequest {
    /**
     * Required. The device to unclaim. There are custom validations in UnclaimDeviceRequestValidator.
     */
    device?: Schema$DeviceReference;
  }
  /**
   * An Android or Chrome OS device registered for zero-touch enrollment.
   */
  export interface Schema$Device {
    /**
     * Output only. The provisioning claims for a device. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. Call `partners.devices.unclaim` or `partners.devices.unclaimAsync` to remove the device from zero-touch enrollment.
     */
    claims?: Schema$DeviceClaim[];
    /**
     * Not available to resellers.
     */
    configuration?: string | null;
    /**
     * Output only. The ID of the device. Assigned by the server.
     */
    deviceId?: string | null;
    /**
     * The hardware IDs that identify a manufactured device. To learn more, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
     */
    deviceIdentifier?: Schema$DeviceIdentifier;
    /**
     * The metadata attached to the device. Structured as key-value pairs. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
     */
    deviceMetadata?: Schema$DeviceMetadata;
    /**
     * Output only. The API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server.
     */
    name?: string | null;
  }
  /**
   * A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
   */
  export interface Schema$DeviceClaim {
    /**
     * The Additional service registered for the device.
     */
    additionalService?: string | null;
    /**
     * The ID of the Google Workspace account that owns the Chrome OS device.
     */
    googleWorkspaceCustomerId?: string | null;
    /**
     * The ID of the Customer that purchased the device.
     */
    ownerCompanyId?: string | null;
    /**
     * The ID of the reseller that claimed the device.
     */
    resellerId?: string | null;
    /**
     * Output only. The type of claim made on the device.
     */
    sectionType?: string | null;
    /**
     * The timestamp when the device will exit ‘vacation mode’. This value is present iff the device is in 'vacation mode'.
     */
    vacationModeExpireTime?: string | null;
    /**
     * The timestamp when the device was put into ‘vacation mode’. This value is present iff the device is in 'vacation mode'.
     */
    vacationModeStartTime?: string | null;
  }
  /**
   * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
   */
  export interface Schema$DeviceIdentifier {
    /**
     * An identifier provided by OEMs, carried through the production and sales process. Only applicable to Chrome OS devices.
     */
    chromeOsAttestedDeviceId?: string | null;
    /**
     * The type of the device
     */
    deviceType?: string | null;
    /**
     * The device’s IMEI number. Validated on input.
     */
    imei?: string | null;
    /**
     * The device’s second IMEI number.
     */
    imei2?: string | null;
    /**
     * The device manufacturer’s name. Matches the device's built-in value returned from `android.os.Build.MANUFACTURER`. Allowed values are listed in [Android manufacturers](/zero-touch/resources/manufacturer-names#manufacturers-names).
     */
    manufacturer?: string | null;
    /**
     * The device’s MEID number.
     */
    meid?: string | null;
    /**
     * The device’s second MEID number.
     */
    meid2?: string | null;
    /**
     * The device model's name. Allowed values are listed in [Android models](/zero-touch/resources/manufacturer-names#model-names) and [Chrome OS models](https://support.google.com/chrome/a/answer/10130175#identify_compatible).
     */
    model?: string | null;
    /**
     * The manufacturer's serial number for the device. This value might not be unique across different device models.
     */
    serialNumber?: string | null;
  }
  /**
   * Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
   */
  export interface Schema$DeviceMetadata {
    /**
     * Metadata entries recorded as key-value pairs.
     */
    entries?: {[key: string]: string} | null;
  }
  /**
   * A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
   */
  export interface Schema$DeviceReference {
    /**
     * The ID of the device.
     */
    deviceId?: string | null;
    /**
     * The hardware IDs of the device.
     */
    deviceIdentifier?: Schema$DeviceIdentifier;
  }
  /**
   * Tracks the status of a long-running operation to asynchronously update a batch of reseller metadata attached to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
   */
  export interface Schema$DevicesLongRunningOperationMetadata {
    /**
     * The number of metadata updates in the operation. This might be different from the number of updates in the request if the API can't parse some of the updates.
     */
    devicesCount?: number | null;
    /**
     * The processing status of the operation.
     */
    processingStatus?: string | null;
    /**
     * The processing progress of the operation. Measured as a number from 0 to 100. A value of 10O doesn't always mean the operation completed—check for the inclusion of a `done` field.
     */
    progress?: number | null;
  }
  /**
   * Tracks the status of a long-running operation to claim, unclaim, or attach metadata to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
   */
  export interface Schema$DevicesLongRunningOperationResponse {
    /**
     * The processing status for each device in the operation. One `PerDeviceStatus` per device. The list order matches the items in the original request.
     */
    perDeviceStatus?: Schema$OperationPerDevice[];
    /**
     * A summary of how many items in the operation the server processed successfully. Updated as the operation progresses.
     */
    successCount?: number | null;
  }
  /**
   * An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play.
   */
  export interface Schema$Dpc {
    /**
     * Output only. The title of the DPC app in Google Play. For example, _Google Apps Device Policy_. Useful in an application's user interface.
     */
    dpcName?: string | null;
    /**
     * Output only. The API resource name in the format `customers/[CUSTOMER_ID]/dpcs/[DPC_ID]`. Assigned by the server. To maintain a reference to a DPC across customer accounts, persist and match the last path component (`DPC_ID`).
     */
    name?: string | null;
    /**
     * Output only. The DPC's Android application ID that looks like a Java package name. Zero-touch enrollment installs the DPC app onto a device using this identifier.
     */
    packageName?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Request to find devices.
   */
  export interface Schema$FindDevicesByDeviceIdentifierRequest {
    /**
     * Required. Required. The device identifier to search for. If serial number is provided then case insensitive serial number matches are allowed.
     */
    deviceIdentifier?: Schema$DeviceIdentifier;
    /**
     * Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
     */
    limit?: string | null;
    /**
     * A token specifying which result page to return.
     */
    pageToken?: string | null;
  }
  /**
   * Response containing found devices.
   */
  export interface Schema$FindDevicesByDeviceIdentifierResponse {
    /**
     * Found devices.
     */
    devices?: Schema$Device[];
    /**
     * A token used to access the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string | null;
    /**
     * The total count of items in the list irrespective of pagination.
     */
    totalSize?: number | null;
  }
  /**
   * Request to find devices by customers.
   */
  export interface Schema$FindDevicesByOwnerRequest {
    /**
     * The list of customer IDs to search for.
     */
    customerId?: string[] | null;
    /**
     * The list of IDs of Google Workspace accounts to search for.
     */
    googleWorkspaceCustomerId?: string[] | null;
    /**
     * Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
     */
    limit?: string | null;
    /**
     * A token specifying which result page to return.
     */
    pageToken?: string | null;
    /**
     * Required. The section type of the device's provisioning record.
     */
    sectionType?: string | null;
  }
  /**
   * Response containing found devices.
   */
  export interface Schema$FindDevicesByOwnerResponse {
    /**
     * The customer's devices.
     */
    devices?: Schema$Device[];
    /**
     * A token used to access the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string | null;
    /**
     * The total count of items in the list irrespective of pagination.
     */
    totalSize?: number | null;
  }
  /**
   * Request to get a device's SIM lock status.
   */
  export interface Schema$GetDeviceSimLockStateRequest {
    /**
     * Required. Required. The device identifier to search for.
     */
    deviceIdentifier?: Schema$DeviceIdentifier;
  }
  /**
   * Response containing a device's SimLock state.
   */
  export interface Schema$GetDeviceSimLockStateResponse {
    simLockState?: string | null;
  }
  /**
   * A Google Workspace customer.
   */
  export interface Schema$GoogleWorkspaceAccount {
    /**
     * Required. The customer ID.
     */
    customerId?: string | null;
    /**
     * Output only. The pre-provisioning tokens previously used to claim devices.
     */
    preProvisioningTokens?: string[] | null;
  }
  /**
   * Response message of all customers related to this partner.
   */
  export interface Schema$ListCustomersResponse {
    /**
     * List of customers related to this reseller partner.
     */
    customers?: Schema$Company[];
    /**
     * A token to retrieve the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string | null;
    /**
     * The total count of items in the list irrespective of pagination.
     */
    totalSize?: number | null;
  }
  /**
   * Response message to list customers of the vendor.
   */
  export interface Schema$ListVendorCustomersResponse {
    /**
     * List of customers of the vendor.
     */
    customers?: Schema$Company[];
    /**
     * A token to retrieve the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string | null;
    /**
     * The total count of items in the list irrespective of pagination.
     */
    totalSize?: number | null;
  }
  /**
   * Response message to list vendors of the partner.
   */
  export interface Schema$ListVendorsResponse {
    /**
     * A token to retrieve the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string | null;
    /**
     * The total count of items in the list irrespective of pagination.
     */
    totalSize?: number | null;
    /**
     * List of vendors of the reseller partner. Fields `name`, `companyId` and `companyName` are populated to the Company object.
     */
    vendors?: Schema$Company[];
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
     * This field will always be not set if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. In this case, error information for each device is set in `response.perDeviceStatus.result.status`.
     */
    error?: Schema$Status;
    /**
     * This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A task for each device in the operation. Corresponds to each device change in the request.
   */
  export interface Schema$OperationPerDevice {
    /**
     * A copy of the original device-claim request received by the server.
     */
    claim?: Schema$PartnerClaim;
    /**
     * The processing result for each device.
     */
    result?: Schema$PerDeviceStatusInBatch;
    /**
     * A copy of the original device-unclaim request received by the server.
     */
    unclaim?: Schema$PartnerUnclaim;
    /**
     * A copy of the original metadata-update request received by the server.
     */
    updateMetadata?: Schema$UpdateMetadataArguments;
  }
  /**
   * Identifies one claim request.
   */
  export interface Schema$PartnerClaim {
    /**
     * Optional. The ID of the configuration applied to the device section.
     */
    configurationId?: string | null;
    /**
     * The ID of the customer for whom the device is being claimed.
     */
    customerId?: string | null;
    /**
     * Required. Required. Device identifier of the device.
     */
    deviceIdentifier?: Schema$DeviceIdentifier;
    /**
     * Required. The metadata to attach to the device at claim.
     */
    deviceMetadata?: Schema$DeviceMetadata;
    /**
     * The Google Workspace customer ID.
     */
    googleWorkspaceCustomerId?: string | null;
    /**
     * Optional. Must and can only be set for Chrome OS devices.
     */
    preProvisioningToken?: string | null;
    /**
     * Required. The section type of the device's provisioning record.
     */
    sectionType?: string | null;
    /**
     * Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile.
     */
    simlockProfileId?: string | null;
  }
  /**
   * Identifies one unclaim request.
   */
  export interface Schema$PartnerUnclaim {
    /**
     * Required. Device ID of the device.
     */
    deviceId?: string | null;
    /**
     * Required. Device identifier of the device.
     */
    deviceIdentifier?: Schema$DeviceIdentifier;
    /**
     * Required. The section type of the device's provisioning record.
     */
    sectionType?: string | null;
    /**
     * Optional. The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)
     */
    vacationModeDays?: number | null;
    /**
     * Optional. The expiration time of the vacation unlock.
     */
    vacationModeExpireTime?: string | null;
  }
  /**
   * Captures the processing status for each device in the operation.
   */
  export interface Schema$PerDeviceStatusInBatch {
    /**
     * If processing succeeds, the device ID of the device.
     */
    deviceId?: string | null;
    /**
     * If processing fails, the error type.
     */
    errorIdentifier?: string | null;
    /**
     * If processing fails, a developer message explaining what went wrong.
     */
    errorMessage?: string | null;
    /**
     * The result status of the device after processing.
     */
    status?: string | null;
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
   * Request message to unclaim a device.
   */
  export interface Schema$UnclaimDeviceRequest {
    /**
     * Required. The device ID returned by `ClaimDevice`.
     */
    deviceId?: string | null;
    /**
     * Required. The device identifier you used when you claimed this device.
     */
    deviceIdentifier?: Schema$DeviceIdentifier;
    /**
     * Required. The section type of the device's provisioning record.
     */
    sectionType?: string | null;
    /**
     * The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)
     */
    vacationModeDays?: number | null;
    /**
     * The expiration time of the vacation unlock.
     */
    vacationModeExpireTime?: string | null;
  }
  /**
   * Request to unclaim devices asynchronously in batch.
   */
  export interface Schema$UnclaimDevicesRequest {
    /**
     * Required. The list of devices to unclaim.
     */
    unclaims?: Schema$PartnerUnclaim[];
  }
  /**
   * Request to update device metadata in batch.
   */
  export interface Schema$UpdateDeviceMetadataInBatchRequest {
    /**
     * Required. The list of metadata updates.
     */
    updates?: Schema$UpdateMetadataArguments[];
  }
  /**
   * Request to set metadata for a device.
   */
  export interface Schema$UpdateDeviceMetadataRequest {
    /**
     * Required. The metadata to attach to the device.
     */
    deviceMetadata?: Schema$DeviceMetadata;
  }
  /**
   * Identifies metadata updates to one device.
   */
  export interface Schema$UpdateMetadataArguments {
    /**
     * Required. Device ID of the device.
     */
    deviceId?: string | null;
    /**
     * Required. Device identifier.
     */
    deviceIdentifier?: Schema$DeviceIdentifier;
    /**
     * Required. The metadata to update.
     */
    deviceMetadata?: Schema$DeviceMetadata;
  }

  export class Resource$Customers {
    context: APIRequestContext;
    configurations: Resource$Customers$Configurations;
    devices: Resource$Customers$Devices;
    dpcs: Resource$Customers$Dpcs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.configurations = new Resource$Customers$Configurations(this.context);
      this.devices = new Resource$Customers$Devices(this.context);
      this.dpcs = new Resource$Customers$Dpcs(this.context);
    }

    /**
     * Lists the user's customer accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.customers.list({
     *     // Required. The maximum number of customers to show in a page of results. A number between 1 and 100 (inclusive).
     *     pageSize: 'placeholder-value',
     *     // A token specifying which result page to return. This field has custom validations in ListCustomersRequestValidator
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customers": [],
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
      params: Params$Resource$Customers$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomerListCustomersResponse>>;
    list(
      params: Params$Resource$Customers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomerListCustomersResponse>,
      callback: BodyResponseCallback<Schema$CustomerListCustomersResponse>
    ): void;
    list(
      params: Params$Resource$Customers$List,
      callback: BodyResponseCallback<Schema$CustomerListCustomersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CustomerListCustomersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$List
        | BodyResponseCallback<Schema$CustomerListCustomersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomerListCustomersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomerListCustomersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CustomerListCustomersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Customers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/customers').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CustomerListCustomersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomerListCustomersResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$List extends StandardParameters {
    /**
     * Required. The maximum number of customers to show in a page of results. A number between 1 and 100 (inclusive).
     */
    pageSize?: number;
    /**
     * A token specifying which result page to return. This field has custom validations in ListCustomersRequestValidator
     */
    pageToken?: string;
  }

  export class Resource$Customers$Configurations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new configuration. Once created, a customer can apply the configuration to devices.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.customers.configurations.create({
     *     // Required. The customer that manages the configuration. An API resource name in the format `customers/[CUSTOMER_ID]`. This field has custom validation in CreateConfigurationRequestValidator
     *     parent: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "companyName": "my_companyName",
     *       //   "configurationId": "my_configurationId",
     *       //   "configurationName": "my_configurationName",
     *       //   "contactEmail": "my_contactEmail",
     *       //   "contactPhone": "my_contactPhone",
     *       //   "customMessage": "my_customMessage",
     *       //   "dpcExtras": "my_dpcExtras",
     *       //   "dpcResourcePath": "my_dpcResourcePath",
     *       //   "forcedResetTime": "my_forcedResetTime",
     *       //   "isDefault": false,
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "companyName": "my_companyName",
     *   //   "configurationId": "my_configurationId",
     *   //   "configurationName": "my_configurationName",
     *   //   "contactEmail": "my_contactEmail",
     *   //   "contactPhone": "my_contactPhone",
     *   //   "customMessage": "my_customMessage",
     *   //   "dpcExtras": "my_dpcExtras",
     *   //   "dpcResourcePath": "my_dpcResourcePath",
     *   //   "forcedResetTime": "my_forcedResetTime",
     *   //   "isDefault": false,
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
    create(
      params: Params$Resource$Customers$Configurations$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Customers$Configurations$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Configuration>>;
    create(
      params: Params$Resource$Customers$Configurations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Customers$Configurations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    create(
      params: Params$Resource$Customers$Configurations$Create,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    create(callback: BodyResponseCallback<Schema$Configuration>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Customers$Configurations$Create
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Configuration>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Configurations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Configurations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/configurations').replace(
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
        createAPIRequest<Schema$Configuration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.customers.configurations.delete({
     *     // Required. The configuration to delete. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the configuration is applied to any devices, the API call fails.
     *     name: 'customers/my-customer/configurations/my-configuration',
     *   });
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
      params: Params$Resource$Customers$Configurations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Customers$Configurations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Customers$Configurations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Customers$Configurations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Customers$Configurations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Customers$Configurations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Configurations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Configurations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the details of a configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.customers.configurations.get({
     *     // Required. The configuration to get. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.
     *     name: 'customers/my-customer/configurations/my-configuration',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "companyName": "my_companyName",
     *   //   "configurationId": "my_configurationId",
     *   //   "configurationName": "my_configurationName",
     *   //   "contactEmail": "my_contactEmail",
     *   //   "contactPhone": "my_contactPhone",
     *   //   "customMessage": "my_customMessage",
     *   //   "dpcExtras": "my_dpcExtras",
     *   //   "dpcResourcePath": "my_dpcResourcePath",
     *   //   "forcedResetTime": "my_forcedResetTime",
     *   //   "isDefault": false,
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
    get(
      params: Params$Resource$Customers$Configurations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Configurations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Configuration>>;
    get(
      params: Params$Resource$Customers$Configurations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Configurations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(
      params: Params$Resource$Customers$Configurations$Get,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(callback: BodyResponseCallback<Schema$Configuration>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Configurations$Get
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Configuration>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Configurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Configurations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Configuration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * Lists a customer's configurations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.customers.configurations.list({
     *     // Required. The customer that manages the listed configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
     *     parent: 'customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configurations": []
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
      params: Params$Resource$Customers$Configurations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$Configurations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$CustomerListConfigurationsResponse>
    >;
    list(
      params: Params$Resource$Customers$Configurations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Configurations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomerListConfigurationsResponse>,
      callback: BodyResponseCallback<Schema$CustomerListConfigurationsResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Configurations$List,
      callback: BodyResponseCallback<Schema$CustomerListConfigurationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CustomerListConfigurationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Configurations$List
        | BodyResponseCallback<Schema$CustomerListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomerListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomerListConfigurationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$CustomerListConfigurationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Configurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Configurations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/configurations').replace(
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
        createAPIRequest<Schema$CustomerListConfigurationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomerListConfigurationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a configuration's field values.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.customers.configurations.patch({
     *     // Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.
     *     name: 'customers/my-customer/configurations/my-configuration',
     *     // Required. The field mask applied to the target `Configuration` before updating the fields. To learn more about using field masks, read [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in the Protocol Buffers documentation.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "companyName": "my_companyName",
     *       //   "configurationId": "my_configurationId",
     *       //   "configurationName": "my_configurationName",
     *       //   "contactEmail": "my_contactEmail",
     *       //   "contactPhone": "my_contactPhone",
     *       //   "customMessage": "my_customMessage",
     *       //   "dpcExtras": "my_dpcExtras",
     *       //   "dpcResourcePath": "my_dpcResourcePath",
     *       //   "forcedResetTime": "my_forcedResetTime",
     *       //   "isDefault": false,
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "companyName": "my_companyName",
     *   //   "configurationId": "my_configurationId",
     *   //   "configurationName": "my_configurationName",
     *   //   "contactEmail": "my_contactEmail",
     *   //   "contactPhone": "my_contactPhone",
     *   //   "customMessage": "my_customMessage",
     *   //   "dpcExtras": "my_dpcExtras",
     *   //   "dpcResourcePath": "my_dpcResourcePath",
     *   //   "forcedResetTime": "my_forcedResetTime",
     *   //   "isDefault": false,
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
      params: Params$Resource$Customers$Configurations$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Customers$Configurations$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Configuration>>;
    patch(
      params: Params$Resource$Customers$Configurations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Customers$Configurations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    patch(
      params: Params$Resource$Customers$Configurations$Patch,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Configuration>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Customers$Configurations$Patch
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Configuration>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Configurations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Configurations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Configuration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Configurations$Create
    extends StandardParameters {
    /**
     * Required. The customer that manages the configuration. An API resource name in the format `customers/[CUSTOMER_ID]`. This field has custom validation in CreateConfigurationRequestValidator
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Configuration;
  }
  export interface Params$Resource$Customers$Configurations$Delete
    extends StandardParameters {
    /**
     * Required. The configuration to delete. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the configuration is applied to any devices, the API call fails.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Configurations$Get
    extends StandardParameters {
    /**
     * Required. The configuration to get. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Configurations$List
    extends StandardParameters {
    /**
     * Required. The customer that manages the listed configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
     */
    parent?: string;
  }
  export interface Params$Resource$Customers$Configurations$Patch
    extends StandardParameters {
    /**
     * Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.
     */
    name?: string;
    /**
     * Required. The field mask applied to the target `Configuration` before updating the fields. To learn more about using field masks, read [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in the Protocol Buffers documentation.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Configuration;
  }

  export class Resource$Customers$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *     await androiddeviceprovisioning.customers.devices.applyConfiguration({
     *       // Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
     *       parent: 'customers/my-customer',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "configuration": "my_configuration",
     *         //   "device": {}
     *         // }
     *       },
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
    applyConfiguration(
      params: Params$Resource$Customers$Devices$Applyconfiguration,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    applyConfiguration(
      params?: Params$Resource$Customers$Devices$Applyconfiguration,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    applyConfiguration(
      params: Params$Resource$Customers$Devices$Applyconfiguration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    applyConfiguration(
      params: Params$Resource$Customers$Devices$Applyconfiguration,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    applyConfiguration(
      params: Params$Resource$Customers$Devices$Applyconfiguration,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    applyConfiguration(callback: BodyResponseCallback<Schema$Empty>): void;
    applyConfiguration(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Applyconfiguration
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Applyconfiguration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Applyconfiguration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/devices:applyConfiguration').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the details of a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.customers.devices.get({
     *     // Required. The device to get. An API resource name in the format `customers/[CUSTOMER_ID]/devices/[DEVICE_ID]`.
     *     name: 'customers/my-customer/devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "claims": [],
     *   //   "configuration": "my_configuration",
     *   //   "deviceId": "my_deviceId",
     *   //   "deviceIdentifier": {},
     *   //   "deviceMetadata": {},
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
    get(
      params: Params$Resource$Customers$Devices$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Customers$Devices$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Device>>;
    get(
      params: Params$Resource$Customers$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Devices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Device>,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    get(
      params: Params$Resource$Customers$Devices$Get,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    get(callback: BodyResponseCallback<Schema$Device>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Get
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Device>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Device>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Device>(parameters);
      }
    }

    /**
     * Lists a customer's devices.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.customers.devices.list({
     *     // Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
     *     pageSize: 'placeholder-value',
     *     // A token specifying which result page to return.
     *     pageToken: 'placeholder-value',
     *     // Required. The customer managing the devices. An API resource name in the format `customers/[CUSTOMER_ID]`.
     *     parent: 'customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
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
      params: Params$Resource$Customers$Devices$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$Devices$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomerListDevicesResponse>>;
    list(
      params: Params$Resource$Customers$Devices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Devices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomerListDevicesResponse>,
      callback: BodyResponseCallback<Schema$CustomerListDevicesResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Devices$List,
      callback: BodyResponseCallback<Schema$CustomerListDevicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CustomerListDevicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$List
        | BodyResponseCallback<Schema$CustomerListDevicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomerListDevicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomerListDevicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CustomerListDevicesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/devices').replace(
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
        createAPIRequest<Schema$CustomerListDevicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomerListDevicesResponse>(parameters);
      }
    }

    /**
     * Removes a configuration from device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *     await androiddeviceprovisioning.customers.devices.removeConfiguration({
     *       // Required. The customer managing the device in the format `customers/[CUSTOMER_ID]`.
     *       parent: 'customers/my-customer',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "device": {}
     *         // }
     *       },
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
    removeConfiguration(
      params: Params$Resource$Customers$Devices$Removeconfiguration,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removeConfiguration(
      params?: Params$Resource$Customers$Devices$Removeconfiguration,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    removeConfiguration(
      params: Params$Resource$Customers$Devices$Removeconfiguration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeConfiguration(
      params: Params$Resource$Customers$Devices$Removeconfiguration,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeConfiguration(
      params: Params$Resource$Customers$Devices$Removeconfiguration,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeConfiguration(callback: BodyResponseCallback<Schema$Empty>): void;
    removeConfiguration(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Removeconfiguration
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Removeconfiguration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Removeconfiguration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/devices:removeConfiguration'
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.customers.devices.unclaim({
     *     // Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
     *     parent: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "device": {}
     *       // }
     *     },
     *   });
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
    unclaim(
      params: Params$Resource$Customers$Devices$Unclaim,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    unclaim(
      params?: Params$Resource$Customers$Devices$Unclaim,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    unclaim(
      params: Params$Resource$Customers$Devices$Unclaim,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unclaim(
      params: Params$Resource$Customers$Devices$Unclaim,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    unclaim(
      params: Params$Resource$Customers$Devices$Unclaim,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    unclaim(callback: BodyResponseCallback<Schema$Empty>): void;
    unclaim(
      paramsOrCallback?:
        | Params$Resource$Customers$Devices$Unclaim
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Devices$Unclaim;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Devices$Unclaim;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/devices:unclaim').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Devices$Applyconfiguration
    extends StandardParameters {
    /**
     * Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomerApplyConfigurationRequest;
  }
  export interface Params$Resource$Customers$Devices$Get
    extends StandardParameters {
    /**
     * Required. The device to get. An API resource name in the format `customers/[CUSTOMER_ID]/devices/[DEVICE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Devices$List
    extends StandardParameters {
    /**
     * Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
     */
    pageSize?: string;
    /**
     * A token specifying which result page to return.
     */
    pageToken?: string;
    /**
     * Required. The customer managing the devices. An API resource name in the format `customers/[CUSTOMER_ID]`.
     */
    parent?: string;
  }
  export interface Params$Resource$Customers$Devices$Removeconfiguration
    extends StandardParameters {
    /**
     * Required. The customer managing the device in the format `customers/[CUSTOMER_ID]`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomerRemoveConfigurationRequest;
  }
  export interface Params$Resource$Customers$Devices$Unclaim
    extends StandardParameters {
    /**
     * Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomerUnclaimDeviceRequest;
  }

  export class Resource$Customers$Dpcs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the DPCs (device policy controllers) that support zero-touch enrollment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.customers.dpcs.list({
     *     // Required. The customer that can use the DPCs in configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
     *     parent: 'customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dpcs": []
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
      params: Params$Resource$Customers$Dpcs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Customers$Dpcs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomerListDpcsResponse>>;
    list(
      params: Params$Resource$Customers$Dpcs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Dpcs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomerListDpcsResponse>,
      callback: BodyResponseCallback<Schema$CustomerListDpcsResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Dpcs$List,
      callback: BodyResponseCallback<Schema$CustomerListDpcsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$CustomerListDpcsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Dpcs$List
        | BodyResponseCallback<Schema$CustomerListDpcsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomerListDpcsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomerListDpcsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CustomerListDpcsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Dpcs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Dpcs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dpcs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CustomerListDpcsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomerListDpcsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Customers$Dpcs$List
    extends StandardParameters {
    /**
     * Required. The customer that can use the DPCs in configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
     */
    parent?: string;
  }

  export class Resource$Operations {
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
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.operations.get({
     *     // The name of the operation resource.
     *     name: 'operations/.*',
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
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
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
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Partners {
    context: APIRequestContext;
    customers: Resource$Partners$Customers;
    devices: Resource$Partners$Devices;
    vendors: Resource$Partners$Vendors;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customers = new Resource$Partners$Customers(this.context);
      this.devices = new Resource$Partners$Devices(this.context);
      this.vendors = new Resource$Partners$Vendors(this.context);
    }
  }

  export class Resource$Partners$Customers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.customers.create({
     *     // Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller.
     *     parent: 'partners/my-partner',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customer": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adminEmails": [],
     *   //   "companyId": "my_companyId",
     *   //   "companyName": "my_companyName",
     *   //   "googleWorkspaceAccount": {},
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "ownerEmails": [],
     *   //   "skipWelcomeEmail": false,
     *   //   "termsStatus": "my_termsStatus"
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
      params: Params$Resource$Partners$Customers$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Partners$Customers$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Company>>;
    create(
      params: Params$Resource$Partners$Customers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Partners$Customers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Company>,
      callback: BodyResponseCallback<Schema$Company>
    ): void;
    create(
      params: Params$Resource$Partners$Customers$Create,
      callback: BodyResponseCallback<Schema$Company>
    ): void;
    create(callback: BodyResponseCallback<Schema$Company>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Partners$Customers$Create
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Company>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Company>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Customers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Customers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customers').replace(
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
        createAPIRequest<Schema$Company>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Company>(parameters);
      }
    }

    /**
     * Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.customers.list({
     *     // The maximum number of results to be returned. If not specified or 0, all the records are returned.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // Required. The ID of the reseller partner.
     *     partnerId: '[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customers": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0
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
      params: Params$Resource$Partners$Customers$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Partners$Customers$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCustomersResponse>>;
    list(
      params: Params$Resource$Partners$Customers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Partners$Customers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCustomersResponse>,
      callback: BodyResponseCallback<Schema$ListCustomersResponse>
    ): void;
    list(
      params: Params$Resource$Partners$Customers$List,
      callback: BodyResponseCallback<Schema$ListCustomersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCustomersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Partners$Customers$List
        | BodyResponseCallback<Schema$ListCustomersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCustomersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCustomersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCustomersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Customers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Customers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/partners/{+partnerId}/customers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCustomersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCustomersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Partners$Customers$Create
    extends StandardParameters {
    /**
     * Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateCustomerRequest;
  }
  export interface Params$Resource$Partners$Customers$List
    extends StandardParameters {
    /**
     * The maximum number of results to be returned. If not specified or 0, all the records are returned.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * Required. The ID of the reseller partner.
     */
    partnerId?: string;
  }

  export class Resource$Partners$Devices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.devices.claim({
     *     // Required. The ID of the reseller partner.
     *     partnerId: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "configurationId": "my_configurationId",
     *       //   "customerId": "my_customerId",
     *       //   "deviceIdentifier": {},
     *       //   "deviceMetadata": {},
     *       //   "googleWorkspaceCustomerId": "my_googleWorkspaceCustomerId",
     *       //   "preProvisioningToken": "my_preProvisioningToken",
     *       //   "sectionType": "my_sectionType",
     *       //   "simlockProfileId": "my_simlockProfileId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deviceId": "my_deviceId",
     *   //   "deviceName": "my_deviceName"
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
    claim(
      params: Params$Resource$Partners$Devices$Claim,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    claim(
      params?: Params$Resource$Partners$Devices$Claim,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ClaimDeviceResponse>>;
    claim(
      params: Params$Resource$Partners$Devices$Claim,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    claim(
      params: Params$Resource$Partners$Devices$Claim,
      options: MethodOptions | BodyResponseCallback<Schema$ClaimDeviceResponse>,
      callback: BodyResponseCallback<Schema$ClaimDeviceResponse>
    ): void;
    claim(
      params: Params$Resource$Partners$Devices$Claim,
      callback: BodyResponseCallback<Schema$ClaimDeviceResponse>
    ): void;
    claim(callback: BodyResponseCallback<Schema$ClaimDeviceResponse>): void;
    claim(
      paramsOrCallback?:
        | Params$Resource$Partners$Devices$Claim
        | BodyResponseCallback<Schema$ClaimDeviceResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClaimDeviceResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClaimDeviceResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ClaimDeviceResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Devices$Claim;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Devices$Claim;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/partners/{+partnerId}/devices:claim').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ClaimDeviceResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClaimDeviceResponse>(parameters);
      }
    }

    /**
     * Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.devices.claimAsync({
     *     // Required. The ID of the reseller partner.
     *     partnerId: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "claims": []
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
    claimAsync(
      params: Params$Resource$Partners$Devices$Claimasync,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    claimAsync(
      params?: Params$Resource$Partners$Devices$Claimasync,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    claimAsync(
      params: Params$Resource$Partners$Devices$Claimasync,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    claimAsync(
      params: Params$Resource$Partners$Devices$Claimasync,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    claimAsync(
      params: Params$Resource$Partners$Devices$Claimasync,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    claimAsync(callback: BodyResponseCallback<Schema$Operation>): void;
    claimAsync(
      paramsOrCallback?:
        | Params$Resource$Partners$Devices$Claimasync
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
        {}) as Params$Resource$Partners$Devices$Claimasync;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Devices$Claimasync;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/partners/{+partnerId}/devices:claimAsync'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
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
     * Finds devices by hardware identifiers, such as IMEI.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.devices.findByIdentifier(
     *     {
     *       // Required. The ID of the reseller partner.
     *       partnerId: '[^/]+',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "deviceIdentifier": {},
     *         //   "limit": "my_limit",
     *         //   "pageToken": "my_pageToken"
     *         // }
     *       },
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0
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
    findByIdentifier(
      params: Params$Resource$Partners$Devices$Findbyidentifier,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    findByIdentifier(
      params?: Params$Resource$Partners$Devices$Findbyidentifier,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$FindDevicesByDeviceIdentifierResponse>
    >;
    findByIdentifier(
      params: Params$Resource$Partners$Devices$Findbyidentifier,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    findByIdentifier(
      params: Params$Resource$Partners$Devices$Findbyidentifier,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FindDevicesByDeviceIdentifierResponse>,
      callback: BodyResponseCallback<Schema$FindDevicesByDeviceIdentifierResponse>
    ): void;
    findByIdentifier(
      params: Params$Resource$Partners$Devices$Findbyidentifier,
      callback: BodyResponseCallback<Schema$FindDevicesByDeviceIdentifierResponse>
    ): void;
    findByIdentifier(
      callback: BodyResponseCallback<Schema$FindDevicesByDeviceIdentifierResponse>
    ): void;
    findByIdentifier(
      paramsOrCallback?:
        | Params$Resource$Partners$Devices$Findbyidentifier
        | BodyResponseCallback<Schema$FindDevicesByDeviceIdentifierResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FindDevicesByDeviceIdentifierResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FindDevicesByDeviceIdentifierResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$FindDevicesByDeviceIdentifierResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Devices$Findbyidentifier;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Devices$Findbyidentifier;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/partners/{+partnerId}/devices:findByIdentifier'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FindDevicesByDeviceIdentifierResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FindDevicesByDeviceIdentifierResponse>(
          parameters
        );
      }
    }

    /**
     * Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.devices.findByOwner({
     *     // Required. The ID of the reseller partner.
     *     partnerId: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customerId": [],
     *       //   "googleWorkspaceCustomerId": [],
     *       //   "limit": "my_limit",
     *       //   "pageToken": "my_pageToken",
     *       //   "sectionType": "my_sectionType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "devices": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0
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
    findByOwner(
      params: Params$Resource$Partners$Devices$Findbyowner,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    findByOwner(
      params?: Params$Resource$Partners$Devices$Findbyowner,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FindDevicesByOwnerResponse>>;
    findByOwner(
      params: Params$Resource$Partners$Devices$Findbyowner,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    findByOwner(
      params: Params$Resource$Partners$Devices$Findbyowner,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FindDevicesByOwnerResponse>,
      callback: BodyResponseCallback<Schema$FindDevicesByOwnerResponse>
    ): void;
    findByOwner(
      params: Params$Resource$Partners$Devices$Findbyowner,
      callback: BodyResponseCallback<Schema$FindDevicesByOwnerResponse>
    ): void;
    findByOwner(
      callback: BodyResponseCallback<Schema$FindDevicesByOwnerResponse>
    ): void;
    findByOwner(
      paramsOrCallback?:
        | Params$Resource$Partners$Devices$Findbyowner
        | BodyResponseCallback<Schema$FindDevicesByOwnerResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FindDevicesByOwnerResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FindDevicesByOwnerResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FindDevicesByOwnerResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Devices$Findbyowner;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Devices$Findbyowner;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/partners/{+partnerId}/devices:findByOwner'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FindDevicesByOwnerResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FindDevicesByOwnerResponse>(parameters);
      }
    }

    /**
     * Gets a device.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.devices.get({
     *     // Required. The device API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
     *     name: 'partners/my-partner/devices/my-device',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "claims": [],
     *   //   "configuration": "my_configuration",
     *   //   "deviceId": "my_deviceId",
     *   //   "deviceIdentifier": {},
     *   //   "deviceMetadata": {},
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
    get(
      params: Params$Resource$Partners$Devices$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Partners$Devices$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Device>>;
    get(
      params: Params$Resource$Partners$Devices$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Partners$Devices$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Device>,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    get(
      params: Params$Resource$Partners$Devices$Get,
      callback: BodyResponseCallback<Schema$Device>
    ): void;
    get(callback: BodyResponseCallback<Schema$Device>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Partners$Devices$Get
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Device>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Device>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Device>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Device>(parameters);
      }
    }

    /**
     * Gets a device's SIM lock state.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.devices.getSimLockState({
     *     // Required. The ID of the partner.
     *     partnerId: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deviceIdentifier": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "simLockState": "my_simLockState"
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
    getSimLockState(
      params: Params$Resource$Partners$Devices$Getsimlockstate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSimLockState(
      params?: Params$Resource$Partners$Devices$Getsimlockstate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GetDeviceSimLockStateResponse>>;
    getSimLockState(
      params: Params$Resource$Partners$Devices$Getsimlockstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSimLockState(
      params: Params$Resource$Partners$Devices$Getsimlockstate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetDeviceSimLockStateResponse>,
      callback: BodyResponseCallback<Schema$GetDeviceSimLockStateResponse>
    ): void;
    getSimLockState(
      params: Params$Resource$Partners$Devices$Getsimlockstate,
      callback: BodyResponseCallback<Schema$GetDeviceSimLockStateResponse>
    ): void;
    getSimLockState(
      callback: BodyResponseCallback<Schema$GetDeviceSimLockStateResponse>
    ): void;
    getSimLockState(
      paramsOrCallback?:
        | Params$Resource$Partners$Devices$Getsimlockstate
        | BodyResponseCallback<Schema$GetDeviceSimLockStateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetDeviceSimLockStateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetDeviceSimLockStateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GetDeviceSimLockStateResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Devices$Getsimlockstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Devices$Getsimlockstate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/partners/{+partnerId}/devices:getSimLockState'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetDeviceSimLockStateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetDeviceSimLockStateResponse>(
          parameters
        );
      }
    }

    /**
     * Updates reseller metadata associated with the device. Android devices only.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.devices.metadata({
     *     // Required. The ID of the device.
     *     deviceId: '[^/]+',
     *     // Required. The owner of the newly set metadata. Set this to the partner ID.
     *     metadataOwnerId: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deviceMetadata": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entries": {}
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
    metadata(
      params: Params$Resource$Partners$Devices$Metadata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    metadata(
      params?: Params$Resource$Partners$Devices$Metadata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DeviceMetadata>>;
    metadata(
      params: Params$Resource$Partners$Devices$Metadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    metadata(
      params: Params$Resource$Partners$Devices$Metadata,
      options: MethodOptions | BodyResponseCallback<Schema$DeviceMetadata>,
      callback: BodyResponseCallback<Schema$DeviceMetadata>
    ): void;
    metadata(
      params: Params$Resource$Partners$Devices$Metadata,
      callback: BodyResponseCallback<Schema$DeviceMetadata>
    ): void;
    metadata(callback: BodyResponseCallback<Schema$DeviceMetadata>): void;
    metadata(
      paramsOrCallback?:
        | Params$Resource$Partners$Devices$Metadata
        | BodyResponseCallback<Schema$DeviceMetadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeviceMetadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeviceMetadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DeviceMetadata>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Devices$Metadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Devices$Metadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/partners/{+metadataOwnerId}/devices/{+deviceId}/metadata'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['metadataOwnerId', 'deviceId'],
        pathParams: ['deviceId', 'metadataOwnerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DeviceMetadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeviceMetadata>(parameters);
      }
    }

    /**
     * Unclaims a device from a customer and removes it from zero-touch enrollment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.devices.unclaim({
     *     // Required. The ID of the reseller partner.
     *     partnerId: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deviceId": "my_deviceId",
     *       //   "deviceIdentifier": {},
     *       //   "sectionType": "my_sectionType",
     *       //   "vacationModeDays": 0,
     *       //   "vacationModeExpireTime": "my_vacationModeExpireTime"
     *       // }
     *     },
     *   });
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
    unclaim(
      params: Params$Resource$Partners$Devices$Unclaim,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    unclaim(
      params?: Params$Resource$Partners$Devices$Unclaim,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    unclaim(
      params: Params$Resource$Partners$Devices$Unclaim,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unclaim(
      params: Params$Resource$Partners$Devices$Unclaim,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    unclaim(
      params: Params$Resource$Partners$Devices$Unclaim,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    unclaim(callback: BodyResponseCallback<Schema$Empty>): void;
    unclaim(
      paramsOrCallback?:
        | Params$Resource$Partners$Devices$Unclaim
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Devices$Unclaim;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Devices$Unclaim;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/partners/{+partnerId}/devices:unclaim'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.devices.unclaimAsync({
     *     // Required. The reseller partner ID.
     *     partnerId: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "unclaims": []
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
    unclaimAsync(
      params: Params$Resource$Partners$Devices$Unclaimasync,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    unclaimAsync(
      params?: Params$Resource$Partners$Devices$Unclaimasync,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    unclaimAsync(
      params: Params$Resource$Partners$Devices$Unclaimasync,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unclaimAsync(
      params: Params$Resource$Partners$Devices$Unclaimasync,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unclaimAsync(
      params: Params$Resource$Partners$Devices$Unclaimasync,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    unclaimAsync(callback: BodyResponseCallback<Schema$Operation>): void;
    unclaimAsync(
      paramsOrCallback?:
        | Params$Resource$Partners$Devices$Unclaimasync
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
        {}) as Params$Resource$Partners$Devices$Unclaimasync;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Devices$Unclaimasync;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/partners/{+partnerId}/devices:unclaimAsync'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
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
     * Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *     await androiddeviceprovisioning.partners.devices.updateMetadataAsync({
     *       // Required. The reseller partner ID.
     *       partnerId: '[^/]+',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "updates": []
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
    updateMetadataAsync(
      params: Params$Resource$Partners$Devices$Updatemetadataasync,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateMetadataAsync(
      params?: Params$Resource$Partners$Devices$Updatemetadataasync,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    updateMetadataAsync(
      params: Params$Resource$Partners$Devices$Updatemetadataasync,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateMetadataAsync(
      params: Params$Resource$Partners$Devices$Updatemetadataasync,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateMetadataAsync(
      params: Params$Resource$Partners$Devices$Updatemetadataasync,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateMetadataAsync(callback: BodyResponseCallback<Schema$Operation>): void;
    updateMetadataAsync(
      paramsOrCallback?:
        | Params$Resource$Partners$Devices$Updatemetadataasync
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
        {}) as Params$Resource$Partners$Devices$Updatemetadataasync;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Devices$Updatemetadataasync;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/partners/{+partnerId}/devices:updateMetadataAsync'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['partnerId'],
        pathParams: ['partnerId'],
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
  }

  export interface Params$Resource$Partners$Devices$Claim
    extends StandardParameters {
    /**
     * Required. The ID of the reseller partner.
     */
    partnerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClaimDeviceRequest;
  }
  export interface Params$Resource$Partners$Devices$Claimasync
    extends StandardParameters {
    /**
     * Required. The ID of the reseller partner.
     */
    partnerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClaimDevicesRequest;
  }
  export interface Params$Resource$Partners$Devices$Findbyidentifier
    extends StandardParameters {
    /**
     * Required. The ID of the reseller partner.
     */
    partnerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FindDevicesByDeviceIdentifierRequest;
  }
  export interface Params$Resource$Partners$Devices$Findbyowner
    extends StandardParameters {
    /**
     * Required. The ID of the reseller partner.
     */
    partnerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FindDevicesByOwnerRequest;
  }
  export interface Params$Resource$Partners$Devices$Get
    extends StandardParameters {
    /**
     * Required. The device API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Partners$Devices$Getsimlockstate
    extends StandardParameters {
    /**
     * Required. The ID of the partner.
     */
    partnerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetDeviceSimLockStateRequest;
  }
  export interface Params$Resource$Partners$Devices$Metadata
    extends StandardParameters {
    /**
     * Required. The ID of the device.
     */
    deviceId?: string;
    /**
     * Required. The owner of the newly set metadata. Set this to the partner ID.
     */
    metadataOwnerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateDeviceMetadataRequest;
  }
  export interface Params$Resource$Partners$Devices$Unclaim
    extends StandardParameters {
    /**
     * Required. The ID of the reseller partner.
     */
    partnerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnclaimDeviceRequest;
  }
  export interface Params$Resource$Partners$Devices$Unclaimasync
    extends StandardParameters {
    /**
     * Required. The reseller partner ID.
     */
    partnerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnclaimDevicesRequest;
  }
  export interface Params$Resource$Partners$Devices$Updatemetadataasync
    extends StandardParameters {
    /**
     * Required. The reseller partner ID.
     */
    partnerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateDeviceMetadataInBatchRequest;
  }

  export class Resource$Partners$Vendors {
    context: APIRequestContext;
    customers: Resource$Partners$Vendors$Customers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customers = new Resource$Partners$Vendors$Customers(this.context);
    }

    /**
     * Lists the vendors of the partner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.vendors.list({
     *     // The maximum number of results to be returned.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name in the format `partners/[PARTNER_ID]`.
     *     parent: 'partners/my-partner',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0,
     *   //   "vendors": []
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
      params: Params$Resource$Partners$Vendors$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Partners$Vendors$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListVendorsResponse>>;
    list(
      params: Params$Resource$Partners$Vendors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Partners$Vendors$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListVendorsResponse>,
      callback: BodyResponseCallback<Schema$ListVendorsResponse>
    ): void;
    list(
      params: Params$Resource$Partners$Vendors$List,
      callback: BodyResponseCallback<Schema$ListVendorsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVendorsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Partners$Vendors$List
        | BodyResponseCallback<Schema$ListVendorsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVendorsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVendorsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListVendorsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Vendors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Vendors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vendors').replace(
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
        createAPIRequest<Schema$ListVendorsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVendorsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Partners$Vendors$List
    extends StandardParameters {
    /**
     * The maximum number of results to be returned.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * Required. The resource name in the format `partners/[PARTNER_ID]`.
     */
    parent?: string;
  }

  export class Resource$Partners$Vendors$Customers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the customers of the vendor.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/androiddeviceprovisioning.googleapis.com
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
     * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
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
     *   const res = await androiddeviceprovisioning.partners.vendors.customers.list({
     *     // The maximum number of results to be returned.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results returned by the server.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name in the format `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`.
     *     parent: 'partners/my-partner/vendors/my-vendor',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customers": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0
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
      params: Params$Resource$Partners$Vendors$Customers$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Partners$Vendors$Customers$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListVendorCustomersResponse>>;
    list(
      params: Params$Resource$Partners$Vendors$Customers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Partners$Vendors$Customers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVendorCustomersResponse>,
      callback: BodyResponseCallback<Schema$ListVendorCustomersResponse>
    ): void;
    list(
      params: Params$Resource$Partners$Vendors$Customers$List,
      callback: BodyResponseCallback<Schema$ListVendorCustomersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVendorCustomersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Partners$Vendors$Customers$List
        | BodyResponseCallback<Schema$ListVendorCustomersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVendorCustomersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVendorCustomersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListVendorCustomersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Partners$Vendors$Customers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Partners$Vendors$Customers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customers').replace(
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
        createAPIRequest<Schema$ListVendorCustomersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVendorCustomersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Partners$Vendors$Customers$List
    extends StandardParameters {
    /**
     * The maximum number of results to be returned.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * Required. The resource name in the format `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`.
     */
    parent?: string;
  }
}
