# Proje Yol Haritası (ROADMAP)

Bu belge, Sistem Kentsel Dönüşüm web sitesinin sıfırdan nasıl oluşturulduğunu adım adım açıklamaktadır.

---

## Genel Bakış

| Özellik | Değer |
|---------|-------|
| Proje Adı | Sistem Kentsel Dönüşüm |
| Framework | SvelteKit |
| Dil | TypeScript |
| Stil | TailwindCSS v4 |
| UI Kit | shadcn-svelte |
| İkonlar | lucide-svelte |
| Toplam Süre | ~30 dakika |

---

## Adım 1: MCP Sunucularının Kurulumu

### Ne Yapıldı?
İki MCP (Model Context Protocol) sunucusu eklendi:

```bash
claude mcp add playwright npx '@playwright/mcp@latest'
claude mcp add context7 -- npx -y '@upstash/context7-mcp@latest'
```

### Neden?
- **Playwright MCP:** Web sayfalarını otomatik açıp analiz etmek için (Cityvenn.com gibi)
- **Context7 MCP:** Dokümantasyon ve bağlam yönetimi için

---

## Adım 2: SvelteKit Projesinin Oluşturulması

### Ne Yapıldı?
Manuel olarak SvelteKit projesi scaffold edildi:

```bash
mkdir sistem-kentsel-donusum
cd sistem-kentsel-donusum
npm init -y
npm install -D @sveltejs/kit @sveltejs/adapter-auto svelte typescript vite svelte-check
```

### Oluşturulan Dosyalar
- `package.json` - Proje yapılandırması ve scriptler
- `svelte.config.js` - SvelteKit yapılandırması
- `vite.config.ts` - Vite build yapılandırması
- `tsconfig.json` - TypeScript yapılandırması
- `src/app.html` - HTML şablonu
- `src/app.d.ts` - TypeScript tip tanımları

### Dizin Yapısı
```
sistem-kentsel-donusum/
├── src/
│   ├── lib/
│   │   └── components/
│   └── routes/
├── static/
└── ...config dosyaları
```

---

## Adım 3: TailwindCSS v4 Kurulumu

### Ne Yapıldı?
TailwindCSS v4 ve eklentileri kuruldu:

```bash
npm install -D tailwindcss @tailwindcss/vite @tailwindcss/typography
```

### Yapılandırma
`vite.config.ts` dosyasına Tailwind plugin eklendi:

```typescript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()]
});
```

### CSS Dosyası
`src/app.css` oluşturuldu:
```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

---

## Adım 4: shadcn-svelte Kurulumu

### Ne Yapıldı?
shadcn-svelte UI kütüphanesi kuruldu ve yapılandırıldı:

```bash
npx shadcn-svelte@latest init \
  --base-color slate \
  --css src/app.css \
  --lib-alias '$lib' \
  --components-alias '$lib/components' \
  --utils-alias '$lib/utils' \
  --hooks-alias '$lib/hooks' \
  --ui-alias '$lib/components/ui'
```

### Eklenen Bileşenler
```bash
npx shadcn-svelte@latest add button card accordion badge separator input textarea sonner -y
```

| Bileşen | Kullanım Yeri |
|---------|---------------|
| Button | CTA'lar, form gönderme |
| Card | İçerik kartları |
| Accordion | SSS bölümü |
| Badge | Etiketler |
| Separator | Bölüm ayırıcılar |
| Input | Form alanları |
| Textarea | Mesaj alanı |
| Sonner | Toast bildirimleri |

### Ek Bağımlılıklar
```bash
npm install tailwind-variants clsx tailwind-merge tw-animate-css lucide-svelte
```

---

## Adım 5: Hero Görselinin İndirilmesi

### Ne Yapıldı?
Unsplash'tan İstanbul Boğaz Köprüsü gece fotoğrafı indirildi:

```bash
mkdir -p static/images
curl -L "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1920&q=80" \
  -o static/images/hero-bogaz.jpg
