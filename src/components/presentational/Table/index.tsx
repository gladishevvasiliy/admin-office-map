import * as React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isNil } from "lodash";
import { TableProps, Person } from "../../../utils/Models";
import "./style.css";

const popoverClick = (
  id: Number,
  rotateThing: Function,
  removeThing: Function,
  showModalEditTable: Function,
  position: "horizontal" | "vertical" | "both" | undefined,
  userId?: string | null
) => (
  <Popover className="popoverThing" id="popover-trigger-focus" title="">
    <h4>{isNil(userId) ? `Стол свободен` : `${userId}`}</h4>
    <button className="thing-edit-button">
      <FontAwesomeIcon icon="pen-square" color="white" flip={position} />
    </button>
    <Button
      className="popover-button"
      bsStyle="primary"
      bsSize="xsmall"
      onClick={() => rotateThing(id)}
    >
      <FontAwesomeIcon icon="undo" size="xs" />
    </Button>
    <Button
      className="popover-button"
      bsStyle="danger"
      bsSize="xsmall"
      onClick={() => removeThing(id)}
    >
      <FontAwesomeIcon icon="trash-alt" size="xs" />
    </Button>
    <Button
      className="popover-button"
      bsStyle="success"
      bsSize="xsmall"
      onClick={() => showModalEditTable(id)}
    >
      <FontAwesomeIcon icon="pen" size="xs" />
    </Button>
  </Popover>
);

const Table = ({
  position,
  id,
  rotateThing,
  removeThing,
  showModalEditTable,
  userId,
  type
}: TableProps) => (
  <div className={`${type}-${position} table-inner`} key={id}>
    <div className="table-icon">
      {isNil(userId) ? null : <FontAwesomeIcon icon="user" />}
    </div>
    <div className="thing-edit-button-block">
      <OverlayTrigger
        trigger="focus"
        placement="top"
        overlay={popoverClick(
          id,
          rotateThing,
          removeThing,
          showModalEditTable,
          position,
          userId
        )}
      >
        <button className="thing-edit-button">
          <FontAwesomeIcon icon="pen-square" color="white" flip={position} />
        </button>
      </OverlayTrigger>
    </div>
  </div>
);

export default Table;
