import * as React from "react";
import Draggable from "react-draggable";
import * as Types from "../../../utils/Models";
import Thing from "../../presentational/Thing/index";

export default class DraggableWrapper extends React.Component {
  render() {
    const {
      coordinates,
      id,
      type,
      handleDrag,
      handleStop,
      children
    } = this.props;

    return (
      <Draggable
        axis="both"
        handle={`.${type}-${id}`}
        defaultPosition={coordinates}
        position={null}
        grid={[25, 25]}
        scale={1}
        onDrag={handleDrag}
        onStop={handleStop}
        key={id}
      >
        {children}
      </Draggable>
    );
  }
}
