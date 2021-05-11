import React from 'react';
import { render } from 'react-dom';

const Container = () => {
  return React.createElement('div', {}, [React.createElement('div', { key: 1 }, 'hello world')]);
};

const root = document.createElement('div');
root.id = 'reactroot';
document.body.append(root);

render(React.createElement(Container), root);