```

### Görsel Özellikleri
- Çözünürlük: 1920px genişlik
- Kalite: %80
- Format: JPEG
- Boyut: ~950KB

---

## Adım 6: Layout Bileşenlerinin Oluşturulması

### Header Bileşeni (`src/lib/components/Header.svelte`)

**Özellikler:**
- Sticky pozisyon (üstte sabit)
- Backdrop blur efekti
- Desktop navigasyon (8 link)
- Mobil hamburger menü
- CTA butonları (Ara, Ücretsiz Görüşme)
- Smooth scroll için anchor linkler

**Navigasyon Linkleri:**
```typescript
const navLinks = [
  { href: '#anasayfa', label: 'Anasayfa' },
  { href: '#kurumsal', label: 'Kurumsal' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#paket', label: 'Paket' },
  { href: '#destekler', label: 'Destekler' },
  { href: '#ekibimiz', label: 'Ekibimiz' },
  { href: '#sss', label: 'SSS' },
  { href: '#iletisim', label: 'İletişim' }
];
```

### Footer Bileşeni (`src/lib/components/Footer.svelte`)

**Özellikler:**
- 4 sütunlu grid (responsive)
- Marka bilgisi
- Hızlı bağlantılar
- İletişim bilgileri (placeholder)
- Yasal linkler
- Copyright

### WhatsApp Butonu (`src/lib/components/WhatsAppButton.svelte`)

**Özellikler:**
- Fixed pozisyon (sağ alt)
- Yeşil arka plan
- Hover animasyonu
- Pre-filled mesaj
- Placeholder numara

---

## Adım 7: Ana Sayfa Bölümlerinin Oluşturulması

### Layout Dosyası (`src/routes/+layout.svelte`)
- Global CSS import
- Google Fonts (Inter)
- Header, Footer, WhatsApp butonu
- Toaster bileşeni

### Ana Sayfa (`src/routes/+page.svelte`)

#### 7.1 Hero Section
```
┌─────────────────────────────────────────┐
│     [Background: Boğaz Köprüsü]         │
│     [Dark Overlay Gradient]             │
│                                         │
│   [Badge] Kentsel Dönüşüm Danışmanlığı  │
│                                         │
│      Dönüşüm Seninle…                   │
│                                         │
│   Şehrinizi birlikte dönüştürüyoruz.    │
│                                         │
│   [Ücretsiz Ön Görüşme] [WhatsApp]      │
│                                         │
│              ↓ (scroll)                 │
└─────────────────────────────────────────┘
```

#### 7.2 Trust Strip (Güven Şeridi)
4 değer önerisi kartı:
1. Hukuki Güvence - Shield ikonu
2. Mimari Destek - Building2 ikonu
3. Değerleme - Calculator ikonu
4. Süreç Yönetimi - ClipboardCheck ikonu

#### 7.3 Kurumsal Section
- Vizyon kartı
- Misyon kartı
- Gradient arka planlar

#### 7.4 Nasıl Çalışıyoruz Section
4 adımlı süreç kartları:
1. Ücretsiz Ön Görüşme
2. Riskli Yapı Tespiti
3. Firma Seçimi
4. Sözleşme & Takip

#### 7.5 Neden Biz Section
**Sorunlar (kırmızı kartlar):**
- İnşaat yarım kalır mı?
- Müteahhit batar mı?
- Hangi firma güvenilir?

**Çözümler (yeşil kartlar):**
- Hukuki Destek
- Mimari Destek
- Değerleme Desteği
- İhtilaf Çözümü

#### 7.6 Danışmanlık Paketi Section
```
┌─────────────────────────────┐
│   [Primary Header]          │
│   Daire Başına              │
│   2.999 TL                  │
├─────────────────────────────┤
│   ✓ Yüklenici firma taraması│
│   ✓ Mimari proje desteği    │
│   ✓ ... (11 madde)          │
├─────────────────────────────┤
│   [Hemen Başvur Button]     │
└─────────────────────────────┘
```

#### 7.7 Destekler Section
2 ana destek kartı:
- Yarısı Bizden (İstanbul)
- Yerinde Dönüşüm (18 İl)

2 ek bilgi kartı:
- Kira Desteği
- Kredi Desteği

#### 7.8 Ekibimiz Section
4 takım üyesi kartı:
- Semih Tigün DAĞCI (Mimar)
- Furkan AKDENİZ (Avukat)
- Ali DEMİR (Eğitmen)
- Cenk YILDIZ (Gayrimenkul Değerleme Uzmanı)

#### 7.9 SSS Section
shadcn Accordion bileşeni ile 5 soru:
1. Hangi şehirlerde hizmet veriyorsunuz?
2. Arsa tapulu olmam engel mi?
3. Hangi binalar için geçerli?
4. Karar için kaç kişinin onayı gerekiyor?
5. Binamın ruhsatı yok, başvurabilir miyim?

#### 7.10 İletişim Section
**Sol taraf - Form:**
- Ad Soyad (Input)
- Telefon (Input)
- Şehir (Input)
- Mesaj (Textarea)
- KVKK onay checkbox
- Gönder butonu

**Sağ taraf:**
- İletişim bilgileri kartı (placeholder)
- Harita placeholder

---

## Adım 8: SEO Optimizasyonu

### Meta Etiketler
```html
<title>Sistem Kentsel Dönüşüm | Güvenilir Kentsel Dönüşüm Danışmanlığı</title>
<meta name="description" content="..." />
<meta name="keywords" content="kentsel dönüşüm, danışmanlık, riskli yapı..." />
```

### OpenGraph
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.sistemkentseldonusum.com.tr" />
<meta property="og:image" content="/images/hero-bogaz.jpg" />
<meta property="og:locale" content="tr_TR" />
```

### JSON-LD Şemaları

**LocalBusiness:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sistem Kentsel Dönüşüm",
  "description": "Kentsel dönüşüm danışmanlık hizmetleri",
  "url": "https://www.sistemkentseldonusum.com.tr",
  "telephone": "[Placeholder]",
  "address": {...},
  "priceRange": "₺₺",
  "openingHours": "Mo-Fr 09:00-18:00"
}
```

**FAQPage:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "...",
      "acceptedAnswer": {...}
    }
  ]
}
```

