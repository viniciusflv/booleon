<p align="center" style="color: #343a40">
  <img src="https://raw.githubusercontent.com/viniciusflv/booleon/master/booleon.svg" viewBox="0 0 129.80448 115.59661" width="100%" height="144" />
  <h1 align="center">booleon/react</h1>
  <p align="center" style="font-size: 1.2rem;">Highly typed declarative CSS-in-JS</p>
  <hr />
</p>

Booleon React is a `DX` focused `library` for, a highly typed `declarative`, styling, using component `boolean` properties. Works by mapping a `pre-defined` entry of css with keys that can be static (`string`) or dynamic (`RegEx`).

![NPM version](https://badgen.net/npm/v/@booleon/react)
![NPM version](https://badgen.net/github/commits/viniciusflv/booleon)
![NPM version](https://badgen.net//packagephobia/publish/@booleon/react)
![NPM version](https://badgen.net/bundlephobia/min/@booleon/react)
![NPM version](https://badgen.net/bundlephobia/minzip/@booleon/react)

# Get Started

## Instalation

```sh
npm i @booleon/react
```

```sh
yarn add @booleon/react
```

## Create Component

```jsx
import { booleon } from '@booleon/react';
import { background } from '@booleon/module';

export const ButtonStyled = booleon.button(background);
```

## Basic Usage

```jsx
export const MyComponent = () => {
  return (
    <ButtonStyled bg_color_f00 />
  )
}
```

## Conditional styling

Only applies css if a `condition` is satisfied.

```jsx
export const MyComponent = ({ color }) => {
  return (
    <ButtonStyled bg_color_f00={color === 'red'} />
  )
}
```
## Responsiveness

Add styles to `media queries`.

```jsx
export const MyComponent = () => {
  return (
    <ButtonStyled md__bg_color_f00 />
  )
}
```

## Pseudo Elements

Applies, possible nested, `pseudo elements`.

```jsx
export const MyComponent = () => {
  return (
    <ButtonStyled hover__bg_color_f00 />
  )
}
```

## Keyframes

Create simple and fast `keyframes`.

```jsx
import { booleon } from '@booleon/react';
import { container, animation } from '@booleon/module';

const Component = booleon.div(container, animation);
export const MyComponent = () => {
  return (
    <Component
      kf__myAnimation
      from__top
      to__top_full
      ani_name_myAnimation
      ani_iteration_infinite
    />
  )
}
```

## Dark mode

Allows `dark theme` props declarations. (default from `prefers-color-scheme`)

```jsx
import { useTheme } from '@booleon/react';

export const MyComponent = () => {
  const { toggleTheme } = useTheme();
  return (
    <ButtonStyled dark__bg_color_f00 onClick={toggleTheme} />
  )
}
```
