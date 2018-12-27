import * as React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const popoverClick = (id: Number) => (
  <Popover id="popover-trigger-click" title="">
    <Button onClick={e => console.log(id)}>повернуть</Button>
  </Popover>
);

const Thing = props => (
  <OverlayTrigger
    trigger="click"
    placement="top"
    overlay={popoverClick(props.id)}
  >
    <div className={`${props.position}`} key={props.id}>
      <span className="thing-title">
        {props.type} {props.id}
      </span>
    </div>
  </OverlayTrigger>
);

export default Thing;
