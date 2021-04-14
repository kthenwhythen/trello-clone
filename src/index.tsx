import { StrictMode } from 'react'
import { render } from 'react-dom'
import './index.css'
import { App } from './App'
import { AppStateProvider } from './AppStateContext';

render(
	<StrictMode>
		<AppStateProvider>
			<App />
		</AppStateProvider>
	</StrictMode>,
	document.getElementById('root')
)
