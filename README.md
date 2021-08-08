# LABORATORY - REACT REDUX

## Goal

This project is a laboratory for the library react-redux. You will find in this repository a compilation of my tries, tests and experimentation with `React-Redux` and more particularly with the hook of redux.
Feel free to try the repository.

Everything work fine as describe below.

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Experiences](#experiences)
- [Documentation](#documentation)
- [Organization](#organization)
- [Development](#development)
- [Running](#running)
- [Commands](#commands)

## Experiences

- **store1**: Testing the old connect API
- **store2**: Testing the hooks with the slice of the toolkit
- **store3**: Testing the hooks with multiple slice
- **store4**: Using closure for getting a value
- **store5**: Creating a selector using reselect for memoizing state
- **store6**: Memoizing dispatch function
- **store7**: Make use of UseStore for replacing the reducers
- **store8**: Checking how the children affect the re-rendering of the parent
- **store9**: Creating a slice with async call (middleware)
- **store10**: Testing how to use entity with createEntityAdapter

## Documentation
#### Code documentation

The jsdoc can be generated locally with the following command :

```
npm run build:docs
```

## Organization
#### Organization of the global folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| out           | The documentation generated by jsdoc                    |
| public        | Regroup the images and public files                     |
| src           | Regroup the source code                                 |

#### Organization of the src folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| components    | Regroup the components used inside the pages            |
| constants     | Regroup the exported constants                          |
| redux         | Regroup the files related to react reduce (store)       |
| pages         | Regroup the components representing the pages           |
| services      | Regroup the services of the app                         |
| styles        | Regroup the scss files                                  |


## Development
#### Packages

- **react-app-rewired**: Allow us to rewrite the config of React without ejecting the app
- **customize-cra**: Allow us to rewrite the config of webpack and create module alias
- **eslint**: For linting the code with EsLint
- **@babel/eslint-parser**: Changing the parser for having access to eslint in babel
- **eslint-config-airbnb**: For having the set of rules airbnb for eslint
- **eslint-plugin-import**: For managing the alias import with eslint
- **eslint-plugin-react**: For managing the react rules
- **prettier**: For formating the style of the code
- **eslint-plugin-prettier**: For using the prettier package with esLint
- **sass**: For using the SASS css preprocessor (scss)
- **jsdoc**: For managing the dev documentation of the project
- **react-router-dom**: For managing the router and the path to the differents pages
- **react-helmet**: For managing the meta of the differents page
- **redux**: One of the peer dependencies of react-redux
- **react-redux**: For using global reducer and the hook
- **@reduxjs/toolkit**: For creating the slice of my store

## Running

For running the API, a single command is needed.

```
npm run start
```

## Commands

- **npm run start**: Run the linter and then the project
- **npm run build**: Build the project
- **npm run test**: Run the test of the project
- **npm run eject**: Eject the application (sometimes necessary)
- **npm run linter:fix**: Run the linter and fix the errors
- **npm run build:docs**: Build the documentation from the comments in the code
- **npm run check-update**: Check if the package are up to date (for now, everything is except the testing and webvital)
