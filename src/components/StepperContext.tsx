// src/context/StepperContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface StepperState {
  currentStep: number;
  completedSteps: number[];
}

interface StepperContextType {
  stepperState: { [key: string]: StepperState };
  setStepperState: React.Dispatch<React.SetStateAction<{ [key: string]: StepperState }>>;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const StepperProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stepperState, setStepperState] = useState<{ [key: string]: StepperState }>(() => {
    const savedState = localStorage.getItem('stepperState');
    return savedState ? JSON.parse(savedState) : {};
  });

  useEffect(() => {
    localStorage.setItem('stepperState', JSON.stringify(stepperState));
  }, [stepperState]);

  return (
    <StepperContext.Provider value={{ stepperState, setStepperState }}>
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = (type: string) => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepper must be used within a StepperProvider');
  }

  const { stepperState, setStepperState } = context;

  const setCurrentStep = (step: number) => {
    setStepperState((prevState) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        currentStep: step,
      },
    }));
  };

  const setCompletedSteps = (steps: number[]) => {
    setStepperState((prevState) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        completedSteps: steps,
      },
    }));
  };

  return {
    currentStep: stepperState[type]?.currentStep || 0,
    completedSteps: stepperState[type]?.completedSteps || [],
    setCurrentStep,
    setCompletedSteps,
  };
};