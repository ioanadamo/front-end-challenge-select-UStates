# Stelect UStates

This app will allow you to search a state from all the 51 United States, also select one or multiple of them, and deselect them.

## The main functionalities are:

-By clicking on the _text input_ that has the word _'State'_, it will be provided to you a _list_ with all the _US states_.You are able to _search by the name_ of the state. _Select_ that state to be added to a list, on the left side of the searchable box and also _deselect_ this item form the select list of Us states.

-Also by clicking on the _facing-down-arrow_, the _list_ will be visible and you can also _select multiple states_ that will be added to the list on the left side of the searchable box and again by clicking on the x button the states will be eliminated from the selected states list.

-The app is allowing you to also deselect all the US states, by clicking the button _Deselect all states_.

The list of the states is being provided by the data in this API : https://www.mocky.io/v2/5d09830a3400001229d82ed1.

#3 The app structure looks like this:

```
-_src
    |-components
        |-App
        |-ButtonWithImg
        |-ButtonWithText
        |-FilterInputStates
        |-ListSelectedStates
        |-Select
        |-SelectedStates
    |-images
    |-scss
    |-services
```

Each file from the `components` folder has a `index.js` file and a `styles.scss` file (except for ButtonWithImg and ButtonWithTxt);
The folder `images` contains the images used in the app.
The folder `scss` contains variables and mixings used in the app.
The folder `services` contains the data request to the API.

## Starting

_These instructions will allow you to obtain a copy of the project on your local machine for development and testing purposes._

1. You need to install [Node 10.16.0 & npm 6.9.0](https://nodejs.org/es/download/).
2. Clone the repository: `$ https://github.com/ioanadamo/front-end-challenge-select-UStates.git`. You can also Fork the project so you'll have it on your GitHub profile.
3. Install dependencies with `$ npm install`.
4. To launch the project and see it in the browser, run `$ npm start`.

### Dependencies you will have to install:

- [node-sass 4.12.0](https://www.npmjs.com/package/node-sass)
- [prop-types 15.7.2](https://www.npmjs.com/package/prop-types)
- [react 16.8.6](https://www.npmjs.com/package/react)
- [react-dom 16.8.6](https://www.npmjs.com/package/react-dom)
- [react-scripts 3.0.1](https://www.npmjs.com/package/react-scripts)

### Development dependencies:

- [eslint-config-airbnb 17.1.0](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-prettier 4.1.0](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-import 2.16.0](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsx-a11y 6.2.1](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-prettier 3.1.0](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-react 7.12.4](https://www.npmjs.com/package/eslint-plugin-react)
- [pre-commit 1.2.2](https://www.npmjs.com/package/pre-commit)
- [prettier 1.16.4](https://www.npmjs.com/package/prettier)

## Author

- Ioana Daniela Moldovan - [ioanadamo](https://www.linkedin.com/in/ioanadamo/)
