import Button from "../ui/buttons/Button"
import InputCheckBox from "../ui/forms/InputCheckbox"
import InputSearch from "../ui/forms/InputSearch"
import SearchIcon from "../ui/icons/SearchIcon"


function Login() {
	return (
		<div style={{margin: '20px'}}>
			<Button type="primary" style={{margin: '20px'}}>Hola que tal</Button>
			<InputSearch placeholder='Buscar...'
			></InputSearch>
			<InputCheckBox style={{margin: '20px'}}/>
		</div>
	)
  }
export default Login
  