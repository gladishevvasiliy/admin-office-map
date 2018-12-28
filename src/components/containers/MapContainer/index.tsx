import React from "react";

import DraggableWrapper from "../../containers/DraggableWrapper";
import * as Types from "../../../utils/Models";
import Thing from "../../presentational/Thing";
import {
  rotateThing,
  removeThing,
  changePosition
} from "../../../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./style.css";

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
    const thingId = Number(data.node.id.match(/\d+/gm)[0]);
    actions.changePosition(thingId, data.lastX, data.lastY);
  };

  /*
       const NewThing = {
       position: { x: data.lastX, y: data.lastY },
       id: "1"
     }; 
  */

  render() {
    const { things, actions } = this.props;
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
                <Thing
                  id={id}
                  type={type}
                  position={position}
                  rotateThing={actions.rotateThing}
                  removeThing={actions.removeThing}
                />
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
  actions: bindActionCreators(
    { rotateThing, changePosition, removeThing },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
