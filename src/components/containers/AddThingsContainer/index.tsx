import * as React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { addThing } from "../../../actions/index";
import ChooseUserForm from "../../presentational/ChooseUserForm";
import { reduxState, Thing } from "../../../utils/Models";
import { UserToSelect } from "../../../utils/Models";

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

interface IAddThingsContainerProps {
  actions: {
    addThing: Function;
  };
  things: Array<Thing>;
}

class AddThingsContainer extends React.Component<IAddThingsContainerProps> {
  handleForm = (selectedUser: UserToSelect) => {
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
    const { users, things } = this.props;
    return (
      <div>
        <ChooseUserForm
          handleForm={this.handleForm}
          users={users}
          things={things}
        />
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
