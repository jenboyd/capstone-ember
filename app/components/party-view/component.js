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

   deleteItem (item) {
     this.sendAction('deleteItem', item);
   },

   edit () {
     this.sendAction('editParty', this.get('party'));
   },

   editList (list) {
     this.sendAction('editList', list);
   },

   createList () {
     let newList = this.get('form');
     newList.party = this.get('party');
     this.sendAction('createList', newList);
     this.set('form.name', null);

   },

   createItem (newItem) {
     this.sendAction('createItem', newItem);
     console.log("party-view component");
   },
 },
});
