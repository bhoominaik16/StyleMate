# StyleMate — AI-Powered Personal Outfit Planner

A full-stack starter application built with React + Vite + Tailwind CSS v4, Node.js + Express, MongoDB, Gemini and Cloudinary.

## Features included
- JWT registration, login and profile retrieval
- Upload clothing images to Cloudinary
- Optional Gemini image analysis to suggest clothing metadata
- Digital wardrobe CRUD
- Gemini-powered outfit generation using only the user's wardrobe item IDs
- Save outfits and mark/unmark favorites
- Weekly outfit planner
- Wardrobe-aware AI styling assistant
- Basic responsive dashboard UI

## Requirements
- Node.js 20+
- MongoDB Atlas or local MongoDB
- Gemini API key
- Cloudinary account

## Setup

### 1. Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Fill in `MONGO_URI`, `JWT_SECRET`, `GEMINI_API_KEY`, and Cloudinary credentials in `backend/.env`.

### 2. Frontend
In another terminal:
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```
Open the Vite URL shown in the terminal (normally http://localhost:5173).

## Notes
- Gemini is called from the backend only. Never put API keys in frontend environment variables.
- Image upload requires Cloudinary credentials.
- Clothing analysis is optional: if Gemini is not configured, users can enter clothing details manually.
- Outfit generation and the assistant require a working Gemini API key.
- The app is an MVP starter, not a production-audited deployment. Before production, add rate limiting, stricter validation, logging, CSRF strategy if using cookies, account deletion, image moderation/limits, and comprehensive tests.
- AI output can be inaccurate. Users should review automatically detected clothing attributes.
