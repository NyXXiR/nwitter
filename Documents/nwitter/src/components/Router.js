import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {isLoggedin ? (
          <>
            <Router exact path="/" element={}>
              <Home />
            </Router>
          </>
        ) : (
          <Router exact path="/" element={}>
            <Auth />
          </Router>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;

//라우터 앱6 넘어오면서 안되는 내용 수정중. 사이트 참고