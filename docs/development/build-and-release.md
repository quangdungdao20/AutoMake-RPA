# Build và Release

Hướng dẫn xây dựng và phát hành phiên bản AutoMake.

## Build

```bash
dotnet build AutoMake.slnx -c Release
```

## Publish

```bash
dotnet publish AutoMake.App\AutoMake.App.csproj -c Release -o ./publish
```

## Release notes

Mỗi phiên bản release cần kèm theo:
- Danh sách tính năng mới.
- Danh sách lỗi đã sửa.
- Hướng dẫn cài đặt hoặc cập nhật.
