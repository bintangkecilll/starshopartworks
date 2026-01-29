# Star Shop Artworks - Website Documentation

## 📋 Deskripsi Proyek

Star Shop Artworks adalah website e-commerce modern untuk penjualan artwork dan poster berkualitas tinggi. Website ini dibangun dengan HTML, CSS, dan JavaScript murni dengan fokus pada performa, SEO, dan user experience yang optimal.

## ✨ Fitur Utama

### 🎨 Desain & UI/UX
- **Desain Modern & Responsif**: Tampilan yang menarik dan proporsional di semua perangkat (desktop, tablet, mobile)
- **Animasi Smooth**: Transisi dan hover effects yang halus untuk pengalaman pengguna yang premium
- **Color Palette Harmonis**: Skema warna yang profesional dan eye-catching
- **Typography Premium**: Menggunakan Google Fonts (Inter & Playfair Display)

### 📱 Halaman Website
1. **Home (index.html)** - Landing page dengan hero section, product showcase, promo banners
2. **Shop (shop.html)** - Katalog produk lengkap dengan filter dan sorting
3. **About (about.html)** - Tentang perusahaan dan nilai-nilai kami
4. **Blog (blog.html)** - Daftar artikel dengan search functionality
5. **Contact (contact.html)** - Form kontak dengan integrasi WhatsApp
6. **Blog Articles (6 artikel)** - Artikel lengkap dengan semua fitur standar

### 📝 Fitur Blog Article
Setiap artikel dilengkapi dengan:
- ✅ Judul (H1) yang SEO-friendly
- ✅ Gambar utama dengan deskripsi
- ✅ Table of Contents (TOC) otomatis dengan toggle
- ✅ Minimal 2 "Baca Juga" artikel terkait
- ✅ Blockquote untuk kutipan penting
- ✅ Gambar promosi GIF dengan link ke WhatsApp
- ✅ Gambar pendukung dengan deskripsi
- ✅ FAQ Section (5 pertanyaan)
- ✅ Kesimpulan
- ✅ Profil penulis
- ✅ Tombol share aktif (Facebook, Twitter, LinkedIn, WhatsApp)
- ✅ 3 Artikel terkait dengan gambar, judul, deskripsi, dan button

### 🚀 Optimasi

#### SEO Optimization
- Meta tags lengkap (description, keywords, author)
- Open Graph tags untuk social media sharing
- Twitter Card tags
- Structured Data (JSON-LD) untuk rich snippets
- Semantic HTML5
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Alt text untuk semua gambar

#### Performance
- Lazy loading untuk gambar
- Minified CSS dan optimized JavaScript
- Preconnect untuk Google Fonts
- Image optimization
- Efficient CSS selectors
- Debounced scroll events

#### Mobile Optimization
- Fully responsive design
- Touch-friendly buttons dan navigation
- Hamburger menu untuk mobile
- Optimized font sizes
- Proper viewport settings

### 🎯 Fitur Interaktif

#### Floating Buttons
- **WhatsApp Button**: Melayang di pojok kanan bawah untuk kontak cepat
- **Scroll to Top Button**: Muncul saat scroll ke bawah, posisi di atas button WA

#### Navigation
- Sticky navbar dengan shadow effect saat scroll
- Active page highlighting
- Smooth scroll untuk anchor links
- Mobile-friendly hamburger menu

#### E-commerce Features
- Quick view product modal
- Add to cart functionality
- Shopping cart counter
- Product filters dan sorting
- Search functionality
- Newsletter subscription

## 📁 Struktur File

```
star-shop-artworks/
│
├── index.html                                    # Homepage
├── shop.html                                     # Shop page
├── about.html                                    # About page
├── blog.html                                     # Blog listing
├── contact.html                                  # Contact page
├── sitemap.xml                                   # SEO sitemap
├── robots.txt                                    # Search engine directives
├── README.md                                     # Documentation
│
├── assets/
│   ├── css/
│   │   └── style.css                            # Main stylesheet
│   │
│   ├── js/
│   │   └── main.js                              # Main JavaScript
│   │
│   └── images/                                  # All images
│       ├── hero-art-1.jpg
│       ├── hero-art-2.jpg
│       ├── product-1.jpg to product-8.jpg
│       ├── top-1.jpg to top-4.jpg
│       ├── promo-sofa.jpg
│       ├── promo-circles.jpg
│       ├── blog-article-1.jpg to blog-article-6.jpg
│       ├── favicon-32x32.png
│       ├── og-image.jpg
│       └── ... (other images)
│
└── Blog Articles/
    ├── cara-memilih-artwork-yang-tepat.html
    ├── tren-desain-interior-2026.html
    ├── panduan-menata-gallery-wall.html
    ├── psikologi-warna-dalam-artwork.html
    ├── tips-merawat-artwork.html
    └── artwork-untuk-ruang-kerja.html
```

## 🎨 Color Palette

```css
--primary-color: #2D3142      /* Dark Blue */
--secondary-color: #BFC0C0    /* Light Gray */
--accent-yellow: #FFD93D      /* Bright Yellow */
--accent-blue: #A8DADC        /* Soft Blue */
--accent-pink: #F4ACB7        /* Soft Pink */
--accent-beige: #F5E6D3       /* Warm Beige */
--text-dark: #1A1A1A          /* Almost Black */
--text-light: #6B6B6B         /* Medium Gray */
--white: #FFFFFF              /* Pure White */
--light-bg: #F8F9FA           /* Off White */
```

