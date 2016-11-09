import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save (list) {
      list.save();
      history.back();
    },

    cancel (list) {
      list.rollbackAttributes();
      history.back();
    }
  }
});
