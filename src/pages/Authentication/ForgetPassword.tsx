import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import React from "react";
import { Row, Col, Alert, Container } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import { userForgetPassword } from "../../store/actions";

// import images
import logo from "../../assets/images/logo-sm.svg";
import CarouselPage from "../AuthenticationInner/CarouselPage";

interface ForgetPasswordProps {
  history: object;
}

const ForgetPasswordPage = ({ history }: ForgetPasswordProps) => {
  const dispatch = useDispatch();

  const { forgetError, forgetSuccessMsg } = useSelector((state: any) => ({
    forgetError: state.forgetPassword.forgetError,
    forgetSuccessMsg: state.forgetPassword.forgetSuccessMsg,
  }));

  function handleValidSubmit(event: any, values: any) {
    dispatch(userForgetPassword(values, history));
  }
  return (
    <React.Fragment>
      <MetaTags>
        <title>
          Forget Password | Finestel - React Admin & Overview Template
        </title>
      </MetaTags>
      <div className="auth-page">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4} md={5} className="col-xxl-3">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      <Link to="/Overview" className="d-block auth-logo">
                        <img src={logo} alt="" height="28" />{" "}
                        <span className="logo-txt">Finestel</span>
                      </Link>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Reset Password</h5>
                        <p className="text-muted mt-2">
                          Reset Password with Finestel.
                        </p>
                      </div>

                      {forgetError && forgetError ? (
                        <Alert color="danger" style={{ marginTop: "13px" }}>
                          {forgetError}
                        </Alert>
                      ) : null}
                      {forgetSuccessMsg ? (
                        <Alert color="success" style={{ marginTop: "13px" }}>
                          {forgetSuccessMsg}
                        </Alert>
                      ) : null}

                      <AvForm
                        className="custom-form mt-4"
                        onValidSubmit={(e: any, v: any) =>
                          handleValidSubmit(e, v)
                        }
                      >
                        <div className="mb-3">
                          <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>
                        <div className="mb-3 mt-4">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light"
                            type="submit"
                          >
                            Reset
                          </button>
                        </div>
                      </AvForm>

                      <div className="mt-5 text-center">
                        <p className="text-muted mb-0">
                          Remember It ?{" "}
                          <Link
                            to="/adminv2/login"
                            className="text-primary fw-semibold"
                          >
                            {" "}
                            Sign In{" "}
                          </Link>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © {new Date().getFullYear()} Finestel . Crafted with{" "}
                        <i className="mdi mdi-heart text-danger"></i> by
                        Themesbrand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <CarouselPage />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ForgetPasswordPage);
