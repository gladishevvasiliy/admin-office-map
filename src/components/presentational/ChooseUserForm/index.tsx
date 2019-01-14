import * as React from "react";
import Select from "react-select";
import { Button, Alert, Col, Row } from "react-bootstrap";
import { ThingType } from "../../../utils/Models";
import { UserToSelect } from "../../../utils/Models";
import checkUser from "../../../utils/checkUser";
import "./style.css";

const ERROR_ALREADY_EXIST = "Пользователь уже прикреплен к другому столу.";

interface IChooseUserFormState {
  selectedUser: UserToSelect;
  error: string;
}

interface IChooseUserFormProps {
  handleForm: Function;
  users: Array<UserToSelect>;
  things: Array<ThingType>;
}

export default class newState extends React.Component<
  IChooseUserFormProps,
  IChooseUserFormState
> {
  constructor(props: IChooseUserFormProps) {
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
    return (
      <div>
        <Row className="show-grid">
          <Col xs={12} md={8} className="selectUserForm">
            <Select
              options={[
                { value: null, label: "Пустой стол" },
                ...this.props.users
              ]}
              onChange={(value: UserToSelect) => this.onChange(value)}
              className="selectUserForm"
            />
          </Col>
          <Col xs={6} md={4}>
            <Button className="addUserButton" onClick={this.handleButton}>
              Добавить
            </Button>
          </Col>
        </Row>
        {this.state.error.length === 0 ? null : (
          <Alert className="errorAlert" bsStyle="danger">
            {this.state.error}
          </Alert>
        )}
      </div>
    );
  }
}
