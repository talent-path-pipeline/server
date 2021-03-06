# Server
## Overview
> Talent Path Pipeline Back-end

---
## Table of Contents
- [Release Notes](##Release%20Notes)
- [Getting Started](##Getting%20Started)
- [Coding Standards](##Coding%20Standards)
- [Basic Structure](##Basic%20Structure)
- [Usage](##Usage)

---
## Release Notes

### Current Release:
Pre-Alpha (v0.0)

### Release Details:
<!-- #### Upgrade Steps -->
<!--Includes:
      - Steps users have to take when they upgrade beyond just dumping the dependency.
      - Pseudocode that highlights what code should change and how.
      - Call out if users are recommended to upgrade because of known problems with older releases. -->

#### New Features
<!-- Includes:
      - the new feature 
      - when/why to use it
      - pictures! 
      - caveats/warnings? 
      - Is it a beta feature? -->
- Login/Sign Up Routes
  - Generate Token on login/signup
  - Hash Passwords
- Users CRUD API
- Lessons CRUD API
- Paths CRUD API
- Courses CRUD API
- YouTube
  - Transformer to translate length of videos





#### Bug Fixes
<!-- Includes:
      - existing feature/functionality that now works as intended or expected.-->
- No bugs...

#### Improvements
<!-- Includes:
      - Improvements/enhancements to a:
        - workflow, performance, logging, error messaging, or user experience -->
- No feedback...

---
## Getting Started

The following setup will be broken down into two sections, setting it up for local development and setting it up for deployment on [heroku](https://www.heroku.com).

### Setting up for local development

1. Clone the repo to your machine

2. Run the following command `npm i` to install all packages

3. Create a .env file on the root directory with the information from .env.default file

4. Have [Postgress running](https://www.postgresql.org/docs/current/server-start.html) in the background.

5. Run `npm start` to run the server

6. Sequelize will generate all the tables for Postgress before the server begins listening for requests.

### Setting up for deployment

**Coming Soon!**

---
## Coding Standards

### Naming conventions:

- **Classes/Components**: Pascal case (e.g. `HomePage.js`)
- **Variables**: Snake case (e.g. `my_awesome_variable = 5`)
- **Constants**: Caps case (e.g. `const GLOBAL_VARIABLE = 'a global string`)
- **Folders**: Kebab case (e.g. `i-am-a-folder`)
- **Functions**: Camel Case (e.g. `doSomethingPlease(input)`)
- **Git Branches**: Kebab case with a descriptive name and prefaced by an 's' the number of the issue it deals with (e.g. for `server issue #11: "AaD, I want to create associations between tables` the branch should be named something like `s11-table-associations`).

### Style consistency

We are using VSCode for development with the ESLint and Prettier extensions for consistency. Configuration files for both extensions are included in the root of this repository. If contributing, please either install those extensions or read through them and ensure your code complies with the rules listed.

---
## Basic Structure

The back-end is structure like the following:

```text
server/
├── config/
│   └── config.js
├── controller/
├── db/
├── middleware/
├── models/
│   ├── authentication/
│   ├── index.js
│   ├── learning-resources/
│   └── user-resources/
├── package.json
├── package-lock.json
├── README.md
├── routes/
│   ├── index.js
│   ├── private/
│   └── public/
├── server.js
├── services/
├── utils/
└── validations/
```

**Descriptions coming soon!**

---
## Usage

### Routes to use

1. **Registration**

   - ![POST](https://raw.githubusercontent.com/Zyxel-1/Snips-Server/master/images/http-verbs/POST.png) **/api/user** - Create user

     - **Parameters**

       | Name                                                         | Description                                                  |
       | ------------------------------------------------------------ | ------------------------------------------------------------ |
       | **body** ![required](https://raw.githubusercontent.com/Zyxel-1/Snips-Server/master/images/required.png) | Created user object                                          |
       | (body)                                                       | Example                                                      |
       |                                                              | ![image](https://raw.githubusercontent.com/Zyxel-1/Snips-Server/master/images/code-snippets/registration.png) <br><br> Parameter content type: **application/json** |
       | **Response**                                                         | Example                                                  | 
       |                                                              | Returns a Success Message and a Token:  <br> ![image](./data/images/loginResponse.png) <br><br>   Parameter content type: **application/json** |
       | **Code**                                                     | **Description**                                              |
       | 200                                                          | ``successful operation``                                     |
       | 400                                                          | ``Invalid username or password supplied``                    |
       
     
   - ![POST](https://raw.githubusercontent.com/Zyxel-1/Snips-Server/master/images/http-verbs/POST.png) **/api/user/login** - Logs user into the system 

     - **Parameters**

       | Name                                                         | Description                                                  |
       | ------------------------------------------------------------ | ------------------------------------------------------------ |
       | **body** ![required](https://raw.githubusercontent.com/Zyxel-1/Snips-Server/master/images/required.png) | Logs a user in                                               |
       | (body)                                                       | Example                                                      |
       |                                                              | ![Login](https://raw.githubusercontent.com/Zyxel-1/Snips-Server/master/images/code-snippets/login.png)<br> Parameter content type: **application/json** |
       | **Response**                                                         | Example                                                  | 
       |                                                              | Returns a Success Message and a Token:  <br> ![image](./data/images/loginResponse.png) <br><br>   Parameter content type: **application/json** |
       | **Code**                                                     | **Description**                                              |
       | 200                                                          | ``successful operation``                                     |
       |                                                              | **Headers:**<br><br>**X-Token**: User JWT token **(string)** |
       | 400                                                          | ``Invalid username or password supplied``                    |

 2. **Read**

   - ![GET](https://raw.githubusercontent.com/Zyxel-1/Snips-Server/master/images/http-verbs/GET.png) **/api/user** - Get user(s)

     - **Parameters**

       | Name                                                         | Description                                                  |
       | ------------------------------------------------------------ | ------------------------------------------------------------ |
       | **body** ![optional](./data/images/optional.png) | Email of User you want to get.  <br>If not included, returns all users.       |
       | (body)                                                       | Example                                                      |
       |                                                              | ![image](./data/images/getUser.png) <br><br> Parameter content type: **application/json** |
       | **Response**                                                         | Example                                                  | 
       |                                                              | Returns all Users:  <br> ![image](./data/images/getAllResponse.png) <br><br> Or <br><br>Returns One User:  <br> ![image](./data/images/getOneResponse.png) <br><br>  Parameter content type: **application/json** |
       | **Code**                                                     | **Description**                                              |
       | 200                                                          | ``successful operation``                                     |
       | 400                                                          | ``An error has occurred: Invalid data received.``                    |
       
 3. **Update**

   - ![PATCH](./data/images/PATCH.png) **/api/user** - Get user(s)

     - **Parameters**

       | Name                                                         | Description                                                  |
       | ------------------------------------------------------------ | ------------------------------------------------------------ |
       | **body** ![required](https://raw.githubusercontent.com/Zyxel-1/Snips-Server/master/images/required.png) | Email of User you want to update. {email}<br> Data that you want to update. {newData} <br>-- newData can be an empty object. <br> -- Only include data you want to update  <br> -- You can't update a password with this route      |
       | (body)                                                       | Example                                                      |
       |                                                              | ![image](./data/images/updateUser.png) <br> ![image2](./data/images/updateUser2.png) <br><br> Parameter content type: **application/json** |
       | **Response**                                                         | Example                                                  | 
       |                                                              | Updates a User:  <br> ![image](./data/images/updateResponse.png) <br><br>  Parameter content type: **application/json** |
       | **Code**                                                     | **Description**                                              |
       | 200                                                          | ``successful operation``                                     |
       | 400                                                          | ``An error has occurred: Invalid data received.``                    |

 4. **Delete**

   - ![DELETE](https://raw.githubusercontent.com/Zyxel-1/Snips-Server/master/images/http-verbs/DELETE.png) **/api/user** - Deletes a user

     - **Parameters**

       | Name                                                         | Description                                                  |
       | ------------------------------------------------------------ | ------------------------------------------------------------ |
       | **body** ![required](https://raw.githubusercontent.com/Zyxel-1/Snips-Server/master/images/required.png) | Email of User you want to delete.       |
       | (body)                                                       | Example                                                      |
       |                                                              | ![image](./data/images/getUser.png) <br><br> Parameter content type: **application/json** |
       | **Response**                                                         | Example                                                  | 
       |                                                              | Deletes a User:  <br> ![image](./data/images/deleteResponse.png) <br><br>  Parameter content type: **application/json** |
       | **Code**                                                     | **Description**                                              |
       | 200                                                          | ``OK``                                     |
       | 400                                                          | ``An error has occurred: Invalid data received.``                    |
    