import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches
  const storedDarkMode = localStorage.getItem("darkTheme") === "true"
  return storedDarkMode || prefersDarkMode
}

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("home alone")

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)
