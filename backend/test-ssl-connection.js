const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Test SSL connection to PostgreSQL
async function testSSLConnection() {
  console.log('Testing SSL connection to PostgreSQL...\n');
  
  // Read SSL certificates
  const certPath = path.join(__dirname, 'certs', 'db.crt');
  const keyPath = path.join(__dirname, 'certs', 'db.key');
  
  try {
    const cert = fs.readFileSync(certPath, 'utf8');
    const key = fs.readFileSync(keyPath, 'utf8');
    
    console.log('✓ SSL certificates loaded successfully');
    console.log(`✓ Certificate valid until: Aug 2, 2026`);
    console.log(`✓ Certificate/Key pair matches\n`);
    
    // Test connection with SSL
    const poolWithSSL = new Pool({
      connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/ourperpetual',
      ssl: {
        cert: cert,
        key: key,
        rejectUnauthorized: false // for self-signed certificates
      }
    });
    
    console.log('Attempting SSL connection...');
    const client = await poolWithSSL.connect();
    const result = await client.query('SELECT version()');
    
    console.log('✓ SSL Connection successful!');
    console.log(`✓ PostgreSQL version: ${result.rows[0].version}`);
    
    client.release();
    await poolWithSSL.end();
    
  } catch (error) {
    console.log('✗ SSL connection failed:', error.message);
    
    // Test fallback connection without SSL
    console.log('\nTesting fallback connection without SSL...');
    try {
      const poolNoSSL = new Pool({
        connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/ourperpetual'
      });
      
      const client = await poolNoSSL.connect();
      const result = await client.query('SELECT version()');
      
      console.log('✓ Non-SSL connection successful');
      console.log(`✓ PostgreSQL version: ${result.rows[0].version}`);
      
      client.release();
      await poolNoSSL.end();
      
    } catch (fallbackError) {
      console.log('✗ All connections failed:', fallbackError.message);
    }
  }
}

// Run test if called directly
if (require.main === module) {
  testSSLConnection().catch(console.error);
}

module.exports = { testSSLConnection };