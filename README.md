# Swiggy Clone

## Overview
This is a **Swiggy Clone**, a food delivery web application built using **React** and **Redux Toolkit**. The project aims to replicate core functionalities of Swiggy, allowing users to browse restaurants, view menu items, and add them to a cart for ordering.

## Features

🍽️ Browse restaurants and their menus

🔍 Search functionality to find restaurants and dishes

⭐ Filter top-rated restaurants

🛒 Add/remove items from the cart

🌐 Real-time data fetching using APIs

⚡ Lazy loading for better performance

📶 Online/offline status detection

🏪 Grocery section (for future expansion)

## Tech Stack
- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **Build Tool:** Parcel
- **Routing:** React Router DOM
- **State Management:** Redux Toolkit

## NOTE : 
- To see live data in the application, make sure to enable the CORS extension in your browser.

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

![swiggy_clone](https://github.com/user-attachments/assets/8018c46b-c023-4219-bf4c-35b45a26e3a4)
![swigyy_clone2](https://github.com/user-attachments/assets/734cc5a2-add7-454a-bebc-22a660686913)



## License
This project is licensed under the MIT License.

## Author
**Taniya Kamboj**

