import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User/user";
import Admin from "./components/Admin/admin";
import Homepage from "./components/Home/Homepage";
import ManagerUser from "./components/Admin/Content/ManagerUser";
import DashBoard from "./components/Admin/Content/DashBoard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/users" element={<User />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route index path="manger-user" element={<ManagerUser />} />
          <Route path="DashBoard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
