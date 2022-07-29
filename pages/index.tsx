import React from "react";
import { Home } from "../src/modules/HomeModule/views";

export default () => {
  return (
    <>
      <style global jsx>{`
        html,
        body {
          margin: 0;
        },
      `}</style>
      <Home />
    </>
  );
};
