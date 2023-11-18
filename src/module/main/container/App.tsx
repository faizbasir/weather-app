import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../component/store/hooks";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Overview from "../../overview/Overview";

const App = () => {
  const currenLocation = useAppSelector((state) => state.currentLocation.value);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  let content = (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/overview"} />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </>
  );

  return (
    <>
      <BrowserRouter>{content}</BrowserRouter>
    </>
  );
};
export default App;
