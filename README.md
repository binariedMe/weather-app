# mern-stack
MongoDB, Expressjs, React/Redux, Nodejs

## Prerequirements
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^8.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

## Client-side usage(PORT: 3000)
```terminal
$ cd client
$ npm i
$ npm run dev
```

## Server-side usage(PORT: 8000)
```terminal
$ cd server
$ npm i
$ npm run dev
```

# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.15.3 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
lodash: ^3.10.1 | cors: ^2.8.1
react: ^16.2.0 | dotenv: ^2.0.0
react-dom: ^16.2.0 | express: ^4.14.0
react-redux: ^4.0.0 | jwt-simple: ^0.5.1
react-router-dom: ^4.2.2 | mongoose: ^4.7.4
redux: ^3.7.2 | morgan: ^1.7.0
redux-form: ^6.4.1 |
redux-thunk: ^2.1.0 |

# Pending tasks

- Use postgres instead of mongo.
- Optimize sass files further.
- Some actions are not using redux which should be taken care of.
- Use auto-restart tool like pm2/forever to hot-start app.
- Bifurcate the app in three service : client, server, database.
- Containerize the app using docker.
- Tests are incompleted and haven't been verified.
 So missing tests should be written and verified.
- Add location information at the time of sign-in and use that to show default
city for weather.
- Show correct weather instead of one static icon for all weather type
- Remove .env file and configure prod script to accordingly take care of that.
- Passport.js for auth can be preferred.
- Use HTTP 2 for better performance.
- Other performance/logical/ui improvements
- Bug fixes.

