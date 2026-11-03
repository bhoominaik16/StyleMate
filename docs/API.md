# StyleMate API quick reference

Base URL: `http://localhost:5000/api`

Protected endpoints require `Authorization: Bearer <token>`.

## Authentication
- `POST /auth/register` — `{ name, email, password }`
- `POST /auth/login` — `{ email, password }`
- `GET /auth/profile`
- `PUT /auth/profile` — `{ name?, preferences? }`

## Wardrobe
- `GET /wardrobe?category=Top&search=white`
- `POST /wardrobe/analyze` — multipart form field `image`
- `POST /wardrobe` — multipart form field `image` plus clothing fields
- `GET /wardrobe/:id`
- `PUT /wardrobe/:id` — JSON clothing fields
- `DELETE /wardrobe/:id`

## Outfits
- `POST /outfits/generate` — `{ occasion: "College" }`
- `GET /outfits`
- `GET /outfits/:id`
- `POST /outfits/:id/favorite` — toggles favorite
- `DELETE /outfits/:id`
- `GET /favorites`

## Planner
- `GET /planner?from=YYYY-MM-DD&to=YYYY-MM-DD`
- `POST /planner` — `{ date, outfitId, occasion?, notes? }`
- `PUT /planner/:id`
- `DELETE /planner/:id`

## Assistant
- `POST /assistant/chat` — `{ message }`
