import {InvoiceTypes} from "./actionTypes"

const INIT_STATE = {
  invoices: [],
  invoiceDetail: {},
  error: {},
}

const Invoices = (state = INIT_STATE, action : any) => {
  switch (action.type) {
    case InvoiceTypes.GET_INVOICES_SUCCESS:
      return {
        ...state,
        invoices: action.payload,
      }

    case InvoiceTypes.GET_INVOICES_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case InvoiceTypes.GET_INVOICE_DETAIL_SUCCESS:
      return {
        ...state,
        invoiceDetail: action.payload,
      }

    case InvoiceTypes.GET_INVOICE_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default Invoices
