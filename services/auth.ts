import {fetch} from "expo/fetch";

export function createUser(email: string, password: string) {
  return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFPIuRS85KKPjfu5njPKc-clVswCCgEY8', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  })
}

