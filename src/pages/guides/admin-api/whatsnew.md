# Changes in 1.4

This section describes the changes in version 1.4:

**Note:** During this beta, you can view generated [HTML documentation](http://services.w3.org/xslt?xslfile=http://tomi.vanek.sk/xml/wsdl-viewer.xsl&xmlfile=https://beta-e-api.omniture.com/admin/1.4/?wsdl&transform=Submit) to view changes that do not yet appear in this documentation.

## Removed Methods

- Company.CancelQueueItem
- Company.GetTokenCount
- Company.GetTokenUsage
- Permissions.GetCategories
- Permissions.GetReportSuiteGroupCount
- ReportSuite.AddCorrelations
- ReportSuite. DeleteBaseURL
- ReportSuite. DeleteCorrelations
- ReportSuite. DeletePages
- ReportSuite.DeleteSavedFilters
- ReportSuite.GetClassificationHierarchies
- ReportSuite.GetCorrelations
- ReportSuite. GetMarketingChannelsCustomSubRelations
- ReportSuite. GetSavedFilters
- ReportSuite.GetPages
- ReportSuite.GetUIVisibility
- ReportSuite.SavePages
- ReportSuite. SaveSavedFilters
- ReportSuite. SaveUIVisibility
- Report.Profile

## Renamed Methods

|**Previous Name (1.3)** |**New Name (1.4)** |
|-----|-----|
|Permissions.GetReportBuilderLogin|ReportBuilder.GetLogin|
|ReportSuite.GetRealTimeConfiguration|ReportSuite.GetRealTimeSettings|
|ReportSuite.SaveRealTimeConfiguration|ReportSuite.SaveRealTimeSettings|
|ReportSuite.GetDiscoverActivate|ReportSuite.GetDiscoverEnabled|
|ReportSuite.GetProps|ReportSuite.GetProps|
|ReportSuite.GetEvars|ReportSuite.GetEvars|
|ReportSuite.GetPaidSearchDetection|ReportSuite.GetPaidSearchDetectionDetection|
|ReportSuite.DeleteClassification|ReportSuite.DeleteClassification|
|ReportSuite.GetAvailableElements|Report.GetElements / DataWarehouse.GetElements|
|ReportSuite.GetAvailableMetrics|Report.GetMetrics / DataWarehouse.GetMetrics|
|ReportSuite.GetMarketingChannelCost|ReportSuite.GetMarketingChannelCosts|
|ReportSuite.SaveClassifications|ReportSuite.SaveClassification|
|ReportSuite.SaveTrafficVars|ReportSuite.SaveProps|
|Saint.CheckJobStatus|Classifications.GetStatus|
|Saint.CreateFTP|Classifications.CreateFTP|
|Saint.ExportCreateJob|Classifications.CreateExport|
|Saint.ExportGetFileSegment|Classifications.GetExport|
|Saint.GetCompatibilityMetrics|Classifications.GetCompatibilityElements|
|Saint.GetFilters|Classifications.GetFilters|
|Saint.GetTemplate|Classifications.GetTemplate|
|Saint.ImportCreateJob|Classifications.CreateImport|
|Saint.ImportCommitJob|Classifications.CommitImport|
|Saint.ImportPopulateJob|Classifications.PopulateImport|
|Saint.ListFTP|Classifications.GetFTP|

