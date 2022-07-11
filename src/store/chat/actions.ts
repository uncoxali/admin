import {ChatTypes} from "./actionTypes"

export const getChats = () => ({
  type: ChatTypes.GET_CHATS,
})

export const getChatsSuccess = (chats : any) => ({
  type: ChatTypes.GET_CHATS_SUCCESS,
  payload: chats,
})

export const getChatsFail = (error : any) => ({
  type: ChatTypes.GET_CHATS_FAIL,
  payload: error,
})

export const getGroups = () => ({
  type: ChatTypes.GET_GROUPS,
})

export const getGroupsSuccess = (groups : any) => ({
  type: ChatTypes.GET_GROUPS_SUCCESS,
  payload: groups,
})

export const getGroupsFail = (error : any) => ({
  type: ChatTypes.GET_GROUPS_FAIL,
  payload: error,
})

export const getContacts = () => ({
  type: ChatTypes.GET_CONTACTS,
})

export const getContactsSuccess = (contacts : any) => ({
  type: ChatTypes.GET_CONTACTS_SUCCESS,
  payload: contacts,
})

export const getContactsFail = (error : any) => ({
  type: ChatTypes.GET_CONTACTS_FAIL,
  payload: error,
})

export const getMessages = (roomId : any) => ({
  type: ChatTypes.GET_MESSAGES,
  payload: roomId,
})

export const getMessagesSuccess = (messages : any) => ({
  type: ChatTypes.GET_MESSAGES_SUCCESS,
  payload: messages,
})

export const getMessagesFail = (error : any) => ({
  type: ChatTypes.GET_MESSAGES_FAIL,
  payload: error,
})

export const addMessage = (message : object) => ({
  type: ChatTypes.POST_ADD_MESSAGE,
  payload: message,
})

export const addMessageSuccess = (message : any) => ({
  type: ChatTypes.POST_ADD_MESSAGE_SUCCESS,
  payload: message,
})

export const addMessageFail = (error : any) => ({
  type: ChatTypes.POST_ADD_MESSAGE_FAIL,
  payload: error,
})
