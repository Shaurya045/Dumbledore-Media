import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <UserContext.Provider value={{ mousePosition, setMousePosition }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
