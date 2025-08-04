# 🚀 Full-Stack React 18 Template

A production-ready template for building modern web applications with React 18, Node.js, and PostgreSQL, all containerized with Docker.

## ✨ Features

- **React 18.3.1** - Latest stable React with improved performance
- **Node.js 18** - Modern backend with Express.js framework  
- **PostgreSQL 13** - Reliable, powerful database
- **Docker Compose** - Complete containerization
- **Zero Configuration** - Just clone and run
- **No Dependency Conflicts** - Clean, tested package versions

## 🏃‍♂️ Quick Start

```bash
# 1. Use this template or clone
git clone https://github.com/ourperpetual-com/fullstack-react18-template.git my-project
cd my-project

# 2. Start all services
docker-compose up --build

# 3. Open your applications
# Frontend: http://localhost:3000
# Backend:  http://localhost:3001  
# Database: localhost:5432
```

**That's it!** Your full-stack application is running.

## 📦 What's Included

### Frontend (React 18)
- ✅ Create React App setup
- ✅ Modern React 18 features
- ✅ Hot reload development
- ✅ Production build optimization

### Backend (Node.js 18)
- ✅ Express.js framework
- ✅ CORS configured
- ✅ Database connection setup
- ✅ RESTful API structure

### Database (PostgreSQL 13)
- ✅ Containerized database
- ✅ Persistent data storage
- ✅ Connection tested and verified
- ✅ Ready for migrations

### DevOps (Docker)
- ✅ Multi-container orchestration
- ✅ Development and production configs
- ✅ Volume persistence
- ✅ Network communication

## 🛠 Customization

### Add Environment Variables
```bash
# frontend/.env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_APP_NAME=My App

# backend/.env  
DATABASE_URL=postgresql://postgres:password@db:5432/myapp
JWT_SECRET=your-secret-key
```

### Modify Database
```javascript
// backend/db.js - Add your schema
const createTables = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);
};
```

### Add API Routes
```javascript
// backend/routes/api.js
router.get('/api/users', async (req, res) => {
  const users = await db.query('SELECT * FROM users');
  res.json(users.rows);
});
```

## 📁 Project Structure

```
your-project/
├── frontend/              # React application
│   ├── src/
│   │   ├── App.js        # Main React component
│   │   └── index.js      # React 18 root
│   ├── package.json      # Frontend dependencies
│   └── Dockerfile        # Frontend container
├── backend/               # Node.js API
│   ├── routes/
│   │   ├── index.js      # Default routes
│   │   └── users.js      # User routes
│   ├── app.js            # Express app
│   ├── db.js             # Database connection
│   └── Dockerfile        # Backend container
├── docker-compose.yml     # Container orchestration
└── README.md             # This file
```

## 🔧 Development

```bash
# Start development environment
docker-compose up

# Rebuild after dependency changes
docker-compose build --no-cache

# View container logs
docker-compose logs frontend
docker-compose logs backend

# Access database directly
docker-compose exec db psql -U postgres

# Stop all services
docker-compose down

# Remove all data (reset database)
docker-compose down -v
```

## 🎯 Perfect For

- 🔐 **SaaS Applications**
- 🛒 **E-commerce Platforms**  
- 📱 **Social Media Apps**
- 📝 **Content Management**
- 📊 **Dashboard Applications**
- 🌐 **API-First Projects**

## 🚀 Next Steps

### Popular Additions
- **Authentication**: Supabase, Auth0, Passport.js
- **UI Framework**: Material-UI, Tailwind CSS, Ant Design
- **State Management**: Redux Toolkit, Zustand, Context API
- **Database ORM**: Prisma, TypeORM, Sequelize
- **Testing**: Jest, Cypress, React Testing Library
- **Deployment**: Vercel, Railway, AWS, DigitalOcean

### Example Integration
```bash
# Add Tailwind CSS
cd frontend
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Add Prisma ORM
cd backend
npm install prisma @prisma/client
npx prisma init
```

## ✅ Verified System

This template has been tested and verified:
- ✅ All containers start successfully
- ✅ Frontend compiles without errors
- ✅ Backend API responds correctly
- ✅ Database connection established
- ✅ Inter-container communication works
- ✅ Hot reload functions properly

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - use this template for any project, commercial or personal.

---

**Happy coding!** 🎉

*Made with ❤️ for the developer community*