import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import RoutesConfig from 'Configs/routes.config';
import configureStore from 'Redux/store';
import './App.css';
import { toRoute } from 'Utils/routes';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {RoutesConfig.map(route => toRoute(route))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
