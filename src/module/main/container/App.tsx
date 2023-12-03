import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../component/store/hooks";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Overview from "../../overview/Overview";
import Header from "../../../component/header/Header";
import "./App.scss";
import Sandbox from "../../sandbox/Sandbox";

const App = () => {
  const currenLocation = useAppSelector((state) => state.currentLocation.value);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  let content = (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/overview"} />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/sandbox" element={<Sandbox />} />
      </Routes>
    </>
  );

  return (
    <>
      <Header />
      <BrowserRouter>{content}</BrowserRouter>
    </>
  );
};
export default App;
