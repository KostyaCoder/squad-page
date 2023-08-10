import style from "./menu.module.scss";
import Box from "../../components/Box";
import ListMenu from "../../components/ListMenu";
import { ColorContext } from "../../contexts";

export default function Menu(props) {
  const { data } = props;

  const returnComponent = data.map((elem, i) => {
    const { boxData, listMenuData, hrefSelectBox, colorMenu } = elem;

    return (
      <ColorContext.Provider value={colorMenu}>
        <div key={i} className={style.wrapper}>
          <Box boxData={boxData} />
          <ListMenu listMenuData={listMenuData} hrefSelectBox={hrefSelectBox} />
        </div>
      </ColorContext.Provider>
    );
  });

  return returnComponent;
}
