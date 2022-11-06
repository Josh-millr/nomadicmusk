import React, { useState, createContext, useEffect } from "react";

export const RouteInfo = createContext(null);

const RouteContext = ({ children }) => {
  const [currRoute, setCurrRoute] = useState(null);

  useEffect(() => setCurrRoute(window.location.pathname), []);

  return (
    <RouteInfo.Provider value={{ currRoute, setCurrRoute }}>
      {children}
    </RouteInfo.Provider>
  );
};

export default RouteContext;
