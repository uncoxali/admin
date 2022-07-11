import MetaTags from "react-meta-tags";
import React, { useState } from "react";

import { Row, Col, Alert, Container, Spinner } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter, Link, useHistory } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

//Social Media Imports
import { GoogleLogin } from "react-google-login";
// import TwitterLogin from "react-twitter-auth"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// actions
import { loginUser, socialLogin } from "../../store/actions";

// import images
import logo from "../../assets/images/logo-sm.svg";

//Import config
import config from "../../config";
import CarouselPage from "../AuthenticationInner/CarouselPage";
import { post } from "src/helpers/api_helper";
import * as url from "src/helpers/url_helper";
import { Base64 } from "js-base64";
import axios from "axios";
import { postFakeLogin } from "src/helpers/fakebackend_helper";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { error } = useSelector((state: any) => ({
    error: state.login.error,
  }));
  const [loading, setLoading] = useState<boolean>(false);

  // handleValidSubmit
  const handleValidSubmit = async (event: any, values: any) => {
    setLoading(true);
    const header = {
      Authorization:
        "Basic " + Base64.encode(`${values.username}:${values.password}`),
    };
    try {
      const data = await postFakeLogin(header);
      if (data.status === 200) {
        localStorage.setItem("authUser", JSON.stringify(data.body.token));
        toast.success("Login Successful");
        localStorage.setItem("username", JSON.stringify(data.body.username));
        localStorage.setItem("access", JSON.stringify(data.body.access));
        localStorage.setItem(
          "profile_pic",
          JSON.stringify(data.body.profile_pic)
        );
        history.push("/adminv2/Overview");
      }
    } catch (error) {
      //@ts-ignore
      toast.error(error?.response?.data?.detail);
    }
    // dispatch(loginUser(history, header));
    setLoading(false);
  };

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Finestel </title>
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
                        <h5 className="mb-0">Welcome Back !</h5>
                        <p className="text-muted mt-2">
                          Sign in to continue to Finestel.
                        </p>
                      </div>
                      <AvForm
                        className="custom-form mt-4 pt-2"
                        onValidSubmit={(e: any, v: any) => {
                          handleValidSubmit(e, v);
                        }}
                      >
                        {error ? <Alert color="danger">{error}</Alert> : null}
                        <div className="mb-3">
                          <AvField
                            name="username"
                            label="Email"
                            value=""
                            className="form-control"
                            placeholder="Enter email"
                            type="text"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-start">
                            <div className="flex-grow-1">
                              <label className="form-label">Password</label>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="">
                                <Link
                                  to="/auth-recoverpw"
                                  className="text-muted"
                                >
                                  Forgot password?
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <AvField
                              name="password"
                              value=""
                              type="password"
                              className="form-control"
                              required
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="remember-check"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="remember-check"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light"
                            type="submit"
                          >
                            {loading ? (
                              <Spinner
                                color="light"
                                style={{ width: "20px", height: "20px" }}
                              ></Spinner>
                            ) : (
                              " Log In"
                            )}
                          </button>
                        </div>
                      </AvForm>
                      <div className="mt-5 text-center">
                        <p className="text-muted mb-0">
                          Don't have an account ?{" "}
                          <Link
                            to="/register"
                            className="text-primary fw-semibold"
                          >
                            {" "}
                            Signup now{" "}
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

export default withRouter(Login);
