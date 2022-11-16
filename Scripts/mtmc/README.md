美团买菜领取买菜币

  - 脚本重构优化，支持签到+任务领取买菜币；
  - 脚本兼容 Surge、Qx、Loon，具体请自测；
  - 获取 Cookie 方法：
方式1：美团APP -> 美团买菜 -> 我的 -> 买菜币 -> 去使用 -> 在退回上一级，提示成功即可
方式2：美团APP -> 美团买菜 -> 我的 -> 买菜币 -> 左滑一半做推出手势再松手（不要真的左滑退出） -> 提示成功即可
 - 使用方法：复制粘贴

[MITM]
mall.meituan.com

QX：
[task_local]
0 6,8 * * * https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Scripts/mtmc/mall.meituan.mallcoin.task.js, img-url=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/meituan/maicai.png, tag=买菜币, enabled=true

[rewrite_local]
^https?:\/\/mall\.meituan\.com\/api\/c\/mallcoin\/checkIn\/queryTaskListInfoV.\? url script-request-header https://raw.githubusercontent.com/Z666-z/QuantumultX/main/Scripts/mtmc/mall.meituan.cookie.js
