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

export namespace toolresults_v1beta3 {
  export interface Options extends GlobalOptions {
    version: 'v1beta3';
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
   * Cloud Tool Results API
   *
   * API to publish and access results from developer tools.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const toolresults = google.toolresults('v1beta3');
   * ```
   */
  export class Toolresults {
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
   * Android app information.
   */
  export interface Schema$AndroidAppInfo {
    /**
     * The name of the app. Optional
     */
    name?: string | null;
    /**
     * The package name of the app. Required.
     */
    packageName?: string | null;
    /**
     * The internal version code of the app. Optional.
     */
    versionCode?: string | null;
    /**
     * The version name of the app. Optional.
     */
    versionName?: string | null;
  }
  /**
   * A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.
   */
  export interface Schema$AndroidInstrumentationTest {
    /**
     * The java package for the test to be executed. Required
     */
    testPackageId?: string | null;
    /**
     * The InstrumentationTestRunner class. Required
     */
    testRunnerClass?: string | null;
    /**
     * Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run.
     */
    testTargets?: string[] | null;
    /**
     * The flag indicates whether Android Test Orchestrator will be used to run test or not.
     */
    useOrchestrator?: boolean | null;
  }
  /**
   * A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.
   */
  export interface Schema$AndroidRoboTest {
    /**
     * The initial activity that should be used to start the app. Optional
     */
    appInitialActivity?: string | null;
    /**
     * The java package for the bootstrap. Optional
     */
    bootstrapPackageId?: string | null;
    /**
     * The runner class for the bootstrap. Optional
     */
    bootstrapRunnerClass?: string | null;
    /**
     * The max depth of the traversal stack Robo can explore. Optional
     */
    maxDepth?: number | null;
    /**
     * The max number of steps/actions Robo can execute. Default is no limit (0). Optional
     */
    maxSteps?: number | null;
  }
  /**
   * An Android mobile test specification.
   */
  export interface Schema$AndroidTest {
    /**
     * Information about the application under test.
     */
    androidAppInfo?: Schema$AndroidAppInfo;
    /**
     * An Android instrumentation test.
     */
    androidInstrumentationTest?: Schema$AndroidInstrumentationTest;
    /**
     * An Android robo test.
     */
    androidRoboTest?: Schema$AndroidRoboTest;
    /**
     * An Android test loop.
     */
    androidTestLoop?: Schema$AndroidTestLoop;
    /**
     * Max time a test is allowed to run before it is automatically cancelled.
     */
    testTimeout?: Schema$Duration;
  }
  /**
   * Test Loops are tests that can be launched by the app itself, determining when to run by listening for an intent.
   */
  export interface Schema$AndroidTestLoop {}
  /**
   * Additional details for an ANR crash.
   */
  export interface Schema$ANR {
    /**
     * The stack trace of the ANR crash. Optional.
     */
    stackTrace?: Schema$StackTrace;
  }
  /**
   *  `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++. Foo foo = ...; Any any; any.PackFrom(foo); ... if (any.UnpackTo(&foo)) { ... \} Example 2: Pack and unpack a message in Java. Foo foo = ...; Any any = Any.pack(foo); ... if (any.is(Foo.class)) { foo = any.unpack(Foo.class); \} Example 3: Pack and unpack a message in Python. foo = Foo(...) any = Any() any.Pack(foo) ... if any.Is(Foo.DESCRIPTOR): any.Unpack(foo) ... Example 4: Pack and unpack a message in Go foo := &pb.Foo{...\} any, err := ptypes.MarshalAny(foo) ... foo := &pb.Foo{\} if err := ptypes.UnmarshalAny(any, foo); err != nil { ... \} The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example "foo.bar.com/x/y.z" will yield type name "y.z". # JSON The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example: package google.profile; message Person { string first_name = 1; string last_name = 2; \} { "@type": "type.googleapis.com/google.profile.Person", "firstName": , "lastName": \} If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message google.protobuf.Duration): { "@type": "type.googleapis.com/google.protobuf.Duration", "value": "1.212s" \}
   */
  export interface Schema$Any {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.
     */
    typeUrl?: string | null;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     */
    value?: string | null;
  }
  export interface Schema$AppStartTime {
    /**
     * Optional. The time from app start to reaching the developer-reported "fully drawn" time. This is only stored if the app includes a call to Activity.reportFullyDrawn(). See https://developer.android.com/topic/performance/launch-time.html#time-full
     */
    fullyDrawnTime?: Schema$Duration;
    /**
     * The time from app start to the first displayed activity being drawn, as reported in Logcat. See https://developer.android.com/topic/performance/launch-time.html#time-initial
     */
    initialDisplayTime?: Schema$Duration;
  }
  /**
   * There was an issue with the assets in this test.
   */
  export interface Schema$AssetIssue {}
  /**
   * A suggestion to use deep links for a Robo run.
   */
  export interface Schema$AvailableDeepLinks {}
  /**
   * Encapsulates the metadata for basic sample series represented by a line chart
   */
  export interface Schema$BasicPerfSampleSeries {
    perfMetricType?: string | null;
    perfUnit?: string | null;
    sampleSeriesLabel?: string | null;
  }
  /**
   * The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
   */
  export interface Schema$BatchCreatePerfSamplesRequest {
    /**
     * The set of PerfSamples to create should not include existing timestamps
     */
    perfSamples?: Schema$PerfSample[];
  }
  export interface Schema$BatchCreatePerfSamplesResponse {
    perfSamples?: Schema$PerfSample[];
  }
  /**
   * A warning that Robo encountered a screen that was mostly blank; this may indicate a problem with the app.
   */
  export interface Schema$BlankScreen {
    /**
     * The screen id of the element
     */
    screenId?: string | null;
  }
  export interface Schema$CPUInfo {
    /**
     * description of the device processor ie '1.8 GHz hexa core 64-bit ARMv8-A'
     */
    cpuProcessor?: string | null;
    /**
     * the CPU clock speed in GHz
     */
    cpuSpeedInGhz?: number | null;
    /**
     * the number of CPU cores
     */
    numberOfCores?: number | null;
  }
  /**
   * Crash dialog was detected during the test execution
   */
  export interface Schema$CrashDialogError {
    /**
     * The name of the package that caused the dialog.
     */
    crashPackage?: string | null;
  }
  /**
   * A notification that Robo detected a splash screen provided by app (vs. Android OS splash screen).
   */
  export interface Schema$DetectedAppSplashScreen {}
  /**
   * A warning that device ran out of memory
   */
  export interface Schema$DeviceOutOfMemory {}
  /**
   *  A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.
   */
  export interface Schema$Duration {
    /**
     * Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.
     */
    nanos?: number | null;
    /**
     * Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     */
    seconds?: string | null;
  }
  /**
   * Additional details about encountered login screens.
   */
  export interface Schema$EncounteredLoginScreen {
    /**
     * Number of encountered distinct login screens.
     */
    distinctScreens?: number | null;
    /**
     * Subset of login screens.
     */
    screenIds?: string[] | null;
  }
  /**
   * Additional details about encountered screens with elements that are not Android UI widgets.
   */
  export interface Schema$EncounteredNonAndroidUiWidgetScreen {
    /**
     * Number of encountered distinct screens with non Android UI widgets.
     */
    distinctScreens?: number | null;
    /**
     * Subset of screens which contain non Android UI widgets.
     */
    screenIds?: string[] | null;
  }
  /**
   * An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).
   */
  export interface Schema$Environment {
    /**
     * Output only. The time when the Environment status was set to complete. This value will be set automatically when state transitions to COMPLETE.
     */
    completionTime?: Schema$Timestamp;
    /**
     * Output only. The time when the Environment was created.
     */
    creationTime?: Schema$Timestamp;
    /**
     * Dimension values describing the environment. Dimension values always consist of "Model", "Version", "Locale", and "Orientation". - In response: always set - In create request: always set - In update request: never set
     */
    dimensionValue?: Schema$EnvironmentDimensionValueEntry[];
    /**
     * A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27.
     */
    displayName?: string | null;
    /**
     * Output only. An Environment id.
     */
    environmentId?: string | null;
    /**
     * Merged result of the environment.
     */
    environmentResult?: Schema$MergedResult;
    /**
     * Output only. An Execution id.
     */
    executionId?: string | null;
    /**
     * Output only. A History id.
     */
    historyId?: string | null;
    /**
     * Output only. A Project id.
     */
    projectId?: string | null;
    /**
     * The location where output files are stored in the user bucket.
     */
    resultsStorage?: Schema$ResultsStorage;
    /**
     * Output only. Summaries of shards. Only one shard will present unless sharding feature is enabled in TestExecutionService.
     */
    shardSummaries?: Schema$ShardSummary[];
  }
  export interface Schema$EnvironmentDimensionValueEntry {
    key?: string | null;
    value?: string | null;
  }
  /**
   * An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable.
   */
  export interface Schema$Execution {
    /**
     * The time when the Execution status transitioned to COMPLETE. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set
     */
    completionTime?: Schema$Timestamp;
    /**
     * The time when the Execution was created. This value will be set automatically when CreateExecution is called. - In response: always set - In create/update request: never set
     */
    creationTime?: Schema$Timestamp;
    /**
     * The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set
     */
    dimensionDefinitions?: Schema$MatrixDimensionDefinition[];
    /**
     * A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set
     */
    executionId?: string | null;
    /**
     * Classify the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional
     */
    outcome?: Schema$Outcome;
    /**
     * Lightweight information about execution request. - In response: present if set by create - In create: optional - In update: optional
     */
    specification?: Schema$Specification;
    /**
     * The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional
     */
    state?: string | null;
    /**
     * TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set
     */
    testExecutionMatrixId?: string | null;
  }
  /**
   * Failed to install the App.
   */
  export interface Schema$FailedToInstall {}
  /**
   * Details for an outcome with a FAILURE outcome summary.
   */
  export interface Schema$FailureDetail {
    /**
     * If the failure was severe because the system (app) under test crashed.
     */
    crashed?: boolean | null;
    /**
     * If the device ran out of memory during a test, causing the test to crash.
     */
    deviceOutOfMemory?: boolean | null;
    /**
     * If the Roboscript failed to complete successfully, e.g., because a Roboscript action or assertion failed or a Roboscript action could not be matched during the entire crawl.
     */
    failedRoboscript?: boolean | null;
    /**
     * If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform.
     */
    notInstalled?: boolean | null;
    /**
     * If a native process (including any other than the app) crashed.
     */
    otherNativeCrash?: boolean | null;
    /**
     * If the test overran some time limit, and that is why it failed.
     */
    timedOut?: boolean | null;
    /**
     * If the robo was unable to crawl the app; perhaps because the app did not start.
     */
    unableToCrawl?: boolean | null;
  }
  /**
   * Additional details for a fatal exception.
   */
  export interface Schema$FatalException {
    /**
     * The stack trace of the fatal exception. Optional.
     */
    stackTrace?: Schema$StackTrace;
  }
  /**
   * A reference to a file.
   */
  export interface Schema$FileReference {
    /**
     * The URI of a file stored in Google Cloud Storage. For example: http://storage.googleapis.com/mybucket/path/to/test.xml or in gsutil format: gs://mybucket/path/to/test.xml with version-specific info, gs://mybucket/path/to/test.xml#1360383693690000 An INVALID_ARGUMENT error will be returned if the URI format is not supported. - In response: always set - In create/update request: always set
     */
    fileUri?: string | null;
  }
  /**
   * Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
   */
  export interface Schema$GraphicsStats {
    /**
     * Histogram of frame render times. There should be 154 buckets ranging from [5ms, 6ms) to [4950ms, infinity)
     */
    buckets?: Schema$GraphicsStatsBucket[];
    /**
     * Total "high input latency" events.
     */
    highInputLatencyCount?: string | null;
    /**
     * Total frames with slow render time. Should be <= total_frames.
     */
    jankyFrames?: string | null;
    /**
     * Total "missed vsync" events.
     */
    missedVsyncCount?: string | null;
    /**
     * 50th percentile frame render time in milliseconds.
     */
    p50Millis?: string | null;
    /**
     * 90th percentile frame render time in milliseconds.
     */
    p90Millis?: string | null;
    /**
     * 95th percentile frame render time in milliseconds.
     */
    p95Millis?: string | null;
    /**
     * 99th percentile frame render time in milliseconds.
     */
    p99Millis?: string | null;
    /**
     * Total "slow bitmap upload" events.
     */
    slowBitmapUploadCount?: string | null;
    /**
     * Total "slow draw" events.
     */
    slowDrawCount?: string | null;
    /**
     * Total "slow UI thread" events.
     */
    slowUiThreadCount?: string | null;
    /**
     * Total frames rendered by package.
     */
    totalFrames?: string | null;
  }
  export interface Schema$GraphicsStatsBucket {
    /**
     * Number of frames in the bucket.
     */
    frameCount?: string | null;
    /**
     * Lower bound of render time in milliseconds.
     */
    renderMillis?: string | null;
  }
  /**
   * A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch.
   */
  export interface Schema$History {
    /**
     * A short human-readable (plain text) name to display in the UI. Maximum of 100 characters. - In response: present if set during create. - In create request: optional
     */
    displayName?: string | null;
    /**
     * A unique identifier within a project for this History. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create request: never set
     */
    historyId?: string | null;
    /**
     * A name to uniquely identify a history within a project. Maximum of 200 characters. - In response always set - In create request: always set
     */
    name?: string | null;
    /**
     * The platform of the test history. - In response: always set. Returns the platform of the last execution if unknown.
     */
    testPlatform?: string | null;
  }
  /**
   * An image, with a link to the main image and a thumbnail.
   */
  export interface Schema$Image {
    /**
     * An error explaining why the thumbnail could not be rendered.
     */
    error?: Schema$Status;
    /**
     * A reference to the full-size, original image. This is the same as the tool_outputs entry for the image under its Step. Always set.
     */
    sourceImage?: Schema$ToolOutputReference;
    /**
     * The step to which the image is attached. Always set.
     */
    stepId?: string | null;
    /**
     * The thumbnail.
     */
    thumbnail?: Schema$Thumbnail;
  }
  /**
   * Additional details of in-app purchases encountered during the crawl.
   */
  export interface Schema$InAppPurchasesFound {
    /**
     * The total number of in-app purchases flows explored: how many times the robo tries to buy a SKU.
     */
    inAppPurchasesFlowsExplored?: number | null;
    /**
     * The total number of in-app purchases flows started.
     */
    inAppPurchasesFlowsStarted?: number | null;
  }
  /**
   * Details for an outcome with an INCONCLUSIVE outcome summary.
   */
  export interface Schema$InconclusiveDetail {
    /**
     * If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running.
     */
    abortedByUser?: boolean | null;
    /**
     * If results are being provided to the user in certain cases of infrastructure failures
     */
    hasErrorLogs?: boolean | null;
    /**
     * If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed. For example, a mobile test requires provisioning a device where the test executes, and that provisioning can fail.
     */
    infrastructureFailure?: boolean | null;
  }
  /**
   * Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
   */
  export interface Schema$IndividualOutcome {
    /**
     * Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0.
     */
    multistepNumber?: number | null;
    outcomeSummary?: string | null;
    /**
     * How long it took for this step to run.
     */
    runDuration?: Schema$Duration;
    stepId?: string | null;
  }
  /**
   * A warning that Robo did not crawl potentially important parts of the app.
   */
  export interface Schema$InsufficientCoverage {}
  /**
   * Additional details for an iOS app crash.
   */
  export interface Schema$IosAppCrashed {
    /**
     * The stack trace, if one is available. Optional.
     */
    stackTrace?: Schema$StackTrace;
  }
  /**
   * iOS app information
   */
  export interface Schema$IosAppInfo {
    /**
     * The name of the app. Required
     */
    name?: string | null;
  }
  /**
   * A Robo test for an iOS application.
   */
  export interface Schema$IosRoboTest {}
  /**
   * A iOS mobile test specification
   */
  export interface Schema$IosTest {
    /**
     * Information about the application under test.
     */
    iosAppInfo?: Schema$IosAppInfo;
    /**
     * An iOS Robo test.
     */
    iosRoboTest?: Schema$IosRoboTest;
    /**
     * An iOS test loop.
     */
    iosTestLoop?: Schema$IosTestLoop;
    /**
     * An iOS XCTest.
     */
    iosXcTest?: Schema$IosXcTest;
    /**
     * Max time a test is allowed to run before it is automatically cancelled.
     */
    testTimeout?: Schema$Duration;
  }
  /**
   * A game loop test of an iOS application.
   */
  export interface Schema$IosTestLoop {
    /**
     * Bundle ID of the app.
     */
    bundleId?: string | null;
  }
  /**
   * A test of an iOS application that uses the XCTest framework.
   */
  export interface Schema$IosXcTest {
    /**
     * Bundle ID of the app.
     */
    bundleId?: string | null;
    /**
     * Xcode version that the test was run with.
     */
    xcodeVersion?: string | null;
  }
  /**
   * Failed to find the launcher activity of an app.
   */
  export interface Schema$LauncherActivityNotFound {}
  /**
   * Response message for EnvironmentService.ListEnvironments.
   */
  export interface Schema$ListEnvironmentsResponse {
    /**
     * Environments. Always set.
     */
    environments?: Schema$Environment[];
    /**
     * A Execution id Always set.
     */
    executionId?: string | null;
    /**
     * A History id. Always set.
     */
    historyId?: string | null;
    /**
     * A continuation token to resume the query at the next item. Will only be set if there are more Environments to fetch.
     */
    nextPageToken?: string | null;
    /**
     * A Project id. Always set.
     */
    projectId?: string | null;
  }
  export interface Schema$ListExecutionsResponse {
    /**
     * Executions. Always set.
     */
    executions?: Schema$Execution[];
    /**
     * A continuation token to resume the query at the next item. Will only be set if there are more Executions to fetch.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for HistoryService.List
   */
  export interface Schema$ListHistoriesResponse {
    /**
     * Histories.
     */
    histories?: Schema$History[];
    /**
     * A continuation token to resume the query at the next item. Will only be set if there are more histories to fetch. Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListPerfSampleSeriesResponse {
    /**
     * The resulting PerfSampleSeries sorted by id
     */
    perfSampleSeries?: Schema$PerfSampleSeries[];
  }
  export interface Schema$ListPerfSamplesResponse {
    /**
     * Optional, returned if result size exceeds the page size specified in the request (or the default page size, 500, if unspecified). It indicates the last sample timestamp to be used as page_token in subsequent request
     */
    nextPageToken?: string | null;
    perfSamples?: Schema$PerfSample[];
  }
  export interface Schema$ListScreenshotClustersResponse {
    /**
     * The set of clusters associated with an execution Always set
     */
    clusters?: Schema$ScreenshotCluster[];
  }
  /**
   * Response message for AccessibilityService.ListStepAccessibilityClusters.
   */
  export interface Schema$ListStepAccessibilityClustersResponse {
    /**
     * A sequence of accessibility suggestions, grouped into clusters. Within the sequence, clusters that belong to the same SuggestionCategory should be adjacent. Within each category, clusters should be ordered by their SuggestionPriority (ERRORs first). The categories should be ordered by their highest priority cluster.
     */
    clusters?: Schema$SuggestionClusterProto[];
    /**
     * A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Always presents.
     */
    name?: string | null;
  }
  /**
   * Response message for StepService.List.
   */
  export interface Schema$ListStepsResponse {
    /**
     * A continuation token to resume the query at the next item. If set, indicates that there are more steps to read, by calling list again with this value in the page_token field.
     */
    nextPageToken?: string | null;
    /**
     * Steps.
     */
    steps?: Schema$Step[];
  }
  /**
   * A response containing the thumbnails in a step.
   */
  export interface Schema$ListStepThumbnailsResponse {
    /**
     * A continuation token to resume the query at the next item. If set, indicates that there are more thumbnails to read, by calling list again with this value in the page_token field.
     */
    nextPageToken?: string | null;
    /**
     * A list of image data. Images are returned in a deterministic order; they are ordered by these factors, in order of importance: * First, by their associated test case. Images without a test case are considered greater than images with one. * Second, by their creation time. Images without a creation time are greater than images with one. * Third, by the order in which they were added to the step (by calls to CreateStep or UpdateStep).
     */
    thumbnails?: Schema$Image[];
  }
  /**
   * Response message for StepService.ListTestCases.
   */
  export interface Schema$ListTestCasesResponse {
    nextPageToken?: string | null;
    /**
     * List of test cases.
     */
    testCases?: Schema$TestCase[];
  }
  /**
   * A warning that there were issues in logcat collection.
   */
  export interface Schema$LogcatCollectionError {}
  /**
   * One dimension of the matrix of different runs of a step.
   */
  export interface Schema$MatrixDimensionDefinition {}
  export interface Schema$MemoryInfo {
    /**
     * Maximum memory that can be allocated to the process in KiB
     */
    memoryCapInKibibyte?: string | null;
    /**
     * Total memory available on the device in KiB
     */
    memoryTotalInKibibyte?: string | null;
  }
  /**
   * Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
   */
  export interface Schema$MergedResult {
    /**
     * Outcome of the resource
     */
    outcome?: Schema$Outcome;
    /**
     * State of the resource
     */
    state?: string | null;
    /**
     * The combined and rolled-up result of each test suite that was run as part of this environment. Combining: When the test cases from a suite are run in different steps (sharding), the results are added back together in one overview. (e.g., if shard1 has 2 failures and shard2 has 1 failure than the overview failure_count = 3). Rollup: When test cases from the same suite are run multiple times (flaky), the results are combined (e.g., if testcase1.run1 fails, testcase1.run2 passes, and both testcase2.run1 and testcase2.run2 fail then the overview flaky_count = 1 and failure_count = 1).
     */
    testSuiteOverviews?: Schema$TestSuiteOverview[];
  }
  /**
   * Details when multiple steps are run with the same configuration as a group.
   */
  export interface Schema$MultiStep {
    /**
     * Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0.
     */
    multistepNumber?: number | null;
    /**
     * Present if it is a primary (original) step.
     */
    primaryStep?: Schema$PrimaryStep;
    /**
     * Step Id of the primary (original) step, which might be this step.
     */
    primaryStepId?: string | null;
  }
  /**
   * Additional details for a native crash.
   */
  export interface Schema$NativeCrash {
    /**
     * The stack trace of the native crash. Optional.
     */
    stackTrace?: Schema$StackTrace;
  }
  /**
   * A non-sdk API and examples of it being called along with other metadata See https://developer.android.com/distribute/best-practices/develop/restrictions-non-sdk-interfaces
   */
  export interface Schema$NonSdkApi {
    /**
     * The signature of the Non-SDK API
     */
    apiSignature?: string | null;
    /**
     * Example stack traces of this API being called.
     */
    exampleStackTraces?: string[] | null;
    /**
     * Optional debugging insights for non-SDK API violations.
     */
    insights?: Schema$NonSdkApiInsight[];
    /**
     * The total number of times this API was observed to have been called.
     */
    invocationCount?: number | null;
    /**
     * Which list this API appears on
     */
    list?: string | null;
  }
  /**
   * Non-SDK API insights (to address debugging solutions).
   */
  export interface Schema$NonSdkApiInsight {
    /**
     * Optional sample stack traces, for which this insight applies (there should be at least one).
     */
    exampleTraceMessages?: string[] | null;
    /**
     * A unique ID, to be used for determining the effectiveness of this particular insight in the context of a matcher. (required)
     */
    matcherId?: string | null;
    /**
     * An insight indicating that the hidden API usage originates from a Google-provided library.
     */
    pendingGoogleUpdateInsight?: Schema$PendingGoogleUpdateInsight;
    /**
     * An insight indicating that the hidden API usage originates from the use of a library that needs to be upgraded.
     */
    upgradeInsight?: Schema$UpgradeInsight;
  }
  /**
   * Additional details for a non-sdk API usage violation.
   */
  export interface Schema$NonSdkApiUsageViolation {
    /**
     * Signatures of a subset of those hidden API's.
     */
    apiSignatures?: string[] | null;
    /**
     * Total number of unique hidden API's accessed.
     */
    uniqueApis?: number | null;
  }
  /**
   * Contains a summary and examples of non-sdk API usage violations.
   */
  export interface Schema$NonSdkApiUsageViolationReport {
    /**
     * Examples of the detected API usages.
     */
    exampleApis?: Schema$NonSdkApi[];
    /**
     * Minimum API level required for the application to run.
     */
    minSdkVersion?: number | null;
    /**
     * Specifies the API Level on which the application is designed to run.
     */
    targetSdkVersion?: number | null;
    /**
     * Total number of unique Non-SDK API's accessed.
     */
    uniqueApis?: number | null;
  }
  /**
   * Interprets a result so that humans and machines can act on it.
   */
  export interface Schema$Outcome {
    /**
     * More information about a FAILURE outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not FAILURE. Optional
     */
    failureDetail?: Schema$FailureDetail;
    /**
     * More information about an INCONCLUSIVE outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not INCONCLUSIVE. Optional
     */
    inconclusiveDetail?: Schema$InconclusiveDetail;
    /**
     * More information about a SKIPPED outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not SKIPPED. Optional
     */
    skippedDetail?: Schema$SkippedDetail;
    /**
     * More information about a SUCCESS outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not SUCCESS. Optional
     */
    successDetail?: Schema$SuccessDetail;
    /**
     * The simplest way to interpret a result. Required
     */
    summary?: string | null;
  }
  /**
   * A warning that Robo encountered a screen that has overlapping clickable elements; this may indicate a potential UI issue.
   */
  export interface Schema$OverlappingUIElements {
    /**
     * Resource names of the overlapping screen elements
     */
    resourceName?: string[] | null;
    /**
     * The screen id of the elements
     */
    screenId?: string | null;
  }
  /**
   * This insight indicates that the hidden API usage originates from a Google-provided library. Users need not take any action.
   */
  export interface Schema$PendingGoogleUpdateInsight {
    /**
     * The name of the Google-provided library with the non-SDK API dependency.
     */
    nameOfGoogleLibrary?: string | null;
  }
  /**
   * Encapsulates performance environment info
   */
  export interface Schema$PerfEnvironment {
    /**
     * CPU related environment info
     */
    cpuInfo?: Schema$CPUInfo;
    /**
     * Memory related environment info
     */
    memoryInfo?: Schema$MemoryInfo;
  }
  /**
   * A summary of perf metrics collected and performance environment info
   */
  export interface Schema$PerfMetricsSummary {
    appStartTime?: Schema$AppStartTime;
    /**
     * A tool results execution ID. @OutputOnly
     */
    executionId?: string | null;
    /**
     * Graphics statistics for the entire run. Statistics are reset at the beginning of the run and collected at the end of the run.
     */
    graphicsStats?: Schema$GraphicsStats;
    /**
     * A tool results history ID. @OutputOnly
     */
    historyId?: string | null;
    /**
     * Describes the environment in which the performance metrics were collected
     */
    perfEnvironment?: Schema$PerfEnvironment;
    /**
     * Set of resource collected
     */
    perfMetrics?: string[] | null;
    /**
     * The cloud project @OutputOnly
     */
    projectId?: string | null;
    /**
     * A tool results step ID. @OutputOnly
     */
    stepId?: string | null;
  }
  /**
   * A notification that Robo signed in with Google.
   */
  export interface Schema$PerformedGoogleLogin {}
  /**
   * A notification that Robo performed some monkey actions.
   */
  export interface Schema$PerformedMonkeyActions {
    /**
     * The total number of monkey actions performed during the crawl.
     */
    totalActions?: number | null;
  }
  /**
   * Resource representing a single performance measure or data point
   */
  export interface Schema$PerfSample {
    /**
     * Timestamp of collection.
     */
    sampleTime?: Schema$Timestamp;
    /**
     * Value observed
     */
    value?: number | null;
  }
  /**
   * Resource representing a collection of performance samples (or data points)
   */
  export interface Schema$PerfSampleSeries {
    /**
     * Basic series represented by a line chart
     */
    basicPerfSampleSeries?: Schema$BasicPerfSampleSeries;
    /**
     * A tool results execution ID. @OutputOnly
     */
    executionId?: string | null;
    /**
     * A tool results history ID. @OutputOnly
     */
    historyId?: string | null;
    /**
     * The cloud project @OutputOnly
     */
    projectId?: string | null;
    /**
     * A sample series id @OutputOnly
     */
    sampleSeriesId?: string | null;
    /**
     * A tool results step ID. @OutputOnly
     */
    stepId?: string | null;
  }
  /**
   * Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.
   */
  export interface Schema$PrimaryStep {
    /**
     * Step Id and outcome of each individual step.
     */
    individualOutcome?: Schema$IndividualOutcome[];
    /**
     * Rollup test status of multiple steps that were run with the same configuration as a group.
     */
    rollUp?: string | null;
  }
  /**
   * Per-project settings for the Tool Results service.
   */
  export interface Schema$ProjectSettings {
    /**
     * The name of the Google Cloud Storage bucket to which results are written. By default, this is unset. In update request: optional In response: optional
     */
    defaultBucket?: string | null;
    /**
     * The name of the project's settings. Always of the form: projects/{project-id\}/settings In update request: never set In response: always set
     */
    name?: string | null;
  }
  /**
   * Request message for StepService.PublishXunitXmlFiles.
   */
  export interface Schema$PublishXunitXmlFilesRequest {
    /**
     * URI of the Xunit XML files to publish. The maximum size of the file this reference is pointing to is 50MB. Required.
     */
    xunitXmlFiles?: Schema$FileReference[];
  }
  /**
   * A rectangular region.
   */
  export interface Schema$RegionProto {
    /**
     * The height, in pixels. Always set.
     */
    heightPx?: number | null;
    /**
     * The left side of the rectangle, in pixels. Always set.
     */
    leftPx?: number | null;
    /**
     * The top of the rectangle, in pixels. Always set.
     */
    topPx?: number | null;
    /**
     * The width, in pixels. Always set.
     */
    widthPx?: number | null;
  }
  /**
   * The storage for test results.
   */
  export interface Schema$ResultsStorage {
    /**
     * The root directory for test results.
     */
    resultsStoragePath?: Schema$FileReference;
    /**
     * The path to the Xunit XML file.
     */
    xunitXmlFile?: Schema$FileReference;
  }
  /**
   * Execution stats for a user-provided Robo script.
   */
  export interface Schema$RoboScriptExecution {
    /**
     * The number of Robo script actions executed successfully.
     */
    successfulActions?: number | null;
    /**
     * The total number of actions in the Robo script.
     */
    totalActions?: number | null;
  }
  /**
   * IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.
   */
  export interface Schema$SafeHtmlProto {
    /**
     * IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message.
     */
    privateDoNotAccessOrElseSafeHtmlWrappedValue?: string | null;
  }
  export interface Schema$Screen {
    /**
     * File reference of the png file. Required.
     */
    fileReference?: string | null;
    /**
     * Locale of the device that the screenshot was taken on. Required.
     */
    locale?: string | null;
    /**
     * Model of the device that the screenshot was taken on. Required.
     */
    model?: string | null;
    /**
     * OS version of the device that the screenshot was taken on. Required.
     */
    version?: string | null;
  }
  export interface Schema$ScreenshotCluster {
    /**
     * A string that describes the activity of every screen in the cluster.
     */
    activity?: string | null;
    /**
     * A unique identifier for the cluster. @OutputOnly
     */
    clusterId?: string | null;
    /**
     * A singular screen that represents the cluster as a whole. This screen will act as the "cover" of the entire cluster. When users look at the clusters, only the key screen from each cluster will be shown. Which screen is the key screen is determined by the ClusteringAlgorithm
     */
    keyScreen?: Schema$Screen;
    /**
     * Full list of screens.
     */
    screens?: Schema$Screen[];
  }
  /**
   * Result summary for a shard in an environment.
   */
  export interface Schema$ShardSummary {
    /**
     * Summaries of the steps belonging to the shard. With flaky_test_attempts enabled from TestExecutionService, more than one run (Step) can present. And the runs will be sorted by multistep_number.
     */
    runs?: Schema$StepSummary[];
    /**
     * Merged result of the shard.
     */
    shardResult?: Schema$MergedResult;
  }
  /**
   * Details for an outcome with a SKIPPED outcome summary.
   */
  export interface Schema$SkippedDetail {
    /**
     * If the App doesn't support the specific API level.
     */
    incompatibleAppVersion?: boolean | null;
    /**
     * If the App doesn't run on the specific architecture, for example, x86.
     */
    incompatibleArchitecture?: boolean | null;
    /**
     * If the requested OS version doesn't run on the specific device model.
     */
    incompatibleDevice?: boolean | null;
  }
  /**
   * The details about how to run the execution.
   */
  export interface Schema$Specification {
    /**
     * An Android mobile test execution specification.
     */
    androidTest?: Schema$AndroidTest;
    /**
     * An iOS mobile test execution specification.
     */
    iosTest?: Schema$IosTest;
  }
  /**
   * A stacktrace.
   */
  export interface Schema$StackTrace {
    /**
     * The stack trace message. Required
     */
    exception?: string | null;
  }
  /**
   * User provided intent failed to resolve to an activity.
   */
  export interface Schema$StartActivityNotFound {
    action?: string | null;
    uri?: string | null;
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
   * A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates a TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable.
   */
  export interface Schema$Step {
    /**
     * The time when the step status was set to complete. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set
     */
    completionTime?: Schema$Timestamp;
    /**
     * The time when the step was created. - In response: always set - In create/update request: never set
     */
    creationTime?: Schema$Timestamp;
    /**
     * A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional
     */
    description?: string | null;
    /**
     * How much the device resource is used to perform the test. This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won't be charged for device usage. PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set. - In response: present if previously set. - In create request: optional - In update request: optional
     */
    deviceUsageDuration?: Schema$Duration;
    /**
     * If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set
     */
    dimensionValue?: Schema$StepDimensionValueEntry[];
    /**
     * Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set
     */
    hasImages?: boolean | null;
    /**
     * Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value
     */
    labels?: Schema$StepLabelsEntry[];
    /**
     * Details when multiple steps are run with the same configuration as a group. These details can be used identify which group this step is part of. It also identifies the groups 'primary step' which indexes all the group members. - In response: present if previously set. - In create request: optional, set iff this step was performed more than once. - In update request: optional
     */
    multiStep?: Schema$MultiStep;
    /**
     * A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set
     */
    name?: string | null;
    /**
     * Classification of the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional
     */
    outcome?: Schema$Outcome;
    /**
     * How long it took for this step to run. If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration. PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set. - In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional
     */
    runDuration?: Schema$Duration;
    /**
     * The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -\> COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional
     */
    state?: string | null;
    /**
     * A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set
     */
    stepId?: string | null;
    /**
     * An execution of a test runner.
     */
    testExecutionStep?: Schema$TestExecutionStep;
    /**
     * An execution of a tool (used for steps we don't explicitly support).
     */
    toolExecutionStep?: Schema$ToolExecutionStep;
  }
  export interface Schema$StepDimensionValueEntry {
    key?: string | null;
    value?: string | null;
  }
  export interface Schema$StepLabelsEntry {
    key?: string | null;
    value?: string | null;
  }
  /**
   * Lightweight summary of a step within this execution.
   */
  export interface Schema$StepSummary {}
  /**
   * Details for an outcome with a SUCCESS outcome summary. LINT.IfChange
   */
  export interface Schema$SuccessDetail {
    /**
     * If a native process other than the app crashed.
     */
    otherNativeCrash?: boolean | null;
  }
  /**
   * A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.
   */
  export interface Schema$SuggestionClusterProto {
    /**
     * Category in which these types of suggestions should appear. Always set.
     */
    category?: string | null;
    /**
     * A sequence of suggestions. All of the suggestions within a cluster must have the same SuggestionPriority and belong to the same SuggestionCategory. Suggestions with the same screenshot URL should be adjacent.
     */
    suggestions?: Schema$SuggestionProto[];
  }
  export interface Schema$SuggestionProto {
    /**
     * Reference to a help center article concerning this type of suggestion. Always set.
     */
    helpUrl?: string | null;
    /**
     * Message, in the user's language, explaining the suggestion, which may contain markup. Always set.
     */
    longMessage?: Schema$SafeHtmlProto;
    /**
     * Relative importance of a suggestion. Always set.
     */
    priority?: string | null;
    /**
     * A somewhat human readable identifier of the source view, if it does not have a resource_name. This is a path within the accessibility hierarchy, an element with resource name; similar to an XPath.
     */
    pseudoResourceId?: string | null;
    /**
     * Region within the screenshot that is relevant to this suggestion. Optional.
     */
    region?: Schema$RegionProto;
    /**
     * Reference to a view element, identified by its resource name, if it has one.
     */
    resourceName?: string | null;
    /**
     * ID of the screen for the suggestion. It is used for getting the corresponding screenshot path. For example, screen_id "1" corresponds to "1.png" file in GCS. Always set.
     */
    screenId?: string | null;
    /**
     * Relative importance of a suggestion as compared with other suggestions that have the same priority and category. This is a meaningless value that can be used to order suggestions that are in the same category and have the same priority. The larger values have higher priority (i.e., are more important). Optional.
     */
    secondaryPriority?: number | null;
    /**
     * Concise message, in the user's language, representing the suggestion, which may contain markup. Always set.
     */
    shortMessage?: Schema$SafeHtmlProto;
    /**
     * General title for the suggestion, in the user's language, without markup. Always set.
     */
    title?: string | null;
  }
  export interface Schema$TestCase {
    /**
     * The elapsed run time of the test case. Required.
     */
    elapsedTime?: Schema$Duration;
    /**
     * The end time of the test case.
     */
    endTime?: Schema$Timestamp;
    /**
     * Why the test case was skipped. Present only for skipped test case
     */
    skippedMessage?: string | null;
    /**
     * The stack trace details if the test case failed or encountered an error. The maximum size of the stack traces is 100KiB, beyond which the stack track will be truncated. Zero if the test case passed.
     */
    stackTraces?: Schema$StackTrace[];
    /**
     * The start time of the test case.
     */
    startTime?: Schema$Timestamp;
    /**
     * The status of the test case. Required.
     */
    status?: string | null;
    /**
     * A unique identifier within a Step for this Test Case.
     */
    testCaseId?: string | null;
    /**
     * Test case reference, e.g. name, class name and test suite name. Required.
     */
    testCaseReference?: Schema$TestCaseReference;
    /**
     * References to opaque files of any format output by the tool execution. @OutputOnly
     */
    toolOutputs?: Schema$ToolOutputReference[];
  }
  /**
   * A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.
   */
  export interface Schema$TestCaseReference {
    /**
     * The name of the class.
     */
    className?: string | null;
    /**
     * The name of the test case. Required.
     */
    name?: string | null;
    /**
     * The name of the test suite to which this test case belongs.
     */
    testSuiteName?: string | null;
  }
  /**
   * A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
   */
  export interface Schema$TestExecutionStep {
    /**
     * Issues observed during the test execution. For example, if the mobile app under test crashed during the test, the error message and the stack trace content can be recorded here to assist debugging. - In response: present if set by create or update - In create/update request: optional
     */
    testIssues?: Schema$TestIssue[];
    /**
     * List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded. The maximum allowed number of test suite overviews per step is 1000. - In response: always set - In create request: optional - In update request: never (use publishXunitXmlFiles custom method instead)
     */
    testSuiteOverviews?: Schema$TestSuiteOverview[];
    /**
     * The timing break down of the test execution. - In response: present if set by create or update - In create/update request: optional
     */
    testTiming?: Schema$TestTiming;
    /**
     * Represents the execution of the test runner. The exit code of this tool will be used to determine if the test passed. - In response: always set - In create/update request: optional
     */
    toolExecution?: Schema$ToolExecution;
  }
  /**
   * An issue detected occurring during a test execution.
   */
  export interface Schema$TestIssue {
    /**
     * Category of issue. Required.
     */
    category?: string | null;
    /**
     * A brief human-readable message describing the issue. Required.
     */
    errorMessage?: string | null;
    /**
     * Severity of issue. Required.
     */
    severity?: string | null;
    /**
     * Deprecated in favor of stack trace fields inside specific warnings.
     */
    stackTrace?: Schema$StackTrace;
    /**
     * Type of issue. Required.
     */
    type?: string | null;
    /**
     * Warning message with additional details of the issue. Should always be a message from com.google.devtools.toolresults.v1.warnings
     */
    warning?: Schema$Any;
  }
  /**
   * A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.
   */
  export interface Schema$TestSuiteOverview {
    /**
     * Elapsed time of test suite.
     */
    elapsedTime?: Schema$Duration;
    /**
     * Number of test cases in error, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never
     */
    errorCount?: number | null;
    /**
     * Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user. - In create/response: always set - In update request: never
     */
    failureCount?: number | null;
    /**
     * Number of flaky test cases, set by the service by rolling up flaky test attempts. Present only for rollup test suite overview at environment level. A step cannot have flaky test cases.
     */
    flakyCount?: number | null;
    /**
     * The name of the test suite. - In create/response: always set - In update request: never
     */
    name?: string | null;
    /**
     * Number of test cases not run, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never
     */
    skippedCount?: number | null;
    /**
     * Number of test cases, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never
     */
    totalCount?: number | null;
    /**
     * If this test suite was parsed from XML, this is the URI where the original XML file is stored. Note: Multiple test suites can share the same xml_source Returns INVALID_ARGUMENT if the uri format is not supported. - In create/response: optional - In update request: never
     */
    xmlSource?: Schema$FileReference;
  }
  /**
   * Testing timing break down to know phases.
   */
  export interface Schema$TestTiming {
    /**
     * How long it took to run the test process. - In response: present if previously set. - In create/update request: optional
     */
    testProcessDuration?: Schema$Duration;
  }
  /**
   * A single thumbnail, with its size and format.
   */
  export interface Schema$Thumbnail {
    /**
     * The thumbnail's content type, i.e. "image/png". Always set.
     */
    contentType?: string | null;
    /**
     * The thumbnail file itself. That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.) Always set.
     */
    data?: string | null;
    /**
     * The height of the thumbnail, in pixels. Always set.
     */
    heightPx?: number | null;
    /**
     * The width of the thumbnail, in pixels. Always set.
     */
    widthPx?: number | null;
  }
  /**
   * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
   */
  export interface Schema$Timestamp {
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
     */
    nanos?: number | null;
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     */
    seconds?: string | null;
  }
  /**
   * An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
   */
  export interface Schema$ToolExecution {
    /**
     * The full tokenized command line including the program name (equivalent to argv in a C program). - In response: present if set by create request - In create request: optional - In update request: never set
     */
    commandLineArguments?: string[] | null;
    /**
     * Tool execution exit code. This field will be set once the tool has exited. - In response: present if set by create/update request - In create request: optional - In update request: optional, a FAILED_PRECONDITION error will be returned if an exit_code is already set.
     */
    exitCode?: Schema$ToolExitCode;
    /**
     * References to any plain text logs output the tool execution. This field can be set before the tool has exited in order to be able to have access to a live view of the logs while the tool is running. The maximum allowed number of tool logs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list
     */
    toolLogs?: Schema$FileReference[];
    /**
     * References to opaque files of any format output by the tool execution. The maximum allowed number of tool outputs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list
     */
    toolOutputs?: Schema$ToolOutputReference[];
  }
  /**
   * Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.
   */
  export interface Schema$ToolExecutionStep {
    /**
     * A Tool execution. - In response: present if set by create/update request - In create/update request: optional
     */
    toolExecution?: Schema$ToolExecution;
  }
  /**
   * Exit code from a tool execution.
   */
  export interface Schema$ToolExitCode {
    /**
     * Tool execution exit code. A value of 0 means that the execution was successful. - In response: always set - In create/update request: always set
     */
    number?: number | null;
  }
  /**
   * A reference to a ToolExecution output file.
   */
  export interface Schema$ToolOutputReference {
    /**
     * The creation time of the file. - In response: present if set by create/update request - In create/update request: optional
     */
    creationTime?: Schema$Timestamp;
    /**
     * A FileReference to an output file. - In response: always set - In create/update request: always set
     */
    output?: Schema$FileReference;
    /**
     * The test case to which this output file belongs. - In response: present if set by create/update request - In create/update request: optional
     */
    testCase?: Schema$TestCaseReference;
  }
  /**
   * A warning that the screen hierarchy is deeper than the recommended threshold.
   */
  export interface Schema$UIElementTooDeep {
    /**
     * The depth of the screen element
     */
    depth?: number | null;
    /**
     * The screen id of the element
     */
    screenId?: string | null;
    /**
     * The screen state id of the element
     */
    screenStateId?: string | null;
  }
  /**
   * Default unspecified warning.
   */
  export interface Schema$UnspecifiedWarning {}
  /**
   * Additional details of an unused robodirective.
   */
  export interface Schema$UnusedRoboDirective {
    /**
     * The name of the resource that was unused.
     */
    resourceName?: string | null;
  }
  /**
   * This insight is a recommendation to upgrade a given library to the specified version, in order to avoid dependencies on non-SDK APIs.
   */
  export interface Schema$UpgradeInsight {
    /**
     * The name of the package to be upgraded.
     */
    packageName?: string | null;
    /**
     * The suggested version to upgrade to. Optional: In case we are not sure which version solves this problem
     */
    upgradeToVersion?: string | null;
  }
  /**
   * Additional details of a used Robo directive.
   */
  export interface Schema$UsedRoboDirective {
    /**
     * The name of the resource that was used.
     */
    resourceName?: string | null;
  }
  /**
   * Additional details of a used Robo directive with an ignore action. Note: This is a different scenario than unused directive.
   */
  export interface Schema$UsedRoboIgnoreDirective {
    /**
     * The name of the resource that was ignored.
     */
    resourceName?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    histories: Resource$Projects$Histories;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.histories = new Resource$Projects$Histories(this.context);
    }

