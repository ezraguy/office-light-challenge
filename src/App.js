import './App.css';
import Main from './components/main';
import 'semantic-ui-css/semantic.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/sign-up';


function App() {
  Aos.init({ duration: 700 });
  return (
    <div className="App" >
      <Header />
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
