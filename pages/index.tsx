import React from "react";
import { Home } from "../src/modules/HomeModule/components";

export default () => {
  return (
    <>
      <style global jsx>{`
        @import url('http://fonts.cdnfonts.com/css/montserrat');
        @import url('http://fonts.cdnfonts.com/css/chakra-petch-2');
        
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
        },
      `}</style>
      <Home />
    </>
  );
};
