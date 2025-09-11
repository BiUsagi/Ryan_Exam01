# Pug & SCSS Development Environment

Đây là môi trường phát triển sử dụng Pug và SCSS với Gulp để tự động hóa quá trình build.

## Cấu trúc thư mục

```
root
┣ dist/                    # Thư mục output (được tạo tự động)
┃   ┣ index.html
┃   ┣ news/
┃   ┃   ┗ index.html
┃   ┣ css/
┃   ┃   ┣ news.css
┃   ┃   ┗ top.css
┃   ┣ js/
┃   ┃   ┗ scripts.js
┃   ┣ img/
┃   ┃   ┣ common/
┃   ┃   ┃   ┗ sp/
┃   ┃   ┣ top/
┃   ┃   ┃   ┗ sp/
┃   ┃   ┗ news/
┃   ┣ video/
┃   ┗ pdf/
┗ src/                     # Thư mục source code
    ┣ pug/                 # Template Pug
    ┣ scss/                # Style SCSS
    ┃   ┣ base/           # Base styles
    ┃   ┣ parts/          # Components
    ┃   ┣ news.scss       # News page styles
    ┃   ┗ top.scss        # Top page styles
    ┣ js/                  # JavaScript files
    ┣ img/                 # Images
    ┣ fonts/               # Fonts
    ┣ video/               # Videos
    ┗ pdf/                 # PDF files
```

## Cài đặt

1. Clone hoặc download project
2. Chạy lệnh cài đặt dependencies:

```bash
npm install
```

## Sử dụng

### Build project

```bash
npm run build
```

### Development mode với live reload

```bash
npm run dev
# hoặc
npm start
```

### Watch mode (chỉ watch files không mở browser)

```bash
npm run watch
```

### Build từng loại file

```bash
# Build Pug templates
npm run pug

# Build SCSS styles
npm run scss

# Build JavaScript
npm run js
```

## Tính năng

- **Pug Templates**: Compile Pug thành HTML
- **SCSS**: Compile SCSS thành CSS với minification
- **JavaScript**: Minify JavaScript files
- **Live Reload**: Browser tự động refresh khi có thay đổi
- **File Watching**: Tự động build khi có thay đổi file
- **Asset Copying**: Tự động copy images, fonts, videos, PDFs

## File cấu hình

- `gulpfile.js`: Cấu hình Gulp tasks
- `package.json`: Dependencies và scripts
- `src/pug/layout.pug`: Layout template chính
- `src/scss/base/`: Base styles và variables
- `src/scss/parts/`: Components styles

## Lưu ý

- File output sẽ được tạo trong thư mục `dist/`
- Không chỉnh sửa trực tiếp file trong thư mục `dist/`
- Mọi thay đổi chỉ thực hiện trong thư mục `src/`

## Browser Support

Project được cấu hình để hỗ trợ các trình duyệt modern. Nếu cần hỗ trợ trình duyệt cũ hơn, có thể thêm autoprefixer vào gulpfile.js.

## Troubleshooting

Nếu gặp lỗi khi build:

1. Kiểm tra syntax Pug/SCSS
2. Đảm bảo tất cả file import đều tồn tại
3. Chạy `npm install` để cài đặt lại dependencies
