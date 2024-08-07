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

## Project setup

#### .gitignore Settings

This project uses a `.gitignore` file to exclude certain files and directories from version control. Here’s a summary of what’s ignored:

- **Environment Files:** `.env`, `.env.local`, `.env.production` – These files contain sensitive configuration and should not be committed to the repository.
- **Build Artifacts:** `dist/`, `build/` – Generated build artifacts and temporary files are excluded to keep the repository clean.
- **IDE Configurations:** `.vscode/`, `.idea/` – IDE-specific settings are ignored to avoid committing personal development environment configurations.
- **Dump files:** `.sql/` – Ignores plain SQL dump files because they often contain large amounts of data and are not typically useful to track in version control.

Please make sure to keep these files out of version control to avoid potential issues.

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server). Check if the following dependencies are installed, otherwise install with the commands:

- Express.js `npm install express`
- Nodemon `npm install -g nodemon`
- MySQL `npm install mysql`

Type `cd client` in the terminal and run `npm install` to install dependencies related to React TypeScript (the client). Check if the following is installed:

- React Router `npm install react-router-dom`
- Axios `npm install axios`
- Tailwind CSS (follow this guide: https://tailwindcss.com/docs/guides/vite)

### Database Prep

Create a `.env` file in the root directory of the project and fill in the necessary environment variables. Use the `.env.example` file as a template:

```sh
  cp .env.example .env
```

Create a folder in your root named dump-files. Export a MySQL dump file from the production database and move it to your dump-files folder.

Connect to MySQL and create a new local database.

```
  CREATE database Targets;`
```

Exit the MySQL client and run `mysql -u root -p Targets < path/to/your/dump/file` in the terminal to migrate the exported dump file into your local database.

Check that the migration was successful and that the tables in your local database contain the exported data.

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- Type `cd client` in a new terminal and run `npm run dev` to start the client server in development mode with hot reloading in port 5173.

### Deployment

The staging environment is hosted on Render, allowing for changes to be tested before they are deployed to production. The Render environment is connected to the production database on AWS, where necessary changes and updates can be made.

Good luck!
