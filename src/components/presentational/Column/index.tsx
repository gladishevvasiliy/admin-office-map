import * as React from "react";
import { CoordinatesOnMap } from "../../../utils/Models";

type ColumnT = {
  coordinates: CoordinatesOnMap;
};

const Column = ({ coordinates }: ColumnT) => (
  <rect
    x={coordinates.x}
    y={coordinates.y}
    width="30px"
    height="30px"
    style={{ stroke: "#26c6da", strokeWidth: 1, fill: "grey" }}
  />
);
export default Column;
