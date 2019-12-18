# Sapient Assignment

[![React](https://img.shields.io/badge/dynamic/json?style=flat&colorB=DF01D7&label=React&prefix=v&query=dependencies.react&logo=react&url=https%3A%2F%2Fraw.githubusercontent.com%2FSoFriendly%2Fyac-mobile%2FReleaseBranch%2Fpackage.json%3Ftoken%3DACCU4SJ6TGYZYKMWFCRNEQS5MYKTG)](https://reactjs.org/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat&colorB=398339)](http://standardjs.com/)

This is an assignment displaying users cadlogue with user's personal information where one can search for a perticular user and see the details of that user!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- node (version 8 or above)
- npm (version 6.10.3 or above)
- yarn (recommended)

### List of all packages used in the project with their usage

#### Dependencies

- `mobx`: "^5.15.1",
- `mobx-react`: "^6.1.4",
- `moment`: "^2.22.2",
- `prop-types`: "^15.7.2",
- `react`: "^16.4.1",
- `react-dom`: "^16.4.1",
- `react-router-dom`: "^4.3.1"

## Run the project locally

1. Clone the project and install the dependencies:

   > \$ git clone https://github.com/vipinyadav610/sapient-assignment.git

   > \$ cd sapient-assignment

   > \$ yarn

2. In the project directory, you can run folllowing command for installing dependencies present in the `package.json`.

   > ​ yarn or npm install

3. Runs the app in the development mode. By default, `NODE_ENV` is set to `development`

   > yarn start Or npm start

4. Open [http://localhost:3001](http://localhost:3001) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

**_Note:_** Port 3001 by default

## Tasks available

1. Run the storybook UI for component design. Open [http://localhost:9009](http://localhost:9009) to view created components in the browser.

> npm run storybook

2. Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. By default `NODE_ENV` is set to `production`. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

> npm run build

### Known Issues

- npm run build` fails to minify

### Supported browsers

The supported browsers is mentioned in the following field in the project's `package.json`

```json
"browserslist": [
  ">1%",
  "not ie 11",
  "not dead",
  "not op_mini all"
]
```

## Coding Style used

- [React App coding style](https://www.npmjs.com/package/eslint-config-react-app/)
