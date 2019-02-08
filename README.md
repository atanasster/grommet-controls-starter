# Sample grommet/grommet-controls app

This repo contains a sample grommet/grommet-controls app 

![sample app](./images/sample-app.jpg?raw=true "Sample app")
1. start: `$ npm run start`
2. build: `$npm run build`
3. analyze `$ npm run build & npm run anayze`

# About tree shaking
We often use named imports to import a few functions from javascript files that have many other exports (for example an index.js file for a library that has many components).
 Most of the time we do not use all of the exported functions, but webpack would include the whole module anyway.

Tree shaking is called the process of removing the unusued code from your bundles.

Webpack 2 had some support for basic tree shaking, where it would recognize if a named import is not used in the current file. However this is now covered anyway by your linting tools anyway.


# Webpack 4 with CRA
The Webpack 4 release expands on its tree-shaking capabilities
[sample project...](./webpack-4)

# transform-imports
