import React, { useEffect, useState, useCallback } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { isEmpty, map } from "lodash";
import moment from "moment";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledDropdown,
} from "reactstrap";

import classnames from "classnames";

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import * as images from "../../assets/images/index";
import {
  addMessage as onAddMessage,
  getChats as onGetChats,
  getContacts as onGetContacts,
  getGroups as onGetGroups,
  getMessages as onGetMessages,
} from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

interface CurrentUserTypes {
  name: string;
  isActive: boolean;
}
const Chat = () => {
  const dispatch = useDispatch();

  const { chats, groups, contacts, messages } = useSelector((state: any) => ({
    chats: state.Chat.chats,
    groups: state.Chat.groups,
    contacts: state.Chat.contacts,
    messages: state.Chat.messages,
  }));

  const [messageBox, setMessageBox] = useState<any>(null);
  const [currentRoomId, setCurrentRoomId] = useState<number>(1);
  const [currentUser, setCurrentUser] = useState<CurrentUserTypes>({
    name: "Henry Wells",
    isActive: true,
  });
  const [menu1, setMenu1] = useState<boolean>(false);
  const [search_Menu, setsearch_Menu] = useState<boolean>(false);
  const [settings_Menu, setsettings_Menu] = useState<boolean>(false);
  const [other_Menu, setother_Menu] = useState<boolean>(false);
  const [activeTab, setactiveTab] = useState<string>("1");
  const [Chat_Box_Username, setChat_Box_Username] =
    useState<string>("Steven Franklin");
  const [Chat_Box_User_Status, setChat_Box_User_Status] =
    useState<string>("online");
  const [curMessage, setcurMessage] = useState<string>("");

  useEffect(() => {
    dispatch(onGetChats());
    dispatch(onGetGroups());
    dispatch(onGetContacts());
    dispatch(onGetMessages(currentRoomId));
  }, [dispatch, currentRoomId]);

  const scrollToBottom = useCallback(() => {
    if (messageBox) {
      messageBox.scrollTop = messageBox.scrollHeight + 1000;
    }
  }, [messageBox]);

  useEffect(() => {
    if (!isEmpty(messages)) scrollToBottom();
  }, [messages, scrollToBottom]);

  //Toggle Chat Box Menus
  const toggleSearch = () => {
    setsearch_Menu(!search_Menu);
  };

  const toggleSettings = () => {
    setsettings_Menu(!settings_Menu);
  };

  const toggleOther = () => {
    setother_Menu(!other_Menu);
  };

  const toggleTab = (tab: any) => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  //Use For Chat Box
  const userChatOpen = (roomId: any, name: string, id: any, status: any) => {
    setChat_Box_Username(name);
    setCurrentRoomId(roomId);
    dispatch(onGetMessages(roomId));
  };

  const addMessage = (roomId: number, sender: string) => {
    const message: any = {
      id: Math.floor(Math.random() * 100),
      roomId,
      sender,
      message: curMessage,
      createdAt: new Date(),
    };
    setcurMessage("");
    dispatch(onAddMessage(message));
  };

  const onKeyPress = (e: any) => {
    const { key, value } = e;
    if (key === "Enter") {
      setcurMessage(value);
      addMessage(currentRoomId, currentUser.name);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Chat | Finestel - React Admin & Overview Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Apps" breadcrumbItem="Chat" />

          <div className="d-lg-flex">
            <Card className="chat-leftsidebar">
              <div className="p-3 px-4 border-bottom">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 me-3 align-self-center">
                    <img
                      src={images.avatar1}
                      className="avatar-sm rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="font-size-15 mt-0 mb-1">
                      <Link to="#" className="text-dark">
                        {currentUser.name}
                      </Link>
                    </h5>
                    <p className="text-muted mb-0">
                      <i className="mdi mdi-circle text-success align-middle me-1" />
                      Active
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Dropdown
                      isOpen={menu1}
                      toggle={() => setMenu1(!menu1)}
                      className="chat-noti-dropdown"
                    >
                      <DropdownToggle tag="i" className="text-muted">
                        <i className="mdi mdi-dots-horizontal font-size-18"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem to="#">Action</DropdownItem>
                        <DropdownItem to="#">Another action</DropdownItem>
                        <DropdownItem to="#">Something else</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>

              <div className="p-3">
                <div className="search-box position-relative">
                  <input
                    type="text"
                    className="form-control rounded border"
                    placeholder="Search..."
                  />
                  <i className="bx bx-search search-icon"></i>
                </div>
              </div>

              <div className="chat-leftsidebar-nav">
                <Nav pills justified className="bg-soft-light p-1">
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "1",
                      })}
                      onClick={() => {
                        toggleTab("1");
                      }}
                    >
                      <i className="bx bx-chat font-size-20 d-sm-none" />
                      <span className="d-none d-sm-block">Chat</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "2",
                      })}
                      onClick={() => {
                        toggleTab("2");
                      }}
                    >
                      <i className="bx bx-group font-size-20 d-sm-none" />
                      <span className="d-none d-sm-block">Groups</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "3",
                      })}
                      onClick={() => {
                        toggleTab("3");
                      }}
                    >
                      <i className="bx bx-book-content font-size-20 d-sm-none" />
                      <span className="d-none d-sm-block">Contacts</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <PerfectScrollbar style={{ height: "550px" }}>
                      <div className="pt-3">
                        <div className="px-3">
                          <h5 className="font-size-14 mb-3">Recent</h5>
                        </div>
                        <ul className="list-unstyled chat-list">
                          {map(chats, (chat) => (
                            <li
                              key={chat.id + chat.status}
                              className={
                                currentRoomId === chat.roomId ? "active" : ""
                              }
                            >
                              <Link
                                to="#"
                                onClick={() => {
                                  userChatOpen(
                                    chat.roomId,
                                    chat.name,
                                    chat.id,
                                    chat.status
                                  );
                                }}
                              >
                                <div className="d-flex align-items-start">
                                  <div className="align-self-center me-3">
                                    <i
                                      className={
                                        chat.status === "online"
                                          ? "mdi mdi-circle text-success font-size-10"
                                          : chat.status === "intermediate"
                                          ? "mdi mdi-circle text-warning font-size-10"
                                          : "mdi mdi-circle font-size-10"
                                      }
                                    />
                                  </div>
                                  <div className="flex-shrink-0 user-img online align-self-center me-3">
                                    <img
                                      src={chat.image}
                                      className="rounded-circle avatar-sm"
                                      alt=""
                                    />
                                  </div>

                                  <div className="flex-grow-1 overflow-hidden">
                                    <h5 className="text-truncate font-size-14 mb-1">
                                      {chat.name}
                                    </h5>
                                    <p className="text-truncate mb-0">
                                      {chat.description}
                                    </p>
                                  </div>
                                  <div className="font-size-11">
                                    {chat.time}
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </PerfectScrollbar>
                  </TabPane>

                  <TabPane tabId="2">
                    <PerfectScrollbar
                      className="chat-message-list"
                      style={{ height: "410px" }}
                    >
                      <div className="pt-3">
                        <div className="px-3">
                          <h5 className="font-size-14 mb-3">Groups</h5>
                        </div>
                        <ul className="list-unstyled chat-list">
                          {groups &&
                            groups.map((group: any) => (
                              <li key={"test" + group.image}>
                                <Link
                                  to="#"
                                  onClick={() => {
                                    userChatOpen(
                                      group.id,
                                      group.name,
                                      Math.floor(Math.random() * 100),
                                      group.status
                                    );
                                  }}
                                >
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 avatar-sm me-3">
                                      <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        {group.image}
                                      </span>
                                    </div>

                                    <div className="flex-grow-1">
                                      <h5 className="font-size-14 mb-0">
                                        {group.name}
                                      </h5>
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </PerfectScrollbar>
                  </TabPane>

                  <TabPane tabId="3">
                    <PerfectScrollbar
                      className="chat-message-list"
                      style={{ height: "410px" }}
                    >
                      <div className="pt-3">
                        <div className="px-3">
                          <h5 className="font-size-14 mb-3">Contacts</h5>
                        </div>

                        <div>
                          {contacts &&
                            contacts.map((contact: any) => (
                              <div
                                key={"test_" + contact.category}
                                className={
                                  contact.category === "A" ? "" : "mt-4"
                                }
                              >
                                <div>
                                  <span className="px-3 contact-list">
                                    {contact.category}
                                  </span>
                                </div>

                                <ul className="list-unstyled chat-list">
                                  {contact.child.map((array: any) => (
                                    <li key={"test" + array.id}>
                                      <Link
                                        to="#"
                                        onClick={() => {
                                          userChatOpen(
                                            array.id,
                                            array.name,
                                            Math.floor(Math.random() * 100),
                                            array.status
                                          );
                                        }}
                                      >
                                        <h5 className="font-size-14 mb-0">
                                          {array.name}
                                        </h5>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                        </div>
                      </div>
                    </PerfectScrollbar>
                  </TabPane>
                </TabContent>
              </div>
            </Card>
            <div className="w-100 user-chat">
              <Card>
                <div className="p-4 border-bottom ">
                  <Row>
                    <Col md="4" xs="9">
                      <h5 className="font-size-15 mb-1">{Chat_Box_Username}</h5>

                      <p className="text-muted mb-0">
                        <i
                          className={
                            Chat_Box_User_Status === "online"
                              ? "mdi mdi-circle text-success align-middle me-1"
                              : Chat_Box_User_Status === "intermediate"
                              ? "mdi mdi-circle text-warning align-middle me-1"
                              : "mdi mdi-circle align-middle me-1"
                          }
                        />
                        {Chat_Box_User_Status}
                      </p>
                    </Col>
                    <Col md="8" xs="3">
                      <ul className="list-inline user-chat-nav text-end mb-0">
                        <li className="list-inline-item d-none d-sm-inline-block">
                          <Dropdown isOpen={search_Menu} toggle={toggleSearch}>
                            <DropdownToggle className="btn nav-btn" tag="i">
                              <i className="bx bx-search-alt-2" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-md dropdown-menu-end">
                              <Form className="p-3">
                                <FormGroup className="m-0">
                                  <InputGroup>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      placeholder="Search ..."
                                      aria-label="Recipient's username"
                                    />
                                    <Button color="primary" type="submit">
                                      <i className="mdi mdi-magnify" />
                                    </Button>
                                  </InputGroup>
                                </FormGroup>
                              </Form>
                            </DropdownMenu>
                          </Dropdown>
                        </li>
                        <li className="list-inline-item  d-none d-sm-inline-block">
                          <Dropdown
                            isOpen={settings_Menu}
                            toggle={toggleSettings}
                          >
                            <DropdownToggle className="btn nav-btn" tag="i">
                              <i className="bx bx-cog" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem to="#">View Profile</DropdownItem>
                              <DropdownItem to="#">Clear chat</DropdownItem>
                              <DropdownItem to="#">Muted</DropdownItem>
                              <DropdownItem to="#">Delete</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </li>
                        <li className="list-inline-item">
                          <Dropdown isOpen={other_Menu} toggle={toggleOther}>
                            <DropdownToggle className="btn nav-btn" tag="i">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem to="#">Action</DropdownItem>
                              <DropdownItem to="#">Another Action</DropdownItem>
                              <DropdownItem to="#">Something else</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>

                <div>
                  <PerfectScrollbar
                    className="chat-conversation p-3 px-2"
                    style={{ height: "600px" }}
                    containerRef={(ref) => setMessageBox(ref)}
                  >
                    <ul className="list-unstyled">
                      <li>
                        <div className="chat-day-title">
                          <span className="title">Today</span>
                        </div>
                      </li>
                      {messages &&
                        map(messages, (message) => {
                          return (
                            <li
                              key={"test_k" + message.id}
                              className={
                                message.sender === currentUser.name
                                  ? "right"
                                  : ""
                              }
                            >
                              <div className="conversation-list">
                                <div className="ctext-wrap">
                                  <div className="ctext-wrap-content">
                                    <h5 className="conversation-name">
                                      <Link to="#" className="user-name">
                                        {message.sender}
                                      </Link>
                                      <span className="time">
                                        {moment(message.createdAt).format(
                                          "DD-MM-YY hh:mm"
                                        )}
                                      </span>
                                    </h5>
                                    <p className="mb-0">{message.message}</p>
                                  </div>

                                  <UncontrolledDropdown className="align-self-start">
                                    <DropdownToggle
                                      href="#"
                                      className="btn nav-btn"
                                      tag="i"
                                    >
                                      <i className="bx bx-dots-vertical-rounded" />
                                    </DropdownToggle>
                                    <DropdownMenu direction="right">
                                      <DropdownItem to="#">Copy</DropdownItem>
                                      <DropdownItem to="#">Save</DropdownItem>
                                      <DropdownItem to="#">
                                        Forward
                                      </DropdownItem>
                                      <DropdownItem to="#">Delete</DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </PerfectScrollbar>
                  <div className="p-3 border-top">
                    <Row>
                      <Col>
                        <div className="position-relative">
                          <input
                            type="text"
                            value={curMessage}
                            // onKeyPress={onKeyPress}
                            onChange={(e) => setcurMessage(e.target.value)}
                            className="form-control border bg-soft-light"
                            placeholder="Enter Message..."
                          />
                        </div>
                      </Col>
                      <Col className="col-auto">
                        <Button
                          type="button"
                          color="primary"
                          onClick={() =>
                            addMessage(currentRoomId, currentUser.name)
                          }
                          className="btn btn-primary chat-send w-md"
                        >
                          <span className="d-none d-sm-inline-block me-2">
                            Send
                          </span>{" "}
                          <i className="mdi mdi-send float-end" />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Chat;
