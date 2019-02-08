#Webpack 4 and Tree shaking
The Webpack 4 release expands on its tree-shaking capabilities with a way to provide hints to the compiler via the "sideEffects" package.json property to denote which files in your project are "pure" and therefore safe to prune if unused.
 Here is the guide on [Webpack 4 tree shaking](https://webpack.js.org/guides/tree-shaking/).

All of grommet, grommet-icons and grommet-controls do have "sideEffects" turned off in their respective package.json configuration files, and thus ready for webpack 4 tree-shaking.

**IMPORTANT**: the **grommet/grommet-controls** libraries are installed in two separate folders:
1. "module": "es6/index.js" - is the es6 version of the libraries
2. "main": "index.js" - is the Commonjs version of the libraries
  
By default, your react projects will use the es6 folders whenever you import ie:

`import { Box } from 'grommet';` 

will translate into the following import: 

`import { Box } from 'grommet/es6/components/Box';`


so if you do the following import 

`import { grommet } from 'grommet/themes';`

the *grommet* theme and all its dependecies will be imported from the `commonjs` folders and will result in duplicated files bundled into your projects.

