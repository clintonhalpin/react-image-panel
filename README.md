# react-component-boilerplate 
A nice setup for creating react components that can be consumed as NPM modules. [example](http://clintonhalpin.github.io/react-component-boilerplate/example/)

### creating a component
```shell
git clone git@github.com:clintonhalpin/react-component-boilerplate.git YOUR_COMPONENT_NAME

# Update the following exports and folder/file names with your component name eg. MyComponent -> Slider
package.json, src/MyComponent, src/MyComponent/index.js, example/index.js, README.md

# Now work on your component
# When complete run
npm run build
npm publish
```

Users will be able to consume your component by running `npm install YOUR_COMPONENT_NAME --save` and importing it! 

### development
Run's webpack and starts a tiny express server for testing

```shell
npm i 
npm run start
```

### hosting an example ( gh-pages )
By default components come with an examples page it order to publish that
```
npm run build
git add . -A
git commit -m "Your message"
git push origin gh-pages
```

If you have an specific documentation in your component you can add that in `docs/README.md`

### testing

```shell
npm run test
```

### build-scripts

| Script  | Action |
| ------------- | ------------- |
| `start`  | Run Dev Server  |
| `build`  | compile `example` and build common:js  |
| `build:commonjs`  | build common:js to lib  |
| `test`  | run unit tests |
| `test:watch`  | run unit tests with watch |

### examples
[tbd]

=

built by [@clintonhalpin](http://twitter.com/clintonhalpin)
