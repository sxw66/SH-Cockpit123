# Cockpit Tools Open Issues 全量分类（424）

> 扫描范围：**全部 424 条 open issues**（#616–#1603）。
> 方法：标题 + body 摘要规则匹配 + 关键编号人工覆盖；对照 main 代码与 1.3.x changelog。
> **本报告不关闭任何 issue。**
> 生成时间：2026-07-16

## 汇总

| 分类 | 数量 | 含义 |
|------|------|------|
| **可关** | **1** | 代码/版本已能对应，建议关并写清版本 |
| **待确认** | **347** | 可能已修或信息不足，需最新版复测/补材料 |
| **未解决** | **76** | 明确未闭环 bug/需求/限制 |
| **合计 open** | **424** | |

### 本会话已关闭（不在 open 列表内）

| # | 摘要 | 版本 |
|---|------|------|
| #1601 | 界面缩放 | 1.3.6 |
| #1600 | 托盘无法退出 | 1.3.6 / #1595 |
| #1567 | Windows minimized quit | 1.3.6 / #1595 |
| #1592 | 价格阈值 | 1.3.5 |
| #1588 | alpha/search | 1.3.5 |
| #1562 | SSE 立即 200 | 1.3.4 |
| #1571 | 日统计 0 点 | 日历统计 |
| #1548 | 签到状态 | 1.3.5 |

## 阅读说明（重要）

1. **已扫描全部 424 条 open**（不是只扫最近 80 条）。
2. **本会话已关掉 8 条**，它们不再出现在 open 的「可关」里（见上表「本会话已关闭」）。
3. **可关**刻意偏严：只放「标题/描述能对上且代码/changelog 明确已修」的；避免把历史 5.6 帖误关。
4. **待确认（347）** 是大头：多为旧版复现、信息不足、或 1.3.x 可能已修但未在 issue 上验证。统一处理建议是批量留言「请用 ≥1.3.5/1.3.6 复测」。
5. **未解决（76）** 是仍应保留的 bug/需求/限制，不要当已修关掉。

完整文件路径：`docs/issue-audit-open-424.md`

---

---

## 可关（1）

