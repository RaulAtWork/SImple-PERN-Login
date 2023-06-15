# SImple-PERN-Login

Simple React + ExpressJS + PostgreSQL(WIP) Login web page. <br>
Here is an example of a working solution [punit-suman's PERN-Authenticator](https://github.com/punit-suman/PERN-authentication).
<br>

---

To install all dependencies

```
npm run all-dep
```

To run client and express-server concunrrently

```
npm run start-dev
```

To run only client

```
npm run client-dev
```

To run only express-server

```
npm run server-dev
```

---

## Tasks

- Front-end
  - ✅ Create a React project
  - Create pages:
    - ✅ Login
    - Registration
    - Home Page (after authentication). This has to be a protected route
  - ✅ Use Axios to make the HTTP requests
  - ✅ Store JWT token securely on cookies or local storage
- Back-end
  - ✅ Create an Express.js server to handle HTTP requests
  - ✅ Create routes to handle:
    - ✅ Login (POST)
    - ✅Registration (POST)
    - ✅ Authentication (POST)
    - ✅ Log out (GET)
  - Use a PostgreSQL database to store to store user and passwords
  - Generate a JSON Web Token(JWT) upon successful login for authentication and login management
- Integration
  - ✅ Connect front-end to back-end using API requests
  - ✅ Handle CORS
  - Handle and display error messages on the UI

---

## Additionals

- ✅ Make a main script to install all dependencies and run both application