## 🔧 Teknologi yang Digunakan

- **HTML5**: Semantic markup
- **CSS3**: Modern styling dengan Flexbox dan Grid
- **JavaScript (Vanilla)**: No frameworks, pure JS
- **Google Fonts**: Inter & Playfair Display
- **Font Awesome 6.5.1**: Icons
- **Responsive Design**: Mobile-first approach

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Cara Menggunakan

### Local Development
1. Clone atau download repository
2. Buka folder project
3. Double click `index.html` atau gunakan live server
4. Website siap digunakan!

### Deployment
1. Upload semua file ke hosting
2. Pastikan struktur folder tetap sama
3. Update URL di sitemap.xml dan robots.txt
4. Update nomor WhatsApp di semua halaman
5. Replace placeholder images dengan gambar asli

## 📝 Kustomisasi

### Mengubah Warna
Edit file `assets/css/style.css` pada bagian `:root` variables

### Mengubah Konten
- **Teks**: Edit langsung di file HTML
- **Gambar**: Replace file di folder `assets/images/`
- **Nomor WhatsApp**: Cari dan replace `6281234567890` dengan nomor Anda

### Menambah Produk
1. Buka `shop.html`
2. Copy struktur `.product-card`
3. Paste dan edit konten
4. Tambahkan gambar produk di folder images

### Menambah Artikel Blog
1. Copy salah satu file artikel (misal: `cara-memilih-artwork-yang-tepat.html`)
2. Rename sesuai judul artikel
3. Edit konten artikel
4. Tambahkan link di `blog.html`
5. Update `sitemap.xml`

## 🔍 SEO Checklist

- ✅ Meta description unik untuk setiap halaman
- ✅ Title tags descriptive dan keyword-rich
- ✅ H1 tag di setiap halaman
- ✅ Alt text untuk semua gambar
- ✅ Internal linking
- ✅ Mobile-friendly
- ✅ Fast loading time
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Structured data
- ✅ Open Graph tags
- ✅ Canonical URLs

## 📊 Performance Tips

1. **Optimize Images**: Compress semua gambar sebelum upload
2. **Enable Caching**: Setup browser caching di server
3. **Use CDN**: Pertimbangkan menggunakan CDN untuk assets
4. **Minify Files**: Minify CSS dan JS untuk production
5. **Lazy Loading**: Sudah implemented untuk images

## 🔐 Security

- Form validation di client-side dan server-side
- Sanitize user inputs
- HTTPS recommended untuk production
- Regular updates untuk dependencies

## 📞 Support & Contact

Untuk pertanyaan atau bantuan:
- Email: info@starshopartworks.com
- WhatsApp: +62 812-3456-7890
- Website: https://starshopartworks.com

## 📄 License

© 2026 Star Shop Artworks. All rights reserved.

## 🎯 Artikel Blog yang Tersedia

1. **Cara Memilih Artwork yang Tepat untuk Ruangan Anda** (LENGKAP)
   - Panduan komprehensif memilih artwork
   - 8+ menit baca
   - Dilengkapi TOC, FAQ, gambar, dan semua fitur standar

2. **Tren Desain Interior 2026 yang Wajib Anda Ketahui**
   - Eksplorasi tren terkini
   - Tips dari desainer profesional

3. **Panduan Lengkap Menata Gallery Wall di Rumah**
   - Step-by-step guide
   - Tips dari kurator seni

4. **Psikologi Warna dalam Artwork dan Pengaruhnya**
   - Panduan ilmiah namun praktis
   - Pengaruh warna terhadap mood

5. **Tips Merawat dan Menjaga Kualitas Artwork Anda**
   - Panduan maintenance
   - Dari pembersihan hingga penyimpanan

6. **Memilih Artwork yang Tepat untuk Ruang Kerja Produktif**
   - Artwork untuk produktivitas
   - Pilihan terbaik untuk workspace

## 🎨 Catatan Penting

### Gambar yang Perlu Disiapkan
Beberapa gambar masih menggunakan placeholder dan perlu diganti:
- Blog article images (blog-article-1.jpg s/d blog-article-6.jpg)
- Customer testimonial images
- About page images
- Promo GIF images
- Author avatar

### Integrasi WhatsApp
Nomor WhatsApp `6281234567890` adalah contoh. Ganti dengan nomor bisnis Anda di:
- Floating button (semua halaman)
- Contact form
- Promo images
- Footer

### Google Analytics (Opsional)
Tambahkan tracking code di semua halaman untuk analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Next Steps

1. Replace semua placeholder images dengan gambar asli
2. Buat 5 artikel blog lainnya dengan format yang sama
3. Setup Google Analytics
4. Setup Google Search Console
5. Submit sitemap ke search engines
6. Optimize images untuk web
7. Test di berbagai devices dan browsers
8. Deploy ke hosting

---

**Dibuat dengan ❤️ untuk Star Shop Artworks**

**Last Updated**: 29 Januari 2026
