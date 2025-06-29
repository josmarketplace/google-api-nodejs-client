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

export namespace docs_v1 {
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
   * Google Docs API
   *
   * Reads and writes Google Docs documents.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const docs = google.docs('v1');
   * ```
   */
  export class Docs {
    context: APIRequestContext;
    documents: Resource$Documents;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.documents = new Resource$Documents(this.context);
    }
  }

  /**
   * A ParagraphElement representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.
   */
  export interface Schema$AutoText {
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. An AutoText may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested text style changes to this AutoText, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: {
      [key: string]: Schema$SuggestedTextStyle;
    } | null;
    /**
     * The text style of this AutoText.
     */
    textStyle?: Schema$TextStyle;
    /**
     * The type of this auto text.
     */
    type?: string | null;
  }
  /**
   * Represents the background of a document.
   */
  export interface Schema$Background {
    /**
     * The background color.
     */
    color?: Schema$OptionalColor;
  }
  /**
   * A mask that indicates which of the fields on the base Background have been changed in this suggestion. For any field set to true, the Backgound has a new suggested value.
   */
  export interface Schema$BackgroundSuggestionState {
    /**
     * Indicates whether the current background color has been modified in this suggestion.
     */
    backgroundColorSuggested?: boolean | null;
  }
  /**
   * Request message for BatchUpdateDocument.
   */
  export interface Schema$BatchUpdateDocumentRequest {
    /**
     * A list of updates to apply to the document.
     */
    requests?: Schema$Request[];
    /**
     * Provides control over how write requests are executed.
     */
    writeControl?: Schema$WriteControl;
  }
  /**
   * Response message from a BatchUpdateDocument request.
   */
  export interface Schema$BatchUpdateDocumentResponse {
    /**
     * The ID of the document to which the updates were applied to.
     */
    documentId?: string | null;
    /**
     * The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
     */
    replies?: Schema$Response[];
    /**
     * The updated write control after applying the request.
     */
    writeControl?: Schema$WriteControl;
  }
  /**
   * The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
   */
  export interface Schema$Body {
    /**
     * The contents of the body. The indexes for the body's content begin at zero.
     */
    content?: Schema$StructuralElement[];
  }
  /**
   * A reference to a bookmark in this document.
   */
  export interface Schema$BookmarkLink {
    /**
     * The ID of a bookmark in this document.
     */
    id?: string | null;
    /**
     * The ID of the tab containing this bookmark.
     */
    tabId?: string | null;
  }
  /**
   * Describes the bullet of a paragraph.
   */
  export interface Schema$Bullet {
    /**
     * The ID of the list this paragraph belongs to.
     */
    listId?: string | null;
    /**
     * The nesting level of this paragraph in the list.
     */
    nestingLevel?: number | null;
    /**
     * The paragraph-specific text style applied to this bullet.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$BulletSuggestionState {
    /**
     * Indicates if there was a suggested change to the list_id.
     */
    listIdSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to the nesting_level.
     */
    nestingLevelSuggested?: boolean | null;
    /**
     * A mask that indicates which of the fields in text style have been changed in this suggestion.
     */
    textStyleSuggestionState?: Schema$TextStyleSuggestionState;
  }
  /**
   * A solid color.
   */
  export interface Schema$Color {
    /**
     * The RGB color value.
     */
    rgbColor?: Schema$RgbColor;
  }
  /**
   * A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column.
   */
  export interface Schema$ColumnBreak {
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. A ColumnBreak may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested text style changes to this ColumnBreak, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: {
      [key: string]: Schema$SuggestedTextStyle;
    } | null;
    /**
     * The text style of this ColumnBreak. Similar to text content, like text runs and footnote references, the text style of a column break can affect content layout as well as the styling of text inserted next to it.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * Creates a Footer. The new footer is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a footer of the specified type already exists, a 400 bad request error is returned.
   */
  export interface Schema$CreateFooterRequest {
    /**
     * The location of the SectionBreak immediately preceding the section whose SectionStyle this footer should belong to. If this is unset or refers to the first section break in the document, the footer applies to the document style.
     */
    sectionBreakLocation?: Schema$Location;
    /**
     * The type of footer to create.
     */
    type?: string | null;
  }
  /**
   * The result of creating a footer.
   */
  export interface Schema$CreateFooterResponse {
    /**
     * The ID of the created footer.
     */
    footerId?: string | null;
  }
  /**
   * Creates a Footnote segment and inserts a new FootnoteReference to it at the given location. The new Footnote segment will contain a space followed by a newline character.
   */
  export interface Schema$CreateFootnoteRequest {
    /**
     * Inserts the footnote reference at the end of the document body. Footnote references cannot be inserted inside a header, footer or footnote. Since footnote references can only be inserted in the body, the segment ID field must be empty.
     */
    endOfSegmentLocation?: Schema$EndOfSegmentLocation;
    /**
     * Inserts the footnote reference at a specific index in the document. The footnote reference must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Footnote references cannot be inserted inside an equation, header, footer or footnote. Since footnote references can only be inserted in the body, the segment ID field must be empty.
     */
    location?: Schema$Location;
  }
  /**
   * The result of creating a footnote.
   */
  export interface Schema$CreateFootnoteResponse {
    /**
     * The ID of the created footnote.
     */
    footnoteId?: string | null;
  }
  /**
   * Creates a Header. The new header is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a header of the specified type already exists, a 400 bad request error is returned.
   */
  export interface Schema$CreateHeaderRequest {
    /**
     * The location of the SectionBreak which begins the section this header should belong to. If `section_break_location' is unset or if it refers to the first section break in the document body, the header applies to the DocumentStyle
     */
    sectionBreakLocation?: Schema$Location;
    /**
     * The type of header to create.
     */
    type?: string | null;
  }
  /**
   * The result of creating a header.
   */
  export interface Schema$CreateHeaderResponse {
    /**
     * The ID of the created header.
     */
    headerId?: string | null;
  }
  /**
   * Creates a NamedRange referencing the given range.
   */
  export interface Schema$CreateNamedRangeRequest {
    /**
     * The name of the NamedRange. Names do not need to be unique. Names must be at least 1 character and no more than 256 characters, measured in UTF-16 code units.
     */
    name?: string | null;
    /**
     * The range to apply the name to.
     */
    range?: Schema$Range;
  }
  /**
   * The result of creating a named range.
   */
  export interface Schema$CreateNamedRangeResponse {
    /**
     * The ID of the created named range.
     */
    namedRangeId?: string | null;
  }
  /**
   * Creates bullets for all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.
   */
  export interface Schema$CreateParagraphBulletsRequest {
    /**
     * The kinds of bullet glyphs to be used.
     */
    bulletPreset?: string | null;
    /**
     * The range to apply the bullet preset to.
     */
    range?: Schema$Range;
  }
  /**
   * The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's 4 edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angles are 0, the image is not cropped.
   */
  export interface Schema$CropProperties {
    /**
     * The clockwise rotation angle of the crop rectangle around its center, in radians. Rotation is applied after the offsets.
     */
    angle?: number | null;
    /**
     * The offset specifies how far inwards the bottom edge of the crop rectangle is from the bottom edge of the original content as a fraction of the original content's height.
     */
    offsetBottom?: number | null;
    /**
     * The offset specifies how far inwards the left edge of the crop rectangle is from the left edge of the original content as a fraction of the original content's width.
     */
    offsetLeft?: number | null;
    /**
     * The offset specifies how far inwards the right edge of the crop rectangle is from the right edge of the original content as a fraction of the original content's width.
     */
    offsetRight?: number | null;
    /**
     * The offset specifies how far inwards the top edge of the crop rectangle is from the top edge of the original content as a fraction of the original content's height.
     */
    offsetTop?: number | null;
  }
  /**
   * A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$CropPropertiesSuggestionState {
    /**
     * Indicates if there was a suggested change to angle.
     */
    angleSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to offset_bottom.
     */
    offsetBottomSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to offset_left.
     */
    offsetLeftSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to offset_right.
     */
    offsetRightSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to offset_top.
     */
    offsetTopSuggested?: boolean | null;
  }
  /**
   * Deletes content from the document.
   */
  export interface Schema$DeleteContentRangeRequest {
    /**
     * The range of content to delete. Deleting text that crosses a paragraph boundary may result in changes to paragraph styles, lists, positioned objects and bookmarks as the two paragraphs are merged. Attempting to delete certain ranges can result in an invalid document structure in which case a 400 bad request error is returned. Some examples of invalid delete requests include: * Deleting one code unit of a surrogate pair. * Deleting the last newline character of a Body, Header, Footer, Footnote, TableCell or TableOfContents. * Deleting the start or end of a Table, TableOfContents or Equation without deleting the entire element. * Deleting the newline character before a Table, TableOfContents or SectionBreak without deleting the element. * Deleting individual rows or cells of a table. Deleting the content within a table cell is allowed.
     */
    range?: Schema$Range;
  }
  /**
   * Deletes a Footer from the document.
   */
  export interface Schema$DeleteFooterRequest {
    /**
     * The id of the footer to delete. If this footer is defined on DocumentStyle, the reference to this footer is removed, resulting in no footer of that type for the first section of the document. If this footer is defined on a SectionStyle, the reference to this footer is removed and the footer of that type is now continued from the previous section.
     */
    footerId?: string | null;
    /**
     * The tab that contains the footer to delete. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document.
     */
    tabId?: string | null;
  }
  /**
   * Deletes a Header from the document.
   */
  export interface Schema$DeleteHeaderRequest {
    /**
     * The id of the header to delete. If this header is defined on DocumentStyle, the reference to this header is removed, resulting in no header of that type for the first section of the document. If this header is defined on a SectionStyle, the reference to this header is removed and the header of that type is now continued from the previous section.
     */
    headerId?: string | null;
    /**
     * The tab containing the header to delete. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document.
     */
    tabId?: string | null;
  }
  /**
   * Deletes a NamedRange.
   */
  export interface Schema$DeleteNamedRangeRequest {
    /**
     * The name of the range(s) to delete. All named ranges with the given name will be deleted.
     */
    name?: string | null;
    /**
     * The ID of the named range to delete.
     */
    namedRangeId?: string | null;
    /**
     * Optional. The criteria used to specify which tab(s) the range deletion should occur in. When omitted, the range deletion is applied to all tabs. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the range deletion applies to the singular tab. In a document containing multiple tabs: - If provided, the range deletion applies to the specified tabs. - If not provided, the range deletion applies to all tabs.
     */
    tabsCriteria?: Schema$TabsCriteria;
  }
  /**
   * Deletes bullets from all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
   */
  export interface Schema$DeleteParagraphBulletsRequest {
    /**
     * The range to delete bullets from.
     */
    range?: Schema$Range;
  }
  /**
   * Deletes a PositionedObject from the document.
   */
  export interface Schema$DeletePositionedObjectRequest {
    /**
     * The ID of the positioned object to delete.
     */
    objectId?: string | null;
    /**
     * The tab that the positioned object to delete is in. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document.
     */
    tabId?: string | null;
  }
  /**
   * Deletes a column from a table.
   */
  export interface Schema$DeleteTableColumnRequest {
    /**
     * The reference table cell location from which the column will be deleted. The column this cell spans will be deleted. If this is a merged cell that spans multiple columns, all columns that the cell spans will be deleted. If no columns remain in the table after this deletion, the whole table is deleted.
     */
    tableCellLocation?: Schema$TableCellLocation;
  }
  /**
   * Deletes a row from a table.
   */
  export interface Schema$DeleteTableRowRequest {
    /**
     * The reference table cell location from which the row will be deleted. The row this cell spans will be deleted. If this is a merged cell that spans multiple rows, all rows that the cell spans will be deleted. If no rows remain in the table after this deletion, the whole table is deleted.
     */
    tableCellLocation?: Schema$TableCellLocation;
  }
  /**
   * A magnitude in a single direction in the specified units.
   */
  export interface Schema$Dimension {
    /**
     * The magnitude.
     */
    magnitude?: number | null;
    /**
     * The units for magnitude.
     */
    unit?: string | null;
  }
  /**
   * A Google Docs document.
   */
  export interface Schema$Document {
    /**
     * Output only. The main body of the document. Legacy field: Instead, use Document.tabs.documentTab.body, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    body?: Schema$Body;
    /**
     * Output only. The ID of the document.
     */
    documentId?: string | null;
    /**
     * Output only. The style of the document. Legacy field: Instead, use Document.tabs.documentTab.documentStyle, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    documentStyle?: Schema$DocumentStyle;
    /**
     * Output only. The footers in the document, keyed by footer ID. Legacy field: Instead, use Document.tabs.documentTab.footers, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    footers?: {[key: string]: Schema$Footer} | null;
    /**
     * Output only. The footnotes in the document, keyed by footnote ID. Legacy field: Instead, use Document.tabs.documentTab.footnotes, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    footnotes?: {[key: string]: Schema$Footnote} | null;
    /**
     * Output only. The headers in the document, keyed by header ID. Legacy field: Instead, use Document.tabs.documentTab.headers, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    headers?: {[key: string]: Schema$Header} | null;
    /**
     * Output only. The inline objects in the document, keyed by object ID. Legacy field: Instead, use Document.tabs.documentTab.inlineObjects, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    inlineObjects?: {[key: string]: Schema$InlineObject} | null;
    /**
     * Output only. The lists in the document, keyed by list ID. Legacy field: Instead, use Document.tabs.documentTab.lists, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    lists?: {[key: string]: Schema$List} | null;
    /**
     * Output only. The named ranges in the document, keyed by name. Legacy field: Instead, use Document.tabs.documentTab.namedRanges, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    namedRanges?: {[key: string]: Schema$NamedRanges} | null;
    /**
     * Output only. The named styles of the document. Legacy field: Instead, use Document.tabs.documentTab.namedStyles, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    namedStyles?: Schema$NamedStyles;
    /**
     * Output only. The positioned objects in the document, keyed by object ID. Legacy field: Instead, use Document.tabs.documentTab.positionedObjects, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    positionedObjects?: {[key: string]: Schema$PositionedObject} | null;
    /**
     * Output only. The revision ID of the document. Can be used in update requests to specify which revision of a document to apply updates to and how the request should behave if the document has been edited since that revision. Only populated if the user has edit access to the document. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the document has not changed. Conversely, a changed ID (for the same document and user) usually means the document has been updated. However, a changed ID can also be due to internal factors such as ID format changes.
     */
    revisionId?: string | null;
    /**
     * Output only. The suggested changes to the style of the document, keyed by suggestion ID. Legacy field: Instead, use Document.tabs.documentTab.suggestedDocumentStyleChanges, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    suggestedDocumentStyleChanges?: {
      [key: string]: Schema$SuggestedDocumentStyle;
    } | null;
    /**
     * Output only. The suggested changes to the named styles of the document, keyed by suggestion ID. Legacy field: Instead, use Document.tabs.documentTab.suggestedNamedStylesChanges, which exposes the actual document content from all tabs when the includeTabsContent parameter is set to `true`. If `false` or unset, this field contains information about the first tab in the document.
     */
    suggestedNamedStylesChanges?: {
      [key: string]: Schema$SuggestedNamedStyles;
    } | null;
    /**
     * Output only. The suggestions view mode applied to the document. Note: When editing a document, changes must be based on a document with SUGGESTIONS_INLINE.
     */
    suggestionsViewMode?: string | null;
    /**
     * Tabs that are part of a document. Tabs can contain child tabs, a tab nested within another tab. Child tabs are represented by the Tab.childTabs field.
     */
    tabs?: Schema$Tab[];
    /**
     * The title of the document.
     */
    title?: string | null;
  }
  /**
   * The style of the document.
   */
  export interface Schema$DocumentStyle {
    /**
     * The background of the document. Documents cannot have a transparent background color.
     */
    background?: Schema$Background;
    /**
     * The ID of the default footer. If not set, there's no default footer. This property is read-only.
     */
    defaultFooterId?: string | null;
    /**
     * The ID of the default header. If not set, there's no default header. This property is read-only.
     */
    defaultHeaderId?: string | null;
    /**
     * The ID of the footer used only for even pages. The value of use_even_page_header_footer determines whether to use the default_footer_id or this value for the footer on even pages. If not set, there's no even page footer. This property is read-only.
     */
    evenPageFooterId?: string | null;
    /**
     * The ID of the header used only for even pages. The value of use_even_page_header_footer determines whether to use the default_header_id or this value for the header on even pages. If not set, there's no even page header. This property is read-only.
     */
    evenPageHeaderId?: string | null;
    /**
     * The ID of the footer used only for the first page. If not set then a unique footer for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_footer_id or this value for the footer on the first page. If not set, there's no first page footer. This property is read-only.
     */
    firstPageFooterId?: string | null;
    /**
     * The ID of the header used only for the first page. If not set then a unique header for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_header_id or this value for the header on the first page. If not set, there's no first page header. This property is read-only.
     */
    firstPageHeaderId?: string | null;
    /**
     * Optional. Indicates whether to flip the dimensions of the page_size, which allows changing the page orientation between portrait and landscape.
     */
    flipPageOrientation?: boolean | null;
    /**
     * The bottom page margin. Updating the bottom page margin on the document style clears the bottom page margin on all section styles.
     */
    marginBottom?: Schema$Dimension;
    /**
     * The amount of space between the bottom of the page and the contents of the footer.
     */
    marginFooter?: Schema$Dimension;
    /**
     * The amount of space between the top of the page and the contents of the header.
     */
    marginHeader?: Schema$Dimension;
    /**
     * The left page margin. Updating the left page margin on the document style clears the left page margin on all section styles. It may also cause columns to resize in all sections.
     */
    marginLeft?: Schema$Dimension;
    /**
     * The right page margin. Updating the right page margin on the document style clears the right page margin on all section styles. It may also cause columns to resize in all sections.
     */
    marginRight?: Schema$Dimension;
    /**
     * The top page margin. Updating the top page margin on the document style clears the top page margin on all section styles.
     */
    marginTop?: Schema$Dimension;
    /**
     * The page number from which to start counting the number of pages.
     */
    pageNumberStart?: number | null;
    /**
     * The size of a page in the document.
     */
    pageSize?: Schema$Size;
    /**
     * Indicates whether DocumentStyle margin_header, SectionStyle margin_header and DocumentStyle margin_footer, SectionStyle margin_footer are respected. When false, the default values in the Docs editor for header and footer margin is used. This property is read-only.
     */
    useCustomHeaderFooterMargins?: boolean | null;
    /**
     * Indicates whether to use the even page header / footer IDs for the even pages.
     */
    useEvenPageHeaderFooter?: boolean | null;
    /**
     * Indicates whether to use the first page header / footer IDs for the first page.
     */
    useFirstPageHeaderFooter?: boolean | null;
  }
  /**
   * A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$DocumentStyleSuggestionState {
    /**
     * A mask that indicates which of the fields in background have been changed in this suggestion.
     */
    backgroundSuggestionState?: Schema$BackgroundSuggestionState;
    /**
     * Indicates if there was a suggested change to default_footer_id.
     */
    defaultFooterIdSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to default_header_id.
     */
    defaultHeaderIdSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to even_page_footer_id.
     */
    evenPageFooterIdSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to even_page_header_id.
     */
    evenPageHeaderIdSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to first_page_footer_id.
     */
    firstPageFooterIdSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to first_page_header_id.
     */
    firstPageHeaderIdSuggested?: boolean | null;
    /**
     * Optional. Indicates if there was a suggested change to flip_page_orientation.
     */
    flipPageOrientationSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to margin_bottom.
     */
    marginBottomSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to margin_footer.
     */
    marginFooterSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to margin_header.
     */
    marginHeaderSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to margin_left.
     */
    marginLeftSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to margin_right.
     */
    marginRightSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to margin_top.
     */
    marginTopSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to page_number_start.
     */
    pageNumberStartSuggested?: boolean | null;
    /**
     * A mask that indicates which of the fields in size have been changed in this suggestion.
     */
    pageSizeSuggestionState?: Schema$SizeSuggestionState;
    /**
     * Indicates if there was a suggested change to use_custom_header_footer_margins.
     */
    useCustomHeaderFooterMarginsSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to use_even_page_header_footer.
     */
    useEvenPageHeaderFooterSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to use_first_page_header_footer.
     */
    useFirstPageHeaderFooterSuggested?: boolean | null;
  }
  /**
   * A tab with document contents.
   */
  export interface Schema$DocumentTab {
    /**
     * The main body of the document tab.
     */
    body?: Schema$Body;
    /**
     * The style of the document tab.
     */
    documentStyle?: Schema$DocumentStyle;
    /**
     * The footers in the document tab, keyed by footer ID.
     */
    footers?: {[key: string]: Schema$Footer} | null;
    /**
     * The footnotes in the document tab, keyed by footnote ID.
     */
    footnotes?: {[key: string]: Schema$Footnote} | null;
    /**
     * The headers in the document tab, keyed by header ID.
     */
    headers?: {[key: string]: Schema$Header} | null;
    /**
     * The inline objects in the document tab, keyed by object ID.
     */
    inlineObjects?: {[key: string]: Schema$InlineObject} | null;
    /**
     * The lists in the document tab, keyed by list ID.
     */
    lists?: {[key: string]: Schema$List} | null;
    /**
     * The named ranges in the document tab, keyed by name.
     */
    namedRanges?: {[key: string]: Schema$NamedRanges} | null;
    /**
     * The named styles of the document tab.
     */
    namedStyles?: Schema$NamedStyles;
    /**
     * The positioned objects in the document tab, keyed by object ID.
     */
    positionedObjects?: {[key: string]: Schema$PositionedObject} | null;
    /**
     * The suggested changes to the style of the document tab, keyed by suggestion ID.
     */
    suggestedDocumentStyleChanges?: {
      [key: string]: Schema$SuggestedDocumentStyle;
    } | null;
    /**
     * The suggested changes to the named styles of the document tab, keyed by suggestion ID.
     */
    suggestedNamedStylesChanges?: {
      [key: string]: Schema$SuggestedNamedStyles;
    } | null;
  }
  /**
   * The properties of an embedded drawing and used to differentiate the object type. An embedded drawing is one that's created and edited within a document. Note that extensive details are not supported.
   */
  export interface Schema$EmbeddedDrawingProperties {}
  /**
   * A mask that indicates which of the fields on the base EmbeddedDrawingProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$EmbeddedDrawingPropertiesSuggestionState {}
  /**
   * An embedded object in the document.
   */
  export interface Schema$EmbeddedObject {
    /**
     * The description of the embedded object. The `title` and `description` are both combined to display alt text.
     */
    description?: string | null;
    /**
     * The properties of an embedded drawing.
     */
    embeddedDrawingProperties?: Schema$EmbeddedDrawingProperties;
    /**
     * The border of the embedded object.
     */
    embeddedObjectBorder?: Schema$EmbeddedObjectBorder;
    /**
     * The properties of an image.
     */
    imageProperties?: Schema$ImageProperties;
    /**
     * A reference to the external linked source content. For example, it contains a reference to the source Google Sheets chart when the embedded object is a linked chart. If unset, then the embedded object is not linked.
     */
    linkedContentReference?: Schema$LinkedContentReference;
    /**
     * The bottom margin of the embedded object.
     */
    marginBottom?: Schema$Dimension;
    /**
     * The left margin of the embedded object.
     */
    marginLeft?: Schema$Dimension;
    /**
     * The right margin of the embedded object.
     */
    marginRight?: Schema$Dimension;
    /**
     * The top margin of the embedded object.
     */
    marginTop?: Schema$Dimension;
    /**
     * The visible size of the image after cropping.
     */
    size?: Schema$Size;
    /**
     * The title of the embedded object. The `title` and `description` are both combined to display alt text.
     */
    title?: string | null;
  }
  /**
   * A border around an EmbeddedObject.
   */
  export interface Schema$EmbeddedObjectBorder {
    /**
     * The color of the border.
     */
    color?: Schema$OptionalColor;
    /**
     * The dash style of the border.
     */
    dashStyle?: string | null;
    /**
     * The property state of the border property.
     */
    propertyState?: string | null;
    /**
     * The width of the border.
     */
    width?: Schema$Dimension;
  }
  /**
   * A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$EmbeddedObjectBorderSuggestionState {
    /**
     * Indicates if there was a suggested change to color.
     */
    colorSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to dash_style.
     */
    dashStyleSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to property_state.
     */
    propertyStateSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to width.
     */
    widthSuggested?: boolean | null;
  }
  /**
   * A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$EmbeddedObjectSuggestionState {
    /**
     * Indicates if there was a suggested change to description.
     */
    descriptionSuggested?: boolean | null;
    /**
     * A mask that indicates which of the fields in embedded_drawing_properties have been changed in this suggestion.
     */
    embeddedDrawingPropertiesSuggestionState?: Schema$EmbeddedDrawingPropertiesSuggestionState;
    /**
     * A mask that indicates which of the fields in embedded_object_border have been changed in this suggestion.
     */
    embeddedObjectBorderSuggestionState?: Schema$EmbeddedObjectBorderSuggestionState;
    /**
     * A mask that indicates which of the fields in image_properties have been changed in this suggestion.
     */
    imagePropertiesSuggestionState?: Schema$ImagePropertiesSuggestionState;
    /**
     * A mask that indicates which of the fields in linked_content_reference have been changed in this suggestion.
     */
    linkedContentReferenceSuggestionState?: Schema$LinkedContentReferenceSuggestionState;
    /**
     * Indicates if there was a suggested change to margin_bottom.
     */
    marginBottomSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to margin_left.
     */
    marginLeftSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to margin_right.
     */
    marginRightSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to margin_top.
     */
    marginTopSuggested?: boolean | null;
    /**
     * A mask that indicates which of the fields in size have been changed in this suggestion.
     */
    sizeSuggestionState?: Schema$SizeSuggestionState;
    /**
     * Indicates if there was a suggested change to title.
     */
    titleSuggested?: boolean | null;
  }
  /**
   * Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.
   */
  export interface Schema$EndOfSegmentLocation {
    /**
     * The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
     */
    segmentId?: string | null;
    /**
     * The tab that the location is in. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document.
     */
    tabId?: string | null;
  }
  /**
   * A ParagraphElement representing an equation.
   */
  export interface Schema$Equation {
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. An Equation may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
  }
  /**
   * A document footer.
   */
  export interface Schema$Footer {
    /**
     * The contents of the footer. The indexes for a footer's content begin at zero.
     */
    content?: Schema$StructuralElement[];
    /**
     * The ID of the footer.
     */
    footerId?: string | null;
  }
  /**
   * A document footnote.
   */
  export interface Schema$Footnote {
    /**
     * The contents of the footnote. The indexes for a footnote's content begin at zero.
     */
    content?: Schema$StructuralElement[];
    /**
     * The ID of the footnote.
     */
    footnoteId?: string | null;
  }
  /**
   * A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.
   */
  export interface Schema$FootnoteReference {
    /**
     * The ID of the footnote that contains the content of this footnote reference.
     */
    footnoteId?: string | null;
    /**
     * The rendered number of this footnote.
     */
    footnoteNumber?: string | null;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. A FootnoteReference may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested text style changes to this FootnoteReference, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: {
      [key: string]: Schema$SuggestedTextStyle;
    } | null;
    /**
     * The text style of this FootnoteReference.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * A document header.
   */
  export interface Schema$Header {
    /**
     * The contents of the header. The indexes for a header's content begin at zero.
     */
    content?: Schema$StructuralElement[];
    /**
     * The ID of the header.
     */
    headerId?: string | null;
  }
  /**
   * A reference to a heading in this document.
   */
  export interface Schema$HeadingLink {
    /**
     * The ID of a heading in this document.
     */
    id?: string | null;
    /**
     * The ID of the tab containing this heading.
     */
    tabId?: string | null;
  }
  /**
   * A ParagraphElement representing a horizontal line.
   */
  export interface Schema$HorizontalRule {
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. A HorizontalRule may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested text style changes to this HorizontalRule, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: {
      [key: string]: Schema$SuggestedTextStyle;
    } | null;
    /**
     * The text style of this HorizontalRule. Similar to text content, like text runs and footnote references, the text style of a horizontal rule can affect content layout as well as the styling of text inserted next to it.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * The properties of an image.
   */
  export interface Schema$ImageProperties {
    /**
     * The clockwise rotation angle of the image, in radians.
     */
    angle?: number | null;
    /**
     * The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.
     */
    brightness?: number | null;
    /**
     * A URI to the image with a default lifetime of 30 minutes. This URI is tagged with the account of the requester. Anyone with the URI effectively accesses the image as the original requester. Access to the image may be lost if the document's sharing settings change.
     */
    contentUri?: string | null;
    /**
     * The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.
     */
    contrast?: number | null;
    /**
     * The crop properties of the image.
     */
    cropProperties?: Schema$CropProperties;
    /**
     * The source URI is the URI used to insert the image. The source URI can be empty.
     */
    sourceUri?: string | null;
    /**
     * The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means transparent.
     */
    transparency?: number | null;
  }
  /**
   * A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$ImagePropertiesSuggestionState {
    /**
     * Indicates if there was a suggested change to angle.
     */
    angleSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to brightness.
     */
    brightnessSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to content_uri.
     */
    contentUriSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to contrast.
     */
    contrastSuggested?: boolean | null;
    /**
     * A mask that indicates which of the fields in crop_properties have been changed in this suggestion.
     */
    cropPropertiesSuggestionState?: Schema$CropPropertiesSuggestionState;
    /**
     * Indicates if there was a suggested change to source_uri.
     */
    sourceUriSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to transparency.
     */
    transparencySuggested?: boolean | null;
  }
  /**
   * An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.
   */
  export interface Schema$InlineObject {
    /**
     * The properties of this inline object.
     */
    inlineObjectProperties?: Schema$InlineObjectProperties;
    /**
     * The ID of this inline object. Can be used to update an object’s properties.
     */
    objectId?: string | null;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested changes to the inline object properties, keyed by suggestion ID.
     */
    suggestedInlineObjectPropertiesChanges?: {
      [key: string]: Schema$SuggestedInlineObjectProperties;
    } | null;
    /**
     * The suggested insertion ID. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionId?: string | null;
  }
  /**
   * A ParagraphElement that contains an InlineObject.
   */
  export interface Schema$InlineObjectElement {
    /**
     * The ID of the InlineObject this element contains.
     */
    inlineObjectId?: string | null;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. An InlineObjectElement may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested text style changes to this InlineObject, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: {
      [key: string]: Schema$SuggestedTextStyle;
    } | null;
    /**
     * The text style of this InlineObjectElement. Similar to text content, like text runs and footnote references, the text style of an inline object element can affect content layout as well as the styling of text inserted next to it.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * Properties of an InlineObject.
   */
  export interface Schema$InlineObjectProperties {
    /**
     * The embedded object of this inline object.
     */
    embeddedObject?: Schema$EmbeddedObject;
  }
  /**
   * A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$InlineObjectPropertiesSuggestionState {
    /**
     * A mask that indicates which of the fields in embedded_object have been changed in this suggestion.
     */
    embeddedObjectSuggestionState?: Schema$EmbeddedObjectSuggestionState;
  }
  /**
   * Inserts an InlineObject containing an image at the given location.
   */
  export interface Schema$InsertInlineImageRequest {
    /**
     * Inserts the text at the end of a header, footer or the document body. Inline images cannot be inserted inside a footnote.
     */
    endOfSegmentLocation?: Schema$EndOfSegmentLocation;
    /**
     * Inserts the image at a specific index in the document. The image must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Inline images cannot be inserted inside a footnote or equation.
     */
    location?: Schema$Location;
    /**
     * The size that the image should appear as in the document. This property is optional and the final size of the image in the document is determined by the following rules: * If neither width nor height is specified, then a default size of the image is calculated based on its resolution. * If one dimension is specified then the other dimension is calculated to preserve the aspect ratio of the image. * If both width and height are specified, the image is scaled to fit within the provided dimensions while maintaining its aspect ratio.
     */
    objectSize?: Schema$Size;
    /**
     * The image URI. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URI must be publicly accessible and at most 2 kB in length. The URI itself is saved with the image, and exposed via the ImageProperties.content_uri field.
     */
    uri?: string | null;
  }
  /**
   * The result of inserting an inline image.
   */
  export interface Schema$InsertInlineImageResponse {
    /**
     * The ID of the created InlineObject.
     */
    objectId?: string | null;
  }
  /**
   * The result of inserting an embedded Google Sheets chart.
   */
  export interface Schema$InsertInlineSheetsChartResponse {
    /**
     * The object ID of the inserted chart.
     */
    objectId?: string | null;
  }
  /**
   * Inserts a page break followed by a newline at the specified location.
   */
  export interface Schema$InsertPageBreakRequest {
    /**
     * Inserts the page break at the end of the document body. Page breaks cannot be inserted inside a footnote, header or footer. Since page breaks can only be inserted inside the body, the segment ID field must be empty.
     */
    endOfSegmentLocation?: Schema$EndOfSegmentLocation;
    /**
     * Inserts the page break at a specific index in the document. The page break must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Page breaks cannot be inserted inside a table, equation, footnote, header or footer. Since page breaks can only be inserted inside the body, the segment ID field must be empty.
     */
    location?: Schema$Location;
  }
  /**
   * Inserts a section break at the given location. A newline character will be inserted before the section break.
   */
  export interface Schema$InsertSectionBreakRequest {
    /**
     * Inserts a newline and a section break at the end of the document body. Section breaks cannot be inserted inside a footnote, header or footer. Because section breaks can only be inserted inside the body, the segment ID field must be empty.
     */
    endOfSegmentLocation?: Schema$EndOfSegmentLocation;
    /**
     * Inserts a newline and a section break at a specific index in the document. The section break must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Section breaks cannot be inserted inside a table, equation, footnote, header, or footer. Since section breaks can only be inserted inside the body, the segment ID field must be empty.
     */
    location?: Schema$Location;
    /**
     * The type of section to insert.
     */
    sectionType?: string | null;
  }
  /**
   * Inserts an empty column into a table.
   */
  export interface Schema$InsertTableColumnRequest {
    /**
     * Whether to insert new column to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left.
     */
    insertRight?: boolean | null;
    /**
     * The reference table cell location from which columns will be inserted. A new column will be inserted to the left (or right) of the column where the reference cell is. If the reference cell is a merged cell, a new column will be inserted to the left (or right) of the merged cell.
     */
    tableCellLocation?: Schema$TableCellLocation;
  }
  /**
   * Inserts a table at the specified location. A newline character will be inserted before the inserted table.
   */
  export interface Schema$InsertTableRequest {
    /**
     * The number of columns in the table.
     */
    columns?: number | null;
    /**
     * Inserts the table at the end of the given header, footer or document body. A newline character will be inserted before the inserted table. Tables cannot be inserted inside a footnote.
     */
    endOfSegmentLocation?: Schema$EndOfSegmentLocation;
    /**
     * Inserts the table at a specific model index. A newline character will be inserted before the inserted table, therefore the table start index will be at the specified location index + 1. The table must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between an existing table and its preceding paragraph). Tables cannot be inserted inside a footnote or equation.
     */
    location?: Schema$Location;
    /**
     * The number of rows in the table.
     */
    rows?: number | null;
  }
  /**
   * Inserts an empty row into a table.
   */
  export interface Schema$InsertTableRowRequest {
    /**
     * Whether to insert new row below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell.
     */
    insertBelow?: boolean | null;
    /**
     * The reference table cell location from which rows will be inserted. A new row will be inserted above (or below) the row where the reference cell is. If the reference cell is a merged cell, a new row will be inserted above (or below) the merged cell.
     */
    tableCellLocation?: Schema$TableCellLocation;
  }
  /**
   * Inserts text at the specified location.
   */
  export interface Schema$InsertTextRequest {
    /**
     * Inserts the text at the end of a header, footer, footnote or the document body.
     */
    endOfSegmentLocation?: Schema$EndOfSegmentLocation;
    /**
     * Inserts the text at a specific index in the document. Text must be inserted inside the bounds of an existing Paragraph. For instance, text cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). The text must be inserted in the preceding paragraph.
     */
    location?: Schema$Location;
    /**
     * The text to be inserted. Inserting a newline character will implicitly create a new Paragraph at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text style for the inserted text will match the text immediately before the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.
     */
    text?: string | null;
  }
  /**
   * A reference to another portion of a document or an external URL resource.
   */
  export interface Schema$Link {
    /**
     * A bookmark in this document. In documents containing a single tab, links to bookmarks within the singular tab continue to return Link.bookmarkId when the includeTabsContent parameter is set to `false` or unset. Otherwise, this field is returned.
     */
    bookmark?: Schema$BookmarkLink;
    /**
     * The ID of a bookmark in this document. Legacy field: Instead, set includeTabsContent to `true` and use Link.bookmark for read and write operations. This field is only returned when includeTabsContent is set to `false` in documents containing a single tab and links to a bookmark within the singular tab. Otherwise, Link.bookmark is returned. If this field is used in a write request, the bookmark is considered to be from the tab ID specified in the request. If a tab ID is not specified in the request, it is considered to be from the first tab in the document.
     */
    bookmarkId?: string | null;
    /**
     * A heading in this document. In documents containing a single tab, links to headings within the singular tab continue to return Link.headingId when the includeTabsContent parameter is set to `false` or unset. Otherwise, this field is returned.
     */
    heading?: Schema$HeadingLink;
    /**
     * The ID of a heading in this document. Legacy field: Instead, set includeTabsContent to `true` and use Link.heading for read and write operations. This field is only returned when includeTabsContent is set to `false` in documents containing a single tab and links to a heading within the singular tab. Otherwise, Link.heading is returned. If this field is used in a write request, the heading is considered to be from the tab ID specified in the request. If a tab ID is not specified in the request, it is considered to be from the first tab in the document.
     */
    headingId?: string | null;
    /**
     * The ID of a tab in this document.
     */
    tabId?: string | null;
    /**
     * An external URL.
     */
    url?: string | null;
  }
  /**
   * A reference to the external linked source content.
   */
  export interface Schema$LinkedContentReference {
    /**
     * A reference to the linked chart.
     */
    sheetsChartReference?: Schema$SheetsChartReference;
  }
  /**
   * A mask that indicates which of the fields on the base LinkedContentReference have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$LinkedContentReferenceSuggestionState {
    /**
     * A mask that indicates which of the fields in sheets_chart_reference have been changed in this suggestion.
     */
    sheetsChartReferenceSuggestionState?: Schema$SheetsChartReferenceSuggestionState;
  }
  /**
   * A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its bullet.
   */
  export interface Schema$List {
    /**
     * The properties of the list.
     */
    listProperties?: Schema$ListProperties;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this list.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion ID. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionId?: string | null;
    /**
     * The suggested changes to the list properties, keyed by suggestion ID.
     */
    suggestedListPropertiesChanges?: {
      [key: string]: Schema$SuggestedListProperties;
    } | null;
  }
  /**
   * The properties of a list that describe the look and feel of bullets belonging to paragraphs associated with a list.
   */
  export interface Schema$ListProperties {
    /**
     * Describes the properties of the bullets at the associated level. A list has at most 9 levels of nesting with nesting level 0 corresponding to the top-most level and nesting level 8 corresponding to the most nested level. The nesting levels are returned in ascending order with the least nested returned first.
     */
    nestingLevels?: Schema$NestingLevel[];
  }
  /**
   * A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$ListPropertiesSuggestionState {
    /**
     * A mask that indicates which of the fields on the corresponding NestingLevel in nesting_levels have been changed in this suggestion. The nesting level suggestion states are returned in ascending order of the nesting level with the least nested returned first.
     */
    nestingLevelsSuggestionStates?: Schema$NestingLevelSuggestionState[];
  }
  /**
   * A particular location in the document.
   */
  export interface Schema$Location {
    /**
     * The zero-based index, in UTF-16 code units. The index is relative to the beginning of the segment specified by segment_id.
     */
    index?: number | null;
    /**
     * The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
     */
    segmentId?: string | null;
    /**
     * The tab that the location is in. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document.
     */
    tabId?: string | null;
  }
  /**
   * Merges cells in a Table.
   */
  export interface Schema$MergeTableCellsRequest {
    /**
     * The table range specifying which cells of the table to merge. Any text in the cells being merged will be concatenated and stored in the "head" cell of the range. This is the upper-left cell of the range when the content direction is left to right, and the upper-right cell of the range otherwise. If the range is non-rectangular (which can occur in some cases where the range covers cells that are already merged or where the table is non-rectangular), a 400 bad request error is returned.
     */
    tableRange?: Schema$TableRange;
  }
  /**
   * A collection of Ranges with the same named range ID. Named ranges allow developers to associate parts of a document with an arbitrary user-defined label so their contents can be programmatically read or edited later. A document can contain multiple named ranges with the same name, but every named range has a unique ID. A named range is created with a single Range, and content inserted inside a named range generally expands that range. However, certain document changes can cause the range to be split into multiple ranges. Named ranges are not private. All applications and collaborators that have access to the document can see its named ranges.
   */
  export interface Schema$NamedRange {
    /**
     * The name of the named range.
     */
    name?: string | null;
    /**
     * The ID of the named range.
     */
    namedRangeId?: string | null;
    /**
     * The ranges that belong to this named range.
     */
    ranges?: Schema$Range[];
  }
  /**
   * A collection of all the NamedRanges in the document that share a given name.
   */
  export interface Schema$NamedRanges {
    /**
     * The name that all the named ranges share.
     */
    name?: string | null;
    /**
     * The NamedRanges that share the same name.
     */
    namedRanges?: Schema$NamedRange[];
  }
  /**
   * A named style. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from this named style when they have the same named style type.
   */
  export interface Schema$NamedStyle {
    /**
     * The type of this named style.
     */
    namedStyleType?: string | null;
    /**
     * The paragraph style of this named style.
     */
    paragraphStyle?: Schema$ParagraphStyle;
    /**
     * The text style of this named style.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
   */
  export interface Schema$NamedStyles {
    /**
     * The named styles. There's an entry for each of the possible named style types.
     */
    styles?: Schema$NamedStyle[];
  }
  /**
   * The suggestion state of a NamedStyles message.
   */
  export interface Schema$NamedStylesSuggestionState {
    /**
     * A mask that indicates which of the fields on the corresponding NamedStyle in styles have been changed in this suggestion. The order of these named style suggestion states matches the order of the corresponding named style within the named styles suggestion.
     */
    stylesSuggestionStates?: Schema$NamedStyleSuggestionState[];
  }
  /**
   * A suggestion state of a NamedStyle message.
   */
  export interface Schema$NamedStyleSuggestionState {
    /**
     * The named style type that this suggestion state corresponds to. This field is provided as a convenience for matching the NamedStyleSuggestionState with its corresponding NamedStyle.
     */
    namedStyleType?: string | null;
    /**
     * A mask that indicates which of the fields in paragraph style have been changed in this suggestion.
     */
    paragraphStyleSuggestionState?: Schema$ParagraphStyleSuggestionState;
    /**
     * A mask that indicates which of the fields in text style have been changed in this suggestion.
     */
    textStyleSuggestionState?: Schema$TextStyleSuggestionState;
  }
  /**
   * Contains properties describing the look and feel of a list bullet at a given level of nesting.
   */
  export interface Schema$NestingLevel {
    /**
     * The alignment of the bullet within the space allotted for rendering the bullet.
     */
    bulletAlignment?: string | null;
    /**
     * The format string used by bullets at this level of nesting. The glyph format contains one or more placeholders, and these placeholders are replaced with the appropriate values depending on the glyph_type or glyph_symbol. The placeholders follow the pattern `%[nesting_level]`. Furthermore, placeholders can have prefixes and suffixes. Thus, the glyph format follows the pattern `%[nesting_level]`. Note that the prefix and suffix are optional and can be arbitrary strings. For example, the glyph format `%0.` indicates that the rendered glyph will replace the placeholder with the corresponding glyph for nesting level 0 followed by a period as the suffix. So a list with a glyph type of UPPER_ALPHA and glyph format `%0.` at nesting level 0 will result in a list with rendered glyphs `A.` `B.` `C.` The glyph format can contain placeholders for the current nesting level as well as placeholders for parent nesting levels. For example, a list can have a glyph format of `%0.` at nesting level 0 and a glyph format of `%0.%1.` at nesting level 1. Assuming both nesting levels have DECIMAL glyph types, this would result in a list with rendered glyphs `1.` `2.` ` 2.1.` ` 2.2.` `3.` For nesting levels that are ordered, the string that replaces a placeholder in the glyph format for a particular paragraph depends on the paragraph's order within the list.
     */
    glyphFormat?: string | null;
    /**
     * A custom glyph symbol used by bullets when paragraphs at this level of nesting is unordered. The glyph symbol replaces placeholders within the glyph_format. For example, if the glyph_symbol is the solid circle corresponding to Unicode U+25cf code point and the glyph_format is `%0`, the rendered glyph would be the solid circle.
     */
    glyphSymbol?: string | null;
    /**
     * The type of glyph used by bullets when paragraphs at this level of nesting is ordered. The glyph type determines the type of glyph used to replace placeholders within the glyph_format when paragraphs at this level of nesting are ordered. For example, if the nesting level is 0, the glyph_format is `%0.` and the glyph type is DECIMAL, then the rendered glyph would replace the placeholder `%0` in the glyph format with a number corresponding to the list item's order within the list.
     */
    glyphType?: string | null;
    /**
     * The amount of indentation for the first line of paragraphs at this level of nesting.
     */
    indentFirstLine?: Schema$Dimension;
    /**
     * The amount of indentation for paragraphs at this level of nesting. Applied to the side that corresponds to the start of the text, based on the paragraph's content direction.
     */
    indentStart?: Schema$Dimension;
    /**
     * The number of the first list item at this nesting level. A value of 0 is treated as a value of 1 for lettered lists and Roman numeral lists. For values of both 0 and 1, lettered and Roman numeral lists will begin at `a` and `i` respectively. This value is ignored for nesting levels with unordered glyphs.
     */
    startNumber?: number | null;
    /**
     * The text style of bullets at this level of nesting.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$NestingLevelSuggestionState {
    /**
     * Indicates if there was a suggested change to bullet_alignment.
     */
    bulletAlignmentSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to glyph_format.
     */
    glyphFormatSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to glyph_symbol.
     */
    glyphSymbolSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to glyph_type.
     */
    glyphTypeSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to indent_first_line.
     */
    indentFirstLineSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to indent_start.
     */
    indentStartSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to start_number.
     */
    startNumberSuggested?: boolean | null;
    /**
     * A mask that indicates which of the fields in text style have been changed in this suggestion.
     */
    textStyleSuggestionState?: Schema$TextStyleSuggestionState;
  }
  /**
   * A collection of object IDs.
   */
  export interface Schema$ObjectReferences {
    /**
     * The object IDs.
     */
    objectIds?: string[] | null;
  }
  /**
   * A color that can either be fully opaque or fully transparent.
   */
  export interface Schema$OptionalColor {
    /**
     * If set, this will be used as an opaque color. If unset, this represents a transparent color.
     */
    color?: Schema$Color;
  }
  /**
   * A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page.
   */
  export interface Schema$PageBreak {
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. A PageBreak may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested text style changes to this PageBreak, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: {
      [key: string]: Schema$SuggestedTextStyle;
    } | null;
    /**
     * The text style of this PageBreak. Similar to text content, like text runs and footnote references, the text style of a page break can affect content layout as well as the styling of text inserted next to it.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
   */
  export interface Schema$Paragraph {
    /**
     * The bullet for this paragraph. If not present, the paragraph does not belong to a list.
     */
    bullet?: Schema$Bullet;
    /**
     * The content of the paragraph, broken down into its component parts.
     */
    elements?: Schema$ParagraphElement[];
    /**
     * The style of this paragraph.
     */
    paragraphStyle?: Schema$ParagraphStyle;
    /**
     * The IDs of the positioned objects tethered to this paragraph.
     */
    positionedObjectIds?: string[] | null;
    /**
     * The suggested changes to this paragraph's bullet.
     */
    suggestedBulletChanges?: {[key: string]: Schema$SuggestedBullet} | null;
    /**
     * The suggested paragraph style changes to this paragraph, keyed by suggestion ID.
     */
    suggestedParagraphStyleChanges?: {
      [key: string]: Schema$SuggestedParagraphStyle;
    } | null;
    /**
     * The IDs of the positioned objects suggested to be attached to this paragraph, keyed by suggestion ID.
     */
    suggestedPositionedObjectIds?: {
      [key: string]: Schema$ObjectReferences;
    } | null;
  }
  /**
   * A border around a paragraph.
   */
  export interface Schema$ParagraphBorder {
    /**
     * The color of the border.
     */
    color?: Schema$OptionalColor;
    /**
     * The dash style of the border.
     */
    dashStyle?: string | null;
    /**
     * The padding of the border.
     */
    padding?: Schema$Dimension;
    /**
     * The width of the border.
     */
    width?: Schema$Dimension;
  }
  /**
   * A ParagraphElement describes content within a Paragraph.
   */
  export interface Schema$ParagraphElement {
    /**
     * An auto text paragraph element.
     */
    autoText?: Schema$AutoText;
    /**
     * A column break paragraph element.
     */
    columnBreak?: Schema$ColumnBreak;
    /**
     * The zero-base end index of this paragraph element, exclusive, in UTF-16 code units.
     */
    endIndex?: number | null;
    /**
     * An equation paragraph element.
     */
    equation?: Schema$Equation;
    /**
     * A footnote reference paragraph element.
     */
    footnoteReference?: Schema$FootnoteReference;
    /**
     * A horizontal rule paragraph element.
     */
    horizontalRule?: Schema$HorizontalRule;
    /**
     * An inline object paragraph element.
     */
    inlineObjectElement?: Schema$InlineObjectElement;
    /**
     * A page break paragraph element.
     */
    pageBreak?: Schema$PageBreak;
    /**
     * A paragraph element that links to a person or email address.
     */
    person?: Schema$Person;
    /**
     * A paragraph element that links to a Google resource (such as a file in Google Drive, a YouTube video, or a Calendar event.)
     */
    richLink?: Schema$RichLink;
    /**
     * The zero-based start index of this paragraph element, in UTF-16 code units.
     */
    startIndex?: number | null;
    /**
     * A text run paragraph element.
     */
    textRun?: Schema$TextRun;
  }
  /**
   * Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
   */
  export interface Schema$ParagraphStyle {
    /**
     * The text alignment for this paragraph.
     */
    alignment?: string | null;
    /**
     * Whether to avoid widows and orphans for the paragraph. If unset, the value is inherited from the parent.
     */
    avoidWidowAndOrphan?: boolean | null;
    /**
     * The border between this paragraph and the next and previous paragraphs. If unset, the value is inherited from the parent. The between border is rendered when the adjacent paragraph has the same border and indent properties. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.
     */
    borderBetween?: Schema$ParagraphBorder;
    /**
     * The border at the bottom of this paragraph. If unset, the value is inherited from the parent. The bottom border is rendered when the paragraph below has different border and indent properties. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.
     */
    borderBottom?: Schema$ParagraphBorder;
    /**
     * The border to the left of this paragraph. If unset, the value is inherited from the parent. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.
     */
    borderLeft?: Schema$ParagraphBorder;
    /**
     * The border to the right of this paragraph. If unset, the value is inherited from the parent. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.
     */
    borderRight?: Schema$ParagraphBorder;
    /**
     * The border at the top of this paragraph. If unset, the value is inherited from the parent. The top border is rendered when the paragraph above has different border and indent properties. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.
     */
    borderTop?: Schema$ParagraphBorder;
    /**
     * The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since paragraph direction is not inherited.
     */
    direction?: string | null;
    /**
     * The heading ID of the paragraph. If empty, then this paragraph is not a heading. This property is read-only.
     */
    headingId?: string | null;
    /**
     * The amount of indentation for the paragraph on the side that corresponds to the end of the text, based on the current paragraph direction. If unset, the value is inherited from the parent.
     */
    indentEnd?: Schema$Dimension;
    /**
     * The amount of indentation for the first line of the paragraph. If unset, the value is inherited from the parent.
     */
    indentFirstLine?: Schema$Dimension;
    /**
     * The amount of indentation for the paragraph on the side that corresponds to the start of the text, based on the current paragraph direction. If unset, the value is inherited from the parent.
     */
    indentStart?: Schema$Dimension;
    /**
     * Whether all lines of the paragraph should be laid out on the same page or column if possible. If unset, the value is inherited from the parent.
     */
    keepLinesTogether?: boolean | null;
    /**
     * Whether at least a part of this paragraph should be laid out on the same page or column as the next paragraph if possible. If unset, the value is inherited from the parent.
     */
    keepWithNext?: boolean | null;
    /**
     * The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.
     */
    lineSpacing?: number | null;
    /**
     * The named style type of the paragraph. Since updating the named style type affects other properties within ParagraphStyle, the named style type is applied before the other properties are updated.
     */
    namedStyleType?: string | null;
    /**
     * Whether the current paragraph should always start at the beginning of a page. If unset, the value is inherited from the parent. Attempting to update page_break_before for paragraphs in unsupported regions, including Table, Header, Footer and Footnote, can result in an invalid document state that returns a 400 bad request error.
     */
    pageBreakBefore?: boolean | null;
    /**
     * The shading of the paragraph. If unset, the value is inherited from the parent.
     */
    shading?: Schema$Shading;
    /**
     * The amount of extra space above the paragraph. If unset, the value is inherited from the parent.
     */
    spaceAbove?: Schema$Dimension;
    /**
     * The amount of extra space below the paragraph. If unset, the value is inherited from the parent.
     */
    spaceBelow?: Schema$Dimension;
    /**
     * The spacing mode for the paragraph.
     */
    spacingMode?: string | null;
    /**
     * A list of the tab stops for this paragraph. The list of tab stops is not inherited. This property is read-only.
     */
    tabStops?: Schema$TabStop[];
  }
  /**
   * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$ParagraphStyleSuggestionState {
    /**
     * Indicates if there was a suggested change to alignment.
     */
    alignmentSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to avoid_widow_and_orphan.
     */
    avoidWidowAndOrphanSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to border_between.
     */
    borderBetweenSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to border_bottom.
     */
    borderBottomSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to border_left.
     */
    borderLeftSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to border_right.
     */
    borderRightSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to border_top.
     */
    borderTopSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to direction.
     */
    directionSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to heading_id.
     */
    headingIdSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to indent_end.
     */
    indentEndSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to indent_first_line.
     */
    indentFirstLineSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to indent_start.
     */
    indentStartSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to keep_lines_together.
     */
    keepLinesTogetherSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to keep_with_next.
     */
    keepWithNextSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to line_spacing.
     */
    lineSpacingSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to named_style_type.
     */
    namedStyleTypeSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to page_break_before.
     */
    pageBreakBeforeSuggested?: boolean | null;
    /**
     * A mask that indicates which of the fields in shading have been changed in this suggestion.
     */
    shadingSuggestionState?: Schema$ShadingSuggestionState;
    /**
     * Indicates if there was a suggested change to space_above.
     */
    spaceAboveSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to space_below.
     */
    spaceBelowSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to spacing_mode.
     */
    spacingModeSuggested?: boolean | null;
  }
  /**
   * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
   */
  export interface Schema$Person {
    /**
     * Output only. The unique ID of this link.
     */
    personId?: string | null;
    /**
     * Output only. The properties of this Person. This field is always present.
     */
    personProperties?: Schema$PersonProperties;
    /**
     * IDs for suggestions that remove this person link from the document. A Person might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn't suggested for deletion.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * IDs for suggestions that insert this person link into the document. A Person might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn't a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested text style changes to this Person, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: {
      [key: string]: Schema$SuggestedTextStyle;
    } | null;
    /**
     * The text style of this Person.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * Properties specific to a linked Person.
   */
  export interface Schema$PersonProperties {
    /**
     * Output only. The email address linked to this Person. This field is always present.
     */
    email?: string | null;
    /**
     * Output only. The name of the person if it's displayed in the link text instead of the person's email address.
     */
    name?: string | null;
  }
  /**
   * Updates the number of pinned table header rows in a table.
   */
  export interface Schema$PinTableHeaderRowsRequest {
    /**
     * The number of table rows to pin, where 0 implies that all rows are unpinned.
     */
    pinnedHeaderRowsCount?: number | null;
    /**
     * The location where the table starts in the document.
     */
    tableStartLocation?: Schema$Location;
  }
  /**
   * An object that's tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.
   */
  export interface Schema$PositionedObject {
    /**
     * The ID of this positioned object.
     */
    objectId?: string | null;
    /**
     * The properties of this positioned object.
     */
    positionedObjectProperties?: Schema$PositionedObjectProperties;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion ID. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionId?: string | null;
    /**
     * The suggested changes to the positioned object properties, keyed by suggestion ID.
     */
    suggestedPositionedObjectPropertiesChanges?: {
      [key: string]: Schema$SuggestedPositionedObjectProperties;
    } | null;
  }
  /**
   * The positioning of a PositionedObject. The positioned object is positioned relative to the beginning of the Paragraph it's tethered to.
   */
  export interface Schema$PositionedObjectPositioning {
    /**
     * The layout of this positioned object.
     */
    layout?: string | null;
    /**
     * The offset of the left edge of the positioned object relative to the beginning of the Paragraph it's tethered to. The exact positioning of the object can depend on other content in the document and the document's styling.
     */
    leftOffset?: Schema$Dimension;
    /**
     * The offset of the top edge of the positioned object relative to the beginning of the Paragraph it's tethered to. The exact positioning of the object can depend on other content in the document and the document's styling.
     */
    topOffset?: Schema$Dimension;
  }
  /**
   * A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$PositionedObjectPositioningSuggestionState {
    /**
     * Indicates if there was a suggested change to layout.
     */
    layoutSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to left_offset.
     */
    leftOffsetSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to top_offset.
     */
    topOffsetSuggested?: boolean | null;
  }
  /**
   * Properties of a PositionedObject.
   */
  export interface Schema$PositionedObjectProperties {
    /**
     * The embedded object of this positioned object.
     */
    embeddedObject?: Schema$EmbeddedObject;
    /**
     * The positioning of this positioned object relative to the newline of the Paragraph that references this positioned object.
     */
    positioning?: Schema$PositionedObjectPositioning;
  }
  /**
   * A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$PositionedObjectPropertiesSuggestionState {
    /**
     * A mask that indicates which of the fields in embedded_object have been changed in this suggestion.
     */
    embeddedObjectSuggestionState?: Schema$EmbeddedObjectSuggestionState;
    /**
     * A mask that indicates which of the fields in positioning have been changed in this suggestion.
     */
    positioningSuggestionState?: Schema$PositionedObjectPositioningSuggestionState;
  }
  /**
   * Specifies a contiguous range of text.
   */
  export interface Schema$Range {
    /**
     * The zero-based end index of this range, exclusive, in UTF-16 code units. In all current uses, an end index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.
     */
    endIndex?: number | null;
    /**
     * The ID of the header, footer, or footnote that this range is contained in. An empty segment ID signifies the document's body.
     */
    segmentId?: string | null;
    /**
     * The zero-based start index of this range, in UTF-16 code units. In all current uses, a start index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.
     */
    startIndex?: number | null;
    /**
     * The tab that contains this range. When omitted, the request applies to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document.
     */
    tabId?: string | null;
  }
  /**
   * Replaces all instances of text matching a criteria with replace text.
   */
  export interface Schema$ReplaceAllTextRequest {
    /**
     * Finds text in the document matching this substring.
     */
    containsText?: Schema$SubstringMatchCriteria;
    /**
     * The text that will replace the matched text.
     */
    replaceText?: string | null;
    /**
     * Optional. The criteria used to specify in which tabs the replacement occurs. When omitted, the replacement applies to all tabs. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the replacement applies to the singular tab. In a document containing multiple tabs: - If provided, the replacement applies to the specified tabs. - If omitted, the replacement applies to all tabs.
     */
    tabsCriteria?: Schema$TabsCriteria;
  }
  /**
   * The result of replacing text.
   */
  export interface Schema$ReplaceAllTextResponse {
    /**
     * The number of occurrences changed by replacing all text.
     */
    occurrencesChanged?: number | null;
  }
  /**
   * Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in order to mirror the behavior of the Docs editor.
   */
  export interface Schema$ReplaceImageRequest {
    /**
     * The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.
     */
    imageObjectId?: string | null;
    /**
     * The replacement method.
     */
    imageReplaceMethod?: string | null;
    /**
     * The tab that the image to be replaced is in. When omitted, the request is applied to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If omitted, the request applies to the first tab in the document.
     */
    tabId?: string | null;
    /**
     * The URI of the new image. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URI can't surpass 2 KB in length. The URI is saved with the image, and exposed through the ImageProperties.source_uri field.
     */
    uri?: string | null;
  }
  /**
   * Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.
   */
  export interface Schema$ReplaceNamedRangeContentRequest {
    /**
     * The ID of the named range whose content will be replaced. If there is no named range with the given ID a 400 bad request error is returned.
     */
    namedRangeId?: string | null;
    /**
     * The name of the NamedRanges whose content will be replaced. If there are multiple named ranges with the given name, then the content of each one will be replaced. If there are no named ranges with the given name, then the request will be a no-op.
     */
    namedRangeName?: string | null;
    /**
     * Optional. The criteria used to specify in which tabs the replacement occurs. When omitted, the replacement applies to all tabs. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the replacement applies to the singular tab. In a document containing multiple tabs: - If provided, the replacement applies to the specified tabs. - If omitted, the replacement applies to all tabs.
     */
    tabsCriteria?: Schema$TabsCriteria;
    /**
     * Replaces the content of the specified named range(s) with the given text.
     */
    text?: string | null;
  }
  /**
   * A single update to apply to a document.
   */
  export interface Schema$Request {
    /**
     * Creates a footer.
     */
    createFooter?: Schema$CreateFooterRequest;
    /**
     * Creates a footnote.
     */
    createFootnote?: Schema$CreateFootnoteRequest;
    /**
     * Creates a header.
     */
    createHeader?: Schema$CreateHeaderRequest;
    /**
     * Creates a named range.
     */
    createNamedRange?: Schema$CreateNamedRangeRequest;
    /**
     * Creates bullets for paragraphs.
     */
    createParagraphBullets?: Schema$CreateParagraphBulletsRequest;
    /**
     * Deletes content from the document.
     */
    deleteContentRange?: Schema$DeleteContentRangeRequest;
    /**
     * Deletes a footer from the document.
     */
    deleteFooter?: Schema$DeleteFooterRequest;
    /**
     * Deletes a header from the document.
     */
    deleteHeader?: Schema$DeleteHeaderRequest;
    /**
     * Deletes a named range.
     */
    deleteNamedRange?: Schema$DeleteNamedRangeRequest;
    /**
     * Deletes bullets from paragraphs.
     */
    deleteParagraphBullets?: Schema$DeleteParagraphBulletsRequest;
    /**
     * Deletes a positioned object from the document.
     */
    deletePositionedObject?: Schema$DeletePositionedObjectRequest;
    /**
     * Deletes a column from a table.
     */
    deleteTableColumn?: Schema$DeleteTableColumnRequest;
    /**
     * Deletes a row from a table.
     */
    deleteTableRow?: Schema$DeleteTableRowRequest;
    /**
     * Inserts an inline image at the specified location.
     */
    insertInlineImage?: Schema$InsertInlineImageRequest;
    /**
     * Inserts a page break at the specified location.
     */
    insertPageBreak?: Schema$InsertPageBreakRequest;
    /**
     * Inserts a section break at the specified location.
     */
    insertSectionBreak?: Schema$InsertSectionBreakRequest;
    /**
     * Inserts a table at the specified location.
     */
    insertTable?: Schema$InsertTableRequest;
    /**
     * Inserts an empty column into a table.
     */
    insertTableColumn?: Schema$InsertTableColumnRequest;
    /**
     * Inserts an empty row into a table.
     */
    insertTableRow?: Schema$InsertTableRowRequest;
    /**
     * Inserts text at the specified location.
     */
    insertText?: Schema$InsertTextRequest;
    /**
     * Merges cells in a table.
     */
    mergeTableCells?: Schema$MergeTableCellsRequest;
    /**
     * Updates the number of pinned header rows in a table.
     */
    pinTableHeaderRows?: Schema$PinTableHeaderRowsRequest;
    /**
     * Replaces all instances of the specified text.
     */
    replaceAllText?: Schema$ReplaceAllTextRequest;
    /**
     * Replaces an image in the document.
     */
    replaceImage?: Schema$ReplaceImageRequest;
    /**
     * Replaces the content in a named range.
     */
    replaceNamedRangeContent?: Schema$ReplaceNamedRangeContentRequest;
    /**
     * Unmerges cells in a table.
     */
    unmergeTableCells?: Schema$UnmergeTableCellsRequest;
    /**
     * Updates the style of the document.
     */
    updateDocumentStyle?: Schema$UpdateDocumentStyleRequest;
    /**
     * Updates the paragraph style at the specified range.
     */
    updateParagraphStyle?: Schema$UpdateParagraphStyleRequest;
    /**
     * Updates the section style of the specified range.
     */
    updateSectionStyle?: Schema$UpdateSectionStyleRequest;
    /**
     * Updates the style of table cells.
     */
    updateTableCellStyle?: Schema$UpdateTableCellStyleRequest;
    /**
     * Updates the properties of columns in a table.
     */
    updateTableColumnProperties?: Schema$UpdateTableColumnPropertiesRequest;
    /**
     * Updates the row style in a table.
     */
    updateTableRowStyle?: Schema$UpdateTableRowStyleRequest;
    /**
     * Updates the text style at the specified range.
     */
    updateTextStyle?: Schema$UpdateTextStyleRequest;
  }
  /**
   * A single response from an update.
   */
  export interface Schema$Response {
    /**
     * The result of creating a footer.
     */
    createFooter?: Schema$CreateFooterResponse;
    /**
     * The result of creating a footnote.
     */
    createFootnote?: Schema$CreateFootnoteResponse;
    /**
     * The result of creating a header.
     */
    createHeader?: Schema$CreateHeaderResponse;
    /**
     * The result of creating a named range.
     */
    createNamedRange?: Schema$CreateNamedRangeResponse;
    /**
     * The result of inserting an inline image.
     */
    insertInlineImage?: Schema$InsertInlineImageResponse;
    /**
     * The result of inserting an inline Google Sheets chart.
     */
    insertInlineSheetsChart?: Schema$InsertInlineSheetsChartResponse;
    /**
     * The result of replacing text.
     */
    replaceAllText?: Schema$ReplaceAllTextResponse;
  }
  /**
   * An RGB color.
   */
  export interface Schema$RgbColor {
    /**
     * The blue component of the color, from 0.0 to 1.0.
     */
    blue?: number | null;
    /**
     * The green component of the color, from 0.0 to 1.0.
     */
    green?: number | null;
    /**
     * The red component of the color, from 0.0 to 1.0.
     */
    red?: number | null;
  }
  /**
   * A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
   */
  export interface Schema$RichLink {
    /**
     * Output only. The ID of this link.
     */
    richLinkId?: string | null;
    /**
     * Output only. The properties of this RichLink. This field is always present.
     */
    richLinkProperties?: Schema$RichLinkProperties;
    /**
     * IDs for suggestions that remove this link from the document. A RichLink might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn't suggested for deletion.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * IDs for suggestions that insert this link into the document. A RichLink might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn't a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested text style changes to this RichLink, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: {
      [key: string]: Schema$SuggestedTextStyle;
    } | null;
    /**
     * The text style of this RichLink.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * Properties specific to a RichLink.
   */
  export interface Schema$RichLinkProperties {
    /**
     * Output only. The [MIME type](https://developers.google.com/drive/api/v3/mime-types) of the RichLink, if there's one (for example, when it's a file in Drive).
     */
    mimeType?: string | null;
    /**
     * Output only. The title of the RichLink as displayed in the link. This title matches the title of the linked resource at the time of the insertion or last update of the link. This field is always present.
     */
    title?: string | null;
    /**
     * Output only. The URI to the RichLink. This is always present.
     */
    uri?: string | null;
  }
  /**
   * A StructuralElement representing a section break. A section is a range of content that has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break. The document body always begins with a section break.
   */
  export interface Schema$SectionBreak {
    /**
     * The style of the section after this section break.
     */
    sectionStyle?: Schema$SectionStyle;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. A SectionBreak may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
  }
  /**
   * Properties that apply to a section's column.
   */
  export interface Schema$SectionColumnProperties {
    /**
     * The padding at the end of the column.
     */
    paddingEnd?: Schema$Dimension;
    /**
     * Output only. The width of the column.
     */
    width?: Schema$Dimension;
  }
  /**
   * The styling that applies to a section.
   */
  export interface Schema$SectionStyle {
    /**
     * The section's columns properties. If empty, the section contains one column with the default properties in the Docs editor. A section can be updated to have no more than 3 columns. When updating this property, setting a concrete value is required. Unsetting this property will result in a 400 bad request error.
     */
    columnProperties?: Schema$SectionColumnProperties[];
    /**
     * The style of column separators. This style can be set even when there's one column in the section. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    columnSeparatorStyle?: string | null;
    /**
     * The content direction of this section. If unset, the value defaults to LEFT_TO_RIGHT. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    contentDirection?: string | null;
    /**
     * The ID of the default footer. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's default_footer_id. This property is read-only.
     */
    defaultFooterId?: string | null;
    /**
     * The ID of the default header. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's default_header_id. This property is read-only.
     */
    defaultHeaderId?: string | null;
    /**
     * The ID of the footer used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this value is used for the footers on even pages in the section. If it is false, the footers on even pages use the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's even_page_footer_id. This property is read-only.
     */
    evenPageFooterId?: string | null;
    /**
     * The ID of the header used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this value is used for the headers on even pages in the section. If it is false, the headers on even pages use the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's even_page_header_id. This property is read-only.
     */
    evenPageHeaderId?: string | null;
    /**
     * The ID of the footer used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the footer on the first page of the section. If it's false, the footer on the first page of the section uses the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's first_page_footer_id. This property is read-only.
     */
    firstPageFooterId?: string | null;
    /**
     * The ID of the header used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the header on the first page of the section. If it's false, the header on the first page of the section uses the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's first_page_header_id. This property is read-only.
     */
    firstPageHeaderId?: string | null;
    /**
     * Optional. Indicates whether to flip the dimensions of DocumentStyle's page_size for this section, which allows changing the page orientation between portrait and landscape. If unset, the value inherits from DocumentStyle's flip_page_orientation. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    flipPageOrientation?: boolean | null;
    /**
     * The bottom page margin of the section. If unset, the value defaults to margin_bottom from DocumentStyle. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    marginBottom?: Schema$Dimension;
    /**
     * The footer margin of the section. If unset, the value defaults to margin_footer from DocumentStyle. If updated, use_custom_header_footer_margins is set to true on DocumentStyle. The value of use_custom_header_footer_margins on DocumentStyle indicates if a footer margin is being respected for this section When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    marginFooter?: Schema$Dimension;
    /**
     * The header margin of the section. If unset, the value defaults to margin_header from DocumentStyle. If updated, use_custom_header_footer_margins is set to true on DocumentStyle. The value of use_custom_header_footer_margins on DocumentStyle indicates if a header margin is being respected for this section. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    marginHeader?: Schema$Dimension;
    /**
     * The left page margin of the section. If unset, the value defaults to margin_left from DocumentStyle. Updating the left margin causes columns in this section to resize. Since the margin affects column width, it's applied before column properties. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    marginLeft?: Schema$Dimension;
    /**
     * The right page margin of the section. If unset, the value defaults to margin_right from DocumentStyle. Updating the right margin causes columns in this section to resize. Since the margin affects column width, it's applied before column properties. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    marginRight?: Schema$Dimension;
    /**
     * The top page margin of the section. If unset, the value defaults to margin_top from DocumentStyle. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    marginTop?: Schema$Dimension;
    /**
     * The page number from which to start counting the number of pages for this section. If unset, page numbering continues from the previous section. If the value is unset in the first SectionBreak, refer to DocumentStyle's page_number_start. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    pageNumberStart?: number | null;
    /**
     * Output only. The type of section.
     */
    sectionType?: string | null;
    /**
     * Indicates whether to use the first page header / footer IDs for the first page of the section. If unset, it inherits from DocumentStyle's use_first_page_header_footer for the first section. If the value is unset for subsequent sectors, it should be interpreted as false. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
     */
    useFirstPageHeaderFooter?: boolean | null;
  }
  /**
   * The shading of a paragraph.
   */
  export interface Schema$Shading {
    /**
     * The background color of this paragraph shading.
     */
    backgroundColor?: Schema$OptionalColor;
  }
  /**
   * A mask that indicates which of the fields on the base Shading have been changed in this suggested change. For any field set to true, there's a new suggested value.
   */
  export interface Schema$ShadingSuggestionState {
    /**
     * Indicates if there was a suggested change to the Shading.
     */
    backgroundColorSuggested?: boolean | null;
  }
  /**
   * A reference to a linked chart embedded from Google Sheets.
   */
  export interface Schema$SheetsChartReference {
    /**
     * The ID of the specific chart in the Google Sheets spreadsheet that's embedded.
     */
    chartId?: number | null;
    /**
     * The ID of the Google Sheets spreadsheet that contains the source chart.
     */
    spreadsheetId?: string | null;
  }
  /**
   * A mask that indicates which of the fields on the base SheetsChartReference have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$SheetsChartReferenceSuggestionState {
    /**
     * Indicates if there was a suggested change to chart_id.
     */
    chartIdSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to spreadsheet_id.
     */
    spreadsheetIdSuggested?: boolean | null;
  }
  /**
   * A width and height.
   */
  export interface Schema$Size {
    /**
     * The height of the object.
     */
    height?: Schema$Dimension;
    /**
     * The width of the object.
     */
    width?: Schema$Dimension;
  }
  /**
   * A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.
   */
  export interface Schema$SizeSuggestionState {
    /**
     * Indicates if there was a suggested change to height.
     */
    heightSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to width.
     */
    widthSuggested?: boolean | null;
  }
  /**
   * A StructuralElement describes content that provides structure to the document.
   */
  export interface Schema$StructuralElement {
    /**
     * The zero-based end index of this structural element, exclusive, in UTF-16 code units.
     */
    endIndex?: number | null;
    /**
     * A paragraph type of structural element.
     */
    paragraph?: Schema$Paragraph;
    /**
     * A section break type of structural element.
     */
    sectionBreak?: Schema$SectionBreak;
    /**
     * The zero-based start index of this structural element, in UTF-16 code units.
     */
    startIndex?: number | null;
    /**
     * A table type of structural element.
     */
    table?: Schema$Table;
    /**
     * A table of contents type of structural element.
     */
    tableOfContents?: Schema$TableOfContents;
  }
  /**
   * A criteria that matches a specific string of text in the document.
   */
  export interface Schema$SubstringMatchCriteria {
    /**
     * Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.
     */
    matchCase?: boolean | null;
    /**
     * Optional. True if the find value should be treated as a regular expression. Any backslashes in the pattern should be escaped. - `True`: the search text is treated as a regular expressions. - `False`: the search text is treated as a substring for matching.
     */
    searchByRegex?: boolean | null;
    /**
     * The text to search for in the document.
     */
    text?: string | null;
  }
  /**
   * A suggested change to a Bullet.
   */
  export interface Schema$SuggestedBullet {
    /**
     * A Bullet that only includes the changes made in this suggestion. This can be used along with the bullet_suggestion_state to see which fields have changed and their new values.
     */
    bullet?: Schema$Bullet;
    /**
     * A mask that indicates which of the fields on the base Bullet have been changed in this suggestion.
     */
    bulletSuggestionState?: Schema$BulletSuggestionState;
  }
  /**
   * A suggested change to the DocumentStyle.
   */
  export interface Schema$SuggestedDocumentStyle {
    /**
     * A DocumentStyle that only includes the changes made in this suggestion. This can be used along with the document_style_suggestion_state to see which fields have changed and their new values.
     */
    documentStyle?: Schema$DocumentStyle;
    /**
     * A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion.
     */
    documentStyleSuggestionState?: Schema$DocumentStyleSuggestionState;
  }
  /**
   * A suggested change to InlineObjectProperties.
   */
  export interface Schema$SuggestedInlineObjectProperties {
    /**
     * An InlineObjectProperties that only includes the changes made in this suggestion. This can be used along with the inline_object_properties_suggestion_state to see which fields have changed and their new values.
     */
    inlineObjectProperties?: Schema$InlineObjectProperties;
    /**
     * A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion.
     */
    inlineObjectPropertiesSuggestionState?: Schema$InlineObjectPropertiesSuggestionState;
  }
  /**
   * A suggested change to ListProperties.
   */
  export interface Schema$SuggestedListProperties {
    /**
     * A ListProperties that only includes the changes made in this suggestion. This can be used along with the list_properties_suggestion_state to see which fields have changed and their new values.
     */
    listProperties?: Schema$ListProperties;
    /**
     * A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion.
     */
    listPropertiesSuggestionState?: Schema$ListPropertiesSuggestionState;
  }
  /**
   * A suggested change to the NamedStyles.
   */
  export interface Schema$SuggestedNamedStyles {
    /**
     * A NamedStyles that only includes the changes made in this suggestion. This can be used along with the named_styles_suggestion_state to see which fields have changed and their new values.
     */
    namedStyles?: Schema$NamedStyles;
    /**
     * A mask that indicates which of the fields on the base NamedStyles have been changed in this suggestion.
     */
    namedStylesSuggestionState?: Schema$NamedStylesSuggestionState;
  }
  /**
   * A suggested change to a ParagraphStyle.
   */
  export interface Schema$SuggestedParagraphStyle {
    /**
     * A ParagraphStyle that only includes the changes made in this suggestion. This can be used along with the paragraph_style_suggestion_state to see which fields have changed and their new values.
     */
    paragraphStyle?: Schema$ParagraphStyle;
    /**
     * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion.
     */
    paragraphStyleSuggestionState?: Schema$ParagraphStyleSuggestionState;
  }
  /**
   * A suggested change to PositionedObjectProperties.
   */
  export interface Schema$SuggestedPositionedObjectProperties {
    /**
     * A PositionedObjectProperties that only includes the changes made in this suggestion. This can be used along with the positioned_object_properties_suggestion_state to see which fields have changed and their new values.
     */
    positionedObjectProperties?: Schema$PositionedObjectProperties;
    /**
     * A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion.
     */
    positionedObjectPropertiesSuggestionState?: Schema$PositionedObjectPropertiesSuggestionState;
  }
  /**
   * A suggested change to a TableCellStyle.
   */
  export interface Schema$SuggestedTableCellStyle {
    /**
     * A TableCellStyle that only includes the changes made in this suggestion. This can be used along with the table_cell_style_suggestion_state to see which fields have changed and their new values.
     */
    tableCellStyle?: Schema$TableCellStyle;
    /**
     * A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion.
     */
    tableCellStyleSuggestionState?: Schema$TableCellStyleSuggestionState;
  }
  /**
   * A suggested change to a TableRowStyle.
   */
  export interface Schema$SuggestedTableRowStyle {
    /**
     * A TableRowStyle that only includes the changes made in this suggestion. This can be used along with the table_row_style_suggestion_state to see which fields have changed and their new values.
     */
    tableRowStyle?: Schema$TableRowStyle;
    /**
     * A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion.
     */
    tableRowStyleSuggestionState?: Schema$TableRowStyleSuggestionState;
  }
  /**
   * A suggested change to a TextStyle.
   */
  export interface Schema$SuggestedTextStyle {
    /**
     * A TextStyle that only includes the changes made in this suggestion. This can be used along with the text_style_suggestion_state to see which fields have changed and their new values.
     */
    textStyle?: Schema$TextStyle;
    /**
     * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion.
     */
    textStyleSuggestionState?: Schema$TextStyleSuggestionState;
  }
  /**
   * A tab in a document.
   */
  export interface Schema$Tab {
    /**
     * The child tabs nested within this tab.
     */
    childTabs?: Schema$Tab[];
    /**
     * A tab with document contents, like text and images.
     */
    documentTab?: Schema$DocumentTab;
    /**
     * The properties of the tab, like ID and title.
     */
    tabProperties?: Schema$TabProperties;
  }
  /**
   * A StructuralElement representing a table.
   */
  export interface Schema$Table {
    /**
     * Number of columns in the table. It's possible for a table to be non-rectangular, so some rows may have a different number of cells.
     */
    columns?: number | null;
    /**
     * Number of rows in the table.
     */
    rows?: number | null;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. A Table may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The contents and style of each row.
     */
    tableRows?: Schema$TableRow[];
    /**
     * The style of the table.
     */
    tableStyle?: Schema$TableStyle;
  }
  /**
   * The contents and style of a cell in a Table.
   */
  export interface Schema$TableCell {
    /**
     * The content of the cell.
     */
    content?: Schema$StructuralElement[];
    /**
     * The zero-based end index of this cell, exclusive, in UTF-16 code units.
     */
    endIndex?: number | null;
    /**
     * The zero-based start index of this cell, in UTF-16 code units.
     */
    startIndex?: number | null;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. A TableCell may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested changes to the table cell style, keyed by suggestion ID.
     */
    suggestedTableCellStyleChanges?: {
      [key: string]: Schema$SuggestedTableCellStyle;
    } | null;
    /**
     * The style of the cell.
     */
    tableCellStyle?: Schema$TableCellStyle;
  }
  /**
   * A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
   */
  export interface Schema$TableCellBorder {
    /**
     * The color of the border. This color cannot be transparent.
     */
    color?: Schema$OptionalColor;
    /**
     * The dash style of the border.
     */
    dashStyle?: string | null;
    /**
     * The width of the border.
     */
    width?: Schema$Dimension;
  }
  /**
   * Location of a single cell within a table.
   */
  export interface Schema$TableCellLocation {
    /**
     * The zero-based column index. For example, the second column in the table has a column index of 1.
     */
    columnIndex?: number | null;
    /**
     * The zero-based row index. For example, the second row in the table has a row index of 1.
     */
    rowIndex?: number | null;
    /**
     * The location where the table starts in the document.
     */
    tableStartLocation?: Schema$Location;
  }
  /**
   * The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.
   */
  export interface Schema$TableCellStyle {
    /**
     * The background color of the cell.
     */
    backgroundColor?: Schema$OptionalColor;
    /**
     * The bottom border of the cell.
     */
    borderBottom?: Schema$TableCellBorder;
    /**
     * The left border of the cell.
     */
    borderLeft?: Schema$TableCellBorder;
    /**
     * The right border of the cell.
     */
    borderRight?: Schema$TableCellBorder;
    /**
     * The top border of the cell.
     */
    borderTop?: Schema$TableCellBorder;
    /**
     * The column span of the cell. This property is read-only.
     */
    columnSpan?: number | null;
    /**
     * The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Docs editor.
     */
    contentAlignment?: string | null;
    /**
     * The bottom padding of the cell.
     */
    paddingBottom?: Schema$Dimension;
    /**
     * The left padding of the cell.
     */
    paddingLeft?: Schema$Dimension;
    /**
     * The right padding of the cell.
     */
    paddingRight?: Schema$Dimension;
    /**
     * The top padding of the cell.
     */
    paddingTop?: Schema$Dimension;
    /**
     * The row span of the cell. This property is read-only.
     */
    rowSpan?: number | null;
  }
  /**
   * A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$TableCellStyleSuggestionState {
    /**
     * Indicates if there was a suggested change to background_color.
     */
    backgroundColorSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to border_bottom.
     */
    borderBottomSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to border_left.
     */
    borderLeftSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to border_right.
     */
    borderRightSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to border_top.
     */
    borderTopSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to column_span.
     */
    columnSpanSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to content_alignment.
     */
    contentAlignmentSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to padding_bottom.
     */
    paddingBottomSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to padding_left.
     */
    paddingLeftSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to padding_right.
     */
    paddingRightSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to padding_top.
     */
    paddingTopSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to row_span.
     */
    rowSpanSuggested?: boolean | null;
  }
  /**
   * The properties of a column in a table.
   */
  export interface Schema$TableColumnProperties {
    /**
     * The width of the column. Set when the column's `width_type` is FIXED_WIDTH.
     */
    width?: Schema$Dimension;
    /**
     * The width type of the column.
     */
    widthType?: string | null;
  }
  /**
   * A StructuralElement representing a table of contents.
   */
  export interface Schema$TableOfContents {
    /**
     * The content of the table of contents.
     */
    content?: Schema$StructuralElement[];
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. A TableOfContents may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
  }
  /**
   * A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with table cell location = (table_start_location, row = 0, column = 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]
   */
  export interface Schema$TableRange {
    /**
     * The column span of the table range.
     */
    columnSpan?: number | null;
    /**
     * The row span of the table range.
     */
    rowSpan?: number | null;
    /**
     * The cell location where the table range starts.
     */
    tableCellLocation?: Schema$TableCellLocation;
  }
  /**
   * The contents and style of a row in a Table.
   */
  export interface Schema$TableRow {
    /**
     * The zero-based end index of this row, exclusive, in UTF-16 code units.
     */
    endIndex?: number | null;
    /**
     * The zero-based start index of this row, in UTF-16 code units.
     */
    startIndex?: number | null;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. A TableRow may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested style changes to this row, keyed by suggestion ID.
     */
    suggestedTableRowStyleChanges?: {
      [key: string]: Schema$SuggestedTableRowStyle;
    } | null;
    /**
     * The contents and style of each cell in this row. It's possible for a table to be non-rectangular, so some rows may have a different number of cells than other rows in the same table.
     */
    tableCells?: Schema$TableCell[];
    /**
     * The style of the table row.
     */
    tableRowStyle?: Schema$TableRowStyle;
  }
  /**
   * Styles that apply to a table row.
   */
  export interface Schema$TableRowStyle {
    /**
     * The minimum height of the row. The row will be rendered in the Docs editor at a height equal to or greater than this value in order to show all the content in the row's cells.
     */
    minRowHeight?: Schema$Dimension;
    /**
     * Whether the row cannot overflow across page or column boundaries.
     */
    preventOverflow?: boolean | null;
    /**
     * Whether the row is a table header.
     */
    tableHeader?: boolean | null;
  }
  /**
   * A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$TableRowStyleSuggestionState {
    /**
     * Indicates if there was a suggested change to min_row_height.
     */
    minRowHeightSuggested?: boolean | null;
  }
  /**
   * Styles that apply to a table.
   */
  export interface Schema$TableStyle {
    /**
     * The properties of each column. Note that in Docs, tables contain rows and rows contain cells, similar to HTML. So the properties for a row can be found on the row's table_row_style.
     */
    tableColumnProperties?: Schema$TableColumnProperties[];
  }
  /**
   * Properties of a tab.
   */
  export interface Schema$TabProperties {
    /**
     * The zero-based index of the tab within the parent.
     */
    index?: number | null;
    /**
     * Output only. The depth of the tab within the document. Root-level tabs start at 0.
     */
    nestingLevel?: number | null;
    /**
     * Optional. The ID of the parent tab. Empty when the current tab is a root-level tab, which means it doesn't have any parents.
     */
    parentTabId?: string | null;
    /**
     * Output only. The ID of the tab. This field can't be changed.
     */
    tabId?: string | null;
    /**
     * The user-visible name of the tab.
     */
    title?: string | null;
  }
  /**
   * A criteria that specifies in which tabs a request executes.
   */
  export interface Schema$TabsCriteria {
    /**
     * The list of tab IDs in which the request executes.
     */
    tabIds?: string[] | null;
  }
  /**
   * A tab stop within a paragraph.
   */
  export interface Schema$TabStop {
    /**
     * The alignment of this tab stop. If unset, the value defaults to START.
     */
    alignment?: string | null;
    /**
     * The offset between this tab stop and the start margin.
     */
    offset?: Schema$Dimension;
  }
  /**
   * A ParagraphElement that represents a run of text that all has the same styling.
   */
  export interface Schema$TextRun {
    /**
     * The text of this run. Any non-text elements in the run are replaced with the Unicode character U+E907.
     */
    content?: string | null;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[] | null;
    /**
     * The suggested insertion IDs. A TextRun may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[] | null;
    /**
     * The suggested text style changes to this run, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: {
      [key: string]: Schema$SuggestedTextStyle;
    } | null;
    /**
     * The text style of this run.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
   */
  export interface Schema$TextStyle {
    /**
     * The background color of the text. If set, the color is either an RGB color or transparent, depending on the `color` field.
     */
    backgroundColor?: Schema$OptionalColor;
    /**
     * The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. Changes in this field don't affect the `font_size`.
     */
    baselineOffset?: string | null;
    /**
     * Whether or not the text is rendered as bold.
     */
    bold?: boolean | null;
    /**
     * The size of the text's font.
     */
    fontSize?: Schema$Dimension;
    /**
     * The foreground color of the text. If set, the color is either an RGB color or transparent, depending on the `color` field.
     */
    foregroundColor?: Schema$OptionalColor;
    /**
     * Whether or not the text is italicized.
     */
    italic?: boolean | null;
    /**
     * The hyperlink destination of the text. If unset, there's no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be updated to the default link color and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.
     */
    link?: Schema$Link;
    /**
     * Whether or not the text is in small capital letters.
     */
    smallCaps?: boolean | null;
    /**
     * Whether or not the text is struck through.
     */
    strikethrough?: boolean | null;
    /**
     * Whether or not the text is underlined.
     */
    underline?: boolean | null;
    /**
     * The font family and rendered weight of the text. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.
     */
    weightedFontFamily?: Schema$WeightedFontFamily;
  }
  /**
   * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  export interface Schema$TextStyleSuggestionState {
    /**
     * Indicates if there was a suggested change to background_color.
     */
    backgroundColorSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to baseline_offset.
     */
    baselineOffsetSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to bold.
     */
    boldSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to font_size.
     */
    fontSizeSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to foreground_color.
     */
    foregroundColorSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to italic.
     */
    italicSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to link.
     */
    linkSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to small_caps.
     */
    smallCapsSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to strikethrough.
     */
    strikethroughSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to underline.
     */
    underlineSuggested?: boolean | null;
    /**
     * Indicates if there was a suggested change to weighted_font_family.
     */
    weightedFontFamilySuggested?: boolean | null;
  }
  /**
   * Unmerges cells in a Table.
   */
  export interface Schema$UnmergeTableCellsRequest {
    /**
     * The table range specifying which cells of the table to unmerge. All merged cells in this range will be unmerged, and cells that are already unmerged will not be affected. If the range has no merged cells, the request will do nothing. If there is text in any of the merged cells, the text will remain in the "head" cell of the resulting block of unmerged cells. The "head" cell is the upper-left cell when the content direction is from left to right, and the upper-right otherwise.
     */
    tableRange?: Schema$TableRange;
  }
  /**
   * Updates the DocumentStyle.
   */
  export interface Schema$UpdateDocumentStyleRequest {
    /**
     * The styles to set on the document. Certain document style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of DocumentStyle for more information.
     */
    documentStyle?: Schema$DocumentStyle;
    /**
     * The fields that should be updated. At least one field must be specified. The root `document_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the background, set `fields` to `"background"`.
     */
    fields?: string | null;
    /**
     * The tab that contains the style to update. When omitted, the request applies to the first tab. In a document containing a single tab: - If provided, must match the singular tab's ID. - If omitted, the request applies to the singular tab. In a document containing multiple tabs: - If provided, the request applies to the specified tab. - If not provided, the request applies to the first tab in the document.
     */
    tabId?: string | null;
  }
  /**
   * Update the styling of all paragraphs that overlap with the given range.
   */
  export interface Schema$UpdateParagraphStyleRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `paragraph_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the paragraph style's alignment property, set `fields` to `"alignment"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string | null;
    /**
     * The styles to set on the paragraphs. Certain paragraph style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of ParagraphStyle for more information.
     */
    paragraphStyle?: Schema$ParagraphStyle;
    /**
     * The range overlapping the paragraphs to style.
     */
    range?: Schema$Range;
  }
  /**
   * Updates the SectionStyle.
   */
  export interface Schema$UpdateSectionStyleRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `section_style` is implied and must not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the left margin, set `fields` to `"margin_left"`.
     */
    fields?: string | null;
    /**
     * The range overlapping the sections to style. Because section breaks can only be inserted inside the body, the segment ID field must be empty.
     */
    range?: Schema$Range;
    /**
     * The styles to be set on the section. Certain section style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of SectionStyle for more information.
     */
    sectionStyle?: Schema$SectionStyle;
  }
  /**
   * Updates the style of a range of table cells.
   */
  export interface Schema$UpdateTableCellStyleRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `tableCellStyle` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table cell background color, set `fields` to `"backgroundColor"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string | null;
    /**
     * The style to set on the table cells. When updating borders, if a cell shares a border with an adjacent cell, the corresponding border property of the adjacent cell is updated as well. Borders that are merged and invisible are not updated. Since updating a border shared by adjacent cells in the same request can cause conflicting border updates, border updates are applied in the following order: - `border_right` - `border_left` - `border_bottom` - `border_top`
     */
    tableCellStyle?: Schema$TableCellStyle;
    /**
     * The table range representing the subset of the table to which the updates are applied.
     */
    tableRange?: Schema$TableRange;
    /**
     * The location where the table starts in the document. When specified, the updates are applied to all the cells in the table.
     */
    tableStartLocation?: Schema$Location;
  }
  /**
   * Updates the TableColumnProperties of columns in a table.
   */
  export interface Schema$UpdateTableColumnPropertiesRequest {
    /**
     * The list of zero-based column indices whose property should be updated. If no indices are specified, all columns will be updated.
     */
    columnIndices?: number[] | null;
    /**
     * The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"width"`.
     */
    fields?: string | null;
    /**
     * The table column properties to update. If the value of `table_column_properties#width` is less than 5 points (5/72 inch), a 400 bad request error is returned.
     */
    tableColumnProperties?: Schema$TableColumnProperties;
    /**
     * The location where the table starts in the document.
     */
    tableStartLocation?: Schema$Location;
  }
  /**
   * Updates the TableRowStyle of rows in a table.
   */
  export interface Schema$UpdateTableRowStyleRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `tableRowStyle` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`.
     */
    fields?: string | null;
    /**
     * The list of zero-based row indices whose style should be updated. If no indices are specified, all rows will be updated.
     */
    rowIndices?: number[] | null;
    /**
     * The styles to be set on the rows.
     */
    tableRowStyle?: Schema$TableRowStyle;
    /**
     * The location where the table starts in the document.
     */
    tableStartLocation?: Schema$Location;
  }
  /**
   * Update the styling of text.
   */
  export interface Schema$UpdateTextStyleRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `text_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string | null;
    /**
     * The range of text to style. The range may be extended to include adjacent newlines. If the range fully contains a paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style. Ranges cannot be inserted inside a relative UpdateTextStyleRequest.
     */
    range?: Schema$Range;
    /**
     * The styles to set on the text. If the value for a particular style matches that of the parent, that style will be set to inherit. Certain text style changes may cause other changes in order to to mirror the behavior of the Docs editor. See the documentation of TextStyle for more information.
     */
    textStyle?: Schema$TextStyle;
  }
  /**
   * Represents a font family and weight of text.
   */
  export interface Schema$WeightedFontFamily {
    /**
     * The font family of the text. The font family can be any font from the Font menu in Docs or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.
     */
    fontFamily?: string | null;
    /**
     * The weight of the font. This field can have any value that's a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. The default value is `400` ("normal"). The font weight makes up just one component of the rendered font weight. A combination of the `weight` and the text style's resolved `bold` value determine the rendered weight, after accounting for inheritance: * If the text is bold and the weight is less than `400`, the rendered weight is 400. * If the text is bold and the weight is greater than or equal to `400` but is less than `700`, the rendered weight is `700`. * If the weight is greater than or equal to `700`, the rendered weight is equal to the weight. * If the text is not bold, the rendered weight is equal to the weight.
     */
    weight?: number | null;
  }
  /**
   * Provides control over how write requests are executed.
   */
  export interface Schema$WriteControl {
    /**
     * The optional revision ID of the document the write request is applied to. If this is not the latest revision of the document, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied.
     */
    requiredRevisionId?: string | null;
    /**
     * The optional target revision ID of the document the write request is applied to. If collaborator changes have occurred after the document was read using the API, the changes produced by this write request are applied against the collaborator changes. This results in a new revision of the document that incorporates both the collaborator changes and the changes in the request, with the Docs server resolving conflicting changes. When using target revision ID, the API client can be thought of as another collaborator of the document. The target revision ID can only be used to write to recent versions of a document. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 bad request error. The request should be tried again after retrieving the latest version of the document. Usually a revision ID remains valid for use as a target revision for several minutes after it's read, but for frequently edited documents this window might be shorter.
     */
    targetRevisionId?: string | null;
  }

  export class Resource$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/docs.googleapis.com
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
     * const docs = google.docs('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/documents',
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await docs.documents.batchUpdate({
     *     // The ID of the document to update.
     *     documentId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": [],
     *       //   "writeControl": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "documentId": "my_documentId",
     *   //   "replies": [],
     *   //   "writeControl": {}
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
      params: Params$Resource$Documents$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Documents$Batchupdate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateDocumentResponse>>;
    batchUpdate(
      params: Params$Resource$Documents$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Documents$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdateDocumentResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdateDocumentResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Documents$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdateDocumentResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdateDocumentResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Documents$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdateDocumentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdateDocumentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdateDocumentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateDocumentResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://docs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents/{documentId}:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['documentId'],
        pathParams: ['documentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateDocumentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdateDocumentResponse>(parameters);
      }
    }

    /**
     * Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/docs.googleapis.com
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
     * const docs = google.docs('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/documents',
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await docs.documents.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "body": {},
     *       //   "documentId": "my_documentId",
     *       //   "documentStyle": {},
     *       //   "footers": {},
     *       //   "footnotes": {},
     *       //   "headers": {},
     *       //   "inlineObjects": {},
     *       //   "lists": {},
     *       //   "namedRanges": {},
     *       //   "namedStyles": {},
     *       //   "positionedObjects": {},
     *       //   "revisionId": "my_revisionId",
     *       //   "suggestedDocumentStyleChanges": {},
     *       //   "suggestedNamedStylesChanges": {},
     *       //   "suggestionsViewMode": "my_suggestionsViewMode",
     *       //   "tabs": [],
     *       //   "title": "my_title"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "body": {},
     *   //   "documentId": "my_documentId",
     *   //   "documentStyle": {},
     *   //   "footers": {},
     *   //   "footnotes": {},
     *   //   "headers": {},
     *   //   "inlineObjects": {},
     *   //   "lists": {},
     *   //   "namedRanges": {},
     *   //   "namedStyles": {},
     *   //   "positionedObjects": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "suggestedDocumentStyleChanges": {},
     *   //   "suggestedNamedStylesChanges": {},
     *   //   "suggestionsViewMode": "my_suggestionsViewMode",
     *   //   "tabs": [],
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
      params: Params$Resource$Documents$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Documents$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Document>>;
    create(
      params: Params$Resource$Documents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Documents$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    create(
      params: Params$Resource$Documents$Create,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    create(callback: BodyResponseCallback<Schema$Document>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Documents$Create
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Document>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Documents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://docs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }

    /**
     * Gets the latest version of the specified document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/docs.googleapis.com
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
     * const docs = google.docs('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/documents',
     *       'https://www.googleapis.com/auth/documents.readonly',
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await docs.documents.get({
     *     // The ID of the document to retrieve.
     *     documentId: 'placeholder-value',
     *     // Whether to populate the Document.tabs field instead of the text content fields like `body` and `documentStyle` on Document. - When `True`: Document content populates in the Document.tabs field instead of the text content fields in Document. - When `False`: The content of the document's first tab populates the content fields in Document excluding Document.tabs. If a document has only one tab, then that tab is used to populate the document content. Document.tabs will be empty.
     *     includeTabsContent: 'placeholder-value',
     *     // The suggestions view mode to apply to the document. This allows viewing the document with all suggestions inline, accepted or rejected. If one is not specified, DEFAULT_FOR_CURRENT_ACCESS is used.
     *     suggestionsViewMode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "body": {},
     *   //   "documentId": "my_documentId",
     *   //   "documentStyle": {},
     *   //   "footers": {},
     *   //   "footnotes": {},
     *   //   "headers": {},
     *   //   "inlineObjects": {},
     *   //   "lists": {},
     *   //   "namedRanges": {},
     *   //   "namedStyles": {},
     *   //   "positionedObjects": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "suggestedDocumentStyleChanges": {},
     *   //   "suggestedNamedStylesChanges": {},
     *   //   "suggestionsViewMode": "my_suggestionsViewMode",
     *   //   "tabs": [],
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
      params: Params$Resource$Documents$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Documents$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Document>>;
    get(
      params: Params$Resource$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Documents$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    get(
      params: Params$Resource$Documents$Get,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    get(callback: BodyResponseCallback<Schema$Document>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Documents$Get
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Document>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://docs.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents/{documentId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['documentId'],
        pathParams: ['documentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }
  }

  export interface Params$Resource$Documents$Batchupdate
    extends StandardParameters {
    /**
     * The ID of the document to update.
     */
    documentId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateDocumentRequest;
  }
  export interface Params$Resource$Documents$Create extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Document;
  }
  export interface Params$Resource$Documents$Get extends StandardParameters {
    /**
     * The ID of the document to retrieve.
     */
    documentId?: string;
    /**
     * Whether to populate the Document.tabs field instead of the text content fields like `body` and `documentStyle` on Document. - When `True`: Document content populates in the Document.tabs field instead of the text content fields in Document. - When `False`: The content of the document's first tab populates the content fields in Document excluding Document.tabs. If a document has only one tab, then that tab is used to populate the document content. Document.tabs will be empty.
     */
    includeTabsContent?: boolean;
    /**
     * The suggestions view mode to apply to the document. This allows viewing the document with all suggestions inline, accepted or rejected. If one is not specified, DEFAULT_FOR_CURRENT_ACCESS is used.
     */
    suggestionsViewMode?: string;
  }
}
