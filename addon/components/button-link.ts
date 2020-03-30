import Button, { ButtonArgs } from '@gavant/ember-button-basic/components/button';

// @see https://api.emberjs.com/ember/3.17/classes/LinkComponent/properties
// note that HTML attribute properties are omitted, as they can be passed through
// automatically, via Glimmer component's HTML attribute syntax
interface ButtonLinkArgs extends ButtonArgs {
    route: string;
    models?: any[];
    query?: object;
    replace?: boolean;
    currentWhen?: boolean;
    activeClass?: string;
}

export default class ButtonLink extends Button<ButtonLinkArgs> {
    /**
     * ember's <LinkTo> complains if you pass it a @models arg value that is not an array
     * but we dont want to require passing in that arg if the route needs no models so
     * just default it to an empty array
     */
    get models() {
        return this.args.models || [];
    }

    /**
     * The CSS class that is applied when the LinkTo's route is considered active
     * or the `currentWhen` arg evaluates to true. Can be removed entirely by
     * passing in an empty string
     */
    get activeClass() {
        return this.args.activeClass ?? 'active';
    }
}
