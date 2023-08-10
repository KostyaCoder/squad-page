import style from "./button.module.scss";

export default function ButtonMenu(props) {
  const { hrefSelectBox } = props;

  return (
    <li className={`${style.li} ${style.selectBox}`}>
      <a className={style.selectBox} href={hrefSelectBox}>
        <i className={style.check}></i>
        <span>Start</span>
      </a>
    </li>
  );
}
