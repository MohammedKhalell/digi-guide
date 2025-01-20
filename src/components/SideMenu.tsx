import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, ListItemButton } from '@mui/material';
import { ArrowBack, CheckCircle } from '@mui/icons-material';
import { menuItems, SideMenuProps, GuideType } from './Types'; // Import menuItems, SideMenuProps, and GuideType
import '../styles/SideMenu.scss';

const SideMenu: React.FC<SideMenuProps> = ({
  onSelectGuide,
  onSelectType,
  guides,
  selectedGuide,
  selectedType,
  completedTypes
}) => {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setActiveType(selectedType);
  }, [selectedType]);

  const handleSelectType = (type: string) => {
    setActiveType(type);
    onSelectType(type);
  };

  const handleBackClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onSelectGuide(null);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Typography variant="h6" gutterBottom>
          {selectedGuide ? (
            <div className="back-button" onClick={handleBackClick}>
              <ArrowBack /> Back
            </div>
          ) : (
            'Department'
          )}
        </Typography>
      </div>
      <List className="sidebar-list">
        {selectedGuide ? (
          <div className={`menu-items ${isAnimating ? 'slide-out' : 'slide-in'}`}>
            {menuItems[selectedGuide]?.map((item, index) => (
              <div key={index} className="menu-item">
                <ListItemButton
                  onClick={() => handleSelectType(item.type)}
                  selected={selectedType === item.type}
                >
                  <ListItemIcon className="sidebar-icon" sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} className="sidebar-text" />
                  {completedTypes.includes(item.type) && (
                    <CheckCircle
                      className="check-icon"
                      sx={{
                        color: 'success.main',
                        marginLeft: 'auto'
                      }}
                    />
                  )}
                </ListItemButton>
              </div>
            ))}
          </div>
        ) : (
          <div className={`menu-items ${isAnimating ? 'slide-in' : ''}`}>
            {guides.map((guide, index) => (
              <ListItem key={index} component="li" className="sidebar-item">
                <ListItemButton
                  onClick={() => onSelectGuide(guide.name as GuideType)}
                >
                  <ListItemIcon className="sidebar-icon" sx={{ color: 'white' }}>{guide.icon}</ListItemIcon>
                  <ListItemText primary={guide.name} className="sidebar-text" />
                </ListItemButton>
              </ListItem>
            ))}
          </div>
        )}
      </List>
    </div>
  );
};

export default SideMenu;