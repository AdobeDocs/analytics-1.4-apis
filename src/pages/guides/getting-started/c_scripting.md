# 1. On Demand Scripts Tutorial

 

In this first tutorial of the series, you will learn how to create On Demand scripts, which are necessary to create Partner reports. You will learn how to package these scripts during the creation of the Integration Wizard in Tutorial \#2, [2. Partner Application Configuration Tutorial](c_Partner_Application_Configuration_for_Data_Connectors_Tutorial.md#).

You will learn how to use On Demand scripts in article 4 \([4. Partner Reports Tutorial](c_Create_Data_Connectors_Partner_Reports_using_the_Partner_API.md#)\) and also learn how to use On Demand scripts with Product Builder scripts in articles 5 \([5. Classify Partner Data Tutorial](c_Classify_Partner_data_using_the_Partner_API.md#)\), 6 \([6. Import Bulk Data Tutorial](c_Import_bulk_Data_using_the_Partner_API.md#)\) and 7\([7. Data Warehouse Tutorial](c_Create_a_Data_Warehouse_Report_using_the_Partner_API.md#)\).

**Note:** The API Explorer can generate data connectors scripts. First, construct an API request in API Explorer and verify that the request returns the expected response. Then, to generate a script, select the result type **Data Connectors Script** from the drop-down, and then click "Get Response." API Explorer generates the script in the response field so you can copy it to a file.

## Prerequisite knowledge, system permissions and environment setup

-   This tutorial is for web developers with XML experience.
-   Partners must have a Developer Connection account to create scripts. Follow the directions in the Setup and Security article.

## Download code files for this tutorial

You can download the following solution files to compare against your finished code.

-    [Data Connectors\_scripts\_solution.zip](http://microsite.omniture.com/t2/api-xml/en_US/get_started/zips/Data_connectors_scripts_solution.zip) 

## An overview of On Demand scripts and the tools for creating them

Partners use On Demand scripts and the Partner API to pull reports on integrated \(both Partner and Customer\) data. For each report, you must create three On Demand scripts:

1.  one for *creating* the report request
2.  one for *checking the status* of the request, and
3.  one for *retrieving* the report data

Each script is an XML file that you can create by hand or by using various tools. In this series, you will learn how to create the scripts in the recommended way using Adobe Report Builder and Adobe API Explorer and Report Builder.

 ![](graphics/scripting0002.png) 

You will use API Explorer to generate the XML code for the API request, including the method parameters with empty values. You then use Report Builder to generate the specific parameter values. The modified and combined XML files become the final On Demand scripts.

These On Demand scripts are then packaged into the Integration Wizard by the Partner and then executed by the Customer. Once the Customer has integrated the product into their application and have tracked some data, the Partner can programmatically access that data and their own to run reports.

The Partner creates On Demand scripts, using API Explorer and Report Builder, which are then uploaded into the Integration Wizard and accessible for creation of reports.

![](graphics/scripting0003.png)

## Related Resources

-   **[Script for Defining Report Requests](c_define_report_requests.md)**  
 
-   **[Script for Checking Report Status](c_check_report_status.md)**  
 
-   **[Script for Retrieving Report Data](c_retrieve_report_data.md)**  
 

