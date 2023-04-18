import React from "react";
import { useRoutes } from "react-router-dom";
import PaymentTentech from "./pages/PaymentTentech/PaymentTentech";
import Success from "./pages/ResponceSuccess/Success";
import Failed from "./pages/ResponceFailed/Failed";
import PayForm from "./pages/PayForm/PayFrom";
import { PayValuesStore } from "./context/PayFormContext";
function App() {
  let element = useRoutes([
    { path: "/", element: <PaymentTentech /> },
    { path: "/responce/success", element: <Success /> },
    { path: "/responce/failed", element: <Failed /> },
    { path: "/payment", element: <PayForm /> },
  ]);

  return <PayValuesStore>{element}</PayValuesStore>;
}

export default App;
