import style from '../forms/InputSearch.module.css'
import SearchIcon from "../icons/SearchIcon"
const InputSearch = ({className , ...props}) => (
  <div className={`${style.wrapper} ${className || ''}`}>
    <SearchIcon className={style.icon}/>
    <input 
      {...props}
      className={style.input}
      type='text'>
    </input>
  </div>
)

export default InputSearch