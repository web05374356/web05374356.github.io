// 載入 http 的模組
var http = require('http');

var server = http.createServer(function (req, res) {
    // req 是本地端請求的訊息
    // res 是主機回傳到本地端的訊息

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World\n');
    res.write('這是個簡單的HTTP Server\n');
    res.write('老旺仔真是个废物\n')
    var n = 10;
    var sum = 0;
    for (i = 0; i <= n; i++) {
        sum = sum + i;
    }
   res.write(sum+'');
    res.end();
});

// 監聽 12345 port
server.listen(12345);
console.log('Server running at http://120.125.63.154:12345/');