import Ember from 'ember';

export default Ember.Component.extend({
  newParty: {},

  actions: {
    save () {
      let data = this.get('newParty');
      data.party = this.get('party');
      this.sendAction('save', data);
      //reset form
      this.set('newParty.name', null);
      this.set('newParty.date', null);
      this.set('newParty.location', null);
      this.set('newParty', {});
    },

    cancel () {
      this.sendAction('cancel', this.get('party'));
    },
  },
});
