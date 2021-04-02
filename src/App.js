import { GlobalStyle } from './components/styles/GlobalStyles';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';
import { Home } from './pages/Home';
import { Router } from '@reach/router';

const App = () => {

  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div className="">
      <GlobalStyle />
      <Logo />
      {
        !!detailId
          ? <PhotoCardWithQuery id={detailId} />
          :<Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
      }
    </div>
  );
}

export default App;
