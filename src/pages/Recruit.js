import React from "react";
import BeforeFooter from "../components/BeforeFooter";
import RecruitList from "../components/Recruit";
import HeaderCustomer from "../components/HeaderCustomer";

const Recruit = () => {
  return (
    <>
      <HeaderCustomer />
      <RecruitList />
      <BeforeFooter />
    </>
  );
};

export default Recruit;
