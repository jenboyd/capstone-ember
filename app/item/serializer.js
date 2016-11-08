import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalize (model, response) {
    response.text = response.content;
    delete response.content;

    return this._super(model, response);
  },
});
