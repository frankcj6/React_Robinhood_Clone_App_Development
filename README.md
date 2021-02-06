# React Robinhood Clone App Development
Created by Frank Jiang (Credit to 'CleverProgrammer')

![image](Demo.gif)

 ### Table of Contents
   - [Getting Started](#Getting-Started)
   - [Description](#Description)
   - [Development Tools](#Development-Tools)
   - [file structure](#file-structure)
   - [Resources](#Resources)
 ---
 
 ### Getting Started
 Run the following command to start the application
 
  ```console
 npm start
```

### Description
This web app is the clone of the Robinhood App. Robinhood is a trading App that supports commission-free trades of stocks and exchange-traded funds. This project is using React+Finnhub+Ruby as the development stack. 

### Development Tools
We are using React+ Finnhub +Ruby as the development tool. 

For React, start the React App by using the following command:

```console
npx create-react-app robinhood-clone
```

We are using the 'VS Code ES7 React/Redux/React-Native/JS snippets' for JS function development. The real time trading data are pulled from Finnhub API. Finnhub is an open-source Financial API platform. The API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs. This is 1 of the most comprehensive financial API available on the market. At the same time, the front-end interface are edit by CSS and HTML. 

### File Structure
    .
    | --- public                                 
    | --- src                               
    |     |--- .idea
    |	  |--- .vs
    |     |--- App.css
    |     |--- App.js
    |     |--- App.test.js
    |     |--- Article.js
    |     |--- Header.css
    |     |--- Header.js
    |     |--- LineGraph.js
    |     |--- Newsfeed.css
    |     |--- Newsfeed.js
    |
    | --- eslintcache                                 
    | --- Demo.gif                    
    | --- Package-lock.json                 
    | --- Package.json
    | --- Main_App.py                           
    | --- README.md  


###  Reference

https://finnhub.io/docs/api/introduction
https://github.com/CleverProgrammers/robinhood-clone
https://reactjs.org/docs/create-a-new-react-app.html
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets&ssr=false#overview

