"use strict";
module.exports = function (page) {
    return page.emulateTimezone('UTC').then(() => page);
};
