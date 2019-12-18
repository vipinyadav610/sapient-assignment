import React from "react";
import ErrorBoundary from "Components/ErrorBoundary";
import { ContentRoute } from "../../routes";

const AppLayout = () => {
  return (
    <ErrorBoundary>
      <ContentRoute />
    </ErrorBoundary>
  );
};

export default AppLayout;
