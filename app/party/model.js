import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  date: DS.attr('date'),
  location: DS.attr('string'),
  lists: DS.hasMany('list'),
  item_instance: DS.hasMany('item_instance', {async: true}),
  item: DS.hasMany('item', {async: true})


});
