import React from "react";

const Layout = ({ children, style }) => {
  return (
    <div className="w-[70vw] mx-auto h-screen" style={{ ...style }}>
      {children}
    </div>
  );
};

export default Layout;
