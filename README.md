#Preferences Utils

[![Greenkeeper badge](https://badges.greenkeeper.io/freaktechnik/preferences-utils.svg)](https://greenkeeper.io/)
Opens the preferences of a Firefox extension. Can serve as drop-in replacement for sdk/preferences/utils.

## Usage
### Installation
Install this module in your extension directory using `npm i --save preferences-utils`.

### Open Preferences
The module exposes one method: `open(addon)` if `addon` is omitted, the preferences for the extension are opened. `addon` is an object and should have an `id` property, specifying the add-on's ID.

## Example
```js
const { open } = require("preferences-utils");

// Open the preferences of this extension.
open();
```
