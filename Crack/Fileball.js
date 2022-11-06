/****************************************

项目名称：Fileball 解锁Pro

仅供学习，禁止转载或售卖

*****************************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Crack/Fileball.js

^https:\/\/app-measurement\.com\/config\/app\/1?(.*?)*$ url reject

[mitm] 

hostname = api.revenuecat.com, app-measurement.com

****************************************/



var chxm1023 = JSON.parse($response.body);

    chxm1023 = 
{"request_date_ms":1666618170880,"request_date":"2022-10-24T13:29:30Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-10-24T13:29:30Z","original_application_version":null,"entitlement":{},"other_purchases":{},"management_url":null,"subscriptions":{"com.chxm1023.premium.yearly":{"warning":"仅供学习，禁止转载或售卖","wechat":"chxm1023","purchase_date":"2022-02-02T09:09:09Z","original_purchase_date":"2022-02-02T09:09:09Z","feedback":"chxm1023","expires_date":"2099-10-23T09:09:09Z"}},"entitlements":{"filebox_pro":{"wechat":"chxm1023","product_identifier":"com.chxm1023.premium.yearly","feedback":"chxm1023","expires_date":"2099-10-23T09:09:09Z","warning":"仅供学习，禁止转载或售卖","original_purchase_date":"2022-02-02T09:09:09Z","purchase_date":"2022-02-02T09:09:09Z"}},"original_purchase_date":null,"original_app_user_id":"$RCAnonymousID:547f01bad4e540678069f8a8ee71f826","last_seen":"2022-10-24T13:29:30Z"}}

$done({body : JSON.stringify(chxm1023)});
