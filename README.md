# insomnia-plugin-ticket-tester-auth

made request to ticket-service with tester authorization header

## environment variable

add these fields into your environment config to enable the plugin

```json
"TICKET_SERVICE_TESTER": {
  "enabledTesterId": null,
  "testers": [{
    "id": "920303",
    "accountId": "920303"
  }
  ]
}
```

## Custom build

This package has **not published** to npm, please build your own in OS corresponding folder

- MacOS: `~/Library/Application\ Support/Insomnia/plugins/`
- Windows: `%APPDATA%\Insomnia\plugins\`
- Linux: `$XDG_CONFIG_HOME/Insomnia/plugins/` or `~/.config/Insomnia/plugins/`

### How to build

1. `yarn`
