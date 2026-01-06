<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { animate, stagger } from '$lib/actions/animate';
	import {
		Phone,
		MessageCircle,
		ArrowRight,
		Shield,
		Building2,
		Calculator,
		ClipboardCheck,
		ChevronDown,
		Users,
		FileCheck
	} from 'lucide-svelte';

	const trustItems = [
		{
			icon: Shield,
			title: 'Hukuki Güvence',
			desc: 'Avukat destekli sözleşme süreci',
			gradient: 'from-primary to-primary/70',
			href: '/hizmetler#hukuki'
		},
		{
			icon: Building2,
			title: 'Mimari Destek',
			desc: 'Profesyonel mimari proje danışmanlığı',
			gradient: 'from-primary/90 to-teal',
			href: '/hizmetler#mimari'
		},
		{
			icon: Calculator,
			title: 'Değerleme',
			desc: 'Gayrimenkul değerleme uzmanlığı',
			gradient: 'from-teal to-primary/80',
			href: '/hizmetler#degerleme'
		},
		{
			icon: ClipboardCheck,
			title: 'Süreç Yönetimi',
			desc: 'Baştan sona süreç takibi',
			gradient: 'from-primary/80 to-primary',
			href: '/hizmetler#surec'
		}
	];

	const quickLinks = [
		{
			title: 'Hizmetlerimiz',
			desc: 'Kentsel dönüşüm sürecinizi baştan sona yönetiyoruz',
			href: '/hizmetler',
			icon: FileCheck
		},
		{
			title: 'Devlet Destekleri',
			desc: 'Hibe, kredi ve kira destekleri hakkında bilgi alın',
			href: '/hizmetler#destekler',
			icon: Building2
		},
		{
			title: 'Ekibimiz',
			desc: 'Uzman kadromuzla tanışın',
			href: '/ekibimiz',
			icon: Users
		}
	];
</script>

<svelte:head>
	<title>Sistem Kentsel Dönüşüm | Güvenilir Kentsel Dönüşüm Danışmanlığı</title>
	<meta
		name="description"
		content="Kentsel dönüşüm sürecinde güvenilir danışmanlık hizmeti. Hukuki destek, mimari danışmanlık ve gayrimenkul değerleme ile yanınızdayız."
	/>
	<meta
		name="keywords"
		content="kentsel dönüşüm, dönüşüm danışmanlığı, riskli yapı, İstanbul, deprem, yenileme"
	/>
	<link rel="canonical" href="https://sistemkentseldonusum.com" />
	<meta property="og:title" content="Sistem Kentsel Dönüşüm | Güvenilir Kentsel Dönüşüm Danışmanlığı" />
	<meta property="og:description" content="Kentsel dönüşüm sürecinde güvenilir danışmanlık hizmeti." />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="tr_TR" />
	<meta property="og:url" content="https://sistemkentseldonusum.com" />
</svelte:head>

<!-- Hero Section - Clean and Minimal -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden -mt-[88px]">
	<!-- Background Image with elegant overlay -->
	<div class="absolute inset-0 z-0">
		<img
			src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2942&auto=format&fit=crop"
			alt="İstanbul Boğaz Köprüsü"
			class="w-full h-full object-cover"
			loading="eager"
		/>
		<!-- Clean dark overlay -->
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 container mx-auto px-4 text-center pt-20">
		<!-- Subtle badge -->
		<div class="fade-in-up fade-in-delay-1 mb-8">
			<span
				class="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium"
			>
				Kentsel Dönüşüm Danışmanlığı
			</span>
		</div>

		<!-- Main heading - Clean typography -->
		<h1
			class="fade-in-up fade-in-delay-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 leading-[1.1] tracking-tight"
		>
			Dönüşüm
			<span class="relative inline-block ml-1 sm:ml-2">
				<span class="text-white">Seninle…</span>
				<!-- Animated underline - 4.5s animation -->
				<svg
					class="absolute -bottom-3 left-0 w-full h-5"
					viewBox="0 0 200 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 8C50 2 150 2 198 8"
						stroke="currentColor"
						stroke-width="4"
						stroke-linecap="round"
						class="text-white line-draw"
						style="stroke-dasharray: 200; stroke-dashoffset: 200;"
					/>
				</svg>
			</span>
		</h1>

		<!-- Subheading -->
		<p
			class="fade-in-up fade-in-delay-3 text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
		>
			Şehrinizi birlikte dönüştürüyoruz. Modern ve depreme dayanıklı yapılar için yanınızdayız.
		</p>

		<!-- CTA Buttons - Minimal -->
		<div class="fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style="animation-delay: 0.4s; opacity: 0;">
			<Button
				size="lg"
				class="bg-white text-foreground hover:bg-white/95 font-medium text-base px-8 py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] group"
			>
				<Phone class="h-5 w-5 mr-2" />
				Ücretsiz Ön Görüşme
				<ArrowRight class="h-5 w-5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
			</Button>
			<a
				href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20kentsel%20d%C3%B6n%C3%BC%C5%9F%C3%BCm%20dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 font-medium text-base px-8 py-3 rounded-xl backdrop-blur-sm transition-all duration-300"
			>
				<MessageCircle class="h-5 w-5 mr-2" />
				WhatsApp
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
		<a
			href="#trust"
			class="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300"
		>
			<span class="text-[11px] uppercase tracking-[0.2em] font-medium">Keşfet</span>
			<ChevronDown class="h-4 w-4 animate-bounce" />
		</a>
	</div>
