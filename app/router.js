import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects', function() {
    this.route('project', { path: ':project_id' }, function() {
      this.route('details');
      this.route('tasks');
    });
  });
});

export default Router;
