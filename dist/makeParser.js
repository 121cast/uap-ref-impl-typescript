"use strict";
exports.__esModule = true;
exports.makeParser = void 0;
function makeParser(regexes, parserMaker, defaultObjMaker) {
    var parsers = regexes.map(parserMaker);
    function parser(str) {
        var obj;
        if (typeof str === "string") {
            for (var i = 0, length_1 = parsers.length; i < length_1; i++) {
                obj = parsers[i](str);
                if (obj) {
                    return obj;
                }
            }
        }
        return defaultObjMaker(str);
    }
    return parser;
}
exports.makeParser = makeParser;
//# sourceMappingURL=makeParser.js.map