</section>

<!-- Trust Strip - Premium cards -->
<section id="trust" class="py-16 md:py-24 lg:py-32 relative overflow-hidden">
	<!-- Background decorative elements -->
	<div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"></div>

	<!-- Floating shapes - hidden on mobile -->
	<div class="hidden md:block absolute top-20 left-[10%] w-48 lg:w-72 h-48 lg:h-72 bg-primary/5 rounded-full blur-3xl"></div>
	<div class="hidden md:block absolute bottom-20 right-[10%] w-64 lg:w-96 h-64 lg:h-96 bg-teal/5 rounded-full blur-3xl"></div>

	<div class="container mx-auto px-4 relative z-10">
		<!-- Header with accent -->
		<div class="text-center mb-10 md:mb-16" use:animate={{ type: 'fade-up' }}>
			<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
				<div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
				<span class="text-sm font-medium text-primary">Neden Biz?</span>
			</div>
			<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
				Güvenilir <span class="text-primary">Danışmanlık</span>
			</h2>
			<p class="text-muted-foreground mt-4 max-w-xl mx-auto">
				Kentsel dönüşüm sürecinizde yanınızda olan uzman ekibimiz
			</p>
		</div>

		<!-- Cards grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
			{#each trustItems as item, i}
				<a
					use:animate={{ type: 'fade-up', delay: stagger(i, 100) }}
					href={item.href}
					class="group relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden cursor-pointer"
				>
					<!-- Subtle gradient glow on hover -->
					<div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

					<!-- Number indicator -->
					<div class="absolute top-4 right-4 text-5xl font-bold text-primary/[0.06] group-hover:text-primary/10 transition-colors duration-300">
						0{i + 1}
					</div>

					<!-- Icon with gradient background -->
					<div
						class="relative w-14 h-14 rounded-2xl bg-gradient-to-br {item.gradient} flex items-center justify-center mb-5 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300"
					>
						<item.icon class="h-7 w-7 text-white" />
					</div>

					<!-- Content -->
					<h3 class="relative font-semibold text-lg text-foreground mb-2">
						{item.title}
					</h3>
					<p class="relative text-muted-foreground text-sm leading-relaxed">{item.desc}</p>

					<!-- Subtle arrow on hover -->
					<div class="relative mt-4 flex items-center gap-1.5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
						<span class="text-sm font-medium">Detaylar</span>
						<ArrowRight class="h-4 w-4" />
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Pricing Section - With Background -->
<section class="py-16 md:py-24 lg:py-32 relative overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img
			src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2865&auto=format&fit=crop"
			alt="Modern apartment interior"
			class="w-full h-full object-cover"
			loading="lazy"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-white via-white/98 to-white/90"></div>
	</div>

	<!-- Decorative elements - hidden on mobile -->
	<div class="hidden md:block absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-primary/5 rounded-full blur-3xl"></div>
	<div class="hidden md:block absolute bottom-0 left-1/4 w-48 lg:w-64 h-48 lg:h-64 bg-teal/5 rounded-full blur-3xl"></div>

	<div class="container mx-auto px-4 relative">
		<div class="max-w-5xl mx-auto">
			<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<!-- Left content -->
				<div use:animate={{ type: 'fade-right' }}>
					<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
						<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
						<span class="text-sm font-medium text-primary">Danışmanlık Paketi</span>
					</div>
					<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
						Daire Başına
						<span class="block text-primary">2.999 TL</span>
					</h2>
					<p class="text-muted-foreground text-lg mb-8 leading-relaxed">
						Kentsel dönüşüm sürecinizde ihtiyacınız olan tüm hizmetler tek bir pakette.
						<span class="text-primary font-medium">Ön görüşme ücretsizdir.</span>
					</p>
					<div class="flex flex-col sm:flex-row gap-3">
						<Button
							size="lg"
							class="bg-gradient-to-r from-primary to-purple hover:opacity-90 text-white font-semibold px-6 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] group"
							href="/hizmetler"
						>
							Detaylı Bilgi
							<ArrowRight class="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
						</Button>
						<Button
							variant="outline"
							size="lg"
							class="border-2 border-border font-medium rounded-xl group hover:border-primary/50"
							href="/iletisim"
						>
							İletişime Geç
						</Button>
					</div>
				</div>

				<!-- Right - Quick links -->
				<div class="space-y-3">
					{#each quickLinks as link, i}
						<a
							use:animate={{ type: 'fade-left', delay: stagger(i, 100) }}
							href={link.href}
							class="group flex items-center gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-premium hover:bg-white transition-all duration-300"
						>
							<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-purple/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-purple/20 transition-colors duration-300">
								<link.icon class="h-5 w-5 text-primary" />
							</div>
							<div class="flex-1 min-w-0">
								<h3 class="font-semibold text-foreground mb-0.5 group-hover:text-primary transition-colors duration-300">
									{link.title}
								</h3>
								<p class="text-sm text-muted-foreground truncate">{link.desc}</p>
							</div>
							<ArrowRight class="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section - Premium Design -->
<section class="py-16 md:py-24 lg:py-28">
	<div class="container mx-auto px-4">
		<div class="relative max-w-5xl mx-auto" use:animate={{ type: 'scale-up' }}>
			<!-- Main CTA Card -->
			<div class="relative overflow-hidden rounded-2xl md:rounded-3xl">
				<!-- Background Image -->
				<div class="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2940&auto=format&fit=crop"
						alt="Modern cityscape"
						class="w-full h-full object-cover"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-purple/85"></div>
				</div>

				<!-- Decorative Elements - hidden on mobile -->
				<div class="hidden md:block absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
				<div class="hidden md:block absolute bottom-0 left-0 w-48 lg:w-64 h-48 lg:h-64 bg-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

				<!-- Content -->
				<div class="relative px-5 py-10 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
					<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<!-- Left Side - Text -->
						<div>
							<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 md:mb-6">
								<div class="w-2 h-2 rounded-full bg-teal animate-pulse"></div>
								<span class="text-white/90 text-sm font-medium">Ücretsiz Ön Görüşme</span>
							</div>
							<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
								Dönüşüme bugün
								<span class="text-teal">başlayın</span>
							</h2>
							<p class="text-white/80 text-lg leading-relaxed mb-8">
								Uzman ekibimiz size özel çözümler sunmak için hazır.
								İlk görüşme tamamen ücretsiz.
							</p>

							<!-- Trust Points -->
							<div class="flex flex-wrap gap-4 text-white/70 text-sm">
								<div class="flex items-center gap-2">
									<div class="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
										<svg class="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
										</svg>
									</div>
									7/24 Destek
								</div>
								<div class="flex items-center gap-2">
									<div class="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
										<svg class="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
										</svg>
									</div>
									Tüm Türkiye
								</div>
								<div class="flex items-center gap-2">
									<div class="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
										<svg class="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
										</svg>
									</div>
									Uzman Kadro
								</div>
							</div>
						</div>

						<!-- Right Side - Action Card -->
						<div class="lg:pl-8">
							<div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8">
								<h3 class="text-white font-semibold text-xl mb-6">Hemen İletişime Geçin</h3>

								<!-- CTA Buttons -->
								<div class="space-y-3">
									<a
										href="/iletisim"
										class="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white text-foreground font-semibold text-base hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] shadow-lg group"
									>
										<Phone class="h-5 w-5" />
										Ücretsiz Ön Görüşme
										<ArrowRight class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
									</a>
									<a
										href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20kentsel%20d%C3%B6n%C3%BC%C5%9F%C3%BCm%20dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
										target="_blank"
										rel="noopener noreferrer"
										class="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] text-white font-semibold text-base hover:bg-[#22c55e] transition-all duration-300 hover:scale-[1.02] shadow-lg"
									>
										<MessageCircle class="h-5 w-5" />
										WhatsApp ile Yazın
									</a>
								</div>

								<p class="text-white/50 text-sm text-center mt-6">
									Mesai saatleri: Pazartesi - Cuma, 09:00 - 18:00
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
