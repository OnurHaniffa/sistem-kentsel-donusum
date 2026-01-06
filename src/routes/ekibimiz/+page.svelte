<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion';
	import { animate, stagger } from '$lib/actions/animate';
	import {
		ArrowRight,
		Scale,
		Ruler,
		Users,
		Calculator,
		Phone
	} from 'lucide-svelte';

	const team = [
		{
			name: 'Semih Tigün DAĞCI',
			role: 'Mimar',
			icon: Ruler,
			desc: 'Kentsel dönüşüm projelerinde mimari tasarım ve danışmanlık',
			color: 'bg-primary'
		},
		{
			name: 'Furkan AKDENİZ',
			role: 'Avukat',
			icon: Scale,
			desc: 'Kat karşılığı inşaat sözleşmeleri ve hukuki süreç yönetimi',
			color: 'bg-[#4f46e5]'
		},
		{
			name: 'Ali DEMİR',
			role: 'Eğitmen',
			icon: Users,
			desc: 'Kentsel dönüşüm eğitimleri ve bilgilendirme seminerleri',
			color: 'bg-teal'
		},
		{
			name: 'Cenk YILDIZ',
			role: 'Gayrimenkul Değerleme Uzmanı',
			icon: Calculator,
			desc: 'Taşınmaz değerleme ve pay dağılımı hesaplamaları',
			color: 'bg-primary'
		},
		{
			name: 'Furkan AKTAN',
			role: 'Gayrimenkul Değerleme Uzmanı',
			icon: Calculator,
			desc: 'Taşınmaz değerleme ve pay dağılımı hesaplamaları',
			color: 'bg-teal'
		}
	];

	const faqs = [
		{
			question: 'Hangi şehirlerde hizmet veriyorsunuz?',
			answer: 'İstanbul ve Kocaeli için yüz yüze + online hizmet veriyoruz. Diğer şehirler için online danışmanlık hizmeti sunuyoruz.'
		},
		{
			question: 'Arsa tapulu olmam engel mi?',
			answer: 'Arsa tapulu olması engel değildir. Ancak desteklerden yararlanma durumu farklılık gösterebilir.'
		},
		{
			question: 'Hangi binalar için geçerli?',
			answer: 'Riskli tüm yapılar için geçerlidir. Binanızın riskli yapı olarak tespit edilmesi gerekmektedir.'
		},
		{
			question: 'Karar için kaç kişinin onayı gerekiyor?',
			answer: 'Salt çoğunluk (%50+1) yeterlidir. Ortaklar kurulu kararı için arsa payı çoğunluğu aranır.'
		},
		{
			question: 'Binamın ruhsatı yok, başvurabilir miyim?',
			answer: 'Ruhsat şart değildir. Riskli yapı olarak tespit edilmesi yeterlidir, yeni bina ruhsatlı olacaktır.'
		},
		{
			question: 'Danışmanlık ücreti ne zaman ödenir?',
			answer: 'İlk görüşme ücretsizdir. Danışmanlık ücreti, hizmet sözleşmesi imzalandıktan sonra belirlenen takvime göre ödenir.'
		},
		{
			question: 'Süreç ne kadar sürer?',
			answer: 'Süreç, binanın durumuna ve kat maliklerinin kararlarına göre değişiklik gösterir. Ortalama 18-24 ay sürmektedir.'
		},
		{
			question: 'Müteahhit seçiminde nelere dikkat edilmeli?',
			answer: 'Firmanın geçmiş projeleri, mali durumu, referansları ve teminat koşulları değerlendirilmelidir. Bu konuda size detaylı rapor sunuyoruz.'
		},
		{
			question: 'Sözleşmede nelere dikkat etmeliyim?',
			answer: 'Teslim süresi, cezai şartlar, teminatlar, daire dağılımı ve teknik şartname en önemli maddelerdir. Avukatımız bu konuda size destek olur.'
		},
		{
			question: 'Kiracıyım, süreçte haklarım neler?',
			answer: 'Kiracılar için taşınma yardımı ve öncelikli kiralama hakkı bulunmaktadır. Detaylı bilgi için görüşme talep edebilirsiniz.'
		}
	];
</script>

<svelte:head>
	<title>Ekibimiz & SSS | Sistem Kentsel Dönüşüm</title>
	<meta
		name="description"
		content="Sistem Kentsel Dönüşüm uzman kadrosu ve sıkça sorulan sorular. Mimar, avukat, değerleme uzmanı ve eğitmenlerimizle tanışın."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative py-20 md:py-32 overflow-hidden">
	<div class="absolute inset-0">
		<img
			src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
			alt="Team collaboration"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-deep-blue/95 via-primary/85 to-purple/80"></div>
	</div>

	<div class="container mx-auto px-4 relative">
		<div class="max-w-3xl">
			<span use:animate={{ type: 'fade-up' }} class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
				Ekibimiz
			</span>
			<h1 use:animate={{ type: 'fade-up', delay: 100 }} class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
				<span class="text-teal">Uzman</span> Kadromuz
			</h1>
			<p use:animate={{ type: 'fade-up', delay: 200 }} class="text-lg md:text-xl text-white/80 leading-relaxed">
				Alanında deneyimli profesyonellerden oluşan ekibimizle kentsel dönüşüm sürecinizde yanınızdayız.
			</p>
		</div>
	</div>
