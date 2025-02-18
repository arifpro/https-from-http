const callapi = require("./index"); // Import your package

async function runTests() {
  console.log("\n🔹 Running Tests...\n");

  try {
    // ✅ Test GET request
    console.log("🔹 Testing GET request...");
    const getResponse = await callapi.get("http://example.com");
    console.log("✅ GET Response:", getResponse);

    // ✅ Test POST request with JSON body
    console.log("\n🔹 Testing POST request...");
    const postResponse = await callapi.post("http://example.com/api", {
      key: "value",
    });
    console.log("✅ POST Response:", postResponse);

    // ✅ Test GET request with headers
    console.log("\n🔹 Testing GET request with headers...");
    const getWithHeaders = await callapi.get("http://example.com/api", {
      headers: { "User-Agent": "https-from-http Test" },
    });
    console.log("✅ GET Response with Headers:", getWithHeaders);

    // ✅ Test request() method with full config
    console.log("\n🔹 Testing request() method...");
    const customRequest = await callapi.request({
      url: "http://example.com/api",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: { update: "test" },
    });
    console.log("✅ Custom Request Response:", customRequest);

    console.log("\n🎉 All Tests Passed!\n");
  } catch (error) {
    console.error("❌ Test Failed:", error.message);
  }
}

runTests();
