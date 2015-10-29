import {static as serveStatic} from 'express'
import {resolve} from 'path'

export default serveStatic(resolve(__dirname, '../../', 'public'))
