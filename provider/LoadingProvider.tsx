"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { Loader2 } from "lucide-react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
  startLoading: () => {},
  stopLoading: () => {},
});

export const useGlobalLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const startLoading = useCallback(() => {
    if (isFirstLoad) {
      setIsLoading(true);
    }
  }, [isFirstLoad]);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
    setIsFirstLoad(false);
  }, []);

  const handleSetIsLoading = useCallback(
    (loading: boolean) => {
      if (loading) {
        startLoading();
      } else {
        stopLoading();
      }
    },
    [startLoading, stopLoading],
  );

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading: handleSetIsLoading,
        startLoading,
        stopLoading,
      }}
    >
      {/* Always render children so hooks can run */}
      <div style={{ display: isLoading && isFirstLoad ? "none" : "block" }}>
        {children}
      </div>

      {/* Loading overlay */}
      {isLoading && isFirstLoad && (
        <div className="fixed inset-0 z-[9999] min-h-screen flex items-center justify-center bg-primary">
          <div className="text-center">
            <Loader2 className="h-16 w-16 md:h-20 md:w-20 animate-spin text-white mx-auto mb-4" />
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
}
