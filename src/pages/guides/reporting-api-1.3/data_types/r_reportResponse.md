# reportResponse

A structure data type that returns data associated with a particular report request.

**Note:** **waitSeconds** and **runSeconds** are only available through the REST API or through the SOAP API when the <*Version\>* header is declared, and the version submitted is greater than or equal to **1.4.8**. To declare the version header in a soap request, add *<Version\>1.4.8</Version\>* inside the *<SOAP-ENV:Header\>* element of the SOAP request body.

**** 

|Name|Type|Description|
|----|----|-----------|
|**status** |`xsd:string` |A brief status of the queue request.|
|**statusMsg** |`xsd:string` |A longer description of the queue request status.|
|**statusDesc** |`xsd:string` |Additional status details.|
|**waitSeconds** |`xsd:int` |\(see note above\) The time in seconds this report waited in the queue before being run. A high value here is indicative of a large amount of report requests for a single company.|
|**runSeconds** |`xsd:int` |\(see note above\) The time in seconds this report took to process and return data. A high value here is indicative of a complex report or large date range.|
|**report** |[report](r_report.md#) | A structure containing the report data.

 |

**Parent topic:** [Data Types](../data_types/c_data_types.md)

