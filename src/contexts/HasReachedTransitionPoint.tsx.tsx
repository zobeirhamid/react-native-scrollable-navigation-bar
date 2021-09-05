import React, { useContext, useState, useMemo } from 'react';

export type HasReachedTransitionPointState = {
  hasReachedTransitionPoint: boolean;
  setHasReachedTransitionPoint: (hasReachedTransitionPoint: boolean) => void;
};

const HasReachedTransitionPointContext = React.createContext<
  HasReachedTransitionPointState | undefined
>(undefined);

export const useHasReachedTransitionPoint = () => {
  const context = useContext(HasReachedTransitionPointContext);

  if (context === undefined) {
    throw new Error(
      'useHasReachedTransitionPoint must be used within a HasReachedTransitionPointProvider'
    );
  }

  return context;
};

export const HasReachedTransitionPointProvider: React.FC<{}> = ({
  children,
}) => {
  const [hasReachedTransitionPoint, setHasReachedTransitionPoint] =
    useState(false);
  const hasReachedTransitionPointContext = useMemo(() => {
    return {
      hasReachedTransitionPoint,
      setHasReachedTransitionPoint,
    };
  }, [hasReachedTransitionPoint, setHasReachedTransitionPoint]);

  return (
    <HasReachedTransitionPointContext.Provider
      value={hasReachedTransitionPointContext}
    >
      {children}
    </HasReachedTransitionPointContext.Provider>
  );
};
