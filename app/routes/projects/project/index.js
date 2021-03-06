import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(project) {
    if (Ember.isEmpty(project.get('description'))) {
      this.transitionTo('projects.project.tasks');
    } else {
      this.transitionTo('projects.project.details');
    }
  }
});
