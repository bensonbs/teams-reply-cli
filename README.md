# teams-reply-cli

Send messages to Microsoft Teams chat via Power Automate webhook.

Designed as a CLI bridge for AI agents (e.g. Claude Code) that can read Teams messages but can't reply directly.

## Setup

### 1. Create the Power Automate webhook

In Microsoft Teams, add a **"Post to a channel when a webhook request is received"** workflow to your chat/channel. Copy the webhook URL.

### 2. Install

```bash
npm install -g teams-reply-cli
```

Or run directly with npx:

```bash
npx teams-reply-cli "Hello from CLI"
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
