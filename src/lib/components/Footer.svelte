<script lang="ts">
	import { Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-svelte';
	import Logo from './Logo.svelte';

	const navigation = {
		sayfalar: [
			{ href: '/', label: 'Anasayfa' },
			{ href: '/kurumsal', label: 'Kurumsal' },
			{ href: '/hizmetler', label: 'Hizmetler & Destekler' },
			{ href: '/ekibimiz', label: 'Ekibimiz' }
		],
		hizmetler: [
			{ href: '/hizmetler#hukuki', label: 'Hukuki Destek' },
			{ href: '/hizmetler#mimari', label: 'Mimari Destek' },
			{ href: '/hizmetler#degerleme', label: 'Değerleme Desteği' },
			{ href: '/hizmetler#destekler', label: 'Devlet Destekleri' }
		],
		destek: [
			{ href: '/ekibimiz#sss', label: 'Sıkça Sorulan Sorular' },
			{ href: '/iletisim', label: 'İletişim' }
		],
		yasal: [
			{ href: '/gizlilik', label: 'Gizlilik Politikası' },
			{ href: '/kvkk', label: 'KVKK Aydınlatma' },
			{ href: '/kullanim-kosullari', label: 'Kullanım Koşulları' }
		]
	};

	const currentYear = new Date().getFullYear();
</script>

<footer class="relative bg-[#1a1a2e] overflow-hidden">
	<!-- Decorative elements -->
	<div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>
	<div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple/10 rounded-full blur-3xl translate-y-1/2"></div>

	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
		<!-- Main Content -->
		<div class="py-20 md:py-24">
			<!-- Top Section - Brand & CTA -->
			<div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-16 pb-16 border-b border-white/10">
				<!-- Brand -->
				<div class="max-w-lg">
					<a href="/" class="inline-block transition-all duration-300 hover:opacity-80">
						<Logo size="lg" light={true} showTagline={true} />
					</a>
					<p class="mt-6 text-gray-400 leading-relaxed text-base">
						Kentsel dönüşüm sürecinizde güvenilir danışmanlık. Uzman kadromuzla A'dan Z'ye yanınızdayız.
					</p>
				</div>

				<!-- Quick Actions -->
				<div class="flex flex-wrap gap-4">
					<a
						href="mailto:info@sistemkentseldonusum.com"
						class="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300"
					>
						<div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
							<Mail class="h-6 w-6 text-primary group-hover:text-white transition-colors" />
						</div>
						<div>
							<p class="text-sm text-gray-500">E-posta</p>
							<p class="text-base font-medium text-white">info@sistemkentseldonusum.com</p>
						</div>
					</a>
					<a
						href="https://wa.me/90XXXXXXXXXX"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/40 hover:bg-white/10 transition-all duration-300"
					>
						<div class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
							<MessageCircle class="h-6 w-6 text-green-400 group-hover:text-white transition-colors" />
						</div>
						<div>
							<p class="text-sm text-gray-500">WhatsApp</p>
							<p class="text-base font-medium text-white">7/24 Destek</p>
						</div>
					</a>
				</div>
			</div>

			<!-- Navigation Grid -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20">
				<!-- Sayfalar -->
				<div>
					<h3 class="text-base font-semibold text-white mb-6">Sayfalar</h3>
					<ul class="space-y-4">
						{#each navigation.sayfalar as link}
							<li>
								<a href={link.href} class="text-base text-gray-400 hover:text-[#d4a5a5] transition-colors duration-200 inline-flex items-center gap-1.5 group">
									{link.label}
									<ArrowUpRight class="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Hizmetler -->
				<div>
					<h3 class="text-base font-semibold text-white mb-6">Hizmetler</h3>
					<ul class="space-y-4">
						{#each navigation.hizmetler as link}
							<li>
								<a href={link.href} class="text-base text-gray-400 hover:text-[#d4a5a5] transition-colors duration-200 inline-flex items-center gap-1.5 group">
									{link.label}
									<ArrowUpRight class="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Destek -->
				<div>
					<h3 class="text-base font-semibold text-white mb-6">Destek</h3>
					<ul class="space-y-4">
						{#each navigation.destek as link}
							<li>
								<a href={link.href} class="text-base text-gray-400 hover:text-[#d4a5a5] transition-colors duration-200 inline-flex items-center gap-1.5 group">
									{link.label}
									<ArrowUpRight class="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Yasal -->
				<div>
					<h3 class="text-base font-semibold text-white mb-6">Yasal</h3>
					<ul class="space-y-4">
						{#each navigation.yasal as link}
							<li>
								<a href={link.href} class="text-base text-gray-400 hover:text-[#d4a5a5] transition-colors duration-200 inline-flex items-center gap-1.5 group">
									{link.label}
									<ArrowUpRight class="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="py-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
			<div class="flex items-center gap-2 text-base text-gray-400">
				<MapPin class="h-5 w-5 text-[#d4a5a5]" />
				<span>Darıca / Kocaeli</span>
			</div>
			<p class="text-base text-gray-400">
				© {currentYear} Sistem Kentsel Dönüşüm
			</p>
		</div>
	</div>
</footer>
