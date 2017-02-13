/*
 * action types
 */

export const InterfaceActions = {
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  ADD_ACCOUNTS: 'ADD_ACCOUNTS',
  SELECT_ACCOUNT: 'SELECT_ACCOUNT'
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

// API CALLS

import { CALL_API } from 'redux-api-middleware';

export function newSearch(parameters) {
  var param = require('jquery-param');
  let url_parameters = param(parameters)
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3100/api/dev.json'.concat('?' + url_parameters),
      method: 'GET',
      types: [QueryActions.SEARCH_REQUEST, { type: QueryActions.SEARCH_SUCCESS, meta: { parameters: parameters} }, 'FAILURE']
    }
  }
}

export function paginateSearch(parameters) {
  parameters.page = parameters.page + 1

  var param = require('jquery-param');
  let url_parameters = param(parameters)

  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3100/api/dev.json'.concat('?' + url_parameters),
      method: 'GET',
      types: [QueryActions.PAGINATE_REQUEST, { type: QueryActions.PAGINATE_SUCCESS, meta: { parameters: parameters} }, 'FAILURE']
    }
  }
}
