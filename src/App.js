import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { Favs } from './pages/Favs';
import { Redirect, Router } from '@reach/router';
import { Layout } from './layout/Layout';
import { Context } from "./context/Context";
import { useContext } from 'react';
import NotFound from './pages/NotFound';

const App = () => {

  const { isAuth } = useContext(Context);

  return (
    <Layout className="">
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {
          !isAuth && <NotRegisteredUser path='/login' />
        }
        {
          !isAuth && <Redirect from='/favs' noThrow to='/login' />
        }
        {
          !isAuth && <Redirect from='/user' noThrow to='/login' />
        }
        {
          !!isAuth &&  <Redirect from='login' noThrow to='/' />
        }
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
    </Layout>
  );
}

export default App;
