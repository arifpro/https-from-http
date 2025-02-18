# https-from-http

Easily convert **HTTP** requests to **HTTPS** using this lightweight proxy wrapper.

## 🚀 Features

✅ **Convert HTTP to HTTPS** automatically  
✅ **Simple API** - Just provide the HTTP URL  
✅ **Supports all HTTP methods** (`GET`, `POST`, `PUT`, etc.)  
✅ **Pass custom headers and request body**  

---

## 📦 Installation

```sh
npm install https-from-http
# or
yarn add https-from-http
# or
pnpm add https-from-http
```

---

## 🛠 Usage

### 🔹 **Basic Usage (GET Request)**

```javascript
const https = require("https-from-http");

async function fetchData() {
  try {
    const data = await https("http://devarif.me/api");
    console.log("Response:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchData();
```

---

### 🔹 **Using Other HTTP Methods (POST, PUT, DELETE, etc.)**

You can send **POST requests** with a JSON body like this:

```javascript
const https = require("https-from-http");

async function sendData() {
  try {
    const response = await https("http://devarif.me/v1/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { key: "value" }
    });

    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

sendData();
```

---

### 🔹 **Pass Custom Headers**

```javascript
const https = require("https-from-http");

async function fetchWithHeaders() {
  try {
    const response = await https("http://devarif.me/v1/api", {
      method: "GET",
      headers: { Authorization: "Bearer your_token_here" }
    });

    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchWithHeaders();
```

---

## 🔗 How It Works

This package sends your HTTP request to the [deployed proxy server](https://http-to-https.vercel.app/proxy), which then forwards the request over HTTPS.

| Input URL (HTTP)  | Output URL (HTTPS) |
|-------------------|------------------|
| `http://devarif.me/api` | `https://devarif.me/api` |

---

## ⚠️ Notes

- **Only HTTP URLs are allowed**. If you pass an HTTPS URL, the request will fail.
- Make sure the **destination server supports HTTPS**.
- The proxy does **not** modify request data—it simply forwards it over HTTPS.
