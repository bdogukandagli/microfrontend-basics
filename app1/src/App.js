import React, { lazy, Suspense } from "react";

const RemoteContainer = lazy(() => import("app2/ButtonContainer"));

const App = () => {
  return (
    <React.Fragment>
      <div>
        <h2>App 1</h2>
        <div>Root</div>
      </div>
      <Suspense fallback="Loading Button">
        <RemoteContainer />
      </Suspense>
    </React.Fragment>
  );
};

export default App;
