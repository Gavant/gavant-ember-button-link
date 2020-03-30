import Route from '@ember/routing/route';

export default class ModelTest extends Route {
    model(params) {
        return params.id;
    }
}
