import DS from 'ember-data';

export default DS.Model.extend({
  items: DS.hasMany('item'),
  
});
