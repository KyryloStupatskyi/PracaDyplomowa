import LoginIcon from '@mui/icons-material/Login'
import './Login.scss'

interface Props {}
const Login = (props: Props) => {
	return (
		<div className="loginBlock">
			<button
				className="login-btn btn-header"
				onClick={() => {
					alert('Login button')
				}}
			>
				<span className="btn-header__title">Login</span>
				<LoginIcon className="login-btn__icon" sx={{ color: '#fff', ml: 1 }} />
			</button>
		</div>
	)
}
export default Login
