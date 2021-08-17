# Download

The Download API lets you download recommendations information to a comma-separated values \(`.csv`\) file where you can view them off-line in a spreadsheet, or with a text editor.

**Note:** The Recommendations Download API uses a REST interface.

The `.csv` file includes a list of all recommendations for each product key. When using the Recommendations Download API, consider the following:

-   Each Recommendations download sends all Recommendations data, not just the data changes \(Deltas\) since the last download.
-   The Algorithm server updates the recommendations every two to six hours. Download results reflect these changes immediately.
-   The Download API is available anytime, except during regularly scheduled maintenance windows, which start each Thursday at 8:00 PM U.S. Pacific Time.

To use the Recommendations Download API, simply create the download URL. For example:

```
http://recommendations.omniture.com/rest?action=downloadRecommendations&id=43&clientKey=24be79b2-d631-4207-a435-c6d5dd11059a&client=clientcodehere
```

|Parameter|Description|
|---------|-----------|
|**action** | \(Required\) Identifies the type of Recommendations action to execute. To download Recommendations data, this value is always `downloadRecommendations`. |
| **id** | \(Required\) The Recommendations ID, which is visible by looking at the URL on the Recommendations' Edit page \(`id=XXX`\). Do NOT use the `groupId` value in the URL. If you provide an invalid client key or recommendation ID, the error "Client key or recommendation id invalid" is returned. |
| **clientKey** | \(Required\) the API token, which is available on the Recommendations' Settings page. |
|**client** | \(Required\) The client code, which is displayed on the Recommendations' Settings page. |

**Note:** Parameters and values are case sensitive.

**Parent topic:** [Methods](../entity_mgmt/r_Recommendations_API_Methods.md)

