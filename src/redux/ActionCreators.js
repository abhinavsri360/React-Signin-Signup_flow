import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'
import fetch from 'cross-fetch'

export const requestRegister = (creds) => {
  return {
    type: ActionTypes.REGISTER_REQUEST,
    creds
  }
}

export const receiveRegister = (response) => {
  return {
    type: ActionTypes.REGISTER_SUCCESS,
    response
  }
}

export const registerError = (message) => {
  return {
    type: ActionTypes.REGISTER_FAILURE,
    message
  }
}

export const registerUser = (creds) => (dispatch) => {
  dispatch(requestRegister(creds))

  return fetch(baseUrl + 'user/register', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(creds)
  })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText)
        error.response = response
        throw error
      }
    },
    error => {
      throw error
    }
    )
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        dispatch(receiveRegister(response))
      } else {
        var error = new Error('Error ' + response.status)
        error.response = response
        return error
      }
    })
    .catch(err => dispatch(registerError(err.message)))
}

export const requestLogin = (creds) => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    creds
  }
}

export const receiveLogin = (response) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.token
  }
}

export const loginError = (message) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message
  }
}

export const loginUser = (creds) => (dispatch) => {
  dispatch(requestLogin(creds))

  return fetch(baseUrl + 'user/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(creds)
  })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText)
        error.response = response
        throw error
      }
    },
    error => {
      throw error
    }
    )
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('creds', JSON.stringify(creds))
        dispatch(receiveLogin(response))
      } else {
        var error = new Error('Error ' + response.status)
        error.response = response
        return error
      }
    })
    .catch(err => dispatch(loginError(err.message)))
}

export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST
  }
}

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS
  }
}

export const logoutError = (message) => {
  return {
    type: ActionTypes.LOGOUT_FAILURE,
    message
  }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout())
  localStorage.removeItem('token')
  localStorage.removeItem('creds')
  dispatch(receiveLogout())
}
