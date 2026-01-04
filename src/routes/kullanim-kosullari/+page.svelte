<script lang="ts">
	const sections = [
		{ id: 'genel', label: 'Genel Hükümler' },
		{ id: 'tanimlar', label: 'Tanımlar' },
		{ id: 'hizmet', label: 'Hizmet Tanımı' },
		{ id: 'fikri-mulkiyet', label: 'Fikri Mülkiyet' },
		{ id: 'sorumluluklar', label: 'Kullanıcı Sorumlulukları' },
		{ id: 'sinirlamalar', label: 'Sorumluluk Sınırlaması' },
		{ id: 'ucuncu-taraf', label: 'Üçüncü Taraf Bağlantıları' },
		{ id: 'fiyatlandirma', label: 'Fiyatlandırma' },
		{ id: 'fesih', label: 'Fesih ve Askıya Alma' },
		{ id: 'degisiklikler', label: 'Değişiklikler' },
		{ id: 'hukuk', label: 'Uygulanacak Hukuk' },
		{ id: 'iletisim', label: 'İletişim' }
	];
</script>

<svelte:head>
	<title>Kullanım Koşulları | Sistem Kentsel Dönüşüm</title>
	<meta name="description" content="Sistem Kentsel Dönüşüm web sitesi kullanım koşulları ve şartları." />
	<link rel="canonical" href="https://sistemkentseldonusum.com/kullanim-kosullari" />
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Header -->
	<div class="border-b border-border/50 bg-muted/30">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
			<div class="max-w-3xl">
				<p class="text-sm font-medium text-muted-foreground mb-3">Yasal</p>
				<h1 class="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
					Kullanım Koşulları
				</h1>
				<p class="text-muted-foreground">
					Web sitesi ve hizmetlerimizin kullanım şartları
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

					<section id="genel">
						<h2 class="text-xl font-semibold text-foreground mb-4">1. Genel Hükümler</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Bu kullanım koşulları, <strong class="text-foreground">Sistem Kentsel Dönüşüm</strong> ("Şirket", "biz", "bizim") tarafından işletilen
							sistemkentseldonusum.com web sitesinin ("Site") kullanımına ilişkin şartları ve koşulları düzenlemektedir.
						</p>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Bu web sitesine erişerek veya bu siteyi kullanarak, bu kullanım koşullarını okuduğunuzu, anladığınızı ve bunlara bağlı kalmayı kabul ettiğinizi beyan etmiş olursunuz.
						</p>
						<div class="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
							<p class="text-sm text-amber-800 dark:text-amber-200">
								<strong>Önemli:</strong> Bu koşulları kabul etmiyorsanız, lütfen web sitemizi kullanmayınız. Site üzerinden sunulan hizmetlerden yararlanmanız, bu koşulları kabul ettiğiniz anlamına gelir.
							</p>
						</div>
					</section>

					<section id="tanimlar">
						<h2 class="text-xl font-semibold text-foreground mb-4">2. Tanımlar</h2>
						<div class="space-y-4">
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-1">"Kullanıcı"</p>
								<p class="text-sm text-muted-foreground">Web sitemizi ziyaret eden, kullanan veya hizmetlerimizden yararlanan gerçek veya tüzel kişiler</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-1">"Hizmetler"</p>
								<p class="text-sm text-muted-foreground">Kentsel dönüşüm danışmanlığı, hukuki destek, mimari danışmanlık, değerleme ve süreç yönetimi hizmetleri</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-1">"İçerik"</p>
								<p class="text-sm text-muted-foreground">Web sitesinde yer alan tüm metin, görsel, grafik, logo, video, ses ve diğer materyaller</p>
							</div>
						</div>
					</section>

					<section id="hizmet">
						<h2 class="text-xl font-semibold text-foreground mb-4">3. Hizmet Tanımı</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Sistem Kentsel Dönüşüm, kentsel dönüşüm süreçlerinde profesyonel danışmanlık hizmeti sunmaktadır. Web sitemiz aşağıdaki amaçlarla hazırlanmıştır:
						</p>
						<ul class="space-y-2 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Hizmetlerimiz hakkında bilgi sağlamak</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Kentsel dönüşüm süreci hakkında genel bilgilendirme yapmak</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Potansiyel müşterilerle iletişim kurmak</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Devlet destekleri ve haklar hakkında bilgi vermek</span>
							</li>
						</ul>
						<p class="text-muted-foreground leading-relaxed mt-4">
							Web sitesindeki bilgiler genel bilgilendirme amaçlıdır. Kesin ve kişiselleştirilmiş danışmanlık için mutlaka uzmanlarımızla görüşmenizi öneririz.
						</p>
					</section>

					<section id="fikri-mulkiyet">
						<h2 class="text-xl font-semibold text-foreground mb-4">4. Fikri Mülkiyet Hakları</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Web sitesindeki tüm içerik (metin, grafik, logo, görsel, video, yazılım ve tasarım dahil) Sistem Kentsel Dönüşüm'e aittir veya lisans altında kullanılmaktadır. Bu içerikler Türkiye Cumhuriyeti fikri mülkiyet mevzuatı ile korunmaktadır.
						</p>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Aşağıdaki eylemler açıkça yasaklanmıştır:
						</p>
						<ul class="space-y-2 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0"></span>
								<span>İçeriğin izinsiz kopyalanması, çoğaltılması veya dağıtılması</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0"></span>
								<span>Logo ve ticari markaların izinsiz kullanımı</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0"></span>
								<span>İçeriğin değiştirilmesi veya türev eserler oluşturulması</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0"></span>
								<span>İçeriğin ticari amaçlarla kullanılması</span>
							</li>
						</ul>
					</section>

					<section id="sorumluluklar">
						<h2 class="text-xl font-semibold text-foreground mb-4">5. Kullanıcı Sorumlulukları</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">Web sitemizi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:</p>
						<ul class="space-y-3 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Doğru bilgi sağlama:</strong> İletişim formlarına ve danışmanlık sürecinde doğru, güncel ve eksiksiz bilgi vermek</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Yasalara uygunluk:</strong> Türkiye Cumhuriyeti kanunlarına ve uluslararası hukuka aykırı faaliyetlerde bulunmamak</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Hakların korunması:</strong> Üçüncü tarafların fikri mülkiyet haklarını ve kişisel haklarını ihlal etmemek</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Sistem güvenliği:</strong> Web sitesinin güvenliğini tehlikeye atacak eylemlerden kaçınmak (virüs, zararlı yazılım vb.)</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span><strong class="text-foreground">Gizlilik:</strong> Danışmanlık sürecinde edinilen bilgileri gizli tutmak ve üçüncü kişilerle paylaşmamak</span>
							</li>
						</ul>
					</section>

					<section id="sinirlamalar">
						<h2 class="text-xl font-semibold text-foreground mb-4">6. Sorumluluk Sınırlaması</h2>
						<div class="space-y-4">
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Bilgilerin Niteliği</p>
								<p class="text-sm text-muted-foreground">
									Web sitemizdeki bilgiler genel bilgilendirme amaçlıdır ve profesyonel hukuki, mali veya teknik tavsiye niteliği taşımaz. Her durum kendine özgüdür ve kişiselleştirilmiş danışmanlık için uzmanlarımızla iletişime geçmenizi öneririz.
								</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Hizmet Sürekliliği</p>
								<p class="text-sm text-muted-foreground">
									Sistem Kentsel Dönüşüm, web sitesinin kesintisiz, hatasız veya güvenli çalışacağını garanti etmez. Teknik bakım, güncelleme veya öngörülemeyen durumlar nedeniyle hizmet kesintileri yaşanabilir.
								</p>
							</div>
							<div class="p-4 rounded-lg bg-muted/30 border border-border/50">
								<p class="font-medium text-foreground mb-2">Zarar Sorumluluğu</p>
								<p class="text-sm text-muted-foreground">
									Web sitesinin kullanımından veya kullanılamamasından kaynaklanan doğrudan, dolaylı, özel, arızi veya cezai zararlardan Sistem Kentsel Dönüşüm sorumlu tutulamaz.
								</p>
							</div>
						</div>
					</section>

					<section id="ucuncu-taraf">
						<h2 class="text-xl font-semibold text-foreground mb-4">7. Üçüncü Taraf Bağlantıları</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Web sitemiz, kolaylık sağlamak amacıyla üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar hakkında:
						</p>
						<ul class="space-y-2 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Bu sitelerin içeriği, gizlilik politikaları veya uygulamaları üzerinde kontrolümüz bulunmamaktadır</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Üçüncü taraf sitelerin doğruluğu veya güvenilirliği konusunda herhangi bir garanti vermemekteyiz</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Bu sitelerin kullanımından doğacak zararlardan sorumlu değiliz</span>
							</li>
						</ul>
					</section>

					<section id="fiyatlandirma">
						<h2 class="text-xl font-semibold text-foreground mb-4">8. Fiyatlandırma ve Ödeme</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Web sitesinde belirtilen fiyatlar bilgilendirme amaçlıdır ve aşağıdaki koşullara tabidir:
						</p>
						<ul class="space-y-2 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Fiyatlar önceden haber vermeksizin değiştirilebilir</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Kesin fiyat bilgisi için danışmanlarımızla görüşmeniz gerekmektedir</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Fiyatlar KDV hariçtir (aksi belirtilmedikçe)</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Ödeme koşulları sözleşme aşamasında belirlenir</span>
							</li>
						</ul>
					</section>

					<section id="fesih">
						<h2 class="text-xl font-semibold text-foreground mb-4">9. Fesih ve Askıya Alma</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Sistem Kentsel Dönüşüm, aşağıdaki durumlarda kullanıcıların siteye erişimini kısıtlama veya engelleme hakkını saklı tutar:
						</p>
						<ul class="space-y-2 text-muted-foreground">
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Bu kullanım koşullarının ihlali</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Yasadışı faaliyetlerde bulunma veya teşvik etme</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Web sitesi güvenliğini tehdit eden eylemler</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
								<span>Şirket itibarını zedeleyici davranışlar</span>
							</li>
						</ul>
					</section>

					<section id="degisiklikler">
						<h2 class="text-xl font-semibold text-foreground mb-4">10. Koşullarda Değişiklikler</h2>
						<p class="text-muted-foreground leading-relaxed">
							Sistem Kentsel Dönüşüm, bu kullanım koşullarını herhangi bir zamanda, herhangi bir sebeple ve önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. Değişiklikler web sitesinde yayınlandığı anda yürürlüğe girer. Web sitesini kullanmaya devam etmeniz, değiştirilmiş koşulları kabul ettiğiniz anlamına gelir. Kullanıcıların bu sayfayı periyodik olarak kontrol etmeleri önerilir.
						</p>
					</section>

					<section id="hukuk">
						<h2 class="text-xl font-semibold text-foreground mb-4">11. Uygulanacak Hukuk ve Yetki</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Bu kullanım koşulları Türkiye Cumhuriyeti kanunlarına tabidir ve bu kanunlara göre yorumlanacaktır.
						</p>
						<div class="p-4 rounded-lg bg-muted/50 border border-border/50">
							<p class="text-sm text-muted-foreground">
								Bu kullanım koşullarından kaynaklanan veya bunlarla ilgili her türlü uyuşmazlıkta <strong class="text-foreground">Kocaeli Mahkemeleri ve İcra Daireleri</strong> yetkilidir.
							</p>
						</div>
					</section>

					<section id="iletisim">
						<h2 class="text-xl font-semibold text-foreground mb-4">12. İletişim</h2>
						<p class="text-muted-foreground leading-relaxed mb-4">
							Bu kullanım koşulları hakkında sorularınız veya görüşleriniz için bizimle iletişime geçebilirsiniz:
						</p>
						<div class="space-y-4">
							<div class="p-4 rounded-lg bg-muted/50 border border-border/50">
								<p class="text-sm text-muted-foreground">
									<strong class="text-foreground">Şirket:</strong> Sistem Kentsel Dönüşüm<br/>
									<strong class="text-foreground">Adres:</strong> Kazım Karabekir Mah. İstasyon Cad. No:523/17 Tüm Ev Plaza Darıca/Kocaeli<br/>
									<strong class="text-foreground">E-posta:</strong> info@sistemkentseldonusum.com
								</p>
							</div>
						</div>
					</section>

				</div>
			</article>
		</div>
	</div>
</div>
