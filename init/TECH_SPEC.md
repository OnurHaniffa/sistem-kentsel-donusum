# Teknik Şartname

## 1. Geliştirme Ortamı

### Gereksinimler
- Node.js >= 18.0.0
- npm >= 9.0.0

### Paket Versiyonları
```json
{
  "@sveltejs/adapter-auto": "^7.0.0",
  "@sveltejs/kit": "^2.49.2",
  "@tailwindcss/typography": "^0.5.19",
  "@tailwindcss/vite": "^4.1.18",
  "svelte": "^5.46.1",
  "svelte-check": "^4.0.0",
  "tailwindcss": "^4.1.18",
  "typescript": "^5.9.3",
  "vite": "^7.3.0",
  "tailwind-variants": "latest",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.4.0",
  "tw-animate-css": "latest",
  "lucide-svelte": "latest"
}
```

---

## 2. Proje Yapılandırması

### SvelteKit Config (`svelte.config.js`)
```javascript
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/lib/components',
      $lib: 'src/lib'
    }
  }
};

export default config;
```

### Vite Config (`vite.config.ts`)
```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()]
});
```

### TypeScript Config (`tsconfig.json`)
```json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "moduleResolution": "bundler"
  }
}
```

---

## 3. Stil Sistemi

### Tailwind CSS v4 Yapılandırması
CSS-first yaklaşım kullanılır. Yapılandırma `src/app.css` içinde:

```css
@import "tailwindcss";
@import "tw-animate-css";
@plugin "@tailwindcss/typography";

@custom-variant dark (&:is(.dark *));

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  /* ... diğer değişkenler */
}

.dark {
  /* Dark mode değişkenleri */
}

@theme inline {
  /* Tailwind tema değişkenleri */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### Renk Paleti (OKLCH)
| Değişken | Light Mode | Dark Mode |
|----------|------------|-----------|
| background | oklch(1 0 0) | oklch(0.129 0.042 264.695) |
| foreground | oklch(0.129 0.042 264.695) | oklch(0.984 0.003 247.858) |
| primary | oklch(0.208 0.042 265.755) | oklch(0.929 0.013 255.508) |
| destructive | oklch(0.577 0.245 27.325) | oklch(0.704 0.191 22.216) |

---

## 4. Bileşen Mimarisi

### shadcn-svelte Bileşen Yapısı
Her bileşen klasörü içerir:
```
button/
├── button.svelte    # Ana bileşen
└── index.ts         # Export dosyası
```

### Bileşen İçe Aktarma
```typescript
// Tek bileşen
import { Button } from '$lib/components/ui/button';

// Namespace import (Card gibi alt bileşenler için)
import * as Card from '$lib/components/ui/card';
// Kullanım: <Card.Root>, <Card.Header>, <Card.Content>
```

### Özel Bileşenler
```
src/lib/components/
├── Header.svelte        # Navigasyon header
├── Footer.svelte        # Site footer
└── WhatsAppButton.svelte # Floating WhatsApp butonu
```

---

## 5. Sayfa Yapısı

### Route Yapısı
```
src/routes/
├── +layout.svelte       # Root layout
├── +page.svelte         # Ana sayfa (/)
├── gizlilik/           # TODO: Gizlilik politikası
├── kvkk/               # TODO: KVKK sayfası
└── kullanim-kosullari/ # TODO: Kullanım koşulları
```

### Layout Hiyerarşisi
```
+layout.svelte
├── Header
├── <slot> (sayfa içeriği)
├── Footer
├── WhatsAppButton
└── Toaster
```

---

## 6. State Yönetimi

### Svelte 5 Runes
```typescript
// Reaktif state
let count = $state(0);

// Reaktif props
let { data } = $props();

