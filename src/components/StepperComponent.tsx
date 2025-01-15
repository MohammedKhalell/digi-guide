import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import { StepperComponentProps, stepsData } from './Types';

const StepperComponent: React.FC<StepperComponentProps> = ({ type }) => {
  const steps = stepsData[type] || [];
  const [stepState, setStepState] = useState<{ [key: string]: { currentStep: number; completedSteps: number[] } }>({
    'Type 1.1': { currentStep: 0, completedSteps: [] },
    'Type 1.2': { currentStep: 0, completedSteps: [] },
    'Type 1.3': { currentStep: 0, completedSteps: [] },
    'Type 1.2.1': { currentStep: 0, completedSteps: [] },
    'Type 1.2.2': { currentStep: 0, completedSteps: [] },
  });

  const currentStep = stepState[type]?.currentStep || 0;
  const completedSteps = stepState[type]?.completedSteps || [];

  const handleNext = () => {
    setStepState((prevState) => ({
      ...prevState,
      [type]: {
        currentStep: prevState[type].currentStep + 1,
        completedSteps: [...prevState[type].completedSteps, prevState[type].currentStep],
      },
    }));
  };

  const handleBack = () => {
    setStepState((prevState) => ({
      ...prevState,
      [type]: {
        currentStep: prevState[type].currentStep - 1,
        completedSteps: prevState[type].completedSteps.filter(step => step !== prevState[type].currentStep - 1),
      },
    }));
  };

  return (
    <div className="stepper-container">
      <Stepper activeStep={currentStep} orientation="horizontal">
        {steps.map((step, index) => (
          <Step key={index} completed={completedSteps.includes(index)}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="step-description">
        <Typography>{steps[currentStep]?.description}</Typography>
      </div>
      <div className="stepper-buttons">
        <Button disabled={currentStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button disabled={currentStep === steps.length - 1} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepperComponent;