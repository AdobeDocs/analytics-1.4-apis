# Overview

## Entity Management

When using the Entity Management API, consider the following information:

-   There is no "undo" mechanism for these APIs.
-   Once the Recommendations cache updates, deleted entities are no longer available in any recommendation.
-   Recommendations can relearn previously deleted entities through a `productPage` mbox request or a CSV product upload.
-   URL parameters and values are case sensitive.

The Entity Management API lets you do the following tasks:

-   [delete_individual_entities](../entity_mgmt/r_delete_individual_entities.md#) 

-   [delete_entity_catalog](../entity_mgmt/r_delete_entity_catalog.md#) 


## Custom Algorithm

The Custom Algorithm API lets you create one or more custom algorithms and provide a list of the recommended items to show for a specific key.

**Note:** The Recommendations Download API uses a REST interface.

Creating custom algorithms is for advanced users only. To use the Custom Algorithm API, you must complete these tasks in the order listed, but you do not have to do them at the same time. Once you have created the algorithm name, you can upload data whenever needed \(for example, on a schedule to keep the information up to date\) without recreating the custom algorithm name.

