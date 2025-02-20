# 📌 Project Overview
This project is built using **Laravel** for the backend and **React (via Inertia.js)** for the frontend. It includes an API-driven architecture and features an **Excel bulk upload functionality**, where data is processed in batches using Laravel Jobs for efficient handling.

---

## 🚀 Tech Stack
- **Backend:** Laravel (API-based)
- **Frontend:** React.js with Inertia.js
- **Database:** MySQL/PostgreSQL (as per project requirement)
- **Queue Processing:** Laravel Jobs (for batch processing)
- **File Handling:** Laravel Excel

---

## 📂 Installation & Setup
Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/zuhaib8888/villas-pk.git
cd villas-pk
```

### 2️⃣ Install Backend Dependencies
```sh
composer install
```

### 3️⃣ Set Up Environment File
```sh
cp .env.example .env
```
Edit `.env` and configure your database & queue settings.

### 4️⃣ Generate App Key & Migrate Database
```sh
php artisan key:generate
php artisan migrate --seed
```

### 5️⃣ Install Frontend Dependencies
```sh
npm install
```

### 6️⃣ Build Frontend
```sh
npm run build
```

### 7️⃣ Run the Development Server
```sh
php artisan serve
```

### 8️⃣ Start Queue Worker
To process Excel uploads in batches:
```sh
php artisan queue:work
```

---

## 🛠️ Functionality
### ✅ Laravel API with React Frontend (Inertia.js)
- Laravel serves as the API provider.
- React is used as the frontend with Inertia.js for seamless routing.
- Authentication via Laravel Sanctum.

### ✅ Excel Bulk Upload with Batch Processing
- Users can upload an Excel file.
- The system processes data in **batches using Laravel Jobs**.
- Uses `maatwebsite/excel` package for handling Excel files.
- Background processing improves performance & prevents timeouts.

---

## 🔗 API Endpoints
| Method | Endpoint             | Description                        |
|--------|----------------------|------------------------------------|
| `POST` | `/api/upload`        | Upload an Excel file              |
| `GET`  | `/api/progress/{id}` | Check upload progress             |

---

## 📌 Notes
- Ensure the **queue worker** is running to process uploads.
- If using **Horizon**, monitor jobs with:
  ```sh
  php artisan horizon
  ```

---

## 📜 License
This project is licensed under the **MIT License**.

