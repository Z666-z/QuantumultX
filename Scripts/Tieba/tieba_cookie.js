[mitm]

hostname = c.tieba.baidu.com



# 百度贴吧每日自动签到

[rewrite_local]

^https?:\/\/(c\.tieba\.baidu\.com|180\.97\.\d+\.\d+)\/c\/s\/login url script-request-header https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Scripts/Tieba/tieba_signin.js
^https?:\/\/c\.tieba\.baidu\.com\/c\/s\/channelIconConfig url script-request-header https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Scripts/Tieba/tieba_signin.js
^https?:\/\/tiebac\.baidu\.com\/c\/u\/follow\/getFoldedMessageUserInfo url script-request-header https://raw.githubusercontent.com/Z666-z/main/Scripts/Tieba/tieba_signin.js
