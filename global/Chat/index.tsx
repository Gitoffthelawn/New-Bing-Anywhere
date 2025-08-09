import ChatApp from 'global/Chat/ChatApp'
import store from 'global/Chat/store'
import { ChatAppPropsProvider } from 'global/hooks/useProps'
import { type IChatAppProps } from 'global/types'
import React from 'react'
import { Provider } from 'react-redux'

export { IChatAppProps }

export default (props: IChatAppProps) => {
  return (
    <Provider store={store}>
      <ChatAppPropsProvider>
        <ChatApp {...props} />
      </ChatAppPropsProvider>
    </Provider>
  )
}
