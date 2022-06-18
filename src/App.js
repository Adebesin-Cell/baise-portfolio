import styles from "./styles/App.module.scss";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Intro />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
