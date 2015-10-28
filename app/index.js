import express      from 'express';
import bodyParser   from 'body-parser';
import path         from 'path';
import utils        from './utils';
import routes       from './routes';

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(utils.session);
app.use(utils.stylus);
app.use(utils.staticFiles);

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(routes);

app.listen(process.env.PORT || 3000);

export default app;
