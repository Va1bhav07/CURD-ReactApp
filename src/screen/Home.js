import React, { Component } from "react";
import { getUserData, deleteUserData } from "../Store/actions/userActions";
import { connect } from "react-redux";
import Table from "../components/Table";
import { withRouter } from "react-router-dom";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Pagination from "../components/Pagination";

const StyledDiv = styled.div`
  float: right;
  padding: 30px;
`;


class Home extends Component {
  state = {
    isDeleteModalOpen: false,
    selectedUser: {},
    activePage:1
  };
  componentDidMount() {
    const { getUserData, userData } = this.props;
    !userData.length && getUserData();
  }

  componentDidUpdate(preProps){
    console.log(this.props.totalUser,preProps.totalUser)
    if(preProps.totalUser !== this.props.totalUser && this.props.totalUser % 10 === 0){
      this.setState({activePage:1})
    }
  }

  onActionClick = (type, value) => {
    console.log(type, value);
    if (type === "view") {
      this.props.history.push({ pathname: "/user_detail", state: value });
    } else if (type === "delete") {
      this.setState({ isDeleteModalOpen: true, selectedUser: value });
    } else if (type === "edit") {
      this.props.history.push({ pathname: "/user_edit", state: value });
    }
  };

  handleClose = () => {
    this.setState({
      isDeleteModalOpen: !this.state.isDeleteModalOpen,
      selectedUser: {},
    });
  };

  modalAction = () => {
    this.props.deleteUserData(this.state.selectedUser);
    this.handleClose();
  };

  onAddEmpHandler = () => {
    this.props.history.push("/user_edit");
  };

  onPageChange=(pageNum)=>{
    console.log(pageNum,this.props.userData)
    pageNum &&  Math.ceil(this.props.userData.length / 10) >= pageNum && this.setState({activePage:pageNum})
  }

  render() {
    if (this.props.isLoading) {
      return <Loader />;
    }
    return (
      <>
        <StyledDiv>
          <Button onClick={this.onAddEmpHandler}>Add an Employee</Button>
        </StyledDiv>
        <Table
          tableData={this.props.userData}
          onActionClick={this.onActionClick}
          activePage={this.state.activePage}
        />
        <StyledDiv>
          <Pagination totalCount={this.props.totalUser} onPageChange={this.onPageChange} active={this.state.activePage}/>
        </StyledDiv>
        {this.state.isDeleteModalOpen ? (
          <Modal
            show={this.state.isDeleteModalOpen}
            handleClose={this.handleClose}
            modalTitle="Delete"
            modalText={`Are you sure you want delete user ${this.state.selectedUser.name}?`}
            modalAction={this.modalAction}
          />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userReducer.userData,
    isLoading: state.userReducer.isLoading,
    totalUser: state.userReducer.totalUser
  };
};

export default connect(mapStateToProps, { getUserData, deleteUserData })(
  withRouter(Home)
);
