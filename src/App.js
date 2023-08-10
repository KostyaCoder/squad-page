import data from "./data.js";
import style from "./App.module.scss";
import classNames from "classnames";
import ListMenu from "./components/ListMenu/index.js";
import CONSTANTS from "./constants";

function App() {
  let returnComponent;
  for (const elem of data) {
    const {
      colorMenu,
      boxTitle,
      textTitle,
      price: { text: textPrice },
      listMenuData,
      hrefSelectBox,
    } = elem;

    const classNameColor = classNames({
      [style.bronze]: colorMenu === CONSTANTS.BRONZE,
    });

    returnComponent = (
      <div className={style.wrapper}>
        <div className={`${style.box} ${classNameColor}`}>
          <h3 className={style.boxTitle}>{boxTitle}</h3>
          <p className={style.textTitle}>{textTitle}</p>
          <span className={style.price}>{textPrice}</span>
        </div>
        <ListMenu listMenuData={listMenuData} hrefSelectBox={hrefSelectBox} />
      </div>
    );
  }

  return returnComponent;
}

export default App;
