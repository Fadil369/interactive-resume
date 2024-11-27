# Interactive Resume - README

## Overview

This project is an **interactive, web-based resume** for Dr. Mohamed El Fadil, a Neuroscience Researcher and Tech Developer. The goal is to provide a visually stunning, interactive representation of his career journey, emphasizing his skills and experience in healthcare technology, population health management, and digital healthcare innovation. Built using **React** for a dynamic user interface, **Tailwind CSS** for modern styling, and **Framer Motion** for animations, this project aims to be both informative and engaging.

## Features

- **Interactive Animations**: The resume sections use animations powered by **Framer Motion** to provide smooth transitions and engaging visuals.
- **Responsive Design**: Designed with **Tailwind CSS** to ensure that the resume looks great on all screen sizes, from mobile phones to desktop computers.
- **Social Links with Modern Icons**: Links to LinkedIn, GitHub, email, and phone number are presented with clean, recognizable icons using **React Icons**.
- **Downloadable PDF**: Users can download a PDF version of the resume using `react-to-print` for easy sharing.
- **Dark Mode Toggle**: A built-in dark mode switch to accommodate user preference.

## Getting Started

### Prerequisites

To run this project locally, you need to have the following installed:

- **Node.js** (>= 14.x recommended)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/fadil369/interactive-resume.git
   cd interactive-resume
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   This will launch the application at `http://localhost:3000`.

### Project Structure

- **src/**: Contains all source files.
  - **components/**: Reusable components, such as `Header`, `ProfessionalExperience`, etc.
  - **styles/**: Custom Tailwind CSS and any additional styling.
  - **App.js**: The main application file.
- **public/**: Static files.

### Key Components

1. **Header**: Displays name, contact information, and social links with icons.
2. **Professional Experience**: Interactive cards with animations for each role held by Dr. Mohamed.
3. **Skills, Projects, Certifications**: Each section is a dedicated component styled to visually stand out.
4. **Footer**: Contact links and download options.

## Deployment

To deploy the resume online, you can use platforms like **GitHub Pages**, **Netlify**, or **Vercel**. Here's how to deploy using GitHub Pages:

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   - Install the GitHub Pages package:
     ```bash
     npm install gh-pages --save-dev
     ```
   - Add the following scripts to `package.json`:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```
   - Deploy:
     ```bash
     npm run deploy
     ```

## Technologies Used

- **React**: For building reusable UI components.
- **Tailwind CSS**: To style the application quickly and beautifully.
- **Framer Motion**: For animations and transitions to make the resume interactive.
- **React Icons**: To include icons for social links and contact information.

## Customization

- **Styling**: You can modify the styling by editing the `tailwind.config.js` or the component CSS files.
- **Content**: Update the personal information, skills, and experiences directly within the React components under `src/components/`.

## Future Enhancements

- **Language Selector**: Add support for multiple languages, including Arabic, to reach a broader audience.
- **Admin Panel**: Create an admin panel to easily update content without editing the code.
- **3D Visualizations**: Use libraries like `three.js` to add 3D elements that represent career milestones visually.

## Contributing

If you want to contribute to this project, please fork the repository and create a pull request. Feel free to open issues for suggestions or bugs.

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.

## Contact

- **Dr. Mohamed El Fadil**
- **Email**: fadil369@hotmail.com
- **LinkedIn**: www.linkedin.com/in/fadil369
- **GitHub**: https://github.com/Fadil369

Feel free to reach out if you have questions or suggestions about this project!

