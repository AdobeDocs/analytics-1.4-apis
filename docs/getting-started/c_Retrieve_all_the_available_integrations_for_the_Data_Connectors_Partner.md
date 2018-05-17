# Step 1: Retrieve Available Integrations for the Data Connectors Partner

 

Your data connectors product may have multiple customers and you can access the data for the integration with each of these customers. In this section, you will retrieve the integration IDs for all your integrations and then loop over them to retrieve the data for your reports.

**Note:** For this article, you will likely only have one integration for the JJ. Esquire customer.

1.  Open the solution file in your IDE and review the code to retrieve all the integrations. The **Partner.GetIntegrations** method returns details about all the active data connectors integrations in an array. You must create a loop over the array to access individual integrations.

In this example, you will only use the Integration ID.

```
Java Code
 
/* Get all the Partner integrations */
 IntegrationDetail[] integrationDetails = genesisIntegrationWebServicePortType.partnerGetIntegrations("");
 
      /*For each product go through and get back a report of Twitter
        followers for the report suite on a given date using a On Demand
        script. */
for (IntegrationDetail integrationDetail : integrationDetails)
{
 
}
```

```
C# Code
 
/* Get all the Partner integrations */
            integrationDetail[] integrationDetails = 
  genesisIntegrationWebServicePortTypeClient.PartnerGetIntegrations("");
 
      /*For each product go through and get back a report of Twitter followers for the report suite on a given date using a On Demand script.
            */
      for (int i = 0; i < integrationDetails.Length; i++)
      {
 
}
```

In the next section, you will create the method to generate the report. The last section of this article will call the new method from within this for loop.

**Parent topic:** [4. Partner Reports Tutorial](c_Create_Data_Connectors_Partner_Reports_using_the_Partner_API.md)

