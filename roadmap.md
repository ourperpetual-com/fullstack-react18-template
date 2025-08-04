Project Plan: OurPerpetual (Revised)
  1. Vision & Core Concept
  A modern, containerized social media platform with a focus on rich media sharing (photos, videos), user profiles, posts, and social interactions. The architecture will be modular and
  scalable, using separate Docker containers and leveraging a dedicated object storage solution for media files.
  2. Technology Stack (Revised)
   * Frontend: React
   * Backend: Node.js (using the Express.js framework)
   * Database: PostgreSQL
   * Authentication & User Management: Supabase Auth
   * File Storage: Supabase Storage (for efficient, scalable storage of images and videos)
   * UI/Theme: Creative Tim
   * Containerization: Docker and Docker Compose
  3. Architectural Blueprint (Revised)
  The core container setup remains the same (frontend, backend, db), but the data flow for file uploads will be optimized for efficiency and cost.
   * File Uploads: The React frontend will directly upload media files (images, videos) to Supabase Storage using the supabase-js client library. This avoids proxying large files through our
     backend, reducing server load and cost. Upon a successful upload, Supabase Storage returns a URL for the file.
   * Backend Logic: The frontend then sends this media URL to our Node.js backend when creating a post. The backend's responsibility is simply to validate the request and save the URL string
     in the PostgreSQL database, not to handle the file itself.
   * File Retrieval: When displaying posts, the frontend gets the media URL from the backend and uses it to render the image or video directly from Supabase Storage, which acts as a Content
     Delivery Network (CDN).
  4. Database Schema (Revised)
  We'll add columns for media and a new table for invitations.
   * `users`:
       * id (PK, UUID, Foreign Key to auth.users.id)
       * username, full_name, bio
       * avatar_url (text): URL pointing to an image in Supabase Storage.
       * created_at
   * `posts`:
       * id (PK, BigInt)
       * user_id (FK to users.id)
       * content (text, now optional)
       * `media_url` (text, new): URL for the photo/video in Supabase Storage.
       * `media_type` (text, new): e.g., 'image', 'video'.
       * created_at
   * `comments`: (No changes)       
       * id, post_id, user_id, content, created_at
   * `likes`: (No changes)
       * user_id, post_id
   * `invitations` (New Table):
       * id (PK, UUID)
       * inviter_id (FK to users.id): Who sent the invite.
       * invitee_email (text): The email of the person being invited.
       * token (text, unique): A secure, single-use token for the invitation link.
       * status (text): 'pending', 'accepted', or 'expired'.
       * created_at, expires_at
   * Phase 1: Project Scaffolding, Git & Containerization
       1. Create Project Directory: Create the main ourperpetual-1 directory.
       2. Initialize Git Repository:
           * Run git init to create a local repository.
           * Create a comprehensive .gitignore file to exclude node_modules, .env files, build artifacts, and OS-specific files.
       3. Create GitHub Repository: You will need to create a new, empty repository on your GitHub account.
       4. Link to Remote: Link the local repository to the remote GitHub repository using git remote add origin <your-github-repo-url>.
       5. Create Directory Structure: Create the /frontend and /backend subdirectories.
       6. Initial Commit: Make the first commit with the initial directory structure and .gitignore file.
       7. Containerization:
           * Set up the docker-compose.yml file and basic Dockerfiles for the frontend and backend.
           * Initialize a basic React app in /frontend and a Node.js/Express app in /backend.
           * Confirm all containers can be built and communicate.
       8. Commit Changes: Commit the initial Docker and application setup.
   * Phase 2: Theme Integration & UI Foundation
       * Select and integrate the chosen Creative Tim React theme into the /frontend application.
       * Configure the theme's assets, styles, and dependencies.
       * Build the main application layout (e.g., a persistent navigation bar, a main content area, a footer) using the theme's pre-built layout components. This ensures all subsequent
         features will have a consistent look and feel.
   * Phase 3: Authentication & User Management
       * Set up the Supabase project (Auth, Database, and Storage).
       * Build the UI components for Sign Up, Login, and Logout, using the styled components from the Creative Tim theme (e.g., themed forms, buttons, and input fields).
       * Set up Supabase Storage buckets and policies.
       * Implement the backend logic to sync new Supabase users with our public users table.
   * Phase 4: Core Feature Implementation (Media Posts & Feed)
       * Build the file upload and post creation components using the theme's elements (e.g., cards, modals).
       * Create the backend API endpoints for posts.
       * Display the feed of posts, ensuring the layout is clean and responsive, leveraging the theme's grid system and components.
   * Phase 5: Social Interactions (Comments & Likes)
       * Implement the backend APIs and frontend components for comments and likes, styling them consistently with the rest of the application.
   * Phase 6: User Invitations
       * Implement the backend API and frontend form for sending invitations.
       * Style the invitation email and registration page to match the application's branding.
   * Phase 7: Final Polish & Review
       * Conduct a final review of the entire application's UI/UX, making minor adjustments to ensure everything is polished, responsive, and visually cohesive.
