import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// RightMenu types and data
export interface RightMenuProps {
  guide: 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration';
  onSelectType: (type: string) => void;
  activeType: string; // Tracks the currently active type
}

export const guideTypes: { [key in RightMenuProps['guide']]: { label: string; type: string; icon: JSX.Element; subtypes?: { label: string; type: string }[] }[] } = {
  'Front end': [
    { label: 'Arena', type: 'Type 1.1', icon: <DescriptionIcon /> },
    {
      label: 'D gate', type: 'Type 1.2', icon: <EditIcon />,
      subtypes: [
        { label: 'Subtype 1.2.1', type: 'Type 1.2.1' },
        { label: 'Subtype 1.2.2', type: 'Type 1.2.2' },
      ]
    },
    { label: 'K-net', type: 'Type 1.3', icon: <AccountBalanceIcon /> },
  ],
  'Project Management': [],
  'UI/UX': [],
  'Development': [],
  'Finance & Administration': [],
};

// LeftMenu types and data
export interface LeftMenuProps {
  onSelectGuide: (guide: string) => void;
}

export const guides = [
  { name: 'Front end', icon: <PersonIcon /> },
  { name: 'Project Management', icon: <FolderIcon /> },
  { name: 'UI/UX', icon: <DesignServicesIcon /> },
  { name: 'Development', icon: <CodeIcon /> },
  { name: 'Finance & Administration', icon: <AttachMoneyIcon /> },
];

// StepperComponent types and data
export interface StepperComponentProps {
  type: string;
}

export const stepsData: { [key: string]: { title: string; description: string }[] } = {
  'Type 1.1': [
    { title: 'Step 1.1.1', description: 'Description for Step 1.1.1' },
    { title: 'Step 1.1.2', description: 'Description for Step 1.1.2' },
    { title: 'Step 1.1.3', description: 'Description for Step 1.1.3' },
    { title: 'Step 1.1.4', description: 'Description for Step 1.1.4' },
  ],
  'Type 1.2': [
    { title: 'Step 1.2.1', description: 'Description for Step 1.2.1' },
    { title: 'Step 1.2.2', description: 'Description for Step 1.2.2' },
    { title: 'Step 1.2.3', description: 'Description for Step 1.2.3' },
    { title: 'Step 1.2.4', description: 'Description for Step 1.2.4' },
  ],
  'Type 1.2.1': [
    { title: 'Subtype 1.2.1.1', description: 'Description for Subtype 1.2.1.1' },
    { title: 'Subtype 1.2.1.2', description: 'Description for Subtype 1.2.1.2' },
  ],
  'Type 1.2.2': [
    { title: 'Subtype 1.2.2.1', description: 'Description for Subtype 1.2.2.1' },
    { title: 'Subtype 1.2.2.2', description: 'Description for Subtype 1.2.2.2' },
  ],
  'Type 1.3': [
    { title: 'Step 1.3.1', description: 'Description for Step 1.3.1' },
    { title: 'Step 1.3.2', description: 'Description for Step 1.3.2' },
    { title: 'Step 1.3.3', description: 'Description for Step 1.3.3' },
    { title: 'Step 1.3.4', description: 'Description for Step 1.3.4' },
  ],
};