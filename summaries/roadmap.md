### Project Plan: OurPerpetual (GitHub Integration)

**1. Vision & Core Concept**

A modern, containerized social media platform with a focus on rich media sharing (photos, videos), user profiles, posts, and social interactions. The architecture will be modular and scalable, using separate Docker containers and leveraging a dedicated object storage solution for media files.

**2. Technology Stack**

*   **Frontend:** React
*   **Backend:** Node.js (using the Express.js framework)
*   **Database:** PostgreSQL
*   **Authentication & User Management:** Supabase Auth
*   **File Storage:** Supabase Storage
*   **UI/Theme:** Creative Tim
*   **Containerization:** Docker and Docker Compose
*   **Version Control:** Git & GitHub

**3. Development Roadmap**

*   **Phase 1: Project Scaffolding, Git & Containerization**
    1.  **Create Project Directory:** Create the main `ourperpetual-1` directory.
    2.  **Initialize Git Repository:**
        *   Run `git init` to create a local repository.
        *   Create a comprehensive `.gitignore` file.
    3.  **Create GitHub Repository:** Create a new, empty repository on GitHub.
    4.  **Link to Remote:** Link the local repository to the remote GitHub repository.
    5.  **Create Directory Structure:** Create the `/frontend` and `/backend` subdirectories.
    6.  **Initial Commit:** Make the first commit with the initial directory structure and `.gitignore` file.
    7.  **Containerization:**
        *   Set up the `docker-compose.yml` file and basic `Dockerfile`s.
        *   Initialize basic React and Node.js apps.
        *   Confirm all containers can be built and communicate.
    8.  **Commit Changes:** Commit the initial Docker and application setup.

*   **Phase 2: Theme Integration & UI Foundation**
    *   Select and integrate the chosen Creative Tim React theme.
    *   Build the main application layout using the theme's components.

*   **Phase 3: Authentication & User Management**
    *   Set up Supabase project (Auth, Database, Storage).
    *   Build UI components for Sign Up, Login, Logout using the theme's styles.
    *   Set up Supabase Storage buckets and policies.
    *   Implement backend logic to sync new Supabase users with our public `users` table.

*   **Phase 4: Core Feature Implementation (Media Posts & Feed)**
    *   Build file upload and post creation components using theme elements.
    *   Create backend API endpoints for posts.
    *   Display the feed of posts using the theme's layout system.

*   **Phase 5: Social Interactions (Comments & Likes)**
    *   Implement backend APIs and frontend components for comments and likes, styled consistently.

*   **Phase 6: User Invitations**
    *   Implement backend API and frontend form for sending invitations.
    *   Style the invitation email and registration page.

*   **Phase 7: Final Polish & Review**
    *   Conduct a final review of the entire application's UI/UX for polish and responsiveness.
