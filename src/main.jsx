import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx';
import ScrollToTopButton from './Components/ScrollToTopButton.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ScrollToTopButton />
  </>,
)