| # | 标题 | 说明 | 版本提示 |
|---|------|------|----------|
| [#1323](https://github.com/jlcodes99/cockpit-tools/issues/1323) | windows下，右下角小图标点击退出无反应 | 托盘/最小化后无法退出：与 #1595 request_app_exit 同类，1.3.6 应已修 | 1.3.6 |

## 未解决（76）

| # | 标题 | 说明 | 版本提示 |
|---|------|------|----------|
| [#1603](https://github.com/jlcodes99/cockpit-tools/issues/1603) | 更新后切换api服务时进去界面后过几秒会直接退出来。 | 进 API 服务后退出（疑似崩溃） | - |
| [#1599](https://github.com/jlcodes99/cockpit-tools/issues/1599) | codex应用多开，复制的实例没有用指定账号，还是跟之前的账号相同 | 复制实例未用指定账号 | - |
| [#1597](https://github.com/jlcodes99/cockpit-tools/issues/1597) | 同一个渠道，如果同一个 key   那么更改供供应商的时候，名字就会重复 | 同 Key 改供应商重名 | - |
| [#1591](https://github.com/jlcodes99/cockpit-tools/issues/1591) | Bug: App starts with a long white screen delay (up to 60s) due to s... | 启动白屏 60s | - |
| [#1590](https://github.com/jlcodes99/cockpit-tools/issues/1590) | cockpit 切号 Vscode Codex 插件无法登陆 | VSCode Codex 插件登录 | - |
| [#1589](https://github.com/jlcodes99/cockpit-tools/issues/1589) | 旧api和新api均无法正常使用 | 旧/新 API 均不可用（描述宽，作未解决待拆） | - |
| [#1586](https://github.com/jlcodes99/cockpit-tools/issues/1586) | 无法打开软件 | 无法打开软件 | - |
| [#1585](https://github.com/jlcodes99/cockpit-tools/issues/1585) | workbuddy多开实例问题 | WorkBuddy 多开 | - |
| [#1584](https://github.com/jlcodes99/cockpit-tools/issues/1584) | 多开的示例永远保持相同账号和api   无法实现多开 | 多开同账号 | - |
| [#1583](https://github.com/jlcodes99/cockpit-tools/issues/1583) | 多开实例的情况下 macos 经常要求权限 | 多开 mac 权限（限制/文档向） | - |
| [#1581](https://github.com/jlcodes99/cockpit-tools/issues/1581) | 多开实例，现在打不开其他实例 | 多开打不开实例 | - |
| [#1579](https://github.com/jlcodes99/cockpit-tools/issues/1579) | 新增ssh同步功能导致会话丢失 | SSH 同步丢会话 | - |
| [#1576](https://github.com/jlcodes99/cockpit-tools/issues/1576) | 启动 Codex CLI 失败: Codex CLI 终端执行仅支持 macOS 和 Windows | Linux CLI 不支持 | - |
| [#1575](https://github.com/jlcodes99/cockpit-tools/issues/1575) | [Bug] [Error] Cursor在配置了VSCODE_APPDATA这个环境变量后，启动时会报错 | Cursor VSCODE_APPDATA | - |
| [#1574](https://github.com/jlcodes99/cockpit-tools/issues/1574) | cursor导入的可以支持一下cursor浏览器的token登录嘛，类似下面的 | Cursor 浏览器 token | - |
| [#1572](https://github.com/jlcodes99/cockpit-tools/issues/1572) | [Bug] 新 API“启动重试”未生效，错误复用旧 API“单账号重试” | 新 API 启动重试 | - |
| [#1564](https://github.com/jlcodes99/cockpit-tools/issues/1564) | 请求新增功能：ChatGPT切换账号自动回到原来进行的session | 切号回 session | - |
| [#1559](https://github.com/jlcodes99/cockpit-tools/issues/1559) | [Feature Request] 切换 Grok 账号时支持覆盖 OpenCode 登录信息 | Grok 覆盖 OpenCode | - |
| [#1549](https://github.com/jlcodes99/cockpit-tools/issues/1549) | 建议增加用量统计 | 功能建议/新需求 | - |
| [#1545](https://github.com/jlcodes99/cockpit-tools/issues/1545) | 建议增加用量统计 | 功能建议/新需求 | - |
| [#1543](https://github.com/jlcodes99/cockpit-tools/issues/1543) | Feature Request | 功能建议/新需求 | - |
| [#1539](https://github.com/jlcodes99/cockpit-tools/issues/1539) | 能支持PI吗？pi目前是最轻量的codingagent，非常不错，非常期待能支持pi | 支持 PI | - |
| [#1537](https://github.com/jlcodes99/cockpit-tools/issues/1537) | Grok cli不能自定义api提供商，只有官方api | Grok 自定义 API | - |
| [#1532](https://github.com/jlcodes99/cockpit-tools/issues/1532) | 缺少workbuddy cn 、 qoder cn 、qoderwork 、qoderwork cn 的账号切换 | CN 变体平台 | - |
| [#1524](https://github.com/jlcodes99/cockpit-tools/issues/1524) | 建议api反代的时候，号池的每个号都先用一点，让额度开始重置，这样之后不用等！！！ | 功能建议/新需求 | - |
| [#1522](https://github.com/jlcodes99/cockpit-tools/issues/1522) | 建议新加5.6sol的新api反代的快速模式 | 功能建议/新需求 | - |
| [#1519](https://github.com/jlcodes99/cockpit-tools/issues/1519) | 项目记录消失 | 数据/会话/配置丢失 | - |
| [#1513](https://github.com/jlcodes99/cockpit-tools/issues/1513) | 必须这样修改才能使用，另外以前的任务记录无法读取，请修复 | 数据/会话/配置丢失 | - |
| [#1511](https://github.com/jlcodes99/cockpit-tools/issues/1511) | 建议添加一个grok，然后codex账号实效严重 | 功能建议/新需求 | - |
| [#1509](https://github.com/jlcodes99/cockpit-tools/issues/1509) | 怎么把我配置和会话全部清空了，这个版本有问题。 | 数据/会话/配置丢失 | - |
| [#1480](https://github.com/jlcodes99/cockpit-tools/issues/1480) | 应用多开问题 | 多开实例/账号隔离/复制实例 | - |
| [#1476](https://github.com/jlcodes99/cockpit-tools/issues/1476) | 建议将codex中的api服务单独放上面区域，不要用这种宫格的展现形式，容易和普通账号弄混 | 功能建议/新需求 | - |
| [#1473](https://github.com/jlcodes99/cockpit-tools/issues/1473) | 开了两个账号的示例但是对话同时进行 | 多开实例/账号隔离/复制实例 | - |
| [#1464](https://github.com/jlcodes99/cockpit-tools/issues/1464) | 希望支持获取上游最新模型的功能 | 功能建议/新需求 | - |
| [#1440](https://github.com/jlcodes99/cockpit-tools/issues/1440) | 期望支持一下qoder的反代～ | 功能建议/新需求 | - |
| [#1432](https://github.com/jlcodes99/cockpit-tools/issues/1432) | 希望在内置的本地API设置页面增加规则写入 | 功能建议/新需求 | - |
| [#1427](https://github.com/jlcodes99/cockpit-tools/issues/1427) | 能不能支持一下对gemini进行本地反代 | 功能建议/新需求 | - |
| [#1420](https://github.com/jlcodes99/cockpit-tools/issues/1420) | WorkBuddy现在有积分签到活动，和CodeBuddy CN积分是通用的，希望加回一键签到 | 功能建议/新需求 | - |
| [#1414](https://github.com/jlcodes99/cockpit-tools/issues/1414) | 能不能出个vscode插件codex版的 | VSCode/插件登录或集成 | - |
| [#1403](https://github.com/jlcodes99/cockpit-tools/issues/1403) | 1.0.2最小化恢复以后经常白屏 | 启动白屏/性能 | - |
| [#1344](https://github.com/jlcodes99/cockpit-tools/issues/1344) | 希望提供跨设备的会话迁移 | 功能建议/新需求 | - |
| [#1341](https://github.com/jlcodes99/cockpit-tools/issues/1341) | 希望支持QoderWork CN，现在还有积分签到活动 | 功能建议/新需求 | - |
| [#1329](https://github.com/jlcodes99/cockpit-tools/issues/1329) | Codex 多开实例的插件共享问题 | 多开实例/账号隔离/复制实例 | - |
| [#1295](https://github.com/jlcodes99/cockpit-tools/issues/1295) | 希望可以打通 Claude Desktop 和 Claude Code 的账号 | 功能建议/新需求 | - |
| [#1284](https://github.com/jlcodes99/cockpit-tools/issues/1284) | 希望能增加opencode go订阅、deepseek账号的管理 | 功能建议/新需求 | - |
| [#1274](https://github.com/jlcodes99/cockpit-tools/issues/1274) | 1、能不能加上Zcode的账号切换？（就是智谱那个）；2、codex能不能加入多账号轮询？ | 功能建议/新需求 | - |
| [#1213](https://github.com/jlcodes99/cockpit-tools/issues/1213) | 希望能增加windows版本codex的codex(beta)版的支持和静默启动 | 功能建议/新需求 | - |
| [#1195](https://github.com/jlcodes99/cockpit-tools/issues/1195) | 建议CodexAPI 服务，账号池，增加多个账号池， | 功能建议/新需求 | - |
| [#1169](https://github.com/jlcodes99/cockpit-tools/issues/1169) | 能不能加一个测试apikey是否有效的功能。 | 功能建议/新需求 | - |
| [#1142](https://github.com/jlcodes99/cockpit-tools/issues/1142) | Antigravity IDE— Ошибка переключения: 未找到 state.vscdb，请先勾选复制当前登录状态或... | 多开实例/账号隔离/复制实例 | - |
| [#1141](https://github.com/jlcodes99/cockpit-tools/issues/1141) | 【功能请求】codex上ssh同步账号 | SSH 同步/远程 | - |
| [#1133](https://github.com/jlcodes99/cockpit-tools/issues/1133) | 建议增加新功能，一键选择出现401被封是账号，删除 | 功能建议/新需求 | - |
| [#1127](https://github.com/jlcodes99/cockpit-tools/issues/1127) | VSCode github-copilot 切号失败 | VSCode/插件登录或集成 | - |
| [#1102](https://github.com/jlcodes99/cockpit-tools/issues/1102) | 能QoderWork CN程序的支持麽？ | 新平台/区域变体 | - |
| [#1053](https://github.com/jlcodes99/cockpit-tools/issues/1053) | 每次重启这个软件供应商被改为OpenAI Officia | 数据/会话/配置丢失 | - |
| [#1041](https://github.com/jlcodes99/cockpit-tools/issues/1041) | [Feature Request] 增加 Xiaomi MiMo 模型供应商预设及 Codex 兼容性提示 | 功能建议/新需求 | - |
| [#993](https://github.com/jlcodes99/cockpit-tools/issues/993) | codex 多开实例，会话没有隔离，每个实例都有相同的会话 | 多开实例/账号隔离/复制实例 | - |
| [#988](https://github.com/jlcodes99/cockpit-tools/issues/988) | 建议添加一个 模型latnecy查询的功能，有时候codex很慢，不知道是本地代理节点问题，还是供应商问题，还是openai的问题 | 功能建议/新需求 | - |
| [#979](https://github.com/jlcodes99/cockpit-tools/issues/979) | 可否增加对Antigravity的会话管理功能 | 功能建议/新需求 | - |
| [#976](https://github.com/jlcodes99/cockpit-tools/issues/976) | 切换失败：未找到 state.vscdb，请先勾选复制当前登录状态或先启动实例一次 | 多开实例/账号隔离/复制实例 | - |
| [#955](https://github.com/jlcodes99/cockpit-tools/issues/955) | 建议在增加配置第三方API后支持手动设置模型 | 功能建议/新需求 | - |
| [#945](https://github.com/jlcodes99/cockpit-tools/issues/945) | Manjaro/Arch 打开Appimage白屏 | 启动白屏/性能 | - |
| [#941](https://github.com/jlcodes99/cockpit-tools/issues/941) | Antigravity IDE切换账户后会话记录消失 | 数据/会话/配置丢失 | - |
| [#927](https://github.com/jlcodes99/cockpit-tools/issues/927) | Feature Request: Support account switching for Gemini macOS app | 功能建议/新需求 | - |
| [#914](https://github.com/jlcodes99/cockpit-tools/issues/914) | 多开实例时Codex 使用内置浏览器报本地浏览器桥接失败 | 多开实例/账号隔离/复制实例 | - |
| [#903](https://github.com/jlcodes99/cockpit-tools/issues/903) | Codex OAuth 在 Windows 上仍会因固定端口 1455 被排除而授权失败 (os error 10013) | macOS 权限/多开权限限制 | - |
| [#901](https://github.com/jlcodes99/cockpit-tools/issues/901) | [Bug] Codex API Service GPT5.5 new endpoints? cursor byok | VSCode/插件登录或集成 | - |
| [#897](https://github.com/jlcodes99/cockpit-tools/issues/897) | [Feature Request] Codex 切号/重启后自动恢复指定会话并发送继续提示 | 多开实例/账号隔离/复制实例 | - |
| [#869](https://github.com/jlcodes99/cockpit-tools/issues/869) | 希望增加Antigravity CLI支持 | 功能建议/新需求 | - |
| [#867](https://github.com/jlcodes99/cockpit-tools/issues/867) | 建议做一个这样的 直接反代Kiro | 功能建议/新需求 | - |
| [#861](https://github.com/jlcodes99/cockpit-tools/issues/861) | macOS 官方客户端 0.24.2/0.24.3 启动后白屏，但 WKWebView 内容实际已加载 | 启动白屏/性能 | - |
| [#733](https://github.com/jlcodes99/cockpit-tools/issues/733) | 建议增加 Web 配置界面或远程同步功能（主要是方便 SSH 用户） | SSH 同步/远程 | - |
| [#698](https://github.com/jlcodes99/cockpit-tools/issues/698) | Feature Request: Provide Linux binaries (.deb and .AppImage) in Rel... | 功能建议/新需求 | - |
| [#697](https://github.com/jlcodes99/cockpit-tools/issues/697) | codex和copilot的使用优化 | VSCode/插件登录或集成 | - |
| [#640](https://github.com/jlcodes99/cockpit-tools/issues/640) | [Feature Request] 希望新增原本vscode擴充套件有的cursor/antigravity的使用量變化紀錄 | VSCode/插件登录或集成 | - |
| [#636](https://github.com/jlcodes99/cockpit-tools/issues/636) | [Feature Request] 增加 OpenClaw 和 Hermes 支持，纳入统一平台管理 | 功能建议/新需求 | - |

## 待确认（347）

| # | 标题 | 说明 | 版本提示 |
|---|------|------|----------|
| [#1573](https://github.com/jlcodes99/cockpit-tools/issues/1573) | new_api 渠道在「账号总览」额度显示为 - / - | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1570](https://github.com/jlcodes99/cockpit-tools/issues/1570) | grok额度查询403 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1561](https://github.com/jlcodes99/cockpit-tools/issues/1561) | API服务无法导入账号 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1560](https://github.com/jlcodes99/cockpit-tools/issues/1560) | codex business 额度无法正常显示 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1556](https://github.com/jlcodes99/cockpit-tools/issues/1556) | 账号用量限制问题 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1550](https://github.com/jlcodes99/cockpit-tools/issues/1550) | 版本1.3.0请求失败频率变高 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1547](https://github.com/jlcodes99/cockpit-tools/issues/1547) | 调度策略无法查看5小时限额，持续请求0额度账号 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1546](https://github.com/jlcodes99/cockpit-tools/issues/1546) | [Codex API Service] 1.5x Fast 模式未同步或未显示在 Codex 客户端 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1544](https://github.com/jlcodes99/cockpit-tools/issues/1544) | mac codex api 服务面板点击空白 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1535](https://github.com/jlcodes99/cockpit-tools/issues/1535) | 为什么不采纳我的推送啊喂？！！！ | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1531](https://github.com/jlcodes99/cockpit-tools/issues/1531) | codex 返回当前 API Key 没有 gpt-image-2 模型权限。 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1530](https://github.com/jlcodes99/cockpit-tools/issues/1530) | 5小时额度不显示 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1527](https://github.com/jlcodes99/cockpit-tools/issues/1527) | Backup broken (Wakeups) | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1523](https://github.com/jlcodes99/cockpit-tools/issues/1523) | Codex额度显示怎么多了2个额度显示 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1521](https://github.com/jlcodes99/cockpit-tools/issues/1521) | 账号切换不了codex 之前5.6出来前可以 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1517](https://github.com/jlcodes99/cockpit-tools/issues/1517) | 这个统计也太不准了吧。完全没作用啊。选择每天、每周没变化。还有上面那个统计，我比较习惯它代表的是当天的用量，而不是总用量。 | 统计相关：日历切日已修，其它统计问题待确认 | - |
| [#1516](https://github.com/jlcodes99/cockpit-tools/issues/1516) | 无法调用接口 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1507](https://github.com/jlcodes99/cockpit-tools/issues/1507) | [ObjectParam] [input[108].namespace] [unknown_parameter] Unknown pa... | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1504](https://github.com/jlcodes99/cockpit-tools/issues/1504) | Codex API Key 模型目录与 GPT-5.6 支持修改说明 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1502](https://github.com/jlcodes99/cockpit-tools/issues/1502) | apikey方式接入的会偶发报错如图，多试几次才能成功，不稳定；【且就算登录，会话没有了】 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1500](https://github.com/jlcodes99/cockpit-tools/issues/1500) | 账号登录有5.6，API模式登录没有，也按公告设置路径了 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1499](https://github.com/jlcodes99/cockpit-tools/issues/1499) | 按照公告还是不行 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1498](https://github.com/jlcodes99/cockpit-tools/issues/1498) | 更新以后，我的codex打不开了 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1497](https://github.com/jlcodes99/cockpit-tools/issues/1497) | 按照公告扫描改了路径也不行，切换自己的账号可以用5.6。api不行，上游说开了5.6. | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1496](https://github.com/jlcodes99/cockpit-tools/issues/1496) | 通过nvm管理的node和codex cli，用cockpit-tools启动时提示未检测到 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1495](https://github.com/jlcodes99/cockpit-tools/issues/1495) | 使用api服务或者apikey时无法使用5.6 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1494](https://github.com/jlcodes99/cockpit-tools/issues/1494) | 最新版合并应用后，点击切换账号时不会重启Codex或者chatGPT | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1493](https://github.com/jlcodes99/cockpit-tools/issues/1493) | API服务不显示5.6模型 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1492](https://github.com/jlcodes99/cockpit-tools/issues/1492) | 添加关闭查询额度的功能 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1490](https://github.com/jlcodes99/cockpit-tools/issues/1490) | 114版本切api进codex无法显示5.6 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1489](https://github.com/jlcodes99/cockpit-tools/issues/1489) | 114版本更新之后仍无法用5.6  切换账号也不成功，只是可以使用chatgpt这个应用名了。 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1488](https://github.com/jlcodes99/cockpit-tools/issues/1488) | 上下文窗口还是老版本258，最新是353 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1487](https://github.com/jlcodes99/cockpit-tools/issues/1487) | 114更新后，codex切换账号切换不了，切换没有效果，还是之前的账号 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1486](https://github.com/jlcodes99/cockpit-tools/issues/1486) | 中转用不了了 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1482](https://github.com/jlcodes99/cockpit-tools/issues/1482) | 怎么使用APIkey中的5.6，现在还是无法使用 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1481](https://github.com/jlcodes99/cockpit-tools/issues/1481) | 目录识别是混乱的 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1477](https://github.com/jlcodes99/cockpit-tools/issues/1477) | 目前还是无法切换codex不同账号 v1.1.3 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1475](https://github.com/jlcodes99/cockpit-tools/issues/1475) | 1.1.3 版本 用api 方式codex 没有5.6，咋回事，没更新前用预设还能用，现在都不行 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1474](https://github.com/jlcodes99/cockpit-tools/issues/1474) | 怎么把这个反代的api,用到claude code中啊。用的是gpt的号池。接进去提示模型不存在 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1472](https://github.com/jlcodes99/cockpit-tools/issues/1472) | gpt-5.6-sol | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1469](https://github.com/jlcodes99/cockpit-tools/issues/1469) | 加把劲，把 5.6 可以接入 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1468](https://github.com/jlcodes99/cockpit-tools/issues/1468) | need5.6need5.6need5.6need5.6need5.6need5.6need5.6need5.6need5.6need5.6 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1467](https://github.com/jlcodes99/cockpit-tools/issues/1467) | 多次切换不同的账号，消息存在重复 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1466](https://github.com/jlcodes99/cockpit-tools/issues/1466) | 优化建议 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1465](https://github.com/jlcodes99/cockpit-tools/issues/1465) | 快上GPT 5.6啊，快吧 我更新了，没效果 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1463](https://github.com/jlcodes99/cockpit-tools/issues/1463) | 软件更新到1.1.2还是没有gpt-5.6 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1461](https://github.com/jlcodes99/cockpit-tools/issues/1461) | 软件需要更新了 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1460](https://github.com/jlcodes99/cockpit-tools/issues/1460) | 请问Cockpit Tools怎么切换到GPT5.6模型使用 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1459](https://github.com/jlcodes99/cockpit-tools/issues/1459) | unexpected status 404 Not Found: 模型 gpt5.6 不在当前 API Key 的可用模型范围内, u... | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1455](https://github.com/jlcodes99/cockpit-tools/issues/1455) | 可以支持自动检测本机cursor账号然后拉到账号池里面吗 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1451](https://github.com/jlcodes99/cockpit-tools/issues/1451) | Codex API服务账号池中的调度策略无法自定义 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1450](https://github.com/jlcodes99/cockpit-tools/issues/1450) | CodexApi服务优化 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1449](https://github.com/jlcodes99/cockpit-tools/issues/1449) | 增加自定义API模型 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1447](https://github.com/jlcodes99/cockpit-tools/issues/1447) | 可以加入指纹环境吗 把添加新增账号 看作新增一个指纹浏览器环境 让每个账号单独指纹管理 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1446](https://github.com/jlcodes99/cockpit-tools/issues/1446) | The quota has been exceeded. | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1445](https://github.com/jlcodes99/cockpit-tools/issues/1445) | 批量导入失败后，一直显示在界面上了 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1443](https://github.com/jlcodes99/cockpit-tools/issues/1443) | [Bug] 切换至 MiniMax/DeepSeek 等非官方供应商时，cockpit-cliproxy 强行将模型重写为 'gpt-... | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1441](https://github.com/jlcodes99/cockpit-tools/issues/1441) | claude模型额度显示有延迟 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1433](https://github.com/jlcodes99/cockpit-tools/issues/1433) | 本地网关返回 HTTP 401：{"error":{"message":"{\"detail\":\"Unauthorized\"}"... | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1431](https://github.com/jlcodes99/cockpit-tools/issues/1431) | 无法使用 minimax API | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1426](https://github.com/jlcodes99/cockpit-tools/issues/1426) | 太卡了 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1421](https://github.com/jlcodes99/cockpit-tools/issues/1421) | 增强三方API额度/用量查询 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1419](https://github.com/jlcodes99/cockpit-tools/issues/1419) | 關於 antigravity ide 新功能請求以及問題詢問 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1415](https://github.com/jlcodes99/cockpit-tools/issues/1415) | 第三方模型接入启动，没有显示模型目录，模型是空 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1413](https://github.com/jlcodes99/cockpit-tools/issues/1413) | stream disconnected before completion: stream closed before respons... | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1411](https://github.com/jlcodes99/cockpit-tools/issues/1411) | 搞预发版本吧，你这样回退太折腾了 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1410](https://github.com/jlcodes99/cockpit-tools/issues/1410) | Antigrivity列表视图不够详细 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1409](https://github.com/jlcodes99/cockpit-tools/issues/1409) | 添加反重力CLI的支持 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1400](https://github.com/jlcodes99/cockpit-tools/issues/1400) | codex中固定使用一个账号，不自动负载 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1389](https://github.com/jlcodes99/cockpit-tools/issues/1389) | Bug: Codex API-key account switching can replay mixed provider stat... | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1385](https://github.com/jlcodes99/cockpit-tools/issues/1385) | Spark 模型请求应自动路由到 Pro 账号，避免 Plus 账号池调度失败 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1381](https://github.com/jlcodes99/cockpit-tools/issues/1381) | 账号无法编辑或切换为同一供应商的其他key | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1380](https://github.com/jlcodes99/cockpit-tools/issues/1380) | 功能请求：将 OpenAI 订阅反代和第三方模型网关整合为一个本地 Codex API Service | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1379](https://github.com/jlcodes99/cockpit-tools/issues/1379) | codex唤醒任务不能正常执行 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1378](https://github.com/jlcodes99/cockpit-tools/issues/1378) | 增加账号用量上限 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1369](https://github.com/jlcodes99/cockpit-tools/issues/1369) | [Codex] 支持网页 JWT 和 Codex access token 双凭据导入 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1367](https://github.com/jlcodes99/cockpit-tools/issues/1367) | 点击1m上下文页面问题 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1365](https://github.com/jlcodes99/cockpit-tools/issues/1365) | apiKey名称总是被覆盖成供应商的名称 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1364](https://github.com/jlcodes99/cockpit-tools/issues/1364) | cursor问题新版本 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1361](https://github.com/jlcodes99/cockpit-tools/issues/1361) | antigravityIDE账号无法切换 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1357](https://github.com/jlcodes99/cockpit-tools/issues/1357) | 强烈建议新增功能：定时给codex刷新5h额度 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1356](https://github.com/jlcodes99/cockpit-tools/issues/1356) | codex 切换第三方模型只有“自定” | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1354](https://github.com/jlcodes99/cockpit-tools/issues/1354) | add catpaw | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1352](https://github.com/jlcodes99/cockpit-tools/issues/1352) | 多账号额度消耗一致 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1347](https://github.com/jlcodes99/cockpit-tools/issues/1347) | codex平台，中转和个人账号切换，会丢失会话，必须手动修复才显示完整的记录 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1346](https://github.com/jlcodes99/cockpit-tools/issues/1346) | Codex， 添加供应商的 API 后，用了一段时间 URL 丢失，导致默认请求了官方 API | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1342](https://github.com/jlcodes99/cockpit-tools/issues/1342) | api账号调度可不可以关闭轮询啊 一个账号一个账号的用 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1340](https://github.com/jlcodes99/cockpit-tools/issues/1340) | Zed 本地浏览器账号OAuth失败 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1339](https://github.com/jlcodes99/cockpit-tools/issues/1339) | antigravity 渠道中的claude额度显示有bug | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1337](https://github.com/jlcodes99/cockpit-tools/issues/1337) | Claude Web usage 被 Cloudflare 校验后，打开验证窗口仍无法刷新额度 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1335](https://github.com/jlcodes99/cockpit-tools/issues/1335) | OAuth 绑定失效了， | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1333](https://github.com/jlcodes99/cockpit-tools/issues/1333) | 改进建议 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1332](https://github.com/jlcodes99/cockpit-tools/issues/1332) | v0.26.5：绑定 OAuth 的 Responses 原生 Codex API Key 账号无法持久取消禁用 image_gene... | Lite/工具/生图相关：有多轮修复，需最新版复测 | - |
| [#1331](https://github.com/jlcodes99/cockpit-tools/issues/1331) | 哎呀这个bug实在太多了 建议用成熟的 cliproxyapi | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1324](https://github.com/jlcodes99/cockpit-tools/issues/1324) | 请问 codex账号启动API服务，claude code 接入显示403 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1322](https://github.com/jlcodes99/cockpit-tools/issues/1322) | The quota shown in Cockpit Tools is 100%, but the Antigravity IDE's... | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1321](https://github.com/jlcodes99/cockpit-tools/issues/1321) | Cockpit 当前的Codex图片工具链路，在上游已经被锁到1K左右了 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1313](https://github.com/jlcodes99/cockpit-tools/issues/1313) | 唤醒任务看不到 Gemini 3.5 Flash 大模型 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1309](https://github.com/jlcodes99/cockpit-tools/issues/1309) | 文件夹分组操作逻辑很迷，还有单个订阅key的信息编辑 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1308](https://github.com/jlcodes99/cockpit-tools/issues/1308) | 加入同一个请求地址的其他key不让我加 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1307](https://github.com/jlcodes99/cockpit-tools/issues/1307) | 切换账号，修复后的会话点开报错 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1305](https://github.com/jlcodes99/cockpit-tools/issues/1305) | codex 切換 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1304](https://github.com/jlcodes99/cockpit-tools/issues/1304) | 切换失败：启动 Claude 失败: 拒绝访问。 (os error 5) | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1301](https://github.com/jlcodes99/cockpit-tools/issues/1301) | 通过cockpit转发出的API key调用OpenAI的GPT-image-2模型时，返回出现尺寸问题 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1300](https://github.com/jlcodes99/cockpit-tools/issues/1300) | [Kiro] Token refresh fails with 'missing client_id' — clientId is a... | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1299](https://github.com/jlcodes99/cockpit-tools/issues/1299) | 启动对话时出错 Invalid request: missing field `inputSchema` | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1292](https://github.com/jlcodes99/cockpit-tools/issues/1292) | [bug] codex API Key没法选用官方的 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1291](https://github.com/jlcodes99/cockpit-tools/issues/1291) | windows上Antigravity IDE账号切换无效 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1289](https://github.com/jlcodes99/cockpit-tools/issues/1289) | OAuth-created Codex sessions can resume against api.openai.com afte... | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1285](https://github.com/jlcodes99/cockpit-tools/issues/1285) | 供应商为原生responses的账号仍走了本地网关，疑似绑定OAuth逻辑问题 | Lite/工具/生图相关：有多轮修复，需最新版复测 | - |
| [#1279](https://github.com/jlcodes99/cockpit-tools/issues/1279) | 安装了cockpit后，在每次电脑重启后，Codex App和Visual Studio的Codex插件都要重新登陆 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1278](https://github.com/jlcodes99/cockpit-tools/issues/1278) | codex切换账号的时候，账号的key的名称被修改了 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1275](https://github.com/jlcodes99/cockpit-tools/issues/1275) | [QoL Feature] Homebrew public cask | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1270](https://github.com/jlcodes99/cockpit-tools/issues/1270) | codex api可以选择不轮询吗 感觉这样太容易封号了 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1267](https://github.com/jlcodes99/cockpit-tools/issues/1267) | 可以增加这个功能吗？就是重置的到期时间： | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1265](https://github.com/jlcodes99/cockpit-tools/issues/1265) | Windows 更新时文件一直占用，安装器没法覆盖 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1260](https://github.com/jlcodes99/cockpit-tools/issues/1260) | 额度刷新失败：Claude 资料刷新失败: 读取 Claude Cookies 失败 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1259](https://github.com/jlcodes99/cockpit-tools/issues/1259) | 使用v0.26.2后plus存在额度无缘无故减少的情况 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1248](https://github.com/jlcodes99/cockpit-tools/issues/1248) | 关于配置 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1241](https://github.com/jlcodes99/cockpit-tools/issues/1241) | Gemini cli 无法正确获取到额度 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1239](https://github.com/jlcodes99/cockpit-tools/issues/1239) | codex api服务用量统计时间筛选能否支持筛选当日的 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1237](https://github.com/jlcodes99/cockpit-tools/issues/1237) | 我发现如果账号池里面都是免费的用api 的话会一直出现问题，这个是代码问题还是免费号本身的问题，捞可以帮忙解决一下不🙏 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1230](https://github.com/jlcodes99/cockpit-tools/issues/1230) | 更新之后codex反代的image2模型 不能生成2K图了 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1229](https://github.com/jlcodes99/cockpit-tools/issues/1229) | v0.25.7ClaudeDesktop配额刷新失败 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1228](https://github.com/jlcodes99/cockpit-tools/issues/1228) | 最新版本0.25.7安装升级过程中会报错 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1227](https://github.com/jlcodes99/cockpit-tools/issues/1227) | cursor能支持额度用完自动切号吗？ | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1222](https://github.com/jlcodes99/cockpit-tools/issues/1222) | 关于“API 服务-新”的优先高配额模式的优化建议 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1219](https://github.com/jlcodes99/cockpit-tools/issues/1219) | 从cockpit启动codex app,"启动记忆" 功能为关闭 , 手工开启之后 再启动的话还是关闭状态 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1216](https://github.com/jlcodes99/cockpit-tools/issues/1216) | codex openai_base_url 覆盖问题 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1215](https://github.com/jlcodes99/cockpit-tools/issues/1215) | wsl的codex无法使用api服务 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1207](https://github.com/jlcodes99/cockpit-tools/issues/1207) | cursor切换账号后无法用cursor打开移动硬盘内部的文件 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1204](https://github.com/jlcodes99/cockpit-tools/issues/1204) | 经常出现504是什么情况 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1203](https://github.com/jlcodes99/cockpit-tools/issues/1203) | 专业版win10安装软件错报view2 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1200](https://github.com/jlcodes99/cockpit-tools/issues/1200) | Antigravity布局缺乏记忆 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1194](https://github.com/jlcodes99/cockpit-tools/issues/1194) | 启动 API 服务会修改本地 Codex 配置的 model_provider | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1193](https://github.com/jlcodes99/cockpit-tools/issues/1193) | 能增加一个账号或者一个APIDE使用token消耗统计量吗？ | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1191](https://github.com/jlcodes99/cockpit-tools/issues/1191) | 增加支持GitLab Duo Cli | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1189](https://github.com/jlcodes99/cockpit-tools/issues/1189) | 是不是有bug啊 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1187](https://github.com/jlcodes99/cockpit-tools/issues/1187) | 给模型供应商部分的额度查询的网址要求给放宽一些 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1186](https://github.com/jlcodes99/cockpit-tools/issues/1186) | Mac本具体是下载哪个？ | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1185](https://github.com/jlcodes99/cockpit-tools/issues/1185) | 导入gpt账号json一直显示 正在准备导入任务 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1182](https://github.com/jlcodes99/cockpit-tools/issues/1182) | refresh token was revoked突然全部账号都显示Codex 登录授权已被服务端撤销了，有没有什么办法可以不重新登录... | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1181](https://github.com/jlcodes99/cockpit-tools/issues/1181) | 手机codex远程看不到会话记录 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1180](https://github.com/jlcodes99/cockpit-tools/issues/1180) | https://api.iamhc.cn  这样的免费ai，缺个模型参数配置，用不了 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1179](https://github.com/jlcodes99/cockpit-tools/issues/1179) | Cockpit Tools v0.25.6 无法打开了 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1178](https://github.com/jlcodes99/cockpit-tools/issues/1178) | Cockpit Tools v0.25.6 Codex OAuth issue: | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1176](https://github.com/jlcodes99/cockpit-tools/issues/1176) | 中转站配置后强制触发图片生成导致 403 | Lite/工具/生图相关：有多轮修复，需最新版复测 | - |
| [#1172](https://github.com/jlcodes99/cockpit-tools/issues/1172) | 更新后通过api服务无法使用 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1171](https://github.com/jlcodes99/cockpit-tools/issues/1171) | 我的聊天记录在更新codex之后恢复不了了 显示恢复成功 但是没有项目聊天记录 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1168](https://github.com/jlcodes99/cockpit-tools/issues/1168) | codex desktop里使用 国产glm mimo 火山等 codingplan，codex 直接unexpected statu... | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#1167](https://github.com/jlcodes99/cockpit-tools/issues/1167) | 切号错误 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1166](https://github.com/jlcodes99/cockpit-tools/issues/1166) | 【feature request】 Codex批量导入可选择批量打标 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1165](https://github.com/jlcodes99/cockpit-tools/issues/1165) | 【feature request】 Codex批量导入时支持显示额度信息、可选择根据额度过滤账号，例如0%就不导入 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1164](https://github.com/jlcodes99/cockpit-tools/issues/1164) | 模型供应商 页面美化 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1162](https://github.com/jlcodes99/cockpit-tools/issues/1162) | 【功能请求】增加 Antigravity CLI 账号管理与切换支持 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1161](https://github.com/jlcodes99/cockpit-tools/issues/1161) | 不同厂商的聊天记录共享 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1160](https://github.com/jlcodes99/cockpit-tools/issues/1160) | 删掉账号之后，红色报错去不掉 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1159](https://github.com/jlcodes99/cockpit-tools/issues/1159) | 同步会话有问题，部分会话会丢失 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1158](https://github.com/jlcodes99/cockpit-tools/issues/1158) | codex使用deepseek 网关转发的时候报错 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1157](https://github.com/jlcodes99/cockpit-tools/issues/1157) | 切换账号后codex变成英文界面了 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1156](https://github.com/jlcodes99/cockpit-tools/issues/1156) | 增加筛选0额度的功能 能快速筛选出一批无法使用的账号 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1155](https://github.com/jlcodes99/cockpit-tools/issues/1155) | API key 的模式下为啥要不停的请求？消耗额度 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1154](https://github.com/jlcodes99/cockpit-tools/issues/1154) | 一天更新1次，怎么关闭 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1152](https://github.com/jlcodes99/cockpit-tools/issues/1152) | windows容易卡死 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1151](https://github.com/jlcodes99/cockpit-tools/issues/1151) | 为什么更新之后侧边栏默认出现了“中转站” | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1150](https://github.com/jlcodes99/cockpit-tools/issues/1150) | 删除可以让后台执行 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1149](https://github.com/jlcodes99/cockpit-tools/issues/1149) | release portable version please! | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1148](https://github.com/jlcodes99/cockpit-tools/issues/1148) | v0.25.5 codex 账号管理，API_KEY 无法修改 tag 了 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1146](https://github.com/jlcodes99/cockpit-tools/issues/1146) | Trae account switch doesnt work | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1144](https://github.com/jlcodes99/cockpit-tools/issues/1144) | 最新版本的 cursor 切换号失败，帮忙修复下 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1140](https://github.com/jlcodes99/cockpit-tools/issues/1140) | 0.25.4存在大量账号codex卡死问题 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1138](https://github.com/jlcodes99/cockpit-tools/issues/1138) | TRAE切不了账号 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1137](https://github.com/jlcodes99/cockpit-tools/issues/1137) | 增加token用量总览 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1135](https://github.com/jlcodes99/cockpit-tools/issues/1135) | Codex 账号索引中有 2 个账号，但详情文件均无法读取；已保留前端缓存，请从账号备份或本地账号文件恢复。 无法处理 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1134](https://github.com/jlcodes99/cockpit-tools/issues/1134) | 怎么将codex的账号切换应用到WSL中 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1132](https://github.com/jlcodes99/cockpit-tools/issues/1132) | 更新後的視窗大小，可以固定嗎?每次都要重新調整 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1128](https://github.com/jlcodes99/cockpit-tools/issues/1128) | 账号超过500个程序就直接卡死了，有没有办法在程序外删除账号？ | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1126](https://github.com/jlcodes99/cockpit-tools/issues/1126) | Codex账号切换失败 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1125](https://github.com/jlcodes99/cockpit-tools/issues/1125) | 读取本地 API 请求失败: 请求体过大 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1124](https://github.com/jlcodes99/cockpit-tools/issues/1124) | 账号超过1000以上，会卡死，没法使用，不是电脑卡 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1123](https://github.com/jlcodes99/cockpit-tools/issues/1123) | codex多个账号固定好排序后，点击别的tab后又自己重置了，自定义排序没有记住 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1114](https://github.com/jlcodes99/cockpit-tools/issues/1114) | 升级到最新的版本之后，软件特别容易卡死 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1111](https://github.com/jlcodes99/cockpit-tools/issues/1111) | 【功能请求】静默启动 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1110](https://github.com/jlcodes99/cockpit-tools/issues/1110) | 没有批量删除账号的功能吗 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1109](https://github.com/jlcodes99/cockpit-tools/issues/1109) | api功能出现stream disconnected before completion: stream closed before ... | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1106](https://github.com/jlcodes99/cockpit-tools/issues/1106) | 账号一多就崩了，超过500个就死机动不了了 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1105](https://github.com/jlcodes99/cockpit-tools/issues/1105) | cursor 账号切换后打开应用没有登录 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1096](https://github.com/jlcodes99/cockpit-tools/issues/1096) | 0.25.0版本无法启动codex | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1094](https://github.com/jlcodes99/cockpit-tools/issues/1094) | antigravity有反代吗？ | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1093](https://github.com/jlcodes99/cockpit-tools/issues/1093) | Kiro，有没反代的？ | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1089](https://github.com/jlcodes99/cockpit-tools/issues/1089) | 字体样式不一致 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1088](https://github.com/jlcodes99/cockpit-tools/issues/1088) | 使用trae時，無法正確的得知額度 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1087](https://github.com/jlcodes99/cockpit-tools/issues/1087) | 【功能建议】建议在mac顶部菜单栏加入周限额百分比 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1086](https://github.com/jlcodes99/cockpit-tools/issues/1086) | codex切换账号失败 切换失败: 解析 config.toml 失败 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1082](https://github.com/jlcodes99/cockpit-tools/issues/1082) | 有没有增加 kimi 平台的打算 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1081](https://github.com/jlcodes99/cockpit-tools/issues/1081) | 系统能切换账号，无法同步Trae | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1079](https://github.com/jlcodes99/cockpit-tools/issues/1079) | 升级v0.24.12版本后出现切换账号时没有启动codex而是启动了一个空的chrome窗口 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1078](https://github.com/jlcodes99/cockpit-tools/issues/1078) | Codex管理：两台电脑之间无法通过导出+导入迁移Provider和API KEY | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1077](https://github.com/jlcodes99/cockpit-tools/issues/1077) | Bug: Unable to switch accounts / Login fails in Antigraviti | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1074](https://github.com/jlcodes99/cockpit-tools/issues/1074) | antigravity 无法切换账号 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1072](https://github.com/jlcodes99/cockpit-tools/issues/1072) | MAC windsurf 找不到路径，改名了找不到了 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1071](https://github.com/jlcodes99/cockpit-tools/issues/1071) | Codex API 服务统计未识别 Responses API 的 reasoning effort | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1070](https://github.com/jlcodes99/cockpit-tools/issues/1070) | cockpit-tools 切换不了局域网模式，只能是本机模式 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1069](https://github.com/jlcodes99/cockpit-tools/issues/1069) | codex 额度没有用就被异常消耗 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1068](https://github.com/jlcodes99/cockpit-tools/issues/1068) | 【bug】悬浮卡片中，关于 workbuddy、codebuddy CN 配额显示不正确 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1065](https://github.com/jlcodes99/cockpit-tools/issues/1065) | ISSUE: Wake Up feature has been consistently broken for ~1 month (5... | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1060](https://github.com/jlcodes99/cockpit-tools/issues/1060) | codex每次切换账号，config.toml中的model_provider 被移除 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1059](https://github.com/jlcodes99/cockpit-tools/issues/1059) | 账号备注，默认显示备注内容，更有用 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1058](https://github.com/jlcodes99/cockpit-tools/issues/1058) | 0.24.11无法切换team账号，plus和free实在正常的 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1056](https://github.com/jlcodes99/cockpit-tools/issues/1056) | 可用 3/4 异常 1 · 冷却 0 经常会出现异常（也太敏感了吧） | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1052](https://github.com/jlcodes99/cockpit-tools/issues/1052) | [bug] 新版本V0.24.11-测试模型链接异常 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1051](https://github.com/jlcodes99/cockpit-tools/issues/1051) | API能否加入兼容 Anthropic 接口协议 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1050](https://github.com/jlcodes99/cockpit-tools/issues/1050) | team+plus只能三个账号共存，超过三个就掉 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1049](https://github.com/jlcodes99/cockpit-tools/issues/1049) | 强烈建议支持备份 codex 会话数据！！ | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1047](https://github.com/jlcodes99/cockpit-tools/issues/1047) | 急需 兼容 OpenAI Response 格式 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1045](https://github.com/jlcodes99/cockpit-tools/issues/1045) | Antigravity IDE自动唤醒失败 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1044](https://github.com/jlcodes99/cockpit-tools/issues/1044) | v0.24.11 设置 codex 自定义供应商, 重新启动后会自动回滚 codex base url 到 OpenAI Official | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1043](https://github.com/jlcodes99/cockpit-tools/issues/1043) | 切号后computer use插件需要重装 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1042](https://github.com/jlcodes99/cockpit-tools/issues/1042) | 可以统计每个api的token用量 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1039](https://github.com/jlcodes99/cockpit-tools/issues/1039) | codex桌面端账号达到设定阈值后也未自动切号，无法触发自动切号 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1038](https://github.com/jlcodes99/cockpit-tools/issues/1038) | windows 10 codex点击切换账号有问题 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1037](https://github.com/jlcodes99/cockpit-tools/issues/1037) | Maintain centralized history of chats in antigracvity \| Feature Re... | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1036](https://github.com/jlcodes99/cockpit-tools/issues/1036) | API用量统计 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1035](https://github.com/jlcodes99/cockpit-tools/issues/1035) | Your access token could not be refreshed. Please log out and sign i... | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1030](https://github.com/jlcodes99/cockpit-tools/issues/1030) | codex会话问题 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1029](https://github.com/jlcodes99/cockpit-tools/issues/1029) | 每次重启api服务codex的配置文件会被重写，导致插件都不能用 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1024](https://github.com/jlcodes99/cockpit-tools/issues/1024) | Cockpit_Tools_Antigravity通过数据库跟插件不能导入问题解决（作者我提供了解决方案测试成功请您看下） | Lite/工具/生图相关：有多轮修复，需最新版复测 | - |
| [#1023](https://github.com/jlcodes99/cockpit-tools/issues/1023) | Codex multi-instance startup caused massive session sync, high memo... | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1022](https://github.com/jlcodes99/cockpit-tools/issues/1022) | 自定义api服务增加禁用模型功能 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1021](https://github.com/jlcodes99/cockpit-tools/issues/1021) | API 服务绑定 OAuth 账号应该放开free账号 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1020](https://github.com/jlcodes99/cockpit-tools/issues/1020) | Codex切换账号，只是 重启了账号没有切换过来 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1014](https://github.com/jlcodes99/cockpit-tools/issues/1014) | 支持使用 codex 代理 镜像 mirror 账号吗 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1013](https://github.com/jlcodes99/cockpit-tools/issues/1013) | codex 切完账号后桌面端的左下角是不是不显示剩余额度？ | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1012](https://github.com/jlcodes99/cockpit-tools/issues/1012) | 新版Codex适配问题 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1008](https://github.com/jlcodes99/cockpit-tools/issues/1008) | 今天Codex桌面端更新后 切号功能无法正常使用 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#1007](https://github.com/jlcodes99/cockpit-tools/issues/1007) | OAuth登陆后放着啥也不动，额度就自己一直消耗下去了 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1006](https://github.com/jlcodes99/cockpit-tools/issues/1006) | 随便点击一个账号的刷新配额 api服务也会被堵住直到刷新结束 体现为 codex显示断开链接 刷新万后又恢复了 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#1005](https://github.com/jlcodes99/cockpit-tools/issues/1005) | workbuddy账号希望能做个自动签到领积分功能 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1004](https://github.com/jlcodes99/cockpit-tools/issues/1004) | 现在有一些账号显示没有问题，但是实际上不会调用，刷新也测试不出来，能否加一个连通性测试 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#1003](https://github.com/jlcodes99/cockpit-tools/issues/1003) | deepseek API 问题 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#1001](https://github.com/jlcodes99/cockpit-tools/issues/1001) | antigravity找不到路径 | 安装/更新/启动：信息不足或环境相关 | - |
| [#1000](https://github.com/jlcodes99/cockpit-tools/issues/1000) | codex add via JSON | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#999](https://github.com/jlcodes99/cockpit-tools/issues/999) | 添加账号弹窗建议优化 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#998](https://github.com/jlcodes99/cockpit-tools/issues/998) | Windows: Session restore/trash fails to rebuild Codex session index... | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#996](https://github.com/jlcodes99/cockpit-tools/issues/996) | macOS 安装后 Launchpad 不显示 Cockpit Tools 图标 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#992](https://github.com/jlcodes99/cockpit-tools/issues/992) | codex建议增加授权失败的导出 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#990](https://github.com/jlcodes99/cockpit-tools/issues/990) | codex桌面端不计算总Token 输入和输出 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#989](https://github.com/jlcodes99/cockpit-tools/issues/989) | Codex API代理base_url希望支持可选 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#987](https://github.com/jlcodes99/cockpit-tools/issues/987) | 新版本切号之后，历史的全部项目都会显示在 UI 当中... | 切号行为：历史版本问题多，需最新版复测 | - |
| [#985](https://github.com/jlcodes99/cockpit-tools/issues/985) | v0.24.9 xAI sidecar 支持在 UI 中如何使用？ | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#982](https://github.com/jlcodes99/cockpit-tools/issues/982) | invalid ID token format at line 7 column 18 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#981](https://github.com/jlcodes99/cockpit-tools/issues/981) | codex新api服务无法使用，一直连接超时 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#978](https://github.com/jlcodes99/cockpit-tools/issues/978) | 公司电脑安装不了, 会报毒. 不让运行. | 安装/更新/启动：信息不足或环境相关 | - |
| [#971](https://github.com/jlcodes99/cockpit-tools/issues/971) | Codex 账号鉴权失败，本地网关失败怎么解决 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#970](https://github.com/jlcodes99/cockpit-tools/issues/970) | config.toml缺少开启goal的配置 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#969](https://github.com/jlcodes99/cockpit-tools/issues/969) | codex配置重置唤醒 建议 改成根据账号最新重置时间触发，不用默认每隔两分钟刷新一次信息 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#968](https://github.com/jlcodes99/cockpit-tools/issues/968) | 现在没有phone认证过的，API是不是也失效不能用了？ | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#967](https://github.com/jlcodes99/cockpit-tools/issues/967) | 新版本 API 服务遇到自动压缩上下文的时候会报错 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#966](https://github.com/jlcodes99/cockpit-tools/issues/966) | 无法切换账号，tools切换过来打开antigravity IDE之后显示的还是初始的账户，并未切换过来 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#964](https://github.com/jlcodes99/cockpit-tools/issues/964) | cursor问题 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#963](https://github.com/jlcodes99/cockpit-tools/issues/963) | Codex 中转配额信息 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#962](https://github.com/jlcodes99/cockpit-tools/issues/962) | Codex的API Key账号的Tag显示样式问题 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#961](https://github.com/jlcodes99/cockpit-tools/issues/961) | 期望能够支持Anthropic 接口 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#957](https://github.com/jlcodes99/cockpit-tools/issues/957) | 这个版本切换不同账号重启codex会出现侧边栏项目名称乱码的情况，是bug吗？ | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#952](https://github.com/jlcodes99/cockpit-tools/issues/952) | web json授權的 codex 單帳號切換好像不能用了 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#951](https://github.com/jlcodes99/cockpit-tools/issues/951) | Trae | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#948](https://github.com/jlcodes99/cockpit-tools/issues/948) | 可以記錄之前開啟的視窗大小嗎? | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#940](https://github.com/jlcodes99/cockpit-tools/issues/940) | [phantomcreds] Exposed secrets detected in this repository | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#936](https://github.com/jlcodes99/cockpit-tools/issues/936) | codex客户端不认识show | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#931](https://github.com/jlcodes99/cockpit-tools/issues/931) | Clarification | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#924](https://github.com/jlcodes99/cockpit-tools/issues/924) | 这是什么问题 codex 里面 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#920](https://github.com/jlcodes99/cockpit-tools/issues/920) | Failed to resolve Windows USERPROFILE path from WSL | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#919](https://github.com/jlcodes99/cockpit-tools/issues/919) | unexpected status 401 Unauthorized: Token 已过期且刷新失败 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#916](https://github.com/jlcodes99/cockpit-tools/issues/916) | codex桌面端更新后修复对话异常问题 | 安装/更新/启动：信息不足或环境相关 | - |
| [#915](https://github.com/jlcodes99/cockpit-tools/issues/915) | Kiro的反代 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#913](https://github.com/jlcodes99/cockpit-tools/issues/913) | 现在是不是切换access token登陆的账号有问题？只有oauth登陆的号才能切换？ | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#912](https://github.com/jlcodes99/cockpit-tools/issues/912) | API 服务出现codex_local_access_error, 请求体过大 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#911](https://github.com/jlcodes99/cockpit-tools/issues/911) | Antigravity 2.0无法使用“切换账号”功能进行账号的切换 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#910](https://github.com/jlcodes99/cockpit-tools/issues/910) | codex模型使用问题 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#909](https://github.com/jlcodes99/cockpit-tools/issues/909) | 修复消息的功能一直error | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#907](https://github.com/jlcodes99/cockpit-tools/issues/907) | 更新24.4之后导入的所有账号全是授权异常了 | 安装/更新/启动：信息不足或环境相关 | - |
| [#905](https://github.com/jlcodes99/cockpit-tools/issues/905) | 自动审查模式不可用？？ | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#904](https://github.com/jlcodes99/cockpit-tools/issues/904) | 大佬，是否考虑给API_KEY也增加额度显示的功能啊？ | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#902](https://github.com/jlcodes99/cockpit-tools/issues/902) | Codex 账户切换后需要杀掉正在运行的 Codex 进程才会生效 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#900](https://github.com/jlcodes99/cockpit-tools/issues/900) | unexpected status 502 Bad Gateway | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#896](https://github.com/jlcodes99/cockpit-tools/issues/896) | codex的api不能正常使用 | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#894](https://github.com/jlcodes99/cockpit-tools/issues/894) | trae 登录失败，以及修复逻辑 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#892](https://github.com/jlcodes99/cockpit-tools/issues/892) | NO login | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#891](https://github.com/jlcodes99/cockpit-tools/issues/891) | codex无法切换账号问题，需要登录 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#887](https://github.com/jlcodes99/cockpit-tools/issues/887) | codex 用 api服务启动，最近为什么总是提示授权过期？ | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#883](https://github.com/jlcodes99/cockpit-tools/issues/883) | trae进行账号切换时显示已经切换但是trae的界面没有登录 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#882](https://github.com/jlcodes99/cockpit-tools/issues/882) | api服务不可用的兄弟们 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#879](https://github.com/jlcodes99/cockpit-tools/issues/879) | 认证出问题了，上午还好好的能用来着，好像是因为IDE更新了 | 安装/更新/启动：信息不足或环境相关 | - |
| [#877](https://github.com/jlcodes99/cockpit-tools/issues/877) | There was an error with your authentication. To log in, click | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#870](https://github.com/jlcodes99/cockpit-tools/issues/870) | [BUG] API调用401报错 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#865](https://github.com/jlcodes99/cockpit-tools/issues/865) | [BUG] Antigravity doesn't show its status | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#860](https://github.com/jlcodes99/cockpit-tools/issues/860) | Translations for Portugue (Brazil) | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#859](https://github.com/jlcodes99/cockpit-tools/issues/859) | codex 有效期显示不明确 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#856](https://github.com/jlcodes99/cockpit-tools/issues/856) | API服务，能不能更新可以对外访问 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#838](https://github.com/jlcodes99/cockpit-tools/issues/838) | 对API key无法命名 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#836](https://github.com/jlcodes99/cockpit-tools/issues/836) | Codex 登录授权已被服务端撤销，无法自动刷新。请重新登录 Codex 账号。 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#833](https://github.com/jlcodes99/cockpit-tools/issues/833) | Installation fails on Ubuntu 20.04 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#830](https://github.com/jlcodes99/cockpit-tools/issues/830) | 导入导出功能慎用！！可能会导致Google风控 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#829](https://github.com/jlcodes99/cockpit-tools/issues/829) | windows 11 环境下，软件卡死 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#828](https://github.com/jlcodes99/cockpit-tools/issues/828) | 切换不了 | 切号行为：历史版本问题多，需最新版复测 | - |
| [#827](https://github.com/jlcodes99/cockpit-tools/issues/827) | CodeX 切换自己账号后报错 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#826](https://github.com/jlcodes99/cockpit-tools/issues/826) | codex本地代理总是超时，重连 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#824](https://github.com/jlcodes99/cockpit-tools/issues/824) | CodeBuddy CN的OAuth能否支持手动配置认证地址 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#822](https://github.com/jlcodes99/cockpit-tools/issues/822) | windsurf 多实例问题 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#819](https://github.com/jlcodes99/cockpit-tools/issues/819) | Model Quotas not updating. | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#818](https://github.com/jlcodes99/cockpit-tools/issues/818) | antigravity new update on mac os auth doesnt work after update | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#811](https://github.com/jlcodes99/cockpit-tools/issues/811) | 如何删除大量数据 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#802](https://github.com/jlcodes99/cockpit-tools/issues/802) | 能否添加token用量图表展示功能？ | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#801](https://github.com/jlcodes99/cockpit-tools/issues/801) | 自动切号优先策略问题 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#796](https://github.com/jlcodes99/cockpit-tools/issues/796) | API 调度及优先级 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#795](https://github.com/jlcodes99/cockpit-tools/issues/795) | 是否能转换Responses协议。 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#790](https://github.com/jlcodes99/cockpit-tools/issues/790) | 最新版按钮展示错乱，编辑APIKEY无法保存 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#762](https://github.com/jlcodes99/cockpit-tools/issues/762) | 新增美团的ai ide自动切换 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#754](https://github.com/jlcodes99/cockpit-tools/issues/754) | Codex API/OAuth 切换后 relay WebSocket 与会话可见性 repair 仍可能漂移 | Lite/工具/生图相关：有多轮修复，需最新版复测 | - |
| [#750](https://github.com/jlcodes99/cockpit-tools/issues/750) | 不知道为什么，Codex很容易刷新auth.json这个文件，导致经常失效 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#748](https://github.com/jlcodes99/cockpit-tools/issues/748) | 可不可以增加一个kiro播发api 的功能呢？ | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#732](https://github.com/jlcodes99/cockpit-tools/issues/732) | ai对话久了变笨了，大佬实现了api服务，如果配套实现一个上下文对象管理界面就更好了 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#730](https://github.com/jlcodes99/cockpit-tools/issues/730) | 移动的 API key 支持导入吗？ | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#728](https://github.com/jlcodes99/cockpit-tools/issues/728) | codex的反代API可以接入claude code中使用吗 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#725](https://github.com/jlcodes99/cockpit-tools/issues/725) | Kiro IDE and cli | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#723](https://github.com/jlcodes99/cockpit-tools/issues/723) | 从最小化唤醒之后，页面会卡顿一段时间后才能使用 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#722](https://github.com/jlcodes99/cockpit-tools/issues/722) | problem with the subscription expiration date | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#718](https://github.com/jlcodes99/cockpit-tools/issues/718) | codex 每次到重置的时间后，自动登录一次吗 | 安装/更新/启动：信息不足或环境相关 | - |
| [#717](https://github.com/jlcodes99/cockpit-tools/issues/717) | 能否增加一个本地api上传账号信息 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#712](https://github.com/jlcodes99/cockpit-tools/issues/712) | codex api切换不会自动同步对话 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#706](https://github.com/jlcodes99/cockpit-tools/issues/706) | codex-api模式用量统计-月用量和周用量始终相同 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#702](https://github.com/jlcodes99/cockpit-tools/issues/702) | 跨设备导入配置会报错：“配置数据已恢复；1 个账号绑定未匹配，已跳过；部分账号导入失败：无效的 JWT Token 格式” | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#700](https://github.com/jlcodes99/cockpit-tools/issues/700) | api流量管理细化 | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#699](https://github.com/jlcodes99/cockpit-tools/issues/699) | API Usage 到達黃色警告的時候，Cursor的進度條無法正確顯示 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#694](https://github.com/jlcodes99/cockpit-tools/issues/694) | "No accounts" message opening Antigravity Cockpit | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#689](https://github.com/jlcodes99/cockpit-tools/issues/689) | add the account configuration for trae solo | 5.6/模型路径历史问题：1.3.x 多轮修复，需最新版确认是否仍复现 | - |
| [#682](https://github.com/jlcodes99/cockpit-tools/issues/682) | gemini cli只有一个账号显示出了配额 | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#681](https://github.com/jlcodes99/cockpit-tools/issues/681) | codex增加筛选,鼠标按下滑动可以多选择 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#680](https://github.com/jlcodes99/cockpit-tools/issues/680) | How to proxy Cockpit using Proxifier? | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#678](https://github.com/jlcodes99/cockpit-tools/issues/678) | 能不能支持将备份上传到 gits 里呢 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#672](https://github.com/jlcodes99/cockpit-tools/issues/672) | windsurf 不支持google 登录了 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#669](https://github.com/jlcodes99/cockpit-tools/issues/669) | Too Many Requests \| Resource has been exhausted \| 429 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#666](https://github.com/jlcodes99/cockpit-tools/issues/666) | Codex account switch writes auth.json without auth_mode, causing of... | API/反代/网关：需版本+错误信息确认是否仍存在 | - |
| [#660](https://github.com/jlcodes99/cockpit-tools/issues/660) | 功能建议：实现 Token 消耗的精确量化统计与账号用量透明化 (Detailed Token Metrics & Precise U... | 额度/配额展示或调度：部分展示逻辑已改，需复测确认 | - |
| [#645](https://github.com/jlcodes99/cockpit-tools/issues/645) | 标签设置页的叉号应该加个弹窗确认，不然打标签的时候误点就会把该标签所有的都去掉了 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#642](https://github.com/jlcodes99/cockpit-tools/issues/642) | Need Linux release, thanks 需要linux的AppImage包，谢谢大佬 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
| [#616](https://github.com/jlcodes99/cockpit-tools/issues/616) | 有计划支持 kiro IAM Identity Center 方式登录吗 | 信息不足或历史遗留，需人工看详情 / 最新版是否仍复现 | - |
