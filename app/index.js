import express from 'express'
import {urlencoded, json} from 'body-parser'
import {resolve} from 'path'
import {session, stylus, staticFiles} from './utils'
import flash from 'flash'
import routes from './routes'
import passport from 'passport'

var app = express()

app.use(urlencoded({ extended: false }))
app.use(json())
app.use(session)
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(stylus)
app.use(staticFiles)
app.set('views', resolve(__dirname, '..', 'views'))
app.set('view engine', 'jade')
app.use(routes)

app.listen(process.env.PORT || 3000)

export default app