    /**
     * Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.getSettings({
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultBucket": "my_defaultBucket",
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
    getSettings(
      params: Params$Resource$Projects$Getsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSettings(
      params?: Params$Resource$Projects$Getsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ProjectSettings>>;
    getSettings(
      params: Params$Resource$Projects$Getsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSettings(
      params: Params$Resource$Projects$Getsettings,
      options: MethodOptions | BodyResponseCallback<Schema$ProjectSettings>,
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    getSettings(
      params: Params$Resource$Projects$Getsettings,
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    getSettings(callback: BodyResponseCallback<Schema$ProjectSettings>): void;
    getSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getsettings
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ProjectSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/toolresults/v1beta3/projects/{projectId}/settings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProjectSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProjectSettings>(parameters);
      }
    }

    /**
     * Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.initializeSettings({
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultBucket": "my_defaultBucket",
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
    initializeSettings(
      params: Params$Resource$Projects$Initializesettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    initializeSettings(
      params?: Params$Resource$Projects$Initializesettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ProjectSettings>>;
    initializeSettings(
      params: Params$Resource$Projects$Initializesettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    initializeSettings(
      params: Params$Resource$Projects$Initializesettings,
      options: MethodOptions | BodyResponseCallback<Schema$ProjectSettings>,
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    initializeSettings(
      params: Params$Resource$Projects$Initializesettings,
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    initializeSettings(
      callback: BodyResponseCallback<Schema$ProjectSettings>
    ): void;
    initializeSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Initializesettings
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProjectSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ProjectSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Initializesettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Initializesettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}:initializeSettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProjectSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProjectSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getsettings
    extends StandardParameters {
    /**
     * A Project id. Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Initializesettings
    extends StandardParameters {
    /**
     * A Project id. Required.
     */
    projectId?: string;
  }

