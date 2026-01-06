<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { toast } from 'svelte-sonner';
	import { animate } from '$lib/actions/animate';
	import {
		Phone,
		MessageCircle,
		MapPin,
		Mail,
		Clock,
		ArrowUpRight
	} from 'lucide-svelte';

	let formData = $state({
		name: '',
		phone: '',
		email: '',
		message: '',
		kvkk: false
	});

	let isSubmitting = $state(false);

	// Validation functions
	function isValidPhone(phone: string): boolean {
		// Turkish phone: 05XX XXX XX XX or +90 5XX XXX XX XX
		const cleaned = phone.replace(/\s/g, '').replace(/-/g, '');
		return /^(\+90|0)?5\d{9}$/.test(cleaned);
	}

	function isValidEmail(email: string): boolean {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();

		// Validate phone
		if (!isValidPhone(formData.phone)) {
			toast.error('Lütfen geçerli bir telefon numarası girin (05XX XXX XX XX)');
			return;
		}

		// Validate email
		if (!formData.email || !isValidEmail(formData.email)) {
			toast.error('Lütfen geçerli bir e-posta adresi girin');
			return;
		}

		if (!formData.kvkk) {
			toast.error('Lütfen KVKK metnini onaylayın');
			return;
		}

		isSubmitting = true;

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: formData.name,
					phone: formData.phone,
					email: formData.email,
					message: formData.message
				})
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Bir hata oluştu');
			}

			toast.success('Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
			formData = { name: '', phone: '', email: '', message: '', kvkk: false };
		} catch (error) {
			toast.error(error instanceof Error ? error.message : 'Mesaj gönderilemedi. Lütfen tekrar deneyin.');
		} finally {
			isSubmitting = false;
		}
	}

	const contactMethods = [
		{
			icon: Phone,
			label: 'Telefon',
			value: '[Telefon eklenecek]',
			href: 'tel:+90XXXXXXXXXX'
		},
		{
			icon: MessageCircle,
			label: 'WhatsApp',
			value: '[WhatsApp eklenecek]',
			href: 'https://wa.me/90XXXXXXXXXX'
		},
		{
			icon: Mail,
			label: 'E-posta',
			value: 'info@sistemkentseldonusum.com',
			href: 'mailto:info@sistemkentseldonusum.com'
		}
	];
</script>

<svelte:head>
	<title>İletişim | Sistem Kentsel Dönüşüm</title>
	<meta name="description" content="Sistem Kentsel Dönüşüm ile iletişime geçin. Ücretsiz ön görüşme için hemen arayın. İstanbul ve Kocaeli'de hizmet veriyoruz." />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<link rel="canonical" href="https://sistemkentseldonusum.com/iletisim" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sistemkentseldonusum.com/iletisim" />
	<meta property="og:title" content="İletişim | Sistem Kentsel Dönüşüm" />
	<meta property="og:description" content="Sistem Kentsel Dönüşüm ile iletişime geçin. Ücretsiz ön görüşme için hemen arayın." />
	<meta property="og:image" content="https://sistemkentseldonusum.com/og-image.jpg" />
	<meta property="og:site_name" content="Sistem Kentsel Dönüşüm" />
	<meta property="og:locale" content="tr_TR" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="İletişim | Sistem Kentsel Dönüşüm" />
	<meta name="twitter:description" content="Sistem Kentsel Dönüşüm ile iletişime geçin. Ücretsiz ön görüşme için hemen arayın." />
	<meta name="twitter:image" content="https://sistemkentseldonusum.com/og-image.jpg" />
</svelte:head>

