import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bipin from './Home.jsx'
import Counter from './State.jsx'
import Display from './Toogle.jsx'
import Mcondition from './Mc.jsx'
import User from './Props.jsx'
import Input from './Input.jsx'
import Skills from './Checkbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Bipin />
    <Counter />
    <Display />
    <Mcondition /> */}
     {/* <Input /> */}
     <Skills />
  </StrictMode>,

)
