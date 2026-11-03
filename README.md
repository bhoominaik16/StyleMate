# 👗 StyleMate – AI-Powered Personal Outfit Planner

**StyleMate** is an AI-powered personal outfit planning application that helps users organize their wardrobe, discover outfit combinations, and plan what to wear for different occasions.

By combining image recognition capabilities with Generative AI, StyleMate analyzes uploaded clothing items and generates personalized outfit recommendations based on clothing type, color, occasion, and user preferences.

No more spending time wondering what to wear!

---

## ✨ Key Features

### 1. 👚 Digital Wardrobe Management
- Upload pictures of your clothing items.
- Organize clothes into categories such as tops, bottoms, dresses, footwear, and accessories.
- Store clothing details and images securely.
- View, update, and delete wardrobe items.
- Use AI to automatically analyze clothing images and identify their attributes.

### 2. 🤖 AI-Powered Outfit Recommendations
- Generate outfit combinations using your existing wardrobe.
- Get recommendations based on clothing colors, categories, and styles.
- Receive personalized suggestions without purchasing new clothes.
- Explore different combinations of available clothing items.

### 3. 🎉 Occasion-Based Styling
Get outfit recommendations for different occasions, including:
- Casual outings
- College and office
- Parties
- Weddings and celebrations
- Formal events
- Travel and vacations

### 4. 📅 Weekly Outfit Planner
- Generate outfit plans for an entire week.
- Assign outfits to specific days.
- Organize your weekly wardrobe in advance.
- Reduce the daily effort of deciding what to wear.

### 5. ❤️ Favorite Outfits
- Save your favorite outfit combinations.
- Access saved recommendations whenever needed.
- Build your personal collection of preferred outfits.

### 6. 💬 AI Styling Assistant
- Interact with an AI-powered styling assistant.
- Ask questions about outfit combinations.
- Get suggestions based on your wardrobe and occasion.
- Receive quick fashion and styling guidance.

### 7. 🔐 User Authentication
- User registration and login.
- Secure password hashing.
- JWT-based authentication.
- Protected routes and user-specific wardrobe data.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| Vite | Frontend development and build tool |
| Tailwind CSS | Styling and responsive design |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| Google Gemini API | Generative AI and image analysis |
| Cloudinary | Clothing image storage |
| JWT | User authentication |
| bcrypt | Password hashing |
| Axios | Frontend API communication |
| Lucide React | Icons |

---

## 🧠 How Generative AI Is Used

StyleMate integrates the **Google Gemini API** to provide intelligent and personalized styling features.

The application uses an existing multimodal AI model instead of training a custom machine learning model.

### AI Capabilities

**1. Image-Based Clothing Analysis**

When a user uploads a clothing image, Gemini analyzes the image and identifies details such as:
- Clothing category
- Dominant colors
- Clothing type
- Style and appearance
- Other relevant attributes

**2. Intelligent Outfit Generation**

Gemini receives wardrobe information and user preferences to generate suitable outfit combinations.

**3. Context-Aware Recommendations**

The AI considers the occasion and available wardrobe items when suggesting outfits.

**4. AI Styling Assistant**

Users can ask styling-related questions and receive responses generated using Gemini.

### Generative AI Concepts Demonstrated
- Large Language Model (LLM) integration
- Multimodal AI
- Prompt Engineering
- Context-aware generation
- Structured JSON responses
- AI-powered recommendation generation

---

## 🏗️ Project Architecture

StyleMate follows a client-server architecture.

```text
                 ┌─────────────────────┐
                 │      React UI       │
                 │   (Vite + Tailwind) │
                 └──────────┬──────────┘
                            │
                       REST APIs
                            │
                 ┌──────────▼──────────┐
                 │   Express Backend   │
                 │      Node.js        │
                 └──────────┬──────────┘
                            │
             ┌──────────────┼──────────────┐
             │              │              │
       ┌─────▼─────┐  ┌─────▼─────┐  ┌────▼─────┐
       │ MongoDB   │  │ Cloudinary│  │ Gemini   │
       │ Database  │  │  Storage  │  │   API    │
       └───────────┘  └───────────┘  └──────────┘
```

### Application Workflow

1. User registers or logs into StyleMate.
2. User uploads clothing images to their digital wardrobe.
3. Images are stored using Cloudinary.
4. Gemini analyzes the uploaded clothing images.
5. Clothing information is stored in MongoDB.
6. User selects an occasion or requests outfit suggestions.
7. Backend retrieves relevant wardrobe information.
8. Gemini generates suitable outfit combinations.
9. Recommendations are displayed on the frontend.

---

## 📂 Project Structure

```text
StyleMate/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation and Setup

Follow these steps to run StyleMate locally.

### Prerequisites

Make sure you have installed:

- Node.js (LTS version)
- npm
- MongoDB Atlas account or a local MongoDB installation
- Google Gemini API key
- Cloudinary account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/StyleMate.git
```

```bash
cd StyleMate
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder and configure the following environment variables:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Replace the placeholder values with your actual credentials.

Start the backend:

```bash
npm run dev
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file if required by your frontend configuration:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

### 4. Access the Application

Open the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

The backend will typically run at:

```text
http://localhost:5000
```

---

## 🔑 API Configuration

StyleMate requires the following external services:

| Service | Purpose | Website |
|---|---|---|
| Google Gemini | AI image analysis and outfit generation | https://aistudio.google.com/ |
| Cloudinary | Image upload and storage | https://cloudinary.com/ |
| MongoDB Atlas | Cloud database | https://www.mongodb.com/atlas |

**Important:** Never upload your `.env` files, API keys, database credentials, or JWT secrets to GitHub.

---

## 🔮 Future Enhancements

The following features can be considered for future development:

- Weather-based outfit recommendations.
- Personalized styling based on user preferences.
- Color coordination and outfit matching scores.
- Travel packing assistant.
- Outfit recommendations based on current fashion trends.
- Shopping suggestions for missing wardrobe essentials.
- Virtual outfit preview and try-on functionality.
- Calendar integration for outfit scheduling.

---

## 🎯 Project Goals

StyleMate aims to make everyday outfit selection easier through Generative AI.

The project focuses on:
- Simplifying wardrobe management.
- Saving time during daily outfit selection.
- Encouraging users to reuse existing clothing.
- Providing personalized styling recommendations.
- Demonstrating practical applications of Generative AI in everyday life.

---

## 👩‍💻 Author

**Bhoomi Naik**

B.E. Information Technology

GitHub: [@bhoominaik16](https://github.com/bhoominaik16)

---

⭐ If you find StyleMate interesting, consider giving this repository a star!

**StyleMate – Your Wardrobe, Your Style, Powered by AI.**