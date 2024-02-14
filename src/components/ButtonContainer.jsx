
import css from './ButtonContainer.module.css'

const ButtonContainer = ({onButtonclicked}) => {

    const buttons=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  return (
    <div className={css.btnContainer}>

        {buttons.map(btn=><button className={css.mybtn} onClick={()=>onButtonclicked(btn)}>{btn}  </button>)}

      
    </div>
  );
};

export default ButtonContainer;
