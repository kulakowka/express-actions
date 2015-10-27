import mongojs from 'mongojs'

var db = mongojs(process.env.MONGO_URL || 'mongodb://localhost/test');

export function loadCollection (req, res, next) {
  req.collection = db.collection(req.params.collection);
  next();
}

export function getItems (req, res, next) {
  req.collection.find((error, items) => {
    if (error) return resServerError(res);
    res.json(items);
  });
}

export function createItem (req, res, next) {
  req.collection.save(req.body, (error, item) => {
    if (error) return resServerError(res);
    res.json(item);
  });
}

export function getItem (req, res, next) {
  req.collection.findOne({_id: mongojs.ObjectId(req.params.id)}, (error, item) => {
    if (error) return resServerError(res);
    else if (!item) return resNotFound(res);
    res.json(item);
  });
}

export function updateItem (req, res, next) {
  req.collection.update({_id: mongojs.ObjectId(req.params.id)}, { $set: req.body}, (error, item) => {
    if (error) return resServerError(res);
    else if (!item) return resNotFound(res);
    res.json(item);
  });
}

export function deleteItem (req, res, next) {
  req.collection.remove({_id: mongojs.ObjectId(req.params.id)}, (error, item) => {
    if (error) return resServerError(res);
    res.json(item);
  });
}

export function allowCrossDomain (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

function resError(res) {
  res.status(500).json({error: 'Server Error'});
}

function resNotFound(res) {
  res.status(404).json({error: 'Not Found'});
}

