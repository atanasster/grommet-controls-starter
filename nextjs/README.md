# nextjs

for nextjs projects, you will need to set up styled-components for server-side rendering and es6 modules for the grommet libraries

# setup styled-components

`$ npm install babel-plugin-styled-components`

configure babel:
 
`.babelrc`
```
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}

```

# setup es6 modules

`$ npm install next-plugin-transpile-modules`

configure webpack:

`next.config.js`

```
const withTM = require('next-plugin-transpile-modules');
...
const initExport = {
  ...
  transpileModules: ['grommet-controls', 'grommet', 'grommet-icons']
};

module.exports = withTM(initExport);
```
# tree shaking

next.js >7 comes bundled with webpack 4. 

- enable es6 modules

the **grommet/grommet-controls/grommet-icons** libraries are installed in two separate folders:
1. "module": "es6/index.js" - is the es6 version of the libraries
2. "main": "index.js" - is the Commonjs version of the libraries

in order to use the es6 versions of grommet/grommet-controls, you will need to install a nextjs transpilation plugin: 

`$npm install next-plugin-transpile-modules`


and the then modify your configuration in `next.config.js`

```
const withTM = require('next-plugin-transpile-modules');
...

const initExport = {
  ...

  transpileModules: ['grommet-controls', 'grommet', 'grommet-icons']
};

module.exports = withTM(initExport);
```
