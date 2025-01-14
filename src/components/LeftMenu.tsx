import React from 'react';
import { List, ListItem, ListItemText } from 'digitinary-ui';

const LeftMenu: React.FC = () => {
  const guides = ['Guide 1', 'Guide 2', 'Guide 3'];

  return (
    <List>
      {guides.map((guide, index) => (
        <ListItem button key={index}>
          <ListItemText primary={guide} />
        </ListItem>
      ))}
    </List>
  );
};

export default LeftMenu;