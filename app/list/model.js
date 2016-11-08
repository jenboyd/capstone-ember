import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  item_instance: DS.hasMany('item_instance', {async: true}),
  item: DS.hasMany('item', {async: true}),
  party: DS.belongsTo('party')
});
