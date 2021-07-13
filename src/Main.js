import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { connect, useDispatch, useSelector } from "react-redux";
import { Route, Switch } from 'react-router'
import AppContent from "./component/Content";

function Main() {
  const { enqueueSnackbar } = useSnackbar();
  const error = useSelector((state) => state.errors.messege);
  const severity = useSelector((state) => state.errors.severity);

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
      <Switch>
        <Route
          exact
          path='/'
          render={(_props) => (
            <AppContent {..._props}  />
          )}
        />
      </Switch>
    </div>
  );
}

export default Main;
