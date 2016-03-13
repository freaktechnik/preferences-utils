/**
 * Open the preferences of the extension. Can serve as drop-on replacement of
 * sdk/preferences/utils.
 * @author Martin Giger
 * @license MPL-2.0
 * @module preferences-utils
 */
"use strict";

const { getMostRecentBrowserWindow } = require("sdk/window/utils");
const self = require("sdk/self");

/**
 * @typedef {Object} Addon
 * @property {string} [id]
 */
/**
 * Opens the add-ons manager with the preferences of the extension in the
 * current window.
 * @argument {module:preference-utils~Addon} [addon]
 */
exports.open = (addon = {}) => {
    const id = addon.id || self.id;
    getMostRecentBrowserWindow().BrowserOpenAddonsMgr('addons://detail/'+self.id+'/preferences');
};
