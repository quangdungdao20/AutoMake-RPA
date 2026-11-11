# Troubleshooting

Danh sách các vấn đề phổ biến và cách khắc phục khi sử dụng AutoMake.

## Vấn đề 1: Không tìm thấy phần tử desktop

**Nguyên nhân**: Selector không chính xác hoặc ứng dụng chưa hiển thị phần tử.

**Cách khắc phục**:
- Sử dụng Inspector để quét lại phần tử.
- Thêm node **WaitForElement** trước khi tác vụ tương tác.

## Vấn đề 2: Trình duyệt không mở

**Nguyên nhân**: Playwright chưa được cài đặt hoặc trình duyệt không tương thích.

**Cách khắc phục**:
- Cài đặt trình duyệt hỗ trợ Playwright.
- Kiểm tra cài đặt trong `BrowserManagement`.

## Vấn đề 3: Workflow không lưu được

**Nguyên nhân**: Thư mục lưu trữ không có quyền ghi.

**Cách khắc phục**:
- Chạy Visual Studio với quyền Administrator.
- Kiểm tra đường dẫn lưu trong `Storage` configuration.

## Vấn đề 4: Lỗi build solution

**Nguyên nhân**: Thiếu .NET 10 SDK hoặc project reference bị hỏng.

**Cách khắc phục**:
- Cài đặt .NET 10 SDK.
- Kiểm tra lại Project Reference trong Solution Explorer.
