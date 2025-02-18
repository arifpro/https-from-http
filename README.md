
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
| `.patch(url, data, config?)` | Perform a PATCH request           |
| `.delete(url, config?)` | Perform a DELETE request           |
| `.request(config)`  | Fully customizable request like axios |
