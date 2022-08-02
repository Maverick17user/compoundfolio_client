import React from "react";
import { Home } from "../src/modules/HomeModule/components";
import useSWR from "swr";
import fetcher from "@core/functions/fetcher";

export default () => {
  useSWR("{ users { name } }", fetcher);
  return (
    <>
      <Home />
    </>
  );
};
