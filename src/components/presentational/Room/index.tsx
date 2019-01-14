import * as React from "react";
import { CoordinatesOnMap } from "../../../utils/Models";

interface Size {
  width: number;
  height: number;
}

type RoomT = {
  coordinates: CoordinatesOnMap;
  size: Size;
};

const Room = ({ coordinates, size }: RoomT) => (
  <React.Fragment>
    <rect
      x={coordinates.x}
      y={coordinates.y}
      width={size.width}
      height={size.height}
      style={{ stroke: "#26c6da", strokeWidth: 1, fill: "grey" }}
    />
  </React.Fragment>
);
export default Room;
