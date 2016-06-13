import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['glyphicon', 'glyphicon-trash', 'delete-task'],

  openModal: false,

  actions: {
    submit() {
      this.sendAction('setAction', this.get('task'));
    }
  },

  click() {
    this.set('openModal', true);
  }
});
