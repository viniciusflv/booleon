<p align="center" style="color: #343a40">
  <img src="./booleon.svg" width="100%" height="144">
  <h1 align="center">booleon</h1>
  <p align="center" style="font-size: 1.2rem;">Highly typed declarative CSS-in-JS</p>
  <hr />
</p>

Booleon is a `DX` focused `React library` for, a highly typed `declarative`, styling, using component `boolean` properties. Works by mapping a `pre-defined` entry of css with keys that can be static (`string`) or dynamic (`RegEx`).

![NPM version](https://badgen.net/npm/v/@booleon/core)
![NPM version](https://badgen.net/github/commits/viniciusflv/booleon)
![NPM version](https://badgen.net//packagephobia/publish/@booleon/core)
![NPM version](https://badgen.net/bundlephobia/min/@booleon/core)
![NPM version](https://badgen.net/bundlephobia/minzip/@booleon/core)

* [Get Started](#get-started)
* [Complex Usage](#complex-usage)
* [Inspirations](#inspirations)
* [Motivations](#motivations)

# Get Started

## Instalation

```sh
npm i @booleon/core
```

```sh
yarn @booleon/core
```

## Basic Usage

it'll match the `hexadecimal` color and apply to a css string.

```jsx
import React from 'react';
import { View, Text } from '@booleon/core';

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
import { View, Text } from '@booleon/core';

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
import { View, Text } from '@booleon/core';

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
import { View, Text } from '@booleon/core';

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

import { Text, View } from '@booleon/core';

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
        focus__sibling__fc_00f // :focus:focus-within + * { color: #00f; }
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

# Inspirations

* [classnames](https://github.com/JedWatson/classnames) - A simple JavaScript utility for conditionally joining classNames together.
* [tailwind](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
* [styled-components](https://styled-components.com/) - Utilising tagged template literals to write actual CSS code to style your components.
* [emotion](https://emotion.sh/) - A performant and flexible, framework agnostic, CSS-in-JS library.

# Motivations

## CSS-in-JS

My introduction to `CSS-in-JS` libraries was with `styled-components`, right when I started coding with react. Since then I've always been avoiding `static styles` declarations using the props callbacks to define de value of the style:

```jsx
export const Text = styled.span`
  ${({ color }) => color && `color: ${color};`}
`
```
The reason I've been doing that is to work with styles with e `Object Oriented` approach, centralizing the logic and creating abstractions for my all parent components. To create compositions like this one:

```jsx
export const IconText = ({
  direction = "row", 
  first,
  last,
  children,
  ...props
}) => {
  return (
    <Flex
      direction={direction}
      alignItems="center" 
      justifyContent="center"
    >
      {first && <Svg {...first} />}
        <Text {...props}>
          {children}
        </Text>
      {last && <Svg {...last} />}
    </Flex>
  );
};
```

It worked great and I got better and better at using this approach. But then I started working for another company. There they use a combination of `tailwind`, `classnames` and `emotion`.

<hr />

## Tailwind

I've heard of `tailwind` before, but i never actualy gave it much atention, because I was in a CSS-in-JS vibe. Didn't took too long for me to get used to it, because the way classes are structured was really similar to my `Object Oriented` approach.

```html
<div class="bg-white rounded-lg p-6">
  <img class="h-16 w-16" src="avatar.jpg">
  <div>
   <h2>Erin Lindford</h2>
   <div>Product Engineer</div>
   <div>erinlindford@example.com</div>
   <div>(555) 765-4321</div>
  </div>
</div>
```

They did an remarkable job of `compiling relevant css` and created one of the best if not `bestest documentations ever`.

But, it's still the good old css file, wich means you're probably will load unused css. Another problem is conditional styling and there's when `classnames` comes up.

<hr />

## Classnames

Some times you need an expecific prop based condition to set styles. Like in my `IconText` example above, that uses a `Flex` component:

```jsx
export const Flex = styled.div`
  ${({ direction }) => direction && `flex-direction: ${direction};`}
`
```

With `classnames` you can create easy conditional styling:

```jsx
<div class={classnames("rounded-lg p-6", {
  // if backgroundColor add that class
  [`bg-${backgroundColor}`]: backgroundColor,
})}>
  <img class="h-16 w-16" src="avatar.jpg">
  <div>
   <h2>Erin Lindford</h2>
   <div>Product Engineer</div>
   <div>erinlindford@example.com</div>
   <div>(555) 765-4321</div>
  </div>
</div>
```

This works fine for most of the scenarios, but there are problems still:
* Not aways you can map styles to a `static` css class
* The use of `pseudo elements`

<hr />

## Emotion

Emotion came to fill those gaps. Using `@emotion/core` css, you can add styles without creating an styled component:

```jsx
<div class={classnames("rounded-lg p-6", {
  // if backgroundColor add that class
  [`bg-${backgroundColor}`]: backgroundColor,
})}>
  <img class="h-16 w-16" src="avatar.jpg">
  <div css={css`
    grid-template-columns: ${columns};
    :before {
      content: "";
      ...
    }
  `}>
   <h2>Erin Lindford</h2>
   <div>Product Engineer</div>
   <div>erinlindford@example.com</div>
   <div>(555) 765-4321</div>
  </div>
</div>
```