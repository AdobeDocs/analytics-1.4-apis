# rs\_nav\_menu\_item

Data structure that contains the navigation menu tree for a report suite.

|Element|Type|Description|
|-------|----|-----------|
|**id** |`xsd:string` | Menu node ID. This value must be unique across all other menu items for the report suite. It should not be modified for items with custom\_value = false. |
|**name** |`xsd:string` | The display name. |
|**default\_name** |`xsd:string` | Menu node default name according to the original menu configuration. |
|**custom\_item** |`xsd:boolean` | Denotes if the item is a user customized item. Items with a value of "true" are to be considered as default to the report suite. |
|**class\_type** |`xsd:string` | Denotes the type of the menu item. 'Menu' = root menu, this value shouldn't be used elsewhere besides the root node. 'Folder' = a folder for other menu items. 'Link' = a link to an item. |
|**visible** |`xsd:boolean` | Can hide the menu item from display \(useful for existing non-custom menu items\). Note that setting this value does not automatically cascade the value to child menu items. |
|**children** |A collection of `rs_nav_menu_item` data structures.| Child menu items. |

**Parent topic:** [Data Types](../data_types/c_datatypes.md)

