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

  const classNameBox = classNames({
    [style.box]: true,
    [styleColor.borderBronze]: colorMenu === CONSTANTS.BRONZE,
  });

  const classNamePrice = classNames({
    [style.price]: true,
    [styleColor.colorBronze]: colorPrice === CONSTANTS.BRONZE,
  });

  return (
    <div className={classNameBox}>
      <h3 className={style.boxTitle}>{boxTitle}</h3>
      <p className={style.textTitle}>{textTitle}</p>
      <span className={classNamePrice}>{textPrice}</span>
    </div>
  );
}
