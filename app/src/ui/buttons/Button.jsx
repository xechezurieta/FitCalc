import style from './Button.module.css'

const TYPE_CLASSNAME = {
	primary: style.primary,
	secondary: style.secondary
}

const Button = ({type='primary', className, ...props}) => (
	<button 
		{...props}
		className={`${style.button} ${TYPE_CLASSNAME[type]} ${className}` }> 
	</button>
)

export default Button