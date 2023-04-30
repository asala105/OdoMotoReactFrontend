import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom";
import { PageWrapper } from '../../layout/PageWrapper';

export default function RouteSwitcher({ path, exact, children }) {
  const token = useSelector((state) => state?.token);
  return token?.tokenVal || true ? (
    <Route path={path} exact={exact}>
      <PageWrapper>
        {children}
      </PageWrapper>
    </Route>
  ) : (
    <Redirect to="/login" />
  );
}