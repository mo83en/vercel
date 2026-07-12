// api/index.js
const MY_UUID = "6dedbcb9-307e-468b-9ebb-807d1d9abe63";

module.exports = async (req, res) => {
  // اگر درخواست وب‌سوکت نبود، ریدایرکت کن به گوگل
  if (req.headers.upgrade !== 'websocket') {
    res.writeHead(302, { Location: 'https://www.google.com' });
    res.end();
    return;
  }

  // اجازه دادن به برقراری ارتباط متصل در پلتفرم سرورلس
  res.setHeader('Connection', 'upgrade');
  res.setHeader('Upgrade', 'websocket');
  res.status(101).end();
};