---

## Adım 9: Erişilebilirlik İyileştirmeleri

### Yapılan İyileştirmeler
- `href="#"` yerine gerçek yollar (`/kvkk`, `/gizlilik`, vb.)
- Semantik HTML etiketleri (`<section>`, `<nav>`, `<main>`, `<footer>`)
- `aria-label` etiketleri
- Klavye navigasyonu desteği
- Focus states

---

## Adım 10: Build ve Test

### Build Komutu
```bash
npm run build
```

### Build Çıktısı
```
✓ built in 17.25s
Client bundle: ~225 kB (gzip: ~63 kB)
Server bundle: ~540 kB
```

### Çalıştırma Komutları
```bash
npm run dev      # Geliştirme sunucusu (http://localhost:5173)
npm run build    # Üretim build
npm run preview  # Build önizleme
npm run check    # TypeScript kontrolü
```

---

## Dosya Yapısı (Final)

```
sistem-kentsel-donusum/
├── init/
│   └── CONSTRAINTS.md          # Proje kısıtlamaları
├── src/
│   ├── app.css                 # Global stiller + Tailwind
│   ├── app.d.ts                # TypeScript tanımları
│   ├── app.html                # HTML şablonu
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Header.svelte   # Üst navigasyon
│   │   │   ├── Footer.svelte   # Alt bilgi
│   │   │   └── WhatsAppButton.svelte
│   │   ├── components/ui/      # shadcn-svelte bileşenleri
│   │   │   ├── accordion/
│   │   │   ├── badge/
│   │   │   ├── button/
│   │   │   ├── card/
│   │   │   ├── input/
│   │   │   ├── separator/
│   │   │   ├── sonner/
│   │   │   └── textarea/
│   │   └── utils.ts            # Yardımcı fonksiyonlar
│   └── routes/
│       ├── +layout.svelte      # Ana layout
│       └── +page.svelte        # Ana sayfa (tüm bölümler)
├── static/
│   └── images/
│       └── hero-bogaz.jpg      # Hero görseli
├── .svelte-kit/                # SvelteKit build cache
├── node_modules/
├── components.json             # shadcn-svelte config
├── package.json
├── README.md                   # Türkçe kullanım kılavuzu
├── ROADMAP.md                  # Bu dosya
├── svelte.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Tamamlanan Görevler

### SEO & Meta
- [x] Sitemap.xml oluşturuldu (`/sitemap.xml`)
- [x] Robots.txt oluşturuldu (`/robots.txt`)
- [x] JSON-LD şemaları eklendi (Organization, LocalBusiness, FAQPage)
- [x] Open Graph meta etiketleri tüm sayfalara eklendi
- [x] Twitter Card meta etiketleri eklendi
- [x] Canonical URL'ler eklendi
- [x] OG image oluşturuldu (`static/og-image.jpg` - 1200x630)

### Sayfalar
- [x] Ana sayfa (`/`)
- [x] Hizmetler sayfası (`/hizmetler`)
- [x] Kurumsal sayfası (`/kurumsal`)
- [x] Ekibimiz sayfası (`/ekibimiz`)
- [x] İletişim sayfası (`/iletisim`)
- [x] KVKK Aydınlatma Metni (`/kvkk`)
- [x] Gizlilik Politikası (`/gizlilik`)
- [x] Kullanım Koşulları (`/kullanim-kosullari`)

### İşlevsellik
- [x] İletişim formu (Resend email API)
- [x] Telefon ve email doğrulama (Türk telefon formatı)
- [x] Google Maps embed (İletişim sayfası)
- [x] Toast bildirimleri (svelte-sonner)
- [x] Mobil responsive tasarım
- [x] Animasyonlar (animate action)

### Altyapı
- [x] Vercel deployment
- [x] Domain bağlantısı (sistemkentseldonusum.com)
- [x] SSL sertifikası (otomatik)
- [x] Resend email entegrasyonu
- [x] Google Workspace MX kayıtları

---

## Kalan Görevler (TODO)

### Acil - Müşteriden Bilgi Gerekli
- [ ] **Telefon numarası** - Tüm placeholder'ları güncelle:
  - `src/routes/iletisim/+page.svelte` (satır 90-91)
  - `src/lib/components/Footer.svelte` (satır 67)
- [ ] **WhatsApp numarası** - Tüm placeholder'ları güncelle:
  - `src/routes/iletisim/+page.svelte` (satır 96-97)
  - `src/lib/components/Footer.svelte` (satır 67)
  - `src/lib/components/WhatsAppButton.svelte`

### Müşteri Tarafında Yapılacaklar
- [ ] **Google Business Profile** kurulumu
  - Google My Business'a kayıt
  - İşletme bilgilerini doğrulama
  - Fotoğraflar ekleme
  - Çalışma saatleri belirleme
- [ ] **Google Search Console** doğrulama
- [ ] **Google Analytics** entegrasyonu (opsiyonel)

### Gelecekte Yapılabilecekler
- [ ] Blog bölümü
- [ ] Çok dilli destek (İngilizce)
- [ ] Admin paneli
- [ ] CRM entegrasyonu
- [ ] Sentry error tracking aktifleştirme

---

## Pre-Launch Checklist (Final Kontroller)

### Teknik Kontroller
- [x] Build başarılı (`npm run build`)
- [x] TypeScript hataları yok (`npm run check`)
- [x] Tüm sayfalar yükleniyor
- [x] İletişim formu çalışıyor
- [x] Email gönderimi çalışıyor (Resend)
- [x] Mobil responsive tasarım test edildi
- [ ] Lighthouse skoru kontrolü (hedef: 90+)

### SEO Kontrolleri
- [x] Sitemap.xml erişilebilir
- [x] Robots.txt erişilebilir
- [x] OG image mevcut ve doğru boyutta
- [x] Meta description tüm sayfalarda var
- [x] Canonical URL'ler doğru
- [ ] Google Search Console'a sitemap gönderildi

### İçerik Kontrolleri
- [ ] Telefon numaraları doğru
- [ ] WhatsApp numaraları doğru
- [x] Email adresleri doğru (info@sistemkentseldonusum.com)
- [x] Adres bilgileri doğru
- [x] Çalışma saatleri doğru
- [x] Ekip üyeleri bilgileri güncel
- [x] Fiyatlandırma bilgileri güncel

### Güvenlik Kontrolleri
- [x] SSL sertifikası aktif (HTTPS)
- [x] Environment variables güvenli (Vercel)
- [x] Form validation (frontend + backend)
- [x] KVKK uyumlu iletişim formu

### Performans
- [x] Görseller optimize
- [x] Lazy loading aktif
- [x] Font preloading
- [ ] Core Web Vitals kontrolü

---

## Hızlı Komutlar

```bash
# Geliştirme
npm run dev

