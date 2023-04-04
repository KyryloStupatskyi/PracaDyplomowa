import logo from 'assets/img/logo.png'
import './KinoLogo.scss'

interface Props {}

const KinoLogo = (props: Props) => {
	return (
		<div className="logo">
			<img src={logo} alt="logo" className="logo-img" />
		</div>
	)
}
export default KinoLogo
