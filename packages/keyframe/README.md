<p align="center" style="color: #343a40">
  <img src="../../booleon.svg" width="100%" height="144">
  <h1 align="center">booleon/keyframe</h1>
  <p align="center" style="font-size: 1.2rem;">Highly typed declarative CSS-in-JS keyframe creator</p>
  <hr />
</p>

Booleon is a `DX` focused `React library` for, a highly typed `declarative`, styling, using component `boolean` properties.

![NPM version](https://badgen.net/npm/v/@booleon/keyframe)
![NPM version](https://badgen.net/github/commits/viniciusflv/booleon)
![NPM version](https://badgen.net//packagephobia/publish/@booleon/keyframe)
![NPM version](https://badgen.net/bundlephobia/min/@booleon/keyframe)
![NPM version](https://badgen.net/bundlephobia/minzip/@booleon/keyframe)

# Get Started

## Instalation

```sh
npm i @booleon/keyframe
```

```sh
yarn add @booleon/keyframe
```

# Usage

```jsx
import { Keyframe } from '@booleon/keyframe';

export const MyComponent = () => (
  <Keyframe.provider spin>
    <Keyframe.state rt_360 />
  </Keyframe.provider>
);
```