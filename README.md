# SHOPCLONE6 - Static Website

Đây là phiên bản HTML tĩnh của website SHOPCLONE6, được chuyển đổi từ PHP để có thể chạy trên GitHub Pages hoặc bất kỳ hosting tĩnh nào.

## 🚀 Tính năng

- ✅ Giao diện responsive, thân thiện với mobile
- ✅ Trang chủ với sản phẩm mẫu
- ✅ Hệ thống đăng nhập/đăng ký
- ✅ Trang lịch sử mua hàng
- ✅ Trang nạp tiền với nhiều phương thức
- ✅ Trang liên hệ và hỗ trợ
- ✅ FAQ với tìm kiếm và lọc
- ✅ Chính sách bảo mật và điều khoản sử dụng
- ✅ Tương tác JavaScript đầy đủ

## 📁 Cấu trúc thư mục

```
├── index.html              # Trang chủ
├── login.html              # Trang đăng nhập
├── register.html           # Trang đăng ký
├── orders.html             # Lịch sử mua hàng
├── recharge.html           # Trang nạp tiền
├── contact.html            # Trang liên hệ
├── faq.html                # Câu hỏi thường gặp
├── privacy.html            # Chính sách bảo mật
├── terms.html              # Điều khoản sử dụng
├── config.js               # File cấu hình JavaScript
├── assets/                 # Thư mục hình ảnh và tài nguyên
│   └── img/
└── public/                 # Thư mục CSS, JS từ giao diện gốc
    ├── datum/
    ├── sweetalert2/
    ├── cute-alert/
    └── js/
```

## 🛠️ Cài đặt và chạy

### 1. Clone repository
```bash
git clone <repository-url>
cd SHOPCLONE6-static
```

### 2. Cài đặt dependencies (nếu cần)
```bash
# Không cần cài đặt gì thêm, chỉ cần web server
```

### 3. Chạy website

#### Cách 1: Sử dụng Python (đơn giản nhất)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Cách 2: Sử dụng Node.js
```bash
# Cài đặt http-server
npm install -g http-server

# Chạy server
http-server -p 8000
```

#### Cách 3: Sử dụng PHP
```bash
php -S localhost:8000
```

#### Cách 4: Upload lên GitHub Pages
1. Tạo repository mới trên GitHub
2. Upload tất cả files vào repository
3. Vào Settings > Pages
4. Chọn source là "Deploy from a branch"
5. Chọn branch "main" và folder "/ (root)"
6. Website sẽ có sẵn tại `https://username.github.io/repository-name`

## 🎨 Tùy chỉnh

### Thay đổi thông tin website
Chỉnh sửa file `config.js`:
```javascript
const config = {
    project: 'SHOPCLONE6',
    version: '3.0.1',
    site: {
        title: 'SHOPCLONE6 - Mua Tài Khoản Game',
        description: 'Mua tài khoản game giá rẻ, uy tín, chất lượng cao',
        // ... các cấu hình khác
    }
};
```

### Thay đổi màu sắc
Chỉnh sửa CSS trong các file HTML:
```css
.card-product {
    background-image: linear-gradient(to right, #007bff, #007bff, #6c757d);
}
```

### Thêm sản phẩm mới
Chỉnh sửa `config.js` trong phần `sampleData.products`:
```javascript
products: [
    {
        id: 4,
        name: 'Tài khoản Twitter',
        content: 'Tài khoản Twitter chất lượng cao',
        price: 80000,
        category_id: 4,
        flag: 'us',
        sold: 450,
        status: 1,
        stt: 4
    }
]
```

## 📱 Responsive Design

Website được thiết kế responsive và hoạt động tốt trên:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1200px+)

## 🔧 Tính năng JavaScript

### Modal mua hàng
- Mở modal khi click "MUA NGAY"
- Tính toán tổng tiền tự động
- Hỗ trợ mã giảm giá
- Xác nhận đơn hàng

### Tìm kiếm FAQ
- Tìm kiếm theo từ khóa
- Lọc theo danh mục
- Hiển thị/ẩn kết quả

### Form validation
- Kiểm tra dữ liệu đầu vào
- Hiển thị thông báo lỗi
- Xác nhận trước khi gửi

## 🎯 Tương thích trình duyệt

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 📞 Hỗ trợ

Nếu bạn gặp vấn đề gì, vui lòng liên hệ:
- 📧 Email: support@shopclone6.com
- 📱 Hotline: 1900-1234
- 💬 Messenger: m.me/shopclone6

## 📄 License

Dự án này được phát hành dưới giấy phép MIT. Xem file LICENSE để biết thêm chi tiết.

## 🙏 Credits

- **Design:** CMSNT.CO
- **Icons:** Font Awesome
- **Framework:** Bootstrap 4
- **JavaScript Libraries:** jQuery, SweetAlert2, Cute Alert

---

**Lưu ý:** Đây là phiên bản demo tĩnh. Để có đầy đủ tính năng như giao dịch thực, cần tích hợp với backend API.