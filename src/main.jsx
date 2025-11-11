import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routers } from './routers/Routers.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ModalChatbot } from './components/ModalChatbot/index.jsx'
import {
  Container
} from './mainStyle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <BrowserRouter>
        <Routers />
        <ModalChatbot />
      </BrowserRouter>
    </Container>
  </StrictMode>,
)
