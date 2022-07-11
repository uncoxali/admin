import { combineReducers } from "redux"

// Layout
import Layout from "./layout/reducer";

// Calendar
import Calendar from "./calendar/reducer";

//Chat
import Chat from "./chat/reducer";

//Invoices
import Invoices from "./invoices/reducer";

//Contact
import contacts from "./contacts/reducer";

//login
import login from "./auth/login/reducer";

//register
import register from "./auth/register/reducer";

// User Profile 
import profile from "./auth/profile/reducer";

// Forget Password
import forgetPassword from "./auth/forgetpwd/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Calendar,
  Chat,
  Invoices,
  contacts,
  login,
  register,
  profile,
  forgetPassword
})

export default rootReducer
