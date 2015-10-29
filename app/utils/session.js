import session      from 'express-session';
import connectMongo from 'connect-mongo';
import {connection} from '../db';

var MongoStore  = connectMongo(session);
var store       = new MongoStore({ mongooseConnection: connection });

export default session({
  saveUninitialized: false,
  resave: false,
  store: store,
  secret: 'secret key string',
});
