import './App.css';
import Main from './components/main';
import 'semantic-ui-css/semantic.min.css';
import ComingSoon from './components/coming-soon';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  Aos.init({ duration: 700 });
  return (
    <div className="App">
      <Main />
      <ComingSoon />
    </div>
  );
}

export default App;
