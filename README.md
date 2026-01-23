# Authrim Web SDK Example

A Vanilla JavaScript sample application using the `@authrim/web` SDK. Loads the SDK via CDN, no build step required.

## Demo Features

- **Passkey Authentication**: Login and signup with biometrics or security keys
- **Email Code Authentication**: Login with one-time code sent to email
- **Social Login**: Login with Google, GitHub, or Apple
- **Session Management**: Check login status, view profile, logout

## Quick Start

### 1. Edit Configuration

Open `config.js` and set the values from your Authrim dashboard.

```javascript
window.AUTHRIM_CONFIG = {
  issuer: 'https://your-tenant.authrim.com',
  clientId: 'your-client-id',
};
```

### 2. Run Locally

```bash
# Using npx serve
npx serve .

# Or use VSCode Live Server extension
```

### 3. Open in Browser

Navigate to `http://localhost:3000` (or your Live Server URL).

## Deploy to Cloudflare Pages

### Method 1: Git Integration

1. Fork this repository to your GitHub account
2. Edit `config.js` with your issuer and clientId
3. Commit and push changes
4. Log in to [Cloudflare Pages](https://pages.cloudflare.com/)
5. Click "Create a project" → "Connect to Git"
6. Select your forked repository
7. Build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `/` or `.`
8. Click "Save and Deploy"

### Method 2: Direct Upload

1. Download this repository
2. Edit `config.js`
3. Log in to [Cloudflare Pages](https://pages.cloudflare.com/)
4. Click "Create a project" → "Direct Upload"
5. Enter a project name
6. Drag and drop the entire folder
7. Click "Deploy site"

## File Structure

```
example-web/
├── README.md          # This file
├── config.js          # ★ Configuration file (must edit)
├── index.html         # Home page
├── login.html         # Login page
├── callback.html      # OAuth callback handler
├── profile.html       # Profile page
└── css/
    └── style.css      # Stylesheet
```

## Page Descriptions

### index.html (Home)

- Checks login status
- When logged out: Shows link to login page
- When logged in: Shows user info and link to profile

### login.html (Login)

- Passkey login/signup
- Email code authentication (2-step: email input → code input)
- Social login (Google, GitHub, Apple)

### callback.html (Callback)

- Handles social login callback
- Redirects to home on success
- Shows error message on failure

### profile.html (Profile)

- Requires authentication (redirects if not logged in)
- Displays detailed user information
- Shows session information
- Logout functionality

## Authrim Configuration

In your Authrim Admin panel, configure the following:

- **Client ID**: Set in `config.js` as `clientId`
- **Allowed Redirect URIs**: Add your deployment URL
  - e.g., `https://your-app.pages.dev/callback.html`
- **Allowed Origins**: Add your deployment origin
  - e.g., `https://your-app.pages.dev`

## Technical Specifications

- **SDK**: [@authrim/web](https://www.npmjs.com/package/@authrim/web)
- **CDN**: unpkg (`https://unpkg.com/@authrim/web@latest/dist/authrim-web.umd.global.js`)
- **Supported Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **No Framework Required**: Vanilla JavaScript only

## Troubleshooting

### "Please configure issuer and clientId in config.js" message appears

Edit `config.js` and set your actual Authrim tenant URL and client ID.

### Passkey not working

- Verify your browser supports WebAuthn
- Ensure you're running on HTTPS (localhost is allowed as exception)

### Social login not working

- Verify social providers are enabled in your Authrim configuration
- Check that redirect URIs are correctly configured

### Callback errors

- Ensure `callback.html` URL is included in the allowed redirect URIs

## License

Apache 2.0
