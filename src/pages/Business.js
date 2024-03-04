import React from "react";
import Businesses from "../components/Business";
import ListBusinesses from "../components/listBusiness";
import BeforeFooter from "../components/BeforeFooter";

const Business = () => {
  return (
    <>
      <Businesses />
      <ListBusinesses />
      <BeforeFooter />
    </>
  );
};

export default Business;
