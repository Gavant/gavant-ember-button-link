import LinkComponent from '@ember/routing/link-component';
import { alias } from '@ember/object/computed';
import Button from 'gavant-ember-button-basic/mixins/button';
import layout from 'gavant-ember-button-basic/templates/components/button-basic';

export default LinkComponent.extend(Button, {
  layout,
  //to keep parity with LinkComponent, when using the component in inline form,
  //the label can be passed in as the 1st positional param e.g. {{button-link "Label" "some.route"}}
  label: alias('linkTitle')
});
