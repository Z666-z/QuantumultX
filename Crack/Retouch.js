/*
 *
 *
脚本功能：touchretouch-消除笔及p图修图软件-神奇橡皮擦（恢复购买）
软件版本：5.2.4
下载地址：
脚本作者：
更新时间：2024年
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >touchretouch-消除笔及p图修图软件-神奇橡皮擦（恢复购买）
^https?:\/\/api.revenuecat.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Crack/Retouch.js

[mitm] 
hostname = api.revenuecat.com
*
*
*/








var body=$response["\u0062\u006f\u0064\u0079"];let obj=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);obj={"\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u005f\u0064\u0061\u0074\u0065\u005f\u006d\u0073":0x1900ff96fca,"\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u005f\u0064\u0061\u0074\u0065":"\u0032\u0030\u0032\u0034\u002d\u0030\u0036\u002d\u0031\u0033\u0054\u0030\u0035\u003a\u0030\u0032\u003a\u0030\u0033\u005a","\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0062\u0065\u0072":{"\u006e\u006f\u006e\u005f\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0073":{},"\u0066\u0069\u0072\u0073\u0074\u005f\u0073\u0065\u0065\u006e":"\u0032\u0030\u0032\u0034\u002d\u0030\u0036\u002d\u0031\u0033\u0054\u0030\u0034\u003a\u0035\u0038\u003a\u0031\u0033\u005a",'original_application_version':"\u0031\u0030\u0038\u0039",'other_purchases':{},"\u006d\u0061\u006e\u0061\u0067\u0065\u006d\u0065\u006e\u0074\u005f\u0075\u0072\u006c":"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0061\u0070\u0070\u0073\u002e\u0061\u0070\u0070\u006c\u0065\u002e\u0063\u006f\u006d\u002f\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002f\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0073","\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0073":{'tr5_yearlysubsc_20dlrs_1':{'original_purchase_date':'2024-06-13T05:01:41Z',"\u0065\u0078\u0070\u0069\u0072\u0065\u0073\u005f\u0064\u0061\u0074\u0065":'2999-09-09T05:01:39Z','is_sandbox':![],"\u0072\u0065\u0066\u0075\u006e\u0064\u0065\u0064\u005f\u0061\u0074":null,'store_transaction_id':"\u0037\u0031\u0030\u0030\u0030\u0031\u0036\u0037\u0032\u0033\u0031\u0036\u0035\u0036\u0036","\u0075\u006e\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0062\u0065\u005f\u0064\u0065\u0074\u0065\u0063\u0074\u0065\u0064\u005f\u0061\u0074":null,"\u0067\u0072\u0061\u0063\u0065\u005f\u0070\u0065\u0072\u0069\u006f\u0064\u005f\u0065\u0078\u0070\u0069\u0072\u0065\u0073\u005f\u0064\u0061\u0074\u0065":null,"\u0070\u0065\u0072\u0069\u006f\u0064\u005f\u0074\u0079\u0070\u0065":"\u0074\u0072\u0069\u0061\u006c","\u0070\u0075\u0072\u0063\u0068\u0061\u0073\u0065\u005f\u0064\u0061\u0074\u0065":"\u0032\u0030\u0032\u0034\u002d\u0030\u0036\u002d\u0031\u0033\u0054\u0030\u0035\u003a\u0030\u0031\u003a\u0033\u0039\u005a","\u0062\u0069\u006c\u006c\u0069\u006e\u0067\u005f\u0069\u0073\u0073\u0075\u0065\u0073\u005f\u0064\u0065\u0074\u0065\u0063\u0074\u0065\u0064\u005f\u0061\u0074":null,"\u006f\u0077\u006e\u0065\u0072\u0073\u0068\u0069\u0070\u005f\u0074\u0079\u0070\u0065":'PURCHASED',"\u0073\u0074\u006f\u0072\u0065":"\u0061\u0070\u0070\u005f\u0073\u0074\u006f\u0072\u0065",'auto_resume_date':null}},'entitlements':{"\u0070\u0072\u0065\u006d\u0069\u0075\u006d":{"\u0067\u0072\u0061\u0063\u0065\u005f\u0070\u0065\u0072\u0069\u006f\u0064\u005f\u0065\u0078\u0070\u0069\u0072\u0065\u0073\u005f\u0064\u0061\u0074\u0065":null,'purchase_date':"\u0032\u0030\u0032\u0034\u002d\u0030\u0036\u002d\u0031\u0033\u0054\u0030\u0035\u003a\u0030\u0031\u003a\u0033\u0039\u005a",'product_identifier':'tr5_yearlysubsc_20dlrs_1','expires_date':"\u0032\u0039\u0039\u0039\u002d\u0030\u0039\u002d\u0030\u0039\u0054\u0030\u0035\u003a\u0030\u0031\u003a\u0033\u0039\u005a"}},"\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c\u005f\u0070\u0075\u0072\u0063\u0068\u0061\u0073\u0065\u005f\u0064\u0061\u0074\u0065":'2024-06-13T04:54:09Z','original_app_user_id':'$RCAnonymousID:d485028cfbc846ea8ae5077c8209a73a',"\u006c\u0061\u0073\u0074\u005f\u0073\u0065\u0065\u006e":"\u0032\u0030\u0032\u0034\u002d\u0030\u0036\u002d\u0031\u0033\u0054\u0030\u0034\u003a\u0035\u0038\u003a\u0031\u0033\u005a"}};$done({'body':JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj)});
