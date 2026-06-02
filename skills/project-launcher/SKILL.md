---
name: project-launcher
description: Tự động hóa quy trình cài đặt môi trường (npm install) và khởi chạy dự án (frontend/backend). Sử dụng khi người dùng muốn bắt đầu làm việc trên dự án nhanh chóng.
---

# Trình Khởi Chạy Dự Án (NeuroShin AI Launcher)

Kỹ năng này giúp tinh gọn quy trình bắt đầu công việc bằng cách tự động kiểm tra dependencies và khởi chạy các server cần thiết.

## Quy trình thực hiện

1. **Setup Môi trường**: Chạy `node skills/project-launcher/scripts/setup_and_run.cjs` để kiểm tra và cài đặt `node_modules` cho frontend.
2. **Khởi chạy Frontend**: 
   - Chạy lệnh `npm run dev` trong thư mục `frontend/`.
   - **Lưu ý**: Phải sử dụng `is_background: true` để server chạy ngầm, cho phép tiếp tục sử dụng CLI.
3. **Khởi chạy Backend (Nếu có)**:
   - Nếu phát hiện thư mục `backend/`, thực hiện kích hoạt `venv` và khởi chạy server FastAPI (cổng 8000).
4. **Xác nhận**: Thông báo cho người dùng các địa chỉ URL (ví dụ: http://localhost:4000) sau khi khởi chạy thành công.

## Lệnh quan trọng

- **Frontend**: `npm run dev` (Cổng mặc định: 4000)
- **Backend**: `uvicorn app.main:app --reload` (Cổng mặc định: 8000)

## Ví dụ sử dụng

**Người dùng:** "Chạy dự án cho tôi" hoặc "Setup và chạy project"

**Hành động:**
1. Chạy script setup để đảm bảo mọi thứ đã được cài đặt.
2. Khởi chạy frontend server ở chế độ background.
3. Thông báo: "Dự án đã sẵn sàng tại http://localhost:4000".

## Chi tiết triển khai

- **Script**: `skills/project-launcher/scripts/setup_and_run.cjs`
- **Frontend Path**: `frontend/`
- **Background Support**: Yêu cầu sử dụng `is_background` cho các lệnh server.
