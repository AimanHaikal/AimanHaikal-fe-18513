import React from "react";

// Define the context type
interface ContextType {
  showDescription: boolean;
  toggleDescription: () => void;
}

// Create context with default values
const defaultContext: ContextType = {
  showDescription: true,
  toggleDescription: () => {},
};
const AppContext = React.createContext<ContextType>(defaultContext);

// Custom hook to use the context
export const useAppContext = () => React.useContext(AppContext);

// Define the type for children prop
interface AppProviderProps {
  children: React.ReactNode;
}

// Provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [showDescription, setShowDescription] = React.useState(true);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <AppContext.Provider value={{ showDescription, toggleDescription }}>
      {children}
    </AppContext.Provider>
  );
};
