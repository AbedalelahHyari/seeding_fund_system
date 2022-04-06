import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
const AdminView = () => {
  const [fundingRequests, setFundingRequests] = useState([]);
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  /************************************************* */
  const getAllFundingRequests = async () => {
    try {
      const res = await axios.get("http://localhost:5000/funding", {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      if (res.data.success) {
        setFundingRequests(res.data.requests);
      }
    } catch (error) {
      console.log(error);
    }
  };
  /************************************ */
  useEffect(() => {
    getAllFundingRequests();
  }, []);
  console.log(fundingRequests);
  /********************************************************** */
  return (
    <div className="container m-5">
      <h2 className="mb-5">Funding Request Table</h2>
      <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Project Owner</th>
            <th>Project Sector</th>
            <th>Project Status</th>
          </tr>
        </thead>
        <tbody>
          {fundingRequests.length
            ? fundingRequests.map((request, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{request.projectName}</td>
                      <td>{request.projectOwner.userName}</td>
                      <td>{request.projectSector}</td>
                      <td>{request.status}</td>
                    </tr>
                  </>
                );
              })
            : "No request for now"}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminView;
