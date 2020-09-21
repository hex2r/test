import React, { lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// Lazy load components
const App = lazy(() => import('./App'));
const UserForm = lazy(() => import('./components/UserForm'));

export const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/gallery" component={App} />
        <Route exact path="/">
          <Redirect to="/gallery" />
        </Route>
        <Route exact path="/form" component={UserForm} />
      </Switch>
    </Suspense>
  );
};
