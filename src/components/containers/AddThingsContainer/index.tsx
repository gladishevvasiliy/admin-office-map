import * as React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Accordion, AccordionItem } from "react-sanfona";
import { addThing } from "../../../actions/index";
import AddTable from "../AddTable";
import AddOtherObject from "../AddOtherObject";
import "./style.css";

import {
  reduxState,
  ThingType,
  UserToSelect,
  User
} from "../../../utils/Models";

interface IAddThingsContainerProps {
  actions: {
    addThing: Function;
  };
  things: Array<ThingType>;
  users: Array<UserToSelect>;
}

class AddThingsContainer extends React.Component<IAddThingsContainerProps> {
  handleFormAddTable = (selectedUser: UserToSelect) => {
    const { actions } = this.props;

    const newThing = {
      userId: selectedUser.value,
      type: "table",
      coordinates: { x: 0, y: 0 },
      position: "horizontal"
    };
    actions.addThing(newThing);
  };

  handleFormAddOtherObject = ({ objectType, objectName }) => {
    const { actions } = this.props;
    const newThing = {
      objectName: objectName,
      type: objectType,
      coordinates: { x: 0, y: 0 },
      position: "horizontal"
    };
    actions.addThing(newThing);
  };

  render() {
    const { users, things } = this.props;
    return (
      <div>
        <Accordion>
          <AccordionItem title="Добавить стол">
            <div>
              <p>Выберите пользователя для нового стола</p>
              <AddTable
                handleForm={this.handleFormAddTable}
                users={users}
                things={things}
              />
            </div>
          </AccordionItem>
          <AccordionItem title="Добавить другой объект">
            <div>
              <AddOtherObject handleForm={this.handleFormAddOtherObject} />
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

const mapStateToProps = (state: reduxState) => ({
  things: state.levelData.levels[state.levelData.currentOfficeNum].things,
  users: Array.from(state.users, (user: User) => ({
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
