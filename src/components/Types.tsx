// src/components/Types.tsx
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const guides = [
  { name: 'Front end', icon: <PersonIcon /> },
  { name: 'Project Management', icon: <FolderIcon /> },
  { name: 'UI/UX', icon: <DesignServicesIcon /> },
  { name: 'Development', icon: <CodeIcon /> },
  { name: 'Finance & Administration', icon: <AttachMoneyIcon /> },
];

export interface StepperComponentProps {
  type: string;
  onNextGuide: () => void;
}

export const stepsData: {
  [key: string]: { title: string; description: string; image?: string }[];
} = {
  "Type 1.1": [
    {
      title: "Architecture",
      description: `
**1- Micro Frontend:**
**Overview:**
A brief introduction to the micro-frontend architecture and its advantages. It allows independent teams to work on specific modules, ensuring scalability and modularity.

**Resources:**
Read the following documentation to understand our micro-frontend setup:
    - <a href="https://www.atom.com/name/Test" target="_blank">Micro Frontend Overview</a>
    - <a href="https://www.test.com/" target="_blank">Detailed Architecture</a>

**Structure:**
<img src="https://niteco.com/contentassets/b82d7fc4b71c43ad9da888cd772e33e1/imagemqs67.png" alt="Micro Frontend Image" style="max-width: 100%; height: auto; width: 600px;"/>

**2- Digitinary-UI:**
Overview:
A UI library designed to maintain consistency across all modules with reusable components and styling.

**Resources:**
Learn more about Digitinary-UI at the following link:
    - <a href="https://www.test.com/" target="_blank">Digitinary-UI Documentation</a>
      `,
    },
    {
      title: "Business Requirements",
      description: `
**Overview:**
       A description of the key business requirements and objectives for the project.

   **Resources:**
     Refer to the following links for more details:
     - <a href="https://www.test.com/" target="_blank">Business Docs Link 1</a>
    - <a href="https://www.test.com/" target="_blank">Business Docs Link 2</a>
      `,
    },
    {
      title: "Technical Requirements",
      description: `
**Overview:**
This section outlines the technical requirements and setup process for the project.

**Required Repositories:**
Clone and set up the following repositories:
- **container**: Core container repository for the project.
- **common-layout**: Shared layout repository for consistent design.

**Optional Repositories (Install based on the module you need):**
- **c360**: Core business logic and components.
- **User Management**: User-related features and services.

**Libraries and Tools Used in the Project:**
- **Redux**: For state management.
- **Digitinary-UI**: Reusable UI components.
- **Context API**: Additional state management for isolated components.
      `,
    },
    {
      title: 'Deployment Process',
      description: `
**Overview:**
The project has three deployment environments, each with specific purposes:
- **Develop**: Used for ongoing development.
- **Test**: For the QA team to verify changes.
- **Staging (STG)**: Pre-production environment for client reviews.

<img src="https://ventor.tech/wp-content/uploads/2023/04/Screenshot-2023-04-19-at-01.30.03-1024x350.png" alt="Deployment Process Image" style="max-width: 100%; height: auto; width: 600px;"/>

**Jira and Ticket Process:**
- Deploy changes to the Develop environment and verify functionality.
- Once verified, move the changes to the Test environment for QA validation.
- After successful testing, mark the tickets as Ready for Test and prepare for deployment to STG.
      `,
    },
    {
      title: "Creating a Custom Module",
      description: `
**Overview:**
       A step-by-step guide on creating a new custom module using the project’s CLI.

   **Steps to Create a Module:**
    1- Create a custom folder for your module
    2- Choose a short name or machine name for your module
    3- Create a .info.yml file
    4- Create a Controller
    5- Create a routing.yml file
      `,
    },
  ],
  "Type 1.2": [
    { title: "Step 1.2.1", description: "Description for Step 1.2.1" },
    { title: "Step 1.2.2", description: "Description for Step 1.2.2" },
    { title: "Step 1.2.3", description: "Description for Step 1.2.3" },
    { title: "Step 1.2.4", description: "Description for Step 1.2.4" },
  ],
  "Type 1.3": [
    { title: "Step 1.2.1", description: "Description for Step 1.2.1" },
    { title: "Step 1.2.2", description: "Description for Step 1.2.2" },
    { title: "Step 1.2.3", description: "Description for Step 1.2.3" },
    { title: "Step 1.2.4", description: "Description for Step 1.2.4" },
  ],
};