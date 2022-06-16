import styles from "./styles/App.module.scss";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
}

export default App;
