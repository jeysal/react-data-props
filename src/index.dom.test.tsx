/** @jest-environment jsdom */
/** @jsx extractDataProps */
// A custom jsx pragma function means our tests can look more like the production code
// where the data props are actually passed to a component

import dataProps, { RestProps } from '.';

const extractDataProps = (_type: any, props: RestProps) => dataProps(props);

it('forbids a data attribute with an invalid name', () => {
  const props = { 'data-a;b': 'asdf' };
  expect(() => <div {...props} />).toThrow(/data.+name/i);
});
