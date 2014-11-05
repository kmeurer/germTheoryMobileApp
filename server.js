var express = require('express');
	app = express();

app.use(express.static('./www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server now listening on port ' + port);