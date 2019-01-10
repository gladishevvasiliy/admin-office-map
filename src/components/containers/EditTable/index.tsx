import * as React from "react";
import ChooseUserForm from "../../presentational/ChooseUserForm";
import { UserToSelect } from "../../../utils/Models";

export default class EditTable extends React.Component {
  clg = (selectedUser: UserToSelect) => {
    console.log(selectedUser);
  };

  render() {
    const { users, things } = this.props;
    return (
      <div>
        <ChooseUserForm handleForm={this.clg} users={users} things={things} />
      </div>
    );
  }
}
