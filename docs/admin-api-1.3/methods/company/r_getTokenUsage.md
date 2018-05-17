# GetTokenUsage

Retrieves the company's API token usage statistics.

## Company.GetTokenUsage parameters

|Name|Type|Description|
|----|----|-----------|
|**token\_month** | xsd:string | \(optional\) Year and month for which you want to get token usage, in the format of YYYY-MM. Defaults to the current token period. |

None.

## Company.GetTokenUsage response

|Type|Description|
|----|-----------|
|[tns:token\_usage\_container](../../data_types/r_token_usage_container.md#) |Information about the company's token usage for the current calendar month. The API determines company identity by its unique authentication key.|

**Parent topic:** [Company](../../methods/company/c_api_admin_methods_company.md)

