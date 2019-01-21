import * as React from "react";
import Select from "react-select";
import { ControlLabel, FormControl, Button } from "react-bootstrap";
import "./style.css";

interface IAddTableState {
  objectType: string;
  objectName: string;
}

interface IAddTableProps {
  handleForm: Function;
}

export default class AddOtherObject extends React.Component<
  IAddTableProps,
  IAddTableState
> {
  constructor(props: IAddTableProps) {
    super(props);

    this.state = {
      objectType: "",
      objectName: ""
    };
  }

  handleChangeObjectType = data => {
    this.setState({ objectType: data.value });
  };

  handleChangeObjectName = ({ target }) => {
    this.setState({ objectName: target.value });
  };

  render() {
    const options = [
      { value: "printer", label: "Принтер" },
      { value: "shredder", label: "Шредер" },
      { value: "box", label: "Шкаф" }
    ];

    const { handleForm } = this.props;
    return (
      <React.Fragment>
        <ControlLabel>Выберите тип объекта</ControlLabel>
        <Select
          options={options}
          onChange={data => this.handleChangeObjectType(data)}
        />
        <form>
          <ControlLabel>Введите название объекта</ControlLabel>
          <FormControl
            type="text"
            value={this.state.objectName}
            placeholder="HP, Xerox, KONIKA MINOLTA..."
            onChange={this.handleChangeObjectName}
          />
          <Button bsStyle="primary" onClick={() => handleForm(this.state)}>
            Добавить
          </Button>
        </form>
      </React.Fragment>
    );
  }
}
