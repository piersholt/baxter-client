/*
 * action types
 */

export const InterfaceActions = {
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  ADD_ACCOUNTS: 'ADD_ACCOUNTS',
  SELECT_ACCOUNT: 'SELECT_ACCOUNT'
}

export const QueryActions = {
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
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
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3100/api/dev.json'.concat('?' + parameters),
      method: 'GET',
      types: ['REQUEST', QueryActions.SEARCH_SUCCESS, 'FAILURE']
    }
  }
}

export function paginateSearch() {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3100/api/dev.json'.concat('?page=2'),
      method: 'GET',
      types: ['REQUEST', QueryActions.PAGINATE_SUCCESS, 'FAILURE']
    }
  }
}
