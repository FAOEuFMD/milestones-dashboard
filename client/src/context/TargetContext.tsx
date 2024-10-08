// This is needed to hold the targets data so all components can access it
// This is done by using the useTargetContext() hook


import React, { createContext, useState, useEffect, useContext, ReactNode } from "react"; // Ensure ReactNode is imported
import { fetchTargets } from "../services/apiService"; // Import the API call

// Define the interface for the context
interface TargetContextType {
  targets: any[];  // Define the type based on your data structure
  loading: boolean;
  error: string | null;
}

// Define the props for the TargetProvider, which includes children
interface TargetProviderProps {
  children: ReactNode;
}

// Create the context with an undefined default value
const TargetContext = createContext<TargetContextType | undefined>(undefined);

export const TargetProvider: React.FC<TargetProviderProps> = ({ children }) => {
  const [targets, setTargets] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTargets = async () => {
      try {
        const data = await fetchTargets();
        console.log(data); // For debugging purposes, see what data is fetched
        setTargets(data);
      } catch (err) {
        setError("Failed to load targets");
      } finally {
        setLoading(false);
      }
    };

    getTargets();
  }, []);

  return (
    <TargetContext.Provider value={{ targets, loading, error }}>
      {children}
    </TargetContext.Provider>
  );
};

// Custom hook to access the TargetContext
export const useTargetContext = () => {
  const context = useContext(TargetContext);
  if (!context) {
    throw new Error("useTargetContext must be used within a TargetProvider");
  }
  return context;
};