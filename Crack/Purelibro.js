#!name=𝐑𝐞𝐯𝐞𝐧𝐮𝐞𝐂𝐚𝐭
#!desc=今天也要吸猫猫吖 
#!unlockapplist=https://appraven.net/collection/77299969
#!author=𝐝𝐝𝐠𝐤𝐬𝐟𝟐𝟎𝟏𝟑
#!tgchannel=https://t.me/ddgksf2021
#!moduleUrl=https://github.com/Z666-z/Quantumult/raw/main/Crack/Purelibro.js
#!howtouse=小火箭、Surge用户直接添加模块，QuantumultX用户添加重写时打开解析器

[Script]
# ～ RevenueCat@ddgksf2013
RevenueCatVip = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$), script-path=h https://github.com/Z666-z/Quantumult/raw/main/Crack/Purelibro.js, requires-body=true, max-size=-1, timeout=60
RevenueCatDeleteHeader = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers), script-path= https://github.com/Z666-z/Quantumult/raw/main/Crack/Purelibro.js, timeout=60

[MITM]
hostname = %APPEND% api.revenuecat.com



/***********************************************
***********************************************/	

const version = 'V1.0.2';


function setHeaderValue(e,a,d){var r=a.toLowerCase();r in e?e[r]=d:e[a]=d}var modifiedHeaders=$request.headers;setHeaderValue(modifiedHeaders,"X-RevenueCat-ETag",""),$done({headers:modifiedHeaders});
