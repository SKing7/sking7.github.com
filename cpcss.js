var fs = require('fs');
var articleList = fs.readdirSync('css2/');
console.log(articleList);
var tmp = articleList.pop();
write(tmp);
function write(tmp) {
    console.log(tmp);
    fs.readFile('css2/' + tmp, function (err, data) { 
        console.log('write ready ');
        fs.appendFile('css/article.css', data, 'utf-8', function (err, data) { 
            console.log('write ready ');
            tmp = articleList.pop();
            if (tmp) write(tmp); 
        }); 
    }); 
}
