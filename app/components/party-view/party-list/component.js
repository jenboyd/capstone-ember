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

    createItem () {
      let newItem = this.get('form');
      newItem.list = this.get('list');
  
      this.sendAction('createItem', newItem);
      this.set('form.text', null);

    },
  },
});
