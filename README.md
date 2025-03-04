# Milestones Dashboard

The Milestones Dashboard is an open-source application designed to track the completion of yearly EuFMD Program Targets until 2027. It provides a visual interface for monitoring progress across various focus objectives, key areas, and expected results.

## Prerequisites

- Node.js (v20.13.0)
- Python 3.12.7
- MySQL
- npm

## Dependencies

Server-side (backend):

- Python 3.12.7
- Flask 3.1.0
- Werkzeug 3.1.3
- MySQL (^2.18.1)

Client-side (frontend):

- TypeScript (^5.2.2)
- React (^18.2.0)
- React Router Dom (^6.22.3)
- Tailwind CSS (^3.4.3)
- Plotly.js (^2.34.0)

## Installation Steps

### 1. Clone the repository

```bash
git clone https://github.com/FAOEuFMD/milestones-dashboard.git
cd milestones-dashboard
```

### 2. Install server dependencies

```bash
npm install
```

### 3. Install client dependencies

```bash
cd frontend
npm install
```

### 4. Environment Configuration:

- In the root project directory, copy `.env.example` to `.env`
- Configure database credentials and other environment variables

### 5. Configuration

Key configuration files:

- .env: Environment variables
- vite.config.ts: Frontend build configuration
- tailwind.config.js: CSS styling configuration
- tsconfig.json: TypeScript configuration

#### .gitignore Settings

This project uses a `.gitignore` file to exclude certain files and directories from version control. Here’s a summary of what’s ignored:

- **Environment Files:** `.env`, `.env.local`, `.env.production` – These files contain sensitive configuration and should not be committed to the repository.
- **Build Artifacts:** `dist/`, `build/` – Generated build artifacts and temporary files are excluded to keep the repository clean.
- **IDE Configurations:** `.vscode/`, `.idea/` – IDE-specific settings are ignored to avoid committing personal development environment configurations.
- **Dump files:** `.sql/` – Ignores plain SQL dump files because they often contain large amounts of data and are not typically useful to track in version control.

Please make sure to keep these files out of version control to avoid potential issues.

### Dependencies

Run `npm install` in the project folder to install server side dependencies.

You will also need to create and activate a virtual environment. Run the commands `python -m venv venv` and `source venv/bin/activate` (or `. venv/Scripts/activate` for Windows users) to activate your virtual environment. Then, run `pip install -r requirements.txt` in order to install the Python dependencies required to run the backend. You may need to install python-dotenv separately: `pip install python-dotenv`.

Type `cd frontend` in the terminal and run `npm install` to install client-side dependencies related to React TypeScript (the client). Check if the following is installed:

- React Router `npm install react-router-dom`
- Tailwind CSS (follow this guide: https://tailwindcss.com/docs/guides/vite)

### Database Prep

Create a `.env` file in the root directory of the project (see step #4) and fill in the necessary environment variables - ask the development team for the correct values. Use the `.env.example` file as a template:

```sh
  cp .env.example .env
```

2. Create a folder in your root named dump-files. Export a MySQL dump file from the production database (or request a current dump file from the team lead) and move it to your dump-files folder.

3. Connect to MySQL and create a new local database.

```
  CREATE database Targets;
```

4. Exit the MySQL client and run `mysql -u root -p Targets < path/to/your/dump/file` in the terminal to migrate the exported dump file into your local database.

5. Ensure that the migration was successful by connecting to your newly created database and checking that the tables contain the exported data.

### 7. Development

- Run `npm start` in the project directory
  Alternatively, cd into the backend directory and use the command `python3 main.py`.
- Type `cd client` in a new terminal and run `npm run dev` to start the client server in development mode with hot reloading in port 5173.

## Deployment

The staging environment is hosted on Render, allowing for changes to be tested before they are deployed to production. The Render environment is connected to the production database on AWS, where necessary changes and updates can be made.

Good luck!
