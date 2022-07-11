import {ContactTypes,ContactState} from "./actionTypes"

export const INIT_STATE : ContactState = {
  users: [],
  userProfile: {},
  error: {},
}

const contacts = (state = INIT_STATE, action :any) => {
  switch (action.type) {
    case ContactTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      }

    case ContactTypes.GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ContactTypes.ADD_USER_SUCCESS:

      return {
        ...state,
        users: [...state.users, action.payload],
      }

    case ContactTypes.ADD_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ContactTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
      }

    case ContactTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map(user =>
          user.id.toString() === action.payload.id.toString()
            ? { user, ...action.payload }
            : user
        ),
      }

    case ContactTypes.UPDATE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ContactTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(
          user => user.id.toString() !== action.payload.id.toString()
        ),
      }

    case ContactTypes.DELETE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ContactTypes.GET_USER_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default contacts
