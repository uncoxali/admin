import React, { useState } from "react";
import ReactDrawer from "react-drawer";
import "react-drawer/lib/react-drawer.css";

//Import Icons
import Icon from "@ailibs/feather-react-ts";

import { Link } from "react-router-dom";

// Redux Store
import { toggleLeftmenu } from "../../store/actions";
// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import RightSidebar from "../CommonForBoth/RightSidebar";
import LightDark from "../CommonForBoth/Menus/LightDark";

// import images
import logo from "../../assets/images/logo-finestel.svg";
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";

//redux
import { useSelector, useDispatch } from "react-redux";

const Header = (props: any) => {
  const dispatch = useDispatch();
  const { leftMenu, layoutMode } = useSelector((state: any) => ({
    leftMenu: state.Layout.leftMenu,
    layoutMode: state.Layout.layoutMode,
  }));

  const [isSearch, setSearch] = useState<boolean>(false);
  const [socialDrp, setsocialDrp] = useState<boolean>(false);
  const [position, setPosition] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);

  const toggleTopDrawer = () => {
    setPosition("right");
    setOpen(!open);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/adminv2/Overview" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="24" />
                </span>
                <span className="logo-lg">
                  <img src={logo} alt="" height="24" />
                  <span className="logo-txt">Finestel</span>
                </span>
              </Link>

              <Link to="/adminv2/Overview" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logo} alt="" height="24" />
                </span>
                <span className="logo-lg">
                  <img src={logo} alt="" height="24" />
                  <span className="logo-txt">Finestel</span>
                </span>
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              data-toggle="collapse"
              onClick={() => {
                dispatch(toggleLeftmenu(!leftMenu));
              }}
              data-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            {/* <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <button className="btn btn-primary" type="button">
                  <i className="bx bx-search-alt align-middle"></i>
                </button>
              </div>
            </form> */}
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              {/* <button
                type="button"
                className="btn header-item noti-icon "
                id="page-header-search-dropdown"
                onClick={() => setSearch(!isSearch)}
              >
                <i className="mdi mdi-magnify" />
              </button> */}
              {/* <div
                className={
                  isSearch
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div> */}
            </div>

            {/* <LanguageDropdown /> */}

            {/* light / dark mode */}
            <LightDark
              layoutMode={layoutMode}
              onChangeLayoutMode={props.onChangeLayoutMode}
            />

            {/* <Dropdown
              className="d-none d-lg-inline-block ms-1"
              isOpen={socialDrp}
              toggle={() => {
                setsocialDrp(!socialDrp);
              }}
            >
              <DropdownToggle
                className="btn header-item noti-icon "
                caret
                tag="button"
              >
                <Icon name="grid" className="icon-lg" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                <div className="px-lg-2">
                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={github} alt="Github" />
                        <span>GitHub</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={bitbucket} alt="bitbucket" />
                        <span>Bitbucket</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dribbble} alt="dribbble" />
                        <span>Dribbble</span>
                      </Link>
                    </Col>
                  </Row>
                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dropbox} alt="dropbox" />
                        <span>Dropbox</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={mail_chimp} alt="mail_chimp" />
                        <span>Mail Chimp</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={slack} alt="slack" />
                        <span>Slack</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown> */}

            {/* <NotificationDropdown /> */}

            {/* <div className="dropdown d-inline-block">
              <button
                onClick={toggleTopDrawer}
                disabled={open}
                type="button"
                className="btn header-item noti-icon right-bar-toggle "
              >
                <Icon name="settings" className="icon-lg" />
              </button>
            </div> */}

            <ProfileMenu />
          </div>
        </div>
      </header>
      <ReactDrawer open={open} position={position} onClose={onDrawerClose}>
        <RightSidebar
          onClose={onDrawerClose}
          onChangeLayoutMode={props.onChangeLayoutMode}
        />
      </ReactDrawer>
    </React.Fragment>
  );
};

export default Header;
