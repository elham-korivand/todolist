import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const personContext = React.createContext();
const initialState = { list: [], input: {} };

export const PersonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <personContext.Provider value={{ ...state }}>
      {children}
    </personContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(personContext);
};
