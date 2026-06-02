---
name: gen-test-case
description: Tạo mã kiểm thử tự động (Unit/Integration Tests) cho các component React trong thư mục frontend. Sử dụng Vitest và React Testing Library để kiểm tra giao diện và chức năng.
---

# Trình Tạo Mã Kiểm Thử Frontend (NeuroShin AI Quality Standards)

Kỹ năng này tự động hóa việc viết mã kiểm thử (Code Tests) cho các component React, đảm bảo mã nguồn tuân thủ thiết kế và hoạt động đúng chức năng.

## Quy trình thực hiện

1. **Phân tích Component**: Đọc mã nguồn component trong `frontend/src/components/` và tài liệu thiết kế tương ứng trong `docs/`.
2. **Xác định kịch bản kiểm thử**:
   - **Rendering**: Kiểm tra component hiển thị đúng các thành phần UI.
   - **Interactions**: Kiểm tra các sự kiện click, hover, scroll.
   - **State**: Kiểm tra thay đổi trạng thái (ví dụ: mở menu, đổi màu background).
   - **Responsive**: Kiểm tra hiển thị trên các viewport khác nhau (thông qua mocking hoặc kiểm tra cấu trúc).
3. **Tạo file Test riêng biệt**: Tạo các file mã nguồn kiểm thử tương ứng cho từng component tại `frontend/src/__tests__/`.
   - Ví dụ: `Navbar.test.tsx`, `Hero.test.tsx`, `Pricing.test.tsx`, `Footer.test.tsx`.
   - Mỗi file test phải bao gồm các kịch bản chuyên sâu cho component đó (ví dụ: `Navbar` test menu toggle, `Hero` test CTA button).
   - Sử dụng Vitest (`describe`, `it`, `expect`) và React Testing Library.
4. **Xác minh**: Chạy lệnh `npm test -- --run` trong thư mục `frontend` để đảm bảo tất cả các component đều vượt qua kiểm thử.

## Tiêu chuẩn Kiểm thử NeuroShin AI

- **Component Isolation**: Mỗi component phải được test độc lập (isolated).
- **Match Design**: Kiểm tra sự hiện diện của các màu `#25A69A` (Teal) hoặc `#FF5A36` (Orange) thông qua kiểm tra class hoặc style nếu cần.
- **Accessibility**: Ưu tiên tìm kiếm phần tử bằng `getByRole` hoặc `getByText`.

## Ví dụ sử dụng

**Người dùng:** "Tạo test case cho toàn bộ trang chủ theo từng phần"

**Hành động:**
1. Phân tích danh sách component trong `frontend/src/components/`.
2. Lần lượt tạo `frontend/src/__tests__/Navbar.test.tsx`, `frontend/src/__tests__/Hero.test.tsx`, v.v.
3. Chạy lệnh test tổng thể.

## Chi tiết triển khai

- **Đường dẫn**: `frontend/src/__tests__/`.
- **Công nghệ**: Vitest, React Testing Library, JSDOM.
- **Lưu ý**: Chỉ tạo file test trong thư mục frontend, không tạo bất kỳ file documentation hay export nào khác.
