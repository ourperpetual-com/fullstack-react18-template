# React 18 + Docker + PostgreSQL Template

A clean, production-ready template for full-stack web applications.

## 🚀 Quick Start

```bash
# Clone this template
git clone <your-repo-url>
cd your-project-name

# Start all services
docker-compose up --build

# Access your application
Frontend: http://localhost:3000
Backend:  http://localhost:3001
Database: postgresql://postgres:password@localhost:5432/yourdb
```

## 📦 What's Included

### Frontend
- **React 18.3.1** (stable, widely compatible)
- **Create React App** setup
- **No dependency conflicts**
- Dockerized development environment

### Backend
- **Node.js 18** (Express.js framework)
- **CORS enabled** for frontend communication
- RESTful API structure
- Dockerized with auto-reload

### Database
- **PostgreSQL 13**
- Persistent data storage
- SSL certificates configured
- Database connection tested

### DevOps
- **Docker Compose** orchestration
- **Multi-container** architecture
- **Port mapping** configured
- **Volume persistence**

## 🛠 Customization

### Environment Variables
Create `.env` files for your specific needs:

```bash
# frontend/.env
REACT_APP_API_URL=http://localhost:3001

# backend/.env
DATABASE_URL=postgresql://postgres:password@db:5432/yourdb
PORT=3001
```

### Database Schema
Modify `backend/db.js` for your database schema:

```javascript
// Add your models and migrations here
```

### API Routes
Add your routes in `backend/routes/`:

```javascript
// Example: backend/routes/api.js
router.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});
```

## 📁 Project Structure

```
your-project/
├── frontend/          # React 18 application
│   ├── src/          # React components
│   ├── public/       # Static assets
│   └── Dockerfile    # Frontend container
├── backend/          # Node.js API server
│   ├── routes/       # API endpoints
│   ├── db.js         # Database connection
│   └── Dockerfile    # Backend container
├── docker-compose.yml # Container orchestration
└── README.md         # Project documentation
```

## 🔧 Development Commands

```bash
# Start all services
docker-compose up

# Rebuild containers
docker-compose build --no-cache

# View logs
docker-compose logs frontend
docker-compose logs backend
docker-compose logs db

# Stop all services
docker-compose down

# Reset database
docker-compose down -v && docker-compose up
```

## ✅ Verified Features

- ✅ React 18 frontend compiling successfully
- ✅ Express.js backend serving API
- ✅ PostgreSQL database connected
- ✅ Docker containers communicating
- ✅ CORS configured for development
- ✅ Hot reload enabled for development

## 🎯 Perfect For

- **Full-stack web applications**
- **SaaS products**
- **E-commerce platforms**
- **Social media applications**
- **Content management systems**
- **API-first applications**

## 🚀 Next Steps

1. **Add Authentication** (Supabase, Auth0, JWT)
2. **UI Framework** (Material-UI, Tailwind, Ant Design)
3. **State Management** (Redux, Zustand, Context)
4. **Testing** (Jest, Cypress, Testing Library)
5. **Deployment** (Vercel, Netlify, AWS, Docker)

## 📝 License

MIT License - Use this template for any project!

---

**Happy coding!** 🎉