import React from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Character
      id={1}
      name="Luis Perez"
      image="https://media.licdn.com/dms/image/C5603AQELhdKGyDlldw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=2eb4IyiXHNG5V7KSEJCKCnzB0DxixoDKP4IShoBmBtw"
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
