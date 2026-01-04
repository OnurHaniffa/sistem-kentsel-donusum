# Sistem Kentsel Dönüşüm Web Sitesi

Kentsel dönüşüm danışmanlık hizmeti sunan modern, hızlı ve Türkçe bir landing page.

## Teknolojiler

- **SvelteKit** - Modern web framework
- **TypeScript** - Tip güvenli JavaScript
- **TailwindCSS v4** - Utility-first CSS framework
- **shadcn-svelte** - UI bileşen kütüphanesi
- **lucide-svelte** - İkon kütüphanesi

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Üretim için derle
npm run build

# Üretim derlemesini önizle
npm run preview
```

## Proje Yapısı

```
sistem-kentsel-donusum/
├── src/
│   ├── app.css                 # Global stiller
│   ├── app.html                # HTML şablonu
│   ├── lib/
│   │   ├── components/         # Özel bileşenler
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   └── WhatsAppButton.svelte
│   │   └── components/ui/      # shadcn-svelte bileşenleri
│   └── routes/
│       ├── +layout.svelte      # Ana layout
│       └── +page.svelte        # Ana sayfa
├── static/
│   └── images/
│       └── hero-bogaz.jpg      # Hero görseli
├── package.json
├── svelte.config.js
├── tailwind.config.js
└── vite.config.ts
```

## İletişim Bilgilerini Düzenleme

Aşağıdaki dosyalarda iletişim bilgilerini güncelleyin:

### 1. Ana Sayfa (`src/routes/+page.svelte`)

İletişim bölümünde placeholder'ları gerçek bilgilerle değiştirin:
- `[Buraya adres eklenecek]` → Gerçek adres
- `[Telefon eklenecek]` → Telefon numarası
- `[WhatsApp numarası eklenecek]` → WhatsApp numarası
- `[IBAN eklenecek]` → Banka IBAN bilgisi

JSON-LD şemasında da aynı bilgileri güncelleyin.

### 2. WhatsApp Butonu (`src/lib/components/WhatsAppButton.svelte`)

```svelte
const whatsappNumber = '905XXXXXXXXX'; // Gerçek numara ile değiştirin
```

### 3. Footer (`src/lib/components/Footer.svelte`)

İletişim bilgilerini güncelleyin.

### 4. Google Maps Haritası

`src/routes/+page.svelte` dosyasında harita placeholder'ını Google Maps iframe ile değiştirin:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%"
  height="100%"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

## Hero Görselini Değiştirme

1. Yeni görseli `static/images/` klasörüne koyun
2. Görsel adını `hero-bogaz.jpg` olarak bırakın veya
3. `src/routes/+page.svelte` dosyasında görsel yolunu güncelleyin:

```svelte
<img
  src="/images/yeni-gorsel.jpg"
  alt="..."
  ...
/>
```

### Görsel Önerileri
- Çözünürlük: En az 1920x1080 piksel
- Format: WebP veya optimize edilmiş JPEG
- Boyut: 500KB altında tutun
- İçerik: İstanbul Boğaz Köprüsü gece manzarası (mevcut tema için)

## SEO Ayarları

`src/routes/+page.svelte` dosyasında `<svelte:head>` içindeki meta etiketlerini düzenleyin:
- `title` - Sayfa başlığı
- `description` - Sayfa açıklaması
- `og:*` - OpenGraph etiketleri
- JSON-LD şemaları (LocalBusiness ve FAQPage)

## Derleme ve Yayınlama

```bash
# TypeScript kontrolü
npm run check

# Üretim derlemesi
npm run build
```

Derleme çıktısı `.svelte-kit/output` klasöründe oluşur.

### Önerilen Hosting Platformları
- Vercel
- Netlify
- Cloudflare Pages

## Lisans

Bu proje özel kullanım içindir. Tüm hakları saklıdır.

---

**Sistem Kentsel Dönüşüm**
www.sistemkentseldonusum.com.tr
