const { WebSocketServer } = require('ws');

// UUID اختصاصی شما
const MY_UUID = "6dedbcb9-307e-468b-9ebb-807d1d9abe63";

module.exports = async (req, res) => {
  // ۱. پنهان‌کاری: اگر مانیتورینگ ورسل یا شخص عادی وارد شود، به گوگل منتقل می‌شود
  if (req.headers.upgrade !== 'websocket') {
    res.writeHead(302, { Location: 'https://www.google.com' });
    res.end();
    return;
  }

  // ۲. آماده‌سازی برای اتصال وب‌سوکت
  res.status(200).send("WebSocket Server Running");
};
