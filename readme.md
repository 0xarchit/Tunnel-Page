# Cloudflare Tunnel Setup Guide

## Overview
This guide explains how to set up a Cloudflare Tunnel with a complete configuration file and the necessary tunnel commands.

## Prerequisites
- A Cloudflare account.
- cloudflared installed.
- A domain managed with Cloudflare.

## Configuration File
Create a configuration file (e.g., config.yaml) with the following structure. Adjust the values as needed:

```yaml
# filepath: c:/<some_path>/config.yaml
tunnel: your-tunnel-id        # Replace with your actual tunnel ID
credentials-file: /path/to/your/credentials.json  # Path to your credentials file

ingress:
  - hostname: example.your-domain.com   # The hostname to route traffic
    service: http://localhost:8080       # Local service running your app
  - service: http://localhost:8081       # Fallback or additional service
```

## Tunnel Commands
Follow these steps to manage and run your tunnel:

1. **Authenticate with Cloudflare:**
   ```bash
   cloudflared login
   ```
   This command opens a browser window to authenticate your Cloudflare account.

2. **Create and Route the Tunnel:**
   If setting up for the first time:
   ```bash
   cloudflared tunnel create my-tunnel
   cloudflared tunnel route dns my-tunnel example.your-domain.com
   ```
   Replace `my-tunnel` and `example.your-domain.com` with your tunnel name and domain.

3. **Run the Tunnel using the Configuration File:**
   ```bash
   cloudflared tunnel --config config.yaml run
   ```
   This command starts the tunnel using your specified config file.

4. **Standard Tunnel Run:**
   If the configuration file is named `config.yaml` and located in the current directory, you can simply run:
   ```bash
   cloudflared tunnel run
   ```

## Additional Resources
- Official Cloudflare Tunnel Documentation: [Cloudflare Docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/run-tunnel)
- Cloudflare Community Forums for troubleshooting tips.

## Summary
This guide covers:
- Setting up the configuration file.
- Running the tunnel with necessary Cloudflare commands.
- Helpful links for further customization and troubleshooting.
