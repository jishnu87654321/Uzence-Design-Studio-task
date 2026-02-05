Data Grid Component
A reusable, scalable DataGrid UI component built from scratch using React, TypeScript, Tailwind CSS, and Storybook.
This project demonstrates clean component design, strong typing, and isolated UI development without relying on pre-built component libraries.
Tech Stack
React – UI library
TypeScript – Static typing
Tailwind CSS – Utility-first styling
Storybook – Component development & documentation
Vite – Build tool
No pre-built component libraries were used (Material UI, Chakra, Radix, etc.)
Features
Fully custom DataGrid implementation
Scrollable container with fixed header
Dynamic columns & rows
Strongly typed props
Storybook integration with mock data
Clean, maintainable folder structure
Project Structure:
data-grid/
├── src/
│   ├── components/
│   │   └── DataGrid/
│   │       ├── DataGrid.tsx
│   │       └── DataGrid.stories.tsx
│   ├── main.tsx
│   └── index.css
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
Installation & Setup
Prerequisites
Make sure you have Node.js v18+ installed.
Check:
node -v
Install dependencies
npm install
Run the Application
Start the development server
npm run dev
Open in browser:
http://localhost:5173
Run Storybook
Storybook is used to preview and test the DataGrid component in isolation.
npm run storyboo
Open in browser:
http://localhost:6006
Storybook Preview
The DataGrid component is documented in Storybook with mock data to simulate real-world usage, including large datasets.
Deployed Storybook link will be provided in the submission.
DataGrid API
Props
type Column = {
  key: string;
  header: string;
};
type DataGridProps = {
  columns: Column[];
  rows: Record<string, any>[];
};
 Assignment Guidelines Followed
 Built entirely from scratch
 React + TypeScript only
 Tailwind CSS for styling
 Storybook for component preview
 No external UI libraries
 No AI-generated builders
 Design Decisions
Simple div-based layout for flexibility and performance
Utility-first styling with Tailwind for maintainability
Storybook isolation to encourage component-driven development
Minimal API to keep the component reusable and scalable
Future Improvements
Column sorting
Row selection
Column resizing
Pagination / virtual scrolling
Keyboard accessibility
Author
Jishnu N
License
This project is created for assessment and learning purposes.
