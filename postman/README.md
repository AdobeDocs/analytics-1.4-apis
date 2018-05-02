Getting started with POSTMAN
=====

Using WSSE Authentication
----

1. Download and Install [POSTMAN](https://www.getpostman.com/)

2. Set the request type to POST

3. Enter the following into the Request URL field: 
`https://api.omniture.com/admin/1.4/rest/?method=Company.GetReportSuites`

4. Copy the following into the Pre-request Script section in POSTMAN
```javascript
var uuid = function() {};
uuid.v4 = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); return v.toString(16); });
};

var WSSE = function(username, secret) {
    this.username = username;
    this.secret = secret;
};

WSSE.prototype.getHeader = function() {
    var nonce = uuid.v4();
    var created = new Date().toISOString();

    var hashString = nonce + created + this.secret;
    var digest = CryptoJS.SHA256(hashString).toString(CryptoJS.enc.Base64);
    var b64nonce = CryptoJS.enc.Latin1.parse(nonce).toString(CryptoJS.enc.Base64);

    var header = "UsernameToken";
    header += " Username=\"" + this.username + "\",";
    header += " PasswordDigest=\"" + digest + "\",";
    header += " Nonce=\"" + b64nonce + "\",";
    header += " Created=\"" + created + "\",";
    header += " Algorithm=\"SHA256\"";

    return { 'X-WSSE': header };
};

var wsse = new WSSE('<INSERT_USERNAME_HERE>', '<INSERT_SECRET_HERE>');
postman.setEnvironmentVariable("x-wsse", wsse.getHeader()['X-WSSE'])
```

![postman_prerequest_script](../images/postman_prerequest_script.png?raw=true)

5. On the second to last line of the prerequest script replace <INSERT_USERNAME_HERE> with your username. (Valid usernames are in the format of login:company. Example: `johnsmith:Geometrixx`)

6. On the same line of code replace <INSERT_SECRET_HERE> with your secret

7. Under the Headers section add a header with the key=`X-WSSE` and the value=`{{x-wsse}}`

8. Click the `Send` Button

You should get a JSON response object with an attribute called `report_suites` which contains a list of report suites for your Analytics Login Company.

![postman_wsse_header](../images/postman_wsse_header.png?raw=true)
