/******************************

脚本功能：Picsew滚动截图+解锁订阅
下载地址：http://mtw.so/5AOWu4
软件版本：3.8.6
更新时间：2022-9-2
*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Crack/Picsew.js

[mitm] 
hostname = buy.itunes.apple.com


*******************************/

/*
*Aman - 194nb.com
*/
var body = $response.body;
var objk = JSON.parse(body);

objk = {
"receipt":{"receipt_type":"Production", "adam_id":1208145167, "app_item_id":1208145167, "bundle_id":"com.sugarmo.ScrollClip", "application_version":"3082", "download_id":9999, "version_external_identifier":837747342, "receipt_creation_date":"2020-09-13 06:58:34 Etc/GMT", "receipt_creation_date_ms":"1599980314000", "receipt_creation_date_pst":"2020-09-12 23:58:34 America/Los_Angeles", "request_date":"2020-09-13 06:59:15 Etc/GMT", "request_date_ms":"1599980355799", "request_date_pst":"2020-09-12 23:59:15 America/Los_Angeles", "original_purchase_date":"2020-09-13 06:50:28 Etc/GMT", "original_purchase_date_ms":"1599979828000", "original_purchase_date_pst":"2020-09-12 23:50:28 America/Los_Angeles", "original_application_version":"3082", "in_app":[
{"quantity":"1", "product_id":"com.sugarmo.ScrollClip.pro", "transaction_id":"1000000000000000", "original_transaction_id":"1000000000000000", "purchase_date":"2020-01-01 00:00:00 Etc/GMT", "purchase_date_ms":"1587700000000", "purchase_date_pst":"2020-01-21 00:00:00 America/Los_Angeles", "original_purchase_date":"2020-01-01 00:00:00 Etc/GMT", "original_purchase_date_ms":"1587700000000", "original_purchase_date_pst":"2020-01-01 00:00:00 America/Los_Angeles", "is_trial_period":"false"}]}, "status":0, "environment":"Production"}
	

body = JSON.stringify(objk);

$done({body});
