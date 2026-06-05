# OAuth2 Mock Login Demo

This is a simple project that shows how OAuth2 login works using a mock OAuth2 server.

The user clicks login, gets redirected to an authorization page, receives a code, and the backend exchanges it for a token and user info.

---

## Tech used

* Node.js
* oauth2-mock-server
* Express
* Axios
* HTML, CSS, JavaScript

---

## How to run

### 1. Start OAuth server

```bash 
node server/auth-server-mock.js
```

Runs on: `http://localhost:8080`

---

### 2. Start app server

```bash
node server/callback-server.js
```

Runs on: `http://localhost:3000`

---

### 3. Open in browser

Go to: `http://localhost:3000` and click **Login**

---

## Files

### `/server/auth-server-mock.js`

Runs a local OAuth2 mock server that simulates login, token, and user info endpoints.

### `/server/callback-server.js`

Handles the OAuth flow on the backend by exchanging the code for a token and fetching user info.

### `/public/index.html`

Simple page with a login button.

### `/public/app.js`

Redirects the user to the OAuth server when login is clicked.

### `/public/callback.html`

Shows the authorization code and displays the token + user info.

### `/public/global.css`

A very minimal styling for the pages.

---

## GitHub

🔗 https://github.com/saraAbdulla23/oauth2-mock.git

```bash
git clone https://github.com/saraAbdulla23/oauth2-mock.git
cd oauth2-mock
npm install
node server/auth-server-mock.js
node server/callback-server.js
```