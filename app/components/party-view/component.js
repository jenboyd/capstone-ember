import Ember from 'ember';

export default Ember.Component.extend({

 form: {
   name: null,

 },

 actions: {

   delete() {
     return this.sendAction('deleteParty', this.get('party'));

   },

   deleteList (list) {
     this.sendAction('deleteList', list);
   },

   edit () {
     this.sendAction('editParty', this.get('party'));
   },

   createList () {
     let newList = this.get('form');
     newList.party = this.get('party');
     console.log("inside party-view component list is:", this.get('list'));
     console.log("inside party-view component party is:", this.get('party'));

     this.sendAction('createList', newList);

     this.set('form.name', null);

   },
 },
});
