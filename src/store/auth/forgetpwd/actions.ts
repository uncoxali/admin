import {ForgetPwdTypes} from "./actionTypes"

export const userForgetPassword = (user : any, history : any) => {
  return {
    type: ForgetPwdTypes.FORGET_PASSWORD,
    payload: { user, history },
  }
}

export const userForgetPasswordSuccess = (message : string) => {
  return {
    type: ForgetPwdTypes.FORGET_PASSWORD_SUCCESS,
    payload: message,
  }
}

export const userForgetPasswordError = (message : any) => {
  return {
    type: ForgetPwdTypes.FORGET_PASSWORD_ERROR,
    payload: message,
  }
}
