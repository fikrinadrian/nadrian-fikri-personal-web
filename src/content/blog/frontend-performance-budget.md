---
title: 'Membuat Performance Budget untuk Aplikasi Frontend'
description: 'Panduan praktis menjaga ukuran bundle, waktu render, dan pengalaman pengguna tetap sehat.'
date: '2026-07-07'
readingTime: '5 min read'
category: 'Frontend'
tags:
  - Performance
  - Web Vitals
  - Next.js
featured: false
---

## Ringkasan

Performance budget adalah batas yang disepakati agar aplikasi tidak bertambah berat tanpa terasa. Batas ini bisa berupa ukuran JavaScript, waktu render, jumlah request, atau target Core Web Vitals.

Budget membantu tim mengambil keputusan sebelum masalah terasa oleh pengguna.

## Tentukan Metrik Utama

Tidak semua metrik punya bobot yang sama. Untuk aplikasi produk, biasanya metrik berikut paling berguna:

- Largest Contentful Paint untuk kecepatan konten utama.
- Interaction to Next Paint untuk respons interaksi.
- Cumulative Layout Shift untuk stabilitas layout.
- Ukuran JavaScript awal untuk biaya parsing browser.

## Buat Batas yang Realistis

Budget yang terlalu ideal sering diabaikan. Mulailah dari kondisi aplikasi sekarang, lalu turunkan secara bertahap.

Contoh target awal:

```txt
initial-js: < 180 KB gzip
lcp-mobile: < 2.8s
cls: < 0.1
critical-api: < 800ms
```

## Integrasikan ke Workflow

Performance check sebaiknya hadir di pull request, bukan hanya setelah produksi bermasalah. Gunakan Lighthouse CI, bundle analyzer, atau synthetic test sederhana untuk memberi sinyal lebih cepat.

## Penutup

Performance budget bukan soal mengejar angka sempurna. Tujuannya menjaga aplikasi tetap terasa cepat saat fitur terus bertambah.
