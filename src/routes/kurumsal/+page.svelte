<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { animate, stagger } from '$lib/actions/animate';
	import {
		Target,
		Eye,
		ArrowRight
	} from 'lucide-svelte';

	const values = [
		{
			number: '01',
			title: 'Güvenilirlik',
			desc: 'Her zaman dürüst ve şeffaf bir iletişim ile müşterilerimizin yanındayız. Sürecin her aşamasında sizi bilgilendiriyoruz.'
		},
		{
			number: '02',
			title: 'Profesyonellik',
			desc: 'Avukat, mimar ve değerleme uzmanlarından oluşan kadromuzla en yüksek kalitede hizmet sunuyoruz.'
		},
		{
			number: '03',
			title: 'Müşteri Odaklılık',
			desc: 'İhtiyaçlarınızı anlıyor, size özel çözümler üretiyoruz. 7/24 WhatsApp desteği ile her zaman ulaşılabilir durumdayız.'
		},
		{
			number: '04',
			title: 'Uygun Fiyat',
			desc: 'Daire başına 2.999 TL ile sektördeki en rekabetçi fiyatı sunuyoruz. Şeffaf fiyatlandırma, gizli maliyet yok.'
		}
	];
</script>

<svelte:head>
	<title>Kurumsal | Sistem Kentsel Dönüşüm</title>
	<meta name="description" content="Sistem Kentsel Dönüşüm hakkında. Vizyonumuz, misyonumuz ve değerlerimiz. Güvenilir kentsel dönüşüm danışmanlığı." />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<link rel="canonical" href="https://www.sistemkentseldonusum.com/kurumsal" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.sistemkentseldonusum.com/kurumsal" />
	<meta property="og:title" content="Kurumsal | Sistem Kentsel Dönüşüm" />
	<meta property="og:description" content="Sistem Kentsel Dönüşüm hakkında. Vizyonumuz, misyonumuz ve değerlerimiz." />
	<meta property="og:image" content="https://www.sistemkentseldonusum.com/og-image.jpg" />
	<meta property="og:site_name" content="Sistem Kentsel Dönüşüm" />
	<meta property="og:locale" content="tr_TR" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Kurumsal | Sistem Kentsel Dönüşüm" />
	<meta name="twitter:description" content="Sistem Kentsel Dönüşüm hakkında. Vizyonumuz, misyonumuz ve değerlerimiz." />
	<meta name="twitter:image" content="https://www.sistemkentseldonusum.com/og-image.jpg" />
</svelte:head>

<!-- Hero with background image -->
<section class="relative py-20 md:py-32 overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img
			src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop"
			alt="Construction workers on site"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-deep-blue/95 via-primary/85 to-purple/80"></div>
	</div>

	<div class="container mx-auto px-4 relative">
		<div class="max-w-3xl">
			<span use:animate={{ type: 'fade-up' }} class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
				Hakkımızda
			</span>
			<h1 use:animate={{ type: 'fade-up', delay: 100 }} class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
				Kentsel Dönüşümde <span class="text-teal">Güvenilir</span> Ortağınız
			</h1>
			<p use:animate={{ type: 'fade-up', delay: 200 }} class="text-lg md:text-xl text-white/80 leading-relaxed">
				Uzman kadromuzla kentsel dönüşüm sürecinizde yanınızdayız. Hukuki, mimari ve finansal danışmanlık hizmetlerimizle güvenle adım atın.
			</p>
		</div>
	</div>
</section>

<!-- Vision & Mission -->
<section class="py-20 md:py-28">
	<div class="container mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			<div use:animate={{ type: 'fade-right' }} class="h-full">
			<Card.Root class="group h-full p-6 md:p-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 hover:shadow-premium transition-all duration-500">
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<Eye class="h-7 w-7 text-white" />
				</div>
				<h2 class="text-2xl font-bold text-foreground mb-4">Vizyonumuz</h2>
				<p class="text-muted-foreground leading-relaxed">
					Kentsel dönüşümü sadece inşaat yapmak değil, yaşam standardının iyileştirilmesi olarak
					gören bir anlayışla; toplumun her kesimine faydalı olacak projeler üretmeyi, kentsel
					dönüşüme yön veren bir kuruluş olmayı hedefliyoruz.
				</p>
			</Card.Root>
			</div>

			<div use:animate={{ type: 'fade-left', delay: 100 }} class="h-full">
			<Card.Root class="group h-full p-6 md:p-8 rounded-2xl border-2 border-purple/20 bg-gradient-to-br from-purple/5 to-transparent hover:border-purple/40 hover:shadow-premium transition-all duration-500">
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-purple to-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<Target class="h-7 w-7 text-white" />
				</div>
				<h2 class="text-2xl font-bold text-foreground mb-4">Misyonumuz</h2>
				<p class="text-muted-foreground leading-relaxed">
					Kentsel dönüşüm sürecinde kat malikleri ve yüklenici firma arasında köprü kurmak, kat
					maliklerine sözleşme, mevzuat, mimari konularda destek sağlayarak ortak zemin yaratmak.
				</p>
			</Card.Root>
			</div>
		</div>
	</div>
</section>

<!-- Neden Biz - Clean numbered list -->
<section class="py-20 md:py-28 bg-muted/30">
	<div class="container mx-auto px-4">
		<div class="max-w-5xl mx-auto">
			<!-- Header -->
			<div class="text-center mb-16" use:animate={{ type: 'fade-up' }}>
				<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
					Neden Biz?
				</span>
				<h2 class="text-3xl md:text-4xl font-bold text-foreground">
					Bizi Farklı Kılan Değerler
				</h2>
			</div>

			<!-- Values Grid -->
			<div class="grid md:grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-8 md:gap-y-12">
				{#each values as value, i}
					<div class="group" use:animate={{ type: 'fade-up', delay: stagger(i, 100) }}>
						<div class="flex items-start gap-3 sm:gap-5">
							<span class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 shrink-0">
								{value.number}
							</span>
							<div class="pt-1 sm:pt-2 min-w-0">
								<h3 class="text-lg sm:text-xl font-semibold text-foreground mb-2 break-words">
									{value.title}
								</h3>
								<p class="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
									{value.desc}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Team CTA -->
<section class="py-20 md:py-28">
	<div class="container mx-auto px-4">
		<div class="max-w-5xl mx-auto" use:animate={{ type: 'scale-up' }}>
			<a
				href="/ekibimiz"
				class="group block rounded-3xl overflow-hidden bg-foreground hover:ring-2 hover:ring-white/10 hover:ring-offset-4 hover:ring-offset-background transition-all duration-300"
			>
				<div class="grid md:grid-cols-2">
					<!-- Image -->
					<div class="relative h-64 md:h-80 overflow-hidden">
						<img
							src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
							alt="Professional team meeting"
							class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
						/>
						<div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-foreground/80 via-foreground/20 to-transparent"></div>
					</div>

					<!-- Content -->
					<div class="p-8 md:p-12 flex flex-col justify-center">
						<p class="text-teal text-sm font-medium mb-3">Uzman Kadro</p>
						<h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
							Ekibimizle tanışın
						</h2>
						<p class="text-white/60 mb-8 leading-relaxed">
							Avukat, mimar ve değerleme uzmanlarından oluşan deneyimli kadromuz sizin için çalışıyor.
						</p>
						<div class="inline-flex items-center gap-2 text-white font-medium">
							<span class="border-b border-transparent group-hover:border-white transition-all duration-300">Ekibi gör</span>
							<ArrowRight class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>
</section>
