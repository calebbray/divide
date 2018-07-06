import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" Component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
