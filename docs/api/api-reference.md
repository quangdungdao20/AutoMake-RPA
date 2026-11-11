# API Reference

Tài liệu tham khảo API công khai của AutoMake.

## AutoMake.Core

- `AutoMake.Core.Models`: Các mô hình dữ liệu dùng chung.
- `AutoMake.Core.Interfaces`: Các interface định nghĩa hợp đồng giữa các lớp.
- `AutoMake.Core.Variables`: Hệ thống quản lý biến.
- `AutoMake.Core.Events`: Hệ thống sự kiện.

## AutoMake.Workflow

- `AutoMake.Workflow.Nodes`: Các loại node trong workflow.
- `AutoMake.Workflow.Designer`: Công cụ thiết kế workflow.
- `AutoMake.Workflow.Validation`: Kiểm tra hợp lệ workflow.
- `AutoMake.Workflow.Serialization`: Lưu/tải workflow.

## AutoMake.Desktop

- `AutoMake.Desktop.Actions`: Các tác vụ tự động hóa desktop.
- `AutoMake.Desktop.Recorder`: Ghi lại thao tác người dùng.
- `AutoMake.Desktop.Inspector`: Quét phần tử giao diện.
- `AutoMake.Desktop.Input`: Mô phỏng nhập liệu từ bàn phím/chuột.
- `AutoMake.Desktop.Recognition`: Nhận dạng hình ảnh/văn bản.
- `AutoMake.Desktop.WindowManagement`: Quản lý cửa sổ ứng dụng.

## AutoMake.Browser

- `AutoMake.Browser.Actions`: Các tác vụ tự động hóa trình duyệt.
- `AutoMake.Browser.Recorder`: Ghi lại thao tác trên web.
- `AutoMake.Browser.Playwright`: Tích hợp Playwright.
- `AutoMake.Browser.Locators`: Định vị phần tử trên trang web.
- `AutoMake.Browser.BrowserManagement`: Quản lý trình duyệt.

## AutoMake.Infrastructure

- `AutoMake.Infrastructure.Storage`: Lưu trữ dữ liệu.
- `AutoMake.Infrastructure.Logging`: Ghi nhật ký.
- `AutoMake.Infrastructure.Configuration`: Quản lý cấu hình.
- `AutoMake.Infrastructure.DependencyInjection`: Tiêm phụ thuộc.

## AutoMake.Scripting

- `AutoMake.Scripting.Runtime`: Môi trường chạy script.
- `AutoMake.Scripting.Extensions`: Mở rộng chức năng script.
- `AutoMake.Scripting.Security`: Bảo mật cho script.
