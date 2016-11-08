import DS from 'ember-data';

export default DS.Model.extend({
  list: DS.belongsTo('list'),
  item: DS.belongsTo('item'),


});
