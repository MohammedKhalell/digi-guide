import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, ListItemButton } from '@mui/material';

interface LeftMenuProps {
  onSelectGuide: (guide: 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration') => void;
  guides: { name: string; icon: JSX.Element }[];
}

const LeftMenu: React.FC<LeftMenuProps> = ({ onSelectGuide, guides }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
      Department
      </Typography>
      <List>
        {guides.map((guide, index) => (
          <ListItem key={index} component="li">
            <ListItemButton onClick={() => onSelectGuide(guide.name as 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration')}>
              <ListItemIcon>{guide.icon}</ListItemIcon>
              <ListItemText primary={guide.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LeftMenu;