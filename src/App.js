import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from './components/styles/GlobalStyles';
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from './components/Logo';
import {PhotoCardWithQuery} from './container/PhotoCardWithQuery';
const App = () => {

  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div className="">
      <GlobalStyle />
      <Logo />
      {
        !!detailId ?
          <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </>
      }
    </div>
  );
}

export default App;
