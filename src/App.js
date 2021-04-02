import { ListOfCategories } from "./components/ListOfCategories";
import {GlobalStyle} from './components/styles/GlobalStyles';
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import {Logo} from './components/Logo';

const App = () => {
  return (
    <div className="">
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={2}/>
    </div>
  );
}

export default App;
