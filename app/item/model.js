import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('content'),
  list: DS.belongsTo('list'),
  party: DS.belongsTo('party')
});
