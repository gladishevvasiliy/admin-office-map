import * as React from "react";
import Select from "react-select";
import { Button, Alert } from "react-bootstrap";
import { Thing } from "../../../utils/Models";
import { UserToSelect } from "../../../utils/Models";
import checkUser from "../../../utils/checkUser";

const ERROR_ALREADY_EXIST = "Пользователь уже прикреплен к столу.";

interface IChooseUserFormState {
  selectedUser: UserToSelect;
  error: string;
}

interface IChooseUserFormProps {
  handleForm: Function;
  users: Array<UserToSelect>;
  things: Array<Thing>;
}

export default class ChooseUserForm extends React.Component<
  IChooseUserFormProps,
  IChooseUserFormState
> {
  constructor(props: IChooseUserFormProps) {
    super(props);

    this.state = {
      selectedUser: { label: "", value: "" },
      error: ""
    };
  }

  onChange = (selectedUser: UserToSelect) => {
    const { things } = this.props;
    if (!checkUser(selectedUser.value, things)) {
      this.setState({
        error: ERROR_ALREADY_EXIST,
        selectedUser: { label: "", value: "" }
      });
    }
    this.setState({
      selectedUser,
      error: ""
    });
  };

  handleButton = () => {
    console.log(this.props);
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
    return (
      <div>
        <Select
          options={this.props.users}
          onChange={(value: UserToSelect) => this.onChange(value)}
        />
        <Button onClick={this.handleButton}>Добавить</Button>
        {this.state.error.length === 0 ? null : (
          <Alert bsStyle="danger">{this.state.error}</Alert>
        )}
      </div>
    );
  }
}
