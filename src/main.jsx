import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bipin from './Home.jsx'
import Counter from './State.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Bipin /> */}
    <Counter />
  </StrictMode>,
)
