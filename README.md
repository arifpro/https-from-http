
# **https-from-http**

🚀 **Convert HTTP requests to HTTPS automatically using a lightweight proxy.**  
Works like `axios` but without requiring `axios` locally!  

## **✨ Features**

✅ Convert **HTTP** requests to **HTTPS**  
✅ Works like **axios** (`get`, `post`, `put`, `delete`, etc.)  
✅ No need to install **axios**  
✅ Lightweight & zero dependencies  

---

## **📦 Installation**

```sh
npm install https-from-http
# OR
yarn add https-from-http
# OR
pnpm add https-from-http
```

---

## **🚀 Usage**

### **1️⃣ GET Request**

```javascript
const callapi = require("https-from-http");

async function fetchData() {
  try {
    const response = await callapi.get("http://example.com");
    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchData();
```

---

### **2️⃣ POST Request with JSON Body**

```javascript
const callapi = require("https-from-http");

async function sendData() {
  try {
    const response = await callapi.post("http://example.com/api", {
      key: "value",
    });
    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

sendData();
```

---

### **3️⃣ GET Request with Custom Headers**

```javascript
const callapi = require("https-from-http");

async function fetchWithHeaders() {
  try {
    const response = await callapi.get("http://example.com/api", {
      headers: { "User-Agent": "https-from-http" },
    });
    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchWithHeaders();
```

---

### **4️⃣ Using `request()` for Custom Requests**

```javascript
const callapi = require("https-from-http");

async function customRequest() {
  try {
    const response = await callapi.request({
      url: "http://example.com/api",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: { update: "test" },
    });
    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

customRequest();
```

---

## **🛠 Methods Available**

| Method        | Description                                      |
|--------------|------------------------------------------------|
| `.get(url, config?)`  | Perform a GET request                |
| `.post(url, data, config?)`  | Perform a POST request            |
| `.put(url, data, config?)`   | Perform a PUT request             |
| `.delete(url, config?)` | Perform a DELETE request           |
| `.request(config)`  | Fully customizable request like axios |

---

## **🛠 How it Works?**

1. You send an **HTTP request** (`http://example.com`).  
2. The request is forwarded to the proxy:  
   **`https://http-to-https.vercel.app/proxy?url=http://example.com`**  
3. The proxy converts it to **HTTPS (`https://example.com`)** and returns the response.  

No need for local `axios` or extra dependencies!

---

## **📜 License**

MIT License © 2024 **Your Name**

---

## **🚀 Ready to Publish?**

1. **Test your package**  

   ```sh
   node test.js
   ```

2. **Publish to NPM**  

   ```sh
   npm publish --access public
   ```

---

This **README** makes your package **easy to use and understand**. 🚀  
Let me know if you need modifications before publishing! 🚀
