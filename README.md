# teams-reply-cli

[繁體中文](README.zh-TW.md)

Send messages to Microsoft Teams chat via Power Automate webhook.

Designed as a CLI bridge for AI agents (e.g. Claude Code) that can read Teams messages but can't reply directly.

## Setup

### 1. Create the Power Automate webhook

In Microsoft Teams, open the chat or channel where you want to receive messages, then:

1. Click **"+" (Manage apps)** or **"..."** → **"Workflows"**
2. Search for and select the **"Post to a channel when a webhook request is received"** template
   - For group chats, use **"Send a webhook alert to a chat"** (將 Webhook 警示傳送至聊天)
3. Follow the prompts to create the workflow
4. Copy the generated **webhook URL** (it will include a `sig` parameter for authentication)

### 2. Install

From GitHub:

```bash
npm install -g github:bensonbs/teams-reply-cli
```

Or from a local clone:

```bash
git clone https://github.com/bensonbs/teams-reply-cli.git
npm install -g ./teams-reply-cli
```

### 3. Set environment variable

```bash
export TEAMS_WEBHOOK_URL='https://your-webhook-url-here'
```

## Usage

```bash
teams-reply "Hello, this is a message from CLI"
```

### Use with Claude Code

Add to your `settings.json` to allow Claude to reply to Teams:

```json
{
  "env": {
    "TEAMS_WEBHOOK_URL": "https://your-webhook-url-here"
  }
}
```

Then Claude can send messages via:

```bash
teams-reply "Reply content here"
```

## Requirements

- Node.js >= 18 (uses built-in `fetch`)
- A Power Automate webhook URL from Microsoft Teams

## License

MIT
