import {RegisterTypes} from "./actionTypes"

const initialState = {
  registrationError: null,
  message: null,
  loading: false,
  user: null,
}

const register = (state = initialState, action : any) => {
  switch (action.type) {
    case RegisterTypes.REGISTER_USER:
      state = {
        ...state,
        loading: true,
        registrationError: null,
      }
      break
    case RegisterTypes.REGISTER_USER_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        user: action.payload,
        registrationError: null,
      }
      break
    case RegisterTypes.REGISTER_USER_FAILED:
      state = {
        ...state,
        user: null,
        loading: false,
        registrationError: action.payload,
      }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default register;
