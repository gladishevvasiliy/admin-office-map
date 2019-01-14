import * as React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isNil } from "lodash";
import { ThingProps, Person } from "../../../utils/Models";
import "./style.css";

const popoverClick = (
  id: Number,
  rotateThing: Function,
  removeThing: Function,
  showModalEditTable: Function,
  userId: string,
  position: "horizontal" | "vertical" | "both" | undefined
) => (
  <Popover className="popoverThing" id="popover-trigger-focus" title="">
    <h4>{isNil(userId) ? `Стол свободен` : `@${userId}`}</h4>
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

const Thing = ({
  position,
  id,
  rotateThing,
  removeThing,
  showModalEditTable,
  userId
}: ThingProps) => (
  <div className={`${position} thing-inner`} key={id}>
    <div className="thing-title">ID: {id}</div>
    <div className="thing-edit-button">
      <OverlayTrigger
        trigger="focus"
        placement="top"
        overlay={popoverClick(
          id,
          rotateThing,
          removeThing,
          showModalEditTable,
          userId,
          position
        )}
      >
        <button className="thing-edit-button">
          <FontAwesomeIcon icon="pen-square" color="white" flip={position} />
        </button>
      </OverlayTrigger>
    </div>
  </div>
);

export default Thing;
