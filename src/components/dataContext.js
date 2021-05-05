import { createContext, useReducer } from "react";

export const dataContext = createContext();
export const dataProvider = ({ children }) => {
  const initialState = {
    productsData: []
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);
  return <dataProvider value={dataReducer}>{children}</dataProvider>;
};
