import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    afterAuthentication() {
      route.transitionTo('projects');
    }
  }
});
