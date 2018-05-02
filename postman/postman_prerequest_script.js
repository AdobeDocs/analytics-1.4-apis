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