# Obtain an Access Token

 

## Supported OAuth Flows

|Authorization Flow|When to choose it|
|------------------|-----------------|
|[Client Credentials Grant](auth_client_credentials.md#) |When you as the developer are the user and want to access the data. This is the most common type of application.|
|[User-Agent Grant](auth_user_agent.md#) \(Implicit Grant\)|\(Mobile and apps\) When someone else will use the application and you want them to authenticate with their own credentials.|
|[Web Server Grant](auth_web_server.md#) \(Authorization Code Grant\)|\(Web applications\) When someone else will use the application and you want them to authenticate with their own credentials.|
|[Service Account](auth_service_account.md#) \(JWT Assertion\)|For server-to-server \(no user\) communication without transmitting any sensitive information.|

-   **[Client Credentials Grant](auth_client_credentials.md)**  
Use this when you \(the developer\) are the user and want to access the data. This is the most common type of application.
-   **[User-Agent Grant](auth_user_agent.md)**  
For use with mobile apps - when someone else will use the application and you want them to authenticate with their own credentials.
-   **[Web Server Grant](auth_web_server.md)**  
For use with web apps - when someone else will use the application and you want them to authenticate with their own credentials.
-   **[Service Account \(JWT Bearer\) Grant](auth_service_account.md)**  
This type of grant is great for server-to-server communication without transmitting any sensitive information.

**Parent topic:** [OAuth 2 Authentication](auth_overview.md)

