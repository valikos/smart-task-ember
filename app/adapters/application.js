import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,

  namespace: 'api',

  authManager: Ember.inject.service(),

  headers: Ember.computed('authManager.accessToken', function() {
    return {
      "Authorization": `Bearer ${this.get("authManager.accessToken")}`
    };
  }),

  // shouldBackgroundReloadRecord: function() {
  //   return false;
  // }
});
