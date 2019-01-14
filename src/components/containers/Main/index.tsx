import * as React from "react";
import MapContainer from "../../containers/MapContainer/index";
import AddThingsContainer from "../../containers/AddThingsContainer";
import { Grid, Row, Col } from "react-bootstrap";

export default class Main extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <MapContainer />
          </Col>
          <Col xs={6} md={4}>
            <AddThingsContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}
