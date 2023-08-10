import classNames from "classnames";
import style from "../../App.module.scss";

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
    <>
      <ul className={style.ul}>{returnComponent}</ul>
      <li className={`${style.li} ${style.selectBox}`}>
        <a className={style.selectBox} href={hrefSelectBox}>
          <i className={style.check}></i>
          <span>Start</span>
        </a>
      </li>
    </>
  );
}
