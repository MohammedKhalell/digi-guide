import React from 'react';
import { Grid } from 'digitinary-ui';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';
import StepperComponent from '../components/StepperComponent';
import '../styles/GuidePage.scss';

const GuidePage: React.FC = () => {
  return (
    <Grid container className="container">
      <Grid item xs={2} className="left-menu">
        <LeftMenu />
      </Grid>
      <Grid item xs={8} className="stepper-container">
        <StepperComponent />
      </Grid>
      <Grid item xs={2} className="right-menu">
        <RightMenu />
      </Grid>
    </Grid>
  );
};

export default GuidePage;