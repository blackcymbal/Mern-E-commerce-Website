# Mern E-commerce Website

## Description

An ecommerce store built with MERN stack, and utilizes third party API's. This ecommerce store enable three main different flows or implementations:

1. Buyers browse the store by categories, products, brands, colors and price range
2. Buyers can also view the products by gird view or list view
3. Buyers can arrange the searched products from highest price to lowest or lowest to highest. Also they can arrange products alphabarically 
4. Admins manage and control the entire store components

#### Features:
- Node provides the backend environment for this application
- Express middleware is used to handle requests, routes

- Mongoose schemas to model the application data
- React for displaying UI components
- Redux to manage application's state

## Demo 
This application is deployed on Heroku. Please check it out **[*here*](https://proshopapp115.herokuapp.com/)**.
(You might have to wait for a few seconds for the heroku site to respond)

#### Screenshots 
<img width="943" alt="Screenshot 2022-04-07 at 12 25 11 PM" src="https://user-images.githubusercontent.com/79266735/162142368-dc4ceeda-eb35-4f8d-a2c9-4a31b1216590.png">
<img width="1373" alt="Screenshot 2022-04-07 at 1 22 07 PM" src="https://user-images.githubusercontent.com/79266735/162142989-2d2b250b-6689-4ef4-b038-900602aabf58.png">
<img width="1256" alt="Screenshot 2022-04-07 at 1 24 20 PM" src="https://user-images.githubusercontent.com/79266735/162143376-0cc9e1a5-36fe-49e5-82f6-311cb2268b97.png">
<img width="1293" alt="Screenshot 2022-04-07 at 1 25 21 PM" src="https://user-images.githubusercontent.com/79266735/162143575-522b4bc6-4108-4f6e-8711-ae56e13aed26.png">
<img width="1263" alt="Screenshot 2022-04-07 at 1 28 09 PM" src="https://user-images.githubusercontent.com/79266735/162144132-65b20a24-0e28-4009-9f44-bd4c76196449.png">
<img width="1275" alt="Screenshot 2022-04-07 at 1 29 18 PM" src="https://user-images.githubusercontent.com/79266735/162144463-83f6b5b4-3b08-49c2-b207-54ab60e77c16.png">
<img width="1319" alt="Screenshot 2022-04-07 at 1 29 33 PM" src="https://user-images.githubusercontent.com/79266735/162144642-a58df400-ee42-4313-b00c-2798a2ca4e26.png">
<img width="1322" alt="Screenshot 2022-04-07 at 1 29 50 PM" src="https://user-images.githubusercontent.com/79266735/162144688-1fcda9cf-b978-4d98-a053-8d874f036a92.png">

## Install 
Some basic Git commands are:

```
$ git clone https://github.com/blackcymbal/Mern-E-commerce-Website
$ cd project
$ npm install
```
## Setup 
 Create .env file that include:

  * MONGO_URI & JWT_SECRET
  * PORT 
  * NODE_ENV equals to development or production 
  * PAYPAL_CLIENT_ID

## Heroku Deployment
Create a Procfile in the root directory of your application with the following command **web: node backend/server.js**

## Simple build for production
```
$ npm run build
```
## Run the application for development
```
$ npm start
```

## Run the application for production
```
$ node backend/server.js
```

## Languages & tools
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)
* [React.js](https://reactjs.org/)
* [Redux.js](https://redux.js.org/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Multer](https://www.npmjs.com/package/multer)



