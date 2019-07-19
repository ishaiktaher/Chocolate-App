import { takeLatest, all, fork } from "redux-saga/effects";
// import { LOGIN_SUBMIT } from "../ActionTypes/loginAT";
// import { getUser} from "../Sagas/loginSaga";
// import {signUpSubmit} from "../Sagas/signUpSaga"
// import {SIGNUP_SUBMIT} from "../ActionTypes/SignUpAT";
import loginSaga from "../Sagas/loginSaga";
import signUpSaga from "../Sagas/signUpSaga";
import brandsSaga from "../Sagas/brandsSaga";
import chocolatesSaga from "../Sagas/chocolatesSaga";
// export default function* loginWatcherSaga() {
//   yield all([takeLatest(SIGNUP_SUBMIT, signUpSubmit),takeLatest(LOGIN_SUBMIT, getUser)]);
// }


export default function* loginWatcherSaga() {
  yield all([fork(loginSaga), fork(signUpSaga),fork(brandsSaga),fork(chocolatesSaga)]);
}