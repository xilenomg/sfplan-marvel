import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ListContainer from './ListContainer';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../../redux/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
  ReactDOM.render(
    <ReduxProvider store={reduxStore}>
      <Router>
        <ListContainer match={{ path: '/' }} />
      </Router>
    </ReduxProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