// Form state örneği
let formData = $state({
  name: '',
  phone: '',
  city: '',
  message: '',
  kvkk: false
});
```

---

## 7. Form İşleme

### İletişim Formu
```typescript
async function handleSubmit(e: Event) {
  e.preventDefault();

  if (!formData.kvkk) {
    toast.error('Lütfen KVKK metnini onaylayın');
    return;
  }

  isSubmitting = true;

  // API çağrısı (TODO: Backend entegrasyonu)
  await new Promise(resolve => setTimeout(resolve, 1000));

  toast.success('Mesajınız gönderildi!');

  // Form sıfırlama
  formData = { name: '', phone: '', city: '', message: '', kvkk: false };
  isSubmitting = false;
}
```

---

## 8. SEO Yapılandırması

### Meta Tags
```svelte
<svelte:head>
  <title>Sayfa Başlığı</title>
  <meta name="description" content="..." />
  <meta name="keywords" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="..." />
  <meta property="og:image" content="..." />
  <meta property="og:locale" content="tr_TR" />
</svelte:head>
```

### JSON-LD Schema
```svelte
<svelte:head>
  {@html `<script type="application/ld+json">
    ${JSON.stringify(schemaData)}
  </script>`}
</svelte:head>
```

---

## 9. Performans Optimizasyonu

### Görsel Optimizasyonu
- Hero görseli: 1920px genişlik, JPEG %80 kalite
- Lazy loading: `loading="lazy"` (hero hariç)
- Responsive images için `srcset` kullanılabilir

### JavaScript Optimizasyonu
- Tree shaking otomatik (Vite)
- Code splitting (SvelteKit routes)
- Minimal runtime (Svelte 5)

### CSS Optimizasyonu
- Tailwind purge (otomatik)
- Critical CSS (SvelteKit SSR)

---

## 10. Erişilebilirlik (a11y)

### Gereksinimler
- Semantik HTML (`<section>`, `<nav>`, `<main>`, `<article>`)
- ARIA labels gerektiğinde
- Klavye navigasyonu
- Focus visible states
- Renk kontrastı (WCAG AA)

### Kontrol Listesi
- [ ] Tüm görsellerde alt text
- [ ] Form elementlerinde label
- [ ] Skip to content link (opsiyonel)
- [ ] Heading hiyerarşisi (h1 > h2 > h3)
- [ ] Focus trap (modal/dropdown)

---

## 11. Build ve Deploy

### Build Komutları
```bash
# Geliştirme
npm run dev

# Tip kontrolü
npm run check

# Üretim build
npm run build

# Preview
npm run preview
```

### Adapter Seçenekleri
```javascript
// Vercel
import adapter from '@sveltejs/adapter-vercel';

// Netlify
import adapter from '@sveltejs/adapter-netlify';

// Node
import adapter from '@sveltejs/adapter-node';

// Static
import adapter from '@sveltejs/adapter-static';
```

### Ortam Değişkenleri
```env
# .env.example
PUBLIC_SITE_URL=https://www.sistemkentseldonusum.com.tr
PUBLIC_WHATSAPP_NUMBER=905XXXXXXXXX
```

---

## 12. Test Stratejisi (TODO)

### Birim Testleri
```bash
npm install -D vitest @testing-library/svelte
```

### E2E Testleri
```bash
npm install -D @playwright/test
```

### Test Dosya Yapısı
```
tests/
├── unit/
│   └── utils.test.ts
├── integration/
│   └── form.test.ts
└── e2e/
    └── navigation.test.ts
```

---

## 13. Güvenlik

### Content Security Policy (Önerilen)
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  font-src 'self' fonts.gstatic.com;
  img-src 'self' data: images.unsplash.com;
">
```

### Form Güvenliği
- CSRF token (backend entegrasyonunda)
- Rate limiting (backend)
- Input sanitization
- KVKK onayı zorunlu

---

## 14. Monitoring (Önerilen)

### Analytics
- Google Analytics 4
- Vercel Analytics
- Plausible (privacy-focused)

### Error Tracking
- Sentry
- LogRocket

### Performance
- Lighthouse CI
- Web Vitals
