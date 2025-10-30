import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'common-ui-theme/dist/index.css'
import '@ant-design/v5-patch-for-react-19';
import './index.css'
import './i18n'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
