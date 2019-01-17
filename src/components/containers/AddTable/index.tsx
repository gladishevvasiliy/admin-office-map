import * as React from "react";
import { ThingType } from "../../../utils/Models";
import { UserToSelect } from "../../../utils/Models";
import checkUser from "../../../utils/checkUser";
import UserForNewTableForm from "../../presentational/UserForNewTableForm";
import "./style.css";

const ERROR_ALREADY_EXIST = "Пользователь уже прикреплен к другому столу.";

interface IAddTableState {
  selectedUser: UserToSelect;
  error: string;
}

interface IAddTableProps {
  handleForm: Function;
  users: Array<UserToSelect>;
  things: Array<ThingType>;
}

export default class AddTable extends React.Component<
  IAddTableProps,
  IAddTableState
> {
  constructor(props: IAddTableProps) {
    super(props);

    this.state = {
      selectedUser: { label: "", value: null },
      error: ""
    };
  }

  onChange = (selectedUser: UserToSelect) => {
    const { things } = this.props;
    if (!checkUser(selectedUser.value, things)) {
      this.setState({
        error: ERROR_ALREADY_EXIST,
        selectedUser: { label: "", value: null }
      });
    }
    this.setState({
      selectedUser,
      error: ""
    });
  };

  handleButton = () => {
    const { handleForm, things } = this.props;
    const { selectedUser } = this.state;
    if (checkUser(selectedUser.value, things)) {
      handleForm(selectedUser);
    } else {
      this.setState({
        error: ERROR_ALREADY_EXIST
      });
    }
  };

  render() {
    const { users } = this.props;
    return (
      <UserForNewTableForm
        usersList={users}
        onChange={this.onChange}
        handleButton={this.handleButton}
        error={this.state.error}
      />
    );
  }
}
