# SmartHealth Community

Một trang web tĩnh về tư vấn sức khỏe cộng đồng, nhằm chia sẻ thông tin về giữ gìn sức khỏe, phòng bệnh và sơ cứu ban đầu.

## Tính năng
- Trang chủ tối ưu cho GitHub Pages
- Giao diện đơn giản, thân thiện với người dùng
- Chia sẻ các thông tin về:
  - Thói quen giữ gìn sức khỏe
  - Dinh dưỡng và vận động
  - Các biện pháp sơ cứu cơ bản
  - Lời khuyên chăm sóc sức khỏe cho gia đình và cộng đồng

## Triển khai trên GitHub Pages
1. Đẩy repository lên GitHub.
2. Vào Settings > Pages.
3. Chọn Source: Deploy from a branch.
4. Chọn Branch: main, folder: /root.
5. Lưu lại và chờ GitHub build.
6. Sau khi hoàn tất, trang sẽ có URL dạng:
   `https://<username>.github.io/<repo-name>/`

## Các file chính
- `index.html`: giao diện trang web
- `styles.css`: thiết kế và responsive
- `script.js`: JavaScript nhỏ cho hiệu ứng

## Chạy cục bộ
Mở file `index.html` trực tiếp trong trình duyệt hoặc dùng máy chủ tĩnh đơn giản như:

```bash
python -m http.server 8000
```

Sau đó truy cập: `http://localhost:8000`
