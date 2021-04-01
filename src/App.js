import { ListOfCategories } from "./components/ListOfCategories";
import {GlobalStyle} from './GlobalStyles';
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";

const App = () => {
  return (
    <div className="">
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
}

export default App;
