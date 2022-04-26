<p align="center">
  <img src="https://crewmeister.com/images/logo_crewmeister_without_text.svg" />
</p>

# 🚀 Crewmeister coding challenge - Frontend (React)

Hello Crewmeister team, thank you very much for including me in this code challenge.

## Product Requirements

- [x] I want to see a list of absences including the names of the employees.
- [x] I want to see the first 10 absences, with the ability to paginate.
- [x] I want to see a total number of absences.
- [x] For each absence I want to see:
  - [x] Member name
  - [x] Type of absence
  - [x] Period
  - [x] Member note (when available)
  - [x] Status (can be 'Requested', 'Confirmed' or 'Rejected')
  - [x] Admitter note (when available)
- [x] I want to filter absences by type.
- [x] I want to filter absences by date.
- [x] I want to see a loading state until the list is available.
- [x] I want to see an error state if the list is unavailable.
- [x] I want to see an empty state if there are no results.
- [ ] (Bonus) I can generate an iCal file and import it into outlook.

## Context

The answer to the coding challenged is divided into 2 parts

- API - Simple backend service to use members and absences data in desired format

- CLIENT - Frontend side to show data sent from backend

## Instructions

- Clone this repo.
- Open the project folder using Visual Studio Code

## API side

- For the data desired to be used in the members data, it is ensured that the members and absences data are populated and formatted and used as a single data source.
- Nodemon is used, which detects changes and automatically hot reloads the server for you.
- A simple api working at http://localhost:5000/api/absences was produced with express js.

### To Start "api"

1. Open a new terminal
2. cd to folder api
3. Execute "npm install" to get the dependencies
4. Execute "npm start" to start the server. Server runs in port 5000

\*if you have a problem with npm start,then execute npx nodemon (I had this problem before)\*

---

## CLIENT side

1.  The absence table was created using the react-tables library. [React Tables](https://react-table.tanstack.com/)
2.  React spinners library is used for loading state. [React Spinners](https://www.npmjs.com/package/react-spinners)
3.  The specified filters are on the column. Type and date can be filtered and data can be viewed.

## .env

REACT_APP_BASE_URL = http://localhost:5000/api

### To Start "client"

1. Open a new terminal
2. cd to folder client
3. Execute "npm install" to get the dependencies
4. Execute "npm start" to start the project.

### That's it!

Salute!

<img src="https://c.tenor.com/0heitU7-tg4AAAAC/copy-paste-paste.gif" width="200" height="150" />
