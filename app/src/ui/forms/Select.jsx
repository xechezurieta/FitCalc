import style from '../forms/Select.module.css'
import ArrowDownIcon from '../icons/ArrowDownIcon'

const Select = ({className , ...props}) => (
  <div className={`${style.wrapper} ${style.className || ''}`}>
    <select {...props} className={style.select} ></select>
    <ArrowDownIcon className={style.arrow}/>
  </div>
)

export default Select