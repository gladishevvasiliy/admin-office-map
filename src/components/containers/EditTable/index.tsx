import * as React from "react";
import ChooseUserForm from "../../presentational/ChooseUserForm";
import { UserToSelect, ThingType } from "../../../utils/Models";

interface Props {
  thingId: string;
  changeUser: Function;
  handleCloseEditTable: Function;
  users: Array<UserToSelect>;
  things: Array<ThingType>;
}

export default class EditTable extends React.Component<Props> {
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
