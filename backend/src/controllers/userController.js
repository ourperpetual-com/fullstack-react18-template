const db = require('../../db');

const userController = {
  // Get all users
  async getAllUsers(req, res, next) {
    try {
      const { rows } = await db.query('SELECT id, email, name, created_at FROM users ORDER BY created_at DESC');
      res.json({
        success: true,
        data: rows,
        count: rows.length
      });
    } catch (error) {
      next(error);
    }
  },

  // Get user by ID
  async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const { rows } = await db.query('SELECT id, email, name, created_at FROM users WHERE id = $1', [id]);
      
      if (rows.length === 0) {
        return res.status(404).json({
          success: false,
          error: 'User not found'
        });
      }

      res.json({
        success: true,
        data: rows[0]
      });
    } catch (error) {
      next(error);
    }
  },

  // Create new user
  async createUser(req, res, next) {
    try {
      const { email, name } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          error: 'Email is required'
        });
      }

      const { rows } = await db.query(
        'INSERT INTO users (email, name) VALUES ($1, $2) RETURNING id, email, name, created_at',
        [email, name]
      );

      res.status(201).json({
        success: true,
        data: rows[0],
        message: 'User created successfully'
      });
    } catch (error) {
      if (error.code === '23505') { // Unique violation
        return res.status(409).json({
          success: false,
          error: 'Email already exists'
        });
      }
      next(error);
    }
  },

  // Update user
  async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const { email, name } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          error: 'Email is required'
        });
      }

      const { rows } = await db.query(
        'UPDATE users SET email = $1, name = $2 WHERE id = $3 RETURNING id, email, name, created_at',
        [email, name, id]
      );

      if (rows.length === 0) {
        return res.status(404).json({
          success: false,
          error: 'User not found'
        });
      }

      res.json({
        success: true,
        data: rows[0],
        message: 'User updated successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete user
  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const { rows } = await db.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);

      if (rows.length === 0) {
        return res.status(404).json({
          success: false,
          error: 'User not found'
        });
      }

      res.json({
        success: true,
        message: 'User deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = userController;