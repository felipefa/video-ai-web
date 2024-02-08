# video-ai-web

This project is a React-based web application built with TypeScript and bundled with Vite. It's designed to provide a user-friendly interface for video input and processing.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.
- [npm](https://www.npmjs.com/): A package manager for JavaScript and the world's largest software registry.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [PostCSS](https://postcss.org/): A tool for transforming CSS with JavaScript.
- [FFmpeg](https://ffmpeg.org/): A complete, cross-platform solution to record, convert and stream audio and video.

## How to Run

1. Install dependencies:

```sh
npm install
```

2. Start the development server:

```sh
npm run dev
```

## Folder Structure

- `src/`: Contains the source code of the application.
  - `app.tsx`: The main application component.
  - `components/`: Contains reusable UI components.
  - `ffmpeg/`: Contains the FFmpeg core and worker scripts.
  - `lib/`: Contains utility and helper functions.
  - `main.tsx`: The entry point of the application.
- `vite.config.ts`: Configuration file for Vite.

## Features

- Video input form: Allows users to input videos for processing.
- UI components: A set of reusable components for building the user interface.
- FFmpeg integration: Uses FFmpeg for video processing.

## Purpose

This project is designed to provide a user-friendly interface for video input and processing. It leverages the power of FFmpeg for video processing and, when connected to the backend, OpenAI to provide an AI based description or title for the video.
