# Pharmacy Management SPA
Single Page Application (SPA) for managing medicines inventory using React JS and ASP.NET Core Web API.

---

## Tech Stack

### Frontend
- React JS
- React Router
- CSS
- React Icons

### Backend
- ASP.NET Core Web API (.NET 10)
- C#
- JSON file storage

---

## Features Implemented

### Medicine Dashboard
- Display all medicines in tabular format
- Search medicines by name or brand
- Expiry warning indication
- Low quantity warning indication

### CRUD Operations
- Add medicine
- Edit medicine
- Delete medicine
- Get medicine by id

### Data Persistence
- Data stored in local JSON file
- Runtime add/update/delete support

---

# Business Rules

## Expiry Warning
Medicines with expiry date less than 30 days are highlighted with red background.

## Low Stock Warning
Medicines with quantity less than 10 are highlighted with yellow background.

---

## Run Backend

cd pharmacy-backend
dotnet run

## Run Frontend

cd pharmacy-frontend
npm install
npm start

---

# Project Structure
## Frontend

```txt
src/app
    ├── api/
    │    └── medicineService.js
    │
    ├── pages/
    │    ├── Dashboard.jsx
    │    ├── AddMedicine.jsx
    │    └── EditMedicine.jsx
    │
    ├── layout/
    │    ├── Header.jsx
    │    ├── Sidebar.jsx
    │    └── Home.jsx
    |
    │├── components/
    │    ├── Header.jsx
    │    └── Sidebar.jsx
    |
    ├── styles/
    │    ├── Dashboard.css
    │    └── AddMedicine.css
    │
    └── app/routes/
        └── AppRoutes.jsx