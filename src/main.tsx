import * as component from "./counter";

import { react } from "elm-ts";
import { render } from "react-dom";

const main = react.program(component.init(), component.update, component.view);

react.run(main, dom => render(dom, document.getElementById("root")!));