</section>

<!-- Team Grid -->
<section class="py-20 md:py-28">
	<div class="container mx-auto px-4">
		<!-- First row: 3 cards -->
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
			{#each team.slice(0, 3) as member, i}
				<div use:animate={{ type: 'fade-up', delay: stagger(i, 100) }}>
				<Card.Root class="group overflow-hidden rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
					<!-- Avatar -->
					<div class="relative h-36 sm:h-44 {member.color} flex items-center justify-center">
						<div class="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
							<member.icon class="h-10 w-10 text-white" />
						</div>
					</div>

					<Card.Content class="p-6 text-center">
						<h3 class="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
							{member.name}
						</h3>
						<p class="text-primary font-medium text-sm mb-3">{member.role}</p>
						<p class="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
					</Card.Content>
				</Card.Root>
				</div>
			{/each}
		</div>

		<!-- Second row: 2 cards centered -->
		<div class="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
			{#each team.slice(3) as member, i}
				<div use:animate={{ type: 'fade-up', delay: stagger(i + 3, 100) }}>
				<Card.Root class="group overflow-hidden rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
					<!-- Avatar -->
					<div class="relative h-36 sm:h-44 {member.color} flex items-center justify-center">
						<div class="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
							<member.icon class="h-10 w-10 text-white" />
						</div>
					</div>

					<Card.Content class="p-6 text-center">
						<h3 class="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
							{member.name}
						</h3>
						<p class="text-primary font-medium text-sm mb-3">{member.role}</p>
						<p class="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
					</Card.Content>
				</Card.Root>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- SSS Section -->
<section id="sss" class="py-20 md:py-28 bg-muted/30 border-y border-border scroll-mt-24">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12" use:animate={{ type: 'fade-up' }}>
				<p class="text-primary text-sm font-medium mb-3">SSS</p>
				<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
					Sıkça Sorulan Sorular
				</h2>
			</div>

			<div class="grid md:grid-cols-2 gap-4">
				<!-- Left column -->
				<div use:animate={{ type: 'fade-right' }}>
				<Accordion.Root type="single" class="w-full space-y-3">
					{#each faqs.slice(0, 5) as faq, i}
						<Accordion.Item
							value="item-{i}"
							class="bg-background rounded-xl border border-border/50 overflow-hidden hover:border-primary/20 transition-all duration-300 data-[state=open]:border-primary/30"
						>
							<Accordion.Trigger
								class="flex w-full items-center justify-between px-6 py-4 text-left hover:no-underline group"
							>
								<span class="font-medium text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
									{faq.question}
								</span>
							</Accordion.Trigger>
							<Accordion.Content class="px-6 pb-4">
								<p class="text-muted-foreground leading-relaxed">{faq.answer}</p>
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
				</div>

				<!-- Right column -->
				<div use:animate={{ type: 'fade-left', delay: 100 }}>
				<Accordion.Root type="single" class="w-full space-y-3">
					{#each faqs.slice(5, 10) as faq, i}
						<Accordion.Item
							value="item-{i + 5}"
							class="bg-background rounded-xl border border-border/50 overflow-hidden hover:border-primary/20 transition-all duration-300 data-[state=open]:border-primary/30"
						>
							<Accordion.Trigger
								class="flex w-full items-center justify-between px-6 py-4 text-left hover:no-underline group"
							>
								<span class="font-medium text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
									{faq.question}
								</span>
							</Accordion.Trigger>
							<Accordion.Content class="px-6 pb-4">
								<p class="text-muted-foreground leading-relaxed">{faq.answer}</p>
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-20 md:py-28">
	<div class="container mx-auto px-4">
		<div class="max-w-5xl mx-auto">
			<div class="grid md:grid-cols-2 gap-8 items-center">
				<!-- Image -->
				<div use:animate={{ type: 'fade-right' }} class="relative h-72 md:h-80 rounded-3xl overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
						alt="Modern buildings"
						class="w-full h-full object-cover"
					/>
				</div>

				<!-- Content -->
				<div use:animate={{ type: 'fade-left', delay: 100 }} class="md:pl-4">
					<p class="text-primary text-sm font-medium mb-3">İletişim</p>
					<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Ücretsiz ön görüşme için bize ulaşın
					</h2>
					<p class="text-muted-foreground text-lg mb-8 leading-relaxed">
						Uzman ekibimiz sorularınızı yanıtlamak ve size özel çözümler sunmak için hazır.
					</p>
					<Button
						size="lg"
						class="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 rounded-xl transition-all duration-300 group"
						href="/iletisim"
					>
						<Phone class="h-5 w-5 mr-2" />
						İletişime Geç
						<ArrowRight class="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>
