This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# demo
Project was built in `Java Script` with `React` library.

You can see it here: https://pick-the-pics.herokuapp.com/

# usage
User can:
- create folders
- search for pictures
- mark photos as picked
- choose folder to assign those pictures to it

Configuration of **folders + pictures** is being saved in `Local Storage`,
so when user reloads the page, his/her configuration will be **remembered**.

# dependencies
application *pic-the-pics* was created as a simple React app. 
Dependencies:

```
    "@reduxjs/toolkit": "^1.6.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.4",
    "react-scripts": "4.0.3",
    "react-toastify": "^8.0.3"
```

# Unsplash API
App communicates with **Unsplash API** https://unsplash.com/documentation.

**Secret_key** is **required** and available after registration here: https://unsplash.com/developers

See file `api/unsplashApiSlice.js`. 
Here you can see the usage of environmental variable named `API_KEY`, 
under which the secret key should be saved.


# downloading and start
Repository on `GitHub` : https://github.com/elenerandarill/pick-the-pics

After downloading it open the project directory and **install** dependencies with:

`npm install`

which means: *Install the dependencies in the local `node_modules` folder.*
By default, npm install will install all modules 
listed as dependencies in `package.json`.

Next you can run:

`yarn start` or `npm start`

which will start the project on your machine here: 

# contribution
Created by elener. 