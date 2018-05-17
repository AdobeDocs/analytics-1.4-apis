# Inline Segmentation

 

Inline segmentation allows you to segment report data using segment definitions that are included in the [reportDescription](../data_types/r_reportDescription.md#):

-   Segment by specific line items \(only include data where page = "Home Page"\)
-   Segment classified values by search criteria \(only include data where a classification of evar1 matches a search\)

Note the following limitations:

-   Segments are based on a page view container.
-   A maximum of 10,000 values are returned when you define an inline segment. If you encounter this limitation, either reduce the scope of the report or use a regular segment.
-   Some reports are not supported by inline segments. A complete list is at the bottom of this article.
-   Prop values cannot be used to define inline segments.

## Segmenting by Line Items

Create a segment definition with an id of the reporting element you want to segment, with a selected value that contains the match criteria.

```
{
   "reportDescription": {
       "reportSuiteID": "rsid",
       "date": "2013-09-01",
       "metrics": [
           { "id": "pageviews" }
       ],
       "elements": [
           { "id": "browser" }
       ],
       "segments": [
           { 
               "id": "page",
               "selected": ["Home Page", "Shopping Cart"]
           }
       ],
   }
}
```

This report shows the page views for every browser when the page name is either "Home Page" or "Shopping Cart".

## Segmenting by Classification Value

Create a segment definition with an id of the reporting element you want to segment, the classification you want to match, and a search string.

```
{
   "reportDescription": {
       "reportSuiteID": "rsid",
       "date": "2013-09-01",
       "metrics": [
           { "id": "pageviews" }
       ],
       "elements": [
           { "id": "browser" }
       ],
       "segments": [
           { 
               "id": "eVar1",
               "classification": "Group Name",
               "search": { "type": "OR", "keywords": ["Administrator", "Manager", "Director"] }
           }
       ],
   }
}
```

This report shows the page views for every browser when the "Group Name" classification of eVar1 contains "Administrator, "Manager", or "Director".

The following search types are supported:

-   `AND` 
-   `OR` 
-   `NOT` 

The following special characters are supported in keywords:

-   `^` matches the start of a string
-   `$` matches the end of a string

## Multiple Segments

You can provide multiple segments in the segments array. Segments are joined using AND. Segments cannot be nested.

```
"segments": [
           { 
               "id": "page",
               "selected": ["Home Page", "Shopping Cart"]
           },
           { 
               "id": "eVar1",
               "classification": "Group Name",
               "search": { "type": "OR", "keywords": ["Administrator", "Manager", "Director"] }
           }
       ]
```

Including this segment definition in a report shows metrics where the page name is either "Home Page" or "Shopping Cart", and the "Group Name" classification of eVar1 contains "Administrator, "Manager", or "Director".

## Examples

The following table contains an example of the different search types available with inline segmentation.

| **Classification Search Type** | **Search Example** |
|----|----|
|Equals|"search": \{ "type": "AND", "keywords": \["^key$"\] \}|
|Does not contain|"search": \{ "type": "NOT", "keywords": \["^key$"\] \}|
|Contains|"search": \{ "type": "AND", "keywords": \["key word"\] \}|
|Contains all of|"search": \{ "type": "AND", "keywords": \["key", "word"\] \}|
|Contains at least one of|"search": \{ "type": "OR", "keywords": \["key", "word"\] \}|
|Does not contain|"search": \{ "type": "NOT", "keywords": \["key"\] \}|
|Is null| N/A. Empty classifications are not matched by a search. |
|Is not null| Run a report on the selected element and classification. |
|Starts with|"search": \{ "type": "AND", "keywords": \["^key"\] \}|
|Does not start with|"search": \{ "type": "NOT", "keywords": \["^key"\] \}|
|Ends with|"search": \{ "type": "AND", "keywords": \["key$"\] \}|
|Does not end with|"search": \{ "type": "NOT", "keywords": \["key$"\] \}|

## Unsupported Reports

Inline segments cannot be applied to the following report data:

-   Pathing reports
-   Mobile carrier
-   Clickmap
-   GeoSegmentation Region, City, and U.S. DMA Reports \(GeoSegmentation Countries and U.S. States Reports support coming June 21st\)
-   Hierarchies
-   Clicks to page
-   Time spent on page
-   Time spent on site
-   Visit depth
-   Visit number
-   Keyword URLs
-   Return visits

**Parent topic:** [Reference](../reference/c_reference.md)

