import ApplicationAdapter from 'capstone-ember/application/adapter';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    let api = this.get('host');
    let serialized = this.serialize(record, { includeId: true });
    let partyId = serialized.party_id;
    let url = `${api}/parties/${partyId}/lists`;

    let data = { list: serialized };

    return this.ajax(url, 'POST', { data });
  },

});
