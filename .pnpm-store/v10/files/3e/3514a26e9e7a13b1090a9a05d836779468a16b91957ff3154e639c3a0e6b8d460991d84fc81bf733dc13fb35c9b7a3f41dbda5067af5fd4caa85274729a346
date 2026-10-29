import { p as parser, f as flowDb } from "./flowDb-c6c81e3f.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-d45a18b0.js";
import { p as setConfig } from "./mermaid-7ea9cbd6.js";
import "d3";
import "dagre-d3-es/src/dagre-js/label/add-html-label.js";
import "dagre-d3-es/src/graphlib/index.js";
import "./index-5325376f.js";
import "dagre-d3-es/src/dagre/index.js";
import "dagre-d3-es/src/graphlib/json.js";
import "./edges-96097737.js";
import "./createText-1719965b.js";
import "mdast-util-from-markdown";
import "ts-dedent";
import "khroma";
import "dayjs";
import "@braintree/sanitize-url";
import "dompurify";
import "lodash-es/memoize.js";
import "lodash-es/merge.js";
import "stylis";
import "lodash-es/isEmpty.js";
const diagram = {
  parser,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
