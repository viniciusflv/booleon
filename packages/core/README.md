<p align="center" style="color: #343a40">
  <img src="https://github.com/viniciusflv/booleon/raw/master/booleon.svg" viewBox="0 0 129.80448 115.59661" width="100%" height="144" />
  <h1 align="center">booleon/core</h1>
  <p align="center" style="font-size: 1.2rem;">Highly typed declarative CSS-in-JS</p>
  <hr />
</p>

`Booleon` core is a collection of functions with a goal to `manipulate` and `compile` CSS, based on `boolean props`.

![NPM version](https://badgen.net/npm/v/@booleon/core)
![NPM version](https://badgen.net/github/commits/viniciusflv/booleon)
![NPM version](https://badgen.net//packagephobia/publish/@booleon/core)
![NPM version](https://badgen.net/bundlephobia/min/@booleon/core)
![NPM version](https://badgen.net/bundlephobia/minzip/@booleon/core)

# Get Started

## Instalation

```sh
npm i @booleon/core
```

```sh
yarn add @booleon/core
```

# Functions

```ts
// https://github.com/kripod/style-vendorizer/blob/main/src/index.ts
function browserPrefixer('position:sticky;'): 'position:-webkit-sticky;position:sticky;'

function categorizeProps({
  prop: true,
  dark__prop: true,
}): [{ prop: true, }, { dark__prop: true, }]

function classCompiler('class', { css: 'css' }): '.class { css }'

function cssCompiler('flex', true, { flex: () => 'display:flex;' }): 'display:flex;'

function filterProps({ custom: true, id: 'id' }): [
  { custom: true },
  { id: 'id' },
]

function propsReducer({ flex: true }, { flex: () => 'display:flex;' }): { css: 'display:flex;' }

// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript#7616484
function stringHash('stringHash'): -1573444417

function styleAppender('className', () => 'css'): <style data-booleon="className">.className{css}</style>

function uniqueClass('flex', 'flex', 'grid', 'grid'): 'flex grid'
```