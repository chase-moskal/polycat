
const {rm, cat} = require("shelljs")

rm("-rf", "polycat.js")

cat(
	"node_modules/array.find/dist/array-find-polyfill.min.js",
	"node_modules/es6-promise/dist/es6-promise.auto.min.js",
	"node_modules/whatwg-fetch/fetch.js",
).exec(
	"node_modules/.bin/uglifyjs --compress --mangle --output polycat.js"
)