# Build
npm run build

# TypeScript kontrolü
npm run check

# Önizleme
npm run preview
```

---

## Önemli Dosyalar

| Dosya | Açıklama |
|-------|----------|
| `.env` | API anahtarları (local) |
| `src/routes/api/contact/+server.ts` | Email API endpoint |
| `src/routes/+layout.svelte` | Global layout + JSON-LD |
| `static/og-image.jpg` | Sosyal medya paylaşım görseli |

---

## İletişim Bilgileri (Güncellenecek)

```
Şirket: Sistem Kentsel Dönüşüm
Adres: Kazım Karabekir Mah. İstasyon Cad. No:523/17 Tüm Ev Plaza, Darıca/Kocaeli
Email: info@sistemkentseldonusum.com
Telefon: [MÜŞTERİDEN ALINACAK]
WhatsApp: [MÜŞTERİDEN ALINACAK]
Çalışma Saatleri: Pazartesi - Cuma: 09:00 - 18:00
```

---

## Teknik Notlar

### TailwindCSS v4 Özellikleri
- CSS-first yapılandırma
- `@theme` direktifi ile özel değişkenler
- OKLCH renk formatı
- Native CSS nesting desteği

### Svelte 5 Özellikleri
- `$state()` reaktif değişkenler
- `$props()` prop tanımları
- `{@render}` snippet rendering
- `{@html}` raw HTML rendering

### shadcn-svelte Özellikleri
- Tailwind Variants entegrasyonu
- Radix UI primitives
- Tam özelleştirilebilir bileşenler
- TypeScript desteği

---

*Bu roadmap, projenin oluşturulma sürecini belgelemek amacıyla hazırlanmıştır.*
