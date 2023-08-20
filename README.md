# Notesy App - React Getting Started

React notes app (notsey) getting started.

![](https://raw.githubusercontent.com/ZakiMohammed/react-notsey-app/master/banner.png)

___

Check out the CodeOmelet blog post for this project.

Link: https://codeomelet.com/posts/react-journey-part-1-getting-started

## Folders:

```
notsey
|-- react-1-init
|-- react-2-crud
|-- react-3-routes
|-- react-4-api
|-- react-5-context
|-- README.md
```

1. React Init: Initial project skeleton and init commands.
2. React CRUD: List, add and remove operations.
3. React Routes: Configuring routes and navigation.
4. React API: Getting data from API.
5. React Context: Component communications.

## Run Application
```
npm run dev
```

## Initial Setup

```
npm create vite@latest
# project name: notesy-app
# framework: react
# variant: JavaScript + SWC

cd notesy-app
npm i
npm run dev
```

## Add Dependencies

```
npm i bootstrap
npm i bootswatch

npm i uuid

npm i react-icons
npm i react-router-dom
npm i axios
```

## JSON Server

Install `json-server` globally:

```
npm install -g json-server
```

Add npm script in package.json file:

```
"scripts": {
  "server": "json-server server/db.json --config server/json-server.json"
}
```

Read about json-server from here https://www.npmjs.com/package/json-server.