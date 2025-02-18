const { request: httpRequest } = require("http");
const { request: httpsRequest } = require("https");
const { URL } = require("url");

/**
 * Makes an HTTP request through the HTTPS proxy.
 * @param {string | object} url - The HTTP URL (or a config object similar to axios).
 * @param {object} [config] - Optional request config (method, headers, data, etc.).
 * @returns {Promise<object>} - Resolves with the response data.
 */
async function request(url, config = {}) {
  let requestUrl, options;

  if (typeof url === "object") {
    requestUrl = url.url;
    options = url;
  } else {
    requestUrl = url;
    options = config;
  }

  if (!requestUrl.startsWith("http://")) {
    throw new Error("Only HTTP URLs are allowed");
  }

  const proxyUrl = `https://http-to-https.vercel.app/proxy?url=${encodeURIComponent(
    requestUrl
  )}`;

  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(proxyUrl);
    const reqOptions = {
      method: options.method || "GET",
      headers: options.headers || {},
    };

    const req = httpsRequest(parsedUrl, reqOptions, (res) => {
      let data = [];

      res.on("data", (chunk) => data.push(chunk));
      res.on("end", () => {
        const responseBody = Buffer.concat(data).toString();
        try {
          resolve(JSON.parse(responseBody)); // Try parsing as JSON
        } catch {
          resolve(responseBody); // Return as plain text if not JSON
        }
      });
    });

    req.on("error", (err) =>
      reject(new Error(`Proxy request failed: ${err.message}`))
    );

    if (options.data) {
      req.write(
        typeof options.data === "string"
          ? options.data
          : JSON.stringify(options.data)
      );
    }

    req.end();
  });
}

/**
 * Axios-style shorthand methods.
 */
const callapi = {
  request,
  get: (url, config) => request(url, { ...config, method: "GET" }),
  post: (url, data, config) =>
    request(url, { ...config, method: "POST", data }),
  put: (url, data, config) => request(url, { ...config, method: "PUT", data }),
  delete: (url, config) => request(url, { ...config, method: "DELETE" }),
};

module.exports = callapi;
