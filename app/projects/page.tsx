"use client";
import { useState } from "react";
import TreeNode from "@/components/TreeNode";
import type { TreeNodeProps } from "@/components/TreeNode";
import DirectoryToggleContext from "@/context/DirectoryToggleContext";
import ContentViewer from "../../components/ContentViewer";

let id = 0;
function idIncrement() {
  return ++id;
}

const photoWebsiteReadme = `
# GEEspinosa’s Film Photography Portfolio

Welcome to my personal portfolio website where I showcase my passion for film photography. This site features a curated gallery of my favorite film photos, background information about me, and a way to get in touch.

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Getting Started](#getting-started)  
- [Deployment](#deployment)  
- [Live Demo](#live-demo)  
- [Contact](#contact)    

---

<h2 id="about">About</h2> 

This portfolio site was created to share my journey and work in film photography. It highlights a selection of photos I’ve taken over the years, along with some personal background and ways to connect.

---

<h2 id="features">Features</h2>

- **Custom Portfolio Site** showcasing 35mm film photography with a simple, elegant design that lets the photos shine.  
- **Fully Responsive Layout** with two distinct gallery modes:  
  - Horizontal-priority flexbox layout for desktops.  
  - Vertical-priority multi-column layout for smaller screens.  
- **Navigation & Routing:**  
  - Built with \`react-router-dom\` for clean, flat navigation representing photography genres.  
  - Responsive navigation menu that switches between a floating desktop menu and a custom-built hamburger slide-out drawer on mobile.  
- **Slide-Out Menu:**  
  - Created from scratch using React state and Styled-Components with animated transitions.  
- **Modal Viewing Mode:**  
  - Clicking an image opens a modal with zoom, metadata (location, camera, film stock, etc.), and keyboard-accessible navigation.  
  - Responsive modal design that adapts layout and controls based on screen size and image orientation.  
  - Smooth fade-in/fade-out transitions implemented with React state and CSS animations.  
- **Dynamic Responsive Behavior:**  
  - Custom React hooks track window size to conditionally render layouts and UI components.  
- **Built with Styled-Components** to reinforce CSS fundamentals without utility frameworks like Tailwind.  
- **Dynamic Landing Page:**  
  - Randomly selects square preview images from each photo gallery category.  
  - Each image acts as a link to its respective gallery page.  
  - On hover, the image inverts to a negative effect and displays a colored label with the gallery name.  
  - Built with React hooks and Styled-Components for smooth interaction and responsive design.

---

<h2 id="technologies-used">Technology Used</h2>

- **React** — for building the user interface  
- **Styled-Components** — for styling and responsive design  
- **Vercel** — for easy and fast deployment  

---

<h2 id="getting-started">Getting Started</h2>

These instructions will help you set up the project locally for development and testing.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 16 or higher recommended)  
- npm (comes with Node.js) or Yarn  
- Basic familiarity with Git/GitHub to clone the repository  

### Installation & Running

1. Clone the repository from GitHub:

\`\`\`bash
git clone https://github.com/GEEspinosa/GEEspinosa-photo-portfolio.git
cd GEEspinosa-photo-portfolio
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Start the development server:

\`\`\`bash
npm start
# or
yarn start
\`\`\`

4. Open your browser and navigate to:

\`\`\`
http://localhost:3000
\`\`\`

### Building for Production

To create an optimized production build, run:

\`\`\`bash
npm run build  
# or  
yarn build
\`\`\`

---

<h2 id="deployment">Deployed</h2>

The site is deployed on Vercel. Commits pushed to the main branch will automatically trigger redeployment.

---

<h2 id="live-demo">Live Demo</h2>

Check out the live site here:  
https://ge-espinosa-photo-portfolio.vercel.app

---

<h2 id="contact">Contact</h2>

Feel free to reach out for booking inquiries or collaborations:

- LinkedIn: https://www.linkedin.com/in/geespinosa  

---

*Thank you for visiting my portfolio!*  
`;

