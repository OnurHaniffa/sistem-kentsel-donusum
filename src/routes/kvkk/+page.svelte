<script lang="ts">
	const sections = [
		{ id: 'veri-sorumlusu', label: 'Veri Sorumlusu' },
		{ id: 'isleme-amaci', label: 'İşlenme Amacı' },
		{ id: 'veri-kategorileri', label: 'Veri Kategorileri' },
		{ id: 'hukuki-sebepler', label: 'Hukuki Sebepler' },
		{ id: 'aktarim', label: 'Verilerin Aktarılması' },
		{ id: 'toplama-yontemi', label: 'Toplama Yöntemi' },
		{ id: 'saklama-suresi', label: 'Saklama Süresi' },
		{ id: 'guvenlik', label: 'Veri Güvenliği' },
		{ id: 'haklariniz', label: 'Haklarınız' },
		{ id: 'basvuru', label: 'Başvuru Yöntemi' }
	];
</script>

<svelte:head>
	<title>KVKK Aydınlatma Metni | Sistem Kentsel Dönüşüm</title>
	<meta name="description" content="6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni." />
	<link rel="canonical" href="https://www.sistemkentseldonusum.com/kvkk" />
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Header -->
	<div class="border-b border-border/50 bg-muted/30">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
			<div class="max-w-3xl">
				<p class="text-sm font-medium text-muted-foreground mb-3">Yasal</p>
				<h1 class="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
					KVKK Aydınlatma Metni
				</h1>
				<p class="text-muted-foreground">
					6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında Aydınlatma Metni
				</p>
				<p class="text-sm text-muted-foreground mt-2">Son güncelleme: Ocak 2026</p>
			</div>
		</div>
	</div>

	<!-- Content -->
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
		<div class="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">

			<!-- Sidebar Navigation -->
			<aside class="hidden lg:block">
				<nav class="sticky top-28">
					<p class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">İçindekiler</p>
					<ul class="space-y-2">
						{#each sections as section}
							<li>
								<a
									href="#{section.id}"
									class="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
								>
									{section.label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</aside>

			<!-- Main Content -->
			<article class="max-w-2xl">
				<div class="space-y-12">

					<section id="veri-sorumlusu">
						<h2 class="text-xl font-semibold text-foreground mb-4">1. Veri Sorumlusu</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; veri
							sorumlusu olarak <strong class="text-foreground">Sistem Kentsel Dönüşüm</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.
						</p>
						<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
							<p class="text-sm text-muted-foreground">
								<strong class="text-foreground">Ticari Unvan:</strong> Sistem Kentsel Dönüşüm<br/>
								<strong class="text-foreground">Adres:</strong> Kazım Karabekir Mah. İstasyon Cad. No:523/17 Tüm Ev Plaza Darıca/Kocaeli<br/>
								<strong class="text-foreground">E-posta:</strong> info@sistemkentseldonusum.com
							</p>
						</div>
					</section>

					<section id="isleme-amaci">
						<h2 class="text-xl font-semibold text-foreground mb-4">2. Kişisel Verilerin İşlenme Amaçları</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Toplanan kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde aşağıdaki amaçlarla işlenmektedir:
						</p>
						<ul class="space-y-3 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Kentsel dönüşüm danışmanlık hizmetlerinin sunulması ve süreç yönetimi</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Müşteri ilişkileri yönetimi kapsamında iletişim faaliyetlerinin yürütülmesi</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Sözleşme süreçlerinin hazırlanması, müzakeresi ve ifası</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Riskli yapı tespiti ve değerleme işlemlerinin koordinasyonu</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Resmi kurum ve kuruluşlarla yazışmaların yürütülmesi</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Hukuki danışmanlık ve avukatlık hizmetlerinin sunulması</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Devlet destekleri ve hibe başvurularının takibi</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Müşteri memnuniyeti ölçümü ve hizmet kalitesinin iyileştirilmesi</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Yasal yükümlülüklerin yerine getirilmesi ve hukuki süreçlerin takibi</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Şirket içi raporlama ve istatistiksel analizlerin yapılması</span>
							</li>
						</ul>
					</section>

					<section id="veri-kategorileri">
						<h2 class="text-xl font-semibold text-foreground mb-4">3. İşlenen Kişisel Veri Kategorileri</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Hizmetlerimizin sunulması kapsamında aşağıdaki kategorilerdeki kişisel verileriniz işlenmektedir:
						</p>
						<div class="space-y-4">
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Kimlik Bilgileri</p>
								<p class="text-sm text-muted-foreground">Ad, soyad, T.C. kimlik numarası, doğum tarihi, nüfus cüzdanı/kimlik kartı örneği, imza örneği</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">İletişim Bilgileri</p>
								<p class="text-sm text-muted-foreground">Telefon numarası, cep telefonu numarası, e-posta adresi, ikametgah adresi, iş adresi</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Taşınmaz Bilgileri</p>
								<p class="text-sm text-muted-foreground">Tapu bilgileri (ada, parsel, blok, bağımsız bölüm numarası), tapu senedi örneği, gayrimenkul değerleme raporları, imar durumu bilgileri, riskli yapı tespit raporları</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Finansal Bilgiler</p>
								<p class="text-sm text-muted-foreground">Banka hesap bilgileri (IBAN), ödeme kayıtları, fatura bilgileri</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Hukuki İşlem Bilgileri</p>
								<p class="text-sm text-muted-foreground">Vekaletname bilgileri, dava ve icra dosya bilgileri, noter onaylı belgeler</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">İşlem Güvenliği Bilgileri</p>
								<p class="text-sm text-muted-foreground">IP adresi, cihaz bilgileri, web sitesi kullanım verileri, çerez kayıtları</p>
							</div>
						</div>
					</section>

					<section id="hukuki-sebepler">
						<h2 class="text-xl font-semibold text-foreground mb-4">4. Kişisel Veri İşlemenin Hukuki Sebepleri</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Kişisel verileriniz, KVKK'nın 5. maddesinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
						</p>
						<ul class="space-y-3 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Açık rızanızın bulunması</strong> - İletişim formu, bilgi talepleri ve pazarlama faaliyetleri için</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Sözleşmenin kurulması veya ifası için gerekli olması</strong> - Danışmanlık sözleşmesinin hazırlanması ve yerine getirilmesi</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi</strong> - Vergi mevzuatı, ticaret mevzuatı ve diğer yasal düzenlemeler</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Bir hakkın tesisi, kullanılması veya korunması</strong> - Hukuki süreçlerin takibi ve hakların korunması</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Meşru menfaatler için zorunlu olması</strong> - İş süreçlerinin iyileştirilmesi ve hizmet kalitesinin artırılması</span>
							</li>
						</ul>
					</section>

					<section id="aktarim">
						<h2 class="text-xl font-semibold text-foreground mb-4">5. Kişisel Verilerin Aktarılması</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, KVKK'nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aşağıdaki taraflara aktarılabilecektir:
						</p>
						<ul class="space-y-3 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">İş Ortaklarımız:</strong> Avukatlar, sözleşmeli hukuk büroları, mimarlar, mühendisler, gayrimenkul değerleme uzmanları</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Kamu Kurum ve Kuruluşları:</strong> Tapu ve Kadastro Müdürlükleri, Belediyeler, Çevre ve Şehircilik Bakanlığı, Vergi Daireleri</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Yetkili Merciler:</strong> Mahkemeler, icra daireleri, noter kuruluşları</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Tedarikçiler:</strong> Bilgi işlem hizmeti sağlayıcıları, bulut depolama hizmeti sağlayıcıları</span>
							</li>
						</ul>
					</section>

					<section id="toplama-yontemi">
						<h2 class="text-xl font-semibold text-foreground mb-4">6. Kişisel Veri Toplama Yöntemi</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Kişisel verileriniz aşağıdaki kanallar aracılığıyla toplanmaktadır:
						</p>
						<ul class="space-y-2 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Web sitemizdeki iletişim formları</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Telefon görüşmeleri ve çağrı merkezi kayıtları</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>E-posta yazışmaları</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>WhatsApp ve diğer mesajlaşma uygulamaları</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Yüz yüze görüşmeler ve ofis ziyaretleri</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Fiziksel olarak teslim edilen belgeler</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Çerezler ve otomatik veri toplama teknolojileri</span>
							</li>
						</ul>
					</section>

					<section id="saklama-suresi">
						<h2 class="text-xl font-semibold text-foreground mb-4">7. Kişisel Verilerin Saklanma Süresi</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca ve her halükarda ilgili mevzuatta öngörülen zamanaşımı süreleri dahilinde saklanacaktır:
						</p>
						<div class="space-y-3">
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="text-sm text-muted-foreground">
									<strong class="text-foreground">Sözleşme süresince ve sonrasında:</strong> Sözleşmenin sona ermesinden itibaren 10 yıl (Türk Borçlar Kanunu zamanaşımı süresi)
								</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="text-sm text-muted-foreground">
									<strong class="text-foreground">Ticari defter ve belgeler:</strong> 10 yıl (Türk Ticaret Kanunu)
								</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="text-sm text-muted-foreground">
									<strong class="text-foreground">Vergisel belgeler:</strong> 5 yıl (Vergi Usul Kanunu)
								</p>
							</div>
						</div>
					</section>

					<section id="guvenlik">
						<h2 class="text-xl font-semibold text-foreground mb-4">8. Veri Güvenliği Önlemleri</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Kişisel verilerinizin güvenliğini sağlamak amacıyla aşağıdaki teknik ve idari tedbirler alınmaktadır:
						</p>
						<ul class="space-y-2 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>SSL/TLS şifreleme ile güvenli veri iletimi</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Güvenlik duvarları ve sızma tespit sistemleri</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Erişim yetkilendirme ve log kayıtları</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Düzenli yedekleme ve veri kurtarma prosedürleri</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Personel gizlilik taahhütnameleri ve eğitimleri</span>
							</li>
						</ul>
					</section>

					<section id="haklariniz">
						<h2 class="text-xl font-semibold text-foreground mb-4">9. Veri Sahibi Olarak Haklarınız</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
						<ul class="space-y-3 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Kişisel verilerinizin işlenip işlenmediğini öğrenme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Düzeltme, silme veya yok etme işlemlerinin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</span>
							</li>
						</ul>
					</section>

					<section id="basvuru">
						<h2 class="text-xl font-semibold text-foreground mb-4">10. Başvuru Yöntemi</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerden birini tercih edebilirsiniz:
						</p>
						<div class="space-y-4">
							<div class="p-4 rounded-lg bg-muted/50 border border-border/50">
								<p class="font-medium text-foreground mb-2">E-posta ile Başvuru</p>
								<p class="text-sm text-muted-foreground">
									info@sistemkentseldonusum.com adresine kimlik teyidi yapılabilecek belgeler ile birlikte başvurunuzu iletebilirsiniz.
								</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/50 border border-border/50">
								<p class="font-medium text-foreground mb-2">Yazılı Başvuru</p>
								<p class="text-sm text-muted-foreground">
									Kazım Karabekir Mah. İstasyon Cad. No:523/17 Tüm Ev Plaza Darıca/Kocaeli adresine ıslak imzalı dilekçenizi elden teslim edebilir veya noter kanalıyla gönderebilirsiniz.
								</p>
							</div>
						</div>
						<p class="text-sm text-muted-foreground mt-4">
							Başvurularınız, talebinizin niteliğine göre en kısa sürede ve en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılacaktır. İşlemin ayrıca bir maliyet gerektirmesi halinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret talep edilebilir.
						</p>
					</section>

				</div>
			</article>
		</div>
	</div>
</div>
