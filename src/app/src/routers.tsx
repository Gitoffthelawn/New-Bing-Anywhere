import Home from '@/pages/Home'
import Options from '@/pages/Options'
import Popup from '@/pages/Popup'
import { createHashRouter } from 'react-router'

const router: any = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/options',
    element: <Options />
  },
  {
    path: '/popup',
    element: <Popup />
  }
  // {
  //   path: '/chat',
  //   element: <Navigate to="/chat/newtab" replace={true} />
  // },
  // {
  //   path: '/chat/:scene',
  //   element: <Chat />
  // }
])

export default router
