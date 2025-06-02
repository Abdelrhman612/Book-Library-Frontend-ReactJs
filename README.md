Here's a comprehensive README.md file for your book-library-frontend-reactjs project:

```markdown
# Book Library Frontend

![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.6-purple)

A modern frontend application for a Book Library built with React, TypeScript, and Vite. This application provides a user-friendly interface for managing books, user authentication, and more.

## Features

- **User Authentication**: Login, Signup, Password Reset flows
- **Book Management**: View, Add, Edit, Delete books
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean interface with Bootstrap styling
- **Type Safety**: Full TypeScript support
- **State Management**: React hooks for state management
- **API Integration**: Axios for backend communication

## Technologies

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) + Custom CSS
- **Routing**: [React Router v7](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Project Structure
```

book-library-frontend/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable components
│ │ ├── Auth/ # Authentication components
│ │ └── Book/ # Book management components
│ ├── Service/ # API service modules
│ ├── App.tsx # Main application component
│ ├── main.tsx # Application entry point
│ └── vite-env.d.ts # TypeScript declarations
├── .eslintrc.js # ESLint configuration
├── vite.config.ts # Vite configuration
└── tsconfig.json # TypeScript configuration

````

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/book-library-frontend.git
cd book-library-frontend
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your environment variables:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Authentication Flow

The application provides complete authentication flows:

1. **Login**: Existing users can log in with email/password
2. **Signup**: New users can create accounts
3. **Password Reset**:
   - Request reset code via email
   - Verify code
   - Set new password

## Book Management

- View all books in a responsive grid
- Add new books (admin only)
- Edit existing books (admin only)
- Delete books (admin only)
- Search functionality

## API Integration

The frontend communicates with the backend via these services:

- `authService.tsx`: Handles all authentication requests
- `BookService.tsx`: Manages book-related API calls

## Styling

The application uses:

- Bootstrap 5 for core styling
- Custom CSS for additional styling
- Responsive design principles
- Right-to-left (RTL) text support for Arabic

## Environment Variables

| Variable            | Description               |
| ------------------- | ------------------------- |
| `VITE_API_BASE_URL` | Base URL for API requests |

## Development

1. Start the development server:

```bash
npm run dev
```

2. The application will be available at `http://localhost:5001`

## Deployment

To create a production build:

```bash
npm run build
```

The build artifacts will be in the `dist/` directory.

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/your-username/book-library-frontend](https://github.com/your-username/book-library-frontend)

```

This README includes:

1. Project overview with badges
2. Key features and technologies
3. Detailed project structure
4. Installation instructions
5. Available scripts
6. Authentication and book management flows
7. API integration details
8. Styling information
9. Environment variables
10. Development and deployment instructions
11. Contribution guidelines
12. License and contact information

You can customize it further by:
- Adding screenshots of the UI
- Including more detailed API documentation
- Adding a roadmap for future features
- Expanding the contribution guidelines
- Adding testing instructions if you implement tests
```
