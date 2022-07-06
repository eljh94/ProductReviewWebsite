# Welcome

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This designs and creates a product review site! Here a user can leave a review, view other reviews and see rating trends.

## Documentation

Check out the `/docs/` folder for all things documentation on this project.

## System requirements

- Node >= 14.0.0
- npm >= 5.6

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies requried to run the application, tests and scripts locally.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:e2e`

Launches the testcafe test runner using chrome. If you do not have chrome switch the browser in `package.json` to firefox or alike.

### `npm run prettier`

Runs prettier and formats any unprettified code.

### `npm run compile`

Compiles the typescript files and reports any compilation errors.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Automatic Scripts

### Precommit

A precommit hook is configured to run prettier on all javascript and typescript files.
