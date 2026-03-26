#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Load .env if TEAMS_WEBHOOK_URL is not already set
// Search order: cwd → ~/.teams-reply-cli/.env
if (!process.env.TEAMS_WEBHOOK_URL) {
  const candidates = [
    resolve(process.cwd(), ".env"),
    resolve(process.env.HOME || "", ".teams-reply-cli", ".env"),
  ];
  for (const envPath of candidates) {
    try {
      const lines = readFileSync(envPath, "utf8").split("\n");
      for (const line of lines) {
        const match = line.match(/^\s*([\w]+)\s*=\s*(.*)\s*$/);
        if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
      }
      if (process.env.TEAMS_WEBHOOK_URL) break;
    } catch {}
  }
}

const WEBHOOK_URL = process.env.TEAMS_WEBHOOK_URL;

if (!WEBHOOK_URL) {
  console.error("Error: TEAMS_WEBHOOK_URL environment variable is not set.");
  console.error("");
  console.error("  export TEAMS_WEBHOOK_URL='https://...'");
  process.exit(1);
}

const text = process.argv.slice(2).join(" ");

if (!text) {
  console.error("Usage: teams-reply <message>");
  process.exit(1);
}

const payload = {
  type: "message",
  attachments: [
    {
      contentType: "application/vnd.microsoft.card.adaptive",
      contentUrl: null,
      content: {
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
        type: "AdaptiveCard",
        version: "1.4",
        body: [
          {
            type: "TextBlock",
            text,
            wrap: true,
          },
        ],
      },
    },
  ],
};

const res = await fetch(WEBHOOK_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

if (res.ok) {
  console.log(`OK (${res.status})`);
} else {
  const body = await res.text().catch(() => "");
  console.error(`Failed (${res.status}): ${body}`);
  process.exit(1);
}
