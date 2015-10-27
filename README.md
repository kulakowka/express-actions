
Run development server: `npm start`

Run production server: `NODE_ENV=production MONGO_URL=mongodb://localhost/test PORT=8080 npm start`

Получить список записей:
`GET /:collection`

Создать новую запись:
`POST /:collection`

Получить одну запись:
`GET /:collection/:id`

Изменить одну запись:
`PUT /:collection/:id`

Удалить одну запись:
`DELETE /:collection/:id`