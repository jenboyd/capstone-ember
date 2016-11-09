import ApplicationSerializer from 'capstone-ember/application/serializer';

export default ApplicationSerializer.extend({
  normalize (model, response) {
    response.text = response.content;
    delete response.content;

    return this._super(model, response);
  },
});
