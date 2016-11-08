import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  item: DS.hasMany('item', {async: true}),
  party: DS.belongsTo('party')
});
