"use strict";
exports.__esModule = true;
exports.makeParser = exports.makeDefault = void 0;
var replaceMatches_1 = require("./replaceMatches");
function makeDefault(str) {
    return {
        userAgent: str,
        family: "Other",
        brand: null,
        model: null
    };
}
exports.makeDefault = makeDefault;
function makeParser(obj) {
    var regexp = new RegExp(obj.regex, obj.regex_flag || "");
    var deviceRep = obj.device_replacement;
    var brandRep = obj.brand_replacement;
    var modelRep = obj.model_replacement;
    function parser(str) {
        var m = str.match(regexp);
        if (!m) {
            return null;
        }
        return {
            userAgent: str,
            family: deviceRep === '' ? '' : (deviceRep ? (0, replaceMatches_1.replaceMatches)(deviceRep, m) : m[1]) || "Other",
            brand: brandRep === '' ? '' : (brandRep ? (0, replaceMatches_1.replaceMatches)(brandRep, m) : null) || null,
            model: modelRep === '' ? '' : (modelRep ? (0, replaceMatches_1.replaceMatches)(modelRep, m) : m[1]) || null
        };
    }
    return parser;
}
exports.makeParser = makeParser;
//# sourceMappingURL=device.js.map