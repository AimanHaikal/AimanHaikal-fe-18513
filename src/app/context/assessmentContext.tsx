import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AssessmentContextType {
  // Define the shape of your context state and methods
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const useAssessmentContext = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessmentContext must be used within an AssessmentProvider');
  }
  return context;
};

interface AssessmentProviderProps {
  children: ReactNode; // Explicitly type children prop
}

export const AssessmentProvider: React.FC<AssessmentProviderProps> = ({ children }) => {
  // Define state and methods to update the state
  const [state, setState] = useState<any>({});

  // Provide the state and methods to the context value
  const value: AssessmentContextType = {
    // Define your context state and methods here
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
};
