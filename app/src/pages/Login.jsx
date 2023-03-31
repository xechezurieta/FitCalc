import Button from "../ui/buttons/Button"
import InputCheckBox from "../ui/forms/InputCheckbox"
import InputSearch from "../ui/forms/InputSearch"
import Select from "../ui/forms/Select"
import Container from "../ui/layout/Container"

function Login() {
	return (
		<Container style={{padding: '20px', margin: '20px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
			<Button type="primary">Hola que tal</Button>
			<InputSearch placeholder='Buscar...'></InputSearch>
			<InputCheckBox style={{margin: '20px'}}/>
			<Select>
				<option value="0">Por activación</option>
				<option value="1">Por rol</option>
			</Select>
		</Container>
	)
  }
export default Login
  