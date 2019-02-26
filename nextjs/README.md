# nextjs

for nextjs projects, you will need to set up styled-components for server-side rendering and es6 modules for the grommet libraries

**important next.js >= 8.0.3 is required to use grommet version newer than 2.0.0**

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

# setup es6 modules for nextjs < 8

`$ npm install next-plugin-transpile-modules`

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


update your `pages/_document.js`


```
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }
}
```

[more info...](https://github.com/zeit/next.js/tree/canary/examples/with-styled-components)
# tree shaking

next.js >7 comes bundled with webpack 4. 

the **grommet/grommet-controls/grommet-icons** libraries are installed in two separate folders:

1. "module": "es6/index.js" - is the es6 version of the libraries

2. "main": "index.js" - is the Commonjs version of the libraries

in order to use the es6 versions of grommet/grommet-controls, you will need to install a nextjs transpilation plugin: 
