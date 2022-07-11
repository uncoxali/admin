import { ProfileTypes } from "./actionTypes"

const initialState = {
  error: "",
  success: "",
}

const profile = (state = initialState, action : any) => {
  switch (action.type) {
    case ProfileTypes.EDIT_PROFILE:
      state = { ...state }
      break
    case ProfileTypes.PROFILE_SUCCESS:
      state = { ...state, success: action.payload }
      break
    case ProfileTypes.PROFILE_ERROR:
      state = { ...state, error: action.payload }
      break
    case ProfileTypes.RESET_PROFILE_FLAG :
      state = { ...state, success: "" }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default profile
