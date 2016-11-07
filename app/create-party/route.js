import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('party', {});
  },

  actions: {
    createParty(data) {
      data.party.save()
      .then(()=>this.transitionTo('parties'));
    },

    cancelCreateParty(party) {
      party.rollbackAttributes();
      this.transitionTo('parties');
    },
  },
});
