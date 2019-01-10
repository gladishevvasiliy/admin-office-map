import React from "react";
import DraggableWrapper from "../../containers/DraggableWrapper";
import { reduxState } from "../../../utils/Models";
import Thing from "../../presentational/Thing";
import {
  rotateThing,
  removeThing,
  changePosition
} from "../../../actions/index";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { DraggableEventHandler, DraggableData } from "react-draggable";

import "./style.css";

type AddThingsContainerActions = {
  actions: {
    changePosition: Function;
    rotateThing: Function;
    removeThing: Function;
  };
};

class MapContainer extends React.Component<
  AddThingsContainerActions & reduxState
> {
  handleDrag: DraggableEventHandler = (e, data: DraggableData) => {
    if (data.x > 250) {
      data.node.style.background = "red";
    }
    if (data.x <= 250) {
      data.node.style.background = "grey";
    }
  };

  handleStop: DraggableEventHandler = (e, data: DraggableData) => {
    const { actions } = this.props;
    const { node } = data;
    const thingId = Number(node.id.match(/\d+/gm)[0]);
    if (thingId === null) return;
    actions.changePosition(thingId, data.lastX, data.lastY);
  };

  render() {
    const { things, actions } = this.props;
    return (
      <div className="map">
        {things.map(({ coordinates, id, position, type, userId }) => {
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
                  userId={userId}
                />
              </div>
            </DraggableWrapper>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: reduxState) => ({
  things: state.things
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(
    { rotateThing, changePosition, removeThing },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
