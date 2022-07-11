import { all, fork } from "redux-saga/effects"

//Layout
import LayoutSaga from "./layout/saga";

//Calendar
import calendarSaga from "./calendar/saga";

//Chat
import chatSaga from "./chat/saga";

//Invoices
import invoiceSaga from "./invoices/saga";

//Contact
import contactsSaga from "./contacts/saga";

//Login
import authSaga from "./auth/login/saga";

//Register
import registerSaga from "./auth/register/saga";

//User Profile
import ProfileSaga from "./auth/profile/saga";

// Forget Password
import forgetPasswordSaga from "./auth/forgetpwd/saga"

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(calendarSaga),
    fork(chatSaga),
    fork(invoiceSaga),
    fork(contactsSaga),
    fork(authSaga),
    fork(registerSaga),
    fork(ProfileSaga),
    fork(forgetPasswordSaga)
  ])
}
