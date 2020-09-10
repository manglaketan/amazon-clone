import React, { createContext, useContext, useReducer } from "react";

//Prepare the DataLayer
export const StateContext = createContext();

//Used to wrap the DataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//Pull information from DataLayer
export const useStateValue = () => useContext(StateContext);
