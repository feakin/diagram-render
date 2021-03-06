# @feakin/parser

- Element - is the data output from the parser, e.g. Mermaid flow parser.
- Layout Algorithm - is the algorithm that is used to layout the diagram.
- Layout - the layout transform interface.
- Renderer - the renderer interface.
  - Point - is the basic type. 
  - Shapes - the shapes interface, like `rect`, `circle`, `text`.
    - samples: Rectangle, Circle, Polygon, Hexagon.
  - Geometry - the geometry interface, `line`, `polygon`.
    - samples: Arrow, Line, Path, Polyline, Marker, Connection.
  - Other Nodes:
    - samples: Text, Image, Label, Group, GroupContainer, GroupContainer.

flow based on: [https://github.com/mermaid-js/mermaid](https://github.com/mermaid-js/mermaid)

## License

@2022 This code is distributed under the MPL license. See `LICENSE` in this directory.
