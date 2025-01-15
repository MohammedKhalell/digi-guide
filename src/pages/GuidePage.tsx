import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';
import StepperComponent from '../components/StepperComponent';
import { Typography } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { guides } from '../components/Types'; // Ensure this import is correct
import '../styles/GuidePage.scss';

const GuidePage: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration' | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSelectGuide = (guide: 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration') => {
    setSelectedGuide(guide);
    setSelectedType(null); // Reset selected type when a new guide is selected
  };

  const handleSelectType = (type: string) => {
    setSelectedType(type);
  };

  const handleLogoClick = () => {
    setSelectedGuide(null);
    setSelectedType(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredGuides = guides.filter(guide => guide.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="container">
      <Navbar onLogoClick={handleLogoClick} onSearch={handleSearch} />
      <div className="content">
        <div className="left-menu">
          <LeftMenu onSelectGuide={handleSelectGuide} guides={filteredGuides} />
        </div>
        <div className="stepper-container">
          <TransitionGroup>
            {selectedType ? (
              <CSSTransition key="stepper" timeout={300} classNames="fade">
                <StepperComponent type={selectedType} />
              </CSSTransition>
            ) : (
              <CSSTransition key="welcome" timeout={300} classNames="fade">
                <div className="welcome-page">
                  <Typography variant="h4">Welcome to the Guide</Typography>
                  <Typography>Select a guide from the left menu to get started.</Typography>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        <div className="right-menu">
          {selectedGuide && (
            <RightMenu guide={selectedGuide} onSelectType={handleSelectType} activeType={selectedType || ''} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GuidePage;