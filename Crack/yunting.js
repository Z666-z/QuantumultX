*******************************
[rewrite_local]
^http?:\/\/39\.106\.98\.80.*?.*? url script-request-header https://raw.githubusercontent.com/Z666-z/QnuantumultX/main/Crack/yunting
.js
^http?:\/\/39\.106\.98\.80.*?*? url script-response-body https://raw.githubusercontent.com/Z666-z/QnuantumultX/main/Crack/yunting.is



[mitm]
hostname = 39.106.98.80

*******************************/

var Url = $request.url;
function setQueryString(key, val) { 
    var url = Url.split('?'), search=url[1];
    var query = {};
    if (search) {
        search.split('&').forEach((item) => {
            var arr = item.split('=');
            query[arr[0]] = arr[1];
        });
    }
    query[key] = val;
    var queryArr = [];
    for (var p in query) {
        queryArr.push(p + '=' + query[p]);
    }
    return url[0]+'?'+queryArr.join('&');
};


console.log(Url);
$done({ url:Url });

//
var body=$response.body;
body = body.replace(/"isVip\":\d+/g,'"isVip":0');
$done(body);
