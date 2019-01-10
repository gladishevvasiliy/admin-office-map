import * as React from "react";
import { bindActionCreators, Dispatch, AnyAction, ActionCreator } from "redux";
import { connect } from "react-redux";
import { addThing } from "../../../actions/index";
import AddThingForm from "../../presentational/AddThingForm";
import { reduxState } from "../../../utils/Models";

type formData = {
  formFirstname: {
    value: string;
  };
  formLastname: {
    value: string;
  };
  formUsername: {
    value: string;
  };
};

interface ITAddThingsContainer {
  actions: {
    addThing: Function;
  };
}

interface InputDataEvent extends Event {
  target: EventTarget & formData;
}

class AddThingsContainer extends React.Component<ITAddThingsContainer> {
  handleForm = selectedUser => {
    console.log(selectedUser);
    // const { formFirstname, formLastname, formUsername } = e.target;
    const { actions } = this.props;

    const newThing = {
      userId: selectedUser.value,
      type: "table",
      coordinates: { x: 0, y: 0 },
      position: "horizontal"
    };
    actions.addThing(newThing);
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <AddThingForm handleForm={this.handleForm} users={users} />
      </div>
    );
  }
}

const mapStateToProps = (state: reduxState) => ({
  things: state.things,
  users: Array.from(state.users, user => ({
    value: user.userId,
    label: user.title
  }))
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators({ addThing }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddThingsContainer);
