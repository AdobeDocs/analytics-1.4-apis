# What are the available Analytics variables and events?

 

Analytics provides two types of variables:

- Traffic variables
- Conversion variables

Analytics also provides events to track visitor actions.

## An overview of traffic variables

Traffic variables are non-persistent variables which count the number of times each value is sent to Analytics. Analytics provides some built-in, pre-defined traffic variables like pageName, channel, and server. These variables are counters. For instance, pageName counts the number of times a user has visited the page with this name.

You can also define up to 75 of your own custom traffic variables, called property or prop variables. Examples of prop variables are Page Type ("article", "category", etc.), Site Section ("sports", "business", etc.) and Geo Country ("Spain", "Singapore", etc.).

Measurements associated with a traffic variable, called traffic metrics, include page views, visits, and visitors.

Each traffic variable used for tracking data creates a report that can be viewed in Analytics.

## An overview of events

Events are completed visitor actions on your web site and Analytics provides some built-in, pre-defined events and the ability to create your own custom events. By default, events are counters that you increment, but you can also use currency and numeric values as an event type.

The pre-defined events are most often associated with e-commerce sites and are `prodView`, `scView`, `scOpen`, `scAdd`, `scRemove`, `scCheckout`, and `purchase.` 

Analytics provides you with 100 custom events that are named event1 through event100. Examples of custom events might be login, registration, and signup.

## An overview of conversion variables

Sometimes you want persistent variables that are tied to events. These variables are called conversion variables.

For a custom event, like login, you might want to use a custom conversion variable, also called an eVar, that keeps persistent information about whether the visitor is logged in or out of the site. The resulting Analytics report could tell you the number of purchases made when visitors are logged in or out of the site.

Analytics provides you with up to 75 custom eVar variables.

The products conversion variable is used in conjunction with an event to pass product information like product name, category, price, etc. Unlike eVars, this variable is not persistent and can hold multiple values.

