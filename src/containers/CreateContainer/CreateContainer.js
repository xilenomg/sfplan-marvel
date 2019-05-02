import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ChooseCharacter from '../../components/ChooseCharacter/ChooseCharacter';
import EditCharacter from '../../components/EditCharacter/EditCharacter';

import './CreateContainer.scss';

const CreateContainer = props => {
  const { match } = props;
  return (
    <div className="CreateContainer">
      <Switch>
        <Route path={`${match.path}`} exact component={ChooseCharacter} />
        <Route path={`${match.path}/:id`} component={EditCharacter} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default CreateContainer;
