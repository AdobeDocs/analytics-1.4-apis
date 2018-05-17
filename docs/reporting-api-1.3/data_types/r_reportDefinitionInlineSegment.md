# reportDefinitionInlineSegment

A structure that defines an inline segment to use in the reportDefinition.

See [Inline Segmentation](../reference/c_segments.md#) for more details and examples.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:string` |Specifies the element \(dimension\) on which you want to segment.|
|**selected** |`xsd:string` | \(Optional, provide either a selected value, or a classification and a search value\). An array containing one or more element \(dimension\) values to match \(case-insensitive string match\). |
|**classification** |`xsd:string` | \(Optional, provide either a selected value, or a classification and a search value\). Specifies how to integrate the include and an exclude segments. |
|**search** |`xsd:string` | \(Optional, provide either a selected value, or a classification and a search value\). |

Search is an array that contains two values:

-   **type**: selects the type of search to perform. The following search types are supported:
    -   `AND` 
    -   `OR` 
    -   `NOT` 
-   **keywords**: Array of values for which you want to search. The following special characters are supported in keywords:
    -   `^` matches the start of a string
    -   `$` matches the end of a string


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

**Parent topic:** [Data Types](../data_types/c_data_types.md)

