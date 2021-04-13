import { createContext, useState, useContext } from "react";
export const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [route, setRoute] = useState("products");
  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export function useRoute() {
  return useContext(RouteContext);
}
