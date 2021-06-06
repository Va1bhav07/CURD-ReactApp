import React, { Component } from "react";
import Form from "../components/Form";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { submitUserData } from "../Store/actions/userActions";
import { connect } from "react-redux";
import { generateGUID } from "../components/RandomId";

const StyledDiv = styled.div`
  padding: 40px;
`;


class UserDetails extends Component {
  state = {
    userData: {
      address: {
        street: "",
        city: "",
        zipcode: "",
      },
      company: {
        name: "",
      },
      email: "",
      id: generateGUID(),
      name: "",
      phone: "",
      username: "",
      website: "",
    },
    isValidated: false,
  };
  onBtnClick = () => {
    this.props.history.push("/");
  };

  // handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({userData:{ ...this.state.userData,[name]: value }},()=>console.log(this.state));
  // };

  handleInputChange = (e, object, type) => {
    const userData = JSON.parse(JSON.stringify(this.state.userData));
    const { name, value } = e.target;

    (object ?? userData)[name] = value;
    if (type === "address") {
      userData.address = object;
    } else if (type === "company") {
      userData.company = object;
    }
    // console.log(userData,"-userdata")
    this.setState(
      {
        userData: userData,
      },
      () => console.log(this.state.userData, "----")
    );
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.checkValidity(),"-------okok")
    if (form.checkValidity() === false) {
      e.stopPropagation();
      this.setState({ isValidated: true });
      return
    }
    // console.log(this.state.userData);
    this.props.submitUserData(this.state.userData);
    this.props.history.push("/");
  };

  componentDidMount() {
    let userData = this.props.location.state;
    if (userData) {
      this.setState({ userData: JSON.parse(JSON.stringify(userData)) });
    }
  }
  render() {
    console.log(this.state);
    return (
      <StyledDiv>
        <Form
          onSubmitHandler={this.onSubmitHandler}
          handleInputChange={this.handleInputChange}
          userData={this.state.userData}
          validated={this.state.isValidated}
        />
      </StyledDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { submitUserData })(
  withRouter(UserDetails)
);