  export class Resource$Projects$Histories {
    context: APIRequestContext;
    executions: Resource$Projects$Histories$Executions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.executions = new Resource$Projects$Histories$Executions(
        this.context
      );
    }

    /**
     * Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.create({
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *     // A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "historyId": "my_historyId",
     *       //   "name": "my_name",
     *       //   "testPlatform": "my_testPlatform"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "historyId": "my_historyId",
     *   //   "name": "my_name",
     *   //   "testPlatform": "my_testPlatform"
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
      params: Params$Resource$Projects$Histories$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Histories$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$History>>;
    create(
      params: Params$Resource$Projects$Histories$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Histories$Create,
      options: MethodOptions | BodyResponseCallback<Schema$History>,
      callback: BodyResponseCallback<Schema$History>
    ): void;
    create(
      params: Params$Resource$Projects$Histories$Create,
      callback: BodyResponseCallback<Schema$History>
    ): void;
    create(callback: BodyResponseCallback<Schema$History>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Create
        | BodyResponseCallback<Schema$History>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$History>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$History>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$History>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Histories$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$History>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$History>(parameters);
      }
    }

    /**
     * Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.get({
     *     // A History id. Required.
     *     historyId: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "historyId": "my_historyId",
     *   //   "name": "my_name",
     *   //   "testPlatform": "my_testPlatform"
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
      params: Params$Resource$Projects$Histories$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Histories$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$History>>;
    get(
      params: Params$Resource$Projects$Histories$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Get,
      options: MethodOptions | BodyResponseCallback<Schema$History>,
      callback: BodyResponseCallback<Schema$History>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Get,
      callback: BodyResponseCallback<Schema$History>
    ): void;
    get(callback: BodyResponseCallback<Schema$History>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Get
        | BodyResponseCallback<Schema$History>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$History>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$History>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$History>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Histories$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId'],
        pathParams: ['historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$History>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$History>(parameters);
      }
    }

    /**
     * Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.list({
     *     // If set, only return histories with the given name. Optional.
     *     filterByName: 'placeholder-value',
     *     // The maximum number of Histories to fetch. Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100. Optional.
     *     pageSize: 'placeholder-value',
     *     // A continuation token to resume the query at the next item. Optional.
     *     pageToken: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "histories": [],
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
      params: Params$Resource$Projects$Histories$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Histories$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListHistoriesResponse>>;
    list(
      params: Params$Resource$Projects$Histories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListHistoriesResponse>,
      callback: BodyResponseCallback<Schema$ListHistoriesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$List,
      callback: BodyResponseCallback<Schema$ListHistoriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListHistoriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$List
        | BodyResponseCallback<Schema$ListHistoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListHistoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListHistoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListHistoriesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Histories$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/toolresults/v1beta3/projects/{projectId}/histories'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListHistoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListHistoriesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Histories$Create
    extends StandardParameters {
    /**
     * A Project id. Required.
     */
    projectId?: string;
    /**
     * A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$History;
  }
  export interface Params$Resource$Projects$Histories$Get
    extends StandardParameters {
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Histories$List
    extends StandardParameters {
    /**
     * If set, only return histories with the given name. Optional.
     */
    filterByName?: string;
    /**
     * The maximum number of Histories to fetch. Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100. Optional.
     */
    pageSize?: number;
    /**
     * A continuation token to resume the query at the next item. Optional.
     */
    pageToken?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
  }