// const treeData: TreeNodeProps["node"][] = [
//   {
//     id: idIncrement(),
//     name: "Project A",
//     type: "folder",
//     children: [
//       { id: idIncrement(), name: "README.md", type: "file" },
//       {
//         id: idIncrement(),
//         name: "src",
//         type: "folder",
//         children: [{ id: idIncrement(), name: "index.ts", type: "file" }],
//       },
//     ],
//   },
//   {
//     id: idIncrement(),
//     name: "Project B",
//     type: "folder",
//     children: [
//       { id: idIncrement(), name: "index.ts", type: "file" },
//       { id: idIncrement(), name: "index.ts", type: "file" },
//       { id: idIncrement(), name: "index.ts", type: "file" },
//     ],
//   },
//   {
//     id: idIncrement(),
//     name: "Project C",
//     type: "folder",
//     children: [
//       { id: idIncrement(), name: "index.ts", type: "file" },
//       { id: idIncrement(), name: "index.ts", type: "file" },
//       {
//         id: idIncrement(),
//         name: "index.ts",
//         type: "folder",
//         children: [
//           {
//             id: idIncrement(),
//             name: "index.ts",
//             type: "folder",
//             children: [
//               {
//                 id: idIncrement(),
//                 name: "index.ts",
//                 type: "folder",
//                 children: [
//                   { id: idIncrement(), name: "index.ts", type: "file" },
//                 ],
//               },
//             ],
//           },
//           {
//             id: idIncrement(),
//             name: "index.ts",
//             type: "folder",
//             children: [
//               {
//                 id: idIncrement(),
//                 name: "index.ts",
//                 type: "folder",
//                 children: [
//                   { id: idIncrement(), name: "index.ts", type: "file" },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       { id: idIncrement(), name: "index.ts", type: "file" },
//     ],
//   },
// ];

const treeData: TreeNodeProps["node"][] = [
  {
    id: idIncrement(),
    name: "Creative Technology",
    type: "folder",
    children: [
      {
        id: idIncrement(),
        name: "Convolution Reverb Tool",
        type: "folder",
        children: [],
      },
      {
        id: idIncrement(),
        name: "Acoustic Research",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Impulse Response Library",
            type: "folder",
          },
        ],
      },
    ],
  },
  {
    id: idIncrement(),
    name: "Web Development",
    type: "folder",
    children: [
      {
        id: idIncrement(),
        name: "Photo Website",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "GitHub Repo",
            type: "file",
            fileType: "github-repo",
            url: "https://github.com/GEEspinosa/GEEspinosa-photo-portfolio.git",
          },
          {
            id: idIncrement(),
            name: "Live Demo",
            type: "file",
            fileType: "live-demo",
            url: "https://ge-espinosa-photo-portfolio.vercel.app",
          },
          {
            id: idIncrement(),
            name: "README.md",
            type: "file",
            fileType: "readme",
            content: photoWebsiteReadme,
          },
          {
            id: idIncrement(),
            name: "Reusable Components",
            type: "folder",
            children: [{ id: idIncrement(), name: "index.ts", type: "file" }],
          },
        ],
      },
      {
        id: idIncrement(),
        name: "War Card Game",
        type: "folder",
        children: [],
      },
      {
        id: idIncrement(),
        name: "Developer Website",
        type: "folder",
        children: [],
      },
    ],
  },
  {
    id: idIncrement(),
    name: "Audio Production",
    type: "folder",
    children: [
      {
        id: idIncrement(),
        name: "WinterBeast",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Hail",
            type: "folder",
            children: [
              {
                id: idIncrement(),
                name: "Transgression (2024)",
                fileType: "album-file",
                type: "file",
              },
              {
                id: idIncrement(),
                name: "We Are Nothing (2023)",
                fileType: "album-file",
                type: "file",
              },
            ],
          },
          {
            id: idIncrement(),
            name: "Old Town Diamonds",
            type: "folder",
            children: [
              {
                id: idIncrement(),
                name: "40 Miles",
                fileType: 'album-file',
                type: "file",
              },
              {
                id: idIncrement(),
                name: "A Pale Horse",
                fileType: 'album-file',
                type: "file",
              },

            ],
          },
          {
            id: idIncrement(),
            name: "Fliege",
            type: "folder",
            children: [],
          },
          {
            id: idIncrement(),
            name: "L'Acephale",
            type: "folder",
            children: [],
          },
          {
            id: idIncrement(),
            name: "Hollow Senses",
            type: "folder",
            children: [],
          },
          {
            id: idIncrement(),
            name: "Mistons",
            type: "folder",
            children: [],
          },
          {
            id: idIncrement(),
            name: "Entrain",
            type: "folder",
            children: [],
          },
          {
            id: idIncrement(),
            name: "Refridgerated Nurses",
            type: "folder",
            children: [],
          },
          {
            id: idIncrement(),
            name: "Ebisu",
            type: "folder",
            children: [],
          },
          {
            id: idIncrement(),
            name: "Twin Perish",
            type: "folder",
            children: [],
          },
          {
            id: idIncrement(),
            name: "Notnauts",
            type: "folder",
            children: [],
          },
          {
            id: idIncrement(),
            name: "Hellcows",
            type: "folder",
            children: [],
          },
        ],
      },
      {
        id: idIncrement(),
        name: "Pre-WinterBeast",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Old Town Diamonds",
            type: "folder",
            children: [],
          },
        ],
      },
    ],
  },
];

