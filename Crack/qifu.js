/****************************************

项目功能：起伏 解锁VIP
下载地址：http://mtw.so/5Iuov2
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

https?:\/\/api\.risingfalling\.com\/api\/vip\/detail url script-response-body https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Crack/qifu.js

[mitm] 

hostname = api.risingfalling.com

****************************************/

var cuttlefish ={"warning":"仅供学习，禁止转载或售卖","tgchannel":"https://t.me/chxm1023","feedback":"chxm1023"}
var chxm1023 = JSON.parse($response.body);
chxm1023.body={"isVip":true,"vipEndTime":4102283483000};
$done({body: JSON.stringify(chxm1023)});
