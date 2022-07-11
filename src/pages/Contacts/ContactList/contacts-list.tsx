import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { withRouter, Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";

import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";

import { AvForm, AvField } from "availity-reactstrap-validation";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

import * as images from "../../../assets/images";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import {
  getUsers as onGetUsers,
  addNewUser as onAddNewUser,
  updateUser as onUpdateUser,
  deleteUser as onDeleteUser,
} from "../../../store/actions";
import { isEmpty, size, map } from "lodash";

//redux
import { useSelector, useDispatch } from "react-redux";

const ContactsList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state: any) => ({
    users: state.contacts.users,
  }));

  const [userList, setUserList] = useState<any>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { SearchBar } = Search;

  const pageOptions = {
    sizePerPage: 10,
    totalSize: users.length, // replace later with size(users),
    custom: true,
  };

  const defaultSorted: any = [
    {
      dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
      order: "desc", // desc or asc
    },
  ];

  const selectRow: any = {
    mode: "checkbox",
  };
  const contactListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      formatter: (cellContent: any, user: any) => <>{user.id}</>,
    },
    {
      dataField: "img",
      text: "#",
      formatter: (cellContent: any, user: any) => (
        <>
          {!user.img ? (
            <div className="avatar-sm d-inline-block align-middle me-2">
              <div className="avatar-title bg-soft-light text-light font-size-24 m-0 rounded-circle">
                <i className="bx bxs-user-circle"></i>
              </div>
            </div>
          ) : (
            <div>
              <img className="rounded-circle avatar-sm" src={user.img} alt="" />
            </div>
          )}
        </>
      ),
    },
    {
      text: "Name",
      dataField: "name",
      sort: true,
      formatter: (cellContent: any, user: any) => (
        <>
          <h5 className="font-size-14 mb-1">
            <Link to="#" className="text-dark">
              {user.name}
            </Link>
          </h5>
          <p className="text-muted mb-0">{user.designation}</p>
        </>
      ),
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      text: "Tags",
      dataField: "tags",
      sort: true,
      formatter: (cellContent: any, user: any) => (
        <>
          {map(
            user.tags,
            (tag, index: number) =>
              index < 2 && (
                <Link
                  to="#"
                  className="badge badge-soft-primary font-size-11 m-1"
                  key={"_skill_" + user.id + index}
                >
                  {tag}
                </Link>
              )
          )}
          {size(user.tags) > 2 && (
            <Link
              to="#"
              className="badge badge-soft-primary font-size-11 m-1"
              key={"_skill_" + user.id}
            >
              {size(user.tags) - 1} + more
            </Link>
          )}
        </>
      ),
    },
    {
      dataField: "projects",
      text: "Projects",
      sort: true,
    },
    {
      dataField: "menu",
      isDummyField: true,
      editable: false,
      text: "Action",
      formatter: (cellContent: any, user: any) => (
        <div className="d-flex gap-3">
          <Link className="text-success" to="#">
            <i
              className="mdi mdi-pencil font-size-18"
              id="edittooltip"
              onClick={() => handleUserClick(user)}
            ></i>
          </Link>
          <Link className="text-danger" to="#">
            <i
              className="mdi mdi-delete font-size-18"
              id="deletetooltip"
              onClick={() => handleDeleteUser(user)}
            ></i>
          </Link>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (users && !users.length) {
      dispatch(onGetUsers());
      setIsEdit(false);
    }
  }, [dispatch, users]);

  useEffect(() => {
    setUserList(users);
    setIsEdit(false);
  }, [users]);

  const toggle = () => {
    setModal(!modal);
    if (!modal && !isEmpty(users) && !!isEdit) {
      setTimeout(() => {
        setUserList(users);
        setIsEdit(false);
      }, 500);
    }
  };

  const handleUserClick = (arg: any) => {
    const user = arg;

    setUserList({
      id: user.id,
      name: user.name,
      designation: user.designation,
      email: user.email,
      tags: user.tags,
      projects: user.projects,
    });
    setIsEdit(true);

    toggle();
  };

  const handleDeleteUser = (user: any) => {
    dispatch(onDeleteUser(user));
  };

  /**
   * Handling submit user on user form
   */
  const handleValidUserSubmit = (values: any) => {
    if (isEdit) {
      const updateUser = {
        id: userList.id,
        name: values.name,
        designation: values.designation,
        tags: values.tags,
        email: values.email,
        projects: values.projects,
      };
      // update user
      dispatch(onUpdateUser(updateUser));
      setIsEdit(false);
    } else {
      const newUser = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        name: values["name"],
        designation: values["designation"],
        email: values["email"],
        tags: values["tags"],
        projects: values["projects"],
      };
      // save new user
      dispatch(onAddNewUser(newUser));
    }
    toggle();
  };
  const handleUserClicks = () => {
    setUserList("");
    setIsEdit(false);
    toggle();
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>User List | Finestel - React Admin & Overview Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="User List" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    // keyField="id"
                    // columns={contactListColumns}
                    // data={users}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={users}
                        columns={contactListColumns}
                        bootstrap4
                        search
                      >
                        {(toolkitProps) => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <div className="row align-ite  ms-center">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <h5 className="card-title">
                                      Contact List{" "}
                                      <span className="text-muted fw-normal ms-2">
                                        (834)
                                      </span>
                                    </h5>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                                    <div>
                                      <Nav pills>
                                        <NavItem>
                                          <NavLink
                                            href="/contacts-list"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="List"
                                            className="active"
                                          >
                                            <i className="bx bx-list-ul"></i>
                                          </NavLink>
                                        </NavItem>
                                        <NavItem>
                                          <NavLink
                                            href="/contacts-grid"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Grid"
                                          >
                                            <i className="bx bx-grid-alt"></i>
                                          </NavLink>
                                        </NavItem>
                                      </Nav>
                                    </div>
                                    <div>
                                      <Link
                                        to="#"
                                        className="btn btn-light"
                                        onClick={handleUserClicks}
                                      >
                                        <i className="bx bx-plus me-1"></i> Add
                                        New
                                      </Link>
                                    </div>

                                    <UncontrolledDropdown>
                                      <DropdownToggle
                                        className="btn btn-link text-muted py-1 font-size-16 shadow-none"
                                        tag="a"
                                      >
                                        <i className="bx bx-dots-horizontal-rounded"></i>
                                      </DropdownToggle>

                                      <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                          <DropdownItem to="#">
                                            Action
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem to="#">
                                            Another action
                                          </DropdownItem>
                                        </li>
                                        <li>
                                          <DropdownItem to="#">
                                            Something else here
                                          </DropdownItem>
                                        </li>
                                      </ul>
                                    </UncontrolledDropdown>
                                  </div>
                                </div>
                              </div>
                              <Col sm="4">
                                <div className="search-box ms-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar {...toolkitProps.searchProps} />
                                    <i className="bx bx-search-alt search-icon-search" />
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                    selectRow={selectRow}
                                    defaultSorted={defaultSorted}
                                    classes={
                                      "table align-middle table-nowrap table-hover"
                                    }
                                    bordered={false}
                                    striped={false}
                                    // responsive
                                  />

                                  <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle} tag="h4">
                                      {!!isEdit ? "Edit User" : "Add User"}
                                    </ModalHeader>
                                    <ModalBody>
                                      <AvForm
                                        onValidSubmit={(
                                          e: any,
                                          values: any
                                        ) => {
                                          handleValidUserSubmit(values);
                                        }}
                                      >
                                        <Row form>
                                          <Col xs={12}>
                                            <div className="mb-3">
                                              <AvField
                                                name="name"
                                                label="Name"
                                                type="text"
                                                errorMessage="Invalid name"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.name || ""}
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                name="designation"
                                                label="Designation"
                                                type="text"
                                                errorMessage="Invalid Designation"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={
                                                  userList.designation || ""
                                                }
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                name="email"
                                                label="Email"
                                                type="email"
                                                errorMessage="Invalid Email"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.email || ""}
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                type="select"
                                                name="tags"
                                                className="form-select"
                                                label="Option"
                                                helpMessage="MULTIPLE!"
                                                multiple={true}
                                                required
                                                value={userList.tags || ""}
                                              >
                                                <option>Photoshop</option>
                                                <option>illustrator</option>
                                                <option>Html</option>
                                                <option>Php</option>
                                                <option>Java</option>
                                                <option>Python</option>
                                                <option>UI/UX Designer</option>
                                                <option>Ruby</option>
                                                <option>Css</option>
                                              </AvField>
                                            </div>
                                            <div className="mb-3">
                                              <AvField
                                                name="projects"
                                                label="Projects"
                                                type="text"
                                                errorMessage="Invalid Projects"
                                                validate={{
                                                  required: { value: true },
                                                }}
                                                value={userList.projects || ""}
                                              />
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col>
                                            <div className="text-end">
                                              <button
                                                type="submit"
                                                className="btn btn-success save-user"
                                              >
                                                Save
                                              </button>
                                            </div>
                                          </Col>
                                        </Row>
                                      </AvForm>
                                    </ModalBody>
                                  </Modal>
                                </div>
                              </Col>
                            </Row>
                            <Row className="align-items-md-center mt-30">
                              <Col className="pagination pagination-rounded justify-content-end mb-2">
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </Col>
                            </Row>
                          </React.Fragment>
                        )}
                      </ToolkitProvider>
                    )}
                  </PaginationProvider>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ContactsList);
