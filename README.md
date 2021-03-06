# react-image-panel 
[![npm version](https://badge.fury.io/js/react-image-panel.svg)](https://badge.fury.io/js/react-image-panel)
[![Build Status](https://travis-ci.org/clintonhalpin/react-image-panel.svg?branch=gh-pages)](https://travis-ci.org/clintonhalpin/react-image-panel)

A small module for showing image + title + description in a panel [Demo](http://clintonhalpin.github.io/react-image-panel/example/)

![screen shot 2016-03-05 at 2 14 29 pm](https://cloud.githubusercontent.com/assets/523933/13549840/9e3462ec-e2dc-11e5-829d-505a75996c21.png)

### get started
```shell
npm i react-image-panel --save
```

Integrating component
```javascript
import { Panel } from 'react-image-panel'

// <Panel />
```

Adding css!
You can find all of the css for this module in `./node_modules/react-image-panel/src/panel.css`

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
