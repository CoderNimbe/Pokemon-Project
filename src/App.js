import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import "./App.css"

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/sign-in' component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
