<<<<<<< HEAD
import React, { Component } from "react";

import ButtonTest from "./ButtonTest";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello 홀홀!</h1>
        <h2>리액트로 만드는 홀홀</h2>
        <ButtonTest></ButtonTest>
      </div>
    );
  }
=======
import React, { useEffect } from "react";

import RouterConfiguration from "../configs/router";
import { Outlet } from "react-router-dom";

import storage from "../helper/storage";
import { requestMyInfo } from "../apis/user";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoToStore } from "../stores/user";

import { Box } from "@mui/material";

import NavBar from "./organism/NavBar";
import "./App.css";

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const token = storage.get("token");
  const tokenSelector = useSelector(state => state.user.token);

  useEffect(() => {
    if (token) {
      requestMyInfo(
        res => {
          dispatch(setUserInfoToStore(res.data));
        },
        err => {
          storage.remove("token");
          navigate("/");
        },
      );
    }
  }, [tokenSelector]);

  return (
    <Box>
      {location.pathname !== "/" && (
        <Box>
          <Box sx={{ width: "100vw", height: "71px" }}></Box>
          <NavBar />
        </Box>
      )}
      <RouterConfiguration />
      <Outlet />
    </Box>
  );
>>>>>>> develop
}

export default App;
