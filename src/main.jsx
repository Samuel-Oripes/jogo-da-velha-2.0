import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Menu } from './containers/Menu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)
