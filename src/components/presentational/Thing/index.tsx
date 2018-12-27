import * as React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const popoverClick = (
  id: Number,
  rotateThing: Function,
  removeThing: Function
) => (
  <Popover className="popoverThing" id="popover-trigger-click" title="">
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
  <OverlayTrigger
    trigger="click"
    placement="top"
    overlay={popoverClick(props.id, props.rotateThing, props.removeThing)}
  >
    <div className={`${props.position}`} key={props.id}>
      <span className="thing-title">
        {props.type} {props.id}
      </span>
    </div>
  </OverlayTrigger>
);

export default Thing;
