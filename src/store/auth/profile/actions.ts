import { ProfileTypes } from "./actionTypes"

export const editProfile = (user : any) => {
  return {
    type: ProfileTypes.EDIT_PROFILE,
    payload: { user },
  }
}

export const profileSuccess = (msg : any) => {
  return {
    type: ProfileTypes.PROFILE_SUCCESS,
    payload: msg,
  }
}

export const profileError = (error : any) => {
  return {
    type: ProfileTypes.PROFILE_ERROR,
    payload: error,
  }
}

export const resetProfileFlag = () => {
  return {
    type: ProfileTypes.RESET_PROFILE_FLAG,
  }
}
