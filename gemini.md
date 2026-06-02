# ♊ Gemini Project Instructions (HomePage)

## 🧩 Kỹ năng cục bộ (Project Skills)
Dưới đây là các skill chuyên biệt được thiết lập cho dự án Home Page. Để sử dụng, hãy kích hoạt chúng bằng tên tương ứng.
- **gen-ui-design**: Tự động tạo bản thiết kế UI (Markdown ja/en) và chuyển đổi sang DOCX chuyên nghiệp.
- **gen-ui-homepage**: Tạo (generate) mã nguồn cho giao diện trang chủ AI dựa trên thiết kế chuẩn.
- **gen-test-case**: Tự động tạo các file kiểm thử (Unit Tests) chi tiết cho từng component trong thư mục `frontend/src/__tests__`.
- **test-fix-orchestrator**: Chạy toàn bộ test case, ghi báo cáo vào `docs/test-report.md` và thực hiện vòng lặp tự sửa lỗi (tối đa 3 lần).
- **project-launcher**: Tự động cài đặt môi trường (setup) và khởi chạy đồng thời Frontend/Backend server.
  

## 🛠️ Quy tắc làm việc
1. Hãy đọc kĩ yêu cầu của lệnh prompt và không tự ý sửa các phần mà không liên quan đến lệnh prompt.
2. Tuân thủ cấu trúc dự án hiện tại.
3. Luôn đọc file skill tương ứng trước khi sửa code.
4. **Quản lý Skill**: Tuyệt đối không tạo, lưu trữ hoặc cài đặt skill trong thư mục `.gemini`. Tất cả mã nguồn và định nghĩa skill phải được đặt trong thư mục `skills/` ở gốc dự án.
5. Ưu tiên việc duy trì tính nhất quán giữa tài liệu thiết kế (docs/) và mã nguồn thực tế.
