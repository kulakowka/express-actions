# About express-actions 

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kulakowka/express-actions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

This is my approach to the structure of the node.js applications. No controllers, only actions!

#### Setup project:
```
git clone git@github.com:kulakowka/express-actions.git
cd express-actions
npm install
```

#### Start development server: 
```
npm start
```

Open [http://localhost:3000](http://localhost:3000/) in your browser.

#### Start production server: 
```
NODE_ENV=production MONGO_URL=mongodb://localhost/test PORT=8080 npm start
```

## Concept description

Any route may have one or more "Actions".

For example look at this: [app/routes/items/index.js](app/routes/items/index.js)

```javascript
// POST /items
router.post('/', checkAuth, addUser, createItem, redirectToItem)

// GET /items
router.get('/', findItems, renderItems)
```

In this example `checkAuth`, `addUser`, `createItem`, `redirectToItem`, `findItems`, `renderItems` is "Actions".

**Action** - is a simple function like this:

```javascript
function (req, res, next) {

}
```

**Main rule:** One action === one function. You should avoid writing functions that perform multiple actions.

For example, look at this: [app/actions/item/createItem.js](app/actions/item/createItem.js)

```javascript
import Item from '../../models/item'

export default (req, res, next) => {

  var item = new Item(req.body)

  item.save((error, item) => {
    if (error) return next(error)
    req.item = item
    next()
  })
}
```

"Action" may modify `req` or `res` object and passes control to the next action by calling `next()`. 

If action failed you must call `next(new Error('Reason'))`.

#### The advantages of this approach are obvious. 

Since "Action" - it's a simple function (One action === one function), that allows:
- It is very easy to test
- It is very easy to transfer between different projects
- It is very easy to understand




