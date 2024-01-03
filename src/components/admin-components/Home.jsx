import {Table} from "./Table";
import {Link} from "react-router-dom";
import {Modal} from "./Modal";
import React, {useState} from "react";



export default function Home(){
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            id:1,
            page: "Michael Chang",
            description: "Corporate Law",
            status: "error",
        },
        {
            id:2,
            page: "Emily Rodriguez",
            description: "Real Estate Law",
            status: "live",
        },
        {
            id:3,
            page: "Sarah Johnson",
            description: "Criminal Defense Law",
            status: "draft",
        },
        {
            id:3,
            page: "Sarah Johnson",
            description: "Criminal Defense Law",
            status: "draft",
        },
        {
            id:3,
            page: "Sarah Johnson",
            description: "Criminal Defense Law",
            status: "draft",
        },        {
            id:3,
            page: "Sarah Johnson",
            description: "Criminal Defense Law",
            status: "draft",
        }
    ]);
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    };

    const handleEditRow = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
        rowToEdit === null
            ? setRows([...rows, newRow])
            : setRows(
                rows.map((currRow, idx) => {
                    if (idx !== rowToEdit) return currRow;
                    return newRow;
                })
            );
    };

    return (
        <div className="App-admin">
        <div className="content">
            <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            <div className="button-container">
                <Link to="/admin/waiting-list" className="btn">
                    Waiting List
                </Link>
                <button onClick={() => setModalOpen(true)} className="btn">
                    Add
                </button>
            </div>
        </div>
    {modalOpen && (
        <Modal
            closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
    )}
</div>
)
}
