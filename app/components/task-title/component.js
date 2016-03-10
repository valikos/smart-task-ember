import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNameBindings: ['isCompleted:completed'],

  isCompleted: Ember.computed('task.completed', function() {
    return this.get('task.completed');
  })
});
