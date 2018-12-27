import * as React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const popoverClick = (id: Number, rotateThing) => (
  <Popover id="popover-trigger-click" title="">
    <Button onClick={() => rotateThing(id)}>повернуть</Button>
  </Popover>
);

const Thing = props => (
  <OverlayTrigger
    trigger="click"
    placement="top"
    overlay={popoverClick(props.id, props.rotateThing)}
  >
    <div className={`${props.position}`} key={props.id}>
      <span className="thing-title">
        {props.type} {props.id}
      </span>
    </div>
  </OverlayTrigger>
);

export default Thing;
