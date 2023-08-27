import React from "react";
import Formtabs from "./formtabs";
import Formtabsdata from "./Formtabsdata";

const Form = (props) => {
  return (
    <>
      <form className="form-bg ">
        <Formtabs tabshow={props}/>
        {/* <Formtabsdata /> */}
      </form>
    </>
  );
};

export default Form;
