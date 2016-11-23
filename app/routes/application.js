import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service(),

  beforeModel() {
    this.get('authManager').authFromCookie();

    if (this.get('authManager.isAuthenticated'))
      this.transitionTo('projects');
    else
      this.transitionTo('auth');
  }
});
