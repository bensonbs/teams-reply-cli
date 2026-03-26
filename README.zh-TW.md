# teams-reply-cli

透過 Power Automate Webhook 發送訊息到 Microsoft Teams 聊天室。

專為 AI 代理（如 Claude Code）設計的 CLI 中介層——能讀取 Teams 訊息但無法直接回覆時，透過這個工具完成回覆。

## 設定

### 1. 建立 Power Automate Webhook

在 Microsoft Teams 中，打開你要接收訊息的聊天室或頻道：

1. 點擊 **「+」（管理應用程式）** 或 **「...」** → **「工作流程」**
2. 搜尋並選擇範本：
   - 頻道：**「當收到 Webhook 要求時張貼到頻道」**
   - 聊天室：**「將 Webhook 警示傳送至聊天」**
3. 依照提示完成建立
4. 複製產生的 **Webhook URL**（會包含 `sig` 驗證參數）

### 2. 安裝

從 GitHub 安裝：

```bash
npm install -g github:bensonbs/teams-reply-cli
```

或從本地 clone 安裝：

```bash
git clone https://github.com/bensonbs/teams-reply-cli.git
npm install -g ./teams-reply-cli
```

### 3. 設定環境變數

```bash
export TEAMS_WEBHOOK_URL='https://your-webhook-url-here'
```

## 使用方式

```bash
teams-reply "你好，這是一則來自 CLI 的訊息"
```

### 搭配 Claude Code 使用

在 Claude Code 的 `settings.json` 中加入環境變數：

```json
{
  "env": {
    "TEAMS_WEBHOOK_URL": "https://your-webhook-url-here"
  }
}
```

之後 Claude 就能透過以下指令回覆 Teams 訊息：

```bash
teams-reply "回覆內容"
```

## 系統需求

- Node.js >= 18（使用內建 `fetch`）
- Microsoft Teams 的 Power Automate Webhook URL

## 授權

MIT
