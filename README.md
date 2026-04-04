# Kanpla Raycast Extension

See what's for lunch at your Kanpla canteen.

## Setup

The extension requires four preferences, configured on the first launch.

| Preference             | Where to find it           |
| ---------------------- | -------------------------- |
| **Email**              | Your Kanpla login email    |
| **Password**           | Your Kanpla login password |
| **Firebase API Key**   | See below                  |
| **Firebase Module ID** | See below                  |

### Finding the Firebase API Key and Module ID

These values aren't exposed in the Kanpla UI, so you'll need to grab them from network traffic:

1. Open [app.kanpla.dk](https://app.kanpla.dk/app) in your browser
2. Open DevTools → **Network** tab
3. Filter requests by `frontend`
4. Find the request to the `/frontend` endpoint
5. From the **request headers**, copy:
    - **x-goog-api-key** — looks like `AIzaSyB...`
6. From the **response body**, search for:
    - **moduleId** — the ID of the menu module for your canteen

## Usage

- **Today's menu** - just run the command
- **Specific date** - pass a date e.g. `2026-04-07`
