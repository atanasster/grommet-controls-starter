# gatsby

for gatsby projects, you will need to set up styled-components for server-side rendering

# setup

`$ npm install --save gatsby-plugin-styled-components babel-plugin-styled-components`

`gatsby-config.js`

```
module.exports = {
  plugins: [`gatsby-plugin-styled-components`],
}

```
# tree shaking
gatsby >2.0 comes bundled with webpack 4. The webpack 4 release expands on its tree-shaking capabilities with a way to provide hints to the compiler via the "sideEffects" package.json property to denote which files in your project are "pure" and therefore safe to prune if unused. Here is the guide on webpack 4 tree shaking.

All of grommet, grommet-icons and grommet-controls do have "sideEffects" turned off in their respective package.json configuration files, and thus ready for webpack 4 tree-shaking.

**IMPORTANT**: the **grommet/grommet-controls/grommet-icons** libraries are installed in two separate folders:
1. "module": "es6/index.js" - is the es6 version of the libraries
2. "main": "index.js" - is the Commonjs version of the libraries
  
By default, your react projects will use the es6 folders whenever you import something from 'grommet':

Lets use an example importing the *grommet* theme:

1. if you have:
`import { grommet } from 'grommet';` 

    will translate into the following import: 

    `import { grommet } from 'grommet/es6/index.js';`

    which will import the theme from the 
    `grommet/es6/themes/grommet.js` file

2. if instead you have the following import 

    `import { grommet } from 'grommet/themes';`

    the *grommet* theme and all its dependecies will be imported from the `grommet/themes/grommet.js` file and the theme and all dependecies being potentially duplicated in your bundle. This will increase your bundle sizes, but also can result in some difficult to track issues with duplicated context providers. 

