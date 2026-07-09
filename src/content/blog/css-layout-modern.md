---
title: 'CSS Layout Modern dengan Grid, Flex, dan Container Query'
description: 'Membuat layout yang adaptif, stabil, dan mudah dirawat dengan fitur CSS modern.'
date: '2026-07-04'
readingTime: '6 min read'
category: 'Frontend'
tags:
  - CSS
  - Responsive Design
  - Layout
featured: false
---

## Ringkasan

Layout frontend modern tidak harus penuh workaround. CSS Grid, Flexbox, minmax, clamp, dan container query memberi banyak cara untuk membuat UI responsif tanpa JavaScript tambahan.

Kuncinya adalah memilih alat sesuai masalah layout.

## Grid untuk Struktur Dua Dimensi

CSS Grid cocok untuk layout yang punya baris dan kolom. Misalnya dashboard, daftar kartu, atau halaman artikel dengan sidebar.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
```

Pola ini membuat jumlah kolom menyesuaikan ruang yang tersedia.

## Flex untuk Alur Satu Dimensi

Flexbox cocok untuk toolbar, navigasi, stack horizontal, dan komponen kecil yang bergerak dalam satu arah.

Gunakan `gap` untuk jarak antar elemen dan hindari margin yang saling bertabrakan.

## Container Query untuk Komponen Mandiri

Media query melihat ukuran viewport. Container query melihat ukuran parent. Ini membuat komponen lebih reusable karena responsif terhadap ruang aktualnya.

## Penutup

Layout yang baik terasa stabil saat konten berubah. Beri elemen batas ukuran yang jelas, gunakan gap, dan pilih Grid atau Flex berdasarkan bentuk masalahnya.
