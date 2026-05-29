# ♊ NeuroShin AI - Homepage Project

Dự án này là trang chủ chính thức của **NeuroShin AI**, một nền tảng giải pháp AI tiên tiến dành cho thị trường Nhật Bản. Website được thiết kế hiện đại, tối ưu trải nghiệm người dùng và tích hợp nhiều tính năng tương tác như Chatbot Demo.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

### Frontend:
- **Framework:** React 18 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4.0
- **Animations:** Framer Motion (Motion)
- **Icons:** Lucide React
- **Slider:** React Slick

### Backend (Nếu có):
- **Framework:** FastAPI (Python)
- **Server:** Uvicorn

---

## 🚀 Hướng dẫn chạy dự án

### 1. Yêu cầu hệ thống
- **Node.js:** Phiên bản 18.x trở lên.
- **Python:** Phiên bản 3.9 trở lên (để chạy backend).
- **Trình quản lý gói:** npm hoặc yarn.

### 2. Cách chạy nhanh bằng Script (.bat)
Dự án đã chuẩn bị sẵn các file script để bạn khởi động nhanh trên Windows:

- **Chạy Frontend:** Click đúp vào file `run_frontend.bat`. 
  - Script sẽ tự động chạy `npm install` nếu chưa có thư mục `node_modules`.
  - Sau đó khởi động server phát triển tại: `http://localhost:4000`.

- **Chạy Backend:** Click đúp vào file `run_backend.bat`.
  - Script sẽ tự động tạo môi trường ảo (venv), cài đặt thư viện từ `requirements.txt`.
  - Khởi động server FastAPI tại: `http://localhost:8000`.
  - *Lưu ý: Đảm bảo bạn đã có mã nguồn trong thư mục `backend`.*

### 3. Cách chạy thủ công bằng lệnh (Manual)

#### Frontend:
```bash
cd frontend
npm install
npm run dev
```

#### Backend:
```bash
cd backend
python -m venv venv
# Windows
.\venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

## 📂 Cấu trúc thư mục chính

```text
Homepage1/
├── frontend/             # Mã nguồn React/Vite
│   ├── src/              # Source code chính
│   │   ├── components/   # Các thành phần giao diện (Navbar, Hero, etc.)
│   │   └── data.ts       # Dữ liệu tĩnh (text tiếng Nhật, cấu hình)
├── docs/                 # Tài liệu thiết kế (MD, DOCX)
├── skills/               # Các kỹ năng (skills) dành cho Gemini CLI
├── run_frontend.bat      # Script chạy nhanh frontend
└── run_backend.bat       # Script chạy nhanh backend
```

---

## 🧩 Các kỹ năng hỗ trợ (Gemini CLI Skills)

Dự án tích hợp các skill giúp Agent hỗ trợ phát triển nhanh hơn:
- **gen-ui-design**: Tạo bản thiết kế UI ra file Markdown và Word.
- **gen-ui-homepage**: Tự động generate mã nguồn cho trang chủ dựa trên bản thiết kế chuẩn.

---

## 📝 Lưu ý
- Nội dung website hiện đang sử dụng **tiếng Nhật 100%** để phục vụ thị trường mục tiêu.
- Mọi thay đổi về dữ liệu hiển thị nên được thực hiện trong file `frontend/src/data.ts`.

---
*Phát triển bởi NeuroShin AI Team.*
