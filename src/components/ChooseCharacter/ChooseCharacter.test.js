import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../../redux/store';
import ChooseCharacter from './ChooseCharacter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
  ReactDOM.render(<ChooseCharacter store={reduxStore} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
