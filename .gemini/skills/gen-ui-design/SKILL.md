---
name: gen-ui-design
description: Tạo bản thiết kế giao diện (UI design specification) ở định dạng Markdown và chuyển đổi sang file DOCX. Sử dụng khi được yêu cầu tạo tài liệu thiết kế UI, thông số thiết kế hoặc mô tả wireframe.
---

# Trình Tạo Thiết Kế UI

Kỹ năng này tự động hóa quy trình tạo tài liệu thiết kế UI. Nó tạo ra một file Markdown có cấu trúc dựa trên các yêu cầu và chuyển đổi nó thành một tài liệu DOCX chuyên nghiệp.

## Quy trình thực hiện

1. **Nghiên cứu & Yêu cầu**: Thu thập các chi tiết cần thiết cho thiết kế UI (các component, bố cục, chức năng, phong cách).
2. **Tạo Markdown**: Tạo một bản thông số thiết kế UI toàn diện bằng Markdown.
   - Các phần đề xuất: Tổng quan (Overview), Mục tiêu thiết kế (Design Goals), Bố cục & Cấu trúc (Layout & Structure), Các thành phần (Components), Tương tác (Interactions), Phong cách/Chủ đề (Styling/Theming).
   - Lưu file vào thư mục `docs/<filename>.md`.
3. **Chuyển đổi sang DOCX**: Sử dụng công cụ `md-to-docx` để chuyển đổi file Markdown sang DOCX.
   - Chạy lệnh: `npx @thebestdev/md-to-docx docs/<filename>.md -o docs/exports`
4. **Xác nhận**: Xác nhận cả file `.md` và `.docx` đã hiện diện trong các thư mục tương ứng.

## Ví dụ sử dụng

**Người dùng:** "Tạo UI design cho trang liên hệ và lưu vào docs"

**Hành động:**
1. Tạo file `docs/contact-page.md` với các chi tiết thiết kế.
2. Chạy lệnh `npx @thebestdev/md-to-docx docs/contact-page.md -o docs/exports`.
3. Thông báo cho người dùng rằng `docs/contact-page.md` và `docs/exports/contact-page.docx` đã được tạo.

## Chi tiết triển khai

- **Đường dẫn đầu ra**: 
  - Markdown: `docs/`
  - DOCX: `docs/exports/`
- **Công cụ**: `@thebestdev/md-to-docx` thông qua `npx`.
