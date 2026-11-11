# Tổng quan kiến trúc

AutoMake được thiết kế theo nguyên tắc tách biệt rõ ràng giữa giao diện, logic nghiệp vụ và công nghệ thực thi.

## Các lớp chính

| Lớp | Project | Mô tả |
|-----|---------|-------|
| Presentation | AutoMake.App | Giao diện WPF, điểm khởi chạy |
| Core | AutoMake.Core | Mô hình, interface dùng chung |
| Desktop | AutoMake.Desktop | Tự động hóa ứng dụng desktop |
| Browser | AutoMake.Browser | Tự động hóa trình duyệt web |
| Workflow | AutoMake.Workflow | Engine thiết kế và thực thi workflow |
| Infrastructure | AutoMake.Infrastructure | Lưu trữ, logging, cấu hình, DI |
| Scripting | AutoMake.Scripting | Runtime script và bảo mật |

## Nguyên tắc thiết kế

- **Không phụ thuộc lẫn nhau**: Các project chỉ tham chiếu theo ma trận quy định.
- **Dễ bảo trì**: Thay đổi công nghệ thực thi (ví dụ: FlaUI, Playwright) không ảnh hưởng đến Core và Workflow.
- **Mở rộng**: Dễ dàng thêm module mới thông qua Dependency Injection.
