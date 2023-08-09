import style from "./App.module.scss";

function App() {
  return (
    <div className={style.wrapper}>
      <div className={`${style.box} ${style.bronze}`}>
        <h3 className={style.h3}>Bronze</h3>
        <p className={style.p}>Branding on a budget</p>
        <span className={style.price}>US$299</span>
      </div>
      <ul className={style.ul}>
        <li
          data-content="Paid to the winning creative at the end of contest. This amount is already included in your package price."
          className={`${style.li} ${style.borderBottom}`}
        >
          Prize to Winner - $135 (Included)
        </li>
        <li
          data-content="Our agency-style validation features and upgrades provide all the tools you need to complete a successful branding project, start to finish, and select a name with confidence."
          className={style.li}
        >
          Validation Services &amp; Upgrades ($39 value)
        </li>
        <li
          data-content="All submitted names are automatically checked for matching domain name availability. If you are only interested in a name and not a matching .com URL, you can specify that preference during contest creation."
          className={style.liSubMenu}
        >
          <i className={style.check}></i> Matching .com URL
        </li>
        <li
          data-content="Complimentary extension of timeline if you receive less than expected number of entries."
          className={`${style.li} ${style.borderTop}`}
        >
          Expected 300+ Entries{" "}
        </li>
        <li className={`${style.li} ${style.selectBox}`}>
          <a
            className={style.selectBox}
            href="/start-contest?type=1&amp;step=2"
          >
            <i className={style.check}></i>
            <span>Start</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
