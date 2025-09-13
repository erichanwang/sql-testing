-- Sample SQL queries

-- Select all users
SELECT * FROM users;

-- Insert a new user
INSERT INTO users (id, name, email) VALUES (1, 'John Doe', 'john@example.com');

-- Select posts with user names
SELECT p.title, p.content, u.name
FROM posts p
JOIN users u ON p.user_id = u.id;
