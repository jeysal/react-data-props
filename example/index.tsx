import 'react-app-polyfill/ie11';

import React from 'react';
import * as ReactDOM from 'react-dom';

import dataProps from '..';

const App = () => {
  return (
    <div>
      <Thing
        text="Inspect this element to see the data attribute"
        data-attr1="asdf"
        data-attr2="42"
        data-ignored0={true || 42}
        data-ignored1={false && 42}
        data-ignored2={null && 42}
        data-ignored3={undefined && 42}
        excess-prop="asdf"
      />
    </div>
  );
};

const Thing = ({ text, ...restProps }) => (
  <div {...dataProps(restProps)}>{text}</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
