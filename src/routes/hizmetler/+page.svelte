<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { animate, stagger } from '$lib/actions/animate';
	import {
		Phone,
		ArrowRight,
		Check,
		Building2,
		Users,
		Scale,
		Ruler,
		FileText,
		ClipboardCheck,
		Sparkles,
		Home,
		Briefcase,
		PiggyBank,
		HandshakeIcon,
		Info
	} from 'lucide-svelte';

	const processSteps = [
		{
			step: 1,
			title: 'Ücretsiz Ön Görüşme',
			desc: 'Pozisyonunuzu değerlendirir, süreç hakkında bilgilendirme yaparız.',
			icon: Phone
		},
		{
			step: 2,
			title: 'Riskli Yapı Tespiti',
			desc: 'Binanızın durumunu inceler, riskli yapı tespiti ve ihtimaller hakkında bilgilendirme yaparız.',
			icon: ClipboardCheck
		},
		{
			step: 3,
			title: 'Firma Seçimi',
			desc: 'Mimari proje desteği verip, projenize en uygun yüklenici firmaları sizlere sunarız.',
			icon: Users
		},
		{
			step: 4,
			title: 'Sözleşme & Takip',
			desc: 'Talepleriniz doğrultusunda sözleşmeyi hazırlar, haklarınızı güvence altına alır, inşaat sürecinizi takip ederiz.',
			icon: FileText
		}
	];

	const services = [
		{
			id: 'hukuki',
			title: 'Hukuki Destek',
			desc: 'Arsa payı karşılığı inşaat sözleşmesi ve teminatlar konusunda hukuki destek.',
			icon: Scale,
			color: 'from-primary to-purple'
		},
		{
			id: 'mimari',
			title: 'Mimari Destek',
			desc: 'Yeni yapılacak bina için mimari proje değerlendirmesi ve optimum çözüm önerileri.',
			icon: Ruler,
			color: 'from-teal to-primary'
		},
		{
			id: 'degerleme',
			title: 'Değerleme Desteği',
			desc: 'Kat malikleri ve yüklenici firma arasındaki dağılım için profesyonel gayrimenkul değerleme.',
			icon: Building2,
			color: 'from-purple to-primary'
		},
		{
			id: 'surec',
			title: 'Süreç Yönetimi',
			desc: '6306 sayılı yasa kapsamında tüm süreçlerin takibi ve ihtilaflara çözüm önerileri.',
			icon: FileText,
			color: 'from-primary to-teal'
		},
		{
			id: 'destekler',
			title: 'Kredi - Hibe Desteği, Kira Yardımı',
			desc: 'Hak sahiplerinin kentsel dönüşüm sürecinde faydalanabileceği devlet desteklerinin takibi ve başvurusu.',
			icon: PiggyBank,
			color: 'from-teal to-purple'
		}
	];

	const packageItems = [
		'Yüklenici firma taraması',
		'Mimari proje desteği (mimar)',
		'Gayrimenkul değerleme desteği',
		'Yüklenici ve paydaşlar arasındaki oransal dağılım',
		'Kira yardımı, hibe desteği, kredi destekleri',
		'Kat karşılığı inşaat sözleşmesi (avukat)',
		'Riskli yapı tespit süreci',
		'Ortaklar kurulu kararı süreci',
		"Sözleşmeye katılmayan paydaşların hisselerinin satışı",
		'Haciz/şerh/ipotek/intifa hakkı bulunan taşınmazların durumlarının çözülmesi',
		'Mirasçısı belirsiz veya çok mirasçılı yerlerin çözümü'
	];

	const supports = [
		{
			title: 'Yarısı Bizden',
			badge: 'İstanbul',
			badgeColor: 'bg-primary/10 text-primary',
			items: [
				{ type: 'Konut', icon: Home, hibe: '850.000 TL', kredi: '850.000 TL', extra: '125.000 TL taşınma' },
				{ type: 'İş yeri', icon: Briefcase, hibe: '437.500 TL', kredi: '437.500 TL', extra: null }
			],
			note: 'Sadece İstanbul riskli yapılar için geçerlidir.'
		},
		{
			title: 'Yerinde Dönüşüm',
			badge: '18 İl',
			badgeColor: 'bg-teal/10 text-teal',
			items: [
				{ type: 'Konut', icon: Home, hibe: '750.000 TL', kredi: '750.000 TL', extra: null },
				{ type: 'İş yeri', icon: Briefcase, hibe: '400.000 TL', kredi: '400.000 TL', extra: null }
			],
			note: '6 Şubat 2023 depreminden etkilenen 18 il için geçerlidir.'
		}
	];

	const additionalSupports = [
		{
			title: 'Kira Desteği',
			icon: PiggyBank,
			desc: 'Bakanlık ve belediye destekleri farklılık gösterir. İle göre değişir ve yıllık güncellenir.'
		},
		{
			title: 'Kredi Desteği',
			icon: HandshakeIcon,
			desc: 'Bakanlık yıllık 840 baz puan (azami 1.250.000 TL). Pilot bölgeler: 3.000.000 TL\'ye kadar.'
		}
	];
