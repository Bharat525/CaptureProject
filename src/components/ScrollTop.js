//IMPORT

import React from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";


const ScrollTop = () => {
  const { pathname } = useLocation();
  console.log(pathname.key);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
};

export default ScrollTop;
