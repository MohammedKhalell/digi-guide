import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, ListItemButton, Collapse } from '@mui/material';
import { RightMenuProps, guideTypes } from './Types';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const RightMenu: React.FC<RightMenuProps> = ({ guide, onSelectType, activeType }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      {guideTypes[guide].map((item, index) => (
        <React.Fragment key={index}>
          <ListItem component="li">
            <ListItemButton onClick={() => {
              if (index === 1) {
                handleClick();
              } else {
                onSelectType(item.type);
              }
            }} selected={activeType === item.type}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              {index === 1 ? (open ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItemButton>
          </ListItem>
          {index === 1 && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={() => onSelectType('Type 1.2.1')} selected={activeType === 'Type 1.2.1'}>
                  <ListItemText primary="Subtype 1.2.1" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => onSelectType('Type 1.2.2')} selected={activeType === 'Type 1.2.2'}>
                  <ListItemText primary="Subtype 1.2.2" />
                </ListItemButton>
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default RightMenu;