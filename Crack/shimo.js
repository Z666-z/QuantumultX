/******************************

脚本功能：石墨文档
软件版本：3.16.3
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\//shimo.im\/lizard-api\/users\/me url script-response-body
https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Carck/shimo.js

[mitm] 

hostname = shimo.im

*******************************/

let obj = JSON.parse($response.body);
    obj.membership = {
    "accountTypeExpiredAt": "2099-12-30T16:00:00.000Z",
    "accountTypeCreatedAt": "2020-03-25T13:09:31.000Z",
    "accountType": "personal_premium",
    "isEnterprisePremium": true,
    "isExpired": false,
    "isNewDing": false,
    "isOfficial": true
  }
  obj.accountMetadata= {
    "isDingtalk" : false,
    "isFreeEnterprise" : false,
    "isTrial" : false,
    "expiredAt" : {
      "seconds" : 4102415999,
      "nanos" : 55173442
    },
    "isWework" : false,
    "isExpired" : false,
    "isEnterprise" : false,
    "isPersonalPremium" : true,
    "isEnterprisePremium" : true,
    "isEnterpriseLight" : false
  }
$done({body: JSON.stringify(obj)});
