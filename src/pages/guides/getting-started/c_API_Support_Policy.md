# API Support Policy

Adobe is committed to support each version of an API for a minimum of 2 years. After this period, some APIs might be marked as deprecated and support will be limited to critical bug fixes only.

If a deprecated API is scheduled to be unsupported, notice will be given at least 1 year in advance. Adobe will attempt to notify users of the API that is scheduled to be unsupported via email.

**Service Shuttering Policy** 

While Adobe strives to follow the API Support Policy listed above, in rare instances it might be necessary to shutter a service (this is generally due to poor adoption or regulatory concerns). If shuttering a service becomes necessary, notice will be given at least 30 days in advance, and Adobe will contact users of the shuttered service with the expected shutter date and recommended migrations steps and alternative services.

API Version Support and Status

**Notice:**Version 1.2 of the Web Services API was officially deprecated on February 20, 2014. It will reach end-of-life on September 15, 2016. At that time, Adobe will remove the ability of the API servers to respond to version 1.2 API requests. Any API requests made to `https://api.omniture.com/admin/1.2` or data center equivalent endpoints will return a 410 error Customers have until the end-of-life date to upgrade from the version 1.2 API to the version 1.4 API to prevent an outage in their API applications.

The following table displays API version support and status.

|**API Version** |**Current State** |**Release Date** |**Deprecation Date** |**End of Life Date** |
|-------|-------|-------|-------|-------|
|1.2|End of life|March 20, 2008|February 20, 2014|September 15, 2016|
|1.3|Deprecated|April 21, 2011|September 15, 2016|April 30, 2021|
|1.4|Supported|February 20, 2014|TBD|TBD|

