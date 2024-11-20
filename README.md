# CrossCult: Cultural Exchange Platform Integrating AI


## Project Overview

### Introduction
The CrossCult platform is a web-based application designed to encourage cross-cultural communication and collaboration among people from different cultures. As the world becomes more interconnected, individuals and communities increasingly interact across geographical boundaries. However, language barriers and cultural differences often limit meaningful engagement. CrossCult aims to bridge this gap by providing a platform that allows users to connect, share, and learn about diverse cultures in a more interactive and inclusive way.

The platform focuses on promoting understanding, tolerance, and appreciation for various cultures, including their traditions, languages, histories, and social practices. Through interactive features like storytelling, cultural discussions, language translation, and virtual events, CrossCult serves as a digital space to bring people together and celebrate cultural diversity.

### Features
- **Cultural Details:** Explore detailed information about food, history, and traditions from various cultures.
- **Interactive Storytelling:** Share and read cultural anecdotes and personal experiences.
- **Language Translation:** Break down language barriers with real-time translation powered by AI.
- **Cultural Events:** Discover cultural events happening around the world.
- **User & Admin Panels:** Separate interfaces for users and administrators to manage content and interactions.
- **Multilingual Support:** Language translation for accessibility to global audiences.

### Live Demo
Experience CrossCult live!

👉 [Live Demo Link](#)

### Technology Stack
- **Frontend:** ReactJS & TailwindCSS
- **Backend:** Node.js & Express.js (for future expansion)
- **Routing:** React Router for navigation
- **AI Integration:** OpenAI for language translation and personalized content generation
- **Hosting:** Vercel or Netlify (for frontend hosting)
- **Deployment:** Vite for bundling and development server
- **CI/CD:** GitHub Actions for continuous integration
- **Containerization:** Docker for scalable and deployable containers
- **Cloud:** Azure for cloud services, Kubernetes for scaling, and Azure Container Registry (ACR)

### Backend Repositories
The backend services of CrossCult are maintained in separate repositories. You can access the relevant repositories here:
- **[crosscult-auth-service](https://github.com/abhixsh/crosscult-auth-service):** Authentication service for managing user login and sessions.
- **[crosscult-storytelling-service](https://github.com/abhixsh/crosscult-storytelling-service):** Service handling the creation, sharing, and management of cultural stories.
- **[crosscult-country-service](https://github.com/abhixsh/crosscult-country-service):** Service for managing cultural details like food, history, and traditions of various countries.
- **[crosscult-argocd-management](https://github.com/abhixsh/crosscult-argocd-management):** Repository for managing continuous delivery and deployment using ArgoCD.

<!-- ### Screenshots
Here are some screenshots of CrossCult in action: -->


### Running Locally
To run CrossCult locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/CrossCult-Frontend.git
    cd CrossCult-Frontend
    ```
2. **Install dependencies:**
    Make sure you have Node.js installed. Then install the required dependencies:
    ```bash
    npm install
    ```
3. **Start the development server:**
    Once dependencies are installed, run the development server:
    ```bash
    npm run dev
    ```
4. **Access the application:**
    Open your browser and navigate to:
    ```arduino
    http://localhost:3000
    ```
