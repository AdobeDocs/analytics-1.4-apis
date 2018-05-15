# Step 3: Add Data Connectors JavaScript Code to your Analytics JavaScript Library File

 

The Data Connectors Integrate module code is a JavaScript code framework which provides methods for Customers to retrieve product data or pass Analytics variables back to a Data Connectors product. The retrieved product data can be used any way you like. For instance, you can display it in your web site or send it back to the Adobe Data Collection Layer. In this tutorial, you will do both.

In this section, you will:

● Review the code that the Data Connectors product implements for the integration

● Review the code that you defined to map your variables to the product

● Review the code that simulates the server-side product data

● Customize the code to process the product data only on one web page

**Note:** Refer to the [Integrate Module Developer Reference](https://marketing.adobe.com/developer/documentation/genesis/c-genesis-api-integrate) for details about all of the methods in the Data Connectors Integrate module code.

## Data Connectors product code

In this section, you will review the code that the Data Connectors product provides to you after you activate an integration. This section is informational only, to provide you with a basic understanding of how Data Connectors integrate code works.

1.  In the **js** folder, open the integrate\_code.js file. This file contains the JavaScript code that the Data Connectors product implements for the integration.
2.  Select all the code in the integrate\_code.js file.
3.  Copy and paste this code in to your JavaScript library file \(s\_code.js\) file, after the **Config** section and before the comment which states, "**DO NOT ALTER ANYTHING BELOW THIS LINE !**".
4.  In the **s\_code.js** file, locate the **s.loadModule\(\)** function.

The **s.loadModule\(\)** function has one argument which defines the module to load in to the "**s**" object. Remember that the s\_code.js file uses "**s**" as the default reference object for Analytics data. In this case the Data Connectors Partner has specified the**"Integrate"** module to be loaded so that its methods can be called in the next steps.

```
s.loadModule() function
 
s.loadModule("Integrate");
```

1.  In the s\_code.js file, locate the **s.Integrate.add\(\)** method.

The **add\(\)** method instantiates a partner object as an intermediate area to hold variable data. Each Data Connectors product will have a unique partner object name.

In this example, the Data Connectors Partner has named this argument, "**JJEsquireTwitterPod**"..

```
Integrate add() method
 
s.loadModule("Integrate");
s.Integrate.add("JJEsquireTwitterPod");
```

## Mapped variable code

In this section, you will review the code that maps the Data Connectors product variables to the Analytics variables. These are all the variables which you mapped in Step 1 of this tutorial, **Activate the integration for your Analytics report suite**.

You do not need to make any changes to this code, as it is provided to you from the Adobe engineering team.

1.  In the s\_code.js file, locate the **s.Integrate.JJEsquireTwitterPod.setVars\(\)** method.

The **setVars\(\)** method maps Data Connectors product data to your Analytics variables.

The syntax for the **setVars\(\)** method is shown below.

```
Integrate setVars() method syntax
 
s.Integrate.<partnerName>.setVars = function (s,p) {
s.<SCVar1> = p.<PVar1>;
s.<SCVar2> = p.<PVar2>;
...
s.<SCVarN> = p.<PVarN>;
};
```

The **setVars\(\)** method has the following properties as shown in Table 1.

|Property|Description|
|-------------|---------------|
| partnerName | The name of the partner object created with the add\(\) method. |
| s | The reference object for Analytics data. |
| p | The reference object for Data Connectors product data. |
| SCVarN | The name of the Analytics variable to be assigned a value from a Data Connectors product variable. |
| PVarN | The name of the of the Data Connectors product variable to import into Analytics. |

Table 1. The Integrate setVars\(\) function properties

Notice that **s.eVar3** is set to **p.twitter\_handle** and **s.events** is set to **"event3"**.

In this demo, the custom conversion variable, **eVar3**, is set to the Twitter handle of the current visitor to the web site. The custom event, **event3**, is set to track the number of followers for the current visitor.

```
Integrate setVars() method
 
s.loadModule("Integrate");
s.Integrate.add("JJEsquireTwitterPod");
s.Integrate.JJEsquireTwitterPod.setVars=function(s,p)
{
      s.eVar3 = p.twitter_handle;
      s.events = "event3";
}
```

1.  In the s\_code.js file, locate the**s.products** variable.

The **s.products** variable is used in conjunction with the event to pass additional data, such as product name and event value. The product name is set so that it can be viewed in the Products Report in Analytics. You will see the data in the Products Report in **Step 6: Run Analytics reports to verify Partner data collection**.

 **Note**: You can learn more about this and other Analytics variables in the **Collect visitor analytics using Analytics JavaScript Tagging** tutorial.

```
s.products parameters
 
s.products = "Category; Product; Quantity; Price; Event  [, Category; Product; Quantity; Price; Event]"
```

**s.products parameters** s.products = "Category; Product; Quantity; Price; Event \[, Category; Product; Quantity; Price; Event\]"

 **Note**: Use a semicolon between values in one product and a comma to separate products.

Notice that the product name is set to **follower\_count** and the **event3** value is set to the number of followers for the current visitor.

```
Integrate setVars() method
 
s.loadModule("Integrate");
s.Integrate.add("JJEsquireTwitterPod");
s.Integrate.JJEsquireTwitterPod.setVars=function(s,p)
{
                   s.eVar3 = p.twitter_handle;
      s.events = "event3";
                   s.products = ";follower_count;;;event3=" + p.twitter_followers;
}
```

## Code to simulate server-side product data

In this section, you will review the code which simulates retrieving product data from the server. Typically, the Data Connectors Partner will use the **get\(\)** method to import product data from a url. This code would be included in the Data Connectors JavaScript code provided to you.

 **Note:** Refer to the [Integrate Module Developer Reference](https://marketing.adobe.com/developer/documentation/genesis/c-genesis-api-integrate) for details about the **get\(\)** method.

To simplify this demo, you will not use server-side technology. Instead, you will call the **getTwitterData\(\)** function within the**twitter\_generator.js** JavaScript file to simulate returning product data from the server. The data is returned as a JSON object, which is then assigned to the product variables.

You do not need to make any changes to this code, as it is provided to you from the Adobe engineering team.

1.  In the s\_code.js file, locate the call to the **getTwitterData\(\)** method and the assignment of the**p.twitter\_handle** and**p.twitter\_followers** product variables.

```
Statically set partner object variables
 
s.loadModule("Integrate");
s.Integrate.add("JJEsquireTwitterPod");
s.Integrate.JJEsquireTwitterPod.setVars=function(s,p)
{
      eval(getTwitterData());
      p.twitter_handle = s_1_Integrate_twitterexample_get_0.author_handle;
      p.twitter_followers = s_1_Integrate_twitterexample_get_0.followers;  
                   s.eVar3 = p.twitter_handle;
      s.events = "event3";
                   s.products = ";follower_count;;;event3=" + p.twitter_followers;
              }
```

## Custom code to process product data only on one web page

In this section, you will add a conditional statement to the Data Connectors JavaScript code provided to you, to retrieve the product data and assign it to Analytics variables only on the web page where the data is used.

Because each web application page with Analytics JavaScript code calls the s\_code.js file, you will add a conditional statement to the Data Connectors JavaScript code in the s\_code.js file to check the current page. Since the product data associated with the twitter handle and twitter followers is only relevant for the JJ. Esquire Product List page, you will check for this web page.

1.  Add an **if** statement that checks whether the visitor is on the product list page of the application. Check the **s.pageName** variable which is set on each web page within the Analytics JavaScript page code for a value of "**Product List Page**".

```
Integrate setVars() method
 
s.loadModule("Integrate");
s.Integrate.add("JJEsquireTwitterPod");
s.Integrate.JJEsquireTwitterPod.setVars=function(s,p)
{
if(s.pageName=="Product List Page"){
      eval(getTwitterData());
      p.twitter_handle = s_1_Integrate_twitterexample_get_0.author_handle;
      p.twitter_followers = s_1_Integrate_twitterexample_get_0.followers;        
                                s.eVar3 = p.twitter_handle;
      s.events = "event3";
                                s.products = ";follower_count;;;event3=" + p.twitter_followers;
}
}
```

**Parent topic:** [3. Integrate Partner Data Tutorial](c_Integrate_Data_Connectors_Partner_Data_into_Customer_Application.md)

