import React, { useState, createContext } from "react";

export const ThemeContext = createContext({
  light: true,
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [light, setLight] = useState(true);
  const toggleTheme = () => setLight(!light);

  return (
    <ThemeContext.Provider value={{ light, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
