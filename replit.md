# Slrd - HR Recruitment Application

## Overview
This is a React Native Expo application for HR recruitment management. It uses:
- **Expo** for cross-platform mobile and web development
- **Convex** as the backend database and API
- **React Navigation** for navigation
- **expo-router** for file-based routing

## Project Structure
- `app/` - Expo Router pages and screens
- `components/` - Reusable React components
- `convex/` - Convex backend functions and schema
- `assets/` - Images and static assets
- `android/` - Android native code

## Running the Application
The web version runs on port 5000 using Expo's web bundler.

```bash
npm run web
```

## Environment Variables Required
- `EXPO_PUBLIC_CONVEX_URL` - The Convex deployment URL for the backend

## Key Features
- User authentication (login/signup)
- Job posting and browsing
- Application management
- Interview scheduling
- Resume uploads
- HR and Admin dashboards
- Candidate profiles
- Notifications system
- Query management

## Recent Changes
- 2025-12-29: Initial Replit environment setup
