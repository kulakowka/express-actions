import express                        from 'express';
import {urlencoded, json}             from 'body-parser';
import {resolve}                      from 'path';
import {session, stylus, staticFiles} from './utils';
import routes                         from './routes';

var app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use(session);
app.use(stylus);
app.use(staticFiles);

app.set('views', resolve(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(routes);

app.listen(process.env.PORT || 3000);

export default app;
