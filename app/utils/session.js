import session      from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose     from '../db';

var MongoStore  = connectMongo(session);
var store       = new MongoStore({ mongooseConnection: mongoose.connection });


export default session({
  saveUninitialized: false,
  resave: false,
  store: store,
  secret: 'secret key string',
});
