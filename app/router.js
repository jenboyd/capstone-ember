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
  this.route('parties');
  // this.route('party', { path: 'parties/:party_id' }, function () {
  //   // this.route('edit');
  // });

  this.route('party', { path: 'parties/:party_id' });

  this.route('party.edit', { path: '/parties/:party_id/edit' });

  this.route('create-party');
  this.route('edit-list', { path: '/parties/:party_id/edit-list' });

});

export default Router;
