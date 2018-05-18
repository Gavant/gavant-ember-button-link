import LinkComponent from '@ember/routing/link-component';
import Button from 'gavant-ember-button-basic/mixins/button';
import layout from 'gavant-ember-button-basic/templates/components/button-basic';

export default LinkComponent.extend(Button, {
  layout
});
