import style from '../forms/InputCheckbox.module.css'
import CheckIcon from '../icons/checkIcon'
const InputCheckBox = ({className , ...props}) => (
  <label className={`${style.label} ${className || ''}`}>
    <input {...props} type='checkbox' className={style.input}></input>
    <CheckIcon className={`${style.check}`}/>
  </label>
)

export default InputCheckBox