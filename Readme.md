# Blog Editor App

A simple blog editor built with React.js and Node.js. You can write, edit, auto-save drafts, and publish blog posts. Everything is saved in MongoDB, and there are toasts to give you feedback while working.

![Banner](https://raw.githubusercontent.com/your-username/fullstack-blog-editor/main/banner.png)

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## Features

* Write and edit blog posts
* Auto-save draft after 5 seconds of inactivity
* Toast notifications when saved or published
* Draft and published posts listed separately

---

## Stack Used

* **Frontend:** React, React Quill (for rich text), Axios, React Toastify
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas)

---

## Folder Structure

```
project-root/
├── client/               # React frontend
│   └── src/
│       └── components/
│           ├── Editor.js
│           └── BlogList.js
├── server/               # Express backend
│   ├── index.js
│   ├── models/
│   │   └── Blog.js
│   └── routes/
│       └── blogs.js
├── .env
├── .env.example
├── README.md
└── .github/
    └── workflows/
        └── node.yml     # GitHub Actions for CI
```

---

## Getting Started

### Requirements

* Node.js and npm
* MongoDB Atlas account (free)

### 1. Clone and Setup

```bash
git clone https://github.com/your-username/fullstack-blog-editor.git
cd fullstack-blog-editor
```

### 2. Backend Setup

```bash
cd server
npm install
cp ../.env.example .env
```

Edit `.env` and update with your MongoDB URI.

```env
MONGODB_URI=your_mongo_uri_here
PORT=5000
```

Run backend:

```bash
node index.js
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start
```

---

## API Routes

| Method | Route                 | Purpose                |
| ------ | --------------------- | ---------------------- |
| POST   | /api/blogs/save-draft | Save or update a draft |
| POST   | /api/blogs/publish    | Publish a blog post    |
| GET    | /api/blogs            | Get all blogs          |
| GET    | /api/blogs/\:id       | Get a blog by its ID   |

---

## Deployment Tips

### Backend (Render)

* Push `server/` to GitHub
* Create a new web service on Render
* Set environment variables: `MONGODB_URI`, `PORT`
* Use build command: `npm install`
* Use start command: `node index.js`

### Frontend (Vercel or Netlify)

* Push `client/` to GitHub
* Connect to Vercel/Netlify
* Set env var: `REACT_APP_API_BASE_URL`
* Auto builds and deploys

---

## CI/CD with GitHub Actions

GitHub Actions config at `.github/workflows/node.yml`:

```yaml
name: Node.js CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: cd server && npm install && npm test || true
```

---

## Notes

* Debouncing helps reduce API calls during typing
* Toasts give instant feedback
* MongoDB Atlas is easy to use for remote data storage

---

## Improvements to Consider

* Add user login and JWT authentication
* Add support for uploading images
* Pagination for blog list

---

## License

MIT
