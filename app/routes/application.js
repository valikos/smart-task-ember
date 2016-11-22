import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error(reason, transition) {
      this.transitionTo('/auth');
      return false;
    },

    afterAuthentication(reason, transition) {
      debugger
      this.transitionTo('/projects');
      return false;
    }
  }
});
