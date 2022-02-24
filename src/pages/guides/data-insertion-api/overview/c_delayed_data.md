# Delayed Data

By using the Data Insertion API, you can submit delayed data (for example, from an offline application, to Adobe data collection servers.

**Note:** Data from delayed submissions is available to Data Warehouse and Ad hoc analysis.

When submitting delayed data, you must send visitor data in the order it was received, (see [Sequential Data Requirements](c_sequential_data.md#)) but you do not need to send data for different visitors in any specific order. For example, you can submit all data for visitor A before data for visitor B, even if some or all of visitor B data occurred before visitor A data.

Submitting delayed data requires an additional `<timestamp>` tag in the XML. Analytics discards data without a timestamp.

**Note:** 

To view time-stamped hits, Adobe ClientCare must enable time-stamp support on the report suite, in addition to the time-stamp variable that you set. Time-stamped hits sent to a report suite that has not been enabled do not appear in the report.

Format the timestamp data, including time zone, using either the Unix timestamp format or the ISO-8601 format. For example, using the ISO-8601 format, a timestamp for a visitor event that occurred on November 17, YYYY at 5:33 PM Mountain Time (GMT-7:00:00) is as follows:

`YYYY-11-17T17:33:22-07` 

Consider the following when submitting delayed (time-stamped) data:

- While a report suite is collecting time-stamped data, it cannot collect data through the standard JavaScript beacon method.
- You must enable time stamp support on a per-report-suite basis.
- You can also use Data Sources to send this type of data to the Experience Cloud via FTP. For more information, see the [Data Sources User Guide](https://marketing.adobe.com/resources/help/en_US/sc/datasources/).

 

