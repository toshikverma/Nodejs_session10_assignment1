var http = require('http');
function palindrom(n) {
    n = n + "";
    var len = n.length;
    var loopIt = parseInt(len / 2);

    for (var i = 0; i < loopIt; i++) {
        if (!(n.charAt(i) === n.charAt(len - i - 1))) {

            return false;
        }
    }
    return true;
}
var ispalin = palindrom(125321);
http.createServer(function (req, res) {
    res.write("result is " + ispalin);  //displaying on browser
    res.end();
}).listen(1334);
console.log(ispalin); //displaying on console