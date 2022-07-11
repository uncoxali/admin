import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";

import SweetAlert from "react-bootstrap-sweetalert";
import { Card, Row, Col, CardBody, CardTitle, Container } from "reactstrap";

import { logoutUser } from "../../store/actions";

//redux
import { useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

interface SessionTimeoutProps {
  history: any;
}

const SessionTimeout = ({ history }: SessionTimeoutProps) => {
  const dispatch = useDispatch();

  const [timeralert, setTimeralert] = useState<any>(null);
  const [counter, setCounter] = useState<number>(0);
  var windowState: any = window.location;

  const function1 = () => {
    if (window.location.pathname === "/ui-session-timeout") {
      windowState = "/login";
    } else {
    }
  };
  useEffect(() => {
    // Update the document title using the browser API
    main_function();
  }, []);

  const hideAlert = () => {
    dispatch(logoutUser(history));
  };
  const confirmAlert = () => {
    setTimeralert(null);
  };

  const main_function = () => {
    setTimeout(function () {
      setTimeout(function () {
        function1();
      }, 6000);
      function2();
    }, 6000);
  };

  const tick = () => {
    setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
  };

  const function2 = () => {
    tick();
    const nextmsg = () => (
      <SweetAlert
        showCancel
        confirmBtnText="Stay Connected"
        cancelBtnText="Logout"
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="danger"
        title="Your Session is About to Expire!"
        onCancel={() => hideAlert()}
        onConfirm={() => confirmAlert()}
      >
        Redirecting in 10s seconds.<br></br>
      </SweetAlert>
    );
    setTimeralert(nextmsg());
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Session Timeout | Finestel - React Admin & Overview Template
          </title>
        </MetaTags>
        <Container fluid={true}>
          {timeralert}

          <Breadcrumbs title="Extended" breadcrumbItem="Session Timeout" />
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>Bootstrap-session-timeout</CardTitle>
                  <p className="sub-header">
                    Session timeout and keep-alive control with a nice Bootstrap
                    warning dialog.
                  </p>

                  <div>
                    <p>
                      After a set amount of idle time, a Bootstrap warning
                      dialog is shown to the user with the option to either log
                      out, or stay connected. If "Logout" button is selected,
                      the page is redirected to a logout URL. If "Stay
                      Connected" is selected the dialog closes and the session
                      is kept alive. If no option is selected after another set
                      amount of idle time, the page is automatically redirected
                      to a set timeout URL.
                    </p>
                    <p>
                      Idle time is defined as no mouse, keyboard or touch event
                      activity registered by the browser.
                    </p>

                    <p className="mb-0">
                      As long as the user is active, the (optional) keep-alive
                      URL keeps getting pinged and the session stays alive. If
                      you have no need to keep the server-side session alive via
                      the keep-alive URL, you can also use this plugin as a
                      simple lock mechanism that redirects to your lock-session
                      or log-out URL after a set amount of idle time.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SessionTimeout;
