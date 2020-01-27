/** @jest-environment node */
/** @jsx extractDataProps */
// A custom jsx pragma function means our tests can look more like the production code
// where the data props are actually passed to a component

import fc from 'fast-check';

import dataProps, { RestProps } from '.';

const extractDataProps = (_type: any, props: RestProps) => dataProps(props);

it.each(['asdf', 42])('allows a data attribute with a value of %p', value => {
  expect(<div data-name={value} />).toHaveProperty('data-name', value);
});

it.each([true, false, null, undefined])(
  'ignores a data attribute with a value of %p',
  value => {
    expect(<div data-name={value} />).not.toHaveProperty('data-name');
  },
);

it('forbids a data attribute with any other value type', () => {
  fc.assert(
    fc.property(
      fc
        .anything()
        .filter(
          value =>
            typeof value !== 'string' &&
            typeof value !== 'number' &&
            value !== true &&
            value !== false &&
            value !== null &&
            value !== undefined,
        ),
      value => expect(() => <div data-name={value} />).toThrow(/data.+value/i),
    ),
  );
});
