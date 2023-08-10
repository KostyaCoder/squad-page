import style from "./button.module.scss";
import styleColor from "../../common/styles/color.module.scss";
import { useContext } from "react";
import { ColorContext } from "../../contexts";
import classNames from "classnames";
import CONSTANTS from "../../constants";

export default function ButtonMenu(props) {
  const { hrefSelectBox } = props;
  const colorMenu = useContext(ColorContext);

  const className = classNames({
    [style.li]: true,
    [style.selectBox]: true,
    [styleColor.buttonBronze]: colorMenu === CONSTANTS.BRONZE,
    [styleColor.buttonGold]: colorMenu === CONSTANTS.GOLD,
    [styleColor.buttonPlatinum]: colorMenu === CONSTANTS.PLATINUM,
    [styleColor.buttonManaged]: colorMenu === CONSTANTS.MANAGED,
  });

  return (
    <li className={className}>
      <a className={style.selectBox} href={hrefSelectBox}>
        <i className={style.check}></i>
        <span>Start</span>
      </a>
    </li>
  );
}
