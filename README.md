# Seeding Fund

## Table of Contents

- [Description](#Description)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)

## Description

Seeding Fund its a organization built for fund raising projects and contain two type of users
Project Owner who can submit a fund request for a specific project with details
and Admin who can manage these funding requests and update the status for the request (Pending, Approved, Rejected) and contain a Register and Login for these type users

## Getting Started <a name = "getting_started"></a>

### Prerequisites

```
- mongoose
- bcryptjs
- jwt
- axios
- jwt-decode
- react-bootstrap
- react-icons
- redux
- react-bootstrap
- react-router-dom
- react-toastify
```

## Usage

```
1- Firstly the user can make a register and choose his role whether be Admin or Project Owner

2- then the user will move directly to login page and fill his credentials and click on the login button

3- through the login process it will check if the user is Admin or Project Owner

4- if the user was admin then it will take it the admin page which contains a table show all the incoming requests from the project owners

5- if the user was project owner then it will take it the funding page which contains a form
that allow to the user to ask for a fund raising request

6- The project owner can see his funding requests in the profile page and check the status
for his funding requests if it approved or rejected or pending
```

<br>

## Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express JS](https://expressjs.com/) - Server Framework
- [React JS](https://https://reactjs.org/) - Web Framework
- [Node JS](https://nodejs.org/en/) - Server Environment
