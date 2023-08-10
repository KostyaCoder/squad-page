import style from "../../App.module.scss";
import classNames from "classnames";
import CONSTANTS from "../../constants";

export default function Box(props) {
  const {
    boxData: { colorMenu, boxTitle, textTitle, textPrice },
  } = props;

  const classNameColor = classNames({
    [style.bronze]: colorMenu === CONSTANTS.BRONZE,
  });

  return (
    <div className={`${style.box} ${classNameColor}`}>
      <h3 className={style.boxTitle}>{boxTitle}</h3>
      <p className={style.textTitle}>{textTitle}</p>
      <span className={style.price}>{textPrice}</span>
    </div>
  );
}
