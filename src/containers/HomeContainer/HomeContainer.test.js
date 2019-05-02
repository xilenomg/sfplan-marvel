import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './HomeContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeContainer match={{path: '/'}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
