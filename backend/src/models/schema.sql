-- Full-Stack Template Database Schema
-- Simple example schema for demonstration

-- Drop tables if they exist (for fresh setup)
DROP TABLE IF EXISTS users CASCADE;

-- Users table - Simple example
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add trigger for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing
INSERT INTO users (email, name) VALUES
    ('john@example.com', 'John Smith'),
    ('jane@example.com', 'Jane Doe'),
    ('admin@example.com', 'Admin User');

-- Display table info
SELECT 'Database schema created successfully!' as message;
SELECT 'Users count: ' || COUNT(*) as info FROM users;