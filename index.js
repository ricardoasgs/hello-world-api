const app = require('./config/app_config');
const db = require('./config/db_config');
const hello = require('./routes/helloWorldRouter');

app.use('/hello', hello);

app.get('/', function(req, res){
    res.send('API Online');
  });
