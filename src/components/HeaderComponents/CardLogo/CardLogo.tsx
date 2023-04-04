import cardLogo from 'assets/img/mastercard.png'
import './CardLogo.scss'

interface Props {}
const CardLogo = (props: Props) => {
	return (
		<div className="card-logo">
			<img src={cardLogo} alt="cardLogo" />
			<span className="btn-header__title card-logo__title">mastercard</span>
		</div>
	)
}
export default CardLogo
