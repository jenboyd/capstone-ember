import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('party', params.party_id);
  },

  actions: {
    createList (newList) {
      let list = this.get('store').createRecord('list', newList);
      list.save();
    },

    editList (list) {
      this.transitionTo('edit-list', list);
    },

    deleteList (list) {
      list.destroyRecord();
    },

    deleteParty (party) {
      party.destroyRecord();
      this.transitionTo('parties');

    },

    editParty (party) {
      this.transitionTo('party.edit', party);
    },
  },
});
