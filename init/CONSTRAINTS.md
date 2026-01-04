# Proje Kısıtlamaları ve Koşulları

Bu belge, Sistem Kentsel Dönüşüm web sitesi projesinin tüm kısıtlamalarını, gereksinimlerini ve koşullarını içermektedir.

---

## 1. Teknoloji Yığını (ZORUNLU)

### Kullanılması Gerekenler
- **SvelteKit** - Ana framework
- **TypeScript** - Tip güvenliği
- **TailwindCSS** - Stil sistemi
- **shadcn-svelte** - UI bileşen kütüphanesi (shadcn/ui'nin Svelte versiyonu)
- **lucide-svelte** - İkon kütüphanesi

### Kullanılmaması Gerekenler
- Next.js
- React
- Vue
- Angular
- Diğer JavaScript frameworkleri

---

## 2. Dil ve İçerik Kısıtlamaları

### Dil
- Web sitesi dili: **%100 Türkçe**
- Profesyonel ton (argo/küfür yok)
- Tüm UI metinleri Türkçe olmalı

### İçerik Kısıtlamaları
- Eksik iletişim bilgileri için placeholder kullanılmalı
- Uydurma bilgi eklenmemeli
- Aşağıdakiler için placeholder gerekli:
  - Adres
  - Telefon numarası
  - WhatsApp numarası
  - IBAN/Banka bilgisi
  - Harita embed

---

## 3. Marka ve İçerik Bilgileri

### Marka
- **İsim:** Sistem Kentsel Dönüşüm
- **Domain:** www.sistemkentseldonusum.com.tr

### Slogan / Hero Metni
- Ana slogan: "Dönüşüm Seninle…"
- Alt metin: "Şehrinizi birlikte dönüştürüyoruz. Yenilikçi, modern, depreme dayanıklı şehirler."

### Vizyon
"Kentsel dönüşümü sadece inşaat yapmak değil, yaşam standardının iyileştirilmesi olarak gören bir anlayışla; toplumun her kesimine faydalı olacak projeler üretmeyi, kentsel dönüşüme yön veren bir kuruluş olmayı hedefliyoruz."

### Misyon
"Kentsel dönüşüm sürecinde kat malikleri ve yüklenici firma arasında köprü kurmak, kat maliklerine sözleşme, mevzuat, mimari konularda destek sağlayarak ortak zemin yaratmak."

### Ekip Üyeleri
| İsim | Rol |
|------|-----|
| Semih Tigün DAĞCI | Mimar |
| Furkan AKDENİZ | Avukat |
| Ali DEMİR | Eğitmen |
| Cenk YILDIZ | Gayrimenkul Değerleme Uzmanı |

### Müşteri Endişeleri (Neden Biz?)
- "İnşaat yarım kalır mı?"
- "Müteahhit batar mı?"
- "Hangi firma güvenilir?"

### Sunulan Çözümler
1. Arsa payı karşılığı inşaat sözleşmesi ve teminatlar konusunda hukuki destek
2. Yeni yapılacak bina için mimari destek
3. Kat malikleri ve yüklenici firma arasındaki dağılım için gayrimenkul değerleme desteği
4. 6306 sayılı yasa kapsamında ihtilaflara çözüm önerileri

### Danışmanlık Ücreti
- **Ön görüşme:** Ücretsiz
- **Danışmanlık ücreti:** Daire başına 2.999 TL

### Paket İçeriği
- [ ] Yüklenici firma taraması
- [ ] Mimari proje desteği (mimar)
- [ ] Gayrimenkul değerleme desteği
- [ ] Yüklenici ve paydaşlar arasındaki oransal dağılım
- [ ] Kira yardımı, hibe desteği, kredi destekleri
- [ ] Kat karşılığı inşaat sözleşmesi (avukat)
- [ ] Riskli yapı tespit süreci
- [ ] Ortaklar kurulu kararı süreci
- [ ] Sözleşmeye katılmayan paydaşların hisselerinin satışı
- [ ] Haciz/şerh/ipotek/intifa hakkı bulunan taşınmazların durumlarının çözülmesi
- [ ] Mirasçısı belirsiz veya çok mirasçılı yerlerin çözümü

### Destekler

#### Yarısı Bizden (Sadece İstanbul)
| Tür | Hibe | Kredi | Ekstra |
|-----|------|-------|--------|
| Konut | 850.000 TL | 850.000 TL | 125.000 TL taşınma |
| İş yeri | 437.500 TL | 437.500 TL | - |

#### Yerinde Dönüşüm (18 İl - 6 Şubat 2023 Depremi)
| Tür | Hibe | Kredi |
|-----|------|-------|
| Konut | 750.000 TL | 750.000 TL |
| İş yeri | 400.000 TL | 400.000 TL |

#### Kira Desteği
- Bakanlık/belediye farklı
- İle göre değişir
- Yıllık güncellenir

#### Kredi Desteği
- Bakanlık yıllık 840 baz puan (azami 1.250.000 TL)
- Pilot bölgeler: İzmir, Kocaeli, Sakarya, Manisa, Tekirdağ, Kahramanmaraş — 3.000.000 TL'ye kadar

**Not:** Meblağlar yıllara göre değişebilir.

### SSS (Sıkça Sorulan Sorular)
1. **Hangi şehirlerde hizmet veriyorsunuz?**
   - İstanbul & Kocaeli: yüz yüze + online
   - Diğer şehirler: online

2. **Arsa tapulu olmam engel mi?**
   - Arsa tapulu olması engel değildir
   - Desteklerden yararlanma durumu değişebilir

3. **Hangi binalar için geçerli?**
   - Riskli tüm yapılar için geçerli

4. **Karar için kaç kişinin onayı gerekiyor?**
   - Salt çoğunluk (%50+1) yeterli

5. **Binamın ruhsatı yok, başvurabilir miyim?**
   - Ruhsat şart değil
   - Riskli yapı yeterli
   - Yeni bina ruhsatlı olacaktır

---

## 4. Tasarım Gereksinimleri

### Hero Görseli
- **Zorunlu:** Boğaz Köprüsü / 15 Temmuz Şehitler Köprüsü gece manzarası
- **Kaynak:** Yasal kullanıma uygun (Unsplash/Pexels)
- **Özellikler:**
  - Tam genişlik arka plan görseli
  - Koyu overlay gradient (metin okunabilirliği için)
  - Responsive boyutlar
  - WebP veya optimize edilmiş JPEG

### İlham Kaynağı
- Cityvenn.com'dan ilham alınabilir
- Kopyalanmamalı
- Daha basit ve temiz bir versiyon

### Sayfa Yapısı
- Tek sayfa (single page) + anchor linkler
- Sticky header

### Bölümler (Sırasıyla)
1. Hero (Boğaz Köprüsü gece görseli + overlay)
   - CTA'lar: "Ücretsiz Ön Görüşme" + "WhatsApp'tan Yazın"
2. Trust strip (4 değer önerisi)
3. "Nasıl Çalışıyoruz?" (4 adımlı süreç)
4. "Neden Biz?" (sorunlar + çözümler)
5. "Danışmanlık Paketi" (2.999 TL) + checklist
6. "Destekler & Kampanyalar" kartları
7. "Ekibimiz" kartları
8. SSS accordion
9. İletişim bölümü

### Header Navigasyonu
- Anasayfa
- Kurumsal
- Hizmetler
- Paket
- Destekler
- Ekibimiz
- SSS
- İletişim

---

## 5. Teknik Gereksinimler

### Performans
- Görsel optimizasyonu
- Minimal JavaScript
- İyi Lighthouse skorları

### Erişilebilirlik
- Semantik HTML
- Focus states
- Klavye dostu accordion'lar

### SEO
- Türkçe meta title/description
- OpenGraph etiketleri
- JSON-LD LocalBusiness şeması (placeholder'larla)
- FAQPage şeması

### İletişim Formu
- Alanlar: Ad Soyad, Telefon, Şehir, Mesaj
- KVKK/onay checkbox
- Sadece front-end (toast success göster)
- Backend TODO olarak bırakılacak

### WhatsApp Butonu
- Floating button
- Placeholder numara

---

## 6. UI Bileşenleri (shadcn-svelte)

Kullanılması gereken bileşenler:
- Button
- Card
- Accordion
- Badge
- Separator
- Input
- Textarea
- Toast/Sonner

---

## 7. Proje Çıktıları

### Zorunlu Dosyalar
- [ ] Çalışan kod repository'si
- [ ] Türkçe README dosyası:
  - Kurulum talimatları
  - Çalıştırma komutları
  - Build komutları
  - İletişim bilgilerinin nereye girileceği
  - Hero görselinin nasıl değiştirileceği
- [ ] TypeScript hatasız build

---

## 8. MCP Sunucuları

Proje başlamadan önce kurulması gerekenler:
```bash
claude mcp add playwright npx '@playwright/mcp@latest'
claude mcp add context7 -- npx -y '@upstash/context7-mcp@latest'
```
