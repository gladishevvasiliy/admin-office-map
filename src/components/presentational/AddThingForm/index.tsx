import * as React from "react";
import {
  // FieldGroup,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

export default class AddThingForm extends React.Component {
  render() {
    const { handleForm } = this.props;
    return (
      <div>
        <form onSubmit={e => handleForm(e)}>
          <FormGroup controlId="formFirstname">
            <ControlLabel>First Name</ControlLabel>{" "}
            <FormControl type="text" placeholder="Jane" />
          </FormGroup>
          <FormGroup controlId="formLastname">
            <ControlLabel>Last Name</ControlLabel>{" "}
            <FormControl type="text" placeholder="Doe" />
          </FormGroup>
          <FormGroup controlId="username">
            <ControlLabel>Username</ControlLabel>{" "}
            <FormControl type="text" placeholder="ivan.petrov" />
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}
