# Simple Web Application

A minimal web application built with Express.js, featuring automated CI/CD pipelines with GitHub Actions.

## Features

- 🚀 Express.js backend server
- 📱 Responsive frontend with HTML/CSS/JavaScript
- 🧪 Automated testing with Jest
- 🔄 CI/CD pipeline with GitHub Actions
- 🏥 Health check endpoint
- 📊 Code coverage reporting
- 🔒 Security vulnerability scanning

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd testing-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The server will start with auto-reload on http://localhost:3000

### Production Mode
```bash
npm start
```

## Testing

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## API Endpoints

### GET /
- Returns the main application page

### GET /api/hello
- Returns a JSON response with a greeting message
- Response:
  ```json
  {
    "message": "Hello from the API!",
    "timestamp": "2026-05-13T..."
  }
  ```

### GET /health
- Health check endpoint
- Response:
  ```json
  {
    "status": "healthy"
  }
  ```

## Project Structure

```
testing-app/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml          # CI/CD pipeline
│       └── deploy.yml         # Deployment workflow
├── public/
│   ├── index.html            # Main HTML page
│   ├── styles.css            # Styles
│   └── app.js                # Frontend JavaScript
├── server.js                 # Express server
├── server.test.js            # Server tests
├── package.json              # Dependencies and scripts
└── .gitignore               # Git ignore rules
```

## GitHub Actions Workflows

### CI/CD Pipeline (`ci-cd.yml`)
Triggered on push and pull requests to `main` and `develop` branches:
- Runs tests on Node.js versions 14, 16, and 18
- Performs security vulnerability scanning
- Uploads code coverage reports
- Creates deployment artifacts

### Deployment (`deploy.yml`)
Triggered on:
- New releases
- Manual workflow dispatch

## Development

### Adding New Features

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "Add your feature"
```

3. Push and create a pull request:
```bash
git push origin feature/your-feature-name
```

### Running Locally

The application serves static files from the `public` directory and provides REST API endpoints. Visit http://localhost:3000 to see the application in action.

## Deployment

The application is ready to be deployed to various platforms:
- Heroku
- Azure App Service
- AWS Elastic Beanstalk
- Google Cloud Platform
- Vercel
- Netlify (static files)

Update the `deploy.yml` workflow with your deployment configuration.

## Environment Variables

Create a `.env` file in the root directory (optional):
```
PORT=3000
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use this project for learning and development.

## Support

For issues and questions, please create an issue in the GitHub repository.

---

Built with ❤️ using Node.js and Express.js
