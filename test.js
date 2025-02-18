const proxyRequest = require("./index");

async function test() {
  try {
    const data = await proxyRequest(
      "https://devarif.me/cv/MdArifHossain-Resume.pdf"
    );
    console.log("✅ Proxy Response:", data);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

test();
