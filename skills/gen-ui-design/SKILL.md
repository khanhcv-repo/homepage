---
name: gen-ui-design
description: Tạo bản thiết kế giao diện (UI design specification) ở định dạng Markdown và chuyển đổi sang file DOCX. Sử dụng khi được yêu cầu tạo tài liệu thiết kế UI, thông số thiết kế hoặc mô tả wireframe.
---

# Trình Tạo Thiết Kế UI (NeuroShin AI Standards)

Kỹ năng này tự động hóa quy trình tạo tài liệu thiết kế UI, đảm bảo mọi bản thiết kế mới đều tuân thủ bản sắc thương hiệu và tiêu chuẩn kỹ thuật của **NeuroShin AI**.

## Quy trình thực hiện

1. **Yêu cầu**: Xác định mục tiêu của trang HomePage và các thành phần của trang chủ NeuroShin AI để tạo tài liệu thiết kế UI dựa trên nội dung của file Basic_Requirement.txt.
2. **Tuân thủ tiêu chuẩn thiết kế (Design Standards)**:
   - **Bảng màu**: Sử dụng Primary Teal (`#25A69A`) và Accent Orange (`#FF5A36`).
   - **Thẩm mỹ**: Hiện đại, tối giản, chuyên nghiệp kiểu Nhật Bản.
   - **Asset**: Quy định hình ảnh PNG phải lưu tại `src/assets` và import trực tiếp.
3. **Tạo Markdown**: Tạo bản thông số tại `docs/` với hai phiên bản ngôn ngữ riêng biệt:
   - Tiếng Nhật: `docs/<filename>-ja.md` (Bản chuẩn cho đối tác Nhật Bản).
   - Tiếng Anh: `docs/<filename>-en.md` (Bản chuẩn quốc tế).
   - Các phần bắt buộc: Tổng quan, Mục tiêu (hướng tới thị trường Nhật), Bảng màu chi tiết, Cấu trúc Component, Tương tác (Framer Motion), và Thông số kỹ thuật.
4. **Chuyển đổi sang DOCX**: 
   - Chạy lệnh cho cả hai file:
     - `npx @thebestdev/md-to-docx docs/<filename>-ja.md -o docs/exports`
     - `npx @thebestdev/md-to-docx docs/<filename>-en.md -o docs/exports`
5. **Xác nhận**: Đảm bảo cả 4 file (2 .md, 2 .docx) đã sẵn sàng.

## Ví dụ sử dụng

**Người dùng:** "Thiết kế UI cho trang Giải pháp AI mới"

**Hành động:**
1. Nghiên cứu các giải pháp hiện có của NeuroShin.
2. Tạo `docs/solutions-page.md` sử dụng palette Teal/Orange.
3. Chạy lệnh chuyển đổi sang DOCX.
4. Thông báo kết quả cho người dùng.

## Chi tiết triển khai

- **Đường dẫn**: Markdown (`docs/`), DOCX (`docs/exports/`).
- **Công nghệ đích**: React 18, Tailwind CSS, Framer Motion, Lucide Icons.
- **Ngôn ngữ thiết kế**: Tối ưu cho hiển thị tiếng Nhật, tiếng Anh (Typography & Layout).