  export class Resource$Projects$Histories$Executions {
    context: APIRequestContext;
    clusters: Resource$Projects$Histories$Executions$Clusters;
    environments: Resource$Projects$Histories$Executions$Environments;
    steps: Resource$Projects$Histories$Executions$Steps;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clusters = new Resource$Projects$Histories$Executions$Clusters(
        this.context
      );
      this.environments =
        new Resource$Projects$Histories$Executions$Environments(this.context);
      this.steps = new Resource$Projects$Histories$Executions$Steps(
        this.context
      );
    }

    /**
     * Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.create({
     *     // A History id. Required.
     *     historyId: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *     // A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "completionTime": {},
     *       //   "creationTime": {},
     *       //   "dimensionDefinitions": [],
     *       //   "executionId": "my_executionId",
     *       //   "outcome": {},
     *       //   "specification": {},
     *       //   "state": "my_state",
     *       //   "testExecutionMatrixId": "my_testExecutionMatrixId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "completionTime": {},
     *   //   "creationTime": {},
     *   //   "dimensionDefinitions": [],
     *   //   "executionId": "my_executionId",
     *   //   "outcome": {},
     *   //   "specification": {},
     *   //   "state": "my_state",
     *   //   "testExecutionMatrixId": "my_testExecutionMatrixId"
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
      params: Params$Resource$Projects$Histories$Executions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Histories$Executions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Execution>>;
    create(
      params: Params$Resource$Projects$Histories$Executions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Histories$Executions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    create(
      params: Params$Resource$Projects$Histories$Executions$Create,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    create(callback: BodyResponseCallback<Schema$Execution>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Create
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Execution>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Histories$Executions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId'],
        pathParams: ['historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.get({
     *     // An Execution id. Required.
     *     executionId: 'placeholder-value',
     *     // A History id. Required.
     *     historyId: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "completionTime": {},
     *   //   "creationTime": {},
     *   //   "dimensionDefinitions": [],
     *   //   "executionId": "my_executionId",
     *   //   "outcome": {},
     *   //   "specification": {},
     *   //   "state": "my_state",
     *   //   "testExecutionMatrixId": "my_testExecutionMatrixId"
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
      params: Params$Resource$Projects$Histories$Executions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Histories$Executions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Execution>>;
    get(
      params: Params$Resource$Projects$Histories$Executions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Get,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(callback: BodyResponseCallback<Schema$Execution>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Get
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Execution>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Histories$Executions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId'],
        pathParams: ['executionId', 'historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.list({
     *     // A History id. Required.
     *     historyId: 'placeholder-value',
     *     // The maximum number of Executions to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
     *     pageSize: 'placeholder-value',
     *     // A continuation token to resume the query at the next item. Optional.
     *     pageToken: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executions": [],
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
      params: Params$Resource$Projects$Histories$Executions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Histories$Executions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListExecutionsResponse>>;
    list(
      params: Params$Resource$Projects$Histories$Executions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$List,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$List
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListExecutionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Histories$Executions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId'],
        pathParams: ['historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListExecutionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExecutionsResponse>(parameters);
      }
    }

    /**
     * Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.patch({
     *     // Required.
     *     executionId: 'placeholder-value',
     *     // Required.
     *     historyId: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *     // A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "completionTime": {},
     *       //   "creationTime": {},
     *       //   "dimensionDefinitions": [],
     *       //   "executionId": "my_executionId",
     *       //   "outcome": {},
     *       //   "specification": {},
     *       //   "state": "my_state",
     *       //   "testExecutionMatrixId": "my_testExecutionMatrixId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "completionTime": {},
     *   //   "creationTime": {},
     *   //   "dimensionDefinitions": [],
     *   //   "executionId": "my_executionId",
     *   //   "outcome": {},
     *   //   "specification": {},
     *   //   "state": "my_state",
     *   //   "testExecutionMatrixId": "my_testExecutionMatrixId"
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
      params: Params$Resource$Projects$Histories$Executions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Histories$Executions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Execution>>;
    patch(
      params: Params$Resource$Projects$Histories$Executions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Histories$Executions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    patch(
      params: Params$Resource$Projects$Histories$Executions$Patch,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Execution>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Patch
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Execution>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Histories$Executions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId'],
        pathParams: ['executionId', 'historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Histories$Executions$Create
    extends StandardParameters {
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
    /**
     * A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Execution;
  }
  export interface Params$Resource$Projects$Histories$Executions$Get
    extends StandardParameters {
    /**
     * An Execution id. Required.
     */
    executionId?: string;
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Histories$Executions$List
    extends StandardParameters {
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * The maximum number of Executions to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
     */
    pageSize?: number;
    /**
     * A continuation token to resume the query at the next item. Optional.
     */
    pageToken?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Histories$Executions$Patch
    extends StandardParameters {
    /**
     * Required.
     */
    executionId?: string;
    /**
     * Required.
     */
    historyId?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
    /**
     * A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Execution;
  }

  export class Resource$Projects$Histories$Executions$Clusters {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a single screenshot cluster by its ID
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.clusters.get({
     *     // A Cluster id Required.
     *     clusterId: 'placeholder-value',
     *     // An Execution id. Required.
     *     executionId: 'placeholder-value',
     *     // A History id. Required.
     *     historyId: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activity": "my_activity",
     *   //   "clusterId": "my_clusterId",
     *   //   "keyScreen": {},
     *   //   "screens": []
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
      params: Params$Resource$Projects$Histories$Executions$Clusters$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Histories$Executions$Clusters$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ScreenshotCluster>>;
    get(
      params: Params$Resource$Projects$Histories$Executions$Clusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Clusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ScreenshotCluster>,
      callback: BodyResponseCallback<Schema$ScreenshotCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Clusters$Get,
      callback: BodyResponseCallback<Schema$ScreenshotCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$ScreenshotCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Clusters$Get
        | BodyResponseCallback<Schema$ScreenshotCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ScreenshotCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ScreenshotCluster>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ScreenshotCluster>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Clusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Clusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId', 'clusterId'],
        pathParams: ['clusterId', 'executionId', 'historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ScreenshotCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ScreenshotCluster>(parameters);
      }
    }

    /**
     * Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.clusters.list({
     *     // An Execution id. Required.
     *     executionId: 'placeholder-value',
     *     // A History id. Required.
     *     historyId: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusters": []
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
      params: Params$Resource$Projects$Histories$Executions$Clusters$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Histories$Executions$Clusters$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListScreenshotClustersResponse>>;
    list(
      params: Params$Resource$Projects$Histories$Executions$Clusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Clusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScreenshotClustersResponse>,
      callback: BodyResponseCallback<Schema$ListScreenshotClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Clusters$List,
      callback: BodyResponseCallback<Schema$ListScreenshotClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListScreenshotClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Clusters$List
        | BodyResponseCallback<Schema$ListScreenshotClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListScreenshotClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListScreenshotClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListScreenshotClustersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Clusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Clusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId'],
        pathParams: ['executionId', 'historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListScreenshotClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListScreenshotClustersResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Histories$Executions$Clusters$Get
    extends StandardParameters {
    /**
     * A Cluster id Required.
     */
    clusterId?: string;
    /**
     * An Execution id. Required.
     */
    executionId?: string;
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Histories$Executions$Clusters$List
    extends StandardParameters {
    /**
     * An Execution id. Required.
     */
    executionId?: string;
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
  }

  export class Resource$Projects$Histories$Executions$Environments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.environments.get({
     *     // Required. An Environment id.
     *     environmentId: 'placeholder-value',
     *     // Required. An Execution id.
     *     executionId: 'placeholder-value',
     *     // Required. A History id.
     *     historyId: 'placeholder-value',
     *     // Required. A Project id.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "completionTime": {},
     *   //   "creationTime": {},
     *   //   "dimensionValue": [],
     *   //   "displayName": "my_displayName",
     *   //   "environmentId": "my_environmentId",
     *   //   "environmentResult": {},
     *   //   "executionId": "my_executionId",
     *   //   "historyId": "my_historyId",
     *   //   "projectId": "my_projectId",
     *   //   "resultsStorage": {},
     *   //   "shardSummaries": []
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
      params: Params$Resource$Projects$Histories$Executions$Environments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Histories$Executions$Environments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Environment>>;
    get(
      params: Params$Resource$Projects$Histories$Executions$Environments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Environments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Environment>,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Environments$Get,
      callback: BodyResponseCallback<Schema$Environment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Environment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Environments$Get
        | BodyResponseCallback<Schema$Environment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Environment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Environment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Environment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Environments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Environments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments/{environmentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [
          'projectId',
          'historyId',
          'executionId',
          'environmentId',
        ],
        pathParams: ['environmentId', 'executionId', 'historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Environment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Environment>(parameters);
      }
    }

    /**
     * Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.environments.list(
     *     {
     *       // Required. An Execution id.
     *       executionId: 'placeholder-value',
     *       // Required. A History id.
     *       historyId: 'placeholder-value',
     *       // The maximum number of Environments to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0.
     *       pageSize: 'placeholder-value',
     *       // A continuation token to resume the query at the next item.
     *       pageToken: 'placeholder-value',
     *       // Required. A Project id.
     *       projectId: 'placeholder-value',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "environments": [],
     *   //   "executionId": "my_executionId",
     *   //   "historyId": "my_historyId",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "projectId": "my_projectId"
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
      params: Params$Resource$Projects$Histories$Executions$Environments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Histories$Executions$Environments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEnvironmentsResponse>>;
    list(
      params: Params$Resource$Projects$Histories$Executions$Environments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Environments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>,
      callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Environments$List,
      callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Environments$List
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEnvironmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Environments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Environments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId'],
        pathParams: ['executionId', 'historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListEnvironmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEnvironmentsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Histories$Executions$Environments$Get
    extends StandardParameters {
    /**
     * Required. An Environment id.
     */
    environmentId?: string;
    /**
     * Required. An Execution id.
     */
    executionId?: string;
    /**
     * Required. A History id.
     */
    historyId?: string;
    /**
     * Required. A Project id.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Histories$Executions$Environments$List
    extends StandardParameters {
    /**
     * Required. An Execution id.
     */
    executionId?: string;
    /**
     * Required. A History id.
     */
    historyId?: string;
    /**
     * The maximum number of Environments to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0.
     */
    pageSize?: number;
    /**
     * A continuation token to resume the query at the next item.
     */
    pageToken?: string;
    /**
     * Required. A Project id.
     */
    projectId?: string;
  }

  export class Resource$Projects$Histories$Executions$Steps {
    context: APIRequestContext;
    perfMetricsSummary: Resource$Projects$Histories$Executions$Steps$Perfmetricssummary;
    perfSampleSeries: Resource$Projects$Histories$Executions$Steps$Perfsampleseries;
    testCases: Resource$Projects$Histories$Executions$Steps$Testcases;
    thumbnails: Resource$Projects$Histories$Executions$Steps$Thumbnails;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.perfMetricsSummary =
        new Resource$Projects$Histories$Executions$Steps$Perfmetricssummary(
          this.context
        );
      this.perfSampleSeries =
        new Resource$Projects$Histories$Executions$Steps$Perfsampleseries(
          this.context
        );
      this.testCases =
        new Resource$Projects$Histories$Executions$Steps$Testcases(
          this.context
        );
      this.thumbnails =
        new Resource$Projects$Histories$Executions$Steps$Thumbnails(
          this.context
        );
    }

    /**
     * Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.accessibilityClusters(
     *       {
     *         // The accepted format is the canonical Unicode format with hyphen as a delimiter. Language must be lowercase, Language Script - Capitalized, Region - UPPERCASE. See http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for details. Required.
     *         locale: 'placeholder-value',
     *         // A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Required.
     *         name: 'projects/my-project/histories/my-historie/executions/my-execution/steps/my-step',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusters": [],
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
    accessibilityClusters(
      params: Params$Resource$Projects$Histories$Executions$Steps$Accessibilityclusters,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    accessibilityClusters(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Accessibilityclusters,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListStepAccessibilityClustersResponse>
    >;
    accessibilityClusters(
      params: Params$Resource$Projects$Histories$Executions$Steps$Accessibilityclusters,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    accessibilityClusters(
      params: Params$Resource$Projects$Histories$Executions$Steps$Accessibilityclusters,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListStepAccessibilityClustersResponse>,
      callback: BodyResponseCallback<Schema$ListStepAccessibilityClustersResponse>
    ): void;
    accessibilityClusters(
      params: Params$Resource$Projects$Histories$Executions$Steps$Accessibilityclusters,
      callback: BodyResponseCallback<Schema$ListStepAccessibilityClustersResponse>
    ): void;
    accessibilityClusters(
      callback: BodyResponseCallback<Schema$ListStepAccessibilityClustersResponse>
    ): void;
    accessibilityClusters(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Accessibilityclusters
        | BodyResponseCallback<Schema$ListStepAccessibilityClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListStepAccessibilityClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListStepAccessibilityClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListStepAccessibilityClustersResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Accessibilityclusters;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Accessibilityclusters;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/toolresults/v1beta3/{+name}:accessibilityClusters'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListStepAccessibilityClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListStepAccessibilityClustersResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.steps.create({
     *     // Required. An Execution id.
     *     executionId: 'placeholder-value',
     *     // Required. A History id.
     *     historyId: 'placeholder-value',
     *     // Required. A Project id.
     *     projectId: 'placeholder-value',
     *     // A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "completionTime": {},
     *       //   "creationTime": {},
     *       //   "description": "my_description",
     *       //   "deviceUsageDuration": {},
     *       //   "dimensionValue": [],
     *       //   "hasImages": false,
     *       //   "labels": [],
     *       //   "multiStep": {},
     *       //   "name": "my_name",
     *       //   "outcome": {},
     *       //   "runDuration": {},
     *       //   "state": "my_state",
     *       //   "stepId": "my_stepId",
     *       //   "testExecutionStep": {},
     *       //   "toolExecutionStep": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "completionTime": {},
     *   //   "creationTime": {},
     *   //   "description": "my_description",
     *   //   "deviceUsageDuration": {},
     *   //   "dimensionValue": [],
     *   //   "hasImages": false,
     *   //   "labels": [],
     *   //   "multiStep": {},
     *   //   "name": "my_name",
     *   //   "outcome": {},
     *   //   "runDuration": {},
     *   //   "state": "my_state",
     *   //   "stepId": "my_stepId",
     *   //   "testExecutionStep": {},
     *   //   "toolExecutionStep": {}
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Step>>;
    create(
      params: Params$Resource$Projects$Histories$Executions$Steps$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Histories$Executions$Steps$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Step>,
      callback: BodyResponseCallback<Schema$Step>
    ): void;
    create(
      params: Params$Resource$Projects$Histories$Executions$Steps$Create,
      callback: BodyResponseCallback<Schema$Step>
    ): void;
    create(callback: BodyResponseCallback<Schema$Step>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Create
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Step>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId'],
        pathParams: ['executionId', 'historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Step>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Step>(parameters);
      }
    }

    /**
     * Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.steps.get({
     *     // A Execution id. Required.
     *     executionId: 'placeholder-value',
     *     // A History id. Required.
     *     historyId: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *     // A Step id. Required.
     *     stepId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "completionTime": {},
     *   //   "creationTime": {},
     *   //   "description": "my_description",
     *   //   "deviceUsageDuration": {},
     *   //   "dimensionValue": [],
     *   //   "hasImages": false,
     *   //   "labels": [],
     *   //   "multiStep": {},
     *   //   "name": "my_name",
     *   //   "outcome": {},
     *   //   "runDuration": {},
     *   //   "state": "my_state",
     *   //   "stepId": "my_stepId",
     *   //   "testExecutionStep": {},
     *   //   "toolExecutionStep": {}
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Step>>;
    get(
      params: Params$Resource$Projects$Histories$Executions$Steps$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Steps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Step>,
      callback: BodyResponseCallback<Schema$Step>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Steps$Get,
      callback: BodyResponseCallback<Schema$Step>
    ): void;
    get(callback: BodyResponseCallback<Schema$Step>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Get
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Step>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Histories$Executions$Steps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
        pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Step>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Step>(parameters);
      }
    }

    /**
     * Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.getPerfMetricsSummary(
     *       {
     *         // A tool results execution ID.
     *         executionId: 'placeholder-value',
     *         // A tool results history ID.
     *         historyId: 'placeholder-value',
     *         // The cloud project
     *         projectId: 'placeholder-value',
     *         // A tool results step ID.
     *         stepId: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appStartTime": {},
     *   //   "executionId": "my_executionId",
     *   //   "graphicsStats": {},
     *   //   "historyId": "my_historyId",
     *   //   "perfEnvironment": {},
     *   //   "perfMetrics": [],
     *   //   "projectId": "my_projectId",
     *   //   "stepId": "my_stepId"
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
    getPerfMetricsSummary(
      params: Params$Resource$Projects$Histories$Executions$Steps$Getperfmetricssummary,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getPerfMetricsSummary(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Getperfmetricssummary,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PerfMetricsSummary>>;
    getPerfMetricsSummary(
      params: Params$Resource$Projects$Histories$Executions$Steps$Getperfmetricssummary,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getPerfMetricsSummary(
      params: Params$Resource$Projects$Histories$Executions$Steps$Getperfmetricssummary,
      options: MethodOptions | BodyResponseCallback<Schema$PerfMetricsSummary>,
      callback: BodyResponseCallback<Schema$PerfMetricsSummary>
    ): void;
    getPerfMetricsSummary(
      params: Params$Resource$Projects$Histories$Executions$Steps$Getperfmetricssummary,
      callback: BodyResponseCallback<Schema$PerfMetricsSummary>
    ): void;
    getPerfMetricsSummary(
      callback: BodyResponseCallback<Schema$PerfMetricsSummary>
    ): void;
    getPerfMetricsSummary(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Getperfmetricssummary
        | BodyResponseCallback<Schema$PerfMetricsSummary>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PerfMetricsSummary>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PerfMetricsSummary>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PerfMetricsSummary>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Getperfmetricssummary;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Getperfmetricssummary;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
        pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PerfMetricsSummary>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PerfMetricsSummary>(parameters);
      }
    }

    /**
     * Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.steps.list({
     *     // A Execution id. Required.
     *     executionId: 'placeholder-value',
     *     // A History id. Required.
     *     historyId: 'placeholder-value',
     *     // The maximum number of Steps to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
     *     pageSize: 'placeholder-value',
     *     // A continuation token to resume the query at the next item. Optional.
     *     pageToken: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "steps": []
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
      params: Params$Resource$Projects$Histories$Executions$Steps$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Histories$Executions$Steps$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListStepsResponse>>;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListStepsResponse>,
      callback: BodyResponseCallback<Schema$ListStepsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$List,
      callback: BodyResponseCallback<Schema$ListStepsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListStepsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$List
        | BodyResponseCallback<Schema$ListStepsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListStepsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListStepsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListStepsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Histories$Executions$Steps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId'],
        pathParams: ['executionId', 'historyId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListStepsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListStepsResponse>(parameters);
      }
    }

    /**
     * Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *   const res = await toolresults.projects.histories.executions.steps.patch({
     *     // A Execution id. Required.
     *     executionId: 'placeholder-value',
     *     // A History id. Required.
     *     historyId: 'placeholder-value',
     *     // A Project id. Required.
     *     projectId: 'placeholder-value',
     *     // A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     *     requestId: 'placeholder-value',
     *     // A Step id. Required.
     *     stepId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "completionTime": {},
     *       //   "creationTime": {},
     *       //   "description": "my_description",
     *       //   "deviceUsageDuration": {},
     *       //   "dimensionValue": [],
     *       //   "hasImages": false,
     *       //   "labels": [],
     *       //   "multiStep": {},
     *       //   "name": "my_name",
     *       //   "outcome": {},
     *       //   "runDuration": {},
     *       //   "state": "my_state",
     *       //   "stepId": "my_stepId",
     *       //   "testExecutionStep": {},
     *       //   "toolExecutionStep": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "completionTime": {},
     *   //   "creationTime": {},
     *   //   "description": "my_description",
     *   //   "deviceUsageDuration": {},
     *   //   "dimensionValue": [],
     *   //   "hasImages": false,
     *   //   "labels": [],
     *   //   "multiStep": {},
     *   //   "name": "my_name",
     *   //   "outcome": {},
     *   //   "runDuration": {},
     *   //   "state": "my_state",
     *   //   "stepId": "my_stepId",
     *   //   "testExecutionStep": {},
     *   //   "toolExecutionStep": {}
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Step>>;
    patch(
      params: Params$Resource$Projects$Histories$Executions$Steps$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Histories$Executions$Steps$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Step>,
      callback: BodyResponseCallback<Schema$Step>
    ): void;
    patch(
      params: Params$Resource$Projects$Histories$Executions$Steps$Patch,
      callback: BodyResponseCallback<Schema$Step>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Step>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Patch
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Step>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
        pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Step>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Step>(parameters);
      }
    }

    /**
     * Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.publishXunitXmlFiles({
     *       // A Execution id. Required.
     *       executionId: 'placeholder-value',
     *       // A History id. Required.
     *       historyId: 'placeholder-value',
     *       // A Project id. Required.
     *       projectId: 'placeholder-value',
     *       // A Step id. Note: This step must include a TestExecutionStep. Required.
     *       stepId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "xunitXmlFiles": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "completionTime": {},
     *   //   "creationTime": {},
     *   //   "description": "my_description",
     *   //   "deviceUsageDuration": {},
     *   //   "dimensionValue": [],
     *   //   "hasImages": false,
     *   //   "labels": [],
     *   //   "multiStep": {},
     *   //   "name": "my_name",
     *   //   "outcome": {},
     *   //   "runDuration": {},
     *   //   "state": "my_state",
     *   //   "stepId": "my_stepId",
     *   //   "testExecutionStep": {},
     *   //   "toolExecutionStep": {}
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
    publishXunitXmlFiles(
      params: Params$Resource$Projects$Histories$Executions$Steps$Publishxunitxmlfiles,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    publishXunitXmlFiles(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Publishxunitxmlfiles,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Step>>;
    publishXunitXmlFiles(
      params: Params$Resource$Projects$Histories$Executions$Steps$Publishxunitxmlfiles,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    publishXunitXmlFiles(
      params: Params$Resource$Projects$Histories$Executions$Steps$Publishxunitxmlfiles,
      options: MethodOptions | BodyResponseCallback<Schema$Step>,
      callback: BodyResponseCallback<Schema$Step>
    ): void;
    publishXunitXmlFiles(
      params: Params$Resource$Projects$Histories$Executions$Steps$Publishxunitxmlfiles,
      callback: BodyResponseCallback<Schema$Step>
    ): void;
    publishXunitXmlFiles(callback: BodyResponseCallback<Schema$Step>): void;
    publishXunitXmlFiles(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Publishxunitxmlfiles
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Step>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Step>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Publishxunitxmlfiles;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Publishxunitxmlfiles;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
        pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Step>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Step>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Histories$Executions$Steps$Accessibilityclusters
    extends StandardParameters {
    /**
     * The accepted format is the canonical Unicode format with hyphen as a delimiter. Language must be lowercase, Language Script - Capitalized, Region - UPPERCASE. See http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for details. Required.
     */
    locale?: string;
    /**
     * A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Required.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Histories$Executions$Steps$Create
    extends StandardParameters {
    /**
     * Required. An Execution id.
     */
    executionId?: string;
    /**
     * Required. A History id.
     */
    historyId?: string;
    /**
     * Required. A Project id.
     */
    projectId?: string;
    /**
     * A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Step;
  }
  export interface Params$Resource$Projects$Histories$Executions$Steps$Get
    extends StandardParameters {
    /**
     * A Execution id. Required.
     */
    executionId?: string;
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
    /**
     * A Step id. Required.
     */
    stepId?: string;
  }
  export interface Params$Resource$Projects$Histories$Executions$Steps$Getperfmetricssummary
    extends StandardParameters {
    /**
     * A tool results execution ID.
     */
    executionId?: string;
    /**
     * A tool results history ID.
     */
    historyId?: string;
    /**
     * The cloud project
     */
    projectId?: string;
    /**
     * A tool results step ID.
     */
    stepId?: string;
  }
  export interface Params$Resource$Projects$Histories$Executions$Steps$List
    extends StandardParameters {
    /**
     * A Execution id. Required.
     */
    executionId?: string;
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * The maximum number of Steps to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
     */
    pageSize?: number;
    /**
     * A continuation token to resume the query at the next item. Optional.
     */
    pageToken?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Histories$Executions$Steps$Patch
    extends StandardParameters {
    /**
     * A Execution id. Required.
     */
    executionId?: string;
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
    /**
     * A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     */
    requestId?: string;
    /**
     * A Step id. Required.
     */
    stepId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Step;
  }
  export interface Params$Resource$Projects$Histories$Executions$Steps$Publishxunitxmlfiles
    extends StandardParameters {
    /**
     * A Execution id. Required.
     */
    executionId?: string;
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
    /**
     * A Step id. Note: This step must include a TestExecutionStep. Required.
     */
    stepId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PublishXunitXmlFilesRequest;
  }

  export class Resource$Projects$Histories$Executions$Steps$Perfmetricssummary {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.perfMetricsSummary.create(
     *       {
     *         // A tool results execution ID.
     *         executionId: 'placeholder-value',
     *         // A tool results history ID.
     *         historyId: 'placeholder-value',
     *         // The cloud project
     *         projectId: 'placeholder-value',
     *         // A tool results step ID.
     *         stepId: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "appStartTime": {},
     *           //   "executionId": "my_executionId",
     *           //   "graphicsStats": {},
     *           //   "historyId": "my_historyId",
     *           //   "perfEnvironment": {},
     *           //   "perfMetrics": [],
     *           //   "projectId": "my_projectId",
     *           //   "stepId": "my_stepId"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appStartTime": {},
     *   //   "executionId": "my_executionId",
     *   //   "graphicsStats": {},
     *   //   "historyId": "my_historyId",
     *   //   "perfEnvironment": {},
     *   //   "perfMetrics": [],
     *   //   "projectId": "my_projectId",
     *   //   "stepId": "my_stepId"
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfmetricssummary$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Perfmetricssummary$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PerfMetricsSummary>>;
    create(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfmetricssummary$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfmetricssummary$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PerfMetricsSummary>,
      callback: BodyResponseCallback<Schema$PerfMetricsSummary>
    ): void;
    create(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfmetricssummary$Create,
      callback: BodyResponseCallback<Schema$PerfMetricsSummary>
    ): void;
    create(callback: BodyResponseCallback<Schema$PerfMetricsSummary>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Perfmetricssummary$Create
        | BodyResponseCallback<Schema$PerfMetricsSummary>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PerfMetricsSummary>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PerfMetricsSummary>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PerfMetricsSummary>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Perfmetricssummary$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Perfmetricssummary$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
        pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PerfMetricsSummary>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PerfMetricsSummary>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Histories$Executions$Steps$Perfmetricssummary$Create
    extends StandardParameters {
    /**
     * A tool results execution ID.
     */
    executionId?: string;
    /**
     * A tool results history ID.
     */
    historyId?: string;
    /**
     * The cloud project
     */
    projectId?: string;
    /**
     * A tool results step ID.
     */
    stepId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PerfMetricsSummary;
  }

  export class Resource$Projects$Histories$Executions$Steps$Perfsampleseries {
    context: APIRequestContext;
    samples: Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.samples =
        new Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples(
          this.context
        );
    }

    /**
     * Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.perfSampleSeries.create(
     *       {
     *         // A tool results execution ID.
     *         executionId: 'placeholder-value',
     *         // A tool results history ID.
     *         historyId: 'placeholder-value',
     *         // The cloud project
     *         projectId: 'placeholder-value',
     *         // A tool results step ID.
     *         stepId: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "basicPerfSampleSeries": {},
     *           //   "executionId": "my_executionId",
     *           //   "historyId": "my_historyId",
     *           //   "projectId": "my_projectId",
     *           //   "sampleSeriesId": "my_sampleSeriesId",
     *           //   "stepId": "my_stepId"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "basicPerfSampleSeries": {},
     *   //   "executionId": "my_executionId",
     *   //   "historyId": "my_historyId",
     *   //   "projectId": "my_projectId",
     *   //   "sampleSeriesId": "my_sampleSeriesId",
     *   //   "stepId": "my_stepId"
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PerfSampleSeries>>;
    create(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PerfSampleSeries>,
      callback: BodyResponseCallback<Schema$PerfSampleSeries>
    ): void;
    create(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Create,
      callback: BodyResponseCallback<Schema$PerfSampleSeries>
    ): void;
    create(callback: BodyResponseCallback<Schema$PerfSampleSeries>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Create
        | BodyResponseCallback<Schema$PerfSampleSeries>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PerfSampleSeries>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PerfSampleSeries>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PerfSampleSeries>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
        pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PerfSampleSeries>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PerfSampleSeries>(parameters);
      }
    }

    /**
     * Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.perfSampleSeries.get({
     *       // A tool results execution ID.
     *       executionId: 'placeholder-value',
     *       // A tool results history ID.
     *       historyId: 'placeholder-value',
     *       // The cloud project
     *       projectId: 'placeholder-value',
     *       // A sample series id
     *       sampleSeriesId: 'placeholder-value',
     *       // A tool results step ID.
     *       stepId: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "basicPerfSampleSeries": {},
     *   //   "executionId": "my_executionId",
     *   //   "historyId": "my_historyId",
     *   //   "projectId": "my_projectId",
     *   //   "sampleSeriesId": "my_sampleSeriesId",
     *   //   "stepId": "my_stepId"
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PerfSampleSeries>>;
    get(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PerfSampleSeries>,
      callback: BodyResponseCallback<Schema$PerfSampleSeries>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Get,
      callback: BodyResponseCallback<Schema$PerfSampleSeries>
    ): void;
    get(callback: BodyResponseCallback<Schema$PerfSampleSeries>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Get
        | BodyResponseCallback<Schema$PerfSampleSeries>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PerfSampleSeries>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PerfSampleSeries>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PerfSampleSeries>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [
          'projectId',
          'historyId',
          'executionId',
          'stepId',
          'sampleSeriesId',
        ],
        pathParams: [
          'executionId',
          'historyId',
          'projectId',
          'sampleSeriesId',
          'stepId',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PerfSampleSeries>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PerfSampleSeries>(parameters);
      }
    }

    /**
     * Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.perfSampleSeries.list(
     *       {
     *         // A tool results execution ID.
     *         executionId: 'placeholder-value',
     *         // Specify one or more PerfMetricType values such as CPU to filter the result
     *         filter: 'placeholder-value',
     *         // A tool results history ID.
     *         historyId: 'placeholder-value',
     *         // The cloud project
     *         projectId: 'placeholder-value',
     *         // A tool results step ID.
     *         stepId: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "perfSampleSeries": []
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPerfSampleSeriesResponse>>;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>,
      callback: BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$List,
      callback: BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$List
        | BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPerfSampleSeriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPerfSampleSeriesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
        pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPerfSampleSeriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPerfSampleSeriesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Create
    extends StandardParameters {
    /**
     * A tool results execution ID.
     */
    executionId?: string;
    /**
     * A tool results history ID.
     */
    historyId?: string;
    /**
     * The cloud project
     */
    projectId?: string;
    /**
     * A tool results step ID.
     */
    stepId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PerfSampleSeries;
  }
  export interface Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Get
    extends StandardParameters {
    /**
     * A tool results execution ID.
     */
    executionId?: string;
    /**
     * A tool results history ID.
     */
    historyId?: string;
    /**
     * The cloud project
     */
    projectId?: string;
    /**
     * A sample series id
     */
    sampleSeriesId?: string;
    /**
     * A tool results step ID.
     */
    stepId?: string;
  }
  export interface Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$List
    extends StandardParameters {
    /**
     * A tool results execution ID.
     */
    executionId?: string;
    /**
     * Specify one or more PerfMetricType values such as CPU to filter the result
     */
    filter?: string[];
    /**
     * A tool results history ID.
     */
    historyId?: string;
    /**
     * The cloud project
     */
    projectId?: string;
    /**
     * A tool results step ID.
     */
    stepId?: string;
  }

  export class Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate(
     *       {
     *         // A tool results execution ID.
     *         executionId: 'placeholder-value',
     *         // A tool results history ID.
     *         historyId: 'placeholder-value',
     *         // The cloud project
     *         projectId: 'placeholder-value',
     *         // A sample series id
     *         sampleSeriesId: 'placeholder-value',
     *         // A tool results step ID.
     *         stepId: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "perfSamples": []
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "perfSamples": []
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
    batchCreate(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$Batchcreate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchCreate(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$Batchcreate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchCreatePerfSamplesResponse>>;
    batchCreate(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>,
      callback: BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$Batchcreate
        | BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreatePerfSamplesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchCreatePerfSamplesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [
          'projectId',
          'historyId',
          'executionId',
          'stepId',
          'sampleSeriesId',
        ],
        pathParams: [
          'executionId',
          'historyId',
          'projectId',
          'sampleSeriesId',
          'stepId',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchCreatePerfSamplesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreatePerfSamplesResponse>(
          parameters
        );
      }
    }

    /**
     * Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list(
     *       {
     *         // A tool results execution ID.
     *         executionId: 'placeholder-value',
     *         // A tool results history ID.
     *         historyId: 'placeholder-value',
     *         // The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
     *         pageSize: 'placeholder-value',
     *         // Optional, the next_page_token returned in the previous response
     *         pageToken: 'placeholder-value',
     *         // The cloud project
     *         projectId: 'placeholder-value',
     *         // A sample series id
     *         sampleSeriesId: 'placeholder-value',
     *         // A tool results step ID.
     *         stepId: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "perfSamples": []
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPerfSamplesResponse>>;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPerfSamplesResponse>,
      callback: BodyResponseCallback<Schema$ListPerfSamplesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$List,
      callback: BodyResponseCallback<Schema$ListPerfSamplesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPerfSamplesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$List
        | BodyResponseCallback<Schema$ListPerfSamplesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPerfSamplesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPerfSamplesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPerfSamplesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [
          'projectId',
          'historyId',
          'executionId',
          'stepId',
          'sampleSeriesId',
        ],
        pathParams: [
          'executionId',
          'historyId',
          'projectId',
          'sampleSeriesId',
          'stepId',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPerfSamplesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPerfSamplesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$Batchcreate
    extends StandardParameters {
    /**
     * A tool results execution ID.
     */
    executionId?: string;
    /**
     * A tool results history ID.
     */
    historyId?: string;
    /**
     * The cloud project
     */
    projectId?: string;
    /**
     * A sample series id
     */
    sampleSeriesId?: string;
    /**
     * A tool results step ID.
     */
    stepId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreatePerfSamplesRequest;
  }
  export interface Params$Resource$Projects$Histories$Executions$Steps$Perfsampleseries$Samples$List
    extends StandardParameters {
    /**
     * A tool results execution ID.
     */
    executionId?: string;
    /**
     * A tool results history ID.
     */
    historyId?: string;
    /**
     * The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
     */
    pageSize?: number;
    /**
     * Optional, the next_page_token returned in the previous response
     */
    pageToken?: string;
    /**
     * The cloud project
     */
    projectId?: string;
    /**
     * A sample series id
     */
    sampleSeriesId?: string;
    /**
     * A tool results step ID.
     */
    stepId?: string;
  }

  export class Resource$Projects$Histories$Executions$Steps$Testcases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.testCases.get({
     *       // A Execution id Required.
     *       executionId: 'placeholder-value',
     *       // A History id. Required.
     *       historyId: 'placeholder-value',
     *       // A Project id. Required.
     *       projectId: 'placeholder-value',
     *       // A Step id. Note: This step must include a TestExecutionStep. Required.
     *       stepId: 'placeholder-value',
     *       // A Test Case id. Required.
     *       testCaseId: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "elapsedTime": {},
     *   //   "endTime": {},
     *   //   "skippedMessage": "my_skippedMessage",
     *   //   "stackTraces": [],
     *   //   "startTime": {},
     *   //   "status": "my_status",
     *   //   "testCaseId": "my_testCaseId",
     *   //   "testCaseReference": {},
     *   //   "toolOutputs": []
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Testcases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Testcases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestCase>>;
    get(
      params: Params$Resource$Projects$Histories$Executions$Steps$Testcases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Steps$Testcases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TestCase>,
      callback: BodyResponseCallback<Schema$TestCase>
    ): void;
    get(
      params: Params$Resource$Projects$Histories$Executions$Steps$Testcases$Get,
      callback: BodyResponseCallback<Schema$TestCase>
    ): void;
    get(callback: BodyResponseCallback<Schema$TestCase>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Testcases$Get
        | BodyResponseCallback<Schema$TestCase>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestCase>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestCase>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TestCase>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Testcases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Testcases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases/{testCaseId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [
          'projectId',
          'historyId',
          'executionId',
          'stepId',
          'testCaseId',
        ],
        pathParams: [
          'executionId',
          'historyId',
          'projectId',
          'stepId',
          'testCaseId',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestCase>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestCase>(parameters);
      }
    }

    /**
     * Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.testCases.list({
     *       // A Execution id Required.
     *       executionId: 'placeholder-value',
     *       // A History id. Required.
     *       historyId: 'placeholder-value',
     *       // The maximum number of TestCases to fetch. Default value: 100. The server will use this default if the field is not set or has a value of 0. Optional.
     *       pageSize: 'placeholder-value',
     *       // A continuation token to resume the query at the next item. Optional.
     *       pageToken: 'placeholder-value',
     *       // A Project id. Required.
     *       projectId: 'placeholder-value',
     *       // A Step id. Note: This step must include a TestExecutionStep. Required.
     *       stepId: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "testCases": []
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Testcases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Testcases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListTestCasesResponse>>;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Testcases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Testcases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTestCasesResponse>,
      callback: BodyResponseCallback<Schema$ListTestCasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Testcases$List,
      callback: BodyResponseCallback<Schema$ListTestCasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTestCasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Testcases$List
        | BodyResponseCallback<Schema$ListTestCasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTestCasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTestCasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListTestCasesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Testcases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Testcases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
        pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTestCasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTestCasesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Histories$Executions$Steps$Testcases$Get
    extends StandardParameters {
    /**
     * A Execution id Required.
     */
    executionId?: string;
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
    /**
     * A Step id. Note: This step must include a TestExecutionStep. Required.
     */
    stepId?: string;
    /**
     * A Test Case id. Required.
     */
    testCaseId?: string;
  }
  export interface Params$Resource$Projects$Histories$Executions$Steps$Testcases$List
    extends StandardParameters {
    /**
     * A Execution id Required.
     */
    executionId?: string;
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * The maximum number of TestCases to fetch. Default value: 100. The server will use this default if the field is not set or has a value of 0. Optional.
     */
    pageSize?: number;
    /**
     * A continuation token to resume the query at the next item. Optional.
     */
    pageToken?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
    /**
     * A Step id. Note: This step must include a TestExecutionStep. Required.
     */
    stepId?: string;
  }

  export class Resource$Projects$Histories$Executions$Steps$Thumbnails {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/toolresults.googleapis.com
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
     * const toolresults = google.toolresults('v1beta3');
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
     *     await toolresults.projects.histories.executions.steps.thumbnails.list({
     *       // An Execution id. Required.
     *       executionId: 'placeholder-value',
     *       // A History id. Required.
     *       historyId: 'placeholder-value',
     *       // The maximum number of thumbnails to fetch. Default value: 50. The server will use this default if the field is not set or has a value of 0. Optional.
     *       pageSize: 'placeholder-value',
     *       // A continuation token to resume the query at the next item. Optional.
     *       pageToken: 'placeholder-value',
     *       // A Project id. Required.
     *       projectId: 'placeholder-value',
     *       // A Step id. Required.
     *       stepId: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "thumbnails": []
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
      params: Params$Resource$Projects$Histories$Executions$Steps$Thumbnails$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Histories$Executions$Steps$Thumbnails$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListStepThumbnailsResponse>>;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Thumbnails$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Thumbnails$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListStepThumbnailsResponse>,
      callback: BodyResponseCallback<Schema$ListStepThumbnailsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Histories$Executions$Steps$Thumbnails$List,
      callback: BodyResponseCallback<Schema$ListStepThumbnailsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListStepThumbnailsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Histories$Executions$Steps$Thumbnails$List
        | BodyResponseCallback<Schema$ListStepThumbnailsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListStepThumbnailsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListStepThumbnailsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListStepThumbnailsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Histories$Executions$Steps$Thumbnails$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Histories$Executions$Steps$Thumbnails$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://toolresults.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
        pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListStepThumbnailsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListStepThumbnailsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Histories$Executions$Steps$Thumbnails$List
    extends StandardParameters {
    /**
     * An Execution id. Required.
     */
    executionId?: string;
    /**
     * A History id. Required.
     */
    historyId?: string;
    /**
     * The maximum number of thumbnails to fetch. Default value: 50. The server will use this default if the field is not set or has a value of 0. Optional.
     */
    pageSize?: number;
    /**
     * A continuation token to resume the query at the next item. Optional.
     */
    pageToken?: string;
    /**
     * A Project id. Required.
     */
    projectId?: string;
    /**
     * A Step id. Required.
     */
    stepId?: string;
  }
}
