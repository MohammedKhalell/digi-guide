import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const RightMenu: React.FC = () => {
  const guideTypes = ['Type 1', 'Type 2', 'Type 3'];

  return (
    <List>
      {guideTypes.map((type, index) => (
        <ListItem button key={index}>
          <ListItemText primary={type} />
        </ListItem>
      ))}
    </List>
  );
};

export default RightMenu;