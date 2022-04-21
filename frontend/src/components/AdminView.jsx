import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation";
import { Modal, Table, Form, Button } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

//==================================================================
const AdminView = () => {
  const [fundingRequests, setFundingRequests] = useState([]);
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [updateBox, setUpdateBox] = useState(false);
  //==============================================================
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  //==============================================================
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
  //==============================================================
  useEffect(() => {
    state.token && getAllFundingRequests();
  }, [show]);

  //==============================================================
  const handleUpdateClick = (request) => {
    setShow(true);
    setUpdateBox(!updateBox);
    localStorage.setItem("id", request._id);
  };
  //==============================================================
  const updateFundingRequestById = async (id) => {
    const body = {
      status,
    };
    try {
      const res = await axios.put(
        `http://localhost:5000/funding/request/${id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (res.data.success) {
        getAllFundingRequests() && handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  //================================================================
  return (
    <>
      <Navigation />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Update the status for the request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 ms-4 col-11">
              <Form.Control
                type="text"
                placeholder="Request Status"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="col-12"
            onClick={() => {
              updateFundingRequestById(localStorage.getItem("id"));
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container m-5">
        <h2 className="mb-5">Funding Requests Dashboard</h2>
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
                    <td>{request.projectSector.sector}</td>
                    <td>
                      {request.status}
                      <BsPencilSquare
                        className="m-3"
                        id="update"
                        onClick={() => {
                          handleUpdateClick(request);
                        }}
                      />
                    </td>
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
