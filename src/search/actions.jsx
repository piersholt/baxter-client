/*
 * action types
 */

export const InterfaceActions = {
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  ADD_ACCOUNTS: 'ADD_ACCOUNTS',
  SELECT_ACCOUNT: 'SELECT_ACCOUNT',
  SHOW_FILTER: 'SHOW_FILTER',
  CHANGE_SEARCH_PARAMETERS: 'CHANGE_SEARCH_PARAMETERS'
}

export const QueryActions = {
  SEARCH_REQUEST: 'SEARCH_REQUEST',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  PAGINATE_REQUEST: 'PAGINATE_REQUEST',
  PAGINATE_SUCCESS: 'PAGINATE_SUCCESS'
}

/*
 * action creators
 */

function addAccount(account) {
  return {
    type: InterfaceActions.ADD_ACCOUNT,
    account: account
  }
}

function addAccounts(accounts) {
  return {
    type: InterfaceActions.ADD_ACCOUNTS,
    accounts: accounts
  }
}

export function selectAccount(account_id) {
  return {
    type: InterfaceActions.SELECT_ACCOUNT,
    account_id: account_id
  }
}

export function showFilter(bool) {
  return {
    type: InterfaceActions.SHOW_FILTER,
    showFilter: bool
  }
}

export function changeSearchParameters(parameters) {
  return {
    type: InterfaceActions.CHANGE_SEARCH_PARAMETERS,
    parameters: parameters
  }
}

// API CALLS

import { CALL_API } from 'redux-api-middleware';

export function newSearch(parameters) {
  var param = require('jquery-param');
  let url_parameters = param(parameters)
  let endpoint = 'https://dredger.piersholt.com:22786/api/'
  let parsed_endpoint = endpoint.concat('accounts.json').concat('?' + url_parameters)
  return {
    [CALL_API]: {
      endpoint: parsed_endpoint,
      method: 'GET',
      types: [{ type: QueryActions.SEARCH_REQUEST, meta: { parameters: parameters, showFilter: false} }, { type: QueryActions.SEARCH_SUCCESS, meta: { parameters: parameters, showFilter: false} }, 'FAILURE']
    }
  }
}

export function paginateSearch(parameters) {
  parameters.page = parameters.page + 1

  var param = require('jquery-param');
  let url_parameters = param(parameters)
  let endpoint = 'https://dredger.piersholt.com:22786/api/'
  let parsed_endpoint = endpoint.concat('accounts.json').concat('?' + url_parameters)
  return {
    [CALL_API]: {
      endpoint: parsed_endpoint,
      method: 'GET',
      types: [QueryActions.PAGINATE_REQUEST, { type: QueryActions.PAGINATE_SUCCESS, meta: { parameters: parameters} }, 'FAILURE']
    }
  }
}
