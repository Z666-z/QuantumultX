/****************************************

项目功能：一言解锁会员
下载地址：http://mtw.so/6kXEDL
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https:\/\/app\.yiyan\.art\/yiyan\/ url script-response-body https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Crack/yiyan.js

[mitm] 

hostname = app.yiyan.art

****************************************/

var body = $response.body.replace(/viptype":"1"/g, 'viptype":"4"')
$done({ body });
