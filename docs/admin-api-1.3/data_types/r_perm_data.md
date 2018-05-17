# perm\_data

Data structure that contains information about a single permission, which can be associated with a permission group.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:int` | The permission category identifier. |
|**access** |`xsd:string` | The permission level. Supported values include: `all`: Grants full access. `none`: Denies all access. `cust`: Applies a custom access rule, as defined in the `selectedvals` element. |
|**selectedvals** |`xsd:string` | \(Conditional\) When `access = cust`, provide a comma-separated-value \(CSV\) list of permission subcategory IDs. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)

