import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const ContextProvider = ({ initialState, reducer, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const useContextValue = () => useContext(Context);
