# data_warehouse_request

Data structure that contains configuration settings for a full-processing data source.

|Name|Type|Description|
|----|----|-----------|
| **message** | `xsd:string`  | A brief description of the status parameter. The message string is listed above next to the status code. |
| **filesize** | `xsd:string`  | Populated only when `status = 2`. The size of the requested data segment, in MB. |
| **data_url***| `xsd:string` | Populated only when `status = 2`. Contains the URL where you can download the completed data segment. |
| **status** | `xsd:int`  | A code representing the status of the data segment. See supported status values in table below: | 

|Code|Message|
|----|-------|
|**0** | Waiting to Start (Request created; estimating processing needs) |
|**1** | In Progress |
|**2** | Completed |
|**3** | On Hold |
|**4** | Cancelled |
|**5** | Has Error |
|**6** | Waiting to Start (Server assigned; waiting for server to start processing) |
|**7** | Too Big |
|**8** | Waiting to Start (Estimation complete; waiting for an available server) |
|**9** | Waiting for Data |
|**10** | Waiting for Send |
|**11** | Waiting for Verification |
|**12** | Waiting to Send |
|**13** | Sent to Product |
|**14** | Sending |
|**15** | Waiting to Continue (deprecated) |
|**16** | Waiting to Continue (deprecated) |
|**17** | Continuing |
|**18** | Not Delivered |
|**32** | In Transit |


*Once a data segment is complete, the `data_url` value in an HTTP GET request to retrieve the data segment. When requesting a data segment through the `data_url`, you must provide your Experience Cloud credentials just as you would when using any other Experience Cloud API call. For more information about WSSE, see the <<Web Services Authentication>>.

The following code sample demonstrates using cURL* to generate the GET request from a Linux workstation:

```
curl "<Genesis REST URL>" -H "$(php <wsse.php> <username> <secret>)
```

A successful REST request includes the following components:

| Name | Description |
|--------|---------------|
| **data URL** | The URL associated with a specific data segment (for example, `https://api.omniture.com/rest/?id=123456`). |
| **username** | Your Experience Cloud username. |
| **secret** | Your Experience Cloud secret (password). |
| **wsse.php** | A script file that contains the WSSE authentication data for the Data Warehouse request. This file might look like the following: |

```
#!/usr/local/bin/php
<?
date_default_timezone_set('America/Denver');
$mode='header';
if ($argv[1] == '-q') {
  $mode='qs';
  array_shift($argv);
}
$username = $argv[1];
$secret = $argv[2];

$created = date('c');
$nonce = md5(rand(), true);
$base64_nonce = base64_encode($nonce);
$password_digest = base64_encode(sha1($nonce.$created.$secret, true));

if ($mode == 'header') {
  echo "X-WSSE: UsernameToken Username="$username",
  PasswordDigest="$password_digest", Nonce="$base64_nonce", Created="$created"";
} else {
  echo http_build_query(array(
    'auth_digest' => $password_digest,
    'auth_nonce' => $base64_nonce,
    'auth_created' => $created,
    'auth_username' => $username,
    ));
}
```

**Parent topic:** [Data Types](../data_types/c_data_types.md)

