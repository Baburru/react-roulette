import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WheelComponent from "./Components/Wheel/Wheel";
import QuestionComponent from "./Components/MCQ/McqComponent";

import reportWebVitals from "./reportWebVitals";
import "./myriad-pro-cufonfonts/MYRIADPRO-REGULAR.OTF";
import CongratsComponent from "./Components/Congrats/CongratsComponent";
import FailComponent from "./Components/Fail/FailComponent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <WheelComponent />,
  },
  {
    path: "/questions",
    element: <QuestionComponent />,
  },
  {
    path: "/congrats",
    element: <CongratsComponent />,
  },
  {
    path: "/failure",
    element: <FailComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
