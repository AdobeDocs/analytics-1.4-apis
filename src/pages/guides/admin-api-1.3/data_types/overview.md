# Overview

The Administration API uses these custom data structures, including enumerated types.

A Data Type defines structure for organizing and containing a specific set of data. Data types can consist of two or more elements, each of which may be an array, enumeration, structure, or "primitive" element. Adobe defines data types using the following convention:

`<namespace>:<type>` 

For example:

-   `xsd:int` indicates that the data type is part of the `xsd` namespace \(XML Schema Definition\), and that the type is `int` \(Integer\). XML defines certain primitive \(common\) data types such as int, string or date. The [XML Schema Definition](http://www.w3.org/TR/xmlschema11-2/) describes all primitive data types.
-   `calculated_metric` indicates that the data type is part of the `tns` namespace \(a private Adobe namespace\), and that the custom data type is `calculated_metric`. The `tns` namespace prefixes all Adobe Marketing Cloud web service custom data types.

**Parent topic:** [Data Types](../data_types/c_datatypes.md)

