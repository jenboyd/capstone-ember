import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('parties', function() {});
  this.route('party', { path: 'parties/:party_id' }, function () {
    this.route('edit');
  });

  this.route('create-party');
});

export default Router;
