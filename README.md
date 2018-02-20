# Sample React App
This is a simple TodoList application sample using React and based on this tutorial:
https://github.com/Microsoft/vscode-react-sample

This repository has next folders:
- basic
    This is a sample of app implemented on pure React
- flux
    This is a sample of app implemented on React with Flux
- redux
    This is a sample of app implemented on React with Redux
- reflux
    This is a sample of app implemented on React with Reflux

#Run app
You can run application b yusing webpack dev server
In terminal, go to folder with type of app that you want to run and investigate
(basic, flux, reflux or redux)

Than execute next commands:

```console
npm install
npm run dev
```

Or you can just build it into public folder
```console
npm run build
```

Then go to `http://localhost:3000` in browser
You will see simple TodoList application

Data stores in memory

This projects use identical packages, except of flow packages (flux, reflux and redux accordingly)

Enjoy!