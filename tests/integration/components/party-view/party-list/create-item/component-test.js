import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('party-view/party-list/create-item', 'Integration | Component | party view/party list/create item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{party-view/party-list/create-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#party-view/party-list/create-item}}
      template block text
    {{/party-view/party-list/create-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