<!-- Hero Section - Full Width Split -->
<section class="min-h-[90vh] flex items-center relative overflow-hidden">
	<!-- Background gradient -->
	<div class="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-primary/5"></div>

	<!-- Decorative elements - hidden on mobile -->
	<div class="hidden md:block absolute top-20 right-10 lg:right-20 w-48 lg:w-72 h-48 lg:h-72 bg-primary/10 rounded-full blur-3xl"></div>
	<div class="hidden md:block absolute bottom-20 left-10 lg:left-20 w-64 lg:w-96 h-64 lg:h-96 bg-purple/10 rounded-full blur-3xl"></div>

	<div class="container mx-auto px-4 relative z-10">
		<div class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
			<!-- Left - Typography & Info -->
			<div class="space-y-6 md:space-y-8 lg:pl-16 xl:pl-24">
				<div use:animate={{ type: 'fade-up', delay: 0 }}>
					<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
						<Mail class="h-4 w-4" />
						İletişim
					</span>
				</div>

				<h1
					use:animate={{ type: 'fade-up', delay: 100 }}
					class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
				>
					Hayalinizdeki<br />
					<span class="text-primary">eve</span> bir adım
				</h1>

				<p
					use:animate={{ type: 'fade-up', delay: 200 }}
					class="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed"
				>
					Kentsel dönüşüm sürecinizde yanınızdayız. Ücretsiz ön görüşme için hemen iletişime geçin.
				</p>

				<!-- Contact Methods -->
				<div
					use:animate={{ type: 'fade-up', delay: 300 }}
					class="flex flex-wrap gap-3 pt-4"
				>
					{#each contactMethods as method, i}
						<a
							href={method.href}
							class="group flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
						>
							<div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
								<method.icon class="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:text-white transition-colors" />
							</div>
							<div class="text-left min-w-0">
								<p class="text-[10px] sm:text-xs text-muted-foreground">{method.label}</p>
								<p class="text-xs sm:text-sm font-medium text-foreground truncate">{method.value}</p>
							</div>
						</a>
					{/each}
				</div>

				<!-- Working Hours -->
				<div
					use:animate={{ type: 'fade-up', delay: 400 }}
					class="flex items-center gap-3 text-muted-foreground"
				>
					<Clock class="h-5 w-5" />
					<span class="text-sm">Pazartesi - Cuma: 09:00 - 18:00</span>
				</div>
			</div>

			<!-- Right - Form -->
			<div
				use:animate={{ type: 'fade-left', delay: 200 }}
				class="relative"
			>
				<!-- Form Card -->
				<div class="bg-background rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/5 border border-border/50">
					<div class="mb-8">
						<h2 class="text-2xl font-bold text-foreground mb-2">Bize Ulaşın</h2>
						<p class="text-muted-foreground">Formu doldurun, sizi arayalım</p>
					</div>

					<form onsubmit={handleSubmit} class="space-y-5">
						<div class="grid sm:grid-cols-2 gap-4">
							<div class="space-y-2">
								<label for="name" class="text-sm font-medium text-foreground">Ad Soyad</label>
								<Input
									id="name"
									placeholder="Adınız"
									bind:value={formData.name}
									required
									class="h-12 rounded-xl bg-muted/50 border-0 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
								/>
							</div>
							<div class="space-y-2">
								<label for="phone" class="text-sm font-medium text-foreground">Telefon</label>
								<Input
									id="phone"
									type="tel"
									placeholder="05XX XXX XX XX"
									bind:value={formData.phone}
									required
									class="h-12 rounded-xl bg-muted/50 border-0 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
								/>
							</div>
						</div>

						<div class="space-y-2">
							<label for="email" class="text-sm font-medium text-foreground">E-posta <span class="text-primary">*</span></label>
							<Input
								id="email"
								type="email"
								placeholder="ornek@email.com"
								bind:value={formData.email}
								required
								class="h-12 rounded-xl bg-muted/50 border-0 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
							/>
						</div>

						<div class="space-y-2">
							<label for="message" class="text-sm font-medium text-foreground">Mesajınız</label>
							<Textarea
								id="message"
								placeholder="Nasıl yardımcı olabiliriz?"
								bind:value={formData.message}
								rows={4}
								class="rounded-xl bg-muted/50 border-0 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
							/>
						</div>

						<div class="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
							<input
								type="checkbox"
								id="kvkk"
								bind:checked={formData.kvkk}
								class="mt-0.5 h-5 w-5 rounded border-input accent-primary cursor-pointer"
							/>
							<label for="kvkk" class="text-sm text-muted-foreground cursor-pointer leading-relaxed">
								<a href="/kvkk" class="text-primary hover:underline font-medium">KVKK Aydınlatma Metni</a>'ni
								okudum ve kabul ediyorum.
							</label>
						</div>

						<Button
							type="submit"
							class="w-full h-14 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-xl transition-all duration-300 group"
							disabled={isSubmitting}
						>
							{#if isSubmitting}
								<span class="animate-pulse">Gönderiliyor...</span>
							{:else}
								<span class="flex items-center justify-center gap-2">
									Gönder
									<ArrowUpRight class="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
								</span>
							{/if}
						</Button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Location Section -->
<section class="py-20 md:py-28 bg-muted/30">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12" use:animate={{ type: 'fade-up' }}>
				<h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Ofisimiz</h2>
				<p class="text-muted-foreground max-w-lg mx-auto">
					Sizi ofisimizde ağırlamaktan memnuniyet duyarız
				</p>
			</div>

			<!-- Map & Address Card -->
			<div
				use:animate={{ type: 'fade-up', delay: 100 }}
				class="grid md:grid-cols-3 gap-6"
			>
				<!-- Address Card -->
				<div class="bg-background rounded-3xl p-8 shadow-lg shadow-black/5 border border-border/50 flex flex-col justify-center">
					<div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
						<MapPin class="h-7 w-7 text-primary" />
					</div>
					<h3 class="text-xl font-bold text-foreground mb-3">Adres</h3>
					<p class="text-muted-foreground leading-relaxed mb-6">
						Kazım Karabekir Mah. İstasyon Cad. No:523/17 Tüm Ev Plaza<br />
						Darıca / Kocaeli
					</p>
					<a
						href="https://www.google.com/maps?q=Kazım+Karabekir+Mah.+İstasyon+Cad.+No:523/17+Tüm+Ev+Plaza+Darıca+Kocaeli"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 text-primary font-medium hover:underline"
					>
						Yol tarifi al
						<ArrowUpRight class="h-4 w-4" />
					</a>
				</div>

				<!-- Map -->
				<div class="md:col-span-2 rounded-3xl overflow-hidden shadow-lg shadow-black/5 border border-border/50 h-[300px] md:h-auto">
					<iframe
						src="https://www.google.com/maps?q=Kazım+Karabekir+Mah.+İstasyon+Cad.+No:523/17+Tüm+Ev+Plaza+Darıca+Kocaeli&output=embed"
						width="100%"
						height="100%"
						style="border:0; min-height: 300px;"
						allowfullscreen
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="Sistem Kentsel Dönüşüm Ofis Konumu"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
