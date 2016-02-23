import Ember from 'ember';

export default Ember.Controller.extend({
  taskCreationStarted: false,

  isAddButtonDisabled: Ember.computed('title', function() {
    return Ember.isEmpty(this.get('title'));
  }),

  noTasks: Ember.computed('model.tasks.length', function() {
    return this.get('model.tasks.length') === 0;
  }),

  canCreateTask: Ember.computed('taskCreationStarted', 'model.tasks.length', function() {
    return this.get('taskCreationStarted') || this.get('model.tasks.length');
  }),

  actions: {
    enableTaskCreation: function() {
      this.set('taskCreationStarted', true);
    },
  }
});
