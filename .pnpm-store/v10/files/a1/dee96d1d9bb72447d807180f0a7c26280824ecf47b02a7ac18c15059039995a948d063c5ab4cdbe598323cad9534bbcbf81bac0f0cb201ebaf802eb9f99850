/*! LICENSE: range-parser.js.LICENSE.txt */
import { __webpack_require__ } from "./1~rslib-runtime.js";
__webpack_require__.add({
    "../../node_modules/.pnpm/range-parser@1.2.1/node_modules/range-parser/index.js" (module) {
        function combineRanges(ranges) {
            for(var ordered = ranges.map(mapWithIndex).sort(sortByRangeStart), j = 0, i = 1; i < ordered.length; i++){
                var range = ordered[i], current = ordered[j];
                range.start > current.end + 1 ? ordered[++j] = range : range.end > current.end && (current.end = range.end, current.index = Math.min(current.index, range.index));
            }
            ordered.length = j + 1;
            var combined = ordered.sort(sortByRangeIndex).map(mapWithoutIndex);
            return combined.type = ranges.type, combined;
        }
        function mapWithIndex(range, index) {
            return {
                start: range.start,
                end: range.end,
                index: index
            };
        }
        function mapWithoutIndex(range) {
            return {
                start: range.start,
                end: range.end
            };
        }
        function sortByRangeIndex(a, b) {
            return a.index - b.index;
        }
        function sortByRangeStart(a, b) {
            return a.start - b.start;
        }
        module.exports = function rangeParser(size, str, options) {
            if ('string' != typeof str) throw TypeError('argument str must be a string');
            var index = str.indexOf('=');
            if (-1 === index) return -2;
            var arr = str.slice(index + 1).split(','), ranges = [];
            ranges.type = str.slice(0, index);
            for(var i = 0; i < arr.length; i++){
                var range = arr[i].split('-'), start = parseInt(range[0], 10), end = parseInt(range[1], 10);
                isNaN(start) ? (start = size - end, end = size - 1) : isNaN(end) && (end = size - 1), end > size - 1 && (end = size - 1), isNaN(start) || isNaN(end) || start > end || start < 0 || ranges.push({
                    start: start,
                    end: end
                });
            }
            return ranges.length < 1 ? -1 : options && options.combine ? combineRanges(ranges) : ranges;
        };
    }
}), __webpack_require__("../../node_modules/.pnpm/range-parser@1.2.1/node_modules/range-parser/index.js");