export default function ProjectsPage() {
  const [colorToggle, setColorToggle] = useState(true);
  const [verticalToggle, setVerticalToggle] = useState(true);
  const [horizontalToggle, setHorizontalToggle] = useState(true);
  const [selectedNode, setSelectedNode] = useState<
    TreeNodeProps["node"] | null
  >(null);

  function toggleColorHandler() {
    setColorToggle((prev) => !prev);
  }

  function toggleVerticalHandler() {
    setVerticalToggle((prev) => !prev);
  }

  function toggleHorizontalHandler() {
    setHorizontalToggle((prev) => !prev);
  }

  return (
    <DirectoryToggleContext.Provider
      value={{
        colorToggle,
        verticalToggle,
        horizontalToggle,
        selectedNode,
        setSelectedNode,
      }}
    >
      <main className="grid grid-cols-[500px_1fr] h-screen overflow-hidden">
        {/* left sidebar column */}
        <aside>
          <div className="p-8 bg-white min-h-screen sticky top-0 h-screen overflow-y-auto border-r border-gray-200">
            <h1 className="font-mono text-xl mb-4">Projects Directory</h1>
            <div className="flex flex-row space-x-3 mb-4">
              <button onClick={toggleColorHandler}>color</button>
              <button onClick={toggleVerticalHandler}>vertical</button>
              <button onClick={toggleHorizontalHandler}>horizontal</button>
            </div>
            {treeData.map((node, index) => (
              <TreeNode
                key={node.id}
                node={node}
                isLast={index === treeData.length - 1}
              />
            ))}
          </div>
        </aside>
        {/* right column content viewer */}
        <section className="p-8 flex-1 overflow-y-auto">
          <ContentViewer />
        </section>
      </main>
    </DirectoryToggleContext.Provider>
  );
}

// try {
//   const res = await fetch("https://api.github.com/users/GEEspinosa/repos");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const repos = await res.json();
//   return (
//     <main className="p-8">
//       <h1 className="mt-4">Projects</h1>
//       <ProjectList repos={repos} />
//     </main>
//   );
// } catch (error: unknown) {
//   let message = "Unknown error";

//   if (error instanceof Error) {
//     message = error.message;
//   }

//   return (
//     <main className="p-8">
//       <h1 className="mt-4">Projects</h1>
//       <p className="text-red-600">Error: {message}</p>;
//     </main>
//   );
// }
