import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save (party) {
      party.save()
      .then((party) => { this.transitionTo('party', party); })
      ;
    },

    cancel (party) {
      party.rollbackAttributes();
      history.back();
    }
  }
});
