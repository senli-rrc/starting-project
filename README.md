# React Poster

A simple social media posting application built with React and React Router for learning purposes.

## Features

- View all posts in a grid layout
- Create new posts with text and author name
- View detailed post information
- Modal-based interface for creating and viewing posts
- Responsive design with CSS modules

## Technologies Used

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **CSS Modules** - Scoped styling
- **React Icons** - Icon components

## Project Structure

```
src/
├── components/
│   ├── MainHeader.jsx         # Main navigation header
│   ├── Modal.jsx              # Reusable modal component
│   ├── Post.jsx               # Individual post component
│   └── PostsList.jsx          # Posts grid layout
├── routes/
│   ├── RootLayout.jsx         # Main layout wrapper
│   ├── Posts.jsx              # Posts listing page
│   ├── NewPost.jsx            # Create new post form
│   └── PostDetails.jsx        # Individual post view
└── main.jsx                   # App entry point with routing
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/senli-rrc/starting-project.git
   cd starting-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Backend Setup

This project expects a backend API running on `http://localhost:8080` with the following endpoints:

- `GET /posts` - Fetch all posts
- `POST /posts` - Create a new post
- `GET /posts/:postId` - Fetch a specific post by ID

Make sure your backend server is running before using the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Routes

- `/` - Home page with posts list
- `/create-post` - Modal for creating new posts
- `/:postId` - Modal for viewing specific post details

## Key Learning Concepts

This project demonstrates:

- React functional components and hooks
- React Router for SPA navigation
- CSS Modules for component styling
- Form handling with React Router actions
- Data loading with React Router loaders
- Modal dialogs and overlay patterns
- Grid layouts with CSS Grid

## Contributing

This is a learning project. Feel free to fork and experiment with additional features!

## License

This project is for educational purposes.
