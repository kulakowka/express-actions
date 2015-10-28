# Simple application 


## Actions

В папке `app/actions/` лежат так называемые "действия". 
Каждое действие что-то делает, при выборе название нужно ответить на вопрос "Что сделать?" => `createArticle` (создать статью)

Вот несколько примеров названий действий: `addUser`, `createArticle` и тд.
Это обычные функции, которые модифицируют объект `req` или `res` 
и отправляют запрос дальше с помощью вызова функции `next()`. 

```javascript
// app/actions/user/checkAuth.js
export default (req, res, next) => {
  if (!req.session.user) return next(new Error('Not authorised'));
  next();
};
```

На каждый маршрут применяется определенный набор действий.






#### Used packages:
- [Expressjs](http://expressjs.com)
- [Babeljs](https://babeljs.io)
- [Mongojs](http://mafintosh.github.io/mongojs/)

#### Setup project:
```
git clone git@github.com:kulakowka/express-api.git
cd express-api
npm install
```

#### Start development server: 
```
npm start
```

#### Start production server: 
```
NODE_ENV=production MONGO_URL=mongodb://localhost/test PORT=8080 npm start
```

### API methods:

Get list items:
`GET /:collection`

Create new item:
`POST /:collection`

Get one item:
`GET /:collection/:id`

Update one item:
`PUT /:collection/:id`

Delete one item:
`DELETE /:collection/:id`