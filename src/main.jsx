import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import CallButton from './components/services/CallButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
    <CallButton />
    <WhatsAppButton />
  </StrictMode>,
)
