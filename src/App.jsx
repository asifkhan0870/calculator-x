import css from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
    <center>
      <h3>Calculator using Reactjs</h3>
      <div className={css.container}>
        <Display></Display>
        <ButtonContainer></ButtonContainer>
      </div>
    </center>
  );
}

export default App;
