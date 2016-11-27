// 載入 http 的模組
var http = require('http');
var fs = require('fs');

console.log(__dirname);

var filename = __dirname + '\\index.html';
console.log(filename);

// 讀取檔案
fs.readFile(filename, 'utf8', function (err, content) {
    if (err) {
        console.log('Failed to read');
        return;
    }
    var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    //res.write('Hello Kobe\n');
    //res.write('Kobe Bryant\n');
    res.write(content);
    /*var i = 0;
    var sum = 0;
    for (i; i < 10; i++) {
        res.write('kobe is so cool\n');
        sum = sum + i;
    }
    res.write(sum + '');*/
    res.end();

});
    server.listen(12345);
    // 將檔案內容印出
   // console.log(content);
});

// 監聽 12345 port

console.log('Server running at http://10.10.70.102:12345/');