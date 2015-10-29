import stylus from 'stylus'
import nib from 'nib'
import path from 'path'

function compile (str, path) {
  return stylus(str)
   .set('filename', path)
   .set('compress', true)
   .use(nib())
   .import('nib')
}

export default stylus.middleware({
  src: path.resolve(__dirname, '..', 'assets'),
  dest: path.resolve(__dirname, '../../', 'public'),
  compile: compile
})
