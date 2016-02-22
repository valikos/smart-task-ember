import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var projects = this.modelFor('projects');
    return projects.get('content').findBy('id', params.project_id);
  }
});
