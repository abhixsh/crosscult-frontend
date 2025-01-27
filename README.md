# CrossCult - A Cultural Exploration Web Application

CrossCult is a web application designed to explore and showcase cultural details, traditions, foods, and interactive storytelling experiences from various countries. Built with Vite, React, and Tailwind CSS, this project offers a dynamic and engaging platform to learn about world cultures and connect through shared stories.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The CrossCult web application aims to provide a platform for users to:

- Discover cultural details of various countries.
- Engage with interactive storytelling.
- Participate in language translation.
- Explore events and traditions.

The goal is to foster cultural understanding and connectivity through a user-friendly and visually appealing interface.

## Features

- **Home Page**: Welcoming interface with quick access to different sections.
- **Country Details**: Displays cultural details such as history, traditions, and foods of each country.
- **Interactive Storytelling**: Users can explore stories specific to each culture.
- **Language Translation**: Supports multilingual translation for easy accessibility.
- **User and Admin Panels**: Secure user login, with separate admin and user controls.

## Tech Stack  
- **Frontend Framework:** React  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **Routing:** React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Hosting & Deployment:** Azure

## Project Structure

Here's an overview of the project directory structure:

```
CrossCult-Frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── CulturalDetails.jsx
│   │   ├── AdminPanel.jsx
│   │   ├── UserDetailsPanel.jsx
│   │   ├── InteractiveStorytelling.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CountryPage.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── tailwind.config.js
└── projectsetup.sh
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm or yarn
- Git Bash (if using Windows)

### Setup Instructions

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/crosscult-frontend.git
    cd crosscult-frontend
    ```

2. **Run the Setup Script**

    Use the provided `projectsetup.sh` script to initialize the project structure and install dependencies.

    ```bash
    bash projectsetup.sh
    ```

3. **Manual Setup (if script fails)**

    - Initialize the project using Vite and React template:

        ```bash
        npx create-vite my-app --template react
        cd my-app
        ```

    - Install Tailwind CSS:

        ```bash
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        ```

4. **Start the Development Server**

    ```bash
    npm run dev
    ```

## Scripts

### Development

```bash
npm run dev
```

Starts the development server on [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

### Lint

```bash
npm run lint
```

Runs linting for the project to ensure code quality.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

    ```bash
    git checkout -b feature-name
    ```

3. Commit your changes and push to your branch:

    ```bash
    git commit -m "Add new feature"
    git push origin feature-name
    ```

4. Submit a pull request.

## License

This project is licensed under the MIT License.
