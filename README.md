gavant-ember-button-link
==============================================================================

A button component wrapper for `{{link-to}}`.

Installation
------------------------------------------------------------------------------

```
ember install gavant-ember-button-link
```

Usage
------------------------------------------------------------------------------

```js
{{button-link "some.route" (query-params foo="bar")
    type="primary"
    label="Some Link"
}}
```

Extends [gavant-ember-button-basic](https://github.com/Gavant/gavant-ember-button-basic), so it accepts all the same options, except:

- `action`
- `bubbles`


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd gavant-ember-button-link`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
