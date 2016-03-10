import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['glyphicon', 'glyphicon-trash', 'delete-task'],

  openModal: false,

  actions: {
    submit: function() {
      this.sendAction('setAction', this.get('task'));
    }
  },

  click: function() {
    this.set('openModal', true)
  }
});
