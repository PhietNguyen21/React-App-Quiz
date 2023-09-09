import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

import { getAllUser } from "../../../services/apiServices";
const TableUser = () => {
  const [listStudent, SetListStudent] = useState([]);
  useEffect(() => {
    fetchUser();
  });

  const fetchUser = async () => {
    const res = await getAllUser();
    if (res.EC === 0) {
      SetListStudent(res.DT);
    }
  };
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listStudent &&
            listStudent.length > 0 &&
            listStudent.map((item, index) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button className="btn btn-warning mx-3">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listStudent && listStudent.length === 0 && (
            <tr className="text-center">
              <td colSpan={4}>NO DATA</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};
export default TableUser;
