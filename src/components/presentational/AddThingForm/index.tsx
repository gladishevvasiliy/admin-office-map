import * as React from "react";
import Select from "react-select";
import {
  // FieldGroup,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import { isNil } from "lodash";

interface ITAddThingForm {
  handleForm: Function;
}

export default class AddThingForm extends React.Component<ITAddThingForm> {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: ""
    };
  }

  handleButton = () => {
    const { handleForm } = this.props;
    const { selectedUser } = this.state;
    if (!isNil(selectedUser)) {
      console.log(selectedUser);
      handleForm(selectedUser);
    }
  };
  render() {
    return (
      <div>
        <Select
          options={this.props.users}
          onChange={selectedUser => this.setState({ selectedUser })}
        />
        <Button onClick={this.handleButton}>Добавить</Button>
      </div>
    );
  }
}
