import React, { lazy, Suspense } from "react";

const RemoteButton = lazy(() => import("app3/Button"));

const style = {
  padding: 16,
  backgroundColor: "#cccccc",
};

const ButtonContainer = () => {
  return (
    <div style={style}>
      <p>App 2 Container</p>
      <br />
      <br />
      <Suspense fallback="Button Loading From App3">
        <RemoteButton />
      </Suspense>
    </div>
  );
};

export default ButtonContainer;
