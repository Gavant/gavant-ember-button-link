gavant-ember-button-link
==============================================================================

A lightweight button component wrapper for `<LinkTo>` that extends [@gavant/ember-button-basic](https://github.com/Gavant/gavant-ember-button-basic).


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install @gavant/ember-button-link
```

**NOTE:** This addon uses FontAwesome 5 ([@fortawesome/ember-fontawesome](https://github.com/FortAwesome/ember-fontawesome)) for icon support. However it does NOT install any icon set packages. You must install these separately, following the addon's installation guide, e.g.
```
yarn add --dev @fortawesome/free-solid-svg-icons
```

Usage
------------------------------------------------------------------------------

An example `<ButtonLink>` usage, with all available arguments used. Note that all arguments provided by the base `<Button>` component are supported too, but are not all listed here. See the addon's [usage documentation](https://github.com/Gavant/gavant-ember-button-basic#usage) for details. `@route` is the only required argument.

```hbs
<ButtonLink
    @label={{string}}
    @models={{array}}
    @query={{object}}
    @replace={{boolean}}
    @currentWhen={{boolean}}
    @activeClass={{boolean}}
/>

<ButtonLink
    @route={{string}}
    @models={{array}}
    @query={{object}}
    @replace={{boolean}}
    @currentWhen={{boolean}}
    @activeClass={{boolean}}
>
    Look ma, block content!
</ButtonLink>
```

**IMPORTANT:** Unlike the built-in `<LinkTo>` component, `<ButtonLink>` does NOT support the singular `@model={{...}}` argument, only `@models={{..}}`. This is due to a current limitation with the Glimmer component structure (which may go away in the future), and the fact that `<LinkTo>` does not allow both arguments to be passed in, even if one is `null` or `undefined`. 

So in cases where you only have a single model to pass in, just use the built-in `{{array}}` helper to format it as an array of 1 element, i.e. `@models={{array myModel}}`.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
