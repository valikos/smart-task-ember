import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Service.extend({

  ajax: Ember.inject.service(),

  authToken: null,

  authFromCookie() {
    if (Cookies.get('authToken'))
      return this.set('authToken', Cookies.get('authToken'));
  },

  authenticate(login, password) {
    return this.get('ajax').raw('http://localhost:2300/auth/login', {
      data: { login, password },
      method: 'POST',
      type: 'json',
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      }
    }).then((response) => {
      Cookies.set('authToken', response.jqXHR.getResponseHeader('Authorization'));
      this.set('authToken', Cookies.get('authToken'));
    });
  },

  invalidate() {
    Cookies.remove('authToken');
    this.set('authToken', null);
  },

  isAuthenticated: Ember.computed.bool('authToken')
});
