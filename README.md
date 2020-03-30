gavant-ember-button-link
==============================================================================

A button component wrapper for `{{link-to}}`.


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

Usage
------------------------------------------------------------------------------

```js
{{button-link "Some Link" "some.route" (query-params foo="bar") type="primary"}}
```

```js
{{#button-link "some.route" type="primary"}}
    Some Link
{{/button-link}}
```

Extends [gavant-ember-button-basic](https://github.com/Gavant/gavant-ember-button-basic), so it accepts all the same options, except:

- `action`
- `bubbles`

Also, when using the component in inline form, you **CANNOT** use the `label` option, you must pass in the label as the 1st positional component param, e.g. `{{button-link "Label" "route"}}`.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
