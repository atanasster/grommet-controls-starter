# webpack < 4, no native tree-shaking
If you are using webpack version < 4, or any other environment that does not support enhanced tree-shaking, we recommend using the 

1. Install the plugin

  `npm install babel-plugin-transform-imports --save-dev`

2. configure your .babelrc file: 

```
...
  "plugins": [
    ["transform-object-rest-spread"],
    ["transform-imports", {
      "grommet-controls": {
        "transform": "grommet-controls/es6/components/${member}",
        "preventFullImport": false,
        "skipDefaultConversion": true
      },
      "grommet-controls/chartjs": {
        "transform": "grommet-controls/es6/chartjs/${member}",
        "preventFullImport": false,
        "skipDefaultConversion": true
      },
      "grommet-controls/themes": {
        "transform": "grommet-controls/es6/themes/${member}",
        "preventFullImport": false
      },
      "grommet-icons/contexts": {
        "transform": "grommet-icons/es6/contexts/${member}",
        "preventFullImport": true,
        "skipDefaultConversion": true
      },
      "grommet-icons": {
         "transform": "grommet-icons/es6/icons/${member}",
         "preventFullImport": false,
         "skipDefaultConversion": true
      }
    }]
  ]
...
```
