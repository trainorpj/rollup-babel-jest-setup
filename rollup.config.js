import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "build/bundle.js",
    format: "cjs"
  },
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
