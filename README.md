# CourseHub

CourseHub is a modern course management web app built with Next.js, React, Tailwind CSS, DaisyUI, and Firebase Authentication. It lets users browse a course catalog, search and filter courses, view individual course details, register or log in, and access protected course management pages.

## Project Key Features

- Browse a responsive course catalog powered by local JSON data.
- Search courses by title and filter them by category and price range.
- Open a dedicated details page for each course.
- Register and log in with Firebase Authentication.
- Protect admin-style routes like add course and manage courses for signed-in users only.
- Add new courses from the dashboard and store them in `localStorage`.
- Manage listed courses from a simple dashboard UI.

## Setup & Installation

### Prerequisites

- Node.js 18+ recommended
- npm

### Steps

1. Clone the repository:

```bash
git clone <your-repo-url>
cd next-course-management
```

2. Install dependencies:

```bash
npm install
```

3. Review Firebase configuration:

The app currently initializes Firebase from [`src/lib/firebase.js`](src/lib/firebase.js). If you want to use your own Firebase project, replace the config values in that file with your project credentials.

4. Start the development server:

```bash
npm run dev
```

5. Open the app in your browser:

```text
http://localhost:3000
```

### Available Scripts

- `npm run dev` starts the Next.js development server.
- `npm run build` creates a production build.
- `npm run start` runs the production server.
- `npm run lint` runs ESLint.

## Route Summary

| Route | Purpose |
| --- | --- |
| `/` | Home page with hero, features, featured courses, testimonials, and footer |
| `/courses` | Course listing page with search and filters |
| `/courses/[id]` | Dynamic course details page with related courses |
| `/about` | About page describing the platform mission |
| `/login` | User sign-in page using Firebase Authentication |
| `/register` | User registration page using Firebase Authentication |
| `/add-course` | Protected page for adding a new course |
| `/manage` | Protected page for managing existing courses |

## Data Source Notes

- Seed course data is stored in [`public/data.json`](public/data.json).
- Newly added courses are stored in browser `localStorage`.
- The manage page currently works with in-memory state for delete actions during the session.
