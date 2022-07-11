import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { logoutUser } from "../../store/actions";

//redux
import { useDispatch } from "react-redux";

interface LogoutProps {
  history: any;
}

const Logout = ({ history }: LogoutProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser(history));
  }, [dispatch, history]);

  return <></>;
};

export default withRouter(Logout);
