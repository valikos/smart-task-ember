import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['task-status-toggle'],

  isCompleted: Ember.computed('task.completed', function() {
    return this.get('task.completed');
  }),

  actions: {
    changed() {
      this.sendAction('setAction', this.get('task'));
    }
  }
});
