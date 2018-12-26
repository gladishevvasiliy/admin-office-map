import React from "react";
import Draggable from "react-draggable";
import * as Types from "../../../utils/Models";
import "./style.css";

const thingsInOffice: Array<Types.Thing> = [
  {
    position: { x: 25, y: 0 },
    // angle: 0, // не получается rotate в transform, сбрасывается при пеермещении
    type: "table",
    size: { height: 1, width: 2 },
    id: 1,
    person: { name: "Ivan Petrov", username: "ivan.petrov" }
  },
  {
    position: { x: 50, y: 50 },
    // angle: 90,
    type: "table",
    size: { height: 2, width: 1 },
    id: 2,
    person: { name: "Ivan Petrov", username: "ivan.petrov" }
  }
];

export default class MapContainer extends React.Component {
  handleDrag: Types.DraggableEventHandler = (
    e: MouseEvent,
    data: Types.DraggableData
  ) => {
    if (data.x > 250) {
      data.node.style.background = "red";
    }
    if (data.x <= 250) {
      data.node.style.background = "grey";
    }
  };

  handleStop: Types.DraggableEventHandler = (
    e: MouseEvent,
    data: Types.DraggableData
  ) => {
    console.log(data.node);
    // const NewThing = {
    //   position: { x: data.lastX, y: data.lastY },
    //   id: "1"
    // };

    const movedObject = thingsInOffice.find(
      item => `table-${item.id}` === data.node.id
    );

    movedObject.position = { x: data.lastX, y: data.lastY };
    console.log(thingsInOffice);
  };

  render() {
    return (
      <div className="map">
        {thingsInOffice.map(({ position, id, size }) => {
          return (
            <Draggable
              axis="both"
              handle={`.table-${id}`}
              defaultPosition={position}
              position={null}
              grid={[25, 25]}
              scale={1}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
              key={id}
            >
              <div
                className={`table table-${id}`}
                key={id}
                id={`table-${id}`}
                style={{
                  width: size.width * 25 + "px",
                  height: size.height * 25 + "px"
                }}
              >
                table
              </div>
            </Draggable>
          );
        })}
      </div>
    );
  }
}
