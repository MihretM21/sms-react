# Student Management System (React)

A student management app built in stages with React, Vite and a small json-server API. It was built as the Week 5 assignment of the Hiruy Full-Stack Bootcamp.

## Stages built
| Stage | What was added |
|---|---|
| 1 | Static Dashboard, Students and Courses interface |
| 2 | Components: Navbar, Sidebar, StudentCard, CourseCard |
| 3 | Data rendered with `students.map()` and `courses.map()` |
| 4 | State: add, delete, search and filter students |
| 5 | Forms: create and edit a student |
| 6 | API connection: React talks to json-server (REST) |
| 7 | Routing: /dashboard, /students, /courses, /settings |
| 8 | Architecture: components, pages, services, hooks and utils folders |
| 9 | Authentication: login and protected routes |

## Features
- Dashboard with student and course counts
- Students: add, edit, delete, search, filter by status
- Courses list
- Routing with React Router
- Login with protected routes, and logout

## How to run
1. `npm install`
2. `npm run api`   (starts the json-server API on port 5000)
3. In a second terminal: `npm run dev`
4. Open the link shown (usually http://localhost:5173)

Login: admin@school.com / 1234

## Folder structure
```
src/
├── components/   reusable pieces: Layout, Navbar, Sidebar, StudentCard, CourseCard, StudentForm, ProtectedRoute
├── pages/        one file per screen: Login, Dashboard, Students, Courses, Settings
├── services/     api.js, all fetch calls to the server in one place
├── hooks/        useStudents, useCourses, useAuth (data and login logic)
└── utils/        helpers.js
db.json           the data served by json-server
```

## How the data flows
Page -> custom hook (useStudents) -> service (api.js) -> `fetch` -> json-server (db.json) -> state -> screen.

## Notes
- The backend is simplified: json-server serves `db.json` as a REST API.
- Authentication is a simplified front-end check saved in localStorage. A real app must check the user on the server.

## Author
Mihret Dula, [@MihretM21](https://github.com/MihretM21)
```

---

# README for sms-react-tailwind (React + Tailwind)

```md
# Student Management System (React + Tailwind CSS)

The same app and logic as the [plain React version](https://github.com/MihretM21/sms-react), styled entirely with Tailwind CSS utility classes. Built as the Week 5 assignment of the Hiruy Full-Stack Bootcamp.

## What is different from the plain React version
- No custom component CSS. All styling is Tailwind classes in the JSX (`flex`, `grid`, `p-4`, `rounded`, and so on)
- **Responsive, mobile first:** the layout adapts at `sm` 640px, `md` 768px and `lg` 1024px
- Hover and focus states, for example `hover:bg-blue-700` and `focus:ring-2`
- Conditional classes, for example a different color for each student status
- Tailwind is added with the `@tailwindcss/vite` plugin and `@import "tailwindcss";` in `src/index.css`

## Features
- Dashboard with student and course counts
- Students: add, edit, delete, search, filter by status
- Courses list
- Routing with React Router
- Login with protected routes
- Responsive layout for phone, tablet and desktop

## How to run
1. `npm install`
2. `npm run api`   (starts the json-server API on port 5000)
3. In a second terminal: `npm run dev`
4. Open the link shown (usually http://localhost:5173)

Login: admin@school.com / 1234

## Folder structure
```
src/
├── components/   reusable pieces
├── pages/        one file per screen
├── services/     api.js, all fetch calls
├── hooks/        useStudents, useCourses, useAuth
└── utils/        helpers
db.json           the data served by json-server
```

## Notes
- The backend is simplified: json-server serves `db.json` as a REST API.
- Authentication is a simplified front-end check saved in localStorage. A real app must check the user on the server.

## Author
Mihret Dula, [@MihretM21](https://github.com/MihretM21)

