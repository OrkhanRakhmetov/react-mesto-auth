const authApi = {
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  }
}

class Auth {
  constructor({ authApi }) {
    this._baseUrl = authApi.baseUrl;
    this._headers = authApi.headers;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  signUp({ email, password }) {
    return fetch(this._baseUrl + '/signup', {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then(res => this._getResponse(res))
  }

  signIn({ email, password }) {
    return fetch(this._baseUrl + '/signin', {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then(res => this._getResponse(res))
  }

  checkToken({token}) {
    return fetch(this._baseUrl + '/users/me', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
    .then(res => this._getResponse(res))
  }
}

const auth = new Auth({ authApi });

export default auth;