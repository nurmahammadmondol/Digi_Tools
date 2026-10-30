# 🎯 Digi-Tools — Digital Tools Buying Website

A modern and responsive digital tools buying website built with React.js, Tailwind CSS, and DaisyUI. Users can explore digital products, view product details, add products to their cart, manage selected items, and complete the checkout process through a simple and interactive interface.

## 🌐 Live Website

🔗 **Live Demo:** [Visit Digi-Tools](https://digi-tools-created-robi.surge.sh)

## 📖 About The Project

Digi-Tools is a digital product marketplace designed to provide users with an easy and user-friendly shopping experience. The website displays digital products in organized cards with pricing information, product descriptions, tags, and feature lists.

Users can switch between the Products and Cart sections, add products to their cart, remove selected items, and clear their cart through the checkout button. React-Toastify provides notifications for important shopping actions.

The project focuses on responsive design, reusable React components, and interactive user experiences.

## ✨ Key Features

- 🛍️ **Digital Product Showcase:** Browse digital tools with descriptions, pricing, product tags, icons, and feature lists.
- 🛒 **Interactive Shopping Cart:** Add products, view selected items, track the cart count, and remove individual products.
- 💳 **Checkout Functionality:** Clear all selected products with the Proceed to Checkout button.
- 🔔 **Toast Notifications:** Get instant feedback when adding products, removing items, and completing checkout.
- 📱 **Responsive Design:** Enjoy a consistent shopping experience across desktop, tablet, and mobile devices.
- 🎨 **Modern UI:** Clean layouts and reusable components built with Tailwind CSS and DaisyUI.
- 📊 **Informative Sections:** Includes a banner, statistics, steps, pricing, and footer sections.
- 🔄 **Dynamic Section Switching:** Switch between Products and Cart without navigating away from the page.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building interactive user interfaces |
| JavaScript (ES6+) | Application logic and functionality |
| Tailwind CSS | Utility-first styling and responsive layouts |
| DaisyUI | Prebuilt UI components and theme support |
| React-Toastify | Toast notifications for user actions |
| JSON | Storing and managing digital product data |
| Vite | Development server and production builds |
| Git & GitHub | Version control and source code management |
| Surge | Deploying the website |

## 🛒 Shopping Cart Functionality

The shopping cart provides the following features:

- Add digital products to the cart.
- Display the total number of selected products in the navbar.
- View selected products in a dedicated cart section.
- Display each cart item's name, icon, and price.
- Remove individual products from the cart.
- Calculate and display the total price of selected products.
- Clear the entire cart using the Proceed to Checkout button.
- Display toast notifications for cart actions.

## 📂 Project Structure

```text
Digi-Tools/
├── public/
│   └── data/
│       └── tools.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── Stats.jsx
│   │   ├── Products.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   ├── Steps.jsx
│   │   ├── Pricing.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*Note: The structure above is an example. Your actual project structure may differ.*

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd Digi-Tools
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the website.

### 5. Create a Production Build

```bash
npm run build
```

The optimized production files will be generated in the `dist` directory.

## 📊 Product Data Structure

Each digital product contains information such as:

```json
{
  "id": 1,
  "name": "Resume Builder Pro",
  "description": "Create professional resumes with customizable templates.",
  "price": 19,
  "period": "one-time",
  "tag": "Popular",
  "tagType": "popular",
  "features": [
    "100+ professional templates",
    "ATS-friendly resume design",
    "Export to PDF"
  ],
  "icon": "FileText"
}
```

*This is an example product object. Your actual product data may differ.*

## 🎯 Project Goals

This project was developed to practice and demonstrate:

- React component-based development.
- Managing application state with React.
- Rendering dynamic content from JSON data.
- Implementing shopping cart functionality.
- Building responsive layouts with Tailwind CSS and DaisyUI.
- Integrating third-party packages such as React-Toastify.
- Using Git and GitHub for version control.
- Deploying a React application using Surge.

## 👨‍💻 Author

**Nur Mahammad Mondol Robiul**

Junior Frontend Developer | React.js Developer

📍 Rangpur, Bangladesh

🌐 **Portfolio:** [Visit My Portfolio](https://nurmahammadmondol.netlify.app)

---

⭐ If you find this project interesting, feel free to explore the repository and share your feedback.

**Built with ❤️ using React.js and modern frontend technologies.**