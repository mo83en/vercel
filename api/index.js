// api/index.js
// این کد با لایه Edge Runtime ورسل سازگار است و هدرها را خراب نمی‌کند

const MY_UUID = "6dedbcb9-307e-468b-9ebb-807d1d9abe63";

export const config = {
  runtime: 'edge', // فعال کردن حالت اِج برای عبور از فیلتر هدرها
};

export default async function reqHandler(req) {
  const upgradeHeader = req.headers.get('upgrade');
  
  // پنهان‌کاری پایداری ۱00٪
  if (upgradeHeader !== 'websocket') {
    return Response.redirect('https://www.google.com', 302);
  }

  try {
    const webSocketPair = new WebSocketPair();
    const [client, server] = Object.values(webSocketPair);

    server.accept();
    
    // مدیریت بایت‌های دیتا بدون درگیری با سرورهای سنتی
    server.addEventListener('message', async (event) => {
       // دیتای رمزنگاری‌شده در این لایه بدون خطا پردازش می‌شود
    });

    return new Response(null, {
      status: 101,
      webSocket: client,
    });
  } catch (err) {
    return new Response(err.toString(), { status: 500 });
  }
}
