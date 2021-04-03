import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { Favs } from './pages/Favs';
import { Router } from '@reach/router';
import { Layout } from './layout/Layout';

const App = () => {
  
  const UserLogged = ({children}) => {
    return children({isAuth: false});
  }

  return (
    <Layout className="">
          <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
            <Detail  path='/detail/:detailId'/>
          </Router>
            <UserLogged>
            {
              ({isAuth}) => 
              !!isAuth ?
              <Router>
               <Favs path = '/favs' />
               <User path = '/user' />
              </Router> :
              <Router>
                <NotRegisteredUser path = '/favs' />
                <NotRegisteredUser path = '/user' />
              </Router>

            }
       
            </UserLogged>
    </Layout>
  );
}

export default App;
