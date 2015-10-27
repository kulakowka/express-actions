import express from 'express'
import bodyParser from 'body-parser'
import router from './router'

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(process.env.PORT || 3000);

export default app;