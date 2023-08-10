import style from "./button.module.scss";
import { useContext } from "react";
import { ColorContext } from "../../contexts";

export default function ButtonMenu(props) {
  const { hrefSelectBox } = props;
  const colorMenu = useContext(ColorContext);

  return (
    <li className={`${style.li} ${style.selectBox}`}>
      <a className={style.selectBox} href={hrefSelectBox}>
        <i className={style.check}></i>
        <span>Start</span>
      </a>
    </li>
  );
}
