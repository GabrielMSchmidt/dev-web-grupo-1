import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routers } from './routers/Routers.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ModalChatbot } from './components/ModalChatbot/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routers />
      <ModalChatbot />
    </BrowserRouter>
  </StrictMode>,
)
