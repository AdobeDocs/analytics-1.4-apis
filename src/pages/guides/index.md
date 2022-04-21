---
title: Getting started with the Analytics API
description: Learn the first steps that you can take to start using the Analytics API.
---

# Getting started with the Analytics API

There are several steps to take before using the Analytics APIs.

* **Permissions**: Configure permissions for the developer in the Adobe Admin Console.
* **API Client**: Create a client configuration in the Adobe Developer Console.
* **Authentication**: Obtain the necessary credentials to send data to Adobe.

## Permissions

Before starting to use the Analytics API, you must make sure that your account has the correct permissions to send requests. Even if you successfully authenticate with an Adobe ID, you cannot make requests to Adobe unless your account contains the correct organization permissions.

Give a developer correct API permissions as a product profile admin:

1. Navigate to [adminconsole.adobe.com](https://adminconsole.adobe.com).
2. Check the organization name in the top right to make sure that you are logged in to the correct company.
3. Click **Products**, then click **Adobe Analytics**.
4. Select the desired product profile, or create a new product profile.
5. Under the Permissions tab, assign the desired permissions to the product profile.
6. Once the desired permissions are set, click the Developers tab.
7. Click **Add Developer**, and enter the user name or email address that you want to assign the permissions to.
8. Click **Save**.

See [Managing developers](https://helpx.adobe.com/enterprise/using/manage-developers.html) in the Enterprise Admin user guide for more information.

## API Client

Once you are a developer for an Analytics product profile, you can create an API client in the Adobe Developer Console.

1. Navigate to [console.adobe.io](https://console.adobe.io).
2. Check the organization name in the top right to make sure that you are logged in to the correct company.
3. Click **Create new project**.
4. Click **Add API**.
5. Click **Adobe Analytics**, then click **Next**.

At this point, you decide how you want to authenticate with the API.

## Authentication

Adobe offers two primary methods to authenticate:

* **OAuth**: Use your own account to authenticate with the API. See [OAuth connection](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/AuthenticationOverview/OAuthIntegration.md) in the Adobe Developer Authentication user guide.
* **JWT**: Use a service account to authenticate with the API. See [JSON web token](https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/JWT/JWTCertificate.md) in the Adobe Developer Authentication user guide.

Note that WSSE and SOAP authentication methods are no longer supported with this API.

Choose your desired authentication method, and complete the remaining steps to finish the API client wizard.
