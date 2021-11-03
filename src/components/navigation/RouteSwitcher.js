import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

export default function RouteSwitcher({ path, exact, children }) {
    const token = useSelector((state) => state?.token);
    return token?.tokenVal ? (
        <Route path={path} exact={exact}>
          {children}
        </Route>
      ) : (
        <Redirect to="/login" />
      );
}