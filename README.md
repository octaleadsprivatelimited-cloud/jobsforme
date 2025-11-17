# JobsForMe - Coming Soon Landing Page

A stunning, modern coming soon landing page built with React and Node.js, featuring beautiful Lottie animations for education and innovation themes.

## Features

- 🎨 Modern, gradient-based design with animated background
- ⏱️ Real-time countdown timer
- 📧 Email subscription form
- 🎭 Lottie animations for education and innovation
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🔗 Social media links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install backend dependencies:
```bash
npm install
```

2. Install frontend dependencies:
```bash
cd client
npm install
```

### Running the Application

1. Start the backend server (from root directory):
```bash
npm start
# or for development with auto-reload:
npm run dev
```

2. Start the React development server (from client directory):
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

### Building for Production

1. Build the React app:
```bash
cd client
npm run build
```

2. The built files will be in `client/build/` and will be served by the Node.js server.

## Lottie Animations

The project uses Lottie animations for education and innovation themes. The current setup includes placeholder JSON files. For best results, you can:

1. Visit [LottieFiles](https://lottiefiles.com/)
2. Search for "education" and "innovation" animations
3. Download the JSON files
4. Replace the files in `client/src/assets/`:
   - `education.json`
   - `innovation.json`

## Project Structure

```
jobsforme/
├── server.js              # Express server
├── package.json           # Backend dependencies
├── client/                # React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ComingSoon.js
│   │   │   └── ComingSoon.css
│   │   ├── assets/
│   │   │   ├── education.json
│   │   │   └── innovation.json
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Customization

- **Launch Date**: Modify the `launchDate` in `client/src/components/ComingSoon.js`
- **Colors**: Update the gradient colors in `client/src/components/ComingSoon.css`
- **Content**: Edit the text content in `ComingSoon.js`
- **Social Links**: Update the social media links in the `ComingSoon` component

## Technologies Used

- React 18
- Node.js & Express
- Lottie React
- React Icons
- CSS3 (with animations and gradients)

## License

MIT

