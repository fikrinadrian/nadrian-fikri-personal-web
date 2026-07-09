---
title: 'Accessibility Checklist untuk Frontend Sehari-hari'
description: 'Checklist praktis agar UI lebih mudah digunakan oleh lebih banyak orang tanpa menunggu audit besar.'
date: '2026-07-05'
readingTime: '5 min read'
category: 'Frontend'
tags:
  - Accessibility
  - UI
  - HTML
featured: false
---

## Ringkasan

Accessibility bukan pekerjaan tambahan di akhir proyek. Banyak kualitas aksesibilitas lahir dari HTML yang benar, kontras yang cukup, fokus keyboard yang jelas, dan teks yang informatif.

Checklist kecil yang konsisten lebih berguna daripada audit besar yang jarang dilakukan.

## Struktur Semantik

Gunakan elemen sesuai makna. Button untuk aksi, anchor untuk navigasi, heading untuk struktur dokumen, dan label untuk input.

Hal sederhana ini membantu screen reader, keyboard navigation, dan testing otomatis.

## Fokus Keyboard

Setiap elemen interaktif harus bisa dijangkau dengan keyboard. Fokus yang terlihat juga penting agar pengguna tahu sedang berada di mana.

Periksa alur berikut:

- Tab bergerak sesuai urutan visual.
- Modal mengunci fokus di dalam area modal.
- Escape menutup popover atau dialog jika relevan.
- Tidak ada elemen tersembunyi yang masih menerima fokus.

## Teks Alternatif dan Label

Icon button perlu accessible name. Gambar informatif perlu alt text. Gambar dekoratif boleh memiliki alt kosong.

```tsx
<button aria-label='Open menu'>
  <MenuIcon />
</button>
```

## Penutup

Accessibility membuat UI lebih kuat untuk semua pengguna. Mulailah dari semantik, keyboard, kontras, dan label yang jelas.
