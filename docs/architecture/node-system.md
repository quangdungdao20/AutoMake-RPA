# Node System

Node System định nghĩa các khối xử lý cơ bản trong Workflow Engine.

## Loại node

- **Action Node**: Thực hiện một tác vụ (click, nhập văn bản, v.v.).
- **Control Flow Node**: Điều khiển luồng (if, loop, delay).
- **Variable Node**: Quản lý biến trong quá trình thực thi.

## Cấu trúc node

Mỗi node bao gồm:
- **Id**: Mã định danh duy nhất.
- **Name**: Tên hiển thị.
- **Inputs**: Cổng nhập dữ liệu.
- **Outputs**: Cổng xuất dữ liệu.
- **Execute()**: Phương thức thực thi logic chính.

## Tùy chỉnh

Dễ dàng tạo node mới bằng cách kế thừa từ lớp node cơ sở trong `AutoMake.Workflow.Nodes`.
