# Set up Rollup with Babel and Jest

## Rollup Configuration

Here is the entire rollup configuration. Notice that instead of using a
`.babelrc` file, we're specifying the configuration in the `babel` function
provided by `rollup-plugin-babel`. See below to follow it step-by-step.

```javascript
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: "build/index.cjs.js",
      format: "cjs"
    },
    {
      file: "build/index.es.js",
      format: "es"
    }
  ],
  plugins: [
    resolve(),
    babel({
      presets: [
        [
          "env",
          {
            modules: false
          }
        ]
      ],
      plugins: ["external-helpers"],
      babelrc: false
    })
  ]
};
```

### What You'll Need

Install rollup if you haven't done so already, and then make a file called
`rollup.config.js` in your root directory. See the
[official docs](https://rollupjs.org/) for more details.

```
npm install --global rollup
```

You'll need the following packages:

* [`rollup-plugin-node-resolve`](https://github.com/rollup/rollup-plugin-node-resolve)
  lets rollup use third-party modules in node_modules
* [`rollup-plugin-babel`](https://github.com/rollup/rollup-plugin-babel) lets
  rollup use babel to transpile your code
* [`babel-plugin-external-helpers`](https://github.com/babel/babel/tree/master/packages/babel-plugin-external-helpers)

```
npm i -D rollup-plugin-node-resolve rollup-plugin-babel babel-plugin-external-helpers
```

### Imports

Notice we're importing two plugins `rollup-plugin-node-resolve` and
`rollup-plugin-babel`. We'll make use of these in our export.

```javascript
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  // code goes here
};
```

### Inputs and Outputs

For the `input` field, specify the entry point of your project. It will most
likely be in `src/index.js`. This tells rollup where to start, so that it can
bundle all the dependencies starting from the entry point.

For the `output` field, I like having two fields, one for commonjs modules, and
another for es2015 modules. This means you'll pass in an array to `output`, with
the target of each file and the format they'll be in.

We'll have two builds:

* `build/index.cjs.js` exports commonjs modules
* `build/index.es.js` exports es2015 modules

```javascript
// in exports default {} of rollup.config.js
  input: "src/index.js",
  output: [
    {
      file: "build/index.cjs.js",
      format: "cjs"
    },
    {
      file: "build/index.es.js",
      format: "es"
    }
  ],
```

### Plugins

Plugins are the most difficult part of the configuration. In this example we're
only using two, but there are plenty of reasons to use other ones. These are
fairly common.

We'll call `resolve()` in our plugins, and we'll also call `babel()`. Notice
that we're passing a babel configuration directly into `babel()`.

For rollup, it's important that we set `{modules: false}`, as it tells babel not
to transpile es2015 modules. The workflow goes like this:

1. write code with new js features
2. transpile code with babel
3. keep es2015 modules
4. rollup bundles your dependencies
5. rollup converts es2015 modules to commonjs modules
6. Now you're done

Furthermore, we set `{babelrc: false}`, which means that babel won't look for a
`.babelrc` file at this step. It will just use what we have specified here.

```javascript
plugins: [
  resolve(),
  babel({
    presets: [
      [
        "env",
        {
          modules: false
        }
      ]
    ],
    plugins: ["external-helpers"],
    babelrc: false
  })
];
```

## Babel Configuration

> Not written yet

## Jest Configuration

> Not written yet
