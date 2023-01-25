# Segmentation reference

Inline segmentation allows you to segment report data using segment definitions that are include as part of the [reportDescription](index.md) :

- Segment by specific line items (only include data where page = "Home Page")
- Segment classified values by search criteria (only include data where a classification of eVar1 matches a search)

Note the following limitations:

- Segments are based on a page view container.
- A maximum of 10,000 values are returned when you define an inline segment. If you encounter this limitation, either reduce the scope of the report or use a regular segment.
- Some reports are not supported by inline segments. A complete list is at the bottom of this article.
- Prop values cannot be used to define inline segments.

# JSON object reference

The following properties are supported within the `segments` object:


|Element|Type|Description|
|-------|----|-----------|
| **`id`** | `string` | Specifies the existing saved segment ID that you want to apply to a search. **Important:** In version 1.4, inline segments no longer use the "id" parameter to specify the element as in 1.3. If migrating code from version 1.3, move the element value that was previously in the "id" parameter to the "element" parameter. |
| **`element`** |`string`| Specifies the element (dimension) on which you want to segment. |
| **`search`** | `object[]` | (Optional) Applies a search to the element. This object includes the following values:<br/>`type`: A string that indicates the type of search to use. Valid values include `and`, `or`, and `not`.<br/>`keywords`: A list of keywords to include or exclude from the search, based on the type. Keyword values can also leverage the following special characters to define advanced search criteria: `*` Wild Card (e.g. "page*.html"), `^` Starts With (e.g. "^http://"), and `$` Ends With (e.g. ".html$"). |
| **`classification`** | `string` | (Optional, provide either a selected value, or a classification and a search value). Specifies how to integrate the include and an exclude segments. |

## Segment by line items

Create a segment definition with an id of the reporting element you want to segment, with a selected value that contains the match criteria.

```json
{
   "reportDescription": {
       "reportSuiteID": "rsid",
       "date": "YYYY-09-01",
       "metrics": [
           { "id": "pageviews" }
       ],
       "elements": [
           { "id": "browser" }
       ],
       "segments": [
           { 
               "element": "page",
               "selected": ["Home Page", "Shopping Cart"]
           }
       ],
   }
}
```

This report shows the page views for every browser when the page name is either "Home Page" or "Shopping Cart".

## Segment by classification value

Create a segment definition with an id of the reporting element you want to segment, the classification you want to match, and a search string.

```json
{
   "reportDescription": {
       "reportSuiteID": "rsid",
       "date": "YYYY-09-01",
       "metrics": [
           { "id": "pageviews" }
       ],
       "elements": [
           { "id": "browser" }
       ],
       "segments": [
           { 
               "element": "eVar1",
               "classification": "Group Name",
               "search": { "type": "OR", "keywords": ["Administrator", "Manager", "Director"] }
           }
       ],
   }
}
```

This report shows the page views for every browser when the "Group Name" classification of eVar1 contains "Administrator, "Manager", or "Director".

## Multiple Segments

You can provide multiple segments in the segments array. Segments are joined using AND. Segments cannot be nested.

```json
"segments": [
    { 
        "element": "page",
        "selected": ["Home Page", "Shopping Cart"]
    },
    { 
        "element": "eVar1",
        "classification": "Group Name",
        "search": { "type": "OR", "keywords": ["Administrator", "Manager", "Director"] }
    }
]
```

Including this segment definition in a report shows metrics where the page name is either "Home Page" or "Shopping Cart", and the "Group Name" classification of eVar1 contains "Administrator, "Manager", or "Director".

## Examples

The following table contains an example of the different search types available with inline segmentation.

Classification Search Type | Search Example
--- | ---
Equals | `"search": { "type": "AND", "keywords": ["^key$"] }` 
Does not contain | `"search": { "type": "NOT", "keywords": ["^key$"] }`
Contains | `"search": { "type": "AND", "keywords": ["key word"] }`
Contains all of | `"search": { "type": "AND", "keywords": ["key", "word"] }`
Contains at least one of | `"search": { "type": "OR", "keywords": ["key", "word"] }`
Does not contain | `"search": { "type": "NOT", "keywords": ["key"] }`
Is null | N/A. Empty classifications are not matched by a search.
Is not null | Run a report on the selected element and classification.
Starts with | `"search": { "type": "AND", "keywords": ["^key"] }`
Does not start with | `"search": { "type": "NOT", "keywords": ["^key"] }`
Ends with | `"search": { "type": "AND", "keywords": ["key$"] }`
Does not end with | `"search": { "type": "NOT", "keywords": ["key$"] }`

## Unsupported reports and elements

Inline segments cannot be applied to the following report data:

- Pathing reports
- Mobile carrier
- Clickmap
- GeoSegmentation Region, City, and U.S. DMA Reports
- Hierarchies
- Clicks to page
- Time spent on page
- Time spent on site
- Visit depth
- Visit number
- Keyword URLs
- Return visits

The following elements are not supported for inline segments.

- `pagedepth`
- `visitnumber`
- `mobilecarrier`
- `hier`
- `paths`
- `fallout`