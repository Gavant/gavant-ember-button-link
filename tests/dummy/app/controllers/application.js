import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class Application extends Controller {
    @action
    linkAction() {
        // eslint-disable-next-line no-console
        console.log('link clicked!');
    }
}
