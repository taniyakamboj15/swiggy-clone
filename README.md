# Swiggy Clone

## Overview
This is a **Swiggy Clone**, a food delivery web application built using **React** and **Redux Toolkit**. The project aims to replicate core functionalities of Swiggy, allowing users to browse restaurants, view menu items, and add them to a cart for ordering.

## Features
- **React Router** for seamless navigation
- **Redux Toolkit** for state management
- **Lazy Loading** for improved performance
- **Custom Hooks** for online status check & restaurant data fetching
- **Shimmer UI** for loading screens
- **Tailwind CSS** for styling

## Tech Stack
- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **Build Tool:** Parcel
- **Routing:** React Router DOM
- **State Management:** Redux Toolkit

## Project Structure
```
├── app.js
├── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── .postcssrc
└── src/
    ├── index.js
    ├── Components/
    │   ├── About.js
    │   ├── Body.js
    │   ├── Contact.js
    │   ├── Error.js
    │   ├── Grocery.js
    │   ├── Header.js
    │   ├── Itemlist.js
    │   ├── RestCard.js
    │   ├── Restaurantcategories.js
    │   ├── Shimmer.js
    │   ├── UserClass.js
    │   ├── WhatMind.js
    │   ├── cart.js
    │   ├── restaurants.js
    │   └── user.js
    ├── constants/
    │   └── imageAdd.js
    └── utils/
        ├── UserContext.js
        ├── appStore.js
        ├── cartslice.js
        ├── constant.js
        ├── rest.js
        ├── useOnlineStatus.js
        └── useRestaurent.js
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/taniyakamboj15/swiggy-clone.git
   cd swiggy-clone
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open [http://localhost:1234](http://localhost:1234) in your browser.

## Scripts
- **Start Development Server:** `npm start`
- **Build Production Files:** `npm run build`

## Screenshots
(Add screenshots here)

## License
This project is licensed under the MIT License.

## Author
**Taniya Kamboj**

