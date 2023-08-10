import data from "./data.js";
import style from "./App.module.scss";
import Box from "./components/Box";
import ListMenu from "./components/ListMenu/index.js";

function App() {
  let returnComponent;
  for (const elem of data) {
    const { boxData, listMenuData, hrefSelectBox } = elem;

    returnComponent = (
      <div className={style.wrapper}>
        <Box boxData={boxData} />
        <ListMenu listMenuData={listMenuData} hrefSelectBox={hrefSelectBox} />
      </div>
    );
  }

  return returnComponent;
}

export default App;
