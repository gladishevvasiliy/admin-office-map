import * as React from "react";
import { Button, Alert, Col, Row } from "react-bootstrap";
import Select from "react-select";
import { UserToSelect } from "../../../utils/Models";

const UserForNewTableForm = ({ usersList, onChange, handleButton, error }) => (
  <div>
    <Row className="show-grid">
      <Col xs={12} md={8} className="selectUserForm">
        <Select
          options={[{ value: null, label: "Пустой стол" }, ...usersList]}
          onChange={(value: UserToSelect) => onChange(value)}
          className="selectUserForm"
        />
      </Col>
      <Col xs={6} md={4}>
        <Button className="addUserButton" onClick={handleButton}>
          Добавить
        </Button>
      </Col>
    </Row>
    {error.length === 0 ? null : (
      <Alert className="errorAlert" bsStyle="danger">
        {error}
      </Alert>
    )}
  </div>
);
export default UserForNewTableForm;
