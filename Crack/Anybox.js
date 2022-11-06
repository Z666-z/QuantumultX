/****************************************

项目功能：Anybox 解锁VIP
下载地址：http://mtw.so/5BcNSY

*****************************************

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Crack/Anybox.js

hostname = api.revenuecat.com

****************************************/

var chxm1023 = JSON.parse($response.body);

    chxm1023 = 
{
  "request_date_ms" : 1667216209630,
  "request_date" : "2022-10-31T11:36:49Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-10-30T07:50:46Z",
    "original_application_version" : "52",
    "entitlement" : {

    },
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "cc.anybox.Anybox.annual" : {
        "warning" : "仅供学习，禁止转载或售卖",
        "wechat" : "chxm1023",
        "purchase_date" : "2022-02-02T09:09:09Z",
        "original_purchase_date" : "2022-02-02T09:09:09Z",
        "feedback" : "chxm1023",
        "expires_date" : "2099-10-23T09:09:09Z"
      }
    },
    "entitlements" : {
      "pro" : {
        "wechat" : "chxm1023",
        "product_identifier" : "cc.anybox.Anybox.annual",
        "feedback" : "chxm1023",
        "expires_date" : "2099-10-23T09:09:09Z",
        "warning" : "仅供学习，禁止转载或售卖",
        "original_purchase_date" : "2022-02-02T09:09:09Z",
        "purchase_date" : "2022-02-02T09:09:09Z"
      }
    },
    "original_purchase_date" : "2022-10-30T07:50:26Z",
    "original_app_user_id" : "163064D4-ED5B-44F7-A865-1B750F475DCF",
    "last_seen" : "2022-10-31T10:03:52Z"
  }
}

$done({body : JSON.stringify(chxm1023)});
