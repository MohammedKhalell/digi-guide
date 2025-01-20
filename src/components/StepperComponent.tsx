import React, { useEffect, useRef, useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box, Divider } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { StepperComponentProps, stepsData, menuItems } from './Types';
import { useStepper } from './StepperContext';
import '../styles/StepperComponent.scss';

const StepperComponent: React.FC<StepperComponentProps> = ({
  type,
  onNextGuide,
  guideName
}) => {
  const steps = stepsData[type] || [];
  const { currentStep, completedSteps, setCurrentStep, setCompletedSteps } = useStepper(type);
  const [animationClass, setAnimationClass] = useState('slide-in');
  const stepperContainerRef = useRef<HTMLDivElement>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // Find the current guide type label
  const currentGuideType = Object.values(menuItems)
    .flat()
    .find(item => item.type === type)?.label || type;

  useEffect(() => {
    if (animationClass === 'slide-out') {
      const timer = setTimeout(() => {
        setAnimationClass('slide-in');
        if (stepperContainerRef.current) {
          stepperContainerRef.current.scrollTop = 0;
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationClass]);

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      onNextGuide();
    } else {
      setAnimationClass('slide-out');
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setCompletedSteps([...completedSteps, currentStep]);
      }, 500);
    }
  };

  const handleBack = () => {
    setAnimationClass('slide-out');
    setTimeout(() => {
      setCurrentStep(currentStep - 1);
      setCompletedSteps(completedSteps.filter(step => step !== currentStep - 1));
    }, 500);
  };

  const handleImageClick = (image: string) => {
    setExpandedImage(image);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  if (!steps || steps.length === 0) {
    return <div>No steps available</div>;
  }

  return (
    <div className="stepper-container animate-stepper" ref={stepperContainerRef}>
      <Box className="stepper-header">
        <Typography variant="h5" className="guide-name">
          {guideName || 'Guide'}
        </Typography>
        <Typography variant="subtitle1" className="guide-type">
          {currentGuideType}
        </Typography>
        <Divider style={{ margin: '16px 0' }} />
      </Box>

      <Stepper activeStep={currentStep} orientation="horizontal">
        {steps.map((step, index) => (
          <Step key={index} completed={completedSteps.includes(index)}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={`step-content ${animationClass}`}>
        <div className="step-description">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({ src, alt }) => (
                src && (
                  <img
                    src={src}
                    alt={alt}
                    style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
                    onClick={() => handleImageClick(src)}
                  />
                )
              ),
            }}
          >
            {steps[currentStep]?.description}
          </ReactMarkdown>
        </div>
      </div>
      <div className="stepper-buttons">
        <Button disabled={currentStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button onClick={handleNext}>
          {currentStep === steps.length - 1 ? 'Take Quiz' : 'Next'}
        </Button>
      </div>
      {expandedImage && (
        <div className="expanded-image-overlay" onClick={handleCloseExpandedImage}>
          <img
            src={expandedImage}
            alt="Expanded"
            style={{ maxWidth: "90%", maxHeight: "90%", cursor: "pointer" }}
          />
        </div>
      )}
    </div>
  );
};

export default StepperComponent;