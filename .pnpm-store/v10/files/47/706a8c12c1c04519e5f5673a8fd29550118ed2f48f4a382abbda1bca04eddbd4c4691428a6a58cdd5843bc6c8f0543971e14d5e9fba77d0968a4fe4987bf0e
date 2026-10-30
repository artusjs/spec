import { p as parser, f as flowDb } from "./flowDb-f37475bf.js";
import { f as flowRendererV2, g as flowStyles } from "./styles-f7f4f728.js";
import { u as setConfig } from "./mermaid-d73f18bb.js";
import "./graph-00ca1ddf.js";
import "./index-f8e20f6b.js";
import "./layout-09aca9f2.js";
import "./clone-efe1c6aa.js";
import "./edges-568b5f94.js";
import "./createText-2822bf05.js";
import "./line-8a001a24.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-f19f13a4.js";
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
