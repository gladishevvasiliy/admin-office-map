import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addThing } from "../../../actions/index";
import AddThingForm from "../../presentational/AddThingForm";

class AddThingsContainer extends React.Component {
  handleForm = (e: Event) => {
    e.preventDefault();
    const { formFirstname, formLastname } = e.target;
    const { actions } = this.props;
    const newThing = {
      type: "table",
      coordinates: { x: 0, y: 0 },
      position: "horizontal",
      person: { name: formFirstname.value, username: formLastname.value }
    };
    actions.addThing(newThing);
  };

  render() {
    const { actions } = this.props;

    return (
      <div>
        <AddThingForm handleForm={this.handleForm} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  things: state.things
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addThing }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddThingsContainer);
