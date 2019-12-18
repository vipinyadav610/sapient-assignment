import React from "react";
import { Route, Switch } from "react-router-dom";
// import Private from "Hoc/Private";

// components
const NotFoundPage = React.lazy(() =>
  import("Components/NotFoundPage/NotFoundPage")
);
const AppLayout = React.lazy(() => import("Containers/AppLayout/AppLayout"));
const PostList = React.lazy(() => import("Containers/PostList/PostList"));

export const Routes = () => {
  return (
    <Switch>
      <Route component={AppLayout} />
    </Switch>
  );
};

export const ContentRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={PostList} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
export default Routes;
