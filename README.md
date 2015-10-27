# Simple application 

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