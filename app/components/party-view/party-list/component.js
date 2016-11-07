import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete() {
      return this.sendAction('deleteList', this.get('list'));

    },
    edit() {
      return this.sendAction('editList', this.get('list'));

    },
  },
});
