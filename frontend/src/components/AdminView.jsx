import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation";
/****************************************************************** */
const AdminView = () => {
  const [fundingRequests, setFundingRequests] = useState([]);
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  /************************************ */
  useEffect(() => {
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
        if (error.response && error.response.data) {
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    };
    getAllFundingRequests();
  }, [state.token]);
  /********************************************************** */
  return (
    <>
      <Navigation />
      <div className="container m-5">
        <h2 className="mb-5">Funding Request Table</h2>
        <Table striped bordered hover variant="success">
          <thead>
            <tr>
              <th>#</th>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Project Owner</th>
              <th>Project Sector</th>
              <th>Project Status</th>
            </tr>
          </thead>
          <tbody>
            {fundingRequests.length ? (
              fundingRequests.map((request, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{request._id}</td>
                    <td>{request.projectName}</td>
                    <td>{request.projectOwner.userName}</td>
                    <td>{request.projectSector}</td>
                    <td>{request.status}</td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminView;
