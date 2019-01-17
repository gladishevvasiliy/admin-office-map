import React from "react";
import DraggableWrapper from "../../containers/DraggableWrapper";
import {
  User,
  reduxState,
  ThingType,
  UserToSelect,
  IPermanent
} from "../../../utils/Models";
import Thing from "../../presentational/Thing";
import {
  rotateThing,
  removeThing,
  changePosition,
  changeUser
} from "../../../actions/index";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { DraggableEventHandler, DraggableData } from "react-draggable";
import { Modal, Button } from "react-bootstrap";
import EditTable from "../../../components/containers/EditTable";
import Permanent from "../../presentational/Permanent";

import "./style.css";

type AddThingsContainerActions = {
  actions: {
    changePosition: Function;
    rotateThing: Function;
    removeThing: Function;
    changeUser: Function;
  };
};

type StateFromProps = {
  things: Array<ThingType>;
  permanent: IPermanent;
  users: Array<UserToSelect>;
};

type State = {
  showModalEditTable: boolean;
  tableToEditingId: number | null;
};

class MapContainer extends React.Component<
  AddThingsContainerActions & StateFromProps & State
> {
  constructor(props: AddThingsContainerActions & StateFromProps & State) {
    super(props);

    this.state = {
      showModalEditTable: false,
      tableToEditingId: null
    };
  }

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

  showModalEditTable = (id: number) => {
    this.setState({ showModalEditTable: true, tableToEditingId: id });
  };

  handleCloseEditTable = () => {
    this.setState({ showModalEditTable: false });
  };

  render() {
    const { things, permanent, users, actions } = this.props;
    return (
      <React.Fragment>
        <Permanent data={permanent} />
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
                    showModalEditTable={this.showModalEditTable}
                    userId={userId}
                  />
                </div>
              </DraggableWrapper>
            );
          })}
        </div>
        <Modal
          show={this.state.showModalEditTable}
          onHide={this.handleCloseEditTable}
        >
          <Modal.Header closeButton>
            <Modal.Title>Редактирование</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Выберите нового пользователя для этого стола</h5>
            <EditTable
              users={users}
              things={things}
              changeUser={actions.changeUser}
              thingId={this.state.tableToEditingId}
              handleCloseEditTable={this.handleCloseEditTable}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseEditTable}>Отмена</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: reduxState) => ({
  things: state.levelData.levels[state.levelData.currentOfficeNum].things,
  permanent: state.levelData.levels[state.levelData.currentOfficeNum].permanent,
  users: Array.from(state.users, (user: User) => ({
    value: user.userId,
    label: user.title
  }))
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(
    { rotateThing, changePosition, removeThing, changeUser },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
