
import React, {useState} from "react";
import {Table} from "./Table";
import {Link} from "react-router-dom";
import {Modal} from "./Modal";
import {TableWaitingList} from "./TableWaitingList";

function WaitingList() {
  const [rows, setRows] = useState([
    {
      id:1,
      page: "Michael Chang",
      description: "Corporate Law",
      status: "accepted",
    },
    {
      id:2,
      page: "Emily Rodriguez",
      description: "Real Estate Law",
      status: "pending",
    },
    {
      id:3,
      page: "Sarah Johnson",
      description: "Criminal Defense Law",
      status: "pending",
    },
  ]);
  const [rowToAccept, setRowToAccept] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleAcceptRow = (idx) => {
    setRowToAccept(idx);
    handleSubmit(idx)
  };

  const handleSubmit = (idx) => {
    const newRow = rows.map(user =>
        user.id === idx && user.status==="pending" ? { ...user, status:'accepted' } : user.id === idx? { ...user, status:'pending' }:user
    );
    setRows(newRow);
  };
  return (
      <div className="App-admin">
        <div className="content">
          <TableWaitingList rows={rows} deleteRow={handleDeleteRow} acceptRow={handleAcceptRow} />
          <div className="button-container">
            <Link to="/admin" className="btn">
              Main Page
            </Link>
          </div>
        </div>
      </div>
  );
}

export default WaitingList;
