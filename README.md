# Mobile Item App

A simple **Next.js 16 + TailwindCSS** application for managing mobile items.  
This project includes a landing page, item listing, item details, and a mock login system. Users can optionally add new items to the database when logged in.

---

## 📝 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Setup & Installation](#setup--installation)
- [Routes Summary](#routes-summary)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [License](#license)

---

## 🚀 Project Overview

This project demonstrates:

- Public landing page with **7 sections** (Hero, Features, About, Services, Popular Items, Testimonials, Contact)
- Mock login authentication with hardcoded email & password
- Item listing page fetching data from **MongoDB**
- Item details page showing full information about a mobile
- Optional protected page for adding new items
- Use of **Next.js App Router**, TailwindCSS, MongoDB, and React Components

---

## ✅ Features

### Landing Page
- Hero Section
- Features Section
- About Section
- Services Section
- Popular Items Section
- Testimonials Section
- Contact Form Section

### Authentication
- Mock login using hardcoded credentials
- Login state stored in cookies
- Redirects to protected pages if user is not logged in
- Optional social login (Google) using NextAuth.js

### Item Management
- **Items Page**: Shows all mobile items from MongoDB
- **Item Card**: Displays mobile image, name, category, price, and short description
- **Item Details Page**: Shows full details of a selected mobile
- **Add Item Page** (protected): Form to add new mobile item to the database

---

## ⚡ Setup & Installation

1. **Clone the repository**

```bash
git clone (https://github.com/badsha103868/mobile-item-app-next-js.git)
cd mobile-app

2. Install dependencies
    npm install

3.Create .env file in root folder
4.Run the development server
  npm run dev