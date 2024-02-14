import css from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {


     let [currVal,setVal]=useState("")

     // method for handling on click

     const onButtonclicked=(buttonText)=>{
      
          //  console.log(buttonText);

          if(buttonText==='C'){
            setVal("");
          }
          else if(buttonText==='='){

            setVal(eval(currVal));
          }
          else {

               let newVal=currVal+buttonText;

               setVal(newVal);
          }
      
     }

  return (
    <center>
      <h3>Calculator using Reactjs</h3>
      <div className={css.container}>
        <Display currVal={currVal}></Display>
        <ButtonContainer onButtonclicked={onButtonclicked}></ButtonContainer>
      </div>
    </center>
  );
}

export default App;
