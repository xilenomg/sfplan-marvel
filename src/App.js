import React from 'react';
import configureStore from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Containers
import CreateCharacter from './containers/CreateContainer/CreateContainer'
import ListCharacters from './containers/ListContainer/ListContainer'
import HomeContainer from './containers/HomeContainer/HomeContainer'

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Style
import './App.scss';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/create" component={CreateCharacter} />
            <Route path="/list" component={ListCharacters} exact />
            <Route path="/" component={HomeContainer} exact />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;
