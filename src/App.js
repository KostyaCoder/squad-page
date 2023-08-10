import data from "./data.js";
import style from "./App.module.scss";
import Menu from "./components/Menu";

function App() {
  return (
    <nav className={style.menu}>
      <Menu data={data} />
    </nav>
  );
}

export default App;
