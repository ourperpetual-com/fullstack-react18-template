# CLAUDE.md - OurPerpetual Development Context

## Project Overview
OurPerpetual is a modern, containerized social media platform focused on rich media sharing (photos, videos), user profiles, posts, and social interactions. Built with React frontend, Node.js backend, PostgreSQL database, and Creative Tim Material Dashboard theme.

## Current Status
- **Phase**: Phase 2 Complete ✅ - Ready for Phase 3
- **Branch**: `feature/phase2-theme-integration`
- **Progress**: 2/7 phases complete (28%)
- **Last Updated**: August 4, 2025

## Technology Stack
- **Frontend**: React 19.1.1 + Creative Tim Material Dashboard Pro v2.4.0
- **Backend**: Node.js 18 (Express.js framework)
- **Database**: PostgreSQL 13
- **Authentication**: Supabase Auth (planned)
- **File Storage**: Supabase Storage (planned)
- **Containerization**: Docker & Docker Compose
- **UI Theme**: Creative Tim Material Dashboard Pro React

## Development Environment
- **Frontend**: http://localhost:3000 (React 19 + Creative Tim theme)
- **Backend**: http://localhost:3001 (Express.js API)
- **Database**: PostgreSQL on port 5432 (connected and responsive)
- **Docker**: All 3 containers stable and communicating

## Project Structure
```
ourperpetual-1/
├── backend/           # Express.js API server
│   ├── app.js         # Main application
│   ├── db.js          # Database connection
│   └── routes/        # API endpoints
├── frontend/          # React 19 + Creative Tim
│   ├── src/
│   │   ├── assets/    # Theme assets and images
│   │   ├── components/ # Material Dashboard components (15+)
│   │   ├── layouts/   # Dashboard layouts
│   │   ├── examples/  # UI component examples
│   │   └── SimpleHello.js # Current working page
│   ├── package.json   # Dependencies with Creative Tim theme
│   └── Dockerfile     # Container configuration
├── summaries/         # Development session documentation
├── docker-compose.yml # Multi-container orchestration
└── CLAUDE.md          # This file
```

## Development Phases & Roadmap

### Phase 1: Project Scaffolding & Containerization ✅ COMPLETE
**Completed**: August 2, 2025
- ✅ Created project directory structure
- ✅ Initialized Git repository and GitHub integration
- ✅ Set up Docker containerization (frontend, backend, database)
- ✅ Configured PostgreSQL database with SSL
- ✅ Established container communication
- ✅ Verified all services running on ports 3000, 3001, 5432

### Phase 2: Creative Tim Theme Integration ✅ COMPLETE
**Completed**: August 4, 2025
- ✅ Integrated Creative Tim Material Dashboard Pro React theme
- ✅ Resolved React 19 compatibility issues with legacy peer dependencies
- ✅ Fixed Docker dependency installation challenges
- ✅ Added 15+ Material Dashboard components (MDBox, MDButton, etc.)
- ✅ Configured proper module resolution with jsconfig.json
- ✅ Created working Hello World page with Material Design
- ✅ Verified all systems operational and ready for development

### Phase 3: Authentication & User Management 📋 READY TO START
**Next Phase** - Key Tasks:
- 📋 Set up Supabase project (Auth, Database, Storage)
- 📋 Build UI components for Sign Up, Login, Logout using Creative Tim components
- 📋 Implement backend logic for user management
- 📋 Set up Supabase Storage buckets and policies
- 📋 Sync Supabase users with PostgreSQL users table

### Phase 4: Core Features (Media Posts & Feed)
**Planned**: After authentication
- 📋 Build file upload and post creation components using theme elements
- 📋 Create backend API endpoints for posts
- 📋 Display feed of posts using theme layouts

### Phase 5: Social Interactions (Comments & Likes)
**Planned**: After core features
- 📋 Implement comments and likes APIs and UI
- 📋 Style interactions consistently with theme

### Phase 6: User Invitations
**Planned**: After social features
- 📋 Implement invitation system backend API
- 📋 Style invitation emails and registration forms

### Phase 7: Final Polish & Review
**Planned**: Final phase
- 📋 UI/UX polish and responsiveness review
- 📋 Performance optimization
- 📋 Production deployment preparation

## Key Accomplishments
1. **Stable Development Environment**: Docker-based with automated container orchestration
2. **Professional UI Foundation**: Creative Tim Material Dashboard Pro theme integrated
3. **Modern Tech Stack**: React 19, Node.js 18, PostgreSQL 13
4. **Scalable Architecture**: Modular design ready for feature development
5. **Documentation**: Comprehensive session logs and progress tracking

## Current System Status - All Systems Operational ✅
- **Frontend Build**: Successful with 0 errors, webpack compiling
- **Backend API**: Fast responses (<100ms), all endpoints working
- **Database**: PostgreSQL connected and responsive
- **Docker Services**: All 3 containers stable and communicating
- **Resource Usage**: 7.16GB Docker images, healthy performance

## Development Commands
```bash
# Start all services
docker-compose up --build

# Frontend only (for development)
cd frontend && npm start

# Backend only
cd backend && npm start

# Database connection test
cd backend && node test-ssl-connection.js
```

## Recent Session Highlights (August 4, 2025)
- **Major Achievement**: Phase 2 Complete - Creative Tim theme fully integrated
- **Challenge Solved**: React 19 compatibility with Creative Tim components
- **Technical Fix**: Docker dependency installation with `--legacy-peer-deps`
- **Current Display**: Working Hello World page with Material Design components
- **Git Status**: Ready for commit on `feature/phase2-theme-integration` branch

## Next Development Session Goals
1. **Supabase Setup**: Configure authentication and storage services
2. **Login/Signup UI**: Build forms using Creative Tim components
3. **User Management**: Implement backend authentication APIs
4. **User Profiles**: Create profile pages with theme styling

## Performance Metrics
- **Build Time**: ~20 seconds for fresh Docker build
- **Startup Time**: ~15 seconds for all services
- **Frontend Compilation**: Zero errors, successful webpack build
- **API Response Time**: <100ms for backend endpoints
- **Resource Usage**: Healthy Docker performance levels

## Important Notes for Development
- Use `npm install --legacy-peer-deps` for React 19 compatibility
- All Creative Tim components available in `frontend/src/components/`
- Material Dashboard layouts available in `frontend/src/layouts/`
- Database connection configured with SSL certificates
- Current working branch: `feature/phase2-theme-integration`

---
**Generated**: August 4, 2025  
**Status**: Phase 2 Complete, Phase 3 Ready to Begin  
**Next Priority**: Supabase Authentication Integration