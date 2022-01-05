import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy'

export default {
  input      : "development/lit-portable.js",
  output       : {
    dir: "dist",
    format: "es"

  },
  plugins    : [
    nodeResolve({
      jsnext: true,
      main: false
    }),
    terser(),
    //Already generated; no need to get fancy here.
    copy({
      targets: [
        { src: ['development/lit-portable.d.ts', 'development/lit-portable.d.ts.map', 'development/lit-portable.js.map','/LICENCE'], dest: 'dist' }
      ]
    })
  ]
};