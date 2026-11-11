# Workflow Engine

Workflow Engine là thành phần cốt lõi để thiết kế, xác thực và thực thi các quy trình tự động hóa.

## Các thành phần

- **Designer**: Giao diện kéo thả để thiết kế workflow.
- **Nodes**: Các khối xử lý cơ bản (action, control flow, variable).
- **Connections**: Đường nối giữa các node.
- **Validation**: Kiểm tra tính hợp lệ của workflow trước khi chạy.
- **Serialization**: Lưu và tải workflow từ file JSON/XML.

## Luồng hoạt động

1. Người dùng thiết kế workflow trong Designer.
2. Engine thực thi Validation để kiểm tra lỗi.
3. Nếu hợp lệ, Engine thực thi các node theo thứ tự kết nối.
4. Kết quả được ghi lại vào log.
