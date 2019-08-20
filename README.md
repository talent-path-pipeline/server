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

# Server

> Talent Path Pipeline Back-end

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

## Basic Structure

The back-end is structure like the following:

```text
// Coming Soon!

```

## Usage

The following routes are available to be used:

**Coming Soon!**
