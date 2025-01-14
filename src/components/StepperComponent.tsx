import React from 'react';
import { Stepper, Step, StepLabel, Typography } from 'digitinary-ui';

const steps = ['Step 1', 'Step 2', 'Step 3'];

const StepperComponent: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Typography>{`Description for ${steps[activeStep]}`}</Typography>
        <div className="stepper-buttons">
          <button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </button>
          <button disabled={activeStep === steps.length - 1} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepperComponent;