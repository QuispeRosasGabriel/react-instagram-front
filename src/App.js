import { GlobalStyle } from './components/styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Router } from '@reach/router';
import {Navbar} from './components/Navbar';

const App = () => {
 
  return (
    <div className="">
      <GlobalStyle />
      <Logo />
       
          <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
            <Detail  path='/detail/:detailId'/>
          </Router>
    <Navbar />

    </div>
  );
}

export default App;
