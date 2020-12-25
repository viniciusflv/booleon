<p align="center" style="color: #343a40">
  <img src="../../booleon.svg" width="100%" height="144">
  <h1 align="center">booleon/base</h1>
  <p align="center" style="font-size: 1.2rem;">Highly typed declarative CSS-in-JS</p>
  <hr />
</p>

Booleon is a `DX` focused `React library` for, a highly typed `declarative`, styling, using component `boolean` properties. Works by mapping a `pre-defined` entry of css with keys that can be static (`string`) or dynamic (`RegEx`).

![NPM version](https://badgen.net/npm/v/@booleon/base)
![NPM version](https://badgen.net/github/commits/viniciusflv/booleon)
![NPM version](https://badgen.net//packagephobia/publish/@booleon/base)
![NPM version](https://badgen.net/bundlephobia/min/@booleon/base)
![NPM version](https://badgen.net/bundlephobia/minzip/@booleon/base)

* [Get Started](#get-started)
* [Complex Usage](#complex-usage)
* [Inspirations](#inspirations)
* [Motivations](#motivations)

# Get Started

## Instalation

```sh
npm i @booleon/base
```

```sh
yarn add @booleon/base
```

## Basic Usage

it'll match the `hexadecimal` color and apply to a css string.

```jsx
import React from 'react';
import { View, Text } from '@booleon/base';

export const MyComponent = () => {
  return (
    <View.div bg_000>
      <Text.span fc_fff>
        My Text
      </Text.span>
    </View.div>
  )
}
```

## Conditional styling

Only applies css if a `condition` is satisfied.

```jsx
import React from 'react';
import { View, Text } from '@booleon/base';

export const MyComponent = ({ color, backgroundColor }) => {
  return (
    <View.div bg_000={backgroundColor === 'black'}>
      <Text.span fc_fff={color === 'white'}>
        My Text
      </Text.span>
    </View.div>
  )
}
```
## Responsiveness

Add styles to `media queries`.

```jsx
import React from 'react';
import { View, Text } from '@booleon/base';

export const MyComponent = () => {
  return (
    <View.div md__bg_000>
      <Text.span sm__fc_fff>
        My Text
      </Text.span>
    </View.div>
  )
}
```

## Pseudo Elements

Applies, possible nested, `pseudo elements`.

```jsx
import React from 'react';
import { View, Text } from '@booleon/base';

export const MyComponent = () => {
  return (
    <View.div hover__bg_000>
      <Text.span active__fc_fff>
        My Text
      </Text.span>
    </View.div>
  )
}
```

# Complex Usage

```jsx
import React, { FC } from 'react';

import { Text, View } from '@booleon/base';

export const Checkbox: FC<any> = ({ id, children, ...props }) => {
  return (
    <View.div
      flex // display: flex;
      cross_center // align-items: center;
      fc_555 // color: #555;
    >
      <View.input
        {...props}
        id={id}
        type="checkbox"
        noappearance // appearance: none;
        ol_none // outline: none;
        cr_pointer // cursor: pointer;
        w_200 // width: 2rem;
        h_200 // height: 2rem;
        relative // position: relative;
        flex // display: flex;
        b_edge // border-radius:.5rem;
        cross_center // align-items: center;
        main_center // justify-content: center;
        fs_20 // font-size: 2rem;
        fc_fff // color: #fff;
        bw_1 // border-width: 0.01rem;
        bc_555 // border-color: #555;
        bs_solid // border-style: solid;
        bg_d5d5d5 // background-color: #d5d5d5;
        checked__bg_00f // :checked { background-color: #00f; }
        focus__bc_00f // :focus { border-color: #00f; }
        checked__before__content='"✔"' // :checked:before { content: "✔" }
        before__absolute // :before { position: absolute; }
        focus__sibling__fc_00f // :focus + * { color: #00f; }
      />
      {children ? (
        <Text.label
          htmlFor={id}
          fsl_none // user-select: none;
          cr_pointer // cursor: pointer;
          fs_12 // font-size: 1.2rem;
          ff_sans // font-family: sans-serif;
        >
          {children}
        </Text.label>
      ) : null}
    </View.div>
  );
};
```
