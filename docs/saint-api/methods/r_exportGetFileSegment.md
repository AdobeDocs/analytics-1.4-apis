# ExportGetFileSegment

Retrieves a page of data, known as a file segment, from a completed Saint job.

## Saint.ExportGetFileSegment Parameters

|Parameter|Type|Description|
|---------|----|-----------|
|**file\_id** |`xsd:int` | The ID of the export file you want to view. You can get this value from [SAINT.CheckJobStatus](r_checkJobStatus.md#). |
|**segment\_id** |`xsd:int` | The number of the data page you want to view from the SAINT export job. The `viewable_pages` value in [SAINT.CheckJobStatus](r_checkJobStatus.md#) indicates the number of data pages in the job. Valid values for `segment_id` are between 1 and the value of `viewable_pages`. |

## Saint.ExportGetFileSegment Response

|Type|Description|
|----|-----------|
|[tns:pagedetails](../data_types/r_pagedetails.md#) | Information and data for the specified SAINT data segment. |

For more information, see [ExportGetFileSegment Request](../sample_code/r_exportGetFileSegment_sample.md#).

**Parent topic:** [Methods](../methods/c_saint_methods.md)

