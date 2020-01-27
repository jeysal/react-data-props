# react-data-props

[![npm package](https://img.shields.io/npm/v/react-data-props.svg?style=flat-square)](https://www.npmjs.com/package/react-data-props)
[![license](https://img.shields.io/github/license/jeysal/react-data-props.svg?style=flat-square)](https://github.com/jeysal/react-data-props/blob/master/LICENSE)

> Allow a React component to accept `data-*` props and apply them to an element

## Installation

```sh
yarn add react-data-props
```

## Usage

Pass all unknown `restProps` of your component into the `dataProps` function.

It will
* filter out props
  * that do not start with `data-` and
  * with boolean or null-ish values and
* throw if a data prop
    * has an invalid name for a data attribute or
    * has a wrong value type.

Spread the return value of `dataProps` on the element you would like the data attributes applied to.

```js
import dataProps from 'react-data-props';

const Thing = ({ text, ...restProps }) => (
  <div {...dataProps(restProps)}>{text}</div>
);
```
