# Tugas Besar II3240 Rekayasa Sistem dan Teknologi Informasi : Trackee

Trackee adalah aplikasi manajemen gudang berbasis web dan mobile (Warehouse Management System) yang dirancang untuk meningkatkan efisiensi operasional dan akurasi dalam pengelolaan inventaris di gudang. Fitur utama termasuk rekomendasi penempatan barang berdasarkan tanggal kadaluarsa dan analisis pergerakan barang, pelacakan barang, dan otomasi perhitungan stok menggunakan Internet of Things (IoT) untuk mengurangi faktor human error. Trackee dirancang untuk membantu perusahaan mengurangi biaya operasional, meningkatkan akurasi inventaris, dan memberikan layanan yang lebih baik kepada pelanggan melalui pengelolaan gudang yang lebih efisien dan transparan.

## Kelompok 12 Kelas 02

- [18221046 Vincent Winarta](https://github.com/VincentWinarta)
- [18221112 Imanuel Raditya](https://github.com/imanuelraditya)
- [18221116 Miralistya Cahya F](https://github.com/miralistyacahya)
- [18221156 Fredrick Runie Taslim](https://github.com/fredrick03)
- [18221168 Rania Sasi Kirana](https://github.com/raniakiranaa)

## ⭐️ Panduan Penggunaan Trackee ⭐️
1. Install aplikasi di link https://expo.dev/accounts/fredricktaslim/projects/tubes-rekayasa-sti-trackee-mobile/builds/264e2539-8b1c-439c-b189-49cfd8f6ddb3
2. Buka aplikasi Trackee.
3. Halaman pertama yang muncul adalah login yang mengharuskan pengguna memasukkan email dan password.
4. Pada landing page, terdapat 2 pilihan menu, yaitu dashboard, dan locate product.
5. Alur pemakaian dapat dimulai dari halaman dashboard yang berisi daftar produk yang tersedia di gudang beserta detail produk, seperti nama, kategori, merk, dan stok. Di halaman ini juga terdapat opsi untuk mengedit serta menghapus produk.
6. Klik halaman Locate pada navbar untuk melacak letak produk di dalam gudang. Produk dengan expired date terdekat akan ditampilkan dan dapat dicheckout

## Tech Stack
Web application:
1. Next.js
2. ReactJS

Mobile application:
1. React Native

Database:
1. Supabase

## Database
### product
- product_id
- name
- brand
- category 

### rack
- rack_id
- category 

### item
- item_id
- product_id
- rack_id
- exp_date

### rack
- id
- rack_id
- loc_x
- loc_y
- item_id

### users
- id
- email
- username 
