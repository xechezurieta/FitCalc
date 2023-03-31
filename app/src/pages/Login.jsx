import Button from "../ui/buttons/Button"
import InputCheckBox from "../ui/forms/InputCheckbox"
import InputSearch from "../ui/forms/InputSearch"
import Select from "../ui/forms/Select"

function Login() {
	return (
		<div style={{margin: '20px'}}>
			<Button type="primary" style={{margin: '20px'}}>Hola que tal</Button>
			<InputSearch placeholder='Buscar...'></InputSearch>
			<InputCheckBox style={{margin: '20px'}}/>
			<Select>
				<option value="0">Por activación</option>
				<option value="1">Por rol</option>
			</Select>
		</div>
	)
  }
export default Login
  