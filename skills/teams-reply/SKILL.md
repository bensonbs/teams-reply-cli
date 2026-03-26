---
name: teams-reply
description: Reply to Microsoft Teams chat messages via Power Automate webhook. Use when the user asks to reply, respond, or send a message to Teams.
allowed-tools: Bash
---

Send a message to Microsoft Teams using the `teams-reply` CLI.

## Usage

Run via Bash:

```bash
teams-reply "YOUR_MESSAGE_HERE"
```

## Rules

- The `TEAMS_WEBHOOK_URL` environment variable must be set.
- Always confirm the message content with the user before sending, unless the user has explicitly provided the message.
- Keep messages concise and professional.
- If the message contains markdown, it will be rendered as plain text in Teams.
- If the command fails, report the error to the user.

## Examples

User: "reply to Teams saying I'll join the meeting in 5 minutes"

```bash
teams-reply "我 5 分鐘後加入會議"
```

User: "tell the team the deployment is done"

```bash
teams-reply "部署已完成"
```
