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

export namespace firebaseappcheck_v1 {
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
   * Firebase App Check API
   *
   * Firebase App Check works alongside other Firebase services to help protect your backend resources from abuse, such as billing fraud or phishing.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const firebaseappcheck = google.firebaseappcheck('v1');
   * ```
   */
  export class Firebaseappcheck {
    context: APIRequestContext;
    jwks: Resource$Jwks;
    oauthClients: Resource$Oauthclients;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.jwks = new Resource$Jwks(this.context);
      this.oauthClients = new Resource$Oauthclients(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * An app's App Attest configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeAppAttestAttestation and ExchangeAppAttestAssertion, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).
   */
  export interface Schema$GoogleFirebaseAppcheckV1AppAttestConfig {
    /**
     * Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ```
     */
    name?: string | null;
    /**
     * Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
     */
    tokenTtl?: string | null;
  }
  /**
   * Encapsulates an *App Check token*, which are used to access backend services protected by App Check.
   */
  export interface Schema$GoogleFirebaseAppcheckV1AppCheckToken {
    /**
     * The App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and GCP project. This token is used to access Google services protected by App Check. These tokens can also be [verified by your own custom backends](https://firebase.google.com/docs/app-check/custom-resource-backend) using the Firebase Admin SDK or third-party libraries.
     */
    token?: string | null;
    /**
     * The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.
     */
    ttl?: string | null;
  }
  /**
   * Response message for the BatchGetAppAttestConfigs method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse {
    /**
     * AppAttestConfigs retrieved.
     */
    configs?: Schema$GoogleFirebaseAppcheckV1AppAttestConfig[];
  }
  /**
   * Response message for the BatchGetDeviceCheckConfigs method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse {
    /**
     * DeviceCheckConfigs retrieved.
     */
    configs?: Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig[];
  }
  /**
   * Response message for the BatchGetPlayIntegrityConfigs method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse {
    /**
     * PlayIntegrityConfigs retrieved.
     */
    configs?: Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig[];
  }
  /**
   * Response message for the BatchGetRecaptchaEnterpriseConfigs method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse {
    /**
     * RecaptchaEnterpriseConfigs retrieved.
     */
    configs?: Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig[];
  }
  /**
   * Response message for the BatchGetRecaptchaV3Configs method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse {
    /**
     * RecaptchaV3Configs retrieved.
     */
    configs?: Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config[];
  }
  /**
   * Response message for the BatchGetSafetyNetConfigs method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse {
    /**
     * SafetyNetConfigs retrieved.
     */
    configs?: Schema$GoogleFirebaseAppcheckV1SafetyNetConfig[];
  }
  /**
   * Request message for the BatchUpdateResourcePolicies method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesRequest {
    /**
     * Required. The request messages specifying the ResourcePolicy objects to update. A maximum of 100 objects can be updated in a batch.
     */
    requests?: Schema$GoogleFirebaseAppcheckV1UpdateResourcePolicyRequest[];
    /**
     * Optional. A comma-separated list of names of fields in the ResourcePolicy objects to update. Example: `enforcement_mode`. If this field is present, the `update_mask` field in the UpdateResourcePolicyRequest messages must all match this field, or the entire batch fails and no updates will be committed.
     */
    updateMask?: string | null;
  }
  /**
   * Response message for the BatchUpdateResourcePolicies method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse {
    /**
     * ResourcePolicy objects after the updates have been applied.
     */
    resourcePolicies?: Schema$GoogleFirebaseAppcheckV1ResourcePolicy[];
  }
  /**
   * Request message for the BatchUpdateServices method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesRequest {
    /**
     * Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch.
     */
    requests?: Schema$GoogleFirebaseAppcheckV1UpdateServiceRequest[];
    /**
     * Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If the `update_mask` field is set in both this request and any of the UpdateServiceRequest messages, they must match or the entire batch fails and no updates will be committed.
     */
    updateMask?: string | null;
  }
  /**
   * Response message for the BatchUpdateServices method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse {
    /**
     * Service objects after the updates have been applied.
     */
    services?: Schema$GoogleFirebaseAppcheckV1Service[];
  }
  /**
   * A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services.
   */
  export interface Schema$GoogleFirebaseAppcheckV1DebugToken {
    /**
     * Required. A human readable display name used to identify this debug token.
     */
    displayName?: string | null;
    /**
     * Required. The relative resource name of the debug token, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
     */
    name?: string | null;
    /**
     * Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response.
     */
    token?: string | null;
    /**
     * Output only. Timestamp when this debug token was most recently updated.
     */
    updateTime?: string | null;
  }
  /**
   * An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).
   */
  export interface Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig {
    /**
     * Required. The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.
     */
    keyId?: string | null;
    /**
     * Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ```
     */
    name?: string | null;
    /**
     * Required. Input only. The contents of the private key (`.p8`) file associated with the key specified by `key_id`. For security reasons, this field will never be populated in any response.
     */
    privateKey?: string | null;
    /**
     * Output only. Whether the `private_key` field was previously set. Since we will never return the `private_key` field, this field is the only way to find out whether it was previously set.
     */
    privateKeySet?: boolean | null;
    /**
     * Specifies the duration for which App Check tokens exchanged from DeviceCheck tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
     */
    tokenTtl?: string | null;
  }
  /**
   * Request message for the ExchangeAppAttestAssertion method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest {
    /**
     * Required. The artifact returned by a previous call to ExchangeAppAttestAttestation.
     */
    artifact?: string | null;
    /**
     * Required. The CBOR-encoded assertion returned by the client-side App Attest API.
     */
    assertion?: string | null;
    /**
     * Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.
     */
    challenge?: string | null;
    /**
     * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
     */
    limitedUse?: boolean | null;
  }
  /**
   * Request message for the ExchangeAppAttestAttestation method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest {
    /**
     * Required. The App Attest statement returned by the client-side App Attest API. This is a base64url encoded CBOR object in the JSON response.
     */
    attestationStatement?: string | null;
    /**
     * Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge.
     */
    challenge?: string | null;
    /**
     * Required. The key ID generated by App Attest for the client app.
     */
    keyId?: string | null;
    /**
     * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
     */
    limitedUse?: boolean | null;
  }
  /**
   * Response message for the ExchangeAppAttestAttestation method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse {
    /**
     * Encapsulates an App Check token.
     */
    appCheckToken?: Schema$GoogleFirebaseAppcheckV1AppCheckToken;
    /**
     * An artifact that can be used in future calls to ExchangeAppAttestAssertion.
     */
    artifact?: string | null;
  }
  /**
   * Request message for the ExchangeCustomToken method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest {
    /**
     * Required. A custom token signed using your project's Admin SDK service account credentials.
     */
    customToken?: string | null;
    /**
     * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
     */
    limitedUse?: boolean | null;
  }
  /**
   * Request message for the ExchangeDebugToken method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest {
    /**
     * Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken.
     */
    debugToken?: string | null;
    /**
     * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
     */
    limitedUse?: boolean | null;
  }
  /**
   * Request message for the ExchangeDeviceCheckToken method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest {
    /**
     * Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object.
     */
    deviceToken?: string | null;
    /**
     * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
     */
    limitedUse?: boolean | null;
  }
  /**
   * Request message for the ExchangePlayIntegrityToken method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest {
    /**
     * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
     */
    limitedUse?: boolean | null;
    /**
     * Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app.
     */
    playIntegrityToken?: string | null;
  }
  /**
   * Request message for the ExchangeRecaptchaEnterpriseToken method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest {
    /**
     * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
     */
    limitedUse?: boolean | null;
    /**
     * Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages).
     */
    recaptchaEnterpriseToken?: string | null;
  }
  /**
   * Request message for the ExchangeRecaptchaV3Token method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest {
    /**
     * Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`.
     */
    limitedUse?: boolean | null;
    /**
     * Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3).
     */
    recaptchaV3Token?: string | null;
  }
  /**
   * Request message for the ExchangeSafetyNetToken method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest {
    /**
     * Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app.
     */
    safetyNetToken?: string | null;
  }
  /**
   * Request message for the GenerateAppAttestChallenge method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest {}
  /**
   * Response message for the GenerateAppAttestChallenge method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse {
    /**
     * A one-time use challenge for the client to pass to the App Attest API.
     */
    challenge?: string | null;
    /**
     * The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.
     */
    ttl?: string | null;
  }
  /**
   * Request message for the GeneratePlayIntegrityChallenge method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest {}
  /**
   * Response message for the GeneratePlayIntegrityChallenge method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse {
    /**
     * A one-time use [challenge](https://developer.android.com/google/play/integrity/verdict#protect-against-replay-attacks) for the client to pass to the Play Integrity API.
     */
    challenge?: string | null;
    /**
     * The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration.
     */
    ttl?: string | null;
  }
  /**
   * Response message for the ListDebugTokens method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse {
    /**
     * The DebugTokens retrieved.
     */
    debugTokens?: Schema$GoogleFirebaseAppcheckV1DebugToken[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListResourcePolicies method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse {
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListResourcePolicies to find the next group of ResourcePolicy objects. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string | null;
    /**
     * The ResourcePolicy objects retrieved.
     */
    resourcePolicies?: Schema$GoogleFirebaseAppcheckV1ResourcePolicy[];
  }
  /**
   * Response message for the ListServices method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ListServicesResponse {
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string | null;
    /**
     * The Services retrieved.
     */
    services?: Schema$GoogleFirebaseAppcheckV1Service[];
  }
  /**
   * An app's Play Integrity configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangePlayIntegrityToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by the Play Integrity API; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create).
   */
  export interface Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig {
    /**
     * Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ```
     */
    name?: string | null;
    /**
     * Specifies the duration for which App Check tokens exchanged from Play Integrity tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
     */
    tokenTtl?: string | null;
  }
  /**
   * A JWK as specified by [section 4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4) and [section 6.3.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1).
   */
  export interface Schema$GoogleFirebaseAppcheckV1PublicJwk {
    /**
     * See [section 4.4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.4).
     */
    alg?: string | null;
    /**
     * See [section 6.3.1.2 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.2).
     */
    e?: string | null;
    /**
     * See [section 4.5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.5).
     */
    kid?: string | null;
    /**
     * See [section 4.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.1).
     */
    kty?: string | null;
    /**
     * See [section 6.3.1.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.1).
     */
    n?: string | null;
    /**
     * See [section 4.2 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.2).
     */
    use?: string | null;
  }
  /**
   * The currently active set of public keys that can be used to verify App Check tokens. This object is a JWK set as specified by [section 5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). For security, the response **must not** be cached for longer than six hours.
   */
  export interface Schema$GoogleFirebaseAppcheckV1PublicJwkSet {
    /**
     * The set of public keys. See [section 5.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5).
     */
    keys?: Schema$GoogleFirebaseAppcheckV1PublicJwk[];
  }
  /**
   * An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
   */
  export interface Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig {
    /**
     * Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ```
     */
    name?: string | null;
    /**
     * The score-based site key [created in reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise/docs/create-key#creating_a_site_key) used to [invoke reCAPTCHA and generate the reCAPTCHA tokens](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages) for your application. Important: This is *not* the `site_secret` (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.
     */
    siteKey?: string | null;
    /**
     * Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
     */
    tokenTtl?: string | null;
  }
  /**
   * An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
   */
  export interface Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config {
    /**
     * Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ```
     */
    name?: string | null;
    /**
     * Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response.
     */
    siteSecret?: string | null;
    /**
     * Output only. Whether the `site_secret` field was previously set. Since we will never return the `site_secret` field, this field is the only way to find out whether it was previously set.
     */
    siteSecretSet?: boolean | null;
    /**
     * Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive.
     */
    tokenTtl?: string | null;
  }
  /**
   * App Check enforcement policy for a specific resource of a Google service supported by App Check. Note that this policy will override the service-level configuration.
   */
  export interface Schema$GoogleFirebaseAppcheckV1ResourcePolicy {
    /**
     * Required. The App Check enforcement mode for this resource. This will override the EnforcementMode setting on the service.
     */
    enforcementMode?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232.
     */
    etag?: string | null;
    /**
     * Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/{project_number\}/services/{service_id\}/resourcePolicies/{resource_policy_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID.
     */
    name?: string | null;
    /**
     * Required. Service specific name of the resource object to which this policy applies, in the format: * **iOS OAuth clients** (Google Identity for iOS): `//oauth2.googleapis.com/projects/{project_number\}/oauthClients/{oauth_client_id\}` Note that the resource must belong to the service specified in the `name` and be from the same project as this policy, but the resource is allowed to be missing at the time of creation of this policy; in that case, we make a best-effort attempt at respecting this policy, but it may not have any effect until the resource is fully created.
     */
    targetResource?: string | null;
    /**
     * Output only. Timestamp when this resource policy configuration object was most recently updated.
     */
    updateTime?: string | null;
  }
  /**
   * An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.androidApps.sha/create).
   */
  export interface Schema$GoogleFirebaseAppcheckV1SafetyNetConfig {
    /**
     * Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ```
     */
    name?: string | null;
    /**
     * Specifies the duration for which App Check tokens exchanged from SafetyNet tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
     */
    tokenTtl?: string | null;
  }
  /**
   * The enforcement configuration for a Firebase service supported by App Check.
   */
  export interface Schema$GoogleFirebaseAppcheckV1Service {
    /**
     * Required. The App Check enforcement mode for this service.
     */
    enforcementMode?: string | null;
    /**
     * Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS)
     */
    name?: string | null;
  }
  /**
   * Request message for the UpdateResourcePolicy method as well as an individual update message for the BatchUpdateResourcePolicies method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1UpdateResourcePolicyRequest {
    /**
     * Required. The ResourcePolicy to update. The ResourcePolicy's `name` field is used to identify the ResourcePolicy to be updated, in the format: ``` projects/{project_number\}/services/{service_id\}/resourcePolicies/{resource_policy_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     */
    resourcePolicy?: Schema$GoogleFirebaseAppcheckV1ResourcePolicy;
    /**
     * Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`.
     */
    updateMask?: string | null;
  }
  /**
   * Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
   */
  export interface Schema$GoogleFirebaseAppcheckV1UpdateServiceRequest {
    /**
     * Required. The Service to update. The Service's `name` field is used to identify the Service to be updated, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS)
     */
    service?: Schema$GoogleFirebaseAppcheckV1Service;
    /**
     * Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.
     */
    updateMask?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}

  export class Resource$Jwks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a public JWK set as specified by [RFC 7517](https://tools.ietf.org/html/rfc7517) that can be used to verify App Check tokens. Exactly one of the public keys in the returned set will successfully validate any App Check token that is currently valid.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.jwks.get({
     *     // Required. The relative resource name to the public JWK set. Must always be exactly the string `jwks`.
     *     name: 'jwks',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "keys": []
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
      params: Params$Resource$Jwks$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Jwks$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>
    >;
    get(
      params: Params$Resource$Jwks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Jwks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>
    ): void;
    get(
      params: Params$Resource$Jwks$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Jwks$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jwks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jwks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1PublicJwkSet>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Jwks$Get extends StandardParameters {
    /**
     * Required. The relative resource name to the public JWK set. Must always be exactly the string `jwks`.
     */
    name?: string;
  }

  export class Resource$Oauthclients {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.oauthClients.exchangeAppAttestAssertion({
     *     // Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'oauthClients/my-oauthClient',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "artifact": "my_artifact",
     *       //   "assertion": "my_assertion",
     *       //   "challenge": "my_challenge",
     *       //   "limitedUse": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token",
     *   //   "ttl": "my_ttl"
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
    exchangeAppAttestAssertion(
      params: Params$Resource$Oauthclients$Exchangeappattestassertion,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeAppAttestAssertion(
      params?: Params$Resource$Oauthclients$Exchangeappattestassertion,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    >;
    exchangeAppAttestAssertion(
      params: Params$Resource$Oauthclients$Exchangeappattestassertion,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeAppAttestAssertion(
      params: Params$Resource$Oauthclients$Exchangeappattestassertion,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeAppAttestAssertion(
      params: Params$Resource$Oauthclients$Exchangeappattestassertion,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeAppAttestAssertion(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeAppAttestAssertion(
      paramsOrCallback?:
        | Params$Resource$Oauthclients$Exchangeappattestassertion
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauthclients$Exchangeappattestassertion;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauthclients$Exchangeappattestassertion;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangeAppAttestAssertion').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters
        );
      }
    }

    /**
     * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.oauthClients.exchangeAppAttestAttestation({
     *     // Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'oauthClients/my-oauthClient',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestationStatement": "my_attestationStatement",
     *       //   "challenge": "my_challenge",
     *       //   "keyId": "my_keyId",
     *       //   "limitedUse": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appCheckToken": {},
     *   //   "artifact": "my_artifact"
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
    exchangeAppAttestAttestation(
      params: Params$Resource$Oauthclients$Exchangeappattestattestation,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeAppAttestAttestation(
      params?: Params$Resource$Oauthclients$Exchangeappattestattestation,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
    >;
    exchangeAppAttestAttestation(
      params: Params$Resource$Oauthclients$Exchangeappattestattestation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeAppAttestAttestation(
      params: Params$Resource$Oauthclients$Exchangeappattestattestation,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
    ): void;
    exchangeAppAttestAttestation(
      params: Params$Resource$Oauthclients$Exchangeappattestattestation,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
    ): void;
    exchangeAppAttestAttestation(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
    ): void;
    exchangeAppAttestAttestation(
      paramsOrCallback?:
        | Params$Resource$Oauthclients$Exchangeappattestattestation
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauthclients$Exchangeappattestattestation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Oauthclients$Exchangeappattestattestation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangeAppAttestAttestation').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>(
          parameters
        );
      }
    }

    /**
     * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.oauthClients.exchangeDebugToken({
     *     // Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'oauthClients/my-oauthClient',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "debugToken": "my_debugToken",
     *       //   "limitedUse": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token",
     *   //   "ttl": "my_ttl"
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
    exchangeDebugToken(
      params: Params$Resource$Oauthclients$Exchangedebugtoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeDebugToken(
      params?: Params$Resource$Oauthclients$Exchangedebugtoken,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    >;
    exchangeDebugToken(
      params: Params$Resource$Oauthclients$Exchangedebugtoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeDebugToken(
      params: Params$Resource$Oauthclients$Exchangedebugtoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeDebugToken(
      params: Params$Resource$Oauthclients$Exchangedebugtoken,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeDebugToken(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeDebugToken(
      paramsOrCallback?:
        | Params$Resource$Oauthclients$Exchangedebugtoken
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauthclients$Exchangedebugtoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauthclients$Exchangedebugtoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangeDebugToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters
        );
      }
    }

    /**
     * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.oauthClients.generateAppAttestChallenge({
     *     // Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'oauthClients/my-oauthClient',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "challenge": "my_challenge",
     *   //   "ttl": "my_ttl"
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
    generateAppAttestChallenge(
      params: Params$Resource$Oauthclients$Generateappattestchallenge,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateAppAttestChallenge(
      params?: Params$Resource$Oauthclients$Generateappattestchallenge,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
    >;
    generateAppAttestChallenge(
      params: Params$Resource$Oauthclients$Generateappattestchallenge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateAppAttestChallenge(
      params: Params$Resource$Oauthclients$Generateappattestchallenge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
    ): void;
    generateAppAttestChallenge(
      params: Params$Resource$Oauthclients$Generateappattestchallenge,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
    ): void;
    generateAppAttestChallenge(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
    ): void;
    generateAppAttestChallenge(
      paramsOrCallback?:
        | Params$Resource$Oauthclients$Generateappattestchallenge
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Oauthclients$Generateappattestchallenge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Oauthclients$Generateappattestchallenge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:generateAppAttestChallenge').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Oauthclients$Exchangeappattestassertion
    extends StandardParameters {
    /**
     * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest;
  }
  export interface Params$Resource$Oauthclients$Exchangeappattestattestation
    extends StandardParameters {
    /**
     * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest;
  }
  export interface Params$Resource$Oauthclients$Exchangedebugtoken
    extends StandardParameters {
    /**
     * Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest;
  }
  export interface Params$Resource$Oauthclients$Generateappattestchallenge
    extends StandardParameters {
    /**
     * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    apps: Resource$Projects$Apps;
    services: Resource$Projects$Services;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.apps = new Resource$Projects$Apps(this.context);
      this.services = new Resource$Projects$Services(this.context);
    }
  }

  export class Resource$Projects$Apps {
    context: APIRequestContext;
    appAttestConfig: Resource$Projects$Apps$Appattestconfig;
    debugTokens: Resource$Projects$Apps$Debugtokens;
    deviceCheckConfig: Resource$Projects$Apps$Devicecheckconfig;
    playIntegrityConfig: Resource$Projects$Apps$Playintegrityconfig;
    recaptchaEnterpriseConfig: Resource$Projects$Apps$Recaptchaenterpriseconfig;
    recaptchaV3Config: Resource$Projects$Apps$Recaptchav3config;
    safetyNetConfig: Resource$Projects$Apps$Safetynetconfig;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.appAttestConfig = new Resource$Projects$Apps$Appattestconfig(
        this.context
      );
      this.debugTokens = new Resource$Projects$Apps$Debugtokens(this.context);
      this.deviceCheckConfig = new Resource$Projects$Apps$Devicecheckconfig(
        this.context
      );
      this.playIntegrityConfig = new Resource$Projects$Apps$Playintegrityconfig(
        this.context
      );
      this.recaptchaEnterpriseConfig =
        new Resource$Projects$Apps$Recaptchaenterpriseconfig(this.context);
      this.recaptchaV3Config = new Resource$Projects$Apps$Recaptchav3config(
        this.context
      );
      this.safetyNetConfig = new Resource$Projects$Apps$Safetynetconfig(
        this.context
      );
    }

    /**
     * Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.exchangeAppAttestAssertion({
     *     // Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'projects/my-project/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "artifact": "my_artifact",
     *       //   "assertion": "my_assertion",
     *       //   "challenge": "my_challenge",
     *       //   "limitedUse": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token",
     *   //   "ttl": "my_ttl"
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
    exchangeAppAttestAssertion(
      params: Params$Resource$Projects$Apps$Exchangeappattestassertion,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeAppAttestAssertion(
      params?: Params$Resource$Projects$Apps$Exchangeappattestassertion,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    >;
    exchangeAppAttestAssertion(
      params: Params$Resource$Projects$Apps$Exchangeappattestassertion,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeAppAttestAssertion(
      params: Params$Resource$Projects$Apps$Exchangeappattestassertion,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeAppAttestAssertion(
      params: Params$Resource$Projects$Apps$Exchangeappattestassertion,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeAppAttestAssertion(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeAppAttestAssertion(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Exchangeappattestassertion
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Exchangeappattestassertion;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Exchangeappattestassertion;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangeAppAttestAssertion').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters
        );
      }
    }

    /**
     * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.exchangeAppAttestAttestation(
     *     {
     *       // Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *       app: 'projects/my-project/apps/my-app',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "attestationStatement": "my_attestationStatement",
     *         //   "challenge": "my_challenge",
     *         //   "keyId": "my_keyId",
     *         //   "limitedUse": false
     *         // }
     *       },
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appCheckToken": {},
     *   //   "artifact": "my_artifact"
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
    exchangeAppAttestAttestation(
      params: Params$Resource$Projects$Apps$Exchangeappattestattestation,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeAppAttestAttestation(
      params?: Params$Resource$Projects$Apps$Exchangeappattestattestation,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
    >;
    exchangeAppAttestAttestation(
      params: Params$Resource$Projects$Apps$Exchangeappattestattestation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeAppAttestAttestation(
      params: Params$Resource$Projects$Apps$Exchangeappattestattestation,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
    ): void;
    exchangeAppAttestAttestation(
      params: Params$Resource$Projects$Apps$Exchangeappattestattestation,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
    ): void;
    exchangeAppAttestAttestation(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
    ): void;
    exchangeAppAttestAttestation(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Exchangeappattestattestation
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Exchangeappattestattestation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Apps$Exchangeappattestattestation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangeAppAttestAttestation').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>(
          parameters
        );
      }
    }

    /**
     * Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.exchangeCustomToken({
     *     // Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'projects/my-project/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customToken": "my_customToken",
     *       //   "limitedUse": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token",
     *   //   "ttl": "my_ttl"
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
    exchangeCustomToken(
      params: Params$Resource$Projects$Apps$Exchangecustomtoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeCustomToken(
      params?: Params$Resource$Projects$Apps$Exchangecustomtoken,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    >;
    exchangeCustomToken(
      params: Params$Resource$Projects$Apps$Exchangecustomtoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeCustomToken(
      params: Params$Resource$Projects$Apps$Exchangecustomtoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeCustomToken(
      params: Params$Resource$Projects$Apps$Exchangecustomtoken,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeCustomToken(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeCustomToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Exchangecustomtoken
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Exchangecustomtoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Exchangecustomtoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangeCustomToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters
        );
      }
    }

    /**
     * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.exchangeDebugToken({
     *     // Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'projects/my-project/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "debugToken": "my_debugToken",
     *       //   "limitedUse": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token",
     *   //   "ttl": "my_ttl"
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
    exchangeDebugToken(
      params: Params$Resource$Projects$Apps$Exchangedebugtoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeDebugToken(
      params?: Params$Resource$Projects$Apps$Exchangedebugtoken,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    >;
    exchangeDebugToken(
      params: Params$Resource$Projects$Apps$Exchangedebugtoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeDebugToken(
      params: Params$Resource$Projects$Apps$Exchangedebugtoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeDebugToken(
      params: Params$Resource$Projects$Apps$Exchangedebugtoken,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeDebugToken(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeDebugToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Exchangedebugtoken
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Exchangedebugtoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Exchangedebugtoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangeDebugToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters
        );
      }
    }

    /**
     * Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.exchangeDeviceCheckToken({
     *     // Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'projects/my-project/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deviceToken": "my_deviceToken",
     *       //   "limitedUse": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token",
     *   //   "ttl": "my_ttl"
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
    exchangeDeviceCheckToken(
      params: Params$Resource$Projects$Apps$Exchangedevicechecktoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeDeviceCheckToken(
      params?: Params$Resource$Projects$Apps$Exchangedevicechecktoken,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    >;
    exchangeDeviceCheckToken(
      params: Params$Resource$Projects$Apps$Exchangedevicechecktoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeDeviceCheckToken(
      params: Params$Resource$Projects$Apps$Exchangedevicechecktoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeDeviceCheckToken(
      params: Params$Resource$Projects$Apps$Exchangedevicechecktoken,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeDeviceCheckToken(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeDeviceCheckToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Exchangedevicechecktoken
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Exchangedevicechecktoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Exchangedevicechecktoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangeDeviceCheckToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters
        );
      }
    }

    /**
     * Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.exchangePlayIntegrityToken({
     *     // Required. The relative resource name of the Android app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'projects/my-project/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "limitedUse": false,
     *       //   "playIntegrityToken": "my_playIntegrityToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token",
     *   //   "ttl": "my_ttl"
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
    exchangePlayIntegrityToken(
      params: Params$Resource$Projects$Apps$Exchangeplayintegritytoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangePlayIntegrityToken(
      params?: Params$Resource$Projects$Apps$Exchangeplayintegritytoken,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    >;
    exchangePlayIntegrityToken(
      params: Params$Resource$Projects$Apps$Exchangeplayintegritytoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangePlayIntegrityToken(
      params: Params$Resource$Projects$Apps$Exchangeplayintegritytoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangePlayIntegrityToken(
      params: Params$Resource$Projects$Apps$Exchangeplayintegritytoken,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangePlayIntegrityToken(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangePlayIntegrityToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Exchangeplayintegritytoken
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Exchangeplayintegritytoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Exchangeplayintegritytoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangePlayIntegrityToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters
        );
      }
    }

    /**
     * Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await firebaseappcheck.projects.apps.exchangeRecaptchaEnterpriseToken({
     *       // Required. The relative resource name of the web app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *       app: 'projects/my-project/apps/my-app',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "limitedUse": false,
     *         //   "recaptchaEnterpriseToken": "my_recaptchaEnterpriseToken"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token",
     *   //   "ttl": "my_ttl"
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
    exchangeRecaptchaEnterpriseToken(
      params: Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeRecaptchaEnterpriseToken(
      params?: Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    >;
    exchangeRecaptchaEnterpriseToken(
      params: Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeRecaptchaEnterpriseToken(
      params: Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeRecaptchaEnterpriseToken(
      params: Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeRecaptchaEnterpriseToken(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeRecaptchaEnterpriseToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+app}:exchangeRecaptchaEnterpriseToken'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters
        );
      }
    }

    /**
     * Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.exchangeRecaptchaV3Token({
     *     // Required. The relative resource name of the web app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'projects/my-project/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "limitedUse": false,
     *       //   "recaptchaV3Token": "my_recaptchaV3Token"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token",
     *   //   "ttl": "my_ttl"
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
    exchangeRecaptchaV3Token(
      params: Params$Resource$Projects$Apps$Exchangerecaptchav3token,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeRecaptchaV3Token(
      params?: Params$Resource$Projects$Apps$Exchangerecaptchav3token,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    >;
    exchangeRecaptchaV3Token(
      params: Params$Resource$Projects$Apps$Exchangerecaptchav3token,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeRecaptchaV3Token(
      params: Params$Resource$Projects$Apps$Exchangerecaptchav3token,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeRecaptchaV3Token(
      params: Params$Resource$Projects$Apps$Exchangerecaptchav3token,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeRecaptchaV3Token(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeRecaptchaV3Token(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Exchangerecaptchav3token
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Exchangerecaptchav3token;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Exchangerecaptchav3token;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangeRecaptchaV3Token').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters
        );
      }
    }

    /**
     * Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.exchangeSafetyNetToken({
     *     // Required. The relative resource name of the Android app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'projects/my-project/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "safetyNetToken": "my_safetyNetToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "token": "my_token",
     *   //   "ttl": "my_ttl"
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
    exchangeSafetyNetToken(
      params: Params$Resource$Projects$Apps$Exchangesafetynettoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeSafetyNetToken(
      params?: Params$Resource$Projects$Apps$Exchangesafetynettoken,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    >;
    exchangeSafetyNetToken(
      params: Params$Resource$Projects$Apps$Exchangesafetynettoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeSafetyNetToken(
      params: Params$Resource$Projects$Apps$Exchangesafetynettoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeSafetyNetToken(
      params: Params$Resource$Projects$Apps$Exchangesafetynettoken,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeSafetyNetToken(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
    ): void;
    exchangeSafetyNetToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Exchangesafetynettoken
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppCheckToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Exchangesafetynettoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Exchangesafetynettoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:exchangeSafetyNetToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppCheckToken>(
          parameters
        );
      }
    }

    /**
     * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.generateAppAttestChallenge({
     *     // Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *     app: 'projects/my-project/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "challenge": "my_challenge",
     *   //   "ttl": "my_ttl"
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
    generateAppAttestChallenge(
      params: Params$Resource$Projects$Apps$Generateappattestchallenge,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateAppAttestChallenge(
      params?: Params$Resource$Projects$Apps$Generateappattestchallenge,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
    >;
    generateAppAttestChallenge(
      params: Params$Resource$Projects$Apps$Generateappattestchallenge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateAppAttestChallenge(
      params: Params$Resource$Projects$Apps$Generateappattestchallenge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
    ): void;
    generateAppAttestChallenge(
      params: Params$Resource$Projects$Apps$Generateappattestchallenge,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
    ): void;
    generateAppAttestChallenge(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
    ): void;
    generateAppAttestChallenge(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Generateappattestchallenge
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Generateappattestchallenge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Generateappattestchallenge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+app}:generateAppAttestChallenge').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>(
          parameters
        );
      }
    }

    /**
     * Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await firebaseappcheck.projects.apps.generatePlayIntegrityChallenge({
     *       // Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     *       app: 'projects/my-project/apps/my-app',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "challenge": "my_challenge",
     *   //   "ttl": "my_ttl"
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
    generatePlayIntegrityChallenge(
      params: Params$Resource$Projects$Apps$Generateplayintegritychallenge,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generatePlayIntegrityChallenge(
      params?: Params$Resource$Projects$Apps$Generateplayintegritychallenge,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>
    >;
    generatePlayIntegrityChallenge(
      params: Params$Resource$Projects$Apps$Generateplayintegritychallenge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generatePlayIntegrityChallenge(
      params: Params$Resource$Projects$Apps$Generateplayintegritychallenge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>
    ): void;
    generatePlayIntegrityChallenge(
      params: Params$Resource$Projects$Apps$Generateplayintegritychallenge,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>
    ): void;
    generatePlayIntegrityChallenge(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>
    ): void;
    generatePlayIntegrityChallenge(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Generateplayintegritychallenge
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Generateplayintegritychallenge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Apps$Generateplayintegritychallenge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+app}:generatePlayIntegrityChallenge'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['app'],
        pathParams: ['app'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Exchangeappattestassertion
    extends StandardParameters {
    /**
     * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest;
  }
  export interface Params$Resource$Projects$Apps$Exchangeappattestattestation
    extends StandardParameters {
    /**
     * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest;
  }
  export interface Params$Resource$Projects$Apps$Exchangecustomtoken
    extends StandardParameters {
    /**
     * Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest;
  }
  export interface Params$Resource$Projects$Apps$Exchangedebugtoken
    extends StandardParameters {
    /**
     * Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest;
  }
  export interface Params$Resource$Projects$Apps$Exchangedevicechecktoken
    extends StandardParameters {
    /**
     * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest;
  }
  export interface Params$Resource$Projects$Apps$Exchangeplayintegritytoken
    extends StandardParameters {
    /**
     * Required. The relative resource name of the Android app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest;
  }
  export interface Params$Resource$Projects$Apps$Exchangerecaptchaenterprisetoken
    extends StandardParameters {
    /**
     * Required. The relative resource name of the web app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest;
  }
  export interface Params$Resource$Projects$Apps$Exchangerecaptchav3token
    extends StandardParameters {
    /**
     * Required. The relative resource name of the web app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest;
  }
  export interface Params$Resource$Projects$Apps$Exchangesafetynettoken
    extends StandardParameters {
    /**
     * Required. The relative resource name of the Android app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest;
  }
  export interface Params$Resource$Projects$Apps$Generateappattestchallenge
    extends StandardParameters {
    /**
     * Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest;
  }
  export interface Params$Resource$Projects$Apps$Generateplayintegritychallenge
    extends StandardParameters {
    /**
     * Required. The relative resource name of the app, in the format: ``` projects/{project_number\}/apps/{app_id\} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
     */
    app?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest;
  }

  export class Resource$Projects$Apps$Appattestconfig {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Atomically gets the AppAttestConfigs for the specified list of apps.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.appAttestConfig.batchGet({
     *     // Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch.
     *     names: 'placeholder-value',
     *     // Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": []
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
    batchGet(
      params: Params$Resource$Projects$Apps$Appattestconfig$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Projects$Apps$Appattestconfig$Batchget,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>
    >;
    batchGet(
      params: Params$Resource$Projects$Apps$Appattestconfig$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Appattestconfig$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Appattestconfig$Batchget,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Appattestconfig$Batchget
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Appattestconfig$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Appattestconfig$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/apps/-/appAttestConfig:batchGet'
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the AppAttestConfig for the specified app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.appAttestConfig.get({
     *     // Required. The relative resource name of the AppAttestConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ```
     *     name: 'projects/my-project/apps/my-app/appAttestConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Appattestconfig$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Appattestconfig$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
    >;
    get(
      params: Params$Resource$Projects$Apps$Appattestconfig$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Appattestconfig$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Appattestconfig$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Appattestconfig$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Appattestconfig$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Appattestconfig$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>(
          parameters
        );
      }
    }

    /**
     * Updates the AppAttestConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange AppAttest tokens for App Check tokens.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.appAttestConfig.patch({
     *     // Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ```
     *     name: 'projects/my-project/apps/my-app/appAttestConfig',
     *     // Required. A comma-separated list of names of fields in the AppAttestConfig to update. Example: `token_ttl`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "tokenTtl": "my_tokenTtl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Appattestconfig$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Apps$Appattestconfig$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
    >;
    patch(
      params: Params$Resource$Projects$Apps$Appattestconfig$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Appattestconfig$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Appattestconfig$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Appattestconfig$Patch
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Appattestconfig$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Appattestconfig$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1AppAttestConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Appattestconfig$Batchget
    extends StandardParameters {
    /**
     * Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch.
     */
    names?: string[];
    /**
     * Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Apps$Appattestconfig$Get
    extends StandardParameters {
    /**
     * Required. The relative resource name of the AppAttestConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ```
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Appattestconfig$Patch
    extends StandardParameters {
    /**
     * Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/appAttestConfig ```
     */
    name?: string;
    /**
     * Required. A comma-separated list of names of fields in the AppAttestConfig to update. Example: `token_ttl`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1AppAttestConfig;
  }

  export class Resource$Projects$Apps$Debugtokens {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.debugTokens.create({
     *     // Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number\}/apps/{app_id\} ```
     *     parent: 'projects/my-project/apps/my-app',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "token": "my_token",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "token": "my_token",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Apps$Debugtokens$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Apps$Debugtokens$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1DebugToken>
    >;
    create(
      params: Params$Resource$Projects$Apps$Debugtokens$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Apps$Debugtokens$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
    ): void;
    create(
      params: Params$Resource$Projects$Apps$Debugtokens$Create,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Debugtokens$Create
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1DebugToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Debugtokens$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Debugtokens$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/debugTokens').replace(
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1DebugToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1DebugToken>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.debugTokens.delete({
     *     // Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
     *     name: 'projects/my-project/apps/my-app/debugTokens/my-debugToken',
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
      params: Params$Resource$Projects$Apps$Debugtokens$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Apps$Debugtokens$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Apps$Debugtokens$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Apps$Debugtokens$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Apps$Debugtokens$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Debugtokens$Delete
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
        {}) as Params$Resource$Projects$Apps$Debugtokens$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Debugtokens$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the specified DebugToken. For security reasons, the `token` field is never populated in the response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.debugTokens.get({
     *     // Required. The relative resource name of the debug token, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
     *     name: 'projects/my-project/apps/my-app/debugTokens/my-debugToken',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "token": "my_token",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Apps$Debugtokens$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Debugtokens$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1DebugToken>
    >;
    get(
      params: Params$Resource$Projects$Apps$Debugtokens$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Debugtokens$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Debugtokens$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Debugtokens$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1DebugToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Debugtokens$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Debugtokens$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1DebugToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1DebugToken>(
          parameters
        );
      }
    }

    /**
     * Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.debugTokens.list({
     *     // The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     *     pageSize: 'placeholder-value',
     *     // Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined.
     *     pageToken: 'placeholder-value',
     *     // Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number\}/apps/{app_id\} ```
     *     parent: 'projects/my-project/apps/my-app',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "debugTokens": [],
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
      params: Params$Resource$Projects$Apps$Debugtokens$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Apps$Debugtokens$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>
    >;
    list(
      params: Params$Resource$Projects$Apps$Debugtokens$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Debugtokens$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Apps$Debugtokens$List,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Debugtokens$List
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Debugtokens$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Debugtokens$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/debugTokens').replace(
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1ListDebugTokensResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified DebugToken. For security reasons, the `token` field cannot be updated, nor will it be populated in the response, but you can revoke the debug token using DeleteDebugToken.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.debugTokens.patch({
     *     // Required. The relative resource name of the debug token, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
     *     name: 'projects/my-project/apps/my-app/debugTokens/my-debugToken',
     *     // Required. A comma-separated list of names of fields in the DebugToken to update. Example: `display_name`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "token": "my_token",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "token": "my_token",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Apps$Debugtokens$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Apps$Debugtokens$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1DebugToken>
    >;
    patch(
      params: Params$Resource$Projects$Apps$Debugtokens$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Debugtokens$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Debugtokens$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Debugtokens$Patch
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DebugToken>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1DebugToken>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Debugtokens$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Debugtokens$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1DebugToken>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1DebugToken>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Debugtokens$Create
    extends StandardParameters {
    /**
     * Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number\}/apps/{app_id\} ```
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1DebugToken;
  }
  export interface Params$Resource$Projects$Apps$Debugtokens$Delete
    extends StandardParameters {
    /**
     * Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Debugtokens$Get
    extends StandardParameters {
    /**
     * Required. The relative resource name of the debug token, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Debugtokens$List
    extends StandardParameters {
    /**
     * The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined.
     */
    pageToken?: string;
    /**
     * Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number\}/apps/{app_id\} ```
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Apps$Debugtokens$Patch
    extends StandardParameters {
    /**
     * Required. The relative resource name of the debug token, in the format: ``` projects/{project_number\}/apps/{app_id\}/debugTokens/{debug_token_id\} ```
     */
    name?: string;
    /**
     * Required. A comma-separated list of names of fields in the DebugToken to update. Example: `display_name`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1DebugToken;
  }

  export class Resource$Projects$Apps$Devicecheckconfig {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.deviceCheckConfig.batchGet({
     *     // Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch.
     *     names: 'placeholder-value',
     *     // Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": []
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
    batchGet(
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Projects$Apps$Devicecheckconfig$Batchget,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>
    >;
    batchGet(
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Batchget,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Devicecheckconfig$Batchget
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Devicecheckconfig$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Devicecheckconfig$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/apps/-/deviceCheckConfig:batchGet'
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the DeviceCheckConfig for the specified app. For security reasons, the `private_key` field is never populated in the response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.deviceCheckConfig.get({
     *     // Required. The relative resource name of the DeviceCheckConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ```
     *     name: 'projects/my-project/apps/my-app/deviceCheckConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "keyId": "my_keyId",
     *   //   "name": "my_name",
     *   //   "privateKey": "my_privateKey",
     *   //   "privateKeySet": false,
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Devicecheckconfig$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
    >;
    get(
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Devicecheckconfig$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Devicecheckconfig$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Devicecheckconfig$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>(
          parameters
        );
      }
    }

    /**
     * Updates the DeviceCheckConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange DeviceCheck tokens for App Check tokens. For security reasons, the `private_key` field is never populated in the response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.deviceCheckConfig.patch({
     *     // Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ```
     *     name: 'projects/my-project/apps/my-app/deviceCheckConfig',
     *     // Required. A comma-separated list of names of fields in the DeviceCheckConfig to update. Example: `key_id,private_key`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "keyId": "my_keyId",
     *       //   "name": "my_name",
     *       //   "privateKey": "my_privateKey",
     *       //   "privateKeySet": false,
     *       //   "tokenTtl": "my_tokenTtl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "keyId": "my_keyId",
     *   //   "name": "my_name",
     *   //   "privateKey": "my_privateKey",
     *   //   "privateKeySet": false,
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Apps$Devicecheckconfig$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
    >;
    patch(
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Devicecheckconfig$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Devicecheckconfig$Patch
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Devicecheckconfig$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Devicecheckconfig$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Devicecheckconfig$Batchget
    extends StandardParameters {
    /**
     * Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch.
     */
    names?: string[];
    /**
     * Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Apps$Devicecheckconfig$Get
    extends StandardParameters {
    /**
     * Required. The relative resource name of the DeviceCheckConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ```
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Devicecheckconfig$Patch
    extends StandardParameters {
    /**
     * Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/deviceCheckConfig ```
     */
    name?: string;
    /**
     * Required. A comma-separated list of names of fields in the DeviceCheckConfig to update. Example: `key_id,private_key`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1DeviceCheckConfig;
  }

  export class Resource$Projects$Apps$Playintegrityconfig {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Atomically gets the PlayIntegrityConfigs for the specified list of apps.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.playIntegrityConfig.batchGet(
     *     {
     *       // Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch.
     *       names: 'placeholder-value',
     *       // Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     *       parent: 'projects/my-project',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": []
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
    batchGet(
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Projects$Apps$Playintegrityconfig$Batchget,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>
    >;
    batchGet(
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Batchget,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Playintegrityconfig$Batchget
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Playintegrityconfig$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Apps$Playintegrityconfig$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/apps/-/playIntegrityConfig:batchGet'
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the PlayIntegrityConfig for the specified app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.playIntegrityConfig.get({
     *     // Required. The relative resource name of the PlayIntegrityConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ```
     *     name: 'projects/my-project/apps/my-app/playIntegrityConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Playintegrityconfig$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
    >;
    get(
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Playintegrityconfig$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Playintegrityconfig$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Playintegrityconfig$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>(
          parameters
        );
      }
    }

    /**
     * Updates the PlayIntegrityConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange Play Integrity tokens for App Check tokens.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.playIntegrityConfig.patch({
     *     // Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ```
     *     name: 'projects/my-project/apps/my-app/playIntegrityConfig',
     *     // Required. A comma-separated list of names of fields in the PlayIntegrityConfig to update. Example: `token_ttl`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "tokenTtl": "my_tokenTtl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Apps$Playintegrityconfig$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
    >;
    patch(
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Playintegrityconfig$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Playintegrityconfig$Patch
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Playintegrityconfig$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Playintegrityconfig$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Playintegrityconfig$Batchget
    extends StandardParameters {
    /**
     * Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch.
     */
    names?: string[];
    /**
     * Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Apps$Playintegrityconfig$Get
    extends StandardParameters {
    /**
     * Required. The relative resource name of the PlayIntegrityConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ```
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Playintegrityconfig$Patch
    extends StandardParameters {
    /**
     * Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/playIntegrityConfig ```
     */
    name?: string;
    /**
     * Required. A comma-separated list of names of fields in the PlayIntegrityConfig to update. Example: `token_ttl`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1PlayIntegrityConfig;
  }

  export class Resource$Projects$Apps$Recaptchaenterpriseconfig {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await firebaseappcheck.projects.apps.recaptchaEnterpriseConfig.batchGet({
     *       // Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch.
     *       names: 'placeholder-value',
     *       // Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     *       parent: 'projects/my-project',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": []
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
    batchGet(
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>
    >;
    batchGet(
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/{+parent}/apps/-/recaptchaEnterpriseConfig:batchGet'
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the RecaptchaEnterpriseConfig for the specified app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await firebaseappcheck.projects.apps.recaptchaEnterpriseConfig.get({
     *       // Required. The relative resource name of the RecaptchaEnterpriseConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ```
     *       name: 'projects/my-project/apps/my-app/recaptchaEnterpriseConfig',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "siteKey": "my_siteKey",
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
    >;
    get(
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>(
          parameters
        );
      }
    }

    /**
     * Updates the RecaptchaEnterpriseConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA Enterprise tokens for App Check tokens.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await firebaseappcheck.projects.apps.recaptchaEnterpriseConfig.patch({
     *       // Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ```
     *       name: 'projects/my-project/apps/my-app/recaptchaEnterpriseConfig',
     *       // Required. A comma-separated list of names of fields in the RecaptchaEnterpriseConfig to update. Example: `site_key`.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "name": "my_name",
     *         //   "siteKey": "my_siteKey",
     *         //   "tokenTtl": "my_tokenTtl"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "siteKey": "my_siteKey",
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
    >;
    patch(
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Batchget
    extends StandardParameters {
    /**
     * Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch.
     */
    names?: string[];
    /**
     * Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Get
    extends StandardParameters {
    /**
     * Required. The relative resource name of the RecaptchaEnterpriseConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ```
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Recaptchaenterpriseconfig$Patch
    extends StandardParameters {
    /**
     * Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaEnterpriseConfig ```
     */
    name?: string;
    /**
     * Required. A comma-separated list of names of fields in the RecaptchaEnterpriseConfig to update. Example: `site_key`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig;
  }

  export class Resource$Projects$Apps$Recaptchav3config {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.recaptchaV3Config.batchGet({
     *     // Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch.
     *     names: 'placeholder-value',
     *     // Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": []
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
    batchGet(
      params: Params$Resource$Projects$Apps$Recaptchav3config$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Projects$Apps$Recaptchav3config$Batchget,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>
    >;
    batchGet(
      params: Params$Resource$Projects$Apps$Recaptchav3config$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Recaptchav3config$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Recaptchav3config$Batchget,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Recaptchav3config$Batchget
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Recaptchav3config$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Recaptchav3config$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/apps/-/recaptchaV3Config:batchGet'
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the RecaptchaV3Config for the specified app. For security reasons, the `site_secret` field is never populated in the response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.recaptchaV3Config.get({
     *     // Required. The relative resource name of the RecaptchaV3Config, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ```
     *     name: 'projects/my-project/apps/my-app/recaptchaV3Config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "siteSecret": "my_siteSecret",
     *   //   "siteSecretSet": false,
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Recaptchav3config$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Recaptchav3config$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
    >;
    get(
      params: Params$Resource$Projects$Apps$Recaptchav3config$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Recaptchav3config$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Recaptchav3config$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Recaptchav3config$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Recaptchav3config$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Recaptchav3config$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>(
          parameters
        );
      }
    }

    /**
     * Updates the RecaptchaV3Config for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA V3 tokens for App Check tokens. For security reasons, the `site_secret` field is never populated in the response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.recaptchaV3Config.patch({
     *     // Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ```
     *     name: 'projects/my-project/apps/my-app/recaptchaV3Config',
     *     // Required. A comma-separated list of names of fields in the RecaptchaV3Config to update. Example: `site_secret`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "siteSecret": "my_siteSecret",
     *       //   "siteSecretSet": false,
     *       //   "tokenTtl": "my_tokenTtl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "siteSecret": "my_siteSecret",
     *   //   "siteSecretSet": false,
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Recaptchav3config$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Apps$Recaptchav3config$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
    >;
    patch(
      params: Params$Resource$Projects$Apps$Recaptchav3config$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Recaptchav3config$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Recaptchav3config$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Recaptchav3config$Patch
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Recaptchav3config$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Recaptchav3config$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Recaptchav3config$Batchget
    extends StandardParameters {
    /**
     * Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch.
     */
    names?: string[];
    /**
     * Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Apps$Recaptchav3config$Get
    extends StandardParameters {
    /**
     * Required. The relative resource name of the RecaptchaV3Config, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ```
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Recaptchav3config$Patch
    extends StandardParameters {
    /**
     * Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/recaptchaV3Config ```
     */
    name?: string;
    /**
     * Required. A comma-separated list of names of fields in the RecaptchaV3Config to update. Example: `site_secret`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1RecaptchaV3Config;
  }

  export class Resource$Projects$Apps$Safetynetconfig {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Atomically gets the SafetyNetConfigs for the specified list of apps.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.safetyNetConfig.batchGet({
     *     // Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch.
     *     names: 'placeholder-value',
     *     // Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": []
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
    batchGet(
      params: Params$Resource$Projects$Apps$Safetynetconfig$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Projects$Apps$Safetynetconfig$Batchget,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>
    >;
    batchGet(
      params: Params$Resource$Projects$Apps$Safetynetconfig$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Safetynetconfig$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Apps$Safetynetconfig$Batchget,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Safetynetconfig$Batchget
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Safetynetconfig$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Safetynetconfig$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/apps/-/safetyNetConfig:batchGet'
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the SafetyNetConfig for the specified app.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.safetyNetConfig.get({
     *     // Required. The relative resource name of the SafetyNetConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ```
     *     name: 'projects/my-project/apps/my-app/safetyNetConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Safetynetconfig$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Apps$Safetynetconfig$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
    >;
    get(
      params: Params$Resource$Projects$Apps$Safetynetconfig$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Safetynetconfig$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Apps$Safetynetconfig$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Safetynetconfig$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Safetynetconfig$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Safetynetconfig$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>(
          parameters
        );
      }
    }

    /**
     * Updates the SafetyNetConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange SafetyNet tokens for App Check tokens.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.apps.safetyNetConfig.patch({
     *     // Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ```
     *     name: 'projects/my-project/apps/my-app/safetyNetConfig',
     *     // Required. A comma-separated list of names of fields in the SafetyNetConfig to update. Example: `token_ttl`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "tokenTtl": "my_tokenTtl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "tokenTtl": "my_tokenTtl"
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
      params: Params$Resource$Projects$Apps$Safetynetconfig$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Apps$Safetynetconfig$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
    >;
    patch(
      params: Params$Resource$Projects$Apps$Safetynetconfig$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Safetynetconfig$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Apps$Safetynetconfig$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Apps$Safetynetconfig$Patch
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Apps$Safetynetconfig$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Apps$Safetynetconfig$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1SafetyNetConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Apps$Safetynetconfig$Batchget
    extends StandardParameters {
    /**
     * Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch.
     */
    names?: string[];
    /**
     * Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Apps$Safetynetconfig$Get
    extends StandardParameters {
    /**
     * Required. The relative resource name of the SafetyNetConfig, in the format: ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ```
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Apps$Safetynetconfig$Patch
    extends StandardParameters {
    /**
     * Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number\}/apps/{app_id\}/safetyNetConfig ```
     */
    name?: string;
    /**
     * Required. A comma-separated list of names of fields in the SafetyNetConfig to update. Example: `token_ttl`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1SafetyNetConfig;
  }

  export class Resource$Projects$Services {
    context: APIRequestContext;
    resourcePolicies: Resource$Projects$Services$Resourcepolicies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.resourcePolicies = new Resource$Projects$Services$Resourcepolicies(
        this.context
      );
    }

    /**
     * Atomically updates the specified Service configurations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.services.batchUpdate({
     *     // Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": [],
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "services": []
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
    batchUpdate(
      params: Params$Resource$Projects$Services$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Projects$Services$Batchupdate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>
    >;
    batchUpdate(
      params: Params$Resource$Projects$Services$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Services$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Services$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Services$Batchupdate
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Services$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Services$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/services:batchUpdate').replace(
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the Service configuration for the specified service name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.services.get({
     *     // Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS)
     *     name: 'projects/my-project/services/my-service',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enforcementMode": "my_enforcementMode",
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
      params: Params$Resource$Projects$Services$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Services$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1Service>>;
    get(
      params: Params$Resource$Projects$Services$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Services$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
    ): void;
    get(
      params: Params$Resource$Projects$Services$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Services$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1Service>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Services$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1Service>(
          parameters
        );
      }
    }

    /**
     * Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.services.list({
     *     // The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     *     pageSize: 'placeholder-value',
     *     // Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined.
     *     pageToken: 'placeholder-value',
     *     // Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number\} ```
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "services": []
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
      params: Params$Resource$Projects$Services$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Services$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>
    >;
    list(
      params: Params$Resource$Projects$Services$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Services$List,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Services$List
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Services$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/services').replace(
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1ListServicesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified Service configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.services.patch({
     *     // Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS)
     *     name: 'projects/my-project/services/my-service',
     *     // Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "enforcementMode": "my_enforcementMode",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enforcementMode": "my_enforcementMode",
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
      params: Params$Resource$Projects$Services$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Services$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1Service>>;
    patch(
      params: Params$Resource$Projects$Services$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Services$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
    ): void;
    patch(
      params: Params$Resource$Projects$Services$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Services$Patch
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1Service>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1Service>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Services$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Services$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1Service>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Services$Batchupdate
    extends StandardParameters {
    /**
     * Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number\} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1BatchUpdateServicesRequest;
  }
  export interface Params$Resource$Projects$Services$Get
    extends StandardParameters {
    /**
     * Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS)
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Services$List
    extends StandardParameters {
    /**
     * The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined.
     */
    pageToken?: string;
    /**
     * Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number\} ```
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Services$Patch
    extends StandardParameters {
    /**
     * Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS)
     */
    name?: string;
    /**
     * Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1Service;
  }

  export class Resource$Projects$Services$Resourcepolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Atomically updates the specified ResourcePolicy configurations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await firebaseappcheck.projects.services.resourcePolicies.batchUpdate({
     *       // Required. The parent service name, in the format ``` projects/{project_number\}/services/{service_id\} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
     *       parent: 'projects/my-project/services/my-service',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "requests": [],
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "resourcePolicies": []
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
    batchUpdate(
      params: Params$Resource$Projects$Services$Resourcepolicies$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Projects$Services$Resourcepolicies$Batchupdate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>
    >;
    batchUpdate(
      params: Params$Resource$Projects$Services$Resourcepolicies$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Services$Resourcepolicies$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Services$Resourcepolicies$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Services$Resourcepolicies$Batchupdate
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Services$Resourcepolicies$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Services$Resourcepolicies$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/resourcePolicies:batchUpdate'
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Creates the specified ResourcePolicy configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.services.resourcePolicies.create({
     *     // Required. The relative resource name of the parent Service in which the specified ResourcePolicy will be created, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     *     parent: 'projects/my-project/services/my-service',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "enforcementMode": "my_enforcementMode",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "targetResource": "my_targetResource",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enforcementMode": "my_enforcementMode",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "targetResource": "my_targetResource",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Services$Resourcepolicies$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Services$Resourcepolicies$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    >;
    create(
      params: Params$Resource$Projects$Services$Resourcepolicies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Services$Resourcepolicies$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    ): void;
    create(
      params: Params$Resource$Projects$Services$Resourcepolicies$Create,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Services$Resourcepolicies$Create
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Services$Resourcepolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Services$Resourcepolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/resourcePolicies').replace(
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified ResourcePolicy configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.services.resourcePolicies.delete({
     *     // The checksum to be validated against the current ResourcePolicy, to ensure the client has an up-to-date value before proceeding. This checksum is computed by the server based on the values of fields in the ResourcePolicy object, and can be obtained from the ResourcePolicy object received from the last CreateResourcePolicy, GetResourcePolicy, ListResourcePolicies, UpdateResourcePolicy, or BatchUpdateResourcePolicies call. This etag is strongly validated as defined by RFC 7232.
     *     etag: 'placeholder-value',
     *     // Required. The relative resource name of the ResourcePolicy to delete, in the format: ``` projects/{project_number\}/services/{service_id\}/resourcePolicies/{resource_policy_id\} ```
     *     name: 'projects/my-project/services/my-service/resourcePolicies/my-resourcePolicie',
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
      params: Params$Resource$Projects$Services$Resourcepolicies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Services$Resourcepolicies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Services$Resourcepolicies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Services$Resourcepolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Services$Resourcepolicies$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Services$Resourcepolicies$Delete
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
        {}) as Params$Resource$Projects$Services$Resourcepolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Services$Resourcepolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the requested ResourcePolicy configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.services.resourcePolicies.get({
     *     // Required. The relative resource name of the ResourcePolicy to retrieve, in the format: ``` projects/{project_number\}/services/{service_id\}/resourcePolicies/{resource_policy_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     *     name: 'projects/my-project/services/my-service/resourcePolicies/my-resourcePolicie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enforcementMode": "my_enforcementMode",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "targetResource": "my_targetResource",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Services$Resourcepolicies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Services$Resourcepolicies$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    >;
    get(
      params: Params$Resource$Projects$Services$Resourcepolicies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Services$Resourcepolicies$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Services$Resourcepolicies$Get,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Services$Resourcepolicies$Get
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Services$Resourcepolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Services$Resourcepolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>(
          parameters
        );
      }
    }

    /**
     * Lists all ResourcePolicy configurations for the specified project and service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.services.resourcePolicies.list({
     *     // Optional. Filters the results by the specified rule. For the exact syntax of this field, please consult the [AIP-160](https://google.aip.dev/160) standard. Currently, since the only fields in the ResourcePolicy resource are the scalar fields `enforcement_mode` and `target_resource`, this method does not support the traversal operator (`.`) or the has operator (`:`). Here are some examples of valid filters: * `enforcement_mode = ENFORCED` * `target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"` * `enforcement_mode = ENFORCED AND target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"`
     *     filter: 'placeholder-value',
     *     // The maximum number of ResourcePolicy objects to return in the response. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     *     pageSize: 'placeholder-value',
     *     // Token returned from a previous call to ListResourcePolicies indicating where in the set of ResourcePolicy objects to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListResourcePolicies must match the call that provided the page token; if they do not match, the result is undefined.
     *     pageToken: 'placeholder-value',
     *     // Required. The relative resource name of the parent Service for which to list each associated ResourcePolicy, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     *     parent: 'projects/my-project/services/my-service',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resourcePolicies": []
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
      params: Params$Resource$Projects$Services$Resourcepolicies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Services$Resourcepolicies$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>
    >;
    list(
      params: Params$Resource$Projects$Services$Resourcepolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Services$Resourcepolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Services$Resourcepolicies$List,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Services$Resourcepolicies$List
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Services$Resourcepolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Services$Resourcepolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/resourcePolicies').replace(
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1ListResourcePoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified ResourcePolicy configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebaseappcheck.googleapis.com
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
     * const firebaseappcheck = google.firebaseappcheck('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebaseappcheck.projects.services.resourcePolicies.patch({
     *     // Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/{project_number\}/services/{service_id\}/resourcePolicies/{resource_policy_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID.
     *     name: 'projects/my-project/services/my-service/resourcePolicies/my-resourcePolicie',
     *     // Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "enforcementMode": "my_enforcementMode",
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "targetResource": "my_targetResource",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enforcementMode": "my_enforcementMode",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "targetResource": "my_targetResource",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Services$Resourcepolicies$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Services$Resourcepolicies$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    >;
    patch(
      params: Params$Resource$Projects$Services$Resourcepolicies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Services$Resourcepolicies$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    ): void;
    patch(
      params: Params$Resource$Projects$Services$Resourcepolicies$Patch,
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Services$Resourcepolicies$Patch
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Services$Resourcepolicies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Services$Resourcepolicies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebaseappcheck.googleapis.com/';
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
        createAPIRequest<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirebaseAppcheckV1ResourcePolicy>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Services$Resourcepolicies$Batchupdate
    extends StandardParameters {
    /**
     * Required. The parent service name, in the format ``` projects/{project_number\}/services/{service_id\} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesRequest;
  }
  export interface Params$Resource$Projects$Services$Resourcepolicies$Create
    extends StandardParameters {
    /**
     * Required. The relative resource name of the parent Service in which the specified ResourcePolicy will be created, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ResourcePolicy;
  }
  export interface Params$Resource$Projects$Services$Resourcepolicies$Delete
    extends StandardParameters {
    /**
     * The checksum to be validated against the current ResourcePolicy, to ensure the client has an up-to-date value before proceeding. This checksum is computed by the server based on the values of fields in the ResourcePolicy object, and can be obtained from the ResourcePolicy object received from the last CreateResourcePolicy, GetResourcePolicy, ListResourcePolicies, UpdateResourcePolicy, or BatchUpdateResourcePolicies call. This etag is strongly validated as defined by RFC 7232.
     */
    etag?: string;
    /**
     * Required. The relative resource name of the ResourcePolicy to delete, in the format: ``` projects/{project_number\}/services/{service_id\}/resourcePolicies/{resource_policy_id\} ```
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Services$Resourcepolicies$Get
    extends StandardParameters {
    /**
     * Required. The relative resource name of the ResourcePolicy to retrieve, in the format: ``` projects/{project_number\}/services/{service_id\}/resourcePolicies/{resource_policy_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Services$Resourcepolicies$List
    extends StandardParameters {
    /**
     * Optional. Filters the results by the specified rule. For the exact syntax of this field, please consult the [AIP-160](https://google.aip.dev/160) standard. Currently, since the only fields in the ResourcePolicy resource are the scalar fields `enforcement_mode` and `target_resource`, this method does not support the traversal operator (`.`) or the has operator (`:`). Here are some examples of valid filters: * `enforcement_mode = ENFORCED` * `target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"` * `enforcement_mode = ENFORCED AND target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"`
     */
    filter?: string;
    /**
     * The maximum number of ResourcePolicy objects to return in the response. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to ListResourcePolicies indicating where in the set of ResourcePolicy objects to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListResourcePolicies must match the call that provided the page token; if they do not match, the result is undefined.
     */
    pageToken?: string;
    /**
     * Required. The relative resource name of the parent Service for which to list each associated ResourcePolicy, in the format: ``` projects/{project_number\}/services/{service_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Services$Resourcepolicies$Patch
    extends StandardParameters {
    /**
     * Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/{project_number\}/services/{service_id\}/resourcePolicies/{resource_policy_id\} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID.
     */
    name?: string;
    /**
     * Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirebaseAppcheckV1ResourcePolicy;
  }
}
