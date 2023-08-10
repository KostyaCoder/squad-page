import style from "../../App.module.scss";
import ElementMenu from "../ElrmentMenu";
import ButtonMenu from "../../components/ButtonMenu";

export default function ListMenu(props) {
  const { listMenuData, hrefSelectBox } = props;

  const menu = listMenuData.map((elem, i) => {
    return <ElementMenu key={i} elementData={elem} />;
  });

  return (
    <ul className={style.ul}>
      {menu}
      <ButtonMenu hrefSelectBox={hrefSelectBox} />
    </ul>
  );
}
