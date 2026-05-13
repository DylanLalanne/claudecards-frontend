# Frontend Learning Plan — CS 490R

**Technology:** React (Vite) + Express REST API  
**Goal:** By end of Week 5, have a working frontend that connects to my Express REST API with login and authenticated requests.  
**Time budget:** ~10 hours/week

---

## Week 2 — React Fundamentals + Component Thinking
**Goal:** Understand components, props, state, and build something non-trivial from scratch.

### Topics
- JSX syntax and how components work
- useState and controlled inputs
- Handling events (onClick, onChange)
- Conditional rendering
- Lists and keys
- Breaking UI into reusable components

### Resources
- [React Quick Start](https://react.dev/learn) — all of it, including "Thinking in React"
- [Scrimba React course](https://scrimba.com/learn/learnreact) — free, interactive
- [JavaScript.info](https://javascript.info/) — reference for any JS gaps you hit

### Milestones
- [ ] Build a counter component from scratch without looking anything up
- [ ] Build a multi-field form that validates input and displays results
- [ ] Refactor App.jsx into at least 3 separate components
- [ ] No tutorial code left — everything is your own

---

## Week 3 — Routing, Layout, and Auth UI
**Goal:** Multi-page app with a complete auth UI flow (login, protected routes, logout).

### Topics
- React Router v6 (useNavigate, useParams, Route, Navigate)
- Nested layouts and shared components (navbar, sidebar)
- Lifting state up
- Building a login form that feels real
- Protected route pattern

### Resources
- [React Router docs — Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [React Router crash course (YouTube)](https://www.youtube.com/results?search_query=react+router+v6+crash+course)
- [TailwindCSS docs](https://tailwindcss.com/docs) — optional but worth adding this week for UI speed

### Milestones
- [ ] App has at least 3 pages with navigation
- [ ] Login page with form validation (email format, password length)
- [ ] Protected route redirects unauthenticated users to login
- [ ] Shared navbar that changes based on auth state

---

## Week 4 — API Integration and Auth Flow
**Goal:** Full login flow working end to end with real API calls.

### Topics
- fetch / axios
- useEffect for loading data on mount
- Loading, error, and empty states
- Storing and using JWT (localStorage + auth header pattern)
- Axios interceptors for attaching tokens automatically
- CORS and why it matters

### Resources
- [Axios docs](https://axios-http.com/docs/intro)
- [useEffect explained — react.dev](https://react.dev/learn/synchronizing-with-effects)
- [JWT.io](https://jwt.io/) — understand what's inside your token

### Milestones
- [ ] Login posts to `/api/login`, stores token, redirects to dashboard
- [ ] All API calls automatically attach the auth token
- [ ] At least 2 pages display real data fetched from Express
- [ ] Expired or invalid token logs the user out automatically

---

## Week 5 — Polish, Error Handling, and Full Integration
**Goal:** A frontend you'd be comfortable demoing to someone — complete, stable, and clean.

### Topics
- Context API for global auth state
- Toast notifications or inline error messages
- Form submission feedback (loading spinners, success/error states)
- Logout and token cleanup
- Basic responsive layout

### Resources
- [React Context — react.dev](https://react.dev/learn/passing-data-deeply-with-context)
- [React Hot Toast](https://react-hot-toast.com/) — easy notification library

### Milestones
- [ ] Login → dashboard → data → logout flow works completely
- [ ] Every API call has a loading state and error handling
- [ ] App looks reasonable on mobile
- [ ] No console errors in the finished app
- [ ] Someone unfamiliar with the project can use it without breaking it