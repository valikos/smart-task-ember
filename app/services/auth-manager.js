import Ember from 'ember';

export default Ember.Service.extend({

  ajax: Ember.inject.service(),

  authToken: null,

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
      this.set('authToken', response.jqXHR.getResponseHeader('Authorization'));
    });
  },

  invalidate() {
    this.set('accessToken', null);
  },

  isAuthenticated: Ember.computed.bool('authToken')
});
