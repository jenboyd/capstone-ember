import Ember from 'ember';

export default Ember.Component.extend({
  newParty: {
    name: null,
    date: null,
    location: null,
  },

  actions: {

    save () {

      let data = this.get('newParty');
      data.party = this.get('party');
      console.log(data);
      this.sendAction('save', data);
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
