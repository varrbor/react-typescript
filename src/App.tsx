import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
