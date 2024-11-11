import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

// estado Inicial:
const initialState = {
  username: localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "",
  password: localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "",
  logged: localStorage.getItem("logged")
    ? JSON.parse(localStorage.getItem("logged"))
    : [false]
};

// creo el  context:
export const AuthContext = createContext(initialState);

// creo la funcion Provider:
export function AuthProvider(props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("username", state.username);
    localStorage.setItem("password", state.password);
    localStorage.setItem("logged", state.logged);
  }, [state]);

  // Acciones:
  function saveUserData(userData) {
    dispatch({ type: "SAVE_USER_DATA", payload: userData });
  }

  function login(confirmation) {
    dispatch({ type: "LOGIN", payload: confirmation });
  }

  return (
    <AuthContext.Provider
      value={{
        username: state.username,
        password: state.password,
        logged: state.logged,
        saveUserData,
        login
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}