import * as React from "react";
import ChooseUserForm from "../../presentational/ChooseUserForm";
import { UserToSelect } from "../../../utils/Models";

export default class EditTable extends React.Component {
  changeUserAndCloseModal = (selectedUser: UserToSelect) => {
    const { thingId, changeUser, handleCloseEditTable } = this.props;
    changeUser(thingId, selectedUser.value);
    handleCloseEditTable();
  };

  render() {
    const { users, things } = this.props;
    return (
      <div>
        <ChooseUserForm
          handleForm={this.changeUserAndCloseModal}
          users={users}
          things={things}
        />
      </div>
    );
  }
}
