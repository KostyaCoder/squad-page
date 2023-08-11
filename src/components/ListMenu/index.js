import style from "./listMenu.module.scss";
import ElementMenu from "../ElementMenu";
import ButtonMenu from "../../components/ButtonMenu";
import ElementLink from "../ElermentLink";

export default function ListMenu(props) {
  const { listMenuData, hrefSelectBox } = props;

  const menu = listMenuData.map((elem, i) => {
    const { elementLink } = elem;

    const result = elementLink ? (
      <ElementLink key={i} elementData={elem} />
    ) : (
      <ElementMenu key={i} elementData={elem} />
    );

    return result;
  });

  return (
    <ul className={style.ul}>
      {menu}
      <ButtonMenu key={Date.now()+100} hrefSelectBox={hrefSelectBox} />
    </ul>
  );
}
