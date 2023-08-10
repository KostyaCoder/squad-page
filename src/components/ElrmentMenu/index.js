import classNames from "classnames";
import style from "./element.module.scss";

export default function ElementMenu(props) {
  const { elementData } = props;

  const {
    dataContent,
    textMenu,
    check,
    classNames: { borderBottom, borderTop, subMenu },
  } = elementData;

  const classNameMenu = classNames({
    [style.li]: true,
    [style.borderBottom]: borderBottom,
    [style.borderTop]: borderTop,
    [style.subMenu]: subMenu,
  });

  return (
    <li data-content={dataContent} className={`${classNameMenu}`}>
      {check && <i className={style.check}></i>} {textMenu}
    </li>
  );
}
