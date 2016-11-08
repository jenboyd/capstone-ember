import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('content'),
  list: DS.belongsTo('list', {async: true}),
  party: DS.belongsTo('party', {async: true})
});
