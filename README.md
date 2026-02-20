# Modern To-Do App

A sleek, responsive, and feature-rich To-Do application built with React, TypeScript, and Vite. This project focuses on clean UI/UX, persistent task management, and a polished mobile-first design.

## Features

- **Dynamic Task Management**: Add, edit, and delete tasks with ease.
- **Persistent Storage**: Uses `localStorage` to save your tasks locally, so they persist across sessions.
- **Smart Search**: Real-time filtering by task title, description, or status.
- **Categorized Sections**: Tasks are automatically grouped into **Pending**, **In Progress**, and **Completed**. These sections remain visible even when empty to maintain layout consistency.
- **Custom UI Components**:
  - **Avatar System**: Each task features a contact-style avatar with the first letter of its title.
  - **Accordion Status Selector**: A custom-built collapsible selector for task statuses with colored indicators and highlights.
  - **Polished Card Design**: A modern, 3-line card layout with color-coded action icons (blue for edit, red for delete).
- **Responsive Design**: Optimized for both mobile and desktop views with a centralized "phone-like" container on larger screens.

## Tech Stack

- **Core**: React 19, TypeScript
- **Icons**: Lucide React
- **Styling**: Vanilla CSS with a custom design system
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/VSVEL/tresata-assignment.git
   cd tresata-assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

## Project Structure

```text
src/
├── components/       # UI Components (TaskItem, TaskList, AddTaskForm)
├── hooks/            # Custom React hooks (useTasks for logic)
├── types.ts          # TypeScript type definitions
├── App.tsx           # Main application entry and routing
├── App.css           # Global styles and design system tokens
└── main.tsx          # React DOM mounting
```

## Contributing

This was developed as part of a technical assignment. Feel free to explore and modify the code!
