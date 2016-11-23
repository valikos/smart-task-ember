import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,

  namespace: 'api',

  authManager: Ember.inject.service(),

  headers: Ember.computed('authManager.authToken', function() {
    return {
      "Authorization": `Bearer ${this.get("authManager.authToken")}`
    };
  }),

  shouldBackgroundReloadRecord: function() {
    return false;
  }
});
