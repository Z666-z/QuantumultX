/*
脚本功能：网易云音乐听vip
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2022-11-23
问题反馈：QQ+55749353
作者QQ:55749353
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]
^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header https://raw.githubusercontent.com/Z666-z/Scripts/main/wyun.js

[mitm]
hostname = *music*

*/


;var encode_version = 'jsjiami.com.v5', spels = '__0xf3272',  __0xf3272=['w6UxYMONw6nDncOUwp5dfcKYwoY=','Vk4USBrCkFFqesOxwpvClcOXwqnCql/ChHxLQiMGXcKhYVXDosOMcADCpiEHeiA9wqXCmcKOwpMxGQYpHcKFwppxWEDDrMO5w77CtDdqL8KQHTZCCcKBY3HChcOvFhvCglojw4FVwpvCoCJ8w5PDmMOfNsKlwozCjlhBw4rDtUnCoX/DucK5OhLCpMKNKMO+w7/CoMOxdmHDq8OvcV4bcMOOcMKHC8Kywq0nwpZIOVfCsER0GWPCqsO5wp8BWmwTwo7Dmk8Iw5bCszYKEiUew6fCh2LDi1vDr8ODwr/CtcKww4zDusOBw6/Du8KMRBTCs8KlHj5pwplRwrViL8OWEl9aw4s8YzLDgsOHOQt6wolPacOXw5klYGQUJ1VYWsKEfMOOw4DCl8OhXStjw5wjwqTCtUXDly/ChGlQwoUgw7HDvR9mQQ==','MA5fT8ONwok6CCLDhsOEf8K6woV7','wqppw7nCgsODwqXCtRsc','AMKqw5HCjnVA','MkfDr8K2CnkwfA==','w5VPTQ==','w5FtdQ==','wo/Djgk=','LTbCl8O2w6kSwrLCn8KHRsO+MsOK','c8KOw4s=','SEdlwo1qUUfDjFvCpcOwd8OoGQ==','54md5p2s5Y+F77yLccOv5L6o5a6J5p6G5b6Z56q8772/6L+G6K615pWe5o6I5oqx5Lu555qx5bWk5LyV','5Yu/6Zmj54uV5p+L5Y2S77+AwrEN5L2i5a+D5p215b6s56uT','w7nCokZqwog=','VsOtw4Mawrk=','w4TCg3BWwpw=','AF7DhcKRNQ==','eDshS3k=','YcKAQVQy','w6l1w5bCpcOd','PcKPOcOQYQ==','wo4Dw79Bw7E=','bwAMRcO/','wqtCw6/CksOI','wrxow7PClMOKwqDCvg==','QsKfwonDjMKQ','VVpkwrxb','cxwCa8Ku','TsOreXnDv8Kgw6U=','w4jDicK+SWrCkFcLwr53w7HCosOmJsKxwpzCug==','ZMOTw7YxwqM=','w5jCjMOkwrfCgQ==','L8KzCMOUTQ==','NMKIwrA=','wrTDpTzCiw==','YiFAaQ==','ezTCmktF','XUsxw5XCqBQrw5bDkw==','w7hCw5bCv8OC','Q8ONw5wFwqM=','w68iXsKJwp0=','bMOhUMK8FQ==','ezAMY8Ob','w5rCs8OsPVs=','J0LDrcK8Cg==','wqp+KMKHwpwDSw==','w5Zqw4zCnDo=','w5I1wqN0w5fDpXc=','wrFIYMKe','QMOHVsK3Kn1S','UcK0wqjDksKp','w6pVwolJFnPCsQ==','dX/CsMKbBwTDqmLCgQ==','acKDd30Tb8K/','f8KSw5nDnA==','TyPDnsKlcMORAA==','OF3Dpg==','dcKCHzV/','YlfChcKRFA==','eMK/wpM=','w59Nwr8=','w4twbcKzwoY=','w5oVwqNzw60=','ZF/CtMKrwr0=','UsKWBQ==','DsKewq4=','a8KOBMOPAQ==','OMKPw73ChWI=','wq1lFsKEwrY=','NULDscK5Bw==','wrnDjTg=','BMKnw7c=','Q3zDksKcw7o=','w5M+wpVKw7w=','JcKGCcO3bw==','eTrDlsOmwqY=','Tlk4w7TCoA==','w7w4Yw==','fywxV8OAwoY4J8KfRGtTPh5kUQ==','fh9Tw48rFgbDnQLClcKtIcK2E8KPSMOKBcODw59/wop1D2PDgcKYU8OFTgtJwo4FY0RUQGTDiWfCnsOtwp8+M2TDksOnw77ChmrDkQHDnz3CjMKmU8ObwqLDiA==','wrZpw7TCkw==','dihTbnU=','UV0iw4XCrA==','w5HCnVU=','bmLCqMKRwq0=','TznDmsKZfg==','QUFlwqtq','Xlk8w5nCrg==','w7jCssOFJ1c=','w69cQRDDng==','wo58PMKGwrc=','w6BRSjM=','DChQAhE=','w5LCvGhZwo4=','w4U/wr5z','w71QfxvDng==','WEdMwpVi','V8O1c0fDgg==','w6hjYcKEwrE=','w4oUwpIhwp4=','wq96IcKzwps=','w5AITsKOwrM=','wqY6w5xVw7E=','C2sEwrt1','w4xpw5fChsOH','CsKtwpFFGw==','bMKNdVwL','cV0Vw7/Cqg==','w4gKQ8KdwrE=','wpY6w4pJw4w=','UsKew6jDoMOj','HmMdwpJD','w7Bbw4/Cmh4=','w6nCjMOMEEg=','WjnDncK7XA==','wp52wolHwoo=','w7MMXMK3wps=','GsKPGcO3XQ==','w6EcSMOsw70=','XsKpw5rDv8Oi','Qy1nRnc=','w4jCj8OGN0c=','wrAyw49xw7A=','dDBCa2I=','w6p1WQ==','RcOGb8KtBA==','w7wUScKhwqE=','ZW5cwoh8','wrzDuyrCiEg=','LsKSwrpBFA==','wrzCmcOXw41hFw==','w7cowrEDwox8','CcKnMA==','FljDkcK5NQ==','w4RzwrBMFA==','w59Jwr1CAw==','WcKDfkEP','bSk7R8Ot','w7tqYzvDhQ==','TAMMcMKK','w6c/woVlw5c=','cEfCpsKtwqA=','wrlVw4nCncOX','Y8Olw5Udwro=','w63ChMOywrDCgg==','w7DClX/DlsKZ','d3wmw6jCtA==','RQkPXkvCgFU=','WyXDicOhwrYL','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','w6xJScKzw7pXNn8Sw48=','a8O4w5sWwqwqw74owqfDocOUwoHDrnDCqcK6U8OgwqjCjcK4Y8O0wo3Co0Niw7kvLMOQw6tyVMKbw6Q0QcKCWwkCFDh/NcKVw4vCuSYOw5U='];(function(_0x257fcb,_0x19079c){var _0x4358ef=function(_0x20884a){while(--_0x20884a){_0x257fcb['push'](_0x257fcb['shift']());}};var _0x56339a=function(){var _0x364869={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x13d8b0,_0x12b0f8,_0x213345,_0xe3bd56){_0xe3bd56=_0xe3bd56||{};var _0x352c7a=_0x12b0f8+'='+_0x213345;var _0xda7c49=0x0;for(var _0xda7c49=0x0,_0x2019dc=_0x13d8b0['length'];_0xda7c49<_0x2019dc;_0xda7c49++){var _0x438317=_0x13d8b0[_0xda7c49];_0x352c7a+=';\x20'+_0x438317;var _0xe06514=_0x13d8b0[_0x438317];_0x13d8b0['push'](_0xe06514);_0x2019dc=_0x13d8b0['length'];if(_0xe06514!==!![]){_0x352c7a+='='+_0xe06514;}}_0xe3bd56['cookie']=_0x352c7a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x343d36,_0x22af85){_0x343d36=_0x343d36||function(_0x385ccf){return _0x385ccf;};var _0x1c594a=_0x343d36(new RegExp('(?:^|;\x20)'+_0x22af85['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x46c411=function(_0x15acea,_0x2f740c){_0x15acea(++_0x2f740c);};_0x46c411(_0x4358ef,_0x19079c);return _0x1c594a?decodeURIComponent(_0x1c594a[0x1]):undefined;}};var _0x264873=function(){var _0x5ec07d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5ec07d['test'](_0x364869['removeCookie']['toString']());};_0x364869['updateCookie']=_0x264873;var _0xca2e3e='';var _0x2e77a2=_0x364869['updateCookie']();if(!_0x2e77a2){_0x364869['setCookie'](['*'],'counter',0x1);}else if(_0x2e77a2){_0xca2e3e=_0x364869['getCookie'](null,'counter');}else{_0x364869['removeCookie']();}};_0x56339a();}(__0xf3272,0x1c5));var _0x1205=function(_0x183849,_0x3c4055){_0x183849=_0x183849-0x0;var _0x4f9ce7=__0xf3272[_0x183849];if(_0x1205['initialized']===undefined){(function(){var _0x4c2343=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x446148='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4c2343['atob']||(_0x4c2343['atob']=function(_0x23d439){var _0x1f2172=String(_0x23d439)['replace'](/=+$/,'');for(var _0x304cb5=0x0,_0x3198e5,_0x1817db,_0x321f04=0x0,_0x281851='';_0x1817db=_0x1f2172['charAt'](_0x321f04++);~_0x1817db&&(_0x3198e5=_0x304cb5%0x4?_0x3198e5*0x40+_0x1817db:_0x1817db,_0x304cb5++%0x4)?_0x281851+=String['fromCharCode'](0xff&_0x3198e5>>(-0x2*_0x304cb5&0x6)):0x0){_0x1817db=_0x446148['indexOf'](_0x1817db);}return _0x281851;});}());var _0x3f12d0=function(_0xce9c7b,_0x416996){var _0xfbb8ea=[],_0x5e8ded=0x0,_0x387180,_0x29a5d5='',_0x4e1e11='';_0xce9c7b=atob(_0xce9c7b);for(var _0xc95087=0x0,_0x4a786b=_0xce9c7b['length'];_0xc95087<_0x4a786b;_0xc95087++){_0x4e1e11+='%'+('00'+_0xce9c7b['charCodeAt'](_0xc95087)['toString'](0x10))['slice'](-0x2);}_0xce9c7b=decodeURIComponent(_0x4e1e11);for(var _0x1bde2b=0x0;_0x1bde2b<0x100;_0x1bde2b++){_0xfbb8ea[_0x1bde2b]=_0x1bde2b;}for(_0x1bde2b=0x0;_0x1bde2b<0x100;_0x1bde2b++){_0x5e8ded=(_0x5e8ded+_0xfbb8ea[_0x1bde2b]+_0x416996['charCodeAt'](_0x1bde2b%_0x416996['length']))%0x100;_0x387180=_0xfbb8ea[_0x1bde2b];_0xfbb8ea[_0x1bde2b]=_0xfbb8ea[_0x5e8ded];_0xfbb8ea[_0x5e8ded]=_0x387180;}_0x1bde2b=0x0;_0x5e8ded=0x0;for(var _0x316efe=0x0;_0x316efe<_0xce9c7b['length'];_0x316efe++){_0x1bde2b=(_0x1bde2b+0x1)%0x100;_0x5e8ded=(_0x5e8ded+_0xfbb8ea[_0x1bde2b])%0x100;_0x387180=_0xfbb8ea[_0x1bde2b];_0xfbb8ea[_0x1bde2b]=_0xfbb8ea[_0x5e8ded];_0xfbb8ea[_0x5e8ded]=_0x387180;_0x29a5d5+=String['fromCharCode'](_0xce9c7b['charCodeAt'](_0x316efe)^_0xfbb8ea[(_0xfbb8ea[_0x1bde2b]+_0xfbb8ea[_0x5e8ded])%0x100]);}return _0x29a5d5;};_0x1205['rc4']=_0x3f12d0;_0x1205['data']={};_0x1205['initialized']=!![];}var _0x123502=_0x1205['data'][_0x183849];if(_0x123502===undefined){if(_0x1205['once']===undefined){var _0x4b2dfa=function(_0x34cf1c){this['rc4Bytes']=_0x34cf1c;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4b2dfa['prototype']['checkState']=function(){var _0x303928=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x303928['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x4b2dfa['prototype']['runState']=function(_0x208f9e){if(!Boolean(~_0x208f9e)){return _0x208f9e;}return this['getState'](this['rc4Bytes']);};_0x4b2dfa['prototype']['getState']=function(_0xf4de9e){for(var _0x3cf03c=0x0,_0x10ef96=this['states']['length'];_0x3cf03c<_0x10ef96;_0x3cf03c++){this['states']['push'](Math['round'](Math['random']()));_0x10ef96=this['states']['length'];}return _0xf4de9e(this['states'][0x0]);};new _0x4b2dfa(_0x1205)['checkState']();_0x1205['once']=!![];}_0x4f9ce7=_0x1205['rc4'](_0x4f9ce7,_0x3c4055);_0x1205['data'][_0x183849]=_0x4f9ce7;}else{_0x4f9ce7=_0x123502;}return _0x4f9ce7;};setInterval(function(){var _0x1afff1={'OOtXl':function _0x464279(_0xad3932){return _0xad3932();}};_0x1afff1[_0x1205('0x0','jXr7')](_0x6642d6);},0xfa0);var _0x4bbf45=$request[_0x1205('0x1','z8dn')];_0x4bbf45[_0x1205('0x2','m8[w')]=_0x1205('0x3','Mysp');_0x4bbf45[_0x1205('0x4','h6*O')]=_0x1205('0x5',']EhB');_0x4bbf45[_0x1205('0x6','ZLdp')]=_0x1205('0x7','z8dn');$done({'headers':_0x4bbf45});;(function(_0x1f0e61,_0x3f4fed,_0x168ca6){var _0x3b8770={'gEiiV':_0x1205('0x8','As0E'),'ZHHBB':function _0x443302(_0x5afd29,_0x38dbce,_0x437802){return _0x5afd29(_0x38dbce,_0x437802);},'wRZgq':function _0x1f3bac(_0x430185,_0x1bec93){return _0x430185!==_0x1bec93;},'QYsVw':_0x1205('0x9','n6OA'),'RJFiL':function _0x5ee198(_0x246c00,_0x2a15e1){return _0x246c00===_0x2a15e1;},'falRw':_0x1205('0xa','pNKE'),'InGOr':function _0x2ad78b(_0x5a03af,_0x543e37){return _0x5a03af===_0x543e37;},'sDYPg':_0x1205('0xb','T4ea'),'QpfpD':_0x1205('0xc','h6*O'),'DbWSk':function _0x138f99(_0x2d44b3){return _0x2d44b3();},'bZCNG':_0x1205('0xd','(M($'),'RCbeA':_0x1205('0xe','pA!5'),'CSybf':_0x1205('0xf','m8[w'),'vummC':function _0x2a05c0(_0x4e425f){return _0x4e425f();},'pfHJy':_0x1205('0x10','XxwB'),'HBFzM':function _0x91a2d3(_0x1c5ce9,_0x1bb9d5){return _0x1c5ce9!==_0x1bb9d5;},'HUeLj':_0x1205('0x11','PYeX'),'VmUAl':function _0x13272f(_0x5d2b94,_0xd9b7be){return _0x5d2b94+_0xd9b7be;},'bPsEi':_0x1205('0x12','8!dM'),'wxcHx':_0x1205('0x13','n6OA')};var _0x3b3569=_0x3b8770[_0x1205('0x14','Ftvw')][_0x1205('0x15',']EhB')]('|'),_0xdf331b=0x0;while(!![]){switch(_0x3b3569[_0xdf331b++]){case'0':var _0x5c59b6=_0x3b8770[_0x1205('0x16','8RvP')](_0x57e304,this,function(){var _0xe57900=function(){};var _0x4a8101=_0x23b005[_0x1205('0x17','T4ea')](typeof window,_0x23b005[_0x1205('0x18','z8dn')])?window:_0x23b005[_0x1205('0x19','^Y(i')](typeof process,_0x23b005[_0x1205('0x1a',']5(Z')])&&_0x23b005[_0x1205('0x1b','r]CP')](typeof require,_0x23b005[_0x1205('0x1c','k!lk')])&&_0x23b005[_0x1205('0x1d','0Xy9')](typeof global,_0x23b005[_0x1205('0x1e','n6OA')])?global:this;if(!_0x4a8101[_0x1205('0x1f','n6OA')]){if(_0x23b005[_0x1205('0x20','BKJ7')](_0x23b005[_0x1205('0x21','PYeX')],_0x23b005[_0x1205('0x22','As0E')])){_0x4a8101[_0x1205('0x23','I^3i')]=function(_0x395676){var _0x216560={'ANYBn':_0x1205('0x24','4IwG')};var _0xd36bd9=_0x216560[_0x1205('0x25',']EhB')][_0x1205('0x26','6aSu')]('|'),_0x3da5f5=0x0;while(!![]){switch(_0xd36bd9[_0x3da5f5++]){case'0':_0x168ca6[_0x1205('0x27','r]CP')]=_0x395676;continue;case'1':var _0x168ca6={};continue;case'2':_0x168ca6[_0x1205('0x28','()Ps')]=_0x395676;continue;case'3':return _0x168ca6;case'4':_0x168ca6[_0x1205('0x29','pA!5')]=_0x395676;continue;case'5':_0x168ca6[_0x1205('0x2a','8!dM')]=_0x395676;continue;case'6':_0x168ca6[_0x1205('0x2b','ayID')]=_0x395676;continue;case'7':_0x168ca6[_0x1205('0x2c','jXr7')]=_0x395676;continue;case'8':_0x168ca6[_0x1205('0x2d',']5(Z')]=_0x395676;continue;}break;}}(_0xe57900);}else{var _0x3369f3=function(){while(!![]){}};return _0x23b005[_0x1205('0x2e',']EhB')](_0x3369f3);}}else{if(_0x23b005[_0x1205('0x2f','qlk$')](_0x23b005[_0x1205('0x30','1S3b')],_0x23b005[_0x1205('0x31','0Xy9')])){var _0x943d71=_0x23b005[_0x1205('0x32','aSqZ')][_0x1205('0x33','T4ea')]('|'),_0x27743f=0x0;while(!![]){switch(_0x943d71[_0x27743f++]){case'0':_0x4a8101[_0x1205('0x34','Zdzz')][_0x1205('0x35','l6WA')]=_0xe57900;continue;case'1':_0x4a8101[_0x1205('0x36','09]G')][_0x1205('0x37','Gcx1')]=_0xe57900;continue;case'2':_0x4a8101[_0x1205('0x38','1S3b')][_0x1205('0x39','BKJ7')]=_0xe57900;continue;case'3':_0x4a8101[_0x1205('0x3a','5rD&')][_0x1205('0x3b','h3Bp')]=_0xe57900;continue;case'4':_0x4a8101[_0x1205('0x3c','^Y(i')][_0x1205('0x3d','XxwB')]=_0xe57900;continue;case'5':_0x4a8101[_0x1205('0x3e','Rntb')][_0x1205('0x3f','T4ea')]=_0xe57900;continue;case'6':_0x4a8101[_0x1205('0x34','Zdzz')][_0x1205('0x40','KD[^')]=_0xe57900;continue;}break;}}else{_0x23b005[_0x1205('0x41','h3Bp')](_0x6642d6);}}});continue;case'1':var _0x57e304=function(){var _0x36cd23=!![];return function(_0x279bb2,_0x3c78a5){var _0x34fb51={'rJArQ':function _0x45c30d(_0x28f47c,_0x151f99){return _0x28f47c===_0x151f99;},'kOntU':_0x1205('0x42','BKJ7'),'FpVtw':_0x1205('0x43','5rD&')};if(_0x34fb51[_0x1205('0x44','h6*O')](_0x34fb51[_0x1205('0x45','09]G')],_0x34fb51[_0x1205('0x46','q)hg')])){}else{var _0x295a7f=_0x36cd23?function(){var _0x568884={'SLNhP':function _0x2df7b7(_0x4266d3,_0x59278b){return _0x4266d3===_0x59278b;},'WGFnt':_0x1205('0x47','KD[^'),'dtPpE':_0x1205('0x48','()Ps')};if(_0x568884[_0x1205('0x49','$3%m')](_0x568884[_0x1205('0x4a','pNKE')],_0x568884[_0x1205('0x4b','Zdzz')])){}else{if(_0x3c78a5){var _0x192455=_0x3c78a5[_0x1205('0x4c','T4ea')](_0x279bb2,arguments);_0x3c78a5=null;return _0x192455;}}}:function(){};_0x36cd23=![];return _0x295a7f;}};}();continue;case'2':_0x168ca6='al';continue;case'3':(function(){var _0x577cd5={'yhTJD':function _0x69f1b1(_0x1aa3d1,_0x1a10f7){return _0x1aa3d1===_0x1a10f7;},'bdXMD':_0x1205('0x4d','pA!5'),'nPcVE':_0x1205('0x4e','pNKE'),'vjjDx':function _0x125940(_0x5e482f,_0x3f8dcb,_0x1e26c6){return _0x5e482f(_0x3f8dcb,_0x1e26c6);}};if(_0x577cd5[_0x1205('0x4f','Mysp')](_0x577cd5[_0x1205('0x50','09]G')],_0x577cd5[_0x1205('0x51','r]CP')])){var _0x5852fe=firstCall?function(){if(fn){var _0x49271c=fn[_0x1205('0x52','m8[w')](context,arguments);fn=null;return _0x49271c;}}:function(){};firstCall=![];return _0x5852fe;}else{_0x577cd5[_0x1205('0x53','jXr7')](_0x42fc5e,this,function(){var _0x593847={'LMJNg':function _0xa790a0(_0x4c02cf,_0x80c0a8){return _0x4c02cf===_0x80c0a8;},'cujOa':_0x1205('0x54','qlk$'),'fjniv':_0x1205('0x55','0Xy9'),'RmpUy':_0x1205('0x56','PYeX'),'UyNBy':function _0x3dc023(_0x2ec37d,_0x36786f){return _0x2ec37d(_0x36786f);},'GmzrD':_0x1205('0x57','n6OA'),'XAKCg':function _0x26554f(_0x54ca88,_0x220ca4){return _0x54ca88+_0x220ca4;},'LwPMP':_0x1205('0x58','8!dM'),'GupIy':function _0x5c6e2a(_0x27099a,_0x438ed8){return _0x27099a+_0x438ed8;},'zsCqi':_0x1205('0x59','jXr7'),'zqdMR':function _0x473d26(_0x40f199,_0xe3ca0e){return _0x40f199!==_0xe3ca0e;},'QYMEf':_0x1205('0x5a','8RvP'),'fkgGh':function _0x574718(_0x147b42,_0x14c63e){return _0x147b42(_0x14c63e);},'kFTCe':function _0x5e9cd1(_0xe95438){return _0xe95438();}};if(_0x593847[_0x1205('0x5b','q)hg')](_0x593847[_0x1205('0x5c','Rntb')],_0x593847[_0x1205('0x5d','PYeX')])){var _0x30e864=new RegExp(_0x593847[_0x1205('0x5e','jXr7')]);var _0x3863b3=new RegExp(_0x593847[_0x1205('0x5f','aSqZ')],'i');var _0x349c04=_0x593847[_0x1205('0x60','(M($')](_0x6642d6,_0x593847[_0x1205('0x61','Zdzz')]);if(!_0x30e864[_0x1205('0x62','RvJM')](_0x593847[_0x1205('0x63','O3@o')](_0x349c04,_0x593847[_0x1205('0x64','8RvP')]))||!_0x3863b3[_0x1205('0x65','09]G')](_0x593847[_0x1205('0x66','(M($')](_0x349c04,_0x593847[_0x1205('0x67','PYeX')]))){if(_0x593847[_0x1205('0x68','I^3i')](_0x593847[_0x1205('0x69','h6*O')],_0x593847[_0x1205('0x6a','cx]c')])){}else{_0x593847[_0x1205('0x6b','Zdzz')](_0x349c04,'0');}}else{_0x593847[_0x1205('0x6c','qlk$')](_0x6642d6);}}else{var _0xad128c=fn[_0x1205('0x6d','k!lk')](context,arguments);fn=null;return _0xad128c;}})();}}());continue;case'4':var _0x23b005={'TlDDK':function _0x58573d(_0x438b16,_0x4d6aa4){return _0x3b8770[_0x1205('0x6e','y0*A')](_0x438b16,_0x4d6aa4);},'UWOqW':_0x3b8770[_0x1205('0x6f',']5(Z')],'klXZN':function _0x597a9a(_0x55740b,_0x10a269){return _0x3b8770[_0x1205('0x70','()Ps')](_0x55740b,_0x10a269);},'tErum':_0x3b8770[_0x1205('0x71','^Y(i')],'vYSqK':function _0x31bfd2(_0xca8828,_0x31d2cd){return _0x3b8770[_0x1205('0x72','jXr7')](_0xca8828,_0x31d2cd);},'IISxy':_0x3b8770[_0x1205('0x73','qlk$')],'wnkXP':_0x3b8770[_0x1205('0x74','k!lk')],'fPsvn':function _0x210f0b(_0x124495){return _0x3b8770[_0x1205('0x75','XxwB')](_0x124495);},'OIhxP':_0x3b8770[_0x1205('0x76','y0*A')],'biSWo':_0x3b8770[_0x1205('0x77','l6WA')],'plYOu':_0x3b8770[_0x1205('0x78','aSqZ')],'rPVoc':function _0x592e6a(_0x2440af){return _0x3b8770[_0x1205('0x79','Rntb')](_0x2440af);}};continue;case'5':try{_0x168ca6+=_0x3b8770[_0x1205('0x7a','qSKi')];_0x3f4fed=encode_version;if(!(_0x3b8770[_0x1205('0x7b','qlk$')](typeof _0x3f4fed,_0x3b8770[_0x1205('0x7c','r]CP')])&&_0x3b8770[_0x1205('0x7d','ZLdp')](_0x3f4fed,_0x3b8770[_0x1205('0x7e','XxwB')]))){_0x1f0e61[_0x168ca6](_0x3b8770[_0x1205('0x7f','8!dM')]('删除',_0x3b8770[_0x1205('0x80','aSqZ')]));}}catch(_0x58efe5){_0x1f0e61[_0x168ca6](_0x3b8770[_0x1205('0x81','k!lk')]);}continue;case'6':var _0x42fc5e=function(){var _0x4b6f8c=!![];return function(_0x5d134f,_0x5906fb){var _0x1a5b52=_0x4b6f8c?function(){if(_0x5906fb){var _0x4d0d35=_0x5906fb[_0x1205('0x82','8!dM')](_0x5d134f,arguments);_0x5906fb=null;return _0x4d0d35;}}:function(){var _0x597280={'fnWiA':function _0x41cb9e(_0x30f34a,_0x3aba0f){return _0x30f34a===_0x3aba0f;},'GZSlw':_0x1205('0x83','h6*O')};if(_0x597280[_0x1205('0x84','1S3b')](_0x597280[_0x1205('0x85','qlk$')],_0x597280[_0x1205('0x86','PYeX')])){}else{if(_0x5906fb){var _0x4f0692=_0x5906fb[_0x1205('0x87','pA!5')](_0x5d134f,arguments);_0x5906fb=null;return _0x4f0692;}}};_0x4b6f8c=![];return _0x1a5b52;};}();continue;case'7':_0x3b8770[_0x1205('0x88','()Ps')](_0x5c59b6);continue;}break;}}(window));function _0x6642d6(_0x33a7e1){var _0x42ac2f={'BjPlK':function _0x383853(_0x50aad5,_0x33f28e){return _0x50aad5===_0x33f28e;},'MIWvm':_0x1205('0x89',')iDY'),'VsZxz':function _0x43f9fc(_0x1ef176){return _0x1ef176();},'SogOs':function _0x1e7f00(_0x37106f,_0x11848d){return _0x37106f!==_0x11848d;},'tpdsY':function _0x2c93ec(_0x1ffdff,_0x1dbbf8){return _0x1ffdff+_0x1dbbf8;},'AOlib':function _0x4dbf98(_0x7c9fbe,_0x3885dd){return _0x7c9fbe/_0x3885dd;},'HqeCt':_0x1205('0x8a','cx]c'),'VeHbo':function _0x578dca(_0x3626e5,_0x328573){return _0x3626e5===_0x328573;},'RhDrj':function _0x28fb68(_0x2b3436,_0x3daad6){return _0x2b3436%_0x3daad6;},'fRTzr':function _0x9ec992(_0x33fb2a,_0x1a767c){return _0x33fb2a!==_0x1a767c;},'Fxznw':_0x1205('0x8b','r]CP'),'zUPao':function _0x4d6861(_0x114013,_0x2668be){return _0x114013(_0x2668be);}};function _0x357913(_0x3b3da2){if(_0x42ac2f[_0x1205('0x8c','T4ea')](typeof _0x3b3da2,_0x42ac2f[_0x1205('0x8d','5rD&')])){var _0x1022f0=function(){while(!![]){}};return _0x42ac2f[_0x1205('0x8e','5rD&')](_0x1022f0);}else{if(_0x42ac2f[_0x1205('0x8f','^Y(i')](_0x42ac2f[_0x1205('0x90','0Xy9')]('',_0x42ac2f[_0x1205('0x91','(M($')](_0x3b3da2,_0x3b3da2))[_0x42ac2f[_0x1205('0x92','As0E')]],0x1)||_0x42ac2f[_0x1205('0x93','09]G')](_0x42ac2f[_0x1205('0x94','q)hg')](_0x3b3da2,0x14),0x0)){if(_0x42ac2f[_0x1205('0x95','n6OA')](_0x42ac2f[_0x1205('0x96',']EhB')],_0x42ac2f[_0x1205('0x97','6aSu')])){return _0x357913;}else{debugger;}}else{debugger;}}_0x42ac2f[_0x1205('0x98','kDjj')](_0x357913,++_0x3b3da2);}try{if(_0x33a7e1){return _0x357913;}else{_0x42ac2f[_0x1205('0x98','kDjj')](_0x357913,0x0);}}catch(_0x138365){}};encode_version = 'jsjiami.com.v5';
