# AutoMake Documentation

Chào mừng bạn đến với hệ thống tài liệu của **AutoMake** – RPA Studio được xây dựng trên **.NET 10 LTS + WPF**.

## Giới thiệu

AutoMake là công cụ tự động hóa quy trình làm việc (Robotic Process Automation) giúp bạn thiết kế và thực hiện các quy trình tự động hóa trực quan thông qua Workflow Designer.

### Đặc điểm nổi bật

- **WPF Application** – Giao diện hiện đại trên .NET 10
- **Workflow Designer** – Kéo thả node để thiết kế quy trình tự động hóa
- **Desktop Automation** – Tự động hóa ứng dụng Windows
- **Browser Automation** – Tự động hóa trình duyệt web
- **Scripting** – Hỗ trợ viết script mở rộng tính năng
- **Modular Architecture** – Tách biệt rõ ràng giữa các lớp

## Bắt đầu nhanh

| Mục | Liên kết |
|-----|----------|
| Cài đặt | [Cài đặt](./manual/installation) |
| Hướng dẫn bắt đầu | [Getting Started](./manual/getting-started) |
| Workflow Designer | [Workflow Designer](./manual/workflow-designer) |
| Kiến trúc | [Tổng quan kiến trúc](./architecture/overview) |
| Phát triển | [Cài đặt môi trường](./development/setup) |
| API Reference | [API Reference](./api/api-reference) |

## Cấu trúc Solution

```
AutoMake/
├── AutoMake.App/          # WPF Application – điểm khởi chạy
├── AutoMake.Core/         # Mô hình và interface dùng chung
├── AutoMake.Desktop/      # Tự động hóa desktop
├── AutoMake.Browser/      # Tự động hóa trình duyệt
├── AutoMake.Workflow/     # Workflow engine
├── AutoMake.Infrastructure/ # Lưu trữ, logging, cấu hình, DI
├── AutoMake.Scripting/    # Runtime script và bảo mật
├── tests/                 # Unit tests (xUnit)
└── docs/                  # Tài liệu (VitePress)
```

---

<div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #eaeaea; font-size: 0.9rem; color: #666;">
  AutoMake RPA Studio · Xây dựng với .NET 10 + WPF · Tài liệu bởi VitePress
</div>