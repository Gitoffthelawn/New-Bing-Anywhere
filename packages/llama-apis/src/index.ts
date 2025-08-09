export { Types, type default as IApis, type IMessage } from './abstract'
export { default as Bing } from './Bing'
export { default as Chatgpt } from './Chatgpt'
export { default as Claude } from './Claude'

export const methods: ('createConversation' | 'sendPrompt' | 'deleteConversation')[] = [
  'createConversation',
  'sendPrompt',
  'deleteConversation'
]
