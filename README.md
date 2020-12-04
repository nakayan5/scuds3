This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## 使用した技術


・JavaScript + JQuery

・React

・Redux

・Material UI

・Firebase Authentication, Firebase Cloud Firestore, Firebase Storage, Firebase Hosting

## Create development enviroment

### Execute CRA

`npx create-react-app ec-app`

### Configure firebase

`firebase login`
`firebase init`

### Install npm packages

Install react, redux, firebase, material-ui packages

`npm install --save @material-ui/core @material-ui/icons @material-ui/styles connected-react-router firebase history react-redux react-router redux redux-actions redux-logger redux-thunk reselect`<br/>
<br/>
Could not find router reducer in state tree, it must be mounted under "router"
`npm install --save history@4.10.1`

## TypeError: Cannot read property 'split' of undefined
`let id = window.location.pathname.split('/put/edit')[1];
    if (id !== "") {
    id = id.split('/')[1]
}`<br />
