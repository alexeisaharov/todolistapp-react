# Sample React App
This is a simple TodoList application sample using React and based on this tutorial:
https://github.com/Microsoft/vscode-react-sample

This repository has next folders:
- basic:
    sample of app implemented on pure React
- basic-create-react-app:
    sample of app implemented on create-react-app
- flux: 
    sample of app implemented on React with Flux
- redux:
    sample of app implemented on React with Redux
- reflux:
    sample of app implemented on React with Reflux

## Run basic, flux, reflux or redux app

You can run application by using webpack dev server

In terminal, go to folder with type of app that you want to run and investigate
(basic, flux, reflux or redux)

Then execute next commands:

```console
npm install
npm run dev
```

Or you can just build it into public folder
```console
npm run build
```

## Run basic-create-react-app app
If you want to run app based on create-react-app, follow next instructions:

Go to basic-create-react-app folder

Then execute next commands:

```console
npm install
npm start
```

## Open app in browser

Then go to `http://localhost:3000` in browser

You will see simple TodoList application

Data stores in memory

These projects use identical packages, except of flow packages (flux, reflux and redux accordingly)

Enjoy!
