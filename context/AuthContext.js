"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage
    const storedUser = localStorage.getItem("lms_user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  // ✅ Register new user
  const register = (name, email, password) => {
    const newUser = { name, email, password };
    localStorage.setItem("lms_user", JSON.stringify(newUser));
    setUser(newUser);
  };

  // ✅ Login existing user
  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("lms_user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      return true;
    }
    return false;
  };

  // ✅ Logout user
  const logout = () => {
    localStorage.removeItem("lms_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
