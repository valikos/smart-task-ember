import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('projects.project');
  },

  actions: {
    save() {
      var controller = this.get('controller'),
          project = controller.get('model');

      return project.save();
    },

    willTransition(transition) {
      var controller = this.get('controller'), leave;

      if (controller.get('isEditin')) {
        leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");

        if (leave) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    }
  }
});
