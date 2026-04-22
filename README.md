Project 🎭 Playwright Automation with Codegen

![2](https://github.com/user-attachments/assets/f836e19a-9c9a-49c7-88b5-2f9496e08f29)

Project ini berisi kumpulan automation script yang dikembangkan menggunakan **Playwright**. Fokus utamanya adalah efisiensi pengembangan script melalui fitur **Codegen** untuk menangkap interaksi user secara real-time dan mengubahnya menjadi kode yang siap pakai.

## 🚀 Fitur Utama

  * **Auto-Generated Scripts:** Menggunakan `codegen` untuk mempercepat pembuatan test case.
  * **Multi-Browser Support:** Kompatibel dengan Chromium, Firefox, dan WebKit.
  * **Performance Ready:** Script dirancang agar bisa diintegrasikan dengan tools load testing seperti **Artillery**.
  * **Headless Mode:** Eksekusi script yang ringan tanpa perlu membuka jendela browser.


## 🛠️ Prasyarat

Sebelum menjalankan project ini, pastikan lo sudah menginstal:

  * [Node.js](https://nodejs.org/) (Versi terbaru disarankan)
  * NPM (Sudah termasuk saat instal Node.js)

## 📦 Instalasi

1.  Clone repository ini :
    ```bash
    git clone https://github.com/alibnymn/playwright-with-codegen.git
    ```
2.  Masuk ke folder project :
    ```bash
    cd playwright-with-codegen
    ```
3.  Instal dependencies :
    ```bash
    npm install
    ```
4.  Instal browser Playwright :
    ```bash
    npx playwright install
    ```


## 💡 Cara Menggunakan Codegen

Untuk membuat script baru secara otomatis, jalankan perintah berikut :

```bash
npx playwright codegen https://www.saucedemo.com/
```

**Tips:** Playwright bakal ngebuka jendela browser. Setiap klik dan ketikan yang lo lakuin bakal langsung jadi kode di jendela sebelahnya. Tinggal *copy-paste* ke file `.js` lo\!

## 🏃 Cara Menjalankan Test

Jalankan script yang sudah ada dengan perintah :

```bash
npx playwright test  test/Login-positive.spec.js --ui
```

Atau jika menggunakan Playwright Test Runner :

```bash
npx playwright test
```

## 👨‍💻 Kontributor

  * **Ali Bunyamin** - [GitHub](https://www.google.com/search?q=https://github.com/alibnymn)

