
import css from './Display.module.css'

const Display = ({currVal}) => {
  return <input className={css.display} type="text" value={currVal} readOnly/>;
};

export default Display;
