import React, { useState } from 'react';
import { Typography } from '@mui/material';
import SideMenu from '../components/SideMenu';
import StepperComponent from '../components/StepperComponent';
import QuizComponent from '../components/QuizComponent';
import Navbar from '../components/Navbar';
import { guides, menuItems } from '../components/Types';
import { StepperProvider } from '../components/StepperContext';
import '../styles/GuidePage.scss';

const GuidePage: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration' | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const [completedTypes, setCompletedTypes] = useState<string[]>(() => {
    const saved = localStorage.getItem('completedTypes');
    return saved ? JSON.parse(saved) : [];
  });

  const handleSelectGuide = (guide: 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration' | null) => {
    setSelectedGuide(guide);
    setSelectedType(null);
    setIsQuizVisible(false);
  };

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setIsQuizVisible(false);
  };

  const handleLogoClick = () => {
    setSelectedGuide(null);
    setSelectedType(null);
    setIsQuizVisible(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleShowQuiz = () => {
    setIsQuizVisible(true);
  };

  const handleQuizComplete = (score: number) => {
    
    if (score >= 70 && selectedType && selectedGuide) {
      // Save completion status
      const newCompletedTypes = [...completedTypes, selectedType];
      setCompletedTypes(newCompletedTypes);
      localStorage.setItem('completedTypes', JSON.stringify(newCompletedTypes));

      // Get current guide's types
      const currentGuideTypes = menuItems[selectedGuide];
      const currentTypeIndex = currentGuideTypes.findIndex(item => item.type === selectedType);

      // Move to next type or guide
      if (currentTypeIndex < currentGuideTypes.length - 1) {
        // Move to next type in current guide
        setSelectedType(currentGuideTypes[currentTypeIndex + 1].type);
      } else {
        // Move to next guide
        const nextGuideIndex = guides.findIndex(g => g.name === selectedGuide) + 1;
        if (nextGuideIndex < guides.length) {
          const nextGuide = guides[nextGuideIndex].name as typeof selectedGuide;
          setSelectedGuide(nextGuide);
          setSelectedType(menuItems[nextGuide][0].type);
        } else {
          // Completed all guides
          setSelectedGuide(null);
          setSelectedType(null);
        }
      }
      
      // Reset quiz visibility
      setIsQuizVisible(false);
    }
  };

  // Filter guides based on search query
  const filteredGuides = guides.filter(guide => 
    guide.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderContent = () => {
    if (!selectedType) {
      return (
        <div className="welcome-page">
          <Typography variant="h4">Welcome to the Guide</Typography>
          <Typography>Select a guide from the left menu to get started.</Typography>
        </div>
      );
    }

    if (isQuizVisible) {
      return (
        <QuizComponent 
          type={selectedType}
          onComplete={handleQuizComplete}
          onBackToGuide={() => setIsQuizVisible(false)}
        />
      );
    }

    return (
      <StepperComponent 
        type={selectedType} 
        onNextGuide={handleShowQuiz}
        guideName={selectedGuide} 
      />
    );
  };

  return (
    <StepperProvider>
      <div className="container">
        <Navbar 
          onToggleSidebar={toggleSidebar} 
          onLogoClick={handleLogoClick}
        />
        <div className="content-wrapper">
          <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>
            <SideMenu
              onSelectGuide={handleSelectGuide}
              onSelectType={handleSelectType}
              guides={filteredGuides}
              selectedGuide={selectedGuide}
              selectedType={selectedType}
              completedTypes={completedTypes}
            />
          </div>
          <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
            <div className="stepper-container">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </StepperProvider>
  );
};

export default GuidePage;