# Classification API data types

Lists the data types used for the 1.4 Classifications API.

## classifications_compatibility_element

Data structure that contains information about valid data filters for a classifications export job.

|Element|Type|Description|
|-------|----|-----------|
|**`id`**|`string` |Element id.|
|**`name`**|`string` |Element name.|

## classifications_filters

Data structure that contains information about valid data filters for a classifications export job.

|Element|Type|Description|
|-------|----|-----------|
|**`filter_dates`** |Array of `string` |  |
|**`columns`** |Array of `string` |  |

## classifications_ftp

Complete details for a classifications FTP account.

|Element|Type|Description|
|-------|----|-----------|
|**`description`** |`string` | a textual description for the FTP account. |
|**`email`** |`string` | the email account to notify when imports are finished. |
|**`element`** |`enum` | element that you want to import or export. |
|**`overwrite`** |`boolean` | if true, keys that already exists will always be overwritten by new keys. |
|**`export`** |`boolean` | if true, the import will be automatically exported after import. |
|**`host`** |`string` | the name of the FTP host. |
|**`username`** |`string` | the username on the FTP account that was created. |
|**`password`** |`string` | the password "" "" |

## classifications_ftp_info

Contains connection details for an FTP account.

|Element|Type|Description|
|-------|----|-----------|
|**`ftp_host`** |`string` | the name of the FTP host. |
|**`ftp_username`** |`string` | the username on the FTP account that was created. |
|**`ftp_password`** |`string` | the password "" "" |

## classifications_job_status

Data structure that contains status information about a classifications job.

|Element|Type|Description|
|-------|----|-----------|
|**`id`** |`int` | The unique classifications identifier. |
|**`type`** |`string` | Specifies the ID type. Supported values include: `Job:` A classifications job ID. `File:` A classifications file ID. |
|**`viewable_pages`** |`int` | The number of pages in the request. |
|**`status`** |`string` | The job or file status. Supported values include:  `Waiting For User Data`  `In Progress`  `Completed`  `Completed--With Errors` |

## classifications_report_suite_compatibility_elements

Data structure that contains information about valid data filters for a classifications export job.

|Element|Type|Description|
|-------|----|-----------|
|**`id`**|`string` |Element id.|
|**`name`**|`string` |Element name.|
|**`compatibility_elements`**|`classifications_compatibility_element[]` |Valid data filters.|

## classifications_report_suite_ftp

Data structure that contains the template file for a classifications import.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`**| `string` | Report suite ID. |
|**`site_title`**| `string` | Site title. |
|**`ftp`**| `classifications_ftp[]` | FTP account details. |

## classifications_report_suite_template

Data structure that contains the template file for a classifications import.

|Element|Type|Description|
|-------|----|-----------|
|**`rsid`**|`string` | Report suite ID. |
|**`site_title`**|`string` | Site title. |
|**`template`**|`string` | Contents of the template file. |

## pagedetail

Data structure that contains information from a single data page of a classifications export job.

|Element|Type|Description|
|-------|----|-----------|
|**`warnings`** |`string[]` | An array that includes all warnings associated with the specified export file. |
|**`header`** |`string[]` | The column headings for the exported data. |
|**`data`** |`rows` | The data rows from the specified export file segment. |
