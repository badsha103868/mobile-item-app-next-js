# Mobile Item App

## 📌 Short Project Description

**Mobile Item App** is a simple full-stack web application where users can browse mobile products, view detailed information, and add new items using a mock login system.
The project is built using **Next.js App Router**, and product data is managed through **MongoDB / JSON-based APIs**.

---

## ⚙️ Setup & Installation Instructions

### 1️⃣ Clone the Repository

```bash
git clone <https://github.com/badsha103868/mobile-item-app-next-js.git>
cd mobile-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the project root and add:

```env
DB_NAME=
MONGODB_URI="mongodb+srv://<db user>:<db password>@portfolio-cluster1.ea8n2bl.mongodb.net/?appName=portfolio-cluster1"
```

### 4️⃣ Run the Project

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🛣️ Application Routes Overview

Below is a summary of all the available routes in the application, along with their purpose and access level:

| 🌐 Route Path | 📄 Page Name | 📝 Description                                                         | 🔐 Access            |
| ------------- | ------------ | ---------------------------------------------------------------------- | -------------------- |

| `/`           | Home         | Landing page containing hero, features, services, and contact sections | Public               |

| `/login`      | Login        | Mock login page for user 

authentication                                | Public               |
| `/items`      | Items        | Displays a list of all available mobile 

products                       | Public               |
| `/items/[id]` | Item Details | Shows detailed information of a selected mobile

 item                   | Public               |
| `/add-item`   | Add Item     | Form to add a new mobile product to the database                       | Logged-in Users Only |

> 🔒 **Note:** The `/add-item` route is protected and accessible only after successful login.


---

## ✅ List of Implemented Features

* Landing page with multiple sections
* Mock login system (email & password based)
* Conditional navbar (Login / Logout)
* Mobile items listing from database / JSON
* Dynamic item details page
* Protected add item page
* MongoDB database integration
* Fully responsive UI using Tailwind CSS

---

## 🧠 Brief Explanation of Features

### 🔐 Mock Authentication

* Users can log in using a predefined email and password
* After login, the navbar displays a **Logout** button
* On logout, the user returns to the public state

### 📱 Item Listing

* All mobile items are displayed on the `/items` page
* Data is fetched from MongoDB or a JSON-based API

### 📄 Item Details

* Uses dynamic routing `/items/[id]`
* Displays mobile image, name, price, category, and description

### ➕ Add Item

* Only logged-in users can add new mobile items
* Added items are saved directly to the MongoDB database

---

## 🛠 Technologies Used

* **Next.js 15/16** (App Router)
* **React 19**
* **MongoDB**
* **Express.js API / JSON API** (for data fetching and management)
* **Tailwind CSS**
* **NextAuth.js** (optional / future implementation)
* **React Toastify** (notifications)

---

## 📄 License

This project is created for educational and practice purposes.
