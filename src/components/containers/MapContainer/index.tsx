import React from "react";

import DraggableWrapper from "../../containers/DraggableWrapper";
import * as Types from "../../../utils/Models";
import Thing from "../../presentational/Thing";
import { rotateThing, changePosition } from "../../../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./style.css";

// const thingsInOffice: Array<Types.Thing> = [
//   {
//     id: 1,
//     type: "table",
//     coordinates: { x: 0, y: 0 },
//     position: "vertical",
//     person: { name: "Ivan Petrov", username: "ivan.petrov" }
//   },
//   {
//     id: 2,
//     type: "table",
//     coordinates: { x: 50, y: 50 },
//     position: "horisontal",
//     person: { name: "Ivan Petrov", username: "ivan.petrov" }
//   }
// ];

class MapContainer extends React.Component {
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
    const { actions } = this.props;
    actions.changePosition(data.node.id, data.lastX, data.lastY);
    // const movedObject = thingsInOffice.find(
    //   item => `table-${item.id}` === data.node.id
    // );

    // movedObject.coordinates = { x: data.lastX, y: data.lastY };
  };

  /*
       const NewThing = {
       position: { x: data.lastX, y: data.lastY },
       id: "1"
     }; 
  */

  render() {
    const { things } = this.props;
    return (
      <div className="map">
        {things.map(({ coordinates, id, position, type }) => {
          return (
            <DraggableWrapper
              coordinates={coordinates}
              id={id}
              type={type}
              handleDrag={this.handleDrag}
              handleStop={this.handleStop}
              key={id}
            >
              <div
                className={`${type} ${type}-${id} ${position}`}
                id={`${type}-${id}`}
              >
                <Thing id={id} type={type} position={position} />
              </div>
            </DraggableWrapper>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  things: state.things
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ rotateThing, changePosition }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
