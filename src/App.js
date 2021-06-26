import {Router} from 'react-router-dom';
import history from './services/history'
import Header from './components/Header';
import GlobalStyled from './styles/GlobalStyled';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <GlobalStyled/>
      <Header/>
      <Routes/>
    </Router>
  );
}

export default App;
