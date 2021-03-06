import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('polycular-bar-chart', 'Integration | Component | polycular bar chart', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{polycular-bar-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#polycular-bar-chart}}
      template block text
    {{/polycular-bar-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
