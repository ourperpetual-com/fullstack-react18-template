const db = require('../../db');
const fs = require('fs');
const path = require('path');

const initializeDatabase = async () => {
  try {
    console.log('🔧 Initializing database schema...');
    
    // Read the schema file
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute the schema
    await db.query(schema);
    
    console.log('✅ Database schema initialized successfully!');
    return true;
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    return false;
  }
};

// Database utility functions
const dbUtils = {
  async checkConnection() {
    try {
      const { rows } = await db.query('SELECT NOW() as current_time, version() as version');
      return {
        connected: true,
        timestamp: rows[0].current_time,
        version: rows[0].version
      };
    } catch (error) {
      return {
        connected: false,
        error: error.message
      };
    }
  },

  async getTables() {
    try {
      const { rows } = await db.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        ORDER BY table_name
      `);
      return rows.map(row => row.table_name);
    } catch (error) {
      console.error('Error getting tables:', error);
      return [];
    }
  }
};

module.exports = {
  initializeDatabase,
  dbUtils
};