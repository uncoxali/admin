import {ContactTypes} from "./actionTypes"

export const getUsers = () => ({
  type: ContactTypes.GET_USERS,
})

export const getUsersSuccess = (users : any) => ({
  type: ContactTypes.GET_USERS_SUCCESS,
  payload: users,
})

export const addNewUser = (user : any) => ({
  type: ContactTypes.ADD_NEW_USER,
  payload: user,
})

export const addUserSuccess = (user : any) => ({
  type: ContactTypes.ADD_USER_SUCCESS,
  payload: user,
})

export const addUserFail = (error : any) => ({
  type: ContactTypes.ADD_USER_FAIL,
  payload: error,
})

export const getUsersFail = (error : any) => ({
  type: ContactTypes.GET_USERS_FAIL,
  payload: error,
})

export const getUserProfile = () => ({
  type: ContactTypes.GET_USER_PROFILE,
})

export const getUserProfileSuccess = (userProfile : any) => ({
  type: ContactTypes.GET_USER_PROFILE_SUCCESS,
  payload: userProfile,
})

export const getUserProfileFail = (error : any) => ({
  type: ContactTypes.GET_USER_PROFILE_FAIL,
  payload: error,
})

export const updateUser = (user : any) => ({
  type: ContactTypes.UPDATE_USER,
  payload: user,
})

export const updateUserSuccess = (user : any) => ({
  type: ContactTypes.UPDATE_USER_SUCCESS,
  payload: user,
})

export const updateUserFail = (error : any) => ({
  type: ContactTypes.UPDATE_USER_FAIL,
  payload: error,
})

export const deleteUser = (user : any) => ({
  type: ContactTypes.DELETE_USER,
  payload: user,
})

export const deleteUserSuccess = (user : any) => ({
  type: ContactTypes.DELETE_USER_SUCCESS,
  payload: user,
})

export const deleteUserFail = (error : any) => ({
  type: ContactTypes.DELETE_USER_FAIL,
  payload: error,
})
