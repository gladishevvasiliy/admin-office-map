import * as React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrinterProps } from "../../../utils/Models";
import "./style.css";

const popoverClick = (
  id: Number,
  rotateThing: Function,
  removeThing: Function,
  position: "horizontal" | "vertical" | "both" | undefined,
  type
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

const Printer = ({
  position,
  id,
  rotateThing,
  removeThing,
  type
}: PrinterProps) => (
  <div className={`${type}-${position} ${type}-inner`} key={id}>
    <div className={`${type}-icon`}>
      {type === "printer" ? <FontAwesomeIcon icon="print" inverse /> : null}
      {type === "shredder" ? <FontAwesomeIcon icon="recycle" inverse /> : null}
      {type === "box" ? <FontAwesomeIcon icon="archive" inverse /> : null}
    </div>
    <div className={`${type}-edit-button-block`}>
      <OverlayTrigger
        trigger="focus"
        placement="top"
        overlay={popoverClick(id, rotateThing, removeThing, position)}
      >
        <button className={`${type}-edit-button`}>
          <FontAwesomeIcon icon="pen-square" color="white" flip={position} />
        </button>
      </OverlayTrigger>
    </div>
  </div>
);

export default Printer;
