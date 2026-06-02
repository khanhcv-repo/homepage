---
name: test-fix-orchestrator
description: Chạy toàn bộ test frontend, ghi báo cáo vào docs/test-report.md và thực hiện vòng lặp tự động sửa lỗi (tối đa 3 lần) nếu phát hiện bug.
---

# Trình Quản lý Vòng lặp Kiểm thử & Sửa lỗi (NeuroShin AI)

Kỹ năng này điều phối quy trình kiểm thử tự động và tự sửa lỗi mã nguồn dựa trên kết quả test. Nó giúp duy trì tính ổn định của dự án mà không cần sự can thiệp liên tục của người dùng.

## Quy trình thực hiện (Loop Logic)

1. **Chạy Test & Báo cáo**: Chạy script `node skills/test-fix-orchestrator/scripts/run_tests.cjs`. Script này sẽ cập nhật file `docs/test-report.md`.
2. **Phân tích kết quả**: Đọc file `docs/test-report.md`.
3. **Vòng lặp Sửa lỗi (Tối đa 3 lần)**:
   - **Nếu có lỗi (Failed Tests)**:
     - Nghiên cứu nguyên nhân lỗi trong file test và mã nguồn component tương ứng.
     - Thực hiện sửa lỗi (Fixbug) bằng công cụ `replace` hoặc `write_file`.
     - Tăng biến đếm vòng lặp.
     - Quay lại **Bước 1**.
   - **Nếu tất cả đều Pass**:
     - Kết thúc quy trình và báo cáo thành công cho người dùng.
4. **Kết thúc**: Nếu sau 3 lần sửa vẫn còn lỗi, dừng lại và báo cáo chi tiết các lỗi chưa thể fix cho người dùng.

## Tiêu chuẩn Sửa lỗi

- **Surgical Fixes**: Chỉ sửa những phần gây ra lỗi test, không thay đổi logic nghiệp vụ trừ khi cần thiết.
- **Verification**: Luôn chạy lại toàn bộ bộ test sau mỗi lần sửa để đảm bảo không gây ra lỗi hồi quy (regression).

## Ví dụ sử dụng

**Người dùng:** "Chạy vòng lặp test và fix lỗi cho trang chủ"

**Hành động:**
1. Chạy `run_tests.cjs`.
2. Thấy `Navbar.test.tsx` fail do lỗi text.
3. Sửa `Navbar.tsx` hoặc `data.ts`.
4. Chạy lại `run_tests.cjs`.
5. Nếu Pass -> Hoàn tất. Nếu Fail -> Lặp lại tối đa 3 lần.

## Chi tiết triển khai

- **Script**: `skills/test-fix-orchestrator/scripts/run_tests.cjs`
- **Báo cáo**: `docs/test-report.md`
- **Giới hạn**: 3 lần lặp (Max 3 iterations).
