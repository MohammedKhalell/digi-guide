import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { ArrowForward } from '@mui/icons-material';

export const guides = [
  { name: 'Front end', icon: <PersonIcon /> },
  { name: 'Project Management', icon: <FolderIcon /> },
  { name: 'UI/UX', icon: <DesignServicesIcon /> },
  { name: 'Development', icon: <CodeIcon /> },
  { name: 'Finance & Administration', icon: <AttachMoneyIcon /> },
];

export type GuideType = 'Front end' | 'Project Management' | 'UI/UX' | 'Development' | 'Finance & Administration';

export const menuItems = {
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

export interface StepperComponentProps {
  type: string;
  onNextGuide: () => void;
  guideName: string | null | undefined;
}

export interface QuizComponentProps {
  type: string;
  onComplete: (score: number) => void;
  onBackToGuide: () => void;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const quizData: {
  [key: string]: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
} = {
  "Type 1.1": [
    {
      question: "What is the main advantage of micro-frontend architecture?",
      options: [
        "Increased file size",
        "Independent team development",
        "Slower loading times",
        "Reduced scalability"
      ],
      correctAnswer: "Independent team development"
    },
    {
      question: "What is Digitinary-UI primarily used for?",
      options: [
        "Database management",
        "Server configuration",
        "Maintaining consistency across modules",
        "Network security"
      ],
      correctAnswer: "Maintaining consistency across modules"
    },
    {
      question: "Which environment is used for QA testing?",
      options: [
        "Production",
        "Development",
        "Test",
        "Local"
      ],
      correctAnswer: "Test"
    },
    {
      question: "What is the purpose of the common-layout repository?",
      options: [
        "Database management",
        "Shared layout repository for consistent design",
        "User authentication",
        "API integration"
      ],
      correctAnswer: "Shared layout repository for consistent design"
    },
    {
      question: "Which state management tool is used in the project?",
      options: [
        "MobX",
        "Redux",
        "Vuex",
        "NgRx"
      ],
      correctAnswer: "Redux"
    }
  ],
};

export const stepsData: {
  [key: string]: { title: string; description: string; image?: string }[];
} = {
  "Type 1.1": [
    {
      title: "Architecture",
      description: `
<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
<strong>1- Micro Frontend:</strong><br/>
<strong>Overview:</strong><br/>
A brief introduction to the micro-frontend architecture and its advantages. It allows independent teams to work on specific modules, ensuring scalability and modularity.<br/><br/>
<strong>Resources:</strong><br/>
Read the following documentation to understand our micro-frontend setup:<br/>
- <a href="https://www.atom.com/name/Test" target="_blank">Micro Frontend Overview</a><br/>
- <a href="https://www.test.com/" target="_blank">Detailed Architecture</a><br/><br/>
<strong>Structure:</strong><br/><img src="https://niteco.com/contentassets/b82d7fc4b71c43ad9da888cd772e33e1/imagemqs67.png" alt="Micro Frontend Image" style="max-width: 100%; height: auto; width: 600px;"/>
  </div>
  <div style="flex: 1;">
<strong>2- Digitinary-UI:</strong><br/>
<strong>Overview:</strong><br/>
A UI library designed to maintain consistency across all modules with reusable components and styling.<br/><br/>
<strong>Resources:</strong><br/>
Learn more about Digitinary-UI at the following link:<br/>
- <a href="https://www.test.com/" target="_blank">Digitinary-UI Documentation</a>
  </div>
</div>
      `,
      image: "https://niteco.com/contentassets/b82d7fc4b71c43ad9da888cd772e33e1/imagemqs67.png",
    },
    {
      title: "Business Requirements",
      description: `
<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
    <strong>Overview:</strong><br/>
    A description of the key business requirements and objectives for the project.<br/><br/>
    <strong>Resources:</strong><br/><ul><li><a href="https://www.test.com/" target="_blank">Business Docs Link 1</a></li>
<li><a href="https://www.test.com/" target="_blank">Business Docs Link 2</a></li>
    </ul>
 </div>
</div>
      `,
    },
    {
      title: "Technical Requirements",
      description: `
<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
<strong>Overview:</strong><br/>
This section outlines the technical requirements and setup process for the project.<br/><br/>
    <strong>Required Repositories:</strong><br/><ul><li><strong>container</strong>: Core container repository for the project.</li>
<li><strong>common-layout</strong>: Shared layout repository for consistent design.</li></ul>
<strong>Optional Repositories (Install based on the module you need):</strong><br/><ul><li><strong>c360</strong>: Core business logic and components.</li>
<li><strong>User Management</strong>: User-related features and services.</li></ul>
  </div>
  <div style="flex: 1;"><br/><br/>
    <strong>Libraries and Tools Used in the Project:</strong><br/><ul><li><strong>Redux</strong>: For state management.</li>
<li><strong>Digitinary-UI</strong>: Reusable UI components.</li>
<li><strong>Context API</strong>: Additional state management for isolated components.</li>
    </ul>
  </div>
</div>
      `,
    },
    {
      title: 'Deployment Process',
      description: `
<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
<strong>Overview:</strong><br/>
The project has three deployment environments, each with specific purposes:<br/><ul><li><strong>Develop</strong>: Used for ongoing development.</li>
<li><strong>Test</strong>: For the QA team to verify changes.</li>
<li><strong>Staging (STG)</strong>: Pre-production environment for client reviews.</li></ul>
<img src="https://ventor.tech/wp-content/uploads/2023/04/Screenshot-2023-04-19-at-01.30.03-1024x350.png" alt="Deployment Process Image" style="max-width: 100%; height: auto; width: 600px;"/>
  </div>
  <div style="flex: 1;"><br/><br/>
   <strong>Jira and Ticket Process:</strong><br/><ul><li>Deploy changes to the Develop environment and verify functionality.</li>
<li>Once verified, move the changes to the Test environment for QA validation.</li>
<li>After successful testing, mark the tickets as Ready for Test and prepare for deployment to STG.</li>
    </ul>
  </div>
</div>
      `,
      image: "https://ventor.tech/wp-content/uploads/2023/04/Screenshot-2023-04-19-at-01.30.03-1024x350.png",
    },
    {
      title: "Creating a Custom Module",
      description: `<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
    <strong>Overview:</strong><br/>
    A step-by-step guide on creating a new custom module using the project’s CLI.<br/><br/>
    <strong>Steps to Create a Module:</strong><ol><li>Create a custom folder for your module</li>
<li>Choose a short name or machine name for your module</li>
<li>Create a .info.yml file</li>
<li>Create a Controller</li>
<li>Create a routing.yml file</li>
    </ol>
  </div>
</div>`,
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

export interface SideMenuProps {
  onSelectGuide: (guide: GuideType | null) => void;
  onSelectType: (type: string) => void;
  guides: { name: string; icon: JSX.Element }[];
  selectedGuide: GuideType | null;
  selectedType: string | null;
  completedTypes: string[];
}