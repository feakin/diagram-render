// Type definitions for Cytoscape.js 3.19
// Project: http://js.cytoscape.org/
// Definitions by:  Fabian Schmidt and Fred Eisele <https://github.com/phreed>
//                  Shenghan Gao <https://github.com/wy193777>
//                  Yuri Pereira Constante <https://github.com/ypconstante>
//                  Jan-Niclas Struewer <https://github.com/janniclas>
//                  Andrej Kirejeŭ <https://github.com/gsbelarus>
//                  Peter Ferrarotto <https://github.com/peterjferrarotto>
//                  Xavier Ho <https://github.com/spaxe>
//                  Fredrik Sandström <https://github.com/Veckodag>
//                  Jan Zak <https://github.com/zakjan>
//                  Johan Svensson <https://github.com/jsve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Translation from Objects in help to Typescript interface.
// http://js.cytoscape.org/#notation/functions
// TypeScript Version: 2.3

export interface ElementsDefinition {
  nodes: NodeDefinition[];
  edges: EdgeDefinition[];
}

interface Position {
  x: number;
  y: number;
}

/**
 * Usually temp or nonserialisable data can be stored.
 * http://js.cytoscape.org/#notation/elements-json
 * http://js.cytoscape.org/#cy.scratch
 * http://js.cytoscape.org/#ele.scratch
 */
type Scratchpad = any;
type ElementGroup = 'nodes' | 'edges';
type CssStyleDeclaration = any;

interface ElementDefinition {
  group?: ElementGroup | undefined;
  data: NodeDataDefinition | EdgeDataDefinition;
  /**
   * Scratchpad data (usually temp or nonserialisable data)
   */
  scratch?: Scratchpad | undefined;
  /**
   * The model position of the node (optional on init, mandatory after)
   */
  position?: Position | undefined;
  /**
   * can alternatively specify position in rendered on-screen pixels
   */
  renderedPosition?: Position | undefined;
  /**
   * Whether the element is selected (default false)
   */
  selected?: boolean | undefined;
  /**
   * Whether the selection state is mutable (default true)
   */
  selectable?: boolean | undefined;
  /**
   * When locked a node's position is immutable (default false)
   */
  locked?: boolean | undefined;
  /**
   * Wether the node can be grabbed and moved by the user
   */
  grabbable?: boolean | undefined;
  /**
   * a space separated list of class names that the element has
   */
  classes?: string | undefined;
  /**
   *  CssStyleDeclaration;
   */
  style?: CssStyleDeclaration | undefined;
  /**
   * you should only use `style`/`css` for very special cases; use classes instead
   */
  css?: any | undefined;
}

interface ElementDataDefinition {
  /**
   * elided id => autogenerated id
   */
  id?: string | undefined;
  position?: Position | undefined;
}

interface NodeDefinition extends ElementDefinition {
  data: NodeDataDefinition;
}

interface NodeDataDefinition extends ElementDataDefinition {
  id?: string | undefined;
  parent?: string | undefined;

  [key: string]: any;
}

interface EdgeDefinition extends ElementDefinition {
  data: EdgeDataDefinition;
}

interface EdgeDataDefinition extends ElementDataDefinition {
  id?: string | undefined;

  /**
   * the source node id (edge comes from this node)
   */
  source: string;
  /**
   * the target node id (edge goes to this node)
   */
  target: string;

  [key: string]: any;
}
