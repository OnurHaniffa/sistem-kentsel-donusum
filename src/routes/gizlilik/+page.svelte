<script lang="ts">
	const sections = [
		{ id: 'giris', label: 'Giriş' },
		{ id: 'toplanan-bilgiler', label: 'Toplanan Bilgiler' },
		{ id: 'kullanim', label: 'Bilgilerin Kullanımı' },
		{ id: 'paylasim', label: 'Bilgilerin Paylaşımı' },
		{ id: 'guvenlik', label: 'Veri Güvenliği' },
		{ id: 'saklama', label: 'Veri Saklama' },
		{ id: 'cerezler', label: 'Çerezler' },
		{ id: 'ucuncu-taraf', label: 'Üçüncü Taraf Hizmetler' },
		{ id: 'haklariniz', label: 'Haklarınız' },
		{ id: 'cocuklar', label: 'Çocukların Gizliliği' },
		{ id: 'degisiklikler', label: 'Politika Değişiklikleri' },
		{ id: 'iletisim', label: 'İletişim' }
	];
</script>

<svelte:head>
	<title>Gizlilik Politikası | Sistem Kentsel Dönüşüm</title>
	<meta name="description" content="Sistem Kentsel Dönüşüm gizlilik politikası - Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin." />
	<link rel="canonical" href="https://www.sistemkentseldonusum.com/gizlilik" />
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Header -->
	<div class="border-b border-border/50 bg-muted/30">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
			<div class="max-w-3xl">
				<p class="text-sm font-medium text-muted-foreground mb-3">Yasal</p>
				<h1 class="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
					Gizlilik Politikası
				</h1>
				<p class="text-muted-foreground">
					Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi
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

					<section id="giris">
						<h2 class="text-xl font-semibold text-foreground mb-4">1. Giriş</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							<strong class="text-foreground">Sistem Kentsel Dönüşüm</strong> olarak, kişisel verilerinizin güvenliği ve gizliliği konusunda azami hassasiyet göstermekteyiz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde, hizmetlerimizi kullandığınızda veya bizimle iletişime geçtiğinizde kişisel bilgilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
						</p>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuat çerçevesinde hazırlanmıştır. KVKK kapsamındaki haklarınız hakkında detaylı bilgi için <a href="/kvkk" class="text-primary hover:underline font-medium">KVKK Aydınlatma Metni</a>'ni incelemenizi öneririz.
						</p>
						<div class="p-4 rounded-lg bg-primary/5 border border-primary/20">
							<p class="text-sm text-muted-foreground">
								<strong class="text-foreground">Veri Sorumlusu:</strong> Sistem Kentsel Dönüşüm<br/>
								<strong class="text-foreground">Adres:</strong> Kazım Karabekir Mah. İstasyon Cad. No:523/17 Tüm Ev Plaza Darıca/Kocaeli<br/>
								<strong class="text-foreground">E-posta:</strong> info@sistemkentseldonusum.com
							</p>
						</div>
					</section>

					<section id="toplanan-bilgiler">
						<h2 class="text-xl font-semibold text-foreground mb-4">2. Toplanan Bilgiler</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Hizmetlerimizi sunabilmek ve deneyiminizi iyileştirebilmek için aşağıdaki kategorilerde bilgi toplayabiliriz:
						</p>

						<div class="space-y-4">
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Sizin Sağladığınız Bilgiler</p>
								<ul class="space-y-1 text-sm text-muted-foreground">
									<li>• Ad, soyad ve iletişim bilgileri (telefon, e-posta)</li>
									<li>• Adres ve konum bilgileri</li>
									<li>• Taşınmaz bilgileri (tapu, ada/parsel)</li>
									<li>• İletişim formlarından gönderilen mesajlar</li>
									<li>• Danışmanlık sürecinde paylaşılan belgeler</li>
								</ul>
							</div>

							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Otomatik Olarak Toplanan Bilgiler</p>
								<ul class="space-y-1 text-sm text-muted-foreground">
									<li>• IP adresi ve cihaz bilgileri</li>
									<li>• Tarayıcı türü ve sürümü</li>
									<li>• İşletim sistemi</li>
									<li>• Ziyaret edilen sayfalar ve tıklanan bağlantılar</li>
									<li>• Site üzerinde geçirilen süre</li>
									<li>• Yönlendiren web sitesi (referrer)</li>
								</ul>
							</div>

							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Üçüncü Taraflardan Alınan Bilgiler</p>
								<ul class="space-y-1 text-sm text-muted-foreground">
									<li>• Resmi kurumlardan alınan tapu ve imar bilgileri</li>
									<li>• İş ortaklarından alınan değerleme raporları</li>
									<li>• Sosyal medya platformlarından paylaşılan bilgiler (sizin izninizle)</li>
								</ul>
							</div>
						</div>
					</section>

					<section id="kullanim">
						<h2 class="text-xl font-semibold text-foreground mb-4">3. Bilgilerin Kullanımı</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">Toplanan kişisel bilgilerinizi aşağıdaki amaçlarla kullanmaktayız:</p>
						<ul class="space-y-3 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Hizmet Sunumu:</strong> Kentsel dönüşüm danışmanlık hizmetlerinin sağlanması</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">İletişim:</strong> Taleplerinize yanıt verilmesi ve süreç hakkında bilgilendirme yapılması</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Sözleşme Yürütme:</strong> Danışmanlık sözleşmelerinin hazırlanması ve ifası</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Yasal Uyum:</strong> Yasal yükümlülüklerin yerine getirilmesi</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Hizmet İyileştirme:</strong> Web sitesi ve hizmet kalitesinin artırılması</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Güvenlik:</strong> Dolandırıcılık ve kötüye kullanımın önlenmesi</span>
							</li>
						</ul>
					</section>

					<section id="paylasim">
						<h2 class="text-xl font-semibold text-foreground mb-4">4. Bilgilerin Paylaşımı</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Kişisel bilgileriniz, aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:
						</p>
						<div class="space-y-4">
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">İş Ortakları</p>
								<p class="text-sm text-muted-foreground">
									Hizmet sunumu için gerekli olduğunda, sizin onayınızla avukatlar, mimarlar, mühendisler ve değerleme uzmanları ile paylaşılabilir.
								</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Resmi Kurumlar</p>
								<p class="text-sm text-muted-foreground">
									Kentsel dönüşüm sürecinin yürütülmesi için Tapu Müdürlükleri, Belediyeler ve ilgili bakanlıklarla paylaşılabilir.
								</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Yasal Zorunluluklar</p>
								<p class="text-sm text-muted-foreground">
									Mahkeme kararı, savcılık talebi veya yasal düzenlemeler gereği yetkili mercilerle paylaşılabilir.
								</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Hizmet Sağlayıcılar</p>
								<p class="text-sm text-muted-foreground">
									Web hosting, e-posta ve bulut depolama hizmeti sağlayıcıları ile gizlilik sözleşmeleri kapsamında paylaşılabilir.
								</p>
							</div>
						</div>
						<p class="text-sm text-muted-foreground mt-4">
							Kişisel verilerinizi hiçbir koşulda pazarlama amacıyla üçüncü taraflara satmayız veya kiralamayız.
						</p>
					</section>

					<section id="guvenlik">
						<h2 class="text-xl font-semibold text-foreground mb-4">5. Veri Güvenliği</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri uygulamaktayız:
						</p>
						<ul class="space-y-2 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
								<span>SSL/TLS şifreleme ile güvenli veri iletimi</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
								<span>Güvenlik duvarları ve düzenli güvenlik taramaları</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
								<span>Erişim kontrolü ve yetkilendirme sistemleri</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
								<span>Düzenli veri yedekleme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
								<span>Personel gizlilik eğitimleri ve taahhütnameleri</span>
							</li>
						</ul>
						<div class="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 mt-4">
							<p class="text-sm text-amber-800 dark:text-amber-200">
								<strong>Uyarı:</strong> İnternet üzerinden veri iletiminin %100 güvenli olması mümkün değildir. Her türlü önlemi almamıza rağmen, internet üzerinden iletilen verilerin mutlak güvenliğini garanti edemeyiz.
							</p>
						</div>
					</section>

					<section id="saklama">
						<h2 class="text-xl font-semibold text-foreground mb-4">6. Veri Saklama Süresi</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Kişisel verilerinizi, toplama amacının gerektirdiği süre boyunca ve yasal yükümlülüklerimiz çerçevesinde saklıyoruz:
						</p>
						<div class="space-y-3">
							<div class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span class="text-muted-foreground"><strong class="text-foreground">Müşteri verileri:</strong> Hizmet ilişkisi süresince ve sonrasında 10 yıl</span>
							</div>
							<div class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span class="text-muted-foreground"><strong class="text-foreground">İletişim kayıtları:</strong> Son iletişimden itibaren 3 yıl</span>
							</div>
							<div class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span class="text-muted-foreground"><strong class="text-foreground">Web sitesi logları:</strong> 1 yıl</span>
							</div>
							<div class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span class="text-muted-foreground"><strong class="text-foreground">Çerez verileri:</strong> Çerez türüne göre oturum süresi veya 1 yıl</span>
							</div>
						</div>
					</section>

					<section id="cerezler">
						<h2 class="text-xl font-semibold text-foreground mb-4">7. Çerezler (Cookies)</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Web sitemiz, deneyiminizi iyileştirmek ve site performansını analiz etmek için çerezler kullanmaktadır.
						</p>
						<div class="space-y-4">
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Zorunlu Çerezler</p>
								<p class="text-sm text-muted-foreground">
									Web sitesinin temel işlevlerinin çalışması için gereklidir. Bu çerezler devre dışı bırakılamaz.
								</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Analitik Çerezler</p>
								<p class="text-sm text-muted-foreground">
									Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur. Tüm veriler anonim olarak toplanır.
								</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Tercih Çerezleri</p>
								<p class="text-sm text-muted-foreground">
									Dil tercihi, tema seçimi gibi tercihlerinizi hatırlar.
								</p>
							</div>
						</div>
						<p class="text-sm text-muted-foreground mt-4">
							Tarayıcı ayarlarınızdan çerezleri yönetebilir veya tamamen devre dışı bırakabilirsiniz. Ancak bu durumda bazı site özellikleri düzgün çalışmayabilir.
						</p>
					</section>

					<section id="ucuncu-taraf">
						<h2 class="text-xl font-semibold text-foreground mb-4">8. Üçüncü Taraf Hizmetler</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Web sitemizde aşağıdaki üçüncü taraf hizmetleri kullanılabilir:
						</p>
						<ul class="space-y-2 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Google Fonts:</strong> Yazı tipi görüntüleme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">WhatsApp:</strong> Müşteri iletişimi</span>
							</li>
						</ul>
						<p class="text-sm text-muted-foreground mt-4">
							Bu hizmetlerin kendi gizlilik politikaları bulunmaktadır ve veri işleme uygulamaları bizim kontrolümüz dışındadır.
						</p>
					</section>

					<section id="haklariniz">
						<h2 class="text-xl font-semibold text-foreground mb-4">9. Haklarınız</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							KVKK kapsamında kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
						</p>
						<ul class="space-y-2 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Verilerinizin işlenip işlenmediğini öğrenme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>İşlenen veriler hakkında bilgi talep etme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Verilerin düzeltilmesini veya silinmesini isteme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>İşleme faaliyetine itiraz etme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Verilerinizin taşınabilirliğini talep etme</span>
							</li>
						</ul>
						<p class="text-sm text-muted-foreground mt-4">
							Bu haklarınızı kullanmak için <a href="/kvkk#basvuru" class="text-primary hover:underline font-medium">KVKK Başvuru</a> bölümünde belirtilen yöntemlerle bize ulaşabilirsiniz.
						</p>
					</section>

					<section id="cocuklar">
						<h2 class="text-xl font-semibold text-foreground mb-4">10. Çocukların Gizliliği</h2>
						<p class="text-muted-foreground leading-relaxed">
							Web sitemiz ve hizmetlerimiz 18 yaşın altındaki bireylere yönelik değildir. Bilerek 18 yaşın altındaki kişilerden kişisel bilgi toplamıyoruz. Eğer 18 yaşın altındaki bir çocuğun bize kişisel bilgi sağladığını fark ederseniz, lütfen bizimle iletişime geçin, bu bilgileri sistemlerimizden derhal sileceğiz.
						</p>
					</section>

					<section id="degisiklikler">
						<h2 class="text-xl font-semibold text-foreground mb-4">11. Politika Değişiklikleri</h2>
						<p class="text-muted-foreground leading-relaxed">
							Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada yayınlandığı anda yürürlüğe girer. Önemli değişiklikler yapılması durumunda, web sitemizde belirgin bir bildirim yayınlayacağız. Kullanıcıların bu sayfayı periyodik olarak kontrol etmeleri önerilir.
						</p>
					</section>

					<section id="iletisim">
						<h2 class="text-xl font-semibold text-foreground mb-4">12. İletişim</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Gizlilik politikamız veya kişisel verilerinizin işlenmesi hakkında sorularınız için bizimle iletişime geçebilirsiniz:
						</p>
						<div class="p-4 rounded-lg bg-muted/50 border border-border/50">
							<p class="text-sm text-muted-foreground">
								<strong class="text-foreground">Şirket:</strong> Sistem Kentsel Dönüşüm<br/>
								<strong class="text-foreground">Adres:</strong> Kazım Karabekir Mah. İstasyon Cad. No:523/17 Tüm Ev Plaza Darıca/Kocaeli<br/>
								<strong class="text-foreground">E-posta:</strong> info@sistemkentseldonusum.com
							</p>
						</div>
					</section>

				</div>
			</article>
		</div>
	</div>
</div>
