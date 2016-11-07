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

    deleteParty (party) {
      party.destroyRecord();
      this.transitionTo('parties');

    },

    deleteList (list) {
      list.destroyRecord();
    },

    editParty (party) {
      this.transitionTo('party.edit', party);
    },

    editList (list) {
      list.destroyRecord();
    },
  },
});
