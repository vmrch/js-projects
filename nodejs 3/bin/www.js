var debug = require('debug')('retailer');
var app = require('../app');

app.set('port',process.env.PORT ||2000);
var server = app.listen(app.get('port'),function(){
	debug('Express server listening on port' + server.address().port);
});