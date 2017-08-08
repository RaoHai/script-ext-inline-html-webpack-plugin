Installation
------------
You must be running webpack (1.x or 2.x) )on node 4+.

Install the plugin with npm:

```shell
$ npm install --save-dev script-ext-inline-html-webpack-plugin
```

Basic Usage
-----------
Add the plugin to your webpack config as follows: 

```javascript

const ScriptExtInlineHtmlWebpackPlugin = require('script-ext-inline-html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin(),
  new ScriptExtInlineHtmlWebpackPlugin({
    append: `
      (function() {
        console.log('hello world');
      }());
    `
  })
]  
```

will append inline `<script>` tag with given content into generated body of html.

very simple and easy...


Preppend
-----


```javascript

const ScriptExtInlineHtmlWebpackPlugin = require('script-ext-inline-html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin(),
  new ScriptExtInlineHtmlWebpackPlugin({
    prepend: `
      (function() {
        console.log('hello world');
      }());
    `
  })
]  
```
