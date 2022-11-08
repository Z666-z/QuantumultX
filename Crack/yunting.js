/****************************************

项目功能：云听 解锁VIP功能
下载地址：http://mtw.so/5QkOoI
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
使用方法：需要用时先打开脚本，再打开App。

*****************************************

[rewrite_local]

^http:\/\/getway\.radio\.cn url script-response-body https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Crack/yunting.js

^https:\/\/ytapi\.radio\.cn url script-response-body https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Carck/yunting.js


[mitm] 

hostname = *.radio.cn

****************************************/


const getway = "/getway.radio.cn";
const ytapi = "/ytapi.radio.cn";

if ($request.url.indexOf(getway) != -1){body = $response.body.replace(/\"isVip":\d+/g, '\"isVip":0').replace(/\"needPay":\d+/g, '\"needPay":0');}

if ($request.url.indexOf(ytapi) != -1){body = $response.body.replace(/\"vipTime":"(.*?)"/g,'\"vipTime":"2099-10-23"');}

$done({body})
