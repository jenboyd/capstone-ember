import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // return this.get('store').createRecord('party', {});
  },

  actions: {
    createParty(data) {
      let party = this.get('store').createRecord('party', data);
      party.save()
      .then(()=>this.transitionTo('parties'));
    },

    cancelCreateParty(party) {
      party.rollbackAttributes();
      this.transitionTo('parties');
    },
  },
});
