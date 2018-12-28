import * as React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const popoverClick = (
  id: Number,
  rotateThing: Function,
  removeThing: Function
) => (
  <Popover className="popoverThing" id="popover-trigger-focus" title="">
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
  </Popover>
);

const Thing = props => (
  <div className={`${props.position} thing-inner`} key={props.id}>
    <div className="thing-title">ID: {props.id}</div>
    <div className="thing-edit-button">
      <OverlayTrigger
        trigger="focus"
        placement="top"
        overlay={popoverClick(props.id, props.rotateThing, props.removeThing)}
      >
        <button className="thing-edit-button">
          <FontAwesomeIcon
            icon="pen-square"
            color="white"
            flip={props.position}
          />
        </button>
      </OverlayTrigger>
    </div>
  </div>
);

export default Thing;
