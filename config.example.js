// ★ Authrim Configuration File
// Copy this file to config.js and set your values

window.AUTHRIM_CONFIG = {
  // Authrim tenant URL
  // e.g., 'https://your-tenant.authrim.com'
  issuer: 'https://your-tenant.authrim.com',

  // Client ID (get from Authrim dashboard)
  // e.g., 'abc123xyz456'
  clientId: 'your-client-id',

  // Diagnostic logger options (optional)
  diagnostic: {
    enabled: false,              // Enable diagnostic logging
    collectLogs: true,           // Collect logs in memory
    maxLogs: 1000,               // Maximum logs to collect
    sendToServer: false,         // Send logs to server (optional)
    // serverUrl: 'https://your-tenant.authrim.com',
  },

  // OAuth scopes (optional) - string (space-separated) or array
  // scopes: 'openid profile email',
  // scopes: ['openid', 'profile', 'email'],
};
