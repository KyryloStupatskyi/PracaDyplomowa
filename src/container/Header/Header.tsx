import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import './Header.scss'
import KinoLogo from 'components/HeaderComponents/KinoLogo/KinoLogo'
import CardLogo from 'components/HeaderComponents/CardLogo/CardLogo'
import ChooseKino from 'components/HeaderComponents/ChooseKino/ChooseKino'
import Login from 'components/HeaderComponents/Login/Login'

interface Props {}
const Header = (props: Props) => {
	return (
		<div className="header">
			<div className="header__left-bar">
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
					className="menuIcon"
				>
					<MenuIcon fontSize="large" sx={{ color: 'white' }} />
				</IconButton>
				<KinoLogo />
			</div>
			<div className="header__right-bar">
				<CardLogo />
				<ChooseKino />
				<Login />
			</div>
		</div>
	)
}
export default Header
