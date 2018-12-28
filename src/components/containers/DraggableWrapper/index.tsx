import * as React from "react";
import * as Draggable from "react-draggable";
import * as Types from "../../../utils/Models";

interface IDraggableWrapper {
  coordinates: Types.Coordinates;
  id: number;
  type: string;
  handleDrag: Draggable.DraggableEventHandler;
  handleStop: Draggable.DraggableEventHandler;
  children: Object;
}

class DraggableWrapper extends React.Component<IDraggableWrapper> {
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
        grid={[15, 15]}
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
export default DraggableWrapper;
