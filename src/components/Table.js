import React from "react";
import Table from "react-bootstrap/Table";
import { Pencil,Trash,Eye } from 'react-bootstrap-icons';
export default function UserTable(props) {
  const { tableData, onActionClick, activePage } = props;
  console.log(props.tableData);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {React.Children.toArray(
         tableData.slice((activePage*10)-10,activePage*10).map((user) => (
            <tr>
                <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Eye style={{marginRight:'5px'}} onClick={()=>onActionClick('view',user)}/>
                <Pencil style={{marginRight:'5px'}} onClick={()=>onActionClick('edit',user)}/>
                <Trash onClick={()=>onActionClick('delete',user)}/>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};
