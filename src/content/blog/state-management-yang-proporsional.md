---
title: 'State Management yang Proporsional di React'
description: 'Memilih antara local state, context, URL state, server state, dan store global tanpa berlebihan.'
date: '2026-07-06'
readingTime: '7 min read'
category: 'Frontend'
tags:
  - React
  - State Management
  - Architecture
featured: false
---

## Ringkasan

Masalah state management sering bukan karena tool yang kurang kuat, tetapi karena semua jenis state diperlakukan sama. Padahal state form, data server, filter URL, dan preferensi UI punya karakter berbeda.

Pendekatan yang proporsional membuat aplikasi lebih mudah dipahami.

## Kenali Jenis State

Local state cocok untuk interaksi kecil di satu komponen. Context cocok untuk data yang stabil dan dibutuhkan banyak cabang UI. URL state cocok untuk filter, tab, pagination, dan state yang perlu bisa dibagikan.

Server state sebaiknya ditangani dengan pola fetching yang jelas, karena punya cache, loading, refetch, dan error state.

## Hindari Store Global untuk Semua Hal

Store global memang nyaman di awal, tetapi bisa membuat alur data sulit dilacak. Jika sebuah state hanya dipakai oleh satu halaman, simpan sedekat mungkin dengan halaman tersebut.

Gunakan store global saat:

- State dibutuhkan lintas route.
- Ada banyak komponen yang mengubah state yang sama.
- Perubahan state perlu konsisten di banyak area.

## URL sebagai Sumber Kebenaran

Untuk halaman list, URL sering menjadi tempat terbaik untuk menyimpan state pencarian dan filter. Pengguna bisa refresh, share link, dan kembali ke state yang sama.

```ts
const query = new URLSearchParams({
  search: keyword,
  page: String(page),
});
```

## Penutup

State yang baik adalah state yang mudah ditemukan, mudah diubah, dan tidak mengejutkan. Pilih tempat penyimpanan berdasarkan umur, cakupan, dan kebutuhan sinkronisasi state tersebut.
