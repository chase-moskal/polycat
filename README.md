
# polycat — *handy polyfills, concatenated together*

polycat is a javascript bundle that can teach old dogs new tricks

### slap polycat onto any page

```html
<script src="https://raw.githubusercontent.com/chase-moskal/polycat/master/polycat.js"></script>
```

### install polycat properly with npm

1. `npm install polycat`
2. `<script src="node_modules/polycat/polycat.js"></script>`

### polycat includes these polyfills

- array.find
- es6-promise
- whatwg-fetch

### but you should make your own honest bundle

polycat probably has stuff you don't need, or doesn't have things you do need — check out the [build script](./build.js), and consider doing something similar in your own project's build routine — construct your own custom polyfill bundle

polycat is more like an example collection of polyfills known to work the good old fashioned global way (unlike "ponyfills" as they are called)
