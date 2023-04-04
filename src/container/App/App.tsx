import { CssBaseline } from '@mui/material'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'

interface Props {}
const App = (props: Props) => {
	return (
		<div>
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				<Header />
				<Main />
			</StyledEngineProvider>
		</div>
	)
}
export default App
