-- Insert courses
INSERT INTO courses (title, description, difficulty, modules) VALUES
('Foundations of AI & Business', 'Learn the basics of AI technology and business fundamentals', 'Beginner', 4),
('Building Payment Dashboards', 'Create a unified dashboard for tracking payments across different platforms', 'Intermediate', 4),
('AI for Academic Success', 'Develop AI tools for academic performance tracking and grade prediction', 'Intermediate', 3),
('Advanced AI Applications', 'Create sophisticated AI solutions for real-world business problems', 'Advanced', 4);

-- Insert modules for Foundations course
INSERT INTO modules (course_id, title, description, video_url, "order", homework) VALUES
(1, 'Introduction to AI', 'Understanding AI basics and its business applications', 'https://www.youtube.com/embed/sample1', 1, 'Research and write about three AI tools you use in daily life'),
(1, 'Business Fundamentals', 'Essential business concepts for young entrepreneurs', 'https://www.youtube.com/embed/sample2', 2, 'Create a simple business plan for an AI-based service'),
(1, 'Python Programming Basics', 'Learn Python fundamentals for AI development', 'https://www.youtube.com/embed/sample3', 3, 'Build a simple calculator program using Python'),
(1, 'AI Ethics & Safety', 'Understanding ethical considerations in AI development', 'https://www.youtube.com/embed/sample4', 4, 'Write an essay about AI ethics in business');

-- Insert modules for Payment Dashboard course
INSERT INTO modules (course_id, title, description, video_url, "order", homework) VALUES
(2, 'Payment Systems Overview', 'Understanding different payment platforms and APIs', 'https://www.youtube.com/embed/sample5', 1, 'Compare features of PayPal, Stripe, and Cash App'),
(2, 'Dashboard Design', 'Learn UI/UX principles for effective dashboards', 'https://www.youtube.com/embed/sample6', 2, 'Create a mockup of your payment dashboard'),
(2, 'API Integration', 'Connecting payment platforms using APIs', 'https://www.youtube.com/embed/sample7', 3, 'Implement PayPal API connection in test mode'),
(2, 'Data Visualization', 'Creating charts and graphs for financial data', 'https://www.youtube.com/embed/sample8', 4, 'Build an interactive chart showing payment history');

-- Insert modules for Academic Success course
INSERT INTO modules (course_id, title, description, video_url, "order", homework) VALUES
(3, 'Grade Analysis Basics', 'Understanding grade patterns and prediction models', 'https://www.youtube.com/embed/sample9', 1, 'Analyze your past semester grades and identify patterns'),
(3, 'ML for Grade Prediction', 'Using machine learning for academic forecasting', 'https://www.youtube.com/embed/sample10', 2, 'Build a simple grade prediction model'),
(3, 'Academic Dashboard', 'Creating a comprehensive academic performance tracker', 'https://www.youtube.com/embed/sample11', 3, 'Design and implement an academic progress dashboard');

-- Insert modules for Advanced AI course
INSERT INTO modules (course_id, title, description, video_url, "order", homework) VALUES
(4, 'Advanced ML Concepts', 'Deep dive into machine learning algorithms', 'https://www.youtube.com/embed/sample12', 1, 'Implement a neural network from scratch'),
(4, 'Natural Language Processing', 'Building AI tools with text processing', 'https://www.youtube.com/embed/sample13', 2, 'Create a simple chatbot for customer service'),
(4, 'AI Project Management', 'Managing AI projects from idea to deployment', 'https://www.youtube.com/embed/sample14', 3, 'Develop a project plan for an AI startup'),
(4, 'AI Business Integration', 'Implementing AI solutions in business processes', 'https://www.youtube.com/embed/sample15', 4, 'Create a business integration strategy for an AI tool');
