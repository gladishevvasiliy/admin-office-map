// import * as React from "react";
// import Draggable from "react-draggable";
// import Thing from "../../presentational/Thing/index";

// export default class DraggableWrapper extends React.Component {
//   render() {
//     const { position, id, angle, size, type } = this.props;

//     return (
//       <Draggable
//         axis="both"
//         handle={`.${type}-${id}`}
//         defaultPosition={position}
//         position={null}
//         grid={[25, 25]}
//         scale={1}
//         onDrag={this.handleDrag}
//         onStop={this.handleStop}
//         key={id}
//       >
//         {/* <Thing
//           position={position}
//           id={id}
//           angle={angle}
//           size={size}
//           type={type}
//         /> */}
//       </Draggable>
//     );
//   }
// }
