# Sample grommet/grommet-controls app

This repo contains a sample grommet/grommet-controls app 

![sample app](https://github.com/atanasster/grommet-controls-starter/blob/master/images/sample-app.jpg?raw=true "Sample app")

1. start: `$ npm run start`

2. build: `$npm run build`

3. analyze `$ npm run analyze`


# About tree shaking
We often use named imports to import a few functions from javascript files that have many other exports (for example an index.js file for a library that has many components).
 Most of the time we do not use all of the exported functions, but webpack would include the whole module anyway.

Here is an example of importing two components from 'grommet':

```
import { Grommet, Box } from 'grommet/components/Grommet';
```

Tree shaking is called the process of removing the unusued code from your bundles.

Webpack 2 had some support for basic tree shaking, where it would recognize if a named import is not used in the current file. However this is now covered by your linting tools anyway.

The commonly recommended way was(and usually still is) to import each component from their respective folder instead of a generic `index.js` file. For example
 
```
import { Grommet } from 'grommet/components/Grommet';
import { Box } from 'grommet/components/Box';
```

But this will lead to long and confusing import sections in your files. 
So what are the new and better ways to reduce the size of your bundles and still keep your imports simple and more manageable


# webpack 4 with CRA
The Webpack 4 release expands on its tree-shaking capabilities

[sample project...](/webpack-4)

# next.js
next.js version 7 comes with webpack 4 and can use tree-shaking if correctly configured

[sample project...](/nextjs)

# gatsby
gatsby version 2 comes with webpack 4 and can use tree-shaking out of the box

[sample project...](/gatsby)

# webpack < 4 with no tree shaking
with webpack < 4, you can use some babel plugins, in our example `babel-plugin-transform-imports`
 
[sample project...](/babel-transform-imports)
