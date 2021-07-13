import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { connect, useDispatch, useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import AppContent from "./component/Content";
import LoginModal from "./component/register/LoginModal";
import { authUser, getStats, getUpComing } from "./redux/actions/auth";
import { removeError } from "./redux/actions/error";


function Main() {
  const { enqueueSnackbar } = useSnackbar();
  const error = useSelector((state) => state.errors.messege);
  const severity = useSelector((state) => state.errors.severity);
  const [authType, setAuthType] = useState("signin");

  useEffect(() => {
    error &&
      enqueueSnackbar(error.message ? error.message : error, {
        variant: severity || error.severity,
        autoHideDuration: 1200,
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
    //eslint-disable-next-line
  }, [error]);
  return (
    <div>
      <Route
        path="/"
        render={(props) => (
          <LoginModal
            extendedButton
            authType={authType}
            setAuthType={setAuthType}
            onAuth={authUser}
            {...props}
            errors={error}
            removeError={removeError}
          />
        )}
      />
      <Switch>
        <Route exact path="/" render={(_props) => <AppContent {..._props} />} />
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser, //getting the current user from the state it an object with 2 keys isAuthenticated=boolian and the user obj wich contain id username and profile image
  };
}
const mapDispatchToProps = {
  authUser,
  removeError,
  getStats,
  getUpComing,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
