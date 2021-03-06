import React  from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Test from './pages/Test';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Root} />
            <Route path="/test" component={Test} />
          </Switch>
      </BrowserRouter>
    </div>
    )
};

export default App;
