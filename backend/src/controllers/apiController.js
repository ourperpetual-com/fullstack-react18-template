const db = require('../../db');

const apiController = {
  // API status and info
  async getApiStatus(req, res, next) {
    try {
      // Test database connection
      const { rows } = await db.query('SELECT NOW() as server_time, version() as pg_version');
      
      res.json({
        success: true,
        message: 'Full-Stack Template API is running',
        data: {
          api_version: '1.0.0',
          server_time: new Date().toISOString(),
          database: {
            connected: true,
            server_time: rows[0]?.server_time,
            version: rows[0]?.pg_version?.split(' ')[0] + ' ' + rows[0]?.pg_version?.split(' ')[1]
          }
        }
      });
    } catch (error) {
      res.json({
        success: false,
        message: 'API is running but database connection failed',
        data: {
          api_version: '1.0.0',
          server_time: new Date().toISOString(),
          database: {
            connected: false,
            error: error.message
          }
        }
      });
    }
  },

  // Get API endpoints
  async getApiEndpoints(req, res) {
    res.json({
      success: true,
      message: 'Available API endpoints',
      data: {
        endpoints: [
          {
            method: 'GET',
            path: '/api',
            description: 'API status and information'
          },
          {
            method: 'GET',
            path: '/api/users',
            description: 'Get all users'
          },
          {
            method: 'GET',
            path: '/api/users/:id',
            description: 'Get user by ID'
          },
          {
            method: 'POST',
            path: '/api/users',
            description: 'Create new user'
          },
          {
            method: 'PUT',
            path: '/api/users/:id',
            description: 'Update user'
          },
          {
            method: 'DELETE',
            path: '/api/users/:id',
            description: 'Delete user'
          },
          {
            method: 'GET',
            path: '/health',
            description: 'Health check endpoint'
          }
        ]
      }
    });
  }
};

module.exports = apiController;