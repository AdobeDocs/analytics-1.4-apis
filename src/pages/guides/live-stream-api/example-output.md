# Livestream sample JSON output

An example JSON object from the Livestream API. See [Livestream API variable reference](variable-reference.md) for details around each JSON element.

```json
{    
  "bot": "<Not a bot>",
  "browser": "Google Chrome 32.0",
  "browserHeight": 1350,
  "browserType": "Google",
  "browserWidth": 820, 
  "carrier": "AT&T",
  "connectionType": "LAN/WiFi", 
  "currency": "USD", 
  "customVisId": "420520", 
  "domain": "sfr.net",  
  "evars": {
    "evars": {
      "campaign": "DFA:172612:21725632:182361",
      "evar1": "Summer Shoe Promo"
    }
  },
  "events": {
    "event1": [{
      "count": 1,
      "exponent":0,
      "unique":""
    }]
  },
  "exclude": { 
    "id": "0",
    "value": "no",
    "description": "include"
  },
  "geoCity": "paris",
  "geoCountry": "fra",
  "geoDMA": 0,
  "geoRegion": "j",
  "geoZip": "75001",
  "hierarchies": { 
    "site-­hier": {
      "delim": 58,
      "values": "home page:clothing:mens:shoes"
    }
  },
  "hitIdHigh": 2948027281753079808,
  "hitIdLow": 4948646782672799561,
  "hitSource": 1,
  "ip": "91.71.30.70",
  "javaEnabled": true,
  "language": "English", 
  "languageAbbrev": "en-­US",
  "monitorColorDepth": "16 million colors", 
  "monitorHeight": 1080,
  "monitorWidth": 1650,
  "mvvars": {
    "1": {
      "m": {
        "values": [
          "event_category:summer sale",
          "event_type:click",
          "source_platform:iOS"
        ],
        "delim": 44
      }
    }
  },  
  "operatingSystem": "Macintosh", 
  "pageName": "Page #8552",
  "pageURL": "http://example.com/page8552.html", 
  "products": [{
    "category": "Clothing",
    "evars": {},
    "events": {
        "event61": [{
          "count": 3,
          "exponent": 0,
          "unique": ""
        }]
    },
    "name": "Mens Black Running Shoes",
    "revenue": 1799,
    "units": 15
  }],
  "receivedTimeGMT": 1372782179,
  "referrer": "http://example.com/page139.html",
  "reportSuite": "examplecomprod", 
  "searchEngine": "Google",
  "service": "ss",
  "timeGMT": 1372782179,
  "topLevelDomain": ".net",
  "tnt":[{
    "campaignId": "13234",
    "recipeId": "23",
    "trafficType": "0",
    "actionId": "",
    "actionName": ""
  }],
  "tntAction":[{
    "campaignId": "13234",
    "recipeId": "23",
    "trafficType": "0",
    "actionId": "1",
    "actionName": "Experience Visit"
  }],
  "transactionId": "",
  "truncated": false,
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/29.0.1547.76 Safari/537.36",
  "usesPersistentCookie": 1,
  "visIdHigh": 1944017885723175213,
  "visIdLow": 2512895455560210216,
  "visIdType": 3
}
```
