import React, { Component } from "react";
import Card from "../components/Card";
import { withRouter } from "react-router-dom";
class UserDetails extends Component {
  state = {};
  onBtnClick = () => {
    this.props.history.push("/");
  };
  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        {
          this.props.location.state?
        <Card
          cardData={this.props.location.state}
          BtnText={"Go Home"}
          onClick={this.onBtnClick}
        />:null
        }
      </div>
    );
  }
}

export default withRouter(UserDetails);
