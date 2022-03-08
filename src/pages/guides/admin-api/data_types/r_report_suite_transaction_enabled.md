# report_suite_transaction_enabled

Data structure that contains information about report suite's transaction ID settings.

|Element|Type|Description|
|-------|----|-----------|
|**rsid** |`string` | The report suite ID. |
|**site_title** |`string` | The report suite friendly name. |
|**transaction** | [transaction_status_array](r_transaction_status_array.md#) - an array of [transaction_status](r_transaction_status.md#) | A list of transaction ID settings associated with this report suite. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)

