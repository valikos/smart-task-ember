import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('projects.project');
  },

  resetController: function(controller) {
    controller.set('taskCreationStarted', false);
  },

  actions: {
    createTask() {
      var ctrl = this.get('controller'),
          project = this.modelFor('projects.project');

      var task = this.store.createRecord('task', {
        title: ctrl.get('title'),
        project: project
      });

      task.save().then(function() {
        ctrl.set('title', '');
      });
    },

    deleteTask(task) {
      task.destroyRecord();
    },

    toggleTaskStatus(task) {
      task.set('completed', !task.get('completed'));
      task.save();
    }
  }
});
