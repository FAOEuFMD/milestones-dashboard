# milestones-dashboard

An open-source dashboard that tracks the completion of yearly EuFMD Program Targets until the year 2027.

## Built With

- TypeScript (^5.2.2)
- React (^18.2.0)
- React Router Dom (^6.22.3)
- Axios (^1.6.8)
- Tailwind CSS (^3.4.3)
- Node.js (v20.13.0)
- Express.js (~4.16.1)
- MySQL (^2.18.1)

## Setup

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server). Check if the following dependencies are installed, otherwise install with the commands:

- Express.js `npm install express`
- Nodemon `nnpm install -g nodemon`
- MySQL `npm install mysql`

Type `cd client` in the terminal and run `npm install` to install dependencies related to React TypeScript (the client). Check if the following is installed:

- React Router `npm install react-router-dom`
- Axios `npm install axios`
- Tailwind CSS (follow this guide: https://tailwindcss.com/docs/guides/vite)

### Database Prep

Create `.env` file in project directory and add

```
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=dashboard
  DB_PASS=YOUR_PASSWORD
  SUPER_SECRET=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password)

Type `mysql -u root -p` in the terminal to access MySQL and type your password.

In the MySQL terminaL, type `CREATE database dashboard;` to create a database in MySQL.

Run `npm run migrate` in your terminal in the project folder. This will create the following the table `milestones`

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- Type `cd client` in a new terminal and run `npm run dev` to start the client server in development mode with hot reloading in port 5173.

### Deployment

The staging environment is deployed here on Render: https://milestones-dashboard-staging.onrender.com/
