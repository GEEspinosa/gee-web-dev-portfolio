export const photoWebsiteReadme = `
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