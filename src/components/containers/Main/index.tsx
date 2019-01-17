import * as React from "react";
import MapContainer from "../../containers/MapContainer/index";
import AddThingsContainer from "../../containers/AddThingsContainer";
import { Grid, Row, Col } from "react-bootstrap";
import TopNavigation from "../../presentational/TopNavigation";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { changeOffice } from "../../../actions/index";

class Main extends React.Component {
  render() {
    const { actions } = this.props;
    return (
      <React.Fragment>
        <TopNavigation changeOffice={actions.changeOffice} />
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentOfficeNum: state.levelData.currentOfficeNum
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeOffice }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
