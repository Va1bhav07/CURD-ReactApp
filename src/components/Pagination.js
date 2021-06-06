import React from "react";
import Pagination from "react-bootstrap/Pagination";

function EmpPagination(props) {
  const { totalCount, active, onPageChange } = props;
  console.log(props);
  return (
    <Pagination>
      <Pagination.Prev onClick={()=>onPageChange(active-1)}/>
      {Array.from({ length: Math.ceil(totalCount / 10) }, (_, i) => i + 1).map(
        (number) => (
          <Pagination.Item key={number} active={number === active} onClick={()=>onPageChange(number)}>
            {number}
          </Pagination.Item>
        )
      )}
      <Pagination.Next onClick={()=>onPageChange(active+1)}/>
    </Pagination>
  );
}

export default EmpPagination;
