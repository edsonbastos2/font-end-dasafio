import Header from './components/Header';
import GlobalStyled from './styles/GlobalStyled';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyled/>
      <Header/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
