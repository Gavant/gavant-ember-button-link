import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | button-link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{button-link "Test" "test"}}`);

    assert.equal(this.element.textContent.trim(), 'Test');

    // Template block usage:
    await render(hbs`
      {{#button-link "test"}}
        template block text
      {{/button-link}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
