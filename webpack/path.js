const path = require('path')
const resolve = path.resolve
const join = path.join
const root = resolve(__dirname, '..')
const dist = join(root, 'dist')
const src = join(root, 'src')

module.exports = {
	resolve,
	join,
	root,
	dist,
	src
}