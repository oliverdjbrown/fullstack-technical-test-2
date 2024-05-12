# FullStack Finclutech Technical Test

### Description

A. A single HTTP Endpoint returning Sample JSON data for the task is accessible here:
`https://68.183.176.148:8901/v1/getNewApplications`

B. Store the data received from the endpoint above into a RDBMS instance and proceed to the next step.

C. Design and develop web application that:
1. Is accessible via authentication.
2. Retrieves data from the RDBMS and renders a data grid/table with the following constraints:
    a. Handling sorting (on column click), pagination, and download of the data as a CSV file on the front-end side.
3. Allows users to create, edit, delete, and update the records displayed in the data grid.
4. Implements a dashboard component which queries DB and renders visuals based on:
    a. Total count of transactions
    b. Business category (simple, complex)
    c. Application status (Incomplete Application, AML In-Progress, etc)
    d. Any other variables you may consider valid
5. You are encouraged to use your own personalized visualizations and design (color theme, icons/images, etc.). Remember, the sample screen designs are examples and they should not limit you.

Tech stack for the project is:
- Backend – Python/Java/NodeJS
- Frontend – Angular/React

### Requirements
1. [Download Git](https://git-scm.com/downloads)
2. [Download Docker](https://www.docker.com/products/docker-desktop)
3. [Download NodeJs V20 LTS](https://nodejs.org/)

### How to start
1. Clone the repository.
2. Run `npm install` in `backend-nodejs` directory .
3. Run `npm install` in `frontend-angular` directory.
4. inside `backend-nodejs` directory rename `.env.example` to `.env` change the variable values to your own, for testing you can keep the default ones.
5. inside `backend-nodejs` directory run the command `npm run docker` to start an instance Postgres docker container the `docker-compose.yml` 
file will set up the database and credentials also will persist the data.
6. with docker or browser access to this url `http://localhost:3000/api/v1/seeds` to seed the database with the data from the endpoint `https://68.183.176.148:8901/v1/getNewApplications`, and create a default user.
7. the user credentials are **email**: `correo1@correo.com.do` and **password** `123456`.
8. Run `npm run dev` in `backend-nodejs` directory to start the server.
9. Run `npm start` in `frontend-angular` directory to start the client.
10. Access the client at `http://localhost:4200` and login with the credentials.

### Backend Technologies
1) Node.js
2) Express.js
4) Postgres
5) JWT
6) Docker

### Frontend Technologies
1) Angular
2) Bootstrap
3) Tailwindcss
4) ApexCharts
5) NgxToast
6) Typescript






