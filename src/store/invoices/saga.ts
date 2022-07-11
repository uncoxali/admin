import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { InvoiceTypes } from "./actionTypes"
import {
  getInvoicesSuccess,
  getInvoicesFail,
  getInvoiceDetailSuccess,
  getInvoiceDetailFail,
} from "./actions"

//Include Both Helper File with needed methods
import { getInvoices, getInvoiceDetail } from "../../helpers/fakebackend_helper"

function* fetchInvoices() {
  try {
    const response : Promise<any> = yield call(getInvoices)
    yield put(getInvoicesSuccess(response))
  } catch (error) {
    yield put(getInvoicesFail(error))
  }
}

function* fetchInvoiceDetail({ invoiceId } : any) {
  try {
    const response : Promise<any> = yield call(getInvoiceDetail, invoiceId)
    yield put(getInvoiceDetailSuccess(response))
  } catch (error) {
    yield put(getInvoiceDetailFail(error))
  }
}

function* invoiceSaga() {
  yield takeEvery(InvoiceTypes.GET_INVOICES, fetchInvoices)
  yield takeEvery(InvoiceTypes.GET_INVOICE_DETAIL, fetchInvoiceDetail)
}

export default invoiceSaga
