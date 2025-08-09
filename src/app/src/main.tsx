import router from '@/routers'
import { I18nApp } from 'global/i18n'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './App.styl'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <StrictMode>
  <I18nApp>
    <RouterProvider router={router} />
  </I18nApp>
  // </StrictMode>
)
