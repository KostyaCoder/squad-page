import style from "./box.module.scss";
import styleColor from "../../common/styles/color.module.scss";
import classNames from "classnames";
import CONSTANTS from "../../constants";
import { useContext } from "react";
import { ColorContext } from "../../contexts";

export default function Box(props) {
  const {
    boxData: {
      boxTitle,
      textTitle,
      price: { text: textPrice, color: colorPrice },
    },
  } = props;
  const colorMenu = useContext(ColorContext);
  const { classNameBox, classNameTitle, classNamePrice } = getClassNames(
    colorMenu,
    colorPrice
  );

  return (
    <div className={classNameBox}>
      <h3 className={classNameTitle}>{boxTitle}</h3>
      <p className={style.textTitle}>{textTitle}</p>
      <span className={classNamePrice}>{textPrice}</span>
    </div>
  );
}

function getClassNames(colorMenu, colorPrice) {
  const classNameBox = classNames({
    [style.box]: true,
    [styleColor.borderBronze]: colorMenu === CONSTANTS.BRONZE,
    [styleColor.borderGold]: colorMenu === CONSTANTS.GOLD,
    [styleColor.borderPlatinum]: colorMenu === CONSTANTS.PLATINUM,
    [styleColor.borderManaged]: colorMenu === CONSTANTS.MANAGED,
  });

  const classNameTitle = classNames({
    [style.boxTitle]: true,
    [styleColor.colorBronze]: colorMenu === CONSTANTS.BRONZE,
    [styleColor.colorGold]: colorMenu === CONSTANTS.GOLD,
    [styleColor.colorPlatinum]: colorMenu === CONSTANTS.PLATINUM,
    [styleColor.colorManaged]: colorMenu === CONSTANTS.MANAGED,
  });

  const classNamePrice = classNames({
    [style.price]: true,
    [styleColor.colorBronze]: colorPrice === CONSTANTS.BRONZE,
    [styleColor.colorGold]: colorPrice === CONSTANTS.GOLD,
    [styleColor.colorPlatinum]: colorPrice === CONSTANTS.PLATINUM,
    [styleColor.colorManaged]: colorPrice === CONSTANTS.MANAGED,
    [styleColor.colorBlack]: colorPrice === CONSTANTS.BLACK,
  });
  return { classNameBox, classNameTitle, classNamePrice };
}
