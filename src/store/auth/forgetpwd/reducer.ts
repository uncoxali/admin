import {ForgetPwdTypes} from "./actionTypes"

const initialState = {
  forgetSuccessMsg: null,
  forgetError: null,
}

const forgetPassword = (state = initialState, action : any) => {
  switch (action.type) {
    case ForgetPwdTypes.FORGET_PASSWORD:
      state = {
        ...state,
        forgetSuccessMsg: null,
        forgetError: null,
      }
      break
    case ForgetPwdTypes.FORGET_PASSWORD_SUCCESS:
      state = {
        ...state,
        forgetSuccessMsg: action.payload,
      }
      break
    case ForgetPwdTypes.FORGET_PASSWORD_ERROR:
      state = { ...state, forgetError: action.payload }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default forgetPassword
