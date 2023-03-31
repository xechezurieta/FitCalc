import Button from "../ui/buttons/Button"
import InputSearch from "../ui/forms/InputSearch"
import SearchIcon from "../ui/icons/SearchIcon"


function Login() {
	return (
		<div style={{margin: '20px'}}>
			<Button type="primary" style={{margin: '20px'}}>Hola que tal</Button>
			<InputSearch placeholder='Buscar...'
			></InputSearch>
		</div>
	)
  }
export default Login
  