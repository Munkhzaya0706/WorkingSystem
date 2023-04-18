import React, { useState } from "react";

const PayValueContext = React.createContext();

export const PayValuesStore = (props) => {
  const initialValues = {
    PayValues: null,
    userPhone: "80805698",
    contractId: "TT00256",
  };
  const [payValue, setPayValue] = useState(initialValues);

  const setValue = (PayValues) => {
    setPayValue({ ...payValue, PayValues });
  };

  const removeValues = () => {
    setPayValue(initialValues);
  };

  return (
    <PayValueContext.Provider value={{ setValue, removeValues, payValue }}>
      {props.children}
    </PayValueContext.Provider>
  );
};
export default PayValueContext;
