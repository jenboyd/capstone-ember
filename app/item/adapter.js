import ApplicationAdapter from 'capstone-ember/application/adapter';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    let api = this.get('host');

    // serialize() inside of an adapter is an alias for serialize() inside the
    // sibling serializer
    //
    // useful fiction:
    // serialize () {
    //   this.get('serializer').serialize(...arguments);
    // }
    let serialized = this.serialize(record, { includeId: true });
    let listId = serialized.list_id;
    let url = `${api}/items`;

    let data = { item: serialized };

    return this.ajax(url, 'POST', { data });
  },
});
