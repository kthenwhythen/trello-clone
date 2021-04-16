import { StrictMode } from 'react'
import { render } from 'react-dom'
import './index.css'
import { App } from './components/App'
import { AppStateProvider } from './components/AppStateContext'

render(
  <StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </StrictMode>,
  document.getElementById('root')
)
