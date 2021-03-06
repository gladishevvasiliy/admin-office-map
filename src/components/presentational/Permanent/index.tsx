// drawing officemap by svg. Create polygon by points and fill it cells 15x15 px
import * as React from "react";
import Column from "../Column";
import Room from "../Room";
import "./style.css";
import { IPermanent } from "../../../utils/Models";

type PermanentT = {
  data: IPermanent;
};
const Permanent = ({ data }: PermanentT) => (
  <svg
    className="officeBorder"
    height={data.officeBorder.heightSvg}
    width={data.officeBorder.widthSvg}
  >
    <defs>
      <pattern
        id="cell"
        x="0"
        y="0"
        width="5"
        height="5"
        patternUnits="userSpaceOnUse"
      >
        <rect
          x="0"
          y="0"
          width="5px"
          height="5px"
          style={{ stroke: "#26c6da", strokeWidth: 0.5, fill: "none" }}
        />
      </pattern>
    </defs>
    <polygon
      points={data.officeBorder.pointsForPolygon}
      style={{ fill: "url(#cell)", stroke: "#000" }}
    />
    {data.columns.map((item, index) => (
      <Column key={index} coordinates={{ x: item.x, y: item.y }} />
    ))}
    {data.rooms.map((item, index) => (
      <Room
        key={index}
        coordinates={{ x: item.coordinates.x, y: item.coordinates.y }}
        size={{ width: item.width, height: item.height }}
      />
    ))}
  </svg>
);
export default Permanent;
