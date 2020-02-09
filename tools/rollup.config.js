import path from 'path'
import fs from 'fs'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import json from '@rollup/plugin-json'

import * as react from 'react'
import * as reactDom from 'react-dom'
import * as reactIs from 'react-is'
import * as propTypes from 'prop-types'
import * as glamor from 'glamor'

const input = './src/index.js'

const pkg = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf-8'))
const external = Object.keys(pkg.dependencies || {})

const plugins = [
  resolve(),
  babel({ runtimeHelpers: true }),
  uglify(),
  commonjs({
    namedExports: {
      react: Object.keys(react),
      'react-dom': Object.keys(reactDom),
      'react-is': Object.keys(reactIs),
      'prop-types': Object.keys(propTypes),
      glamor: Object.keys(glamor)
    }
  }),
  json()
]

module.exports = [
  {
    input,
    output: [
      {
        dir: path.join(__dirname, 'dist', 'commonjs'),
        format: 'cjs',
        entryFileNames: '[name]'
      },
      {
        dir: path.join(__dirname, 'dist', 'esm'),
        format: 'esm',
        entryFileNames: '[name]'
      }
    ],
    extensions: ['.js'],
    preserveModules: true,
    plugins,
    external
  }
]
