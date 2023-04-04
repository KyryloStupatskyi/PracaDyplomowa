import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './ChooseKino.scss'

interface Props {}
const ChooseKino = (props: Props) => {
	return (
		<div className="btn-element">
			<button
				className="btn btn-header"
				onClick={() => {
					alert('Test')
				}}
			>
				<span className="btn-header__title">Kielce, Galeria Korona</span>
				<ExpandMoreIcon sx={{ color: '#fff', ml: '5px' }} />
			</button>
		</div>
	)
}
export default ChooseKino