</script>

<svelte:head>
	<title>Hizmetler & Destekler | Sistem Kentsel Dönüşüm</title>
	<meta
		name="description"
		content="Kentsel dönüşüm danışmanlık hizmetlerimiz ve devlet destekleri. Hukuki destek, mimari danışmanlık, değerleme, hibeler ve krediler."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative py-20 md:py-32 overflow-hidden">
	<div class="absolute inset-0">
		<img
			src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop"
			alt="Construction site"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-deep-blue/95 via-primary/85 to-purple/80"></div>
	</div>

	<div class="container mx-auto px-4 relative">
		<div class="max-w-3xl">
			<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
				Hizmetler & Destekler
			</span>
			<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
				Kentsel Dönüşümde <span class="text-teal">A'dan Z'ye</span> Yanınızdayız
			</h1>
			<p class="text-lg md:text-xl text-white/80 leading-relaxed">
				Profesyonel danışmanlık hizmeti, hibe, kredi ve kira yardımı hakkında bilgi alın.
			</p>
		</div>
	</div>
</section>

<!-- Process Steps - Timeline -->
<section class="py-20 md:py-28">
	<div class="container mx-auto px-4">
		<div class="text-center mb-10 md:mb-16" use:animate={{ type: 'fade-up' }}>
			<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
				Süreç
			</span>
			<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
				Nasıl Çalışıyoruz?
			</h2>
		</div>

		<div class="max-w-5xl mx-auto">
			<!-- Timeline -->
			<div class="relative">
				<!-- Horizontal dotted line (desktop) -->
				<div class="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px border-t-2 border-dashed border-border"></div>

				<div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-10">
					{#each processSteps as step, i}
						<div class="relative" use:animate={{ type: 'fade-up', delay: stagger(i, 150) }}>
							<!-- Vertical dotted line (mobile) -->
							{#if i < processSteps.length - 1}
								<div class="lg:hidden absolute top-16 left-6 w-px h-[calc(100%+2rem)] border-l-2 border-dashed border-border"></div>
							{/if}

							<!-- Step indicator -->
							<div class="relative z-10 flex lg:justify-center mb-6">
								<div class="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
									<step.icon class="h-7 w-7 text-primary" />
								</div>
							</div>

							<!-- Content -->
							<div class="lg:text-center pl-20 lg:pl-0">
								<span class="inline-block text-xs font-bold text-primary mb-2">ADIM {step.step}</span>
								<h3 class="font-semibold text-lg text-foreground mb-2">
									{step.title}
								</h3>
								<p class="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services - Bento Grid -->
<section id="hizmetler" class="py-20 md:py-28 bg-[#fafafa] scroll-mt-24">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12" use:animate={{ type: 'fade-up' }}>
			<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
				Hizmetlerimiz
			</span>
			<h2 class="text-3xl md:text-4xl font-bold text-foreground">
				Danışmanlık Hizmetleri
			</h2>
		</div>

		<div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
			{#each services as service, i}
				<div
					use:animate={{ type: 'fade-up', delay: stagger(i, 100) }}
					id={service.id}
					class="group relative p-6 lg:p-8 rounded-3xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 scroll-mt-32 {i === services.length - 1 && services.length % 2 === 1 ? 'md:col-span-2 md:max-w-[calc(50%-0.625rem)] md:mx-auto' : ''}"
				>
					<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl {service.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500"></div>
					<div class="relative flex items-start gap-5">
						<div class="w-14 h-14 rounded-2xl bg-gradient-to-br {service.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
							<service.icon class="h-7 w-7 text-white" />
						</div>
						<div class="flex-1">
							<h3 class="font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
								{service.title}
							</h3>
							<p class="text-muted-foreground leading-relaxed">{service.desc}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Package -->
<section class="py-20 md:py-28">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12" use:animate={{ type: 'fade-up' }}>
			<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
				<Sparkles class="h-4 w-4" />
				Danışmanlık Paketi
			</span>
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
				Hepsi Dahil <span class="text-primary">Tek Paket</span>
			</h2>
			<p class="text-muted-foreground text-lg">Ön görüşme ücretsizdir</p>
		</div>

		<div class="max-w-4xl mx-auto" use:animate={{ type: 'scale-up', delay: 100 }}>
			<div class="overflow-hidden rounded-3xl border-2 border-primary/20 shadow-xl">
				<div class="bg-gradient-to-r from-primary via-purple to-primary text-white text-center py-10 px-8">
					<p class="text-lg mb-2 opacity-90">Daire Başına</p>
					<div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">2.999 TL</div>
					<p class="text-sm opacity-75">KDV Dahil</p>
				</div>
				<div class="p-8 md:p-10 bg-white">
					<div class="grid sm:grid-cols-2 gap-4">
						{#each packageItems as item}
							<div class="flex items-start gap-3 group">
								<div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
									<Check class="h-4 w-4 text-primary" />
								</div>
								<span class="text-muted-foreground text-sm leading-relaxed">{item}</span>
							</div>
						{/each}
					</div>
				</div>
				<div class="flex justify-center pb-10 px-8 bg-white">
					<Button
						size="lg"
						class="bg-gradient-to-r from-primary to-purple hover:opacity-90 text-white font-semibold px-12 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] group"
						href="/iletisim"
					>
						<Phone class="h-5 w-5 mr-2" />
						Hemen Başvur
						<ArrowRight class="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Supports Section -->
<section id="destekler" class="py-20 md:py-28 bg-[#fafafa] scroll-mt-24">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
				<Sparkles class="h-4 w-4" />
				Devlet Destekleri
			</span>
			<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
				Hibe & Kredi Destekleri
			</h2>
			<p class="text-muted-foreground max-w-2xl mx-auto">
				Kentsel dönüşüm için sunulan hibe, kredi ve kira destekleri
			</p>
		</div>

		<!-- Main Support Cards -->
		<div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
			{#each supports as support}
				<div class="rounded-3xl overflow-hidden bg-white border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500">
					<div class="p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-teal/5">
						<div class="flex items-center justify-between">
							<h3 class="text-2xl font-bold text-foreground">{support.title}</h3>
							<span class="px-3 py-1 rounded-full text-sm font-medium {support.badgeColor}">
								{support.badge}
							</span>
						</div>
					</div>
					<div class="p-6 space-y-4">
						{#each support.items as item}
							<div class="group flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300">
								<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-teal/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-teal/20 transition-all duration-300">
									<item.icon class="h-5 w-5 text-primary" />
								</div>
								<div class="flex-1">
									<span class="font-semibold text-foreground">{item.type}</span>
									<div class="text-sm text-muted-foreground mt-0.5">
										<span class="text-primary font-medium">{item.hibe}</span> hibe + <span class="text-primary font-medium">{item.kredi}</span> kredi
										{#if item.extra}
											<span class="text-teal"> + {item.extra}</span>
										{/if}
									</div>
								</div>
							</div>
						{/each}
						<div class="flex items-start gap-2 pt-2">
							<Info class="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
							<p class="text-xs text-muted-foreground italic">{support.note}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional Supports -->
		<div class="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
			{#each additionalSupports as support}
				<div class="group p-6 rounded-2xl bg-white border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-500">
					<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
						<support.icon class="h-6 w-6 text-primary" />
					</div>
					<h3 class="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
						{support.title}
					</h3>
					<p class="text-muted-foreground text-sm leading-relaxed">{support.desc}</p>
				</div>
			{/each}
		</div>

		<p class="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
			<strong>Not:</strong> Destek tutarları yıllık olarak güncellenmektedir. Güncel bilgiler için bizimle iletişime geçin.
		</p>
	</div>
</section>

<!-- CTA -->
<section class="py-20 md:py-28">
	<div class="container mx-auto px-4">
		<div class="max-w-5xl mx-auto">
			<div class="grid md:grid-cols-2 gap-8 items-center">
				<!-- Image -->
				<div class="relative h-72 md:h-96 rounded-3xl overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
						alt="Modern apartment keys"
						class="w-full h-full object-cover"
					/>
				</div>

				<!-- Content -->
				<div class="md:pl-4">
					<p class="text-primary text-sm font-medium mb-3">Ücretsiz Danışmanlık</p>
					<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Hangi desteklerden yararlanabilirsiniz?
					</h2>
					<p class="text-muted-foreground text-lg mb-8 leading-relaxed">
						Durumunuza özel destekleri öğrenmek için ücretsiz ön görüşme talep edin. Uzman ekibimiz size yol göstersin.
					</p>
					<div class="flex flex-col sm:flex-row gap-4">
						<Button
							size="lg"
							class="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 rounded-xl transition-all duration-300 group"
							href="/iletisim"
						>
							Ücretsiz Ön Görüşme
							<ArrowRight class="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
						</Button>
						<Button
							variant="outline"
							size="lg"
							class="border-2 font-semibold px-8 rounded-xl"
							href="/sss"
						>
							SSS'ye Git
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
