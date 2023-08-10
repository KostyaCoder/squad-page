import classNames from "classnames";
import style from "../../App.module.scss";
import ButtonMenu from "../../components/ButtonMenu";

export default function ListMenu(props) {
  const {listMenuData, hrefSelectBox} = props;
  const returnComponent = listMenuData.map((menu, i) => {
    const {
      dataContent,
      textMenu,
      check,
      classNames: { borderBottom, borderTop, subMenu },
    } = menu;

    const classNameMenu = classNames({
      [style.li]: true,
      [style.borderBottom]: borderBottom,
      [style.borderTop]: borderTop,
      [style.subMenu]: subMenu,
    });

    return (
      <li key={i} data-content={dataContent} className={`${classNameMenu}`}>
        {check && <i className={style.check}></i>} {textMenu}
      </li>
    );
  });

  return (
    <ul className={style.ul}>
      {returnComponent}
      <ButtonMenu hrefSelectBox={hrefSelectBox} />
    </ul>
  );
}
