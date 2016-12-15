import Ember from 'ember';

export default Ember.Component.extend({

  form: {
    text: null,

  },

  actions: {
    delete() {
      return this.sendAction('deleteList', this.get('list'));
    },

    deleteItem (item) {
      return this.sendAction('deleteItem', item);
    },

    edit() {
      return this.sendAction('editList', this.get('list'));
    },

    createItem (newItem) {
       this.sendAction('createItem', newItem);
    },

    toggleForm() {
      this.toggleProperty('isOpen');
    }

  },
});
