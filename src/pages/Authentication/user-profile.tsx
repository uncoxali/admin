import MetaTags from "react-meta-tags";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Alert, CardBody, Button } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter } from "react-router-dom";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-1.jpg";

// actions
import { editProfile, resetProfileFlag } from "../../store/actions";

const UserProfile = () => {
  // const dispatch = useDispatch();
  const username = localStorage.getItem("username");
  const access = localStorage.getItem("access");
  const profile_pic = localStorage.getItem("profile_pic");

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Finestel Profile</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Finestel" breadcrumbItem="Profile" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3">
                      <img
                        src={profile_pic?.replace(/"/g, "")}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center ms-3">
                      <div className="text-muted">
                        {/* <h5>{name}</h5> */}
                        <p className="mb-1">{username?.replace(/"/g, "")}</p>
                        <p className="mb-1">{access?.replace(/"/g, "")}</p>
                        {/* <p className="mb-0">Id no: #{idx}</p> */}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* <h4 className="card-title mb-4">Change User Name</h4> */}

          {/* <Card>
            <CardBody>
              <AvForm
                className="form-horizontal"
                onValidSubmit={(e: any, v: any) => {
                  handleValidSubmit(e, v);
                }}
              >
                <div className="form-group">
                  <AvField
                    name="username"
                    label="User Name"
                    value={name || ""}
                    className="form-control"
                    placeholder="Enter User Name"
                    type="text"
                    required
                  />
                  <AvField name="idx" value={idx || ""} type="hidden" />
                </div>
                <div className="text-center mt-4">
                  <Button type="submit" color="danger">
                    Update User Name
                  </Button>
                </div>
              </AvForm>
            </CardBody>
          </Card> */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserProfile);
