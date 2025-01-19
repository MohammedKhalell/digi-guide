import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, ListItemButton, Collapse } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import '../styles/SideMenu.scss';

interface SideMenuProps {
  onSelectGuide: (guide: 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration' | null) => void;
  onSelectType: (type: string) => void;
  guides: { name: string; icon: JSX.Element }[];
  selectedGuide: 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration' | null;
  selectedType: string | null;
}

const SideMenu: React.FC<SideMenuProps> = ({ onSelectGuide, onSelectType, guides, selectedGuide, selectedType }) => {
  const [open, setOpen] = useState(false);
  const [activeType, setActiveType] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setActiveType(selectedType);
  }, [selectedType]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelectType = (type: string) => {
    setActiveType(type);
    onSelectType(type);
  };

  const handleBackClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onSelectGuide(null);
      setIsAnimating(false);
    }, 300); // Match the duration of the CSS transition
  };

  const menuItems = {
    'Front end': [
      { type: 'Type 1.1', label: 'Arena', icon: <ArrowForward /> },
      { type: 'Type 1.2', label: 'D gate', icon: <ArrowForward /> },
      { type: 'Type 1.3', label: 'K-net', icon: <ArrowForward /> },
    ],
    'Project Management': [
      { type: 'Type 2.1', label: 'Type 2.1', icon: <ArrowForward /> },
      { type: 'Type 2.2', label: 'Type 2.2', icon: <ArrowForward /> },
    ],
    'UI/UX': [
      { type: 'Type 3.1', label: 'Type 3.1', icon: <ArrowForward /> },
      { type: 'Type 3.2', label: 'Type 3.2', icon: <ArrowForward /> },
    ],
    'Development': [
      { type: 'Type 4.1', label: 'Type 4.1', icon: <ArrowForward /> },
      { type: 'Type 4.2', label: 'Type 4.2', icon: <ArrowForward /> },
    ],
    'Finance & Administration': [
      { type: 'Type 5.1', label: 'Type 5.1', icon: <ArrowForward /> },
      { type: 'Type 5.2', label: 'Type 5.2', icon: <ArrowForward /> },
    ],
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
                <ListItemButton onClick={() => handleSelectType(item.type)} selected={activeType === item.type}>
                  <ListItemIcon className="sidebar-icon">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} className="sidebar-text" />
                </ListItemButton>
                {index === 1 && (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className="collapse-list">
                      <ListItemButton sx={{ pl: 4 }} onClick={() => handleSelectType('Type 1.2.1')} selected={activeType === 'Type 1.2.1'} className="collapse-list-item">
                        <ListItemText primary="Subtype 1.2.1" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }} onClick={() => handleSelectType('Type 1.2.2')} selected={activeType === 'Type 1.2.2'} className="collapse-list-item">
                        <ListItemText primary="Subtype 1.2.2" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                )}
              </div>
            )) || (
              <Typography>No items available for this guide</Typography>
            )}
          </div>
        ) : (
          <div className={`menu-items ${isAnimating ? 'slide-in' : ''}`}>
            {guides.map((guide, index) => (
              <ListItem key={index} component="li" className="sidebar-item">
                <ListItemButton onClick={() => onSelectGuide(guide.name as 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration')}>
                  <ListItemIcon className="sidebar-icon">{guide.icon}</ListItemIcon>
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