import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ConversationContextProvider } from './context/ConversationContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ConversationContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </ConversationContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
