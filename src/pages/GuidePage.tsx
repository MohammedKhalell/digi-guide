// src/pages/GuidePage.tsx
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import SideMenu from '../components/SideMenu';
import StepperComponent from '../components/StepperComponent';
import Navbar from '../components/Navbar';
import { guides, stepsData } from '../components/Types'; // Import stepsData
import { StepperProvider } from '../components/StepperContext';
import '../styles/GuidePage.scss';

const GuidePage: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration' | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleSelectGuide = (guide: 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration' | null) => {
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNextGuide = () => {
    if (selectedType) {
      const types = Object.keys(stepsData);
      const currentIndex = types.findIndex(type => type === selectedType);
      if (currentIndex < types.length - 1) {
        setSelectedType(types[currentIndex + 1]);
      } else {
        const currentGuideIndex = guides.findIndex(guide => guide.name === selectedGuide);
        if (currentGuideIndex < guides.length - 1) {
          setSelectedGuide(guides[currentGuideIndex + 1].name as 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration');
          setSelectedType(null);
        } else {
          setSelectedGuide(null);
          setSelectedType(null);
        }
      }
    }
  };

  const filteredGuides = guides.filter(guide => guide.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <StepperProvider>
      <div className="container">
        <Navbar onToggleSidebar={toggleSidebar} onLogoClick={handleLogoClick} />
        <div className="content-wrapper">
          <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>
            <SideMenu
              onSelectGuide={handleSelectGuide}
              onSelectType={handleSelectType}
              guides={filteredGuides}
              selectedGuide={selectedGuide}
              selectedType={selectedType}
            />
          </div>
          <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
            <div className="stepper-container">
              {!selectedType ? (
                <div className="welcome-page">
                  <Typography variant="h4">Welcome to the Guide</Typography>
                  <Typography>Select a guide from the left menu to get started.</Typography>
                </div>
              ) : (
                <StepperComponent type={selectedType} onNextGuide={handleNextGuide} />
              )}
            </div>
          </div>
        </div>
      </div>
    </StepperProvider>
  );
};

export default GuidePage;