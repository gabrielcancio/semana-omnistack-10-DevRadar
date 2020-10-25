<h1 align="center">
  <img src="./.github/logo.svg">
</h1>

<h1 align="center">
  <img src="./.github/devradar.png" />
</h1>

## :computer: Project
**DevRadar** is a project developed in 10th edition of **Semana OmniStack(OmmniStack Week)** promoted by **[Rocketseat](https://github.com/Rocketseat)**. The purpose of this project is make a platform to help developers to find near developers who work with same technologies.

---

## :rocket: Technologies
### **Back-end:**
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Socket.io](https://socket.io/)
- [Axios](https://github.com/axios/axios)
- [Nodemon](https://nodemon.io/)

### **Front-end:**
- [Javascript](https://developer.mozilla.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [React-Router-DOM](https://reactrouter.com/web/guides/quick-start)
- [Axios](https://github.com/axios/axios)
- [Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=pt&utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_436364851126-ADGP_Hybrid%20%7C%20AW%20SEM%20%7C%20BKWS%20~%20Places%20%7C%20EXA%20%7C%20Google%20Maps%20Geolocation%20API-KWID_43700044401406153-aud-595609270041%3Akwd-300650646226-userloc_9074281&utm_term=KW_google%20geolocation%20api-ST_google%20geolocation%20api)

### **Mobile:**
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Expo](https://expo.io/)
- [Expo Location](https://docs.expo.io/versions/latest/sdk/location/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [Expo Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)
- [Axios](https://github.com/axios/axios)
- [Socket.io Client](https://socket.io/docs/client-api/)

### **Other used softwares :**
- [Insomnia](https://insomnia.rest/download)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [VScode](https://code.visualstudio.com/)

---

## 🔖 Layout
You can access the layout of project in .scketch format [here](.github/DevRadar.sketc).

---

## :gear: Installing
1. Make a clone of this repository with command: 
```bash
$ git clone https://github.com/gabrielcancio/semana-omnistack-10-DevRadar.git

```

2. On backend direcotory run the command(*You need [yarn](https://yarnpkg.com/getting-started/install) or [npm](https://www.npmjs.com/get-npm) installed*): 
```bash
$ yarn
```
Or
```bash
$ npm install 
```
3. On frontend direcotory run the command: 
```bash
$ yarn
```
Or
```bash
$ npm install
```
4. On backend direcotory run the command:
```bash
$ yarn
```
Or
```bash
$ npm install

```
5. On backend directory, you must rename the .env_sample file to .env and add a string connection to the mongoDB string connection(If you don't have any database on MongoDB watch this [video](https://youtu.be/rPqRyYJmx2g)) :
```bash
# Adding a string conenction on .env file
DB_MONGO_URL_CONNECTION=PutHerYourStringConnection
```

---

## :zap: Running
1. You can run the API (backend application) on backend directory and runnig the follow command:
```bash
$ yarn dev
```
Or
```bash
$ npm dev
``` 

2. For the mobile and frontend applications, on the specific directory(mobile or frontend) run the command:
```bash
$ yarn start
```
Or
```bash
$ npm start
``` 

*PS: You need to change the baseURL to IP of your computer on path mobile/src/services/api.ts inside of api constant, on baseURL key. Like this:*

```javascript
// Replace "yourIP" to IP of your PC
const api = axios.create({
    baseURL: `http://yourIP:3333`
});
```
---
Developed with :purple_heart: by Gabriel Cancio!