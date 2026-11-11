# Quy ước viết code

Các quy ước khi phát triển mã nguồn cho AutoMake.

## Tên đặt đặt

- Project: `PascalCase` (ví dụ: `AutoMake.Core`).
- Namespace: `PascalCase` (ví dụ: `AutoMake.Core.Models`).
- Class, Interface: `PascalCase` (ví dụ: `WorkflowNode`, `IAutomationAction`).
- Phương thức: `PascalCase` (ví dụ: `ExecuteAsync`).
- Biến cục bộ, tham số: `camelCase` (ví dụ: `workflowName`).
- Trường private: `_camelCase` (ví dụ: `_logger`).

## Định dạng

- Sử dụng 4 khoảng trắng cho mỗi cấp thụt vào.
- Mỗi tệp tin chứa một clase (trừ các clase nhỏ liên quan).
- Sử dụng `var` khi kiểu dữ liệu rõ ràng từ ngữ cảnh.

## Comment

- Viết comment bằng tiếng Việt cho các phần logic phức tạp.
- Sử dụng XML comment (`///`) cho các API công khai.
