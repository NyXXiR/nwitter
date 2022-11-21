import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {isLoggedin ? (
          <>
            <Route exact={true} path="/" element={<Home />} />
          </>
        ) : (
          <Route exact={true} path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;

//라우터 앱6 넘어오면서 안되는 내용 수정중. 사이트 참고
