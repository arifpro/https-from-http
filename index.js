const axios = require("axios");

/**
 * Calls the deployed HTTP-to-HTTPS proxy and forwards the request.
 * @param {string} url - The HTTP URL to forward (e.g., "http://example.com").
 * @param {object} [options] - Optional axios request config (method, headers, data, etc.).
 * @returns {Promise<object>} - Resolves with the response data.
 */
async function proxyRequest(url, options = {}) {
  // if (!url.startsWith("http://")) {
  //   throw new Error("Only HTTP URLs are allowed");
  // }

  const proxyUrl = `https://http-to-https.vercel.app/proxy?url=${encodeURIComponent(url)}`;

  try {
    const response = await axios({
      url: proxyUrl,
      method: options.method || "GET",
      headers: options.headers || {},
      data: options.data || null,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Proxy request failed: ${error.message}`);
  }
}

module.exports = proxyRequest;
