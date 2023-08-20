# FY24 Aspire Training: React

React notes app for FY24 aspire training program.

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
npm i react-icons
npm i uuid
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