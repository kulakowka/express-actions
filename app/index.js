import express      from 'express';
import bodyParser   from 'body-parser';
import routes       from './routes';
import mongoose     from './db';
import path         from 'path';
import session      from 'express-session';
import connectMongo from 'connect-mongo';

var MongoStore  = connectMongo(session);
var store       = new MongoStore({ mongooseConnection: mongoose.connection });
var app         = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  saveUninitialized: false,
  resave: false,
  store: store,
  secret: 'secret key string',
}));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(routes);

app.listen(process.env.PORT || 3000);

export default app;
