import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('project');
  },

  actions: {
    didTransition() {
      document.title = 'Custom transition title';
    },

    createProject() {
      var route = this,
          ctrl = this.get('controller');

      var project = this.store.createRecord('project', {
        title: ctrl.get('title')
      });

      project.save().then(function() {
        ctrl.set('title', '');
        route.transitionTo('projects.project.tasks', project);
      });
    },
  }
});
