# Simple application 

- Expressjs
- Babeljs
- Mongojs

Run development server: `npm start`

Run production server: `NODE_ENV=production MONGO_URL=mongodb://localhost/test PORT=8080 npm start`

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