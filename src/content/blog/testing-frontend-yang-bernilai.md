---
title: 'Testing Frontend yang Benar-benar Bernilai'
description: 'Memilih unit test, integration test, dan end-to-end test berdasarkan risiko fitur.'
date: '2026-07-02'
readingTime: '7 min read'
category: 'Frontend'
tags:
  - Testing
  - Playwright
  - React
featured: false
---

## Ringkasan

Testing frontend yang baik tidak hanya mengejar coverage. Test sebaiknya melindungi perilaku penting pengguna, mencegah regresi, dan memberi sinyal yang cepat saat ada perubahan yang merusak.

Semakin dekat test ke perilaku pengguna, semakin besar nilainya untuk workflow produk.

## Pilih Level Test

Unit test berguna untuk fungsi kecil dan logika murni. Integration test cocok untuk komponen yang punya state dan interaksi. End-to-end test cocok untuk alur utama seperti login, checkout, atau submit form.

Tidak semua hal perlu e2e. Test e2e lebih mahal, jadi pilih alur yang benar-benar kritikal.

## Testing dari Perspektif Pengguna

Gunakan query berbasis role, label, dan teks. Ini mendorong UI yang lebih accessible sekaligus membuat test lebih tahan terhadap perubahan struktur internal.

```ts
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('Saved')).toBeVisible();
```

## Screenshot Test

Screenshot bisa membantu untuk halaman visual penting, tetapi sebaiknya dipakai selektif. Stabilkan viewport, data, font, dan animasi agar hasilnya tidak mudah berubah tanpa alasan.

## Penutup

Test terbaik adalah test yang memberi rasa aman saat refactor dan rilis. Mulailah dari alur pengguna yang paling penting, lalu tambahkan coverage sesuai risiko.
