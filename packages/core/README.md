<p align="center" style="color: #343a40">
  <img src="../../booleon.svg" width="100%" height="144">
  <h1 align="center">booleon/core</h1>
  <p align="center" style="font-size: 1.2rem;">Highly typed declarative CSS-in-JS</p>
  <hr />
</p>

Booleon is a `DX` focused `React library` for, a highly typed `declarative`, styling, using component `boolean` properties. Works by mapping a `pre-defined` entry of css with keys that can be static (`string`) or dynamic (`RegEx`).

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

# Usage

```jsx
export const View = booleon(['div', 'section'], [
  // static
  ['key', () => 'cssPropertie:cssValue;'],
  // dynamic
  [
    // new Regexp('regexKey_(regexGroupValue)')
    ['regexKey_', '(regexGroupValue)'],
    (regexGroupValue) => `cssPropertie:${regexGroupValue};`,
  ]
]);

export const MyComponent = () => (
  <View.div key>
    <View.section regexKey_cssValue>
  </View.div>
)
```