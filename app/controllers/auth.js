import Ember from 'ember';

export default Ember.Controller.extend({
  authManager: Ember.inject.service(),

  actions: {
    authenticate() {
      const { login, password } = this.getProperties('login', 'password');

      this.get('authManager').authenticate(login, password).then(() => {
        this.transitionToRoute('projects');
      });
    }
  }
});
