import {ChatTypes,ChatState} from "./actionTypes"

export const INIT_STATE : ChatState = {
  chats: [],
  groups: [],
  contacts: [],
  messages: [],
  error: {},
}

const Chat = (state = INIT_STATE, action : any) => {
  switch (action.type) {
    case ChatTypes.GET_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.payload,
      }

    case ChatTypes.GET_CHATS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ChatTypes.GET_GROUPS_SUCCESS:
      return {
        ...state,
        groups: action.payload,
      }

    case ChatTypes.GET_GROUPS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ChatTypes.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
      }

    case ChatTypes.GET_CONTACTS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ChatTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
      }

    case ChatTypes.GET_MESSAGES_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ChatTypes.POST_ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }

    case ChatTypes.POST_ADD_MESSAGE_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default Chat
