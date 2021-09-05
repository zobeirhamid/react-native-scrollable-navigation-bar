import React, { useContext, useMemo } from 'react';

export type MeasurementsState = {
  statusBarHeight: number;
  navigationBarHeight: number;
  headerHeight: number;
  transitionPoint: number;
  stickyHeight: number;
  snapHeight: number;
  borderHeight: number;
};

const MeasurementsContext = React.createContext<MeasurementsState | undefined>(
  undefined
);

export const useMeasurements = () => {
  const context = useContext(MeasurementsContext);

  if (context === undefined) {
    throw new Error(
      'useMeasurements must be used within a MeasurementsProvider'
    );
  }

  return context;
};

export const MeasurementsProvider: React.FC<MeasurementsState> = ({
  children,
  statusBarHeight,
  navigationBarHeight,
  headerHeight,
  transitionPoint,
  stickyHeight,
  snapHeight,
  borderHeight,
}) => {
  const measurementsContext = useMemo(() => {
    return {
      statusBarHeight,
      navigationBarHeight,
      headerHeight,
      transitionPoint,
      stickyHeight,
      snapHeight,
      borderHeight,
    };
  }, [
    statusBarHeight,
    navigationBarHeight,
    headerHeight,
    transitionPoint,
    stickyHeight,
    snapHeight,
    borderHeight,
  ]);

  return (
    <MeasurementsContext.Provider value={measurementsContext}>
      {children}
    </MeasurementsContext.Provider>
  );
};
