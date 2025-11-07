#!/usr/bin/env node

process.argv.shift()

var script = process.argv.shift();

var text = process.argv.shift();
var text = encodeURIComponent(text)
var source = process.argv.shift();
var target = process.argv.shift();

fetch("https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&dt=bd&dt=rm&hl=en&sl="+ ((source != null) ? source : 'en') +"&tl="+ ((target != null) ? target : 'de') +"&q="+text, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,de;q=0.8,tr;q=0.7,hi;q=0.6,fr;q=0.5,ru;q=0.4,fa;q=0.3,da;q=0.2,no;q=0.1,el;q=0.1,ca;q=0.1,uk;q=0.1,es;q=0.1,nl;q=0.1",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Opera\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "none",
    "sec-fetch-storage-access": "active",
    "x-client-data": "CISOywE=",
    "Referer": "https://translate.googleapis.com/"
  },
  "body": null,
  "method": "GET"
}).then(resp => {
//    console.log(resp);
    return resp.json();
}).then(js => {
    console.log(js[0][0][0]);
});
