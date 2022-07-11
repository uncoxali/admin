import {InvoiceTypes} from "./actionTypes"

export const getInvoices = () => ({
  type: InvoiceTypes.GET_INVOICES,
})

export const getInvoicesSuccess = (invoices : any) => ({
  type: InvoiceTypes.GET_INVOICES_SUCCESS,
  payload: invoices,
})

export const getInvoicesFail = (error : any) => ({
  type: InvoiceTypes.GET_INVOICES_FAIL,
  payload: error,
})

export const getInvoiceDetail = (invoiceId : number) => ({
  type: InvoiceTypes.GET_INVOICE_DETAIL,
  invoiceId,
})

export const getInvoiceDetailSuccess = (invoices : any) => ({
  type: InvoiceTypes.GET_INVOICE_DETAIL_SUCCESS,
  payload: invoices,
})

export const getInvoiceDetailFail = (error  : any) => ({
  type: InvoiceTypes.GET_INVOICE_DETAIL_FAIL,
  payload: error,
})
