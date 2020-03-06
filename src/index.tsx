export interface RestProps {
  [prop: string]: any;
}

import fromEntries from 'core-js-pure/features/object/from-entries';
import startsWith from 'core-js-pure/features/string/virtual/starts-with';

const dataProps = (props: RestProps): RestProps =>
  fromEntries(
    Object.entries(props).filter(([name, value]) => {
      // don't include non-data attributes
      if (!startsWith.call(name, 'data-')) {
        return false;
      }

      // don't include data attributes with boolean or null-ish values
      // (similar to React ignoring those as children)
      if (
        value === true ||
        value === false ||
        value === undefined ||
        value === null
      ) {
        return false;
      }

      // throw for invalid data attribute name
      if (typeof document !== 'undefined') {
        const el = document.createElement('div');
        el.setAttribute(name, '');
      }

      // include data attributes with string or number values
      if (typeof value === 'string' || typeof value === 'number') {
        return true;
      }

      // throw for all other data attribute values
      throw new Error(`Data attribute ${name} has nonsensical value ${value}`);
    }),
  );

export default dataProps;
