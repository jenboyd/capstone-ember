import Ember from 'ember';

export default Ember.Component.extend({

  form: {
    text: null,

  },

  actions: {
    createItem () {
      let newItem = this.get('form');
      newItem.list = this.get('list');
      this.sendAction('createItem', newItem);
      this.set('form.text', null);
      this.sendAction('toggleForm');
    }
  },
});
