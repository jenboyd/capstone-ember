import ApplicationSerializer from 'capstone-ember/application/serializer';

export default ApplicationSerializer.extend({
  serialize () {
    let serialized = this._super(...arguments);
    console.log("serialized text is:", serialized.text);

    serialized.content = serialized.text;
    console.log("serialized content is:", serialized.content);
    delete serialized.text;

    return serialized;
  },

  normalize (model, response) {
    response.text = response.content;
    delete response.content;

    return this._super(model, response);
  },
});
