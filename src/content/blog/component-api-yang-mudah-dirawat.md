---
title: 'Merancang Component API yang Mudah Dirawat'
description: 'Cara membuat komponen React yang fleksibel tanpa membuat props menjadi terlalu rumit.'
date: '2026-07-08'
readingTime: '6 min read'
category: 'Frontend'
tags:
  - React
  - Component Design
  - TypeScript
featured: false
---

## Ringkasan

Component API yang baik membuat pemakaian komponen terasa jelas. Developer lain bisa membaca props, memahami variasi yang tersedia, dan memakai komponen tanpa perlu membuka seluruh implementasi.

Kuncinya bukan membuat komponen paling generik, tetapi membuat batas yang cukup stabil untuk kebutuhan produk.

## Mulai dari Use Case

Sebelum menambah props baru, lihat dulu pola pemakaian yang nyata. Jika sebuah variasi hanya muncul sekali, mungkin lebih baik dibuat di level pemanggil. Jika variasi muncul berulang, barulah layak dipromosikan menjadi API komponen.

Contoh pertanyaan yang membantu:

- Apakah prop ini mengubah perilaku inti atau hanya styling kecil?
- Apakah nama prop menjelaskan hasil akhirnya?
- Apakah kombinasi props bisa menghasilkan UI yang aneh?

## Gunakan Tipe untuk Membatasi Kombinasi

TypeScript membantu menjaga komponen dari state yang tidak valid. Untuk variasi yang saling eksklusif, union type biasanya lebih aman dibanding banyak boolean.

```ts
type ButtonProps =
  | { variant: 'primary'; icon?: never }
  | { variant: 'icon'; icon: React.ReactNode };
```

Dengan pola ini, API komponen menjadi lebih eksplisit dan kesalahan pemakaian bisa diketahui sebelum runtime.

## Penutup

Komponen yang mudah dirawat biasanya punya API kecil, nama props yang jujur, dan aturan variasi yang jelas. Saat ragu, pilih API yang paling mudah dijelaskan kepada teammate baru.